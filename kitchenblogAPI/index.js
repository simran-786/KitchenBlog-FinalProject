import express  from 'express';
import bodyParser from 'body-parser';
import postsRoutes from './routes/posts.js';
//import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb://localhost:27017/kitchenblog', {
    useNewUrlParser: true,
   useUnifiedTopology: true
})
.then(() =>{
console.log('Mongodb connected...');
})

const PORT = 5000;

app.use(bodyParser.json());

//CORS HEADERS MIDDLEWARE
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/posts', postsRoutes);

app.get('/', (req, res) => {
console.log('hi');

res.send('it works');
});

app.listen(PORT, () => console.log(`server Running on port: http://localhost:${PORT}`));

