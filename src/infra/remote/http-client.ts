export const fetchWithAbort = async (url: string, signal: AbortSignal) => {
  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
