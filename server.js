// const express = require("express");
// const next = require("next");
// const { createProxyMiddleware } = require("http-proxy-middleware");
// require("dotenv").config();

// const hostname = "127.0.0.1";
// const port = process.env.PORT || 8080;
// const dev = process.env.NODE_ENV !== "production";
// // console.log("env vars",process.env.NODE_ENV)
// const app = next({ dev, port, hostname });

// const handle = app.getRequestHandler();

// app
//   .prepare()
//   .then(() => {
//     //apply proxy in dev mode
//     const server = express();
//     if (dev) {
//       server.use(
//         "/api",
//         createProxyMiddleware({
//           target: process.env.BACKEND,
//           changeOrigin: true,
//         })
//       );
//     } else {
//       server.use(
//         "/api",
//         createProxyMiddleware({
//           target: process.env.BACKEND,
//           changeOrigin: true,
//         })
//       );
//     }
//     server.all("*", (req, res) => {
//       return handle(req, res);
//     });

//     server.listen(port, (err) => {
//       if (err) {
//         throw err;
//       }
//       console.log(
//         "Server running on port " +
//           port +
//           " and proxying to " +
//           process.env.BACKEND
//       );
//     });
//   })
//   .catch((error) => {
//     console.log("error", req.url, error);
//   });
