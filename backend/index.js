const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

// Cargar datos desde un JSON simulado
app.get("/products", (req, res) => {
  const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
  res.json(data);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
