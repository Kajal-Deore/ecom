const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const path = require('path')
const db = require('./config/mongoose-connection')
const ownerRouter = require('./routes/ownerRouter')
const productRouter = require('./routes/productRouter')
const userRouter = require('./routes/userRouter')

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname,'public')))

app.use('/owners', ownerRouter)
app.use('/users', userRouter)
app.use('/product', productRouter)

app.get('/', (req,res)=>{
    res.send("hey")
})

// app.post('/', (req,res)=>{

// })

app.listen(3000)