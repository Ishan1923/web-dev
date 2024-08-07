import express from 'express'
import bodyParser from 'body-parser';

const port = 8080;
const app = express();

const messages = [];

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/blog", (req, res)=>{
    res.render("blog-page.ejs");
})

app.get("/contacts", (req, res)=>{
    res.render("contacts.ejs");
})

app.get("/projects", (req, res)=>{
    res.render("projects.ejs");
})

app.post("/submitpost", (req, res) => {
    let userID = "The Giant Foodie"

    const newMessage = req.body['msg'];
    if(newMessage){
        messages.push(newMessage);
        res.render("blog-page.ejs", {
            user_post: messages,
            user_id: userID,
            userDP_url: userID[0],
            isPostAvailable: true,
            messagesLength: messages.length
        });
        console.log(messages);
    }
    else{
        res.redirect('/blog');
    }
})

app.listen(port, ()=>{
    console.log(`listening at port ${port}`);
})