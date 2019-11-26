const express = require('express')
const app = express()
const port = 3030

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, (err)=>{
    if(err){
        console.log('Failed...Shutting down now.')
        console.log('Error: ' + err)
    }else{
        console.log('Listening at port ' + port)
    }
})