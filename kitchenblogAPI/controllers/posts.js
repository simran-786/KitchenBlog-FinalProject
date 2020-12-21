import { v4 as uuidv4 } from 'uuid';

let posts = [];

export const getPosts = (req, res) => {
    res.send(posts);
}

export const createPost = (req, res) => {
    const post = req.body;

    posts.push({ ...post, id: uuidv4() });

    res.send(`Recipe named ${post.Recipe} added to the database.`);
}

export const getPost = (req, res) => {
    const { id } = req.params;
 
     const foundPost = posts.find((post) => post.id === id);
 
     res.send(foundPost);
 }

 export const deletePost = (req, res) => {
    const { id } = req.params;

    posts = posts.filter((post) => post.id != id);

    res.send(`Recipe with the id ${id} was deleted from the database.`);
}

export const updatePost = (req, res) => {
    const { id } = req.params;
    const { Recipe, content } = req.body;

    const post = posts.find((post) => post.id === id);

    if(Recipe) post.Recipe = Recipe;
    if(content) post.content = content;

    res.send(`Recipe with the id ${id} has been updated.`); 
}
