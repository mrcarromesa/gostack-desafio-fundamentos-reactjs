const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export const formatDate = (value: Date): string =>
  Intl.DateTimeFormat('pt-BR').format(value);

export default formatValue;
