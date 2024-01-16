import { QueryClient, QueryClientProvider } from "react-query";
import { BaseQueryProviderProps } from "./api.types";

function BaseQueryProvider({ children }: BaseQueryProviderProps): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default BaseQueryProvider;
