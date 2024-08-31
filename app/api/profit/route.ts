import { annualized, generateStockData, sumPrices } from "@/utils";
import { NextResponse } from "next/server";

const stockData = [
  {
    id: "Fintual 01",
    prices: generateStockData("2021-01-01", "2024-6-31"),
  },
  {
    id: "Fintual 02",
    prices: generateStockData("2021-01-01", "2024-6-31"),
  },
];

export async function GET(req: NextResponse) {
  const { searchParams } = new URL(req.url);
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  const filtered = stockData.map((stock) => {
    return {
      id: stock.id,
      prices: stock.prices.filter((price) => {
        return price.date === startDate || price.date === endDate;
      }),
    };
  });


  const profit = () => {
    return filtered.map((stock) => {
      return {
        id: stock.id,
        price: sumPrices(stock.prices),
        annualized: annualized(stock, startDate, endDate),
        startDatePrice: stock.prices[0].price,
        endDatePrice: stock.prices[1].price,
      };
    });
  };

  return NextResponse.json({
    annualized: 80,
    profit: profit(),
  });
}
