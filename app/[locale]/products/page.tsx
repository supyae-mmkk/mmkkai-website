import { redirect } from 'next/navigation'

// Legacy URL — content consolidated into /solutions as part of the
// Cloud/CRM/AI rebrand. Redirecting (rather than 404ing) preserves any
// existing inbound links or indexed URLs pointing at /products.
export const dynamic = 'force-static'

export default function ProductsRedirect() {
  redirect('/solutions')
}
