export function twMerge(base: string, addiction?: string) {
  if (!addiction) return base
  const mergedClasses = [...base, ...addiction]
  const uniqueClasses = new Set(mergedClasses)
  return Array.from(uniqueClasses).join(' ')
}
