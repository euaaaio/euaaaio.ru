/**
 * The sheet is laid out at a fixed 2056px. Narrower windows zoom the whole
 * thing down to fit, so the page never scrolls sideways.
 */

const SLEEVE_WIDTH = 2056

function fit(): void {
  const { clientWidth } = document.documentElement
  document.body.style.zoom =
    clientWidth < SLEEVE_WIDTH ? `${clientWidth / SLEEVE_WIDTH}` : ''
}

fit()
addEventListener('resize', fit, { passive: true })

/** The tab title names the side you are looking at. */
const sideB = document.querySelector<HTMLElement>('.side-b')

if (sideB) {
  addEventListener(
    'scroll',
    () => {
      const onSideB = scrollY + innerHeight / 2 > sideB.offsetTop
      document.title = onSideB ? 'EUAAAIO/005 — SIDE B' : 'EUAAAIO/005 — SIDE A'
    },
    { passive: true },
  )
}
