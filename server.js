const express = require("express"),
  PORT = process.env.PORT || 3000,
  //morgan = require('morgan'),
  path = require("path"),
  app = express();

// app.use(function(req, res, next) {
//   if (req.headers["x-forwarded-proto"] === "https") {
  //     res.redirect("http://" + req.hostname + req.url);
//   } else {
//     next();
//   }
// });

//app.use(express.static('node_modules/uikit/'));
// app.use(
//   "/css",
//   express.static(path.resolve(__dirname, "node_modules/uikit/dist/css"))
// );
app.use(
  "/js",
  express.static(path.resolve(__dirname, "node_modules/uikit/dist/js"))
);
app.use("/dist", express.static(path.resolve(__dirname, "dist")));
app.use(express.static("public"));

app.listen(PORT, function() {
  console.log("Express server is up on port " + PORT);
});
