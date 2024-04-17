const express = require("express");
const {connectDb} = require("./db");
const app = express();
app.use(express.json());

require('dotenv').config(); 

const cors = require('cors');
app.use(cors);

connectDb();

const mainRouter = require("./routes/main")
app.use("/api/v1",mainRouter);

app.listen(process.env.PORT || 3001,()=>{
    console.log(`Server running on port : ${process.env.PORT}`);
})