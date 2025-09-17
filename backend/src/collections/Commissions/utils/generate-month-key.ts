export const generateMonthKey = (date = new Date()): string => {
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0') // Ensure 2 digits
  const year = date.getUTCFullYear()
  return `${month}/${year}` // e.g. "08/2025"
}

export const isValidMonthKey = (monthKey: string): boolean => {
  const regex = /^(0[1-9]|1[0-2])\/\d{4}$/ // Matches "01" to "12" and 4-digit year
  return regex.test(monthKey)
}
