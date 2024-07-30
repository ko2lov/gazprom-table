const express = require("express");
const app = express();
const PORT = 5001;
const { parse } = require("csv-parse/sync");
const fs = require("fs");
const cors = require("cors"); // Убедитесь, что cors установлен: npm install cors
app.use(cors());

const data = fs.readFileSync("./data/article_def_v_orig.csv");
const records = parse(data, { columns: true, skip_empty_lines: true });

app.use(express.static("public"));

app.get("/api/data", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;
  const paginatedItems = records.slice(offset, offset + limit);
  res.json({ data: paginatedItems, total: records.length });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
