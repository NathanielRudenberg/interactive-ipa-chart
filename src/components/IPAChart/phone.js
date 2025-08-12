export default class Phone {
    constructor ({
        diacritic = false, unintelligible = false, unreleased = false,
        consonant = false, vowel = false, glide = false, cover = false,
        schwa = false, labial = false, bilabial = false, rounded = false,
        unrounded = false, palatal = false, dorsal = false, velar = false,
        uvular = false, guttural = false, pharyngeal = false, laryngeal = false,
        epiglottal = false, dental = false, labiodental = false,
        interdental = false, apical = false, laminal = false, coronal = false,
        lingual = false, anterior = false, posterior = false, alveolar = false,
        alveopalatal = false, retroflex = false, distributed = false,
        grooved = false, voiceless = false, voiced = false, aspirated = false,
        plain = false, weaklyaspirated = false, unaspirated = false,
        approximant = false, liquid = false, lateral = false, rhotic = false,
        stop = false, continuant = false, obstruent = false, sonorant = false,
        fricative = false, affricate = false, click = false, implosive = false,
        flap = false, trill = false, ejective = false, nasal = false,
        oral = false, prenasalized = false, strident = false, low = false,
        mid = false, high = false, tense = false, atr = false, rtr = false,
        lax = false, front = false, central = false, back = false,
        derhoticized = false, syllabic = false, nonsyllabic = false,
        advanced = false, retracted = false, lowered = false, raised = false,
        fronted = false, backed = false, morerounded = false,
        lessrounded = false, long = false, halflong = false, extrashort = false,
        breathyvoiced = false, creakyvoiced = false, prstress = false,
        secstress = false, toneglobalrise = false, tonedownstep = false,
        tonefalling = false, tonerisingfalling = false,
        tonefallingrising = false, tonelowrising = false,
        tonehighrising = false, tonerising = false, tonehigh = false,
        tonemid = false, toneglobalfall = false, toneextrahigh = false,
        tonelow = false, toneupstep = false, toneextralow = false,
        tone1 = false, tone2 = false, tone3 = false, tone4 = false,
        tone5 = false, tone6 = false, tone7 = false, tone8 = false,
        tone9 = false, pause = false, denasalized = false, egressive = false,
        ingressive = false, labialspread = false, lowerdental = false,
        narealfricative = false, percussive = false, sliding = false,
        strongarticulation = false, weakarticulation = false, distorted = false,
        subapical = false, velopharyngeal = false,
        velopharyngealfricative = false, whistled = false, lenis = false,
        sandhi = false, quasiresonant = false, semiresonant = false,
        raspberry = false, transition = false, spirant = false,
        nearhigh = false, nearlow = false, nearfront = false, nearback = false,
        symbol = '',
    }) {
        this.diacritic = diacritic;
        this.unintelligible = unintelligible;
        this.unreleased = unreleased;
        this.consonant = consonant;
        this.vowel = vowel;
        this.glide = glide;
        this.cover = cover;
        this.schwa = schwa;
        this.labial = labial;
        this.bilabial = bilabial;
        this.rounded = rounded;
        this.unrounded = unrounded;
        this.palatal = palatal;
        this.dorsal = dorsal;
        this.velar = velar;
        this.uvular = uvular;
        this.guttural = guttural;
        this.pharyngeal = pharyngeal;
        this.laryngeal = laryngeal;
        this.epiglottal = epiglottal;
        this.dental = dental;
        this.labiodental = labiodental;
        this.interdental = interdental;
        this.apical = apical;
        this.laminal = laminal;
        this.coronal = coronal;
        this.lingual = lingual;
        this.anterior = anterior;
        this.posterior = posterior;
        this.alveolar = alveolar;
        this.alveopalatal = alveopalatal;
        this.retroflex = retroflex;
        this.distributed = distributed;
        this.grooved = grooved;
        this.voiceless = voiceless;
        this.voiced = voiced;
        this.aspirated = aspirated;
        this.plain = plain;
        this.weaklyaspirated = weaklyaspirated;
        this.unaspirated = unaspirated;
        this.approximant = approximant;
        this.liquid = liquid;
        this.lateral = lateral;
        this.rhotic = rhotic;
        this.stop = stop;
        this.continuant = continuant;
        this.obstruent = obstruent;
        this.sonorant = sonorant;
        this.fricative = fricative;
        this.affricate = affricate;
        this.click = click;
        this.implosive = implosive;
        this.flap = flap;
        this.trill = trill;
        this.ejective = ejective;
        this.nasal = nasal;
        this.nearback = nearback;
        this.nearfront = nearfront;
        this.nearhigh = nearhigh;
        this.nearlow = nearlow;
        this.oral = oral;
        this.prenasalized = prenasalized;
        this.strident = strident;
        this.low = low;
        this.mid = mid;
        this.high = high;
        this.tense = tense;
        this.atr = atr;
        this.rtr = rtr;
        this.lax = lax;
        this.front = front;
        this.central = central;
        this.back = back;
        this.derhoticized = derhoticized;
        this.syllabic = syllabic;
        this.nonsyllabic = nonsyllabic;
        this.advanced = advanced;
        this.retracted = retracted;
        this.lowered = lowered;
        this.raised = raised;
        this.fronted = fronted;
        this.backed = backed;
        this.morerounded = morerounded;
        this.lessrounded = lessrounded;
        this.long = long;
        this.halflong = halflong;
        this.extrashort = extrashort;
        this.breathyvoiced = breathyvoiced;
        this.creakyvoiced = creakyvoiced;
        this.prstress = prstress;
        this.secstress = secstress;
        this.toneglobalrise = toneglobalrise;
        this.tonedownstep = tonedownstep;
        this.tonefalling = tonefalling;
        this.tonerisingfalling = tonerisingfalling;
        this.tonefallingrising = tonefallingrising;
        this.tonelowrising = tonelowrising;
        this.tonehighrising = tonehighrising;
        this.tonerising = tonerising;
        this.tonehigh = tonehigh;
        this.tonemid = tonemid;
        this.toneglobalfall = toneglobalfall;
        this.toneextrahigh = toneextrahigh;
        this.tonelow = tonelow;
        this.toneupstep = toneupstep;
        this.toneextralow = toneextralow;
        this.tone1 = tone1;
        this.tone2 = tone2;
        this.tone3 = tone3;
        this.tone4 = tone4;
        this.tone5 = tone5;
        this.tone6 = tone6;
        this.tone7 = tone7;
        this.tone8 = tone8;
        this.tone9 = tone9;
        this.pause = pause;
        this.denasalized = denasalized;
        this.egressive = egressive;
        this.ingressive = ingressive;
        this.labialspread = labialspread;
        this.lowerdental = lowerdental;
        this.narealfricative = narealfricative;
        this.percussive = percussive;
        this.sliding = sliding;
        this.strongarticulation = strongarticulation;
        this.weakarticulation = weakarticulation;
        this.distorted = distorted;
        this.subapical = subapical;
        this.velopharyngeal = velopharyngeal;
        this.velopharyngealfricative = velopharyngealfricative;
        this.whistled = whistled;
        this.lenis = lenis;
        this.sandhi = sandhi;
        this.quasiresonant = quasiresonant;
        this.semiresonant = semiresonant;
        this.raspberry = raspberry;
        this.transition = transition;
        this.spirant = spirant;
        this.symbol = symbol;
    }
}