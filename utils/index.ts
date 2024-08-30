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


export const sumPrices = (arr: { date: string; price: number }[]) =>
  arr.reduce((acc, stock) => {
    acc += stock.price;
    return acc;
  }, 0);
