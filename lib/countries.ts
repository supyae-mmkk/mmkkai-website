export interface CountryInfo {
  slug: 'myanmar' | 'thailand'
  name: string
  phone: string
  phoneHref: string
  currencyNote: string
  cities: string[]
}

export const countries: Record<'myanmar' | 'thailand', CountryInfo> = {
  myanmar: {
    slug: 'myanmar',
    name: 'Myanmar',
    phone: '+95 95186635',
    phoneHref: 'tel:+9595186635',
    currencyNote:
      'Billing is handled in USD by default; MMKK AI helps businesses in Myanmar navigate local payment and remittance constraints when purchasing Google Workspace, Microsoft 365, and Google Cloud.',
    cities: ['Yangon', 'Mandalay', 'Naypyidaw'],
  },
  thailand: {
    slug: 'thailand',
    name: 'Thailand',
    phone: '+66 98 113 5613',
    phoneHref: 'tel:+66981135613',
    currencyNote:
      'Local billing support is available in THB, with the same setup, migration, and support process used across our Myanmar deployments.',
    cities: ['Bangkok', 'Chiang Mai', 'Phuket'],
  },
}
