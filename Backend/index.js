import express from "express";

const app = express();

// app.get('/', (req, res)=>{ 
//     res.send("Server is Ready");
// })

// Get a list of Five Jokes

app.get('/jokes', (req, res)=>{
    const jokes = [
        {
            id: 1,
            title: 'A Joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another Joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'A third Joke',
            content: 'This is a third joke'
        },
        {
            id: 4,
            title: 'A fourth Joke',
            content: 'This is a fourth joke'
        },
        {
            id: 5,
            title: 'A fifth Joke',
            content: 'This is a fifth joke'
        }
    ];
     res.send(jokes);
})

const port = process.env.PORT || 3001; 

app.listen(port, ()=>{
    console.log(`Server at http://localhost:${port}`);
})