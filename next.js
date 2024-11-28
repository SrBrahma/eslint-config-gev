/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["next/core-web-vitals", "./ts.js"],
  rules: {
    ...require("./shared-react.js"),
  },
}

module.exports = config
