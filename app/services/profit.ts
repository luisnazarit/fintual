export default async function profitService(startDate: string, endDate: string) {
  return fetch("/api/profit?startDate=" + startDate + "&endDate=" + endDate)
    .then((res) => res.json())
    .then((data) => data);
}
