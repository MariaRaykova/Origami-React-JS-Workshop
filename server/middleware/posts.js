import fetch from 'node-fetch'

const getPosts = async (req, res, next) => {
    const promise = await fetch(`http://localhost:9999/api/origami`) 
    
    const posts = await promise.json() 
    
    req.posts = posts
    
    next()
}
export default getPosts