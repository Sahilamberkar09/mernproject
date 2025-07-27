const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");

dotenv.config();
connectDB();

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => res.send("API Running"));

const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes); //

app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get(/.*/, function (req, res) {
  console.log(
    "Serving React Frontend from",
    path.join(__dirname, "./frontend/build/index.html")
  );
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
