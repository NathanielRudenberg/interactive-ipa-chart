const CLOSE = 'high';
const NEAR_CLOSE = 'nearhigh';
const CLOSE_MID = 'highmid';
const MID = 'mid';
const OPEN_MID = 'lowmid';
const NEAR_OPEN = 'nearlow';
const OPEN = 'low';

const FRONT = 'front';
const NEAR_FRONT = 'nearfront';
const CENTRAL = 'central';
const NEAR_BACK = 'nearback';
const BACK = 'back';

const UNROUNDED = 'unrounded';
const ROUNDED = 'rounded';

export default {
    height: [
        { key: CLOSE, label: 'close' },
        { key: NEAR_CLOSE, label: 'near-close' },
        { key: CLOSE_MID, label: 'close-mid' },
        { key: MID, label: 'mid' },
        { key: OPEN_MID, label: 'open-mid' },
        { key: NEAR_OPEN, label: 'near-open' },
        { key: OPEN, label: 'open' }
    ],
    backness: [
        { key: FRONT, label: 'front' },
        { key: NEAR_FRONT, label: 'near-front' },
        { key: CENTRAL, label: 'central' },
        { key: NEAR_BACK, label: 'near-back' },
        { key: BACK, label: 'back' }
    ],
    roundedness: [
        { key: UNROUNDED, label: 'unrounded' },
        { key: ROUNDED, label: 'rounded' }
    ]
}