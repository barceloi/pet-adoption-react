import { useState, lazy, Suspense } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPetHook = useState(null);
  return (
    <div
      className=" m-0 p-0"
      style={{
        background: "url(https://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Suspense
          fallback={
            <div className="flex min-h-screen items-center justify-center p-10">
              <div className="animate-spin">
                <div className="jusify-center flex items-center">
                  <span className="text-6xl">🐶</span>
                </div>
              </div>
            </div>
          }
        >
          <AdoptedPetContext.Provider value={adoptedPetHook}>
            <header className="mb-8 bg-gray-900 py-24 px-6 sm:py-32 lg:px-8 ">
              <div className="mx-auto max-w-2xl text-center">
                <Link
                  className="text-4xl font-bold tracking-tight text-white hover:text-gray-200 sm:text-6xl"
                  to="/"
                >
                  <h1>Adopt Me!</h1>
                </Link>
              </div>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
              <Route />
            </Routes>
          </AdoptedPetContext.Provider>
        </Suspense>
      </QueryClientProvider>
    </div>
  );
};

export default App;

// TODO llevarse al form a un componente separado
