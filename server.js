const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));

  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Online on port: ${PORT}`);
});
