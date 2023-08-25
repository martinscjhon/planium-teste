export const formatMoney = (real: number) => {
  const format = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(real)

  return format
}
