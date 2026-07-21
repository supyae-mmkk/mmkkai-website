# Image Assets Register

Tracks the source and license of every image asset used on this site, per the visual-
design brief's requirement to record provenance for anything not originally created
for MMKK AI.

## Existing assets (pre-dating this pass)

| Filename | Source | License | Intended use | Attribution required | Approval status |
|---|---|---|---|---|---|
| `public/logo.svg` | Created for this project | Owned by MMKK AI | Site-wide logo, Organization schema `logo` | No | Approved |
| `public/og-default.svg` | Created for this project | Owned by MMKK AI | Default Open Graph / Twitter card image | No | Approved |

## Assets added in this pass

None. This remediation pass did not add any new photographs, stock imagery, or
externally-sourced graphics. All new visual elements added in prior passes
(`components/product-demos/*`, `components/visuals/*`) are original SVG/CSS/HTML
diagrams built specifically for this codebase - not sourced from any third party, and
therefore not fabricated screenshots of real vendor products.

This is a deliberate choice, not an oversight: the sandbox this work was performed in
has no general internet image-fetching capability, and the "do not invent facts" and
"do not download random copyrighted images" rules in the brief both argue against
substituting placeholder or AI-generated stock photography for real, licensed
Thailand/Myanmar business photography that the brief specifically asks for. See
`docs/required-visual-assets.md` for exactly what's still needed and where.

## How to add a new asset

When a real photograph or licensed stock image is added going forward, add a row here
with: filename, source, source URL, license type, intended page, attribution
requirement, date obtained, and approval status - before it is committed to
`public/images/`.
