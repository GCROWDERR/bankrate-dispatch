import { POSTAL_TO_NAME } from "@/lib/us-fips"

/** HMDA overpayment metrics by state — v2 cohesion export (2026-06-09). */
export type HmdaOverpaymentRow = {
  postal: string
  name: string
  overpayRate: number
  annualOverpayment: number
  lifetimeLoanTax: number
  bucket: number
}

const RAW_ROWS: Omit<HmdaOverpaymentRow, "name" | "bucket">[] = [
  { postal: "AK", overpayRate: 89.3, annualOverpayment: 3.3, lifetimeLoanTax: 20 },
  { postal: "AL", overpayRate: 88.2, annualOverpayment: 2.7, lifetimeLoanTax: 21 },
  { postal: "AR", overpayRate: 89.1, annualOverpayment: 2.5, lifetimeLoanTax: 21 },
  { postal: "AZ", overpayRate: 84.2, annualOverpayment: 3.5, lifetimeLoanTax: 21 },
  { postal: "CA", overpayRate: 85.0, annualOverpayment: 4.8, lifetimeLoanTax: 22 },
  { postal: "CO", overpayRate: 83.2, annualOverpayment: 3.6, lifetimeLoanTax: 19 },
  { postal: "CT", overpayRate: 88.7, annualOverpayment: 3.6, lifetimeLoanTax: 23 },
  { postal: "DC", overpayRate: 86.3, annualOverpayment: 4.3, lifetimeLoanTax: 20 },
  { postal: "DE", overpayRate: 89.4, annualOverpayment: 3.3, lifetimeLoanTax: 22 },
  { postal: "FL", overpayRate: 87.4, annualOverpayment: 3.7, lifetimeLoanTax: 23 },
  { postal: "GA", overpayRate: 86.8, annualOverpayment: 3.2, lifetimeLoanTax: 21 },
  { postal: "HI", overpayRate: 87.1, annualOverpayment: 4.7, lifetimeLoanTax: 21 },
  { postal: "IA", overpayRate: 83.1, annualOverpayment: 1.9, lifetimeLoanTax: 18 },
  { postal: "ID", overpayRate: 87.0, annualOverpayment: 3.3, lifetimeLoanTax: 20 },
  { postal: "IL", overpayRate: 89.8, annualOverpayment: 3.1, lifetimeLoanTax: 23 },
  { postal: "IN", overpayRate: 88.8, annualOverpayment: 2.5, lifetimeLoanTax: 22 },
  { postal: "KS", overpayRate: 88.9, annualOverpayment: 2.6, lifetimeLoanTax: 21 },
  { postal: "KY", overpayRate: 88.3, annualOverpayment: 2.5, lifetimeLoanTax: 22 },
  { postal: "LA", overpayRate: 89.8, annualOverpayment: 2.6, lifetimeLoanTax: 22 },
  { postal: "MA", overpayRate: 86.3, annualOverpayment: 3.9, lifetimeLoanTax: 21 },
  { postal: "MD", overpayRate: 87.8, annualOverpayment: 3.7, lifetimeLoanTax: 22 },
  { postal: "ME", overpayRate: 88.0, annualOverpayment: 3.2, lifetimeLoanTax: 22 },
  { postal: "MI", overpayRate: 88.5, annualOverpayment: 2.6, lifetimeLoanTax: 22 },
  { postal: "MN", overpayRate: 89.8, annualOverpayment: 3.0, lifetimeLoanTax: 22 },
  { postal: "MO", overpayRate: 89.0, annualOverpayment: 2.6, lifetimeLoanTax: 22 },
  { postal: "MS", overpayRate: 89.1, annualOverpayment: 2.5, lifetimeLoanTax: 22 },
  { postal: "MT", overpayRate: 88.8, annualOverpayment: 3.5, lifetimeLoanTax: 21 },
  { postal: "NC", overpayRate: 85.2, annualOverpayment: 3.0, lifetimeLoanTax: 20 },
  { postal: "ND", overpayRate: 86.8, annualOverpayment: 2.5, lifetimeLoanTax: 19 },
  { postal: "NE", overpayRate: 87.8, annualOverpayment: 2.5, lifetimeLoanTax: 20 },
  { postal: "NH", overpayRate: 89.8, annualOverpayment: 3.8, lifetimeLoanTax: 23 },
  { postal: "NJ", overpayRate: 88.3, annualOverpayment: 4.1, lifetimeLoanTax: 23 },
  { postal: "NM", overpayRate: 88.1, annualOverpayment: 3.1, lifetimeLoanTax: 22 },
  { postal: "NV", overpayRate: 86.8, annualOverpayment: 3.8, lifetimeLoanTax: 22 },
  { postal: "NY", overpayRate: 89.6, annualOverpayment: 3.7, lifetimeLoanTax: 22 },
  { postal: "OH", overpayRate: 88.6, annualOverpayment: 2.5, lifetimeLoanTax: 22 },
  { postal: "OK", overpayRate: 89.4, annualOverpayment: 2.6, lifetimeLoanTax: 22 },
  { postal: "OR", overpayRate: 90.1, annualOverpayment: 3.9, lifetimeLoanTax: 22 },
  { postal: "PA", overpayRate: 90.2, annualOverpayment: 3.0, lifetimeLoanTax: 22 },
  { postal: "PR", overpayRate: 82.9, annualOverpayment: 2.1, lifetimeLoanTax: 17 },
  { postal: "RI", overpayRate: 89.6, annualOverpayment: 3.8, lifetimeLoanTax: 23 },
  { postal: "SC", overpayRate: 86.0, annualOverpayment: 3.0, lifetimeLoanTax: 21 },
  { postal: "SD", overpayRate: 84.2, annualOverpayment: 2.5, lifetimeLoanTax: 18 },
  { postal: "TN", overpayRate: 87.5, annualOverpayment: 3.1, lifetimeLoanTax: 21 },
  { postal: "TX", overpayRate: 86.4, annualOverpayment: 3.3, lifetimeLoanTax: 21 },
  { postal: "UT", overpayRate: 86.4, annualOverpayment: 3.7, lifetimeLoanTax: 20 },
  { postal: "VA", overpayRate: 87.5, annualOverpayment: 3.5, lifetimeLoanTax: 21 },
  { postal: "VT", overpayRate: 86.7, annualOverpayment: 2.9, lifetimeLoanTax: 21 },
  { postal: "WA", overpayRate: 86.5, annualOverpayment: 4.1, lifetimeLoanTax: 21 },
  { postal: "WI", overpayRate: 87.2, annualOverpayment: 2.6, lifetimeLoanTax: 21 },
  { postal: "WV", overpayRate: 88.5, annualOverpayment: 2.4, lifetimeLoanTax: 21 },
  { postal: "WY", overpayRate: 88.0, annualOverpayment: 3.0, lifetimeLoanTax: 20 },
]

function overpayRateBucket(rate: number) {
  if (rate < 85) return 0
  if (rate < 87) return 1
  if (rate < 89) return 2
  if (rate < 90) return 3
  return 4
}

export const HMDA_OVERPAYMENT_BY_STATE: HmdaOverpaymentRow[] = RAW_ROWS.map((row) => ({
  ...row,
  name: POSTAL_TO_NAME[row.postal] ?? row.postal,
  bucket: overpayRateBucket(row.overpayRate),
}))

/** States and DC represented on the US map topojson (excludes territories). */
export const HMDA_OVERPAYMENT_MAP_STATES = HMDA_OVERPAYMENT_BY_STATE.filter(
  (row) => row.postal !== "PR"
)

export function hmdaNationalAverageOverpayRate(states = HMDA_OVERPAYMENT_MAP_STATES) {
  const total = states.reduce((sum, row) => sum + row.overpayRate, 0)
  return total / states.length
}

export function hmdaExtremeOverpayRate(
  states: HmdaOverpaymentRow[],
  direction: "highest" | "lowest"
) {
  return states.reduce((current, row) => {
    if (direction === "highest") {
      return row.overpayRate > current.overpayRate ? row : current
    }
    return row.overpayRate < current.overpayRate ? row : current
  })
}
