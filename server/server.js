const express = require("express");

const app = express();

// Imort routes
const authRoutes = require("./router/auth");

// middleware
app.use("/api", authRoutes);

const port = process.env.port || 8000;

app.listen(port, () => {
  console.log(`API is Runing on port ${port}`);
});
