import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelTokenSource } from "axios";

interface ApiConfig extends AxiosRequestConfig {
  abort?: (cancel: (message?: string) => void) => void;
}

type AxiosFn = (...args: unknown[]) => Promise<AxiosResponse>;

const axiosParams: AxiosRequestConfig = {
  baseURL:
    import.meta.env.DEV ? "http://localhost:3000" : "/",
};

const axiosInstance: AxiosInstance = axios.create(axiosParams);

const didAbort = (error: unknown): boolean => axios.isCancel(error);

const getCancelSource = (): CancelTokenSource => axios.CancelToken.source();

const withAbort =
  (fn: AxiosFn) =>
  async (...args: unknown[]): Promise<AxiosResponse> => {
    const originalConfig = args[args.length - 1] as ApiConfig;
    const { abort, ...config } = originalConfig;

    if (typeof abort === "function") {
      const { cancel, token } = getCancelSource();
      config.cancelToken = token;
      abort(cancel);
    }

    try {
      return await fn(...args.slice(0, args.length - 1), config);
    } catch (error) {
      if (didAbort(error)) {
        (error as Error & { aborted: boolean }).aborted = true;
      }
      throw error;
    }
  };

const api = (axios: AxiosInstance) => {
  return {
    get: (url: string, config: ApiConfig = {}) =>
      withAbort(axios.get as AxiosFn)(url, config),
    post: (url: string, body: unknown, config: ApiConfig = {}) =>
      withAbort(axios.post as AxiosFn)(url, body, config),
    put: (url: string, body: unknown, config: ApiConfig = {}) =>
      withAbort(axios.put as AxiosFn)(url, body, config),
    patch: (url: string, body: unknown, config: ApiConfig = {}) =>
      withAbort(axios.patch as AxiosFn)(url, body, config),
    delete: (url: string, config: ApiConfig = {}) =>
      withAbort(axios.delete as AxiosFn)(url, config),
  };
};

export default api(axiosInstance);
