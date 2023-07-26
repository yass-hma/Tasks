import express from "express"
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render('index.ejs')
});

app.listen(3000,function(){
    console.log('Server start')
})