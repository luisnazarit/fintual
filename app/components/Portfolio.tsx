"use client";
import usePortfolio from "@/hooks/usePortfolio";
import PortfolioLoader from "./loaders/PortfolioLoader";

type Stock = {
  id: string;
  price: number;
  annualized: number;
};

export default function Portfolio({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) {
  const { profit, loading } = usePortfolio(startDate, endDate);

  if (loading) return <PortfolioLoader />;

  return (
    <div className="mx-auto max-w-3xl shadow-lg rounded-xl p-12">
      <h1 className="mb-12 text-2xl">Portfolio Analysis</h1>
      {profit && profit.length > 0 ? (
        profit.map((stock: Stock) => (
          <div key={stock.id} className="mb-4">
            <div className="flex gap-8 border-b border-slate-200 py-4">
              <div className="text-lg">{stock.id}:</div>
              <div className="text-sm flex gap-8">
                <div>
                  <p>
                    {startDate}:{" "}
                    <strong>{stock.startDatePrice.toFixed(2)}</strong>
                  </p>
                  <p>
                    {endDate}: <strong>{stock.endDatePrice.toFixed(2)}</strong>
                  </p>
                </div>
                <div>
                  <p>
                    Profit: <strong>{stock.price.toFixed(2)}</strong>
                  </p>
                  <p>
                    Annualized: <strong>{stock.annualized.toFixed(2)}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
}
