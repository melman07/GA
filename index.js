const express = require("express");
const app = express();

const {getData,saveData} = require("./functions")

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server running on http://localhost:" + port)
});

app.use(express.json());

app.use(express.static("client"));


app.get("/guitars", async (req,res)=>{

  guitars = await getData("db.json")
  res.json(guitars)
});


app.delete("/guitars/:id",(req,res)=>{

  guitars = getData("db.json")
  guitars = guitars.filter(g=>g.id != req.params.id);
  res.status(200).json({message:"deleted"});
  

});