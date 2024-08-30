"use client";
import profitService from '@/app/services/profit';
import { useEffect, useState } from 'react';

const usePortfolio = (startDate: string, endDate: string) => {

  const [profit, setProfit] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    profitService(startDate, endDate).then((data) => {
      setProfit(data.profit);
    }).finally(() => setLoading(false))
  }, [profitService, startDate, endDate]);

  return {
    profit,
    loading
  }

};

export default usePortfolio;
