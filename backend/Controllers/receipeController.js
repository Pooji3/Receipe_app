// const studentModel = require("../models/recipeModel");

// const createRecipe = async(req,res)=>{
//     try{
//     let data = req.body
//     let createData = await recipeModel.create(data)
//     return res
//     .status(201)
//     .send({
//         status:true,
//         msg:"recipe Created Successfully",
//         data: createData,
//      });
// }catch(error){
//     return res.status(500).send(error);
// }
// };
// module.exports = {createRecipe };

const Recipe = require('../Models/receipeModel');

// Create a new recipe
exports.createRecipe = async (req, res) => {
  try {
    const recipeData = req.body;

    const recipe = await Recipe.create(recipeData);
    res.status(201).json(recipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating recipe' });
  }
};

// Get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching recipes' });
  }
};

// Update a recipe by ID
exports.updateRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const updatedData = req.body;

    const recipe = await Recipe.findByIdAndUpdate(recipeId, updatedData, { new: true });
    res.json(recipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating recipe' });
  }
};

// Delete a recipe by ID
exports.deleteRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;

    await Recipe.findByIdAndRemove(recipeId);
    res.json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting recipe' });
  }
};