const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'dylan': {
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    }
}

// main path '/'
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

// app.get('/api', (req, res) => {
//     res.json(rappers)
// })
app.get('/api/:rapperName', (request, response) => {
    console.log(request.params.rapperName)
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['Dylan'])
    }
    // res.json(rappers)
})

app.listen(PORT, () =>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})


// http://localhost:8000/
// localhost:8000 is up and running. We can see that we made a request to our server.
// The server heard taht we were asking for the default path and it responded with our HTML file.
