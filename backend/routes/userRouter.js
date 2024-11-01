const express = require("express")

const userRouter = express.Router();



const authentication = require("../middleware/authentication")

const {creatUser, getAllUsers, login, updateUserById ,delateUserById,getuserById} = require("../controllers/users")


userRouter.post('/register', creatUser);
userRouter.get('/allusers', getAllUsers);
userRouter.post("/login", login);
userRouter.put("/update/:id", authentication, updateUserById);
userRouter.delete("/delete/:id", delateUserById);
userRouter.get("/user/:id", authentication, getuserById);

module.exports = userRouter