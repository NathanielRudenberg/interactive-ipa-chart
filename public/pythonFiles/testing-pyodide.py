print("Importing packages...")

import math
import parselmouth
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.colors as colors
import seaborn as sns
from js import document
import os

print("Packages imported.")

# Get a reference to the plot container
plot_container = document.getElementById("plot-container")

# Clear any existing content in the plot container
plot_container.innerHTML = ""

# Set the target element for Matplotlib
document.pyodideMplTarget = plot_container

sns.set() # Use seaborn's default style to make attractive graphs
plt.rcParams['figure.dpi'] = 100 # Show nicely large images in this notebook

print("Loading sound...")
snd = parselmouth.Sound("/audio/the_north_wind_and_the_sun.wav")
print("Sound loaded.")

pre_emphasized_snd = snd.copy()
pre_emphasized_snd.pre_emphasize()

duration = snd.get_total_duration()
maximum_frequency = 5000.0 # Maximum frequency to display (Hz)
num_time_steps = 1000
num_freq_steps = 250
spectrogram_window_length = 0.005  # Window length for spectrogram in seconds (25 ms)
time_step = duration / num_time_steps  # Time step in seconds
frequency_step = maximum_frequency / num_freq_steps  # Frequency step in Hz
window_shape = parselmouth.SpectralAnalysisWindowShape.GAUSSIAN # Window shape
dynamic_range = 70.0       # Dynamic range in dB for plotting

# Formant extraction parameters
window_length = 0.025  # Window length in seconds
max_number_of_formants = 5.0
maximum_formant = 5500.0
pre_emphasis_from = 50.0

def draw_spectrogram(spectrogram, dynamic_range=70):
    X, Y = spectrogram.x_grid(), spectrogram.y_grid()
    sg_db = 10 * np.log10(spectrogram.values)

    vmax = sg_db.max()
    vmin = vmax - dynamic_range

    # Create the PowerNorm object to apply gamma correction
    norm = colors.PowerNorm(gamma=0.75, vmin=vmin, vmax=vmax)

    # plt.pcolormesh(X, Y, sg_db, vmin=sg_db.max() - dynamic_range, cmap='Greys')
    plt.pcolormesh(X, Y, sg_db, cmap='Greys', norm=norm, shading='flat')
    
    plt.ylim([spectrogram.ymin, spectrogram.ymax])
    plt.xlabel("time [s]")
    plt.ylabel("frequency [Hz]")

def draw_formants(formants, intensity, formant_dynamic_range=30.0):
    n_formants = math.floor(max_number_of_formants)
    times = formants.ts()

    for formant_number in range(n_formants):
        # Extract selected formant contour, and
        # replace unvoiced samples by NaN to not plot
        f = np.vectorize(lambda x: formants.get_value_at_time(formant_number + 1, x))
        formant_values = f(times)
        innerColor = 'w' if formant_number % 2 == 1 else '#f00'
        outerColor = '#f00' if formant_number % 2 == 1 else 'w'
        plt.plot(formants.ts(), formant_values, 'o', markersize=3, color=outerColor)
        plt.plot(formants.ts(), formant_values, 'o', markersize=2, color=innerColor)
    plt.ylim(0, maximum_frequency)
    plt.grid(False)

spectrogram = pre_emphasized_snd.to_spectrogram(
    window_length=spectrogram_window_length,
    time_step=time_step,
    frequency_step=frequency_step,
    window_shape=window_shape,
    maximum_frequency=maximum_frequency
)

intensity = snd.to_intensity()

# Extracting formants
print("Extracting formants...")
formants = snd.to_formant_burg(
    max_number_of_formants=max_number_of_formants,
    maximum_formant=maximum_formant,
    window_length=window_length,
    pre_emphasis_from=pre_emphasis_from)

print("Formants extracted.")
print("Drawing...")

plt.figure(figsize=(18, 5))

ax = plt.gca()
ax.set_facecolor('w')

draw_spectrogram(spectrogram)
draw_formants(formants, intensity)
plt.xlim([snd.xmin, snd.xmax])
plt.show()
plt.close()
print("Done.")



# wild idea to help with dynamic range:

# import parselmouth

# # Load a sound file
# sound = parselmouth.Sound("my_audio.wav")

# # Get intensity object
# intensity = sound.to_intensity()

# # Get formant object
# formant = sound.to_formant_burg()

# # Define your dynamic range threshold (e.g., 20 dB)
# dynamic_range_dB = 20

# # Get the maximum intensity of the sound
# max_intensity_dB = intensity.get_maximum()

# # Initialize empty lists for filtered formant data
# filtered_times = []
# filtered_f1 = []
# filtered_f2 = []

# # Loop through each frame of the formant object
# for frame_idx in range(formant.get_number_of_frames()):
#     t = formant.get_time_from_frame_number(frame_idx + 1)
    
#     # Get the intensity at the current frame
#     frame_intensity_dB = intensity.get_value_at_time(t)
    
#     # Only use the frame if its intensity is within the dynamic range
#     if frame_intensity_dB >= (max_intensity_dB - dynamic_range_dB):
#         f1_value = formant.get_value_at_time(1, t)
#         f2_value = formant.get_value_at_time(2, t)
        
#         # Avoid NaN values if they still occur
#         if not (f1_value is None or f2_value is None):
#             filtered_times.append(t)
#             filtered_f1.append(f1_value)
#             filtered_f2.append(f2_value)

# # Now you can use the filtered_times, filtered_f1, and filtered_f2 lists for plotting or analysis
# # For example, to print the average F1:
# if filtered_f1:
#     average_f1 = sum(filtered_f1) / len(filtered_f1)
#     print(f"Average F1 within the dynamic range: {average_f1} Hz")