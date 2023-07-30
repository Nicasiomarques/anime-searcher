enum httpStatus {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  PROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
}

export const defaultErrorMessages: Record<number | string, string> = {
  [httpStatus.BAD_REQUEST]:
    'Ops! Algo deu errado com sua solicitação. Por favor, verifique a entrada e tente novamente.',
  [httpStatus.UNAUTHORIZED]:
    'Ops! Você não tem permissão para acessar este recurso. Por favor, faça login novamente.',
  [httpStatus.FORBIDDEN]: 'Ops! Você não tem permissão para acessar este recurso.',
  [httpStatus.NOT_FOUND]:
    'Ops! O recurso que você está procurando não pôde ser encontrado. Por favor, tente novamente.',
  [httpStatus.PROCESSABLE_ENTITY]:
    'Ops! A requisição está bem formada, mas possui erros semânticos. Verifique os campos enviados.',
  [httpStatus.INTERNAL_SERVER_ERROR]:
    'Ops! Estamos enfrentando algumas dificuldades técnicas. Por favor, tente novamente mais tarde.',
  unexpected: 'Ops! Ocorreu um erro inesperado ao fazer a operação. Tente novamente mais tarde.',
  timeout: 'Ops! A requisição excedeu o tempo limite. Por favor, tente novamente.',
  network: 'Ops! A resposta da rede não foi a esperada. Por favor, tente novamente.',
}
