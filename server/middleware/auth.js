import fetch from 'node-fetch'

const verirfyAuth = async (req, res, next) => {
    const token = req.cookies['x-auth-token'] || ''

    const promise = await fetch('http://localhost:9999/api/user/verify', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token 
        }
    })

    const users = await promise.json() 
    
    req.users = users

    next()
}
export default verirfyAuth 