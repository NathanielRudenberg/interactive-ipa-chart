import os
import parselmouth
import json
import numpy as np  # Used for mean and standard deviation calculations
import soundfile as sf  # For reading audio files

AUDIO_ROOT_DIRECTORY = "/audio/practiceCalibration"
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
    f1_values = [data["raw_f1"] for data in raw_vowel_data.values()]
    f2_values = [data["raw_f2"] for data in raw_vowel_data.values()]

    # 2. Calculate the speaker's mean (mu) and standard deviation (sigma)
    # np.std uses the default divisor N (population std dev), which is standard for Lobanov.
    mu_f1 = np.mean(f1_values)
    sigma_f1 = np.std(f1_values)
    mu_f2 = np.mean(f2_values)
    sigma_f2 = np.std(f2_values)

    # Handle zero division: if sigma is 0, set it to a small number
    if sigma_f1 == 0:
        sigma_f1 = 0.001
    if sigma_f2 == 0:
        sigma_f2 = 0.001

    normalized_vowel_data = {}

    # 3. Apply the Z-score formula to every vowel: F_norm = (F_raw - mu) / sigma
    for key, data in raw_vowel_data.items():
        norm_f1 = (data["raw_f1"] - mu_f1) / sigma_f1
        norm_f2 = (data["raw_f2"] - mu_f2) / sigma_f2

        # Store both raw and normalized values in the final output
        normalized_vowel_data[key] = {
            "mean_f1": round(data["raw_f1"], 2),
            "mean_f2": round(data["raw_f2"], 2),
            "norm_f1": round(norm_f1, 4),
            "norm_f2": round(norm_f2, 4),
        }

    speaker_stats = {
        "f1": {"mean": round(mu_f1, 2), "stdev": round(sigma_f1, 2)},
        "f2": {"mean": round(mu_f2, 2), "stdev": round(sigma_f2, 2)},
    }

    return {"vowels": normalized_vowel_data, "stats": speaker_stats}


def process_directory(root_dir):
    """
    Walks through a directory tree, analyzing vowel files in each subfolder.
    """
    print(f"Checking for files in: {root_dir}")
    print(f"Files found: {os.listdir(root_dir)}")

    raw_vowel_data = {}

    if not os.path.exists(root_dir):
        return None

    for filename in os.listdir(root_dir):
        # This will hold the RAW data for the folder/speaker
        if filename.endswith((".wav")):
            full_path = os.path.join(root_dir, filename)
            max_f_setting = get_max_formant_setting(root_dir)
            base_filename, analysis_data = analyze_vowel_formants(
                full_path, max_f_setting
            )
            if base_filename:
                raw_vowel_data[base_filename] = analysis_data

    if raw_vowel_data:
        # 1. Perform normalization on all collected raw data for this speaker
        return perform_lobanov_normalization(raw_vowel_data)


print("I will now process the directory.")
result = process_directory(AUDIO_ROOT_DIRECTORY)
json_output = json.dumps(result) if result else "{}"

json_output

