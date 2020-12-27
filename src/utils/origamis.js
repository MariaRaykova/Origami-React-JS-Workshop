const getOrigamis = async (length) =>{
    const promise = await fetch(`http://localhost:9999/api/origami?length=${length}`) 
    const posts = await promise.json() 
    return posts
}
export default getOrigamis