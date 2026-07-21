# Required Visual Assets

This site currently uses original SVG/CSS diagrams and typography-led layouts rather
than photography, because no licensed Thailand/Myanmar business photography or real
product screenshots were available to add during this remediation pass (see
`docs/image-assets-register.md` for why none were substituted with stock or
AI-generated imagery). The list below is what the visual-design brief calls for and
should be sourced by the business - real photography, licensed stock, or original
screenshots with sensitive data removed - rather than invented.

| # | Page | Section | Image type needed | Recommended dimensions | Orientation | Content description | Source requirement | Priority |
|---|---|---|---|---|---|---|---|---|
| 1 | Home | Hero | Bangkok business-district photo | 1600×1000px | Landscape | Modern Bangkok office district conveying "technology services delivered locally in Thailand" - not tourist or temple imagery | Licensed stock or MMKK AI-owned photo | High |
| 2 | About | Intro | Team or office photo | 1200×800px | Landscape | MMKK AI team or workspace, real people/real office only | MMKK AI-owned photo, with consent from anyone shown | High |
| 3 | Contact | Hero / sidebar | Office or regional map graphic | 1000×700px | Landscape/square | Thailand/Myanmar service-coverage visual | Original diagram (can be built in SVG) or licensed map asset | Medium |
| 4 | Case Studies | Once real case studies exist | Client-approved project screenshots | Varies | Landscape | Real implementation screenshots with all personal data, account identifiers, and client names redacted unless permission is given | MMKK AI's own work, redacted per the brief's screenshot rules | Medium (blocked on case studies existing) |
| 5 | Solutions - Google Cloud | Hero | Cloud infrastructure concept | 1200×800px | Landscape | Approved Google Cloud brand asset if permitted under Google's brand guidelines, otherwise an original diagram | Google's official media kit (check current brand permissions) or original diagram | Low - original diagram already covers this adequately |
| 6 | Solutions - Google Workspace | Hero | Collaboration / hybrid work concept | 1200×800px | Landscape | Approved Google Workspace product imagery if permitted | Google's official media kit or original diagram | Low - original diagram already covers this adequately |
| 7 | Regional Support section (home) | Coverage visual | Thailand/Myanmar service-coverage map | 1200×800px | Landscape | Clean regional map, not flags or stereotypical imagery | Original diagram (SVG) | Medium |

## Notes

- Items 5 and 6 are marked low priority because `components/product-demos/*` already
  provides original, brand-safe interface mockups for every solution page - real
  vendor photography would be a nice-to-have polish item, not a gap.
- Any photograph that will include an identifiable person (staff, clients) needs that
  person's consent before publication, per the brief's own privacy rules.
- Do not fill these rows with a placeholder image service or an AI-generated stock
  photo in production - leave the current SVG/typography layout in place until a real
  asset is sourced, exactly as this pass has done.
