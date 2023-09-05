const express =require("express");
const mongoose = require("mongoose");
const routes =require("./route/route");
const recipeController=require("./Controllers/receipeController");
// const Axios=require("axios")
var cors = require("cors");
app.use(cors());

const app = express();

app.use(express.json());
app.use("/", routes);


// // Routes
// app.post('/', receipeController.createRecipe);
app.post('/', recipeController.createRecipe);
app.get('/', recipeController.getAllRecipes);
app.put('/', recipeController.updateRecipe);
app.delete('/', recipeController.deleteRecipe);

//Data base connecetion

mongoose.connect("mongodb+srv://poojitha2003:Jpoojitha2003@cluster0.7zh8jc4.mongodb.net/").then(()=>{
    console.log("Database Connected Successfully");

    
    app.post("/ins", function (req, res) {
        const fdata = req.body.fdata;
        conn.collection("backend").insertOne(fdata, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log("inserted");
            res.status(202).send("success");
          }
        });
      });
      app.listen(4000, () => {
        console.log("server running at 4000");
      });

})
.catch((error)=>{
    console.log(error);
});

app.listen(3001,()=>{
    console.log("Server Connected at 3001");
});