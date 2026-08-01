import type { SideData } from '@/types/sleeve'
import { lastCommits, nowPlaying, nowUpdated } from './live'

/** Two spaces that survive HTML collapsing, for column-like alignment. */
const gap = '  '

const [latestCommit] = lastCommits

const sideA: SideData = {
  variant: 'a',
  heads: {
    a: 'WORK',
    b: 'NOW',
    c: 'PROJECTS',
  },
  ruler: { start: 0, step: 10, count: 27 },
  footer: { catalog: 'EUAAAIO/005' },

  credits: [
    {
      label: 'EDUARD AKSAMITOV:',
      row: 1,
      lines: ['DESIGNER, DEVELOPER,', 'SUPREMATIST, CONSULTANT'],
    },
    {
      label: 'CURRENTLY:',
      row: 3,
      lines: [
        { text: 'FRONTEND ENGINEER AT FANS', href: 'https://fans.dev' },
        {
          text: 'CO-FOUNDER & ART DIRECTOR AT AOIE',
          href: 'https://aoiestudio.ru',
        },
      ],
    },
    {
      label: 'STUDIO:',
      row: 5,
      lines: [
        {
          text: 'AOIE — INDEPENDENT DESIGN STUDIO',
          href: 'https://aoiestudio.ru',
        },
        'ANNA SHARAPOVA, DESIGN DIRECTOR',
        'EDUARD AKSAMITOV, ART DIRECTOR',
        'WORKING GLOBALLY (CET)',
      ],
    },
    {
      label: 'NOW PLAYING:',
      row: 8,
      lines: [
        {
          text: `${nowPlaying.artist} — ${nowPlaying.track}, ${nowPlaying.duration}`,
          href: nowPlaying.url,
        },
        '[MOCK — SPOTIFY PENDING]',
      ],
    },
    {
      label: 'LAST COMMIT:',
      row: 9,
      lines: [`${latestCommit.hash}${gap}${latestCommit.message}`],
    },
    {
      label: 'SELECTED CASES:',
      row: 11,
      lines: [
        'FLINTER, ATOM, NOVO, ZENITH,',
        'HYGGE, PITERRA, WINNERS COFFEE,',
        'RIBBON, DENTRUM, COLAB, DWC,',
        'MAMAMAMY, IYENGAR YOGA SCHOOL,',
        'SKALODROM UP, BOAT KAT',
      ],
    },
    {
      label: 'CONSULTING:',
      row: 15,
      lines: [
        'PROCESSES, HIRING, WEBSITES',
        'AND WHEREVER DESIGN MEETS CODE',
        'AVAILABLE FROM JULY 2026',
      ],
    },
    {
      label: 'BOOKING:',
      row: 17,
      lines: [
        { text: 'CAL.COM/EUAAAIO', href: 'https://cal.com/euaaaio' },
        '30 MINUTES, NO SLIDES',
        'BRING A PROBLEM',
      ],
    },
    {
      label: 'MIXED AT:',
      row: 20,
      lines: ['A KITCHEN TABLE, MOSTLY AT NIGHT'],
    },
    {
      label: 'BUILT WITH:',
      row: 21,
      lines: ['ASTRO, VERCEL, PLAUSIBLE'],
    },
    {
      label: 'TYPE:',
      row: 22,
      lines: ['[TBD IN FIGMA]'],
    },
    {
      label: 'SOURCE:',
      row: 23,
      lines: [
        {
          text: 'GITHUB.COM/EUAAAIO/EUAAAIO.RU',
          href: 'https://github.com/euaaaio/euaaaio.ru',
        },
      ],
    },
    {
      label: 'CONTACT:',
      row: 25,
      lines: [
        { text: 'HELLO@EUAAAIO.RU', href: 'mailto:hello@euaaaio.ru' },
        { text: 'TELEGRAM @EUAAAIO', href: 'https://t.me/euaaaio' },
        'GPG 8A96 72CC F199 75E6',
      ],
    },
  ],

  blocks: [
    // ---- A1. WORK ----
    {
      column: 'a',
      row: 2,
      span: 2,
      lines: [
        'LAUNCH THE PRODUCT',
        'IMPROVE THE PRODUCT',
        'UPDATE THE PRODUCT',
        "YOU'RE LIVE",
        "YOU'RE IN BUSINESS",
      ],
    },
    {
      column: 'a',
      row: 4,
      span: 2,
      lines: [
        'LAUNCH THE PRODUCT',
        'IMPROVE THE PRODUCT',
        'UPDATE THE PRODUCT',
        { text: "YOU'RE LIVE", crush: 1 },
        { text: "YOU'RE IN BUSINESS", crush: 1 },
      ],
    },
    {
      column: 'a',
      row: 6,
      span: 2,
      lines: [
        "I'VE BEEN LACKING A PORTFOLIO",
        'I NEVER REALLY NEEDED ONE',
        'WORK FINDS ME THROUGH PEOPLE WHO SAW',
        'THE LAST THING I SHIPPED',
        'TEN-PLUS YEARS OF DESIGN, CODE, DIRECTION',
        'STARTED IN MARKETING',
        'AND ENDED UP EVERYWHERE ELSE',
      ],
    },
    {
      column: 'a',
      row: 9,
      span: 4,
      lines: [
        'THE FIRST LAYOUTS WERE BANNERS',
        "FOR THINGS I DIDN'T LOVE",
        'I LEARNED THE TOOLS AT NIGHT',
        'AND CALLED IT A HOBBY',
        'SOMEBODY PAID ME AND I CALLED IT A JOB',
        'I HIRED PEOPLE AND CALLED IT AN AGENCY',
        'DESIGN AND DEVELOPMENT UNDER ONE ROOF',
        'WE MADE GOOD WORK AND BAD MARGINS',
        { text: 'THE OFFICE', strike: true, crush: 1 },
        { text: 'THE FRIDAY DEMOS', strike: true, crush: 1 },
        { text: 'THE PAYROLL COUNTDOWN', strike: true, crush: 2 },
        'CLOSED IT MYSELF, KEPT EVERY LESSON',
        'THE COFFEE MACHINE SURVIVED',
        'IT ALWAYS DOES',
      ],
    },
    {
      column: 'a',
      row: 13,
      span: 3,
      lines: [
        'I HELP LAUNCH, IMPROVE AND UPDATE',
        'PRODUCTS AND SERVICES',
        'I QUICKLY UNDERSTAND ISSUES',
        'AND SOLVE PROBLEMS',
        'WHERE DESIGN AND CODE MUST BALANCE',
        'A DESIGNER IF YOU WANT',
        'A DEVELOPER IF YOU NEED',
        'AN ART DIRECTOR IF YOU ASK NICELY',
      ],
    },
    {
      column: 'a',
      row: 16,
      lines: [{ text: 'HIRE US', crush: 2 }],
    },
    {
      column: 'a',
      row: 17,
      span: 2,
      lines: [
        'WEEKDAYS: FRONTEND ENGINEER AT FANS',
        'TWENTY-PLUS ENGINEERS BUILDING MVPS',
        'AND SCALABLE PRODUCTS',
        'HEALTHTECH, EDTECH, LOGISTICS',
        'FULL CYCLE FROM DESIGN TO DEPLOYMENT',
        'I SIT WHERE PIXEL MEETS PIPELINE',
        'AND TRANSLATE BOTH WAYS',
      ],
    },
    {
      column: 'a',
      row: 20,
      span: 3,
      lines: [
        'THE OTHER DAY I HAD A CONVERSATION',
        'WITH MY FIGMA FILE',
        'I WAS TELLING HIM HOW EVERY HANDOFF',
        'GETS LOST IN TRANSLATION',
        'THE SPACING NEVER SURVIVES THE SPRINT',
        'HE SAID "YOU CAN\'T HAND OFF',
        'WHAT YOU CAN BUILD YOURSELF"',
        'SO I LEARNED HTML FOR THE BONES',
        'CSS FOR THE SKIN',
        'TYPESCRIPT FOR THE NERVES',
        'FUNNY THING IS IT NEVER FELT LIKE WORK',
      ],
    },
    {
      column: 'a',
      row: 23,
      span: 3,
      lines: [
        'AOIE IS THE STUDIO I CO-FOUNDED',
        'WITH ANNA SHARAPOVA',
        'HER SIXTEEN YEARS PLUS TEN OF MINE',
        'WE ABSORB VISUAL NOISE',
        'AND BUILD CLEAR IDENTITY',
        'FROM CONCEPT TO IMPLEMENTATION',
        'RETAINERS, PROJECTS, CONSULTANCY',
        'INDEPENDENT, FLEXIBLE, DIRECT DIALOGUE',
        'NO ACCOUNT MANAGERS, NO TELEPHONE GAME',
        'OPEN FOR COLLABORATIONS FROM JULY 2026',
      ],
    },
    {
      column: 'a',
      row: 26,
      lines: [
        'EXCUSE ME WHILE I SHIP ANOTHER VERSION',
        'THIS SITE IS NUMBER FIVE',
        "AND IT WON'T BE THE LAST",
        '[END]',
      ],
    },

    // ---- A2. NOW ----
    {
      column: 'b',
      row: 2,
      span: 2,
      lines: [
        'COMING OUT OF A LONG SABBATICAL',
        'IT WAS LONGER THAN PLANNED',
        'THEY ALWAYS ARE',
        { text: 'LOOKING FOR A JOB AS A FRONTEND ENGINEER', strike: true },
        'FOUND ONE — FANS',
      ],
    },
    {
      column: 'b',
      row: 5,
      span: 2,
      lines: [
        'CONSULTING SMALL BUSINESSES',
        'ON PROCESSES, HIRING AND WEBSITES',
        'PREPARING UPDATES FOR THE OPEN SOURCE',
        'DRAWING LAYOUTS FOR SUPREMATIST',
        'AND FOR THIS PAGE',
        "THE ONE YOU'RE READING",
      ],
    },
    {
      column: 'b',
      row: 8,
      lines: [
        'COMMITTING FOR MYSELF',
        "I'M JUST COMMITTING FOR MYSELF",
        "I'M JUST COMMITTING FOR MYSELF",
      ],
    },
    {
      column: 'b',
      row: 10,
      span: 2,
      lines: [
        '22 008 602 DOWNLOADS LAST MONTH',
        'I CHECK THE COUNTER EVERY MORNING',
        'LIKE WEATHER',
        '1 383 CONTRIBUTIONS THIS YEAR',
        'ALL GREEN, ALL SQUARES',
      ],
    },
    {
      column: 'b',
      row: 13,
      span: 2,
      lines: [
        'IN THE HEADPHONES: UGLY, START TO FINISH',
        'TRACK 06 OF 11, ON REPEAT',
        { text: 'GUESS WHY', crush: 1 },
      ],
    },
    {
      column: 'b',
      row: 16,
      lines: [
        'SHIP SMALL, SHIP OFTEN',
        'NO ROADMAP, ONLY DIRECTION',
        { text: 'BUMP DEPS, BUMP DEPS AGAIN', crush: 1 },
      ],
    },
    {
      column: 'b',
      row: 18,
      lines: [
        { text: 'COMMITTING FOR MYSELF', crush: 1 },
        { text: "I'M JUST COMMITTING FOR MYSELF", crush: 1 },
        { text: "I'M JUST COMMITTING FOR MYSELF", crush: 2 },
      ],
    },
    {
      column: 'b',
      row: 20,
      span: 2,
      lines: [
        'ONE BREW IS NEVER ENOUGH',
        { text: 'ONE BREW IS NEVER ENOUGH', crush: 1 },
        '18 GRAMS IN, 36 OUT, 27 SECONDS',
        'TOO SOUR, TRY AGAIN',
      ],
    },
    {
      column: 'b',
      row: 23,
      span: 2,
      lines: [
        `UPDATED ${nowUpdated}`,
        { text: 'IF THIS FEELS STALE, IT IS', crush: 1 },
      ],
    },
    {
      column: 'b',
      row: 25,
      lines: ['[END]'],
    },

    // ---- A3. PROJECTS ----
    {
      column: 'c',
      row: 2,
      span: 2,
      lines: [
        'PRACTICE OPEN SOURCE',
        'THANKFUL FOR THE STACK THAT I USE',
        'SOMEBODY WROTE IT FREE WHILE I SLEPT',
        'SO I WRITE MINE WHILE THEY SLEEP',
        "THAT'S THE WHOLE ECONOMY",
      ],
    },
    {
      column: 'c',
      row: 5,
      span: 3,
      lines: [
        { text: 'IT STARTED WITH LOGUX', href: 'https://logux.org' },
        'A PROTOCOL FOR REAL-TIME APPS',
        'ACTIONS SYNCED CLIENT TO SERVER',
        'LIKE GOSSIP BETWEEN TABS',
        'SENT ONE PULL REQUEST, IT GOT MERGED',
        'THEN ANOTHER',
        'THEN THE CORE TEAM SAID WELCOME',
        'NOBODY PAYS YOU HERE',
        'YOU PAY YOURSELF IN GREEN SQUARES',
      ],
    },
    {
      column: 'c',
      row: 9,
      span: 3,
      lines: [
        {
          text: 'NANO STORES IS A STATE MANAGER',
          href: 'https://github.com/nanostores',
        },
        'THAT WEIGHS 172 BYTES',
        'NOT KILOBYTES — BYTES',
        'ATOMIC TREE-SHAKABLE STORES',
        'FOR REACT, PREACT, VUE, SVELTE',
        "VANILLA IF YOU'RE BRAVE",
        'I MAINTAIN THE VUE OF IT',
        'THE LOGGER AND THE DEVTOOLS OF IT',
        'THE ALPINE OF IT',
        'SMALL PACKAGES, SMALLER EGOS',
      ],
    },
    {
      column: 'c',
      row: 13,
      span: 2,
      lines: [
        { text: 'TRYBREW — BREWING RECIPES', href: 'https://trybrew.app' },
        'AND A COFFEE COMMUNITY',
        'DIAL IN, LOG, SHARE',
        "REPEAT UNTIL IT'S SWEET",
      ],
    },
    {
      column: 'c',
      row: 16,
      span: 2,
      lines: [
        'OPEN SOURCE IS SELFISH',
        "AND THAT'S EXACTLY WHY IT WORKS",
        'I DO IT FOR MYSELF',
        'IT JUST HAPPENS TO HELP EVERYONE ELSE',
        '[END]',
      ],
    },
    {
      column: 'c',
      row: 20,
      span: 6,
      lines: [
        'RUNOUT ETCHINGS:',
        ' ',
        ...lastCommits.map(commit =>
          commit.crush
            ? {
                text: `${commit.hash}${gap}${commit.message}`,
                crush: commit.crush,
              }
            : `${commit.hash}${gap}${commit.message}`,
        ),
      ],
    },
  ],
}

export default sideA
