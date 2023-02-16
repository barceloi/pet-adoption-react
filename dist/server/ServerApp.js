import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { createContext, lazy, useState, Suspense } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as jsxRuntime from "react/jsx-runtime";
const AdoptedPetContext = createContext();
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const Details = lazy(() => import("./assets/Details.b61f35dc.js"));
const SearchParams = lazy(() => import("./assets/SearchParams.cdd00298.js"));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity
    }
  }
});
const App = () => {
  const adoptedPetHook = useState(null);
  return /* @__PURE__ */ jsx("div", {
    className: " m-0 p-0",
    style: {
      background: "url(https://pets-images.dev-apis.com/pets/wallpaperA.jpg)"
    },
    children: /* @__PURE__ */ jsx(QueryClientProvider, {
      client: queryClient,
      children: /* @__PURE__ */ jsx(Suspense, {
        fallback: /* @__PURE__ */ jsx("div", {
          className: "flex min-h-screen items-center justify-center p-10",
          children: /* @__PURE__ */ jsx("div", {
            className: "animate-spin",
            children: /* @__PURE__ */ jsx("div", {
              className: "jusify-center flex items-center",
              children: /* @__PURE__ */ jsx("span", {
                className: "text-6xl",
                children: "\u{1F436}"
              })
            })
          })
        }),
        children: /* @__PURE__ */ jsxs(AdoptedPetContext.Provider, {
          value: adoptedPetHook,
          children: [/* @__PURE__ */ jsx("header", {
            className: "mb-8 bg-gray-900 py-24 px-6 sm:py-32 lg:px-8 ",
            children: /* @__PURE__ */ jsx("div", {
              className: "mx-auto max-w-2xl text-center",
              children: /* @__PURE__ */ jsx(Link, {
                className: "text-4xl font-bold tracking-tight text-white hover:text-gray-200 sm:text-6xl",
                to: "/",
                children: /* @__PURE__ */ jsx("h1", {
                  children: "Adopt Me!"
                })
              })
            })
          }), /* @__PURE__ */ jsxs(Routes, {
            children: [/* @__PURE__ */ jsx(Route, {
              path: "/details/:id",
              element: /* @__PURE__ */ jsx(Details, {})
            }), /* @__PURE__ */ jsx(Route, {
              path: "/",
              element: /* @__PURE__ */ jsx(SearchParams, {})
            }), /* @__PURE__ */ jsx(Route, {})]
          })]
        })
      })
    })
  });
};
function render(url, opts) {
  const stream = renderToPipeableStream(/* @__PURE__ */ jsx(StaticRouter, {
    location: url,
    children: /* @__PURE__ */ jsx(App, {})
  }), opts);
  return stream;
}
export {
  AdoptedPetContext as A,
  jsx as a,
  render as default,
  jsxs as j
};
