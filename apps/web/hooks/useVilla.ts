import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useVilla(id: number | string) {
  console.log("useVilla id:", id);
  const { data, error, isLoading } = useSWR(
    id ? `/api/villas/${id}` : null,
    fetcher,
  );

  return {
    villa: data,
    isLoading,
    isError: error,
  };
}
