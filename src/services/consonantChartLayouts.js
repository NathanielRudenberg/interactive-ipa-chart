// Places of articulation
const BILABIAL = "bilabial";
const LABIODENTAL = "labiodental";
const DENTAL = "dental";
const ALVEOLAR = "alveolar";
const POSTALVEOLAR = "postalveolar";
const RETROFLEX = "retroflex";
const PALATAL = "palatal";
const VELAR = "velar";
const UVULAR = "uvular";
const PHARYNGEAL = "pharyngeal";
const LARYNGEAL = "laryngeal";
const LABIAL = "labial";
const CORONAL = "coronal";

// Manners of articulation
const STOP = "stop";
const NASAL = "nasal";
const TRILL = "trill";
const TAP = "tap";
const FRICATIVE = "fricative";
const LATERAL_FRICATIVE = "lateral_fricative";
const APPROXIMANT = "approximant";
const LATERAL_APPROXIMANT = "lateral_approximant";
const SIBILANT_CONTINUANT = "sibilant-continuant";
const NON_SIBILANT_CONTINUANT = "non-sibilant-continuant";
const LATERAL = "lateral";
const RHOTIC = "rhotic";

const defaultLayout = {
    columns: [
        { key: BILABIAL, label: "Bilabial" },
        { key: LABIODENTAL, label: "Labiodental" },
        { key: DENTAL, label: "Dental" },
        { key: ALVEOLAR, label: "Alveolar" },
        { key: POSTALVEOLAR, label: "Postalveolar" },
        { key: RETROFLEX, label: "Retroflex" },
        { key: PALATAL, label: "Palatal" },
        { key: VELAR, label: "Velar" },
        { key: UVULAR, label: "Uvular" },
        { key: PHARYNGEAL, label: "Pharyngeal" },
        { key: LARYNGEAL, label: "Glottal" },
    ],
    rows: [
        { key: STOP, label: "Plosive", filters: { stop: true } },
        { key: NASAL, label: "Nasal", filters: { nasal: true } },
        { key: TRILL, label: "Trill", filters: { trill: true } },
        { key: TAP, label: "Tap / Flap", filters: { flap: true } },
        { key: FRICATIVE, label: "Fricative", filters: { lateral: false, fricative: true } },
        { key: LATERAL_FRICATIVE, label: "Lateral Fricative", filters: { lateral: true, fricative: true } },
        { key: APPROXIMANT, label: "Approximant", filters: { approximant: true, lateral: false } },
        { key: LATERAL_APPROXIMANT, label: "Lateral Approximant", filters: { lateral: true, approximant: true } },
    ],
    impossible: [
        { place: BILABIAL, manner: LATERAL_FRICATIVE }, // Bilabial trill
        { place: BILABIAL, manner: LATERAL_APPROXIMANT }, // Bilabial lateral approximant
        { place: LABIODENTAL, manner: LATERAL_FRICATIVE }, // Labiodental lateral fricative
        { place: LABIODENTAL, manner: LATERAL_APPROXIMANT }, // Labiodental lateral approximant
        { place: VELAR, manner: TRILL }, // Velar trill
        { place: VELAR, manner: TAP }, // Velar tap
        { place: PHARYNGEAL, manner: STOP, voiced: true }, // Pharyngeal plosive
        { place: PHARYNGEAL, manner: NASAL }, // Pharyngeal nasal
        { place: PHARYNGEAL, manner: LATERAL_FRICATIVE }, // Pharyngeal lateral fricative
        { place: PHARYNGEAL, manner: LATERAL_APPROXIMANT }, // Pharyngeal lateral approximant
        { place: LARYNGEAL, manner: STOP, voiced: true }, // Voiced glottal plosive
        { place: LARYNGEAL, manner: NASAL }, // Glottal nasal
        { place: LARYNGEAL, manner: TRILL }, // Glottal trill
        { place: LARYNGEAL, manner: TAP }, // Glottal tap
        { place: LARYNGEAL, manner: LATERAL_FRICATIVE }, // Glottal lateral fricative
        { place: LARYNGEAL, manner: APPROXIMANT }, // Glottal approximant
        { place: LARYNGEAL, manner: LATERAL_APPROXIMANT }, // Glottal lateral approximant
    ],
};

const icelandicLayout = {
    columns: [
        { key: LABIAL, label: "Labial" },
        { key: CORONAL, label: "Coronal" },
        { key: PALATAL, label: "Palatal" },
        { key: VELAR, label: "Velar" },
        { key: LARYNGEAL, label: "Glottal" },
    ],
    rows: [
        { key: NASAL, label: "Nasal", filters: { nasal: true } },
        { key: STOP, label: "Plosive", filters: { stop: true } },
        { key: SIBILANT_CONTINUANT, label: "Sibilant Continuant", filters: { continuant: true, sibilant: true } },
        { key: NON_SIBILANT_CONTINUANT, label: "Non-Sibilant Continuant", filters: { continuant: true, sibilant: false } },
        { key: LATERAL, label: "Lateral", filters: { lateral: true } },
        { key: RHOTIC, label: "Rhotic", filters: { rhotic: true } },
    ],
};

const ConsonantChartLayouts = {};
ConsonantChartLayouts.default = defaultLayout;
ConsonantChartLayouts.spanish = defaultLayout;
ConsonantChartLayouts.icelandic = icelandicLayout;
ConsonantChartLayouts.test = defaultLayout;

export default ConsonantChartLayouts;