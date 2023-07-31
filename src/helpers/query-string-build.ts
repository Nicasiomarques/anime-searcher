export function qs(query: { [key: string]: any }): string {
  const queryString = Object.keys(query)
    .map(key => {
      const value = query[key]
      if (value !== undefined && value !== null) {
        if (typeof value === 'object') {
          // Handle nested objects if needed
          return Object.keys(value)
            .map(nestedKey => `${key}[${nestedKey}]=${encodeURIComponent(value[nestedKey])}`)
            .join('&')
        } else {
          return `${key}=${encodeURIComponent(value)}`
        }
      }
      return ''
    })
    .filter(param => param !== '')
    .join('&')

  return queryString
}
