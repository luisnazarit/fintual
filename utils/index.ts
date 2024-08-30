export const generateStockData = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const prices = [];
  let currentDate = start;

  while (currentDate <= end) {
    const dateString = currentDate.toISOString().split("T")[0];
    const price = (Math.random() * 100 + 100).toFixed(2);
    prices.push({ date: dateString, price: parseFloat(price) });

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return prices;
};

const calcYears = (startDate: string | null, endDate: string | null) => {
  const start = new Date(startDate || "2021-01-01");
  const end = new Date(endDate || "2021-01-01");
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays / 365;
};

export const sumPrices = (arr: { date: string; price: number }[]) =>
  arr.reduce((acc, stock) => {
    acc += stock.price;
    return acc;
  }, 0);

export const annualized = (
  stock: { prices: { date: string; price: number }[] },
  startDate: string | null,
  endDate: string | null
) => {
  return (sumPrices(stock.prices) * 12) / calcYears(startDate, endDate);
};
