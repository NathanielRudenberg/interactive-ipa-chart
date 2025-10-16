#!/usr/bin/env python
import os
import parselmouth
import json
import numpy as np
import soundfile as sf


def analyze_vowel_formants(file_path, maximum_formant, formant_dynamic_range=30.0):
    """
    Analyzes a single audio file to find the mean F1 and F2 values.
    Returns a tuple of (base_filename, data_dictionary) or (None, None).
    """

    window_length = 0.025
    time_step = window_length / 4
    max_number_of_formants = 5.0
    pre_emphasis_from = 50.0

    try:
        data, samplerate = sf.read(file_path)
        sound = parselmouth.Sound(data, sampling_frequency=samplerate)

        # Create Formant object
        # formants = sound.to_formant_burg(
        #     time_step=time_step,
        #     max_number_of_formants=max_number_of_formants,
        #     maximum_formant=maximum_formant,
        #     window_length=window_length,
        #     pre_emphasis_from=pre_emphasis_from,
        # )
        formants = get_formants(
            sound,
            maximum_formant,
            window_length,
            max_number_of_formants,
            pre_emphasis_from,
        )

        # Extract Praat's internal linear-scale intensity values
        formant_table = parselmouth.praat.call(
            formants, "Down to Table", True, True, 6, True, 15, True, 3, True
        )
        frame_intensities = np.array(
            [
                float(
                    parselmouth.praat.call(
                        formant_table, "Get value", i + 1, "intensity"
                    )
                )
                for i in range(formants.get_number_of_frames())
            ]
        )

        # Calculate the threshold for the linear intensity scale
        max_intensity = np.max(frame_intensities)
        intensity_threshold = max_intensity / (10 ** (formant_dynamic_range / 10))

        # Collect formant values from the frames above the threshold
        f1_voiced = []
        f2_voiced = []
        for i, intensity_val in enumerate(frame_intensities):
            if intensity_val >= intensity_threshold:
                time_of_frame = formants.get_time_from_frame_number(i + 1)
                f1 = formants.get_value_at_time(1, time_of_frame)
                f2 = formants.get_value_at_time(2, time_of_frame)

                if not np.isnan(f1) and not np.isnan(f2):
                    f1_voiced.append(f1)
                    f2_voiced.append(f2)

        # 5. Calculate the mean of the voiced frames
        f1_mean = np.mean(f1_voiced) if f1_voiced else 0.0
        f2_mean = np.mean(f2_voiced) if f2_voiced else 0.0

        full_filename = os.path.basename(file_path)
        base_filename = os.path.splitext(full_filename)[0]

        # Store raw F1 and F2
        data = {
            "raw_f1": f1_mean,
            "raw_f2": f2_mean,
        }
        return base_filename, data

    except Exception as e:
        print(f"  -> Could not analyze '{os.path.basename(file_path)}'. Error: {e}")
        return None, None


def get_max_formant_setting(speaker_flag: str | None = None) -> float:
    """
    Set the maximum formant frequency based on speaker classification
    """

    # Default if there is no speaker flag
    max_formant = 5500.0
    if "SPEAKER_TYPE" in globals():
        speaker_flag = globals()["SPEAKER_TYPE"]

        if speaker_flag == "M":
            max_formant = 4500.0
        elif speaker_flag == "F":
            max_formant = 5500.0
        elif speaker_flag == "C":
            max_formant = 6000.0

    print(
        f"  -> Using max formant {max_formant}Hz based on speaker flag '{speaker_flag}'."
    )
    return max_formant


def lobanov_normalization(raw_vowel_data, speaker_stats):
    """
    Applies Z-score normalization to vowel formant data.
    """
    if not raw_vowel_data:
        return {}

    f1_value = raw_vowel_data["raw_f1"]
    f2_value = raw_vowel_data["raw_f2"]

    mu_f1 = speaker_stats["f1"]["mean"]
    sigma_f1 = speaker_stats["f1"]["stdev"]
    mu_f2 = speaker_stats["f2"]["mean"]
    sigma_f2 = speaker_stats["f2"]["stdev"]

    norm_f1 = (f1_value - mu_f1) / sigma_f1 if sigma_f1 != 0 else 0
    norm_f2 = (f2_value - mu_f2) / sigma_f2 if sigma_f2 != 0 else 0

    return {
        "mean_f1": round(f1_value, 2),
        "mean_f2": round(f2_value, 2),
        "norm_f1": round(norm_f1, 4),
        "norm_f2": round(norm_f2, 4),
    }


def calculate_speaker_stats(raw_vowel_data):
    """
    Calculates the mean and standard deviation for F1 and F2 across a set of vowel data.
    """
    if not raw_vowel_data:
        return None

    f1_values = [data["raw_f1"] for data in raw_vowel_data.values()]
    f2_values = [data["raw_f2"] for data in raw_vowel_data.values()]

    mu_f1 = np.mean(f1_values)
    sigma_f1 = np.std(f1_values)
    mu_f2 = np.mean(f2_values)
    sigma_f2 = np.std(f2_values)

    return {
        "f1": {"mean": round(mu_f1, 2), "stdev": round(sigma_f1, 2)},
        "f2": {"mean": round(mu_f2, 2), "stdev": round(sigma_f2, 2)},
    }


def get_formants(
    sound: parselmouth.Sound,
    maximum_formant: float,
    window_length: float = 0.025,
    max_number_of_formants: float = 5.0,
    pre_emphasis_from: float = 50.0,
):
    analysis_time_step = window_length / 4
    return sound.to_formant_burg(
        time_step=analysis_time_step,
        max_number_of_formants=max_number_of_formants,
        maximum_formant=maximum_formant,
        window_length=window_length,
        pre_emphasis_from=pre_emphasis_from,
    )
