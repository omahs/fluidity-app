/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverDependenciesToBundle: [
    /^react-dnd.*/,
    /^@react-dnd.*/,
    /^react-dnd-html5-backend.*/,
    /^react-dnd-touch-backend.*/,
    "dnd-core",
  ],
  ignoredRouteFiles: ["**/__tests__/**"],
  serverBuildTarget: "arc",
  server: "./server.js",
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  serverBuildPath: "server/index.js",
};
