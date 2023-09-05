const express = require("express");
const router = express.Router()


const userController = require("../Controllers/userController");
const receipeController=require("../Controllers/receipeController");

router.post("/register",userController.createUser);

router.post("/get",receipeController.createRecipe);
router.get("/gett",receipeController.getAllRecipes);
router.delete("/del",receipeController.deleteRecipe);
router.put("/update",receipeController.updateRecipe);


module.exports = router;