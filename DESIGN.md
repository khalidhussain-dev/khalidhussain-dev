# Matasha — Design System

<!-- impeccable:design-schema 1 -->

A two-sided flooring marketplace rendered as **the fitter's paper world** — warm ruled
job-sheet paper, ink, a ledger-blue slot grid, and one vermilion rubber-stamp for the award.
This design deliberately refuses the generic dark four-tab marketplace feed: the product's
scarcity-and-award mechanism *is* the visual grammar.

## Design World — "The Tradesman's Job Docket"

| Concept | Expression |
| --- | --- |
| Reply slots | Tick-boxes to fill on a job sheet |
| Fresh enquiry | An unfilled docket |
| Award | A vermilion rubber-stamp |
| Expiry / verification | Red ink |
| Measurements (m², £, distance) | Monospace data |
| Brand | Gold kept as brass fittings |

## Palette & Material

- **Ground:** warm ruled paper `#F4EEDD`, raised sheets `#FCF8EC`, sunken `#EAE1CA`.
  Light, because a fitter reads a docket in daylight or under a van light — not the old black.
- **Ink:** `#221C12` text, `#4E4635` secondary, `#8A7E63` faint. Never gray on paper.
- **Rules:** hairline `#D9CFB6`, strong `#B9AC8F`, a ledger-blue slot grid `#A9B8C8`.
- **Stamp (award/error/expiry):** vermilion `#C43C2C`, reserved for high-signal moments.
- **Brand brass:** `#A8781B` (gold retained and deepened to read on paper), light `#D6BC6E`.
- Status colors (success `#2E7D4F`, warning `#9A6A1B`, info `#2F6FA8`) deepened for paper contrast.

The `colors` object in `src/design/tokens.ts` maps old `black`/`white` names as compatibility
aliases into this world (`black → paper`, `white → ink`) so all screens inherit it.

## Typography

- Platform workhorse sans (SF Pro / Roboto) for UI; tight tracking on headings (`-0.2`–`-0.4em`).
- **Monospace for data and measurements** (`typography.data`, `dataSmall`) — m², £, distances,
  dates — a legitimate use, not costume.
- `label` style: uppercase, tracked, for mastheads and section rulings.

## Components

- **Card:** a raised job-sheet with a fine brass top ledger rule; optional stamp-corner notch.
- **Button:** primary is a brass stamp (ink → paper-raised text), secondary an inked outline,
  `stamp` variant is vermilion.
- **Input / search:** write-on-the-line — a paper field with a brass bottom rule, gold focus.
- **StatusBadge:** an inked, bordered stamp label (uppercase, tracked).
- **EnquiryCard / feed cards:** docket body with mono data chips, brass rule, and **slot
  tick-boxes** (`☐☑☐` filling left-to-right) plus a `FULL` red state.
- **LedgerTabBar:** paper tab strip with a brass top rule and a gold active tab; the customer
  bar carries a raised vermilion **Post Job** stamp in the center, replacing the generic FAB.

## Navigation

Four-ledger tab bars: Dockets / Chats / Jobs / Me for customers (with central Post Job stamp),
Feed / Chats / Jobs / Me for suppliers. Deep screens hide from the tab row.

## Key surfaces

- **Customer home:** journal masthead + docket date, brass Post-a-job stamp CTA, stat ledger
  row (ACTIVE / AWARDED / DONE), then enquiry dockets under ruled section headers.
- **Supplier feed:** SUPPLIER DESK masthead, open-jobs / avg-distance / posted-today ledger,
  filter, and replyable enquiry dockets with slot ticks and a brass Reply stamp.
