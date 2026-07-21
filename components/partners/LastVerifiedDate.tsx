export default function LastVerifiedDate({ date }: { date: string | null }) {
  if (!date) {
    return <span className="text-xs text-gray-500">Not yet independently verified</span>
  }
  return <span className="text-xs text-gray-500">Last verified {date}</span>
}
