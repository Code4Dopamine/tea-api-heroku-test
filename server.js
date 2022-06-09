const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 3000

//Test Object
const tea = {
    'oolong':{
        'name': "Kao Shan Oolong",
        'yearMade': 2020,
        'caffineLevel': "Low",
        'roastTime':"Medium",
        'origin': "Taiwan"
    },
    'matcha':{
        'name': "Kyoto Matcha",
        'yearMade': 2020,
        'caffineLevel': "Medium",
        'roastTime':"Light",
        'origin': "Japan"
    }
}

// Read from index.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Checking for API
// app.get('/api', (req, res)=>{
//     console.log(req.params.name)
//     res.json(tea)
// })

app.get('/api/:name', (req, res)=>{
    // console.log(req.params.name)
    const teaName = req.params.name.toLowerCase()
    if (tea[teaName]){
        res.json(tea[teaName])
    }else{
        res.json({'error': 'Tea not found in database'})
    }
    // res.json(tea)
})



// Listen based on PORT var
app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}.`)
})


