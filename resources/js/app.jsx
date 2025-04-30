import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
// import { ThemeProvider } from "@/components/theme-provider";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            // <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            //     <App {...props} />
            // </ThemeProvider>
            <App {...props} />
        );
    },
    progress: {
        color: "#4f46e5",
    },
});
