/**
 * A single typeset line. Plain strings cover the common case; the object form
 * adds ink crushing, strike-through and links.
 *
 * `crush` reproduces overprinted ink on the reference sleeve: 1 is heavy but
 * still legible, 2 is unreadable until the cursor comes close.
 */
export type Line =
  | string
  | {
      text: string
      crush?: 1 | 2
      strike?: boolean
      href?: string
    }

/** Content columns. They map onto grid columns 4, 5 and 6. */
export type Column = 'a' | 'b' | 'c'

/** A group of lines placed in a content column at a given ruler row. */
export interface Block {
  column: Column
  row: number
  span?: number
  lines: Line[]
}

/** A label/value pair in the credits columns (grid columns 1 and 2). */
export interface CreditRow {
  label: string
  row: number
  lines: Line[]
}

/** Timecode ruler down the right edge, in seconds. */
export interface Ruler {
  start: number
  step: number
  count: number
}

export interface SideData {
  variant: 'a' | 'b'
  /** Column headings, printed on the first row. */
  heads: Record<Column, string>
  credits: CreditRow[]
  blocks: Block[]
  ruler: Ruler
  footer: {
    catalog: string
    note?: string
  }
}
