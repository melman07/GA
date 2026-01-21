const express = require("express");
const app = express();

const port = process.env.por || 3000;

app.listen(port, () => {
    console.log("Server running on http://localhost:" + port)
});

app.use(express.json());

app.use(express.static("client"));

const guitars = [
  {
    id: 1,
    brand: "Fender",
    model: "Stratocaster"
  },
  {
    id: 2,
    brand: "Gibson",
    model: "Les Paul"
  },
  {
    id: 3,
    brand: "Ibanez",
    model: "RG550"
  },
  {
    id: 4,
    brand: "PRS",
    model: "Custom 24"
  },
  {
    id: 5,
    brand: "Yamaha",
    model: "Pacifica 112V"
  }
];


app.get("/cars", (req,res)=>{
    res.json(guitars)
});