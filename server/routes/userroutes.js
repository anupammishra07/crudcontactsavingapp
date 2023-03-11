const express =require("express");
const router=express.Router()

const {create, getAllUser, updateUser, deleteUser, getusers,  } =require("../controllers/usercontrollers")

router.route("/create",).post(create);
router.route("/alluser",).get(getAllUser);
router.route("/users/:id",).get(getusers);
router.route("/updateuser/:id",).put(updateUser);
router.route("/deleteuser/:id",).delete(deleteUser);

module.exports= router
