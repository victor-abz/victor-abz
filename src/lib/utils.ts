import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateRange(startDate: string, endDate: string): string {
  const formatDate = (d: string) => {
    if (!d) return 'Present'
    const [year, month] = d.split('-')
    if (!month) return year
    const date = new Date(parseInt(year), parseInt(month) - 1)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }
  return `${formatDate(startDate)} — ${formatDate(endDate)}`
}
