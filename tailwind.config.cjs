/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                xl: "1320px",
            },

            colors: {
                primary: {
                    DEFAULT: "#6029F5",
                    dark: "#895CDD",
                    light: "#B79CFF",
                },
                warning: {
                    DEFAULT: "#F8CC46",
                    dark: "#DFB73F",
                    light: "#FFE79E",
                },
                accent: {
                    DEFAULT: "#79EAEE",
                    dark: "#6DD2D6",
                },
                secondary: {
                    DEFAULT: "#E335FF",
                    light: "#F9D1FF",
                },
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "2rem",
                    md: "2.25rem",
                    xl: "4.5rem",
                },
            },
        },
    },
    plugins: [],
};
