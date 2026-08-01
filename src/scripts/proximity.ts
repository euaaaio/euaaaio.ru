/**
 * Ink clarity follows the cursor: far away a crushed line is unreadable,
 * up close it resolves. Each line carries `--s`, 1 (crushed) to 0 (clean).
 */

const RADIUS = 250
const DEAD_ZONE = 30

const crushed = [...document.querySelectorAll<HTMLElement>('.k1, .k2')]

let pointerX = -Infinity
let pointerY = -Infinity
let frame: number | undefined

function apply(): void {
  frame = undefined

  for (const line of crushed) {
    const rect = line.getBoundingClientRect()
    // Distance to the nearest point of the line's box, not to its centre —
    // long lines should resolve wherever you approach them.
    const nearestX = Math.max(rect.left, Math.min(pointerX, rect.right))
    const nearestY = Math.max(rect.top, Math.min(pointerY, rect.bottom))
    const distance = Math.hypot(pointerX - nearestX, pointerY - nearestY)
    const clarity = Math.min(1, Math.max(0, (distance - DEAD_ZONE) / RADIUS))

    line.style.setProperty('--s', clarity.toFixed(3))
  }
}

function schedule(): void {
  frame ??= requestAnimationFrame(apply)
}

addEventListener(
  'mousemove',
  event => {
    pointerX = event.clientX
    pointerY = event.clientY
    schedule()
  },
  { passive: true },
)

addEventListener('scroll', schedule, { passive: true })
