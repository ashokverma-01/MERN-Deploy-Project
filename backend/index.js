const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
require("./db/connection.js");
const userRote = require("./routes/userRoute.js");

const app = express();

const PORT = process.env.PORT || 3005;
app.use(express.json());
app.use(cors());

const _dirname = path.resolve();

app.use(express.static(path.join(_dirname, "frontend", "dist")));

app.use("/user", userRote);

app.get("*", (_, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
