# Field Notes

A daily symptom, medication and lab log that runs entirely in your browser.

**Open it:** https://skydog84.github.io/field-notes/

## What it is

One HTML page. No account, no sign-up, no server, and no analytics. Everything
you type is stored by your own browser on your own device and is never sent
anywhere — there is nowhere for it to be sent to.

Add it to your home screen and it works with no signal at all.

## What it does

- A daily log of symptoms rated 1–5, with a one-tap way to record a day when
  nothing happened. A day logged as "none" and a day you never opened are
  stored, shown and counted as different things.
- Bristol stool scale, sleep, meals, activity, and stress-relief practices.
- Supplements and medications as items with a start date, an optional end date,
  an intended frequency and a dose-change history. Stopping something sets an
  end date rather than deleting it, so the history survives.
- Cycle start and end dates, giving a "day X of cycle" figure to compare
  symptoms against.
- Lab results charted over time against two reference ranges you enter
  yourself — the standard range your lab prints, and a functional range if your
  clinician uses one. Nothing is assumed for you.
- Every medication and dose change marked on that same timeline, plus a
  before-and-after comparison around any change.
- A printable one-page summary to take to an appointment.

## Your data

- Stored in your browser's local storage, on one device.
- **Clearing your browser's site data erases it.** The Backup button writes a
  copy out as a file; there is a reminder if a week goes by without one.
- Moving to a new phone or browser: Backup on the old one, Import on the new.
  Re-opening the page somewhere else does not carry your entries with it.
- Nothing here diagnoses, treats or advises. It records what you notice so you
  have something concrete to bring to the people who do.

## Files

| File | |
|---|---|
| `index.html` | the whole app |
| `sw.js` | service worker — caches the app so it opens offline. Never touches your log. |
| `manifest.webmanifest` | name and icons for Add to Home Screen |
| `icon-*.png`, `icon.svg`, `apple-touch-icon.png` | app icon |

Works offline after the first visit. To run it without any web server at all,
download `index.html` on its own and open it — it is fully self-contained.

## Licence

MIT — use it, change it, share it.
