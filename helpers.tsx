const toFixed = (amount: number, numberOfDecimals: number) =>
  amount.toFixed(numberOfDecimals);

export const formattedRating = (rating: number) => (
  <>&nbsp;({rating ? toFixed(rating, 1) : 0})</>
);

export const formattedAmount = (amount: number, currency: string) => {
  const isPound = currency === 'GBP';

  return isPound
    ? `£${toFixed(Number(amount), 2)}`
    : `${toFixed(Number(amount), 2)} ${currency}`;
};
