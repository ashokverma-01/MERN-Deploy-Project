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

const corsOptions = {
  origin: "https://mern-deploy-project-1.onrender.com",
  credentials: true,
};
app.use(cors(corsOptions));

const _dirname = path.resolve();

app.use(express.static(path.join(_dirname, "frontend/build")));

app.use("/user", userRote);

app.get("*", (_, res) => {
  res.sendFile(path.resolve(_dirname, "frontend/build", "index.html"));
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});
