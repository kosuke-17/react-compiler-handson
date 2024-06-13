export const YEAR = [2023, 2024, 2025, 2026]
export const MONTH = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export const VALUES: { key: string; value: number }[][] = YEAR.map((y) => {
  return MONTH.map((m) => {
    return {
      key: `${y}-${m}`,
      value: 0,
    }
  })
})
