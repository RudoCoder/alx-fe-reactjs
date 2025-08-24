import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

<QueryClientProvider client={queryClient}>
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">React Query Demo</h1>
    <PostsComponent />
  </div>
  <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>

export default App;
