const { request } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {

    '21 savage':{
        'birthName':'PaperBoi',
        'age': 29,
        'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'birthName':'chancelor Benette',
        'age': 29,
        'birthLocation': 'Chi Town'
    },
    'unknown':{
        'birthName':'Dylan Dylan',
        'age': 0,
        'birthLocation': 'Unknown'
    }
}

app.get('/', (request,response)=>{
    response .sendFile(__dirname + '/index.html')
})
app.get('/api/:name',(request, response)=>{
   const rapperName = request.params.name.toLowerCase()
   if(rappers[rapperName] ){
    response.json(rappers[rapperName])
   }else{
       response.json(rappers['unknown'])
   }
    
})
app.listen(PORT, ()=>{
    console.log(`The server is now running on ${PORT} betta go catch it`)
})