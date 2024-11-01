const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./models/db")

const db = require("./models/db")
const app = express();
const PORT = process.env.PORT;

// Import Routers

const usersRouter = require("./routes/userRouter");

const roleRouter = require("./routes/roleRouter")


app.use(cors());
app.use(express.json());

// Routes Middleware

app.use("/users", usersRouter);
app.use ("/role",roleRouter);

// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});


/* 
mongodb+srv://allaemad:B4uzhVng2LkYj5sz@cluster0.p1k1g.mongodb.net/
mongodb://127.0.0.1:27017/3lean
*/