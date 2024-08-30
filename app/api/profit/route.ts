import { generateStockData, sumPrices } from "@/utils";
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

  const calcYears = (startDate: string | null, endDate: string | null) => {
    const start = new Date(startDate || "2021-01-01");
    const end = new Date(endDate || "2021-01-01");
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays / 365;
  };

  const profit = () => {
    return filtered.map((stock) => {
      return {
        id: stock.id,
        price: sumPrices(stock.prices),
        annualized: (sumPrices(stock.prices) * 12) / calcYears(
          startDate,
          endDate
        ),
      };
    });
  };

  return NextResponse.json({
    annualized: 80,
    profit: profit(),
  });
}
