const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors')

app.use(cors({
    origin: "*",
   
}))

let content = [];

app.post('/', (req,res) => {

    
    if(!req.query.fname || !req.query.lname || !req.query.address || !req.query.hobbies) {
        return res.send({
            error: 'obj not specified'
        })
    }

    const formObj = {
        fname: req.query.fname,
        lname: req.query.lname,
        address: req.query.address,
        hobbies: [...req.query.hobbies.split(',')]
    }

    content.push(formObj);
    
    
    res.send({
        success: 'success'
    })

})

app.get('/', (req,res) => {
    res.send(content)
})



app.listen(port, () => {
    console.log(`Application is running on ${port}`);
})