import { useQueryClient } from "@tanstack/react-query";

function useGetQueryData(name) {
  const queryClient = useQueryClient();
  return queryClient.getQueryData([name]);
}

export { useGetQueryData };
