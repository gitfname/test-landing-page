/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.tsx"
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--primary)",
                gray1: "#333333"
            }
        },
    },
    darkMode: "class",
    daisyui: {
        themes: [{
            light: {
                ...require("daisyui/src/theming/themes")["light"],
                primary: "#128C76",
                error: "#F56B8D"
            }
        }]
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("daisyui")
    ],
}