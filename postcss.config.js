module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    process.env.NODE_ENV === "production" &&
      require("@fullhuman/postcss-purgecss")({
        content: [
          "./public/**/*.html",
          "./src/**/*.html",
          "./src/**/*.js",
          "./src/**/*.ts",
          "./src/**/*.tsx",
        ],

        // Include any special characters you're using in this regular expression
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      }),
  ],
}
