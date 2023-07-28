export const fetchWithAbort = async (url: string, signal: AbortSignal) => {
  const mensagensDeErro: Record<number, string> = {
    400: 'Ops! Algo deu errado com sua solicitação. Por favor, verifique a entrada e tente novamente.',
    404: 'Ops! O recurso que você está procurando não pôde ser encontrado. Por favor, tente novamente.',
    500: 'Ops! Estamos enfrentando algumas dificuldades técnicas. Por favor, tente novamente mais tarde.',
  };

  try {
    const response = await fetch(url, { signal });

    if (!response.ok) {
      const status = response.status;
      const mensagemDeErro = mensagensDeErro[status] || 'Ops! A resposta da rede não foi a esperada. Por favor, tente novamente.';
      throw new Error(mensagemDeErro);
    }

    return response.json();
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') return // ignore abortControl errors
    throw new Error('Ops! Ocorreu um erro inesperado ao fazer a operação. Tente novamente mais tarde.');
  }
};
