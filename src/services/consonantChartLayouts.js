const defaultLayout = {
    columns: [
        { key: "bilabial", label: "Bilabial" },
        { key: "labiodental", label: "Labiodental" },
        { key: "dental", label: "Dental" },
        { key: "alveolar", label: "Alveolar" },
        { key: "postalveolar", label: "Postalveolar" },
        { key: "retroflex", label: "Retroflex" },
        { key: "palatal", label: "Palatal" },
        { key: "velar", label: "Velar" },
        { key: "uvular", label: "Uvular" },
        { key: "pharyngeal", label: "Pharyngeal" },
        { key: "laryngeal", label: "Glottal" },
    ],
    rows: [
        { key: "stop", label: "Plosive", filters: {stop: true} },
        { key: "nasal", label: "Nasal", filters: {nasal: true} },
        { key: "trill", label: "Trill", filters: {trill: true} },
        { key: "tap", label: "Tap / Flap", filters: {flap: true} },
        { key: "fricative", label: "Fricative", filters: {lateral: false, fricative: true} },
        { key: "lateral_fricative", label: "Lateral Fricative", filters: {lateral: true, fricative: true} },
        { key: "approximant", label: "Approximant", filters: {approximant: true, lateral: false} },
        { key: "lateral_approximant", label: "Lateral Approximant", filters: {lateral: true, approximant: true} },
    ],
    impossible: [
        { place: "bilabial", manner: "lateral_fricative" }, // Bilabial trill
        { place: "bilabial", manner: "lateral_approximant" }, // Bilabial lateral approximant
        { place: "labiodental", manner: "lateral_fricative" }, // Labiodental lateral fricative
        { place: "labiodental", manner: "lateral_approximant" }, // Labiodental lateral approximant
        { place: "velar", manner: "trill" }, // Velar trill
        { place: "velar", manner: "tap" }, // Velar tap
        { place: "pharyngeal", manner: "stop", voiced: true }, // Pharyngeal plosive
        { place: "pharyngeal", manner: "nasal" }, // Pharyngeal nasal
        { place: "pharyngeal", manner: "lateral_fricative" }, // Pharyngeal lateral fricative
        { place: "pharyngeal", manner: "lateral_approximant" }, // Pharyngeal lateral approximant
        { place: "laryngeal", manner: "stop", voiced: true }, // Voiced glottal plosive
        { place: "laryngeal", manner: "nasal" }, // Glottal nasal
        { place: "laryngeal", manner: "trill" }, // Glottal trill
        { place: "laryngeal", manner: "tap" }, // Glottal tap
        { place: "laryngeal", manner: "lateral_fricative" }, // Glottal lateral fricative
        { place: "laryngeal", manner: "approximant" }, // Glottal approximant
        { place: "laryngeal", manner: "lateral_approximant" }, // Glottal lateral approximant
    ],
};

const icelandicLayout = {
    columns: [
        { key: "labial", label: "Labial" },
        { key: "coronal", label: "Coronal" },
        { key: "palatal", label: "Palatal" },
        { key: "velar", label: "Velar" },
        { key: "laryngeal", label: "Glottal" },
    ],
    rows: [
        { key: "nasal", label: "Nasal", filters: {nasal: true} },
        { key: "stop", label: "Plosive", filters: {stop: true} },
        { key: "sibilant-continuant", label: "Sibilant Continuant", filters: {continuant: true, sibilant: true} },
        { key: "non-sibilant-continuant", label: "Non-Sibilant Continuant", filters: {continuant: true, sibilant: false} },
        { key: "lateral", label: "Lateral", filters: {lateral: true} },
        { key: "rhotic", label: "Rhotic", filters: {rhotic: true} },
    ],
};

const ConsonantChartLayouts = {};
ConsonantChartLayouts.default = defaultLayout;
ConsonantChartLayouts.spanish = defaultLayout;
ConsonantChartLayouts.icelandic = icelandicLayout;
ConsonantChartLayouts.test = defaultLayout;

export default ConsonantChartLayouts;