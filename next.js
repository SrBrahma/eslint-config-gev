module.exports = {
  extends: ["next/core-web-vitals", "next/typescript", "./ts.js"],
  rules: {
    ...require("./shared-react.js"),
  },
}
