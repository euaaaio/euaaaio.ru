/**
 * Everything on this page that is meant to move on its own.
 *
 * All of it is mocked for now. Each export documents the source that will
 * replace it, so wiring the real thing is a change of data, never of markup.
 */

/**
 * TODO: replace with `api/spotify.ts`, which already returns the currently
 * playing track from the Spotify Web API and is deployed as an edge function.
 */
export const nowPlaying = {
  artist: 'SLOWTHAI',
  track: 'HAPPY',
  duration: '3:31',
  url: 'https://open.spotify.com/user/31wybngwveld3gfnz3yf42szjtn4',
}

/**
 * The B2 tracklist. Doubles as the "last played" log.
 *
 * TODO: replace with Spotify recently-played (`/v1/me/player/recently-played`),
 * which needs the same refresh token as `api/spotify.ts`.
 */
export const lastPlayed = [
  { no: '01', title: 'YUM', duration: '3:22' },
  { no: '02', title: 'SELFISH', duration: '3:57' },
  { no: '03', title: 'SOONER', duration: '3:32' },
  { no: '04', title: 'FEEL GOOD', duration: '3:24' },
  { no: '05', title: 'NEVER AGAIN', duration: '4:33' },
  { no: '06', title: 'HAPPY', duration: '3:31', crush: 1 as const },
  { no: '07', title: 'UGLY', duration: '3:56' },
  { no: '08', title: 'FALLING', duration: '3:33' },
  { no: '09', title: 'WOTZ FUNNY', duration: '2:56' },
  { no: '10', title: 'TOURNIQUET', duration: '4:24' },
  { no: '11', title: '25% CLUB', duration: '4:19' },
]

/**
 * Runout etchings: real commit hashes, printed like matrix numbers in the
 * dead wax of a record.
 *
 * TODO: fetch at build time from the GitHub API (`/users/euaaaio/events/public`),
 * no auth needed for public activity.
 */
export const lastCommits = [
  { hash: '118EC2E', message: 'CHORE: MIGRATE TO OXC-CONFIG-FANS' },
  { hash: '5E77745', message: 'FEAT: ADD PLAUSIBLE ANALYTICS' },
  { hash: '67C9753', message: 'CHORE: BUMP ASTRO' },
  { hash: '299ADF9', message: 'CHORE: BUMP PNPM' },
  { hash: 'A8C609D', message: 'CHORE: BUMP DEPS' },
  { hash: '2B0F940', message: 'CHORE: MIGRATE TO OXFMT' },
  { hash: 'BBDA292', message: 'CHORE: BUMP ESLINT CONFIG' },
  { hash: '3450F13', message: 'CHORE: CLEANUP', crush: 1 as const },
  { hash: '11F5583', message: 'CHORE: BUMP DEPS' },
  { hash: '5EE25A2', message: 'FEAT: CHANGE FANS DOMAIN' },
  { hash: 'BE80CE5', message: 'FIX(USE-STORE): SSR MEMORY LEAKS' },
  { hash: '1236061', message: 'RELEASE: 1.1.0' },
]

/**
 * A photo described instead of shown — the page carries no images by design.
 *
 * TODO: read EXIF from the latest Instagram post. The Basic Display API is
 * gone, so this will most likely be a manual drop or a scrape.
 */
export const lastShot = {
  file: 'IMG_4102.HEIC',
  shot: '2026/07/12, 19:47',
  specs: '4032×3024 · F/1.8 · 1/120 S · ISO 64',
  lens: '26 MM · NO FLASH · NO FILTER',
}

/**
 * Writing from the Suprematist magazine.
 *
 * TODO: replace with an Astro content collection once the posts exist.
 */
export const dispatches = [
  { title: 'THE GRID IS AN ICON', date: '2026/06' },
  { title: 'WHY MALEVICH DELETED THE HORIZON', date: '2026/04' },
  { title: 'WHITE ON WHITE, NOW IN CSS', date: '2026/02' },
  { title: '"0,10" REVISITED: 39 WORKS, ONE CORNER', date: '2025/12' },
  { title: 'ZERO AS A DESIGN BRIEF', date: '2025/10' },
]

/** TODO: stamp at build time — `new Date().toISOString()` in the page. */
export const lastBuild = '2026/07/17, 14:03 UTC'

/** The last edit to the NOW column. Kept honest on purpose. */
export const nowUpdated = '2026/03/16'
