import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

// The contact page itself is a client component (interactive form state),
// so per-locale metadata lives in this co-located server layout instead -
// Next.js only allows generateMetadata in server components.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const localized: Record<string, { title: string; description: string }> = {
    en: {
      title: 'Contact MMKK AI | Cloud, CRM & AI Solutions for Myanmar and Thailand',
      description: 'Get in touch with MMKK AI for Google Workspace, Microsoft 365, HubSpot CRM, and Google Cloud implementation support in Myanmar and Thailand.',
    },
    th: {
      title: 'ติดต่อ MMKK AI | โซลูชัน Cloud, CRM และ AI สำหรับไทย',
      description: 'ติดต่อ MMKK AI เพื่อรับบริการติดตั้ง Google Workspace, Microsoft 365, HubSpot CRM และ Google Cloud ในประเทศไทย',
    },
    mm: {
      title: 'MMKK AI ဆက်သွယ်ရန် | မြန်မာနှင့်ထိုင်းအတွက် Cloud, CRM & AI ဖြေရှင်းချက်များ',
      description: 'မြန်မာနှင့်ထိုင်းနိုင်ငံရှိ Google Workspace, Microsoft 365, HubSpot CRM နှင့် Google Cloud တပ်ဆင်မှု ပံ့ပိုးမှုအတွက် MMKK AI ကို ဆက်သွယ်ပါ။',
    },
  }
  const meta = localized[locale] || localized.en
  return buildMetadata({ locale, path: 'contact', title: meta.title, description: meta.description })
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
