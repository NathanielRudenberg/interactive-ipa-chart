print("Importing packages...")

import parselmouth
import numpy as np
import matplotlib.pyplot as plt
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

def draw_spectrogram(spectrogram, dynamic_range=70):
    X, Y = spectrogram.x_grid(), spectrogram.y_grid()
    sg_db = 10 * np.log10(spectrogram.values)
    plt.pcolormesh(X, Y, sg_db, vmin=sg_db.max() - dynamic_range, cmap='binary')
    plt.ylim([spectrogram.ymin, spectrogram.ymax])
    plt.xlabel("time [s]")
    plt.ylabel("frequency [Hz]")

def draw_intensity(intensity):
    plt.plot(intensity.xs(), intensity.values.T, linewidth=3, color='w')
    plt.plot(intensity.xs(), intensity.values.T, linewidth=1, color='r')
    plt.grid(False)
    plt.ylim(0)
    plt.ylabel("intensity [dB]")

print("Loading sound...")
snd = parselmouth.Sound("/audio/the_north_wind_and_the_sun.wav")
print("Sound loaded.")

intensity = snd.to_intensity()
spectrogram = snd.to_spectrogram()
plt.figure()
draw_spectrogram(spectrogram)
plt.twinx()
draw_intensity(intensity)
plt.xlim([snd.xmin, snd.xmax])
plt.show()
plt.close()
