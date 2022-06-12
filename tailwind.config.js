/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                "custom-orange": "hsl(25, 97%, 53%)",
                "custom-white": "hsl(0, 0%, 100%)",
                "custom-light-grey": "hsl(217, 12%, 63%)",
                "custom-medium-grey": "hsl(216, 12%, 54%)",
                "custom-dark-blue": "hsl(213, 19%, 18%)",
                "custom-very-dark-blue": "hsl(216, 12%, 8%)"
            }
        }
    },
    plugins: []
};
