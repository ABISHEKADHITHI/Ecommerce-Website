const mongoose = require("mongoose")
const dotenv = require("dotenv")
const connectdb = require("./config/db")
const express = require("express")
const port = process.env.PORT | 5000

dotenv.config()
connectdb()

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("API is running")
})

app.listen( port, () => console.log(`Server is running on the port ${port}`))
