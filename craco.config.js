const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@services": path.resolve(__dirname, "src/services"),
      "@data": path.resolve(__dirname, "src/data"),
      "@presentation": path.resolve(__dirname, "src/presentation"),
    },
  },
};
