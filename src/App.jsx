import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Router from "./router/router";
import defaultOptions from "./configs/reactQuery";

function App() {
  const queryClient = new QueryClient({ defaultOptions });
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}

export default App;
