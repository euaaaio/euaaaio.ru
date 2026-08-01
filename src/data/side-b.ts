import type { SideData } from '@/types/sleeve'
import { dispatches, lastBuild, lastPlayed, lastShot } from './live'

/** Two non-breaking spaces: column-like alignment that survives collapsing. */
const gap = '  '

const sideB: SideData = {
  variant: 'b',
  heads: {
    a: 'SUPREMATIST',
    b: 'LAST PLAYED',
    c: 'LAST SHOT',
  },
  ruler: { start: 270, step: 10, count: 27 },
  footer: {
    catalog: 'EUAAAIO/005 — SIDE B',
    note: '1995 — 2026 — READY TO DIE',
  },

  credits: [
    {
      label: 'SIDE B:',
      row: 1,
      lines: ['UPDATES ITSELF', 'STATIC UP THERE, ALIVE DOWN HERE'],
    },
    {
      label: 'SOURCES:',
      row: 3,
      lines: ['SPOTIFY API', 'GITHUB API', 'A CAMERA ROLL', 'A TIRED BRAIN'],
    },
    {
      label: 'CADENCE:',
      row: 6,
      lines: ['ON EVERY BUILD'],
    },
    {
      label: 'LAST BUILD:',
      row: 7,
      lines: [lastBuild],
    },
    {
      label: 'MAGAZINE:',
      row: 9,
      lines: [
        'SUPREMATIST — A DIGITAL MAGAZINE',
        'ON INSTAGRAM AND TELEGRAM',
        'THE SITE IS RESTING',
      ],
    },
    {
      label: 'LAB:',
      row: 12,
      lines: ['COSMOS.SO/AOIESTUDIO'],
    },
    {
      label: 'LINER NOTES:',
      row: 15,
      lines: [
        'THANKS TO ANNA SHARAPOVA',
        'ANDREY SITNIK',
        'THE NANO STORES CORE TEAM',
        'THE LOGUX CORE TEAM',
        'FANS ENGINEERING',
        'EVERYONE WHO EVER MERGED MY PR',
        'AND THE COFFEE MACHINE',
      ],
    },
    {
      label: 'PRESSED BY:',
      row: 21,
      lines: ['VERCEL, UNLIMITED RUN', 'NO REPRESSES, ONLY REDEPLOYS'],
    },
  ],

  blocks: [
    // ---- B1. SUPREMATIST ----
    {
      column: 'a',
      row: 2,
      span: 2,
      lines: [
        'NO ORNAMENT',
        'NOT A PICTURE TO HANG',
        'BUT A SQUARE TO GIVE',
        "HAVEN'T GOT ONE?",
        'START FROM ZERO',
      ],
    },
    {
      column: 'a',
      row: 5,
      span: 2,
      lines: [
        'IN DECEMBER 1915 MALEVICH HUNG A SQUARE',
        'IN THE RED CORNER, WHERE THE ICON GOES',
        '"0,10" — THE LAST FUTURIST EXHIBITION',
        'THIRTY-NINE PAINTINGS AND A NEW ZERO',
      ],
    },
    {
      column: 'a',
      row: 8,
      lines: ['BLACK SQUARE', 'RED SQUARE', 'WHITE ON WHITE'],
    },
    {
      column: 'a',
      row: 10,
      span: 2,
      lines: [
        '"I HAVE TRANSFORMED MYSELF',
        'INTO THE ZERO OF FORM"',
        'A BEGINNING, NOT AN ENDING',
      ],
    },
    {
      column: 'a',
      row: 13,
      span: 2,
      lines: [
        'WHY NOW? BECAUSE THE FEED IS FULL',
        'BECAUSE A SQUARE IS QUIET',
        'BECAUSE LESS IS A DISCIPLINE, NOT A STYLE',
      ],
    },
    {
      column: 'a',
      row: 16,
      span: 2,
      lines: [
        'DESIGN IS MY DAY JOB',
        'SUPREMATISM IS MY SUNDAY',
        "I DON'T PAINT SQUARES, I SHIP THEM",
      ],
    },
    {
      column: 'a',
      row: 19,
      lines: [
        { text: 'BLACK SQUARE', crush: 2 },
        { text: 'RED SQUARE', crush: 2 },
        { text: 'WHITE ON WHITE', crush: 2 },
      ],
    },
    {
      column: 'a',
      row: 21,
      span: 2,
      lines: [
        'THE SQUARE IS NOT A PICTURE',
        'IT IS THE FACE OF THE NEW ART',
        'THE FIRST STEP OF PURE CREATION',
      ],
    },
    {
      column: 'a',
      row: 24,
      lines: ['[END]'],
    },

    // ---- B2. LAST PLAYED ----
    {
      column: 'b',
      row: 2,
      lines: ['TEN TRACKS, ONE SITTING', 'GUESS THE ALBUM'],
    },
    {
      column: 'b',
      row: 4,
      span: 6,
      lines: lastPlayed.map(track => {
        const text = `${track.no}${gap}${track.title}${gap}${track.duration}`
        return track.crush ? { text, crush: track.crush } : text
      }),
    },
    {
      column: 'b',
      row: 11,
      lines: [
        'ON REPEAT UNTIL THE API IS WIRED',
        '[MOCK — SPOTIFY PENDING]',
        '[END]',
      ],
    },
    // The hidden track: legible only when the cursor comes close.
    {
      column: 'b',
      row: 24,
      span: 2,
      lines: [
        `12${gap}[UNLISTED]${gap}33:18`,
        { text: 'YOU FOUND THE HIDDEN TRACK', crush: 2 },
        { text: 'EMAIL ME THE WORD "GATEFOLD"', crush: 2 },
        { text: 'AND THE FIRST COFFEE IS ON ME', crush: 2 },
      ],
    },

    // ---- B3. LAST SHOT + DISPATCHES ----
    {
      column: 'c',
      row: 2,
      span: 2,
      lines: [
        lastShot.file,
        `SHOT ${lastShot.shot}`,
        lastShot.specs,
        lastShot.lens,
        "A PHOTO YOU CAN'T SEE",
        'DESCRIBED IS BETTER THAN SHOWN',
      ],
    },
    {
      column: 'c',
      row: 5,
      lines: ['DISPATCHES'],
    },
    {
      column: 'c',
      row: 6,
      span: 3,
      lines: dispatches.map(post => `${post.title} — ${post.date}`),
    },
    {
      column: 'c',
      row: 10,
      lines: ['NO RSS YET', "REFRESH LIKE IT'S 2004", '[END]'],
    },
  ],
}

export default sideB
