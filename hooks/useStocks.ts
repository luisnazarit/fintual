import profitService from '@/app/services/profit'
import React, { useEffect, useState } from 'react'

export default function useStocks() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  
  useEffect(() => {
    profitService().then((data) => {
      setData(data)
    }).finally(() => setLoading(false))
  }, [profitService])
  

  return {
    data,
    loading
  }
}
