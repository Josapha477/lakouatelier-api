const express = require("express");
const healthRoutes = require("./routes/health.routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "Lakou Atelier API",
    version: "1.0.0",
    status: "online"
  });
});

app.use("/api/health", healthRoutes);

module.exports = app;
