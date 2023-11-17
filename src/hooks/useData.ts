import { useState } from "react";
import { useEffect } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";

interface ResponseObj<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setGenres] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<ResponseObj<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
