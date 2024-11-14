import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { NextUIProvider } from "@nextui-org/react";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/grid";
// import "swiper/css/pagination";
import { ClerkProvider } from "@clerk/clerk-react";

const queryClient = new QueryClient();
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <HashRouter>
            <QueryClientProvider client={queryClient}>
                <NextUIProvider>
                    <App />
                </NextUIProvider>
            </QueryClientProvider>
        </HashRouter>
    </ClerkProvider>
);
