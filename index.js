const express = require('express')
const app = express()

const chefData = require('./chefData.json')

app.get('/',(req,res)=>{
    res.json({message:'running'})
})

app.get('/allData',(req,res)=>{
    res.send(chefData)
})

app.listen(5000,()=>{
    console.log('server is running at 5000')
})