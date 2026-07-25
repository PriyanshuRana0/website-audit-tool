const express = require("express");
const cors = require("cors");

const auditRoutes = require("./routes/audit");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", auditRoutes);

module.exports = app;