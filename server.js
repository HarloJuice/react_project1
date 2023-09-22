const express = require("express");
const cors = require("cors"); 
const app = express();
const port = 3001; 

app.use(cors());
app.use(express.json()); 


app.post("/register", (req, res) => {
 
  const { email, phone, password } = req.body;  
  console.log("Подані дані:", email, phone, password);  
  res.status(200).send("Реєстрація пройшла успішно");
});

app.listen(port, () => {
  console.log(`Сервер запущено на порту ${port}`);
});
