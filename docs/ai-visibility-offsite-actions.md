# Off-Site Actions Required for AI Visibility

This checklist covers what the AI-visibility audit recommends that **cannot be fixed
through website code alone** - actions the business team needs to take directly with
vendors, directories, and clients. Everything else the audit identified has been
addressed in this codebase; see `AI_VISIBILITY_REMEDIATION_REPORT.md` for the full
before/after mapping.

None of the items below involve buying backlinks, mass directory submissions, or
soliciting fake reviews - all are legitimate, evidence-based actions.

## 1. Verify official partner directory listings

If MMKK AI genuinely qualifies for Google Cloud Partner, Microsoft Partner, HubSpot
Solutions Partner, or Apollo Certified Partner status, complete the vendor's own
partner-program application and get listed in their public partner directory. Once
listed, update `lib/companyConfig.ts` (`partnerRegistry`) with the entry's `status:
'verified'`, `verificationUrl` (the vendor's own directory listing), and
`dateVerified`. The `/partners` page and Organization schema will then reflect this
automatically - no other code change is needed. Do not mark anything verified without
that public listing existing first.

## 2. Request links from verified technology partners

Once (and only once) a genuine partner relationship is verified per item 1, ask the
vendor's partner program whether MMKK AI can be listed on their own public partner-
finder page, which is a legitimate, editorially-controlled backlink - not a purchased
or reciprocal link scheme.

## 3. Build out a complete Google Business Profile

A complete, verified Google Business Profile (address, hours, category, services,
photos) is one of the highest-leverage, lowest-cost signals for local and AI-answer
discoverability. Confirm one exists for each office (Myanmar, Thailand, US) and that
the listed name, phone number, and address exactly match what's on this website.

## 4. Complete LinkedIn company information

Ensure the LinkedIn company page (once its URL is confirmed - see item 9) has a
complete description, website link, industry, and location fields that match this
site. Once the URL is confirmed and live, add it to `lib/companyConfig.ts`'s
`socialProfiles` array so it appears in the footer, contact page, and Organization
schema `sameAs`.

## 5. Ensure Facebook business information matches the website

Same as above for the Facebook business page, if one exists - confirm the URL, then
add it to `socialProfiles` in `lib/companyConfig.ts`.

## 6. Obtain genuine customer reviews

Ask recent clients directly for a review on Google Business Profile or a relevant
industry directory. Do not fabricate or incentivize reviews in a way that violates
the review platform's policies. Genuine reviews also strengthen the case for
`AggregateRating` schema in the future - but that schema should not be added to this
codebase until there are real, visible reviews to back it (see Phase 9 constraint in
the original remediation brief).

## 7. Publish permitted client success stories

`lib/caseStudies.ts` and the `/case-studies` page are already built and ready to
receive real entries - see the field list in that file (business problem, services
delivered, verified outcome, permission-to-publish flag). The blocker is not
technical; it's securing a specific client's written permission to be named or
described. Once permission exists for even one project, add it there.

## 8. Submit to relevant legitimate business directories

Where MMKK AI is a genuine fit (regional Myanmar/Thailand business directories,
relevant technology-services directories), submit accurate listings with information
that exactly matches this website. Do not mass-submit to low-quality or irrelevant
directories purely for link volume.

## 9. Seek industry publication mentions

Genuine coverage or guest contributions in Myanmar/Thailand business or technology
publications build the kind of independent, citable authority signal AI systems and
search engines weight heavily. This is a business-development activity, not a code
change.

## 10. Maintain consistent company naming across the web

Every external listing (directories, social profiles, review platforms) should use
the exact name "MMKK AI" and the exact contact details in `lib/companyConfig.ts`.
Inconsistent naming or contact information across the web is one of the most common,
avoidable reasons AI systems and search engines under-trust an otherwise legitimate
business.

## 11. Resolve the "Myanmar Myanmar Kando Konnect" alternate name

The audit flagged that this alternate name is not connected to MMKK AI anywhere on
the site. Nothing in this repository documents what that name actually is (a legal
entity name, a former trading name, a registration record, or something else). This
needs to be resolved by the business, not invented by this remediation pass:

1. Confirm internally what "Myanmar Myanmar Kando Konnect" is and its exact
   relationship to "MMKK AI" (e.g., "MMKK AI is the trading name of [legal entity],
   registered as [registration number] in [country]").
2. Gather supporting evidence (a business registration certificate, incorporation
   document, or equivalent).
3. Once confirmed, fill in `lib/companyConfig.ts`'s `legalEntity` object
   (`legalName`, `alternateNames`, `registrationNumber`, `registrationCountry`,
   `evidenceUrl`). The Organization schema (`lib/schema.ts`) will then automatically
   emit `legalName` and `alternateName` - no other code change is required.
4. Until this is confirmed, no page or schema in this codebase states a relationship
   between the two names, per the "do not invent facts" rule.

## 12. Track evidence URLs for every authority claim

Going forward, any new partnership, certification, award, or authority claim added to
this site should follow the same pattern already established in
`lib/companyConfig.ts`: a `verificationUrl` or `evidenceUrl` pointing at public,
independently-checkable evidence, not just an internal assertion. This keeps the
"Verified Partnerships" section of `/partners` honest as the business's actual
credentials change over time.
