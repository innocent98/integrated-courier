const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const router = require("./routes/index");

dotenv.config();

// connect to database
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database connected successfully!"))
  .catch((err) => console.error(err));

//   middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("common"));
app.use(cors());

app.use(router);

app.listen(process.env.PORT || 8061, () => {
  console.log("Server listening on port 8061");
});
