if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
const express = require('express')
const app = express()
const router = require('./routes/index')
const port = process.env.PORT || 3000;
const {errorhandlers} = require('./middleware/errorhandlres')
const cors = require("cors")


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)
app.use(errorhandlers)

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})
 

