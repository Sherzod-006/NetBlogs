//IMPORTING DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

//CONFIGURING ENVIRONMENT VARIABLES
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

//IMPORTING ROUTES
const authMiddlewareRoute = require("./routes/AuthMiddlewareRoute");
const authRoutes = require("./routes/AuthRoute");
const userRoutes = require("./routes/UserRoute");

//USING ROUTES
app.use("/api/user", authMiddlewareRoute);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

//CONNECTING TO MONGODB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(
        `Connected to MongoDB and server is running on port ${
          process.env.PORT || 5000
        }`
      );
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
