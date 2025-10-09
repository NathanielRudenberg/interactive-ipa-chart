import os
import parselmouth
import json
import numpy as np  # Used for mean and standard deviation calculations
import soundfile as sf  # For reading audio files

AUDIO_ROOT_DIRECTORY = "/audio/userVowels"
SPEAKER_METADATA_FILENAME = "speaker.txt"  # File containing 'M', 'F', or 'C'
# -----------------------------------------------------------------


def get_max_formant_setting(filepath):
    """
    Reads the speaker file in the current directory and sets the maximum
    formant frequency based on the classification. (Logic kept the same)
    """

    max_formant = 5500.0

    speaker_flag = None
    if "SPEAKER_TYPE" in globals():
        speaker_flag = globals()["SPEAKER_TYPE"]

    match speaker_flag:
        case "M":
            max_formant = 4500.0
        case "F":
            max_formant = 5500.0
        case "C":
            max_formant = 6000.0
        case _:
            max_formant = 5500.0

    print(
        f"  -> Using max formant {max_formant}Hz based on '{speaker_flag}' in Pyodide globals."
    )

    return max_formant


def analyze_vowel_formants(file_path, maximum_formant):
    """
    Analyzes a single audio file to find the mean F1 and F2 values.
    Returns a tuple of (base_filename, data_dictionary) or (None, None).
    """

    window_length = 0.025
    max_number_of_formants = 5.0
    pre_emphasis_from = 50.0

    try:
        data, samplerate = sf.read(file_path)
        sound = parselmouth.Sound(data, sampling_frequency=samplerate)
        formants = sound.to_formant_burg(
            max_number_of_formants=max_number_of_formants,
            maximum_formant=maximum_formant,
            window_length=window_length,
            pre_emphasis_from=pre_emphasis_from,
        )

        f1_mean = parselmouth.praat.call(formants, "Get mean", 1, 0, 0, "Hertz")
        f2_mean = parselmouth.praat.call(formants, "Get mean", 2, 0, 0, "Hertz")

        full_filename = os.path.basename(file_path)
        base_filename = os.path.splitext(full_filename)[0]

        # Store raw F1 and F2
        data = {
            "raw_f1": f1_mean,
            "raw_f2": f2_mean,
            "norm_f1": None,
            "norm_f2": None,
        }
        return base_filename, data

    except Exception as e:
        print(f"  -> Could not analyze '{os.path.basename(file_path)}'. Error: {e}")
        return None, None


def perform_lobanov_normalization(raw_vowel_data):
    """
    Calculates the speaker's mean and std dev, then applies Z-score normalization.
    """
    if not raw_vowel_data:
        return {}

    # 1. Collect all F1 and F2 data for the speaker
    f1_value = raw_vowel_data["raw_f1"]
    f2_value = raw_vowel_data["raw_f2"]

    if "SPEAKER_STATS" in globals():
        statsProxy = globals()["SPEAKER_STATS"]
        stats = statsProxy.to_py()

        mu_f1 = stats["f1"]["mean"]
        sigma_f1 = stats["f1"]["stdev"]
        mu_f2 = stats["f2"]["mean"]
        sigma_f2 = stats["f2"]["stdev"]
    else:
        # Throw error if stats are not provided
        raise ValueError("SPEAKER_STATS not found in globals()")

    # 3. Apply the Z-score formula to every vowel: F_norm = (F_raw - mu) / sigma
    norm_f1 = (f1_value - mu_f1) / sigma_f1
    norm_f2 = (f2_value - mu_f2) / sigma_f2

    # Store both raw and normalized values in the final output
    return {
        "mean_f1": round(f1_value, 2),
        "mean_f2": round(f2_value, 2),
        "norm_f1": round(norm_f1, 4),
        "norm_f2": round(norm_f2, 4),
    }


def processAudioFile():
    """
    Analyze and normalize the formants in the user's recorded audio
    """
    raw_vowel_data = {}
    filePath = AUDIO_ROOT_DIRECTORY + "/vowel.wav"
    maxFormant = get_max_formant_setting(AUDIO_ROOT_DIRECTORY)
    baseFilename, analysisData = analyze_vowel_formants(filePath, maxFormant)
    if baseFilename:
        raw_vowel_data = analysisData

    if raw_vowel_data:
        return perform_lobanov_normalization(raw_vowel_data)


result = processAudioFile()
json_output = json.dumps(result) if result else "{}"
json_output
