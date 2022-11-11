import { useReducer, useEffect, useRef } from "react";

interface State<T> {
  data?: T;
  error?: Error;
  loading?: boolean;
}

type Cache<T> = { [url: string]: T };

type Action<T> = { type: "loading" } | { type: "fetched"; payload: T } | { type: "error"; payload: Error };

const useFetch = <T = unknown>(url: string, page: number = 1) => {
  const cache = useRef<Cache<T>>({});

  const cancelRequest = useRef<boolean>(false);

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
    loading: true,
  };

  const fetchReducer = (state: State<T> = initialState, action: Action<T>): State<T> => {
    switch (action.type) {
      case "loading":
        return { ...initialState, loading: true };
      case "fetched":
        return { ...initialState, loading: false, data: action.payload };
      case "error":
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url) return;

    cancelRequest.current = false;

    const fetchData = async () => {
      dispatch({ type: "loading" });

      if (cache.current[`${url}&page=${page}`]) {
        dispatch({
          type: "fetched",
          payload: cache.current[url],
        });
        return;
      }

      try {
        const response = await fetch(`${url}&page=${page}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();

        cache.current[url] = data;

        if (cancelRequest.current) return;

        dispatch({
          type: "fetched",
          payload: data,
        });
      } catch (error) {
        if (cancelRequest.current) return;

        dispatch({
          type: "error",
          payload: error as Error,
        });
      }
    };

    void fetchData();

    return () => {
      cancelRequest.current = true;
    };
  }, [url, page]);

  return state;
};

export default useFetch;
