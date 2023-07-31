export function sortByAttr<T>(list: T[], attr: keyof T, ascending: boolean = true): T[] {
  if (!list.length) return [];

  return [...list].sort((a, b) => {
    const valueA = a[attr];
    const valueB = b[attr];

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      const compareResult = valueA.localeCompare(valueB);
      return ascending ? compareResult : -compareResult;
    }

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return ascending ? valueA - valueB : valueB - valueA;
    }

    return 0;
  });
}
