const jwt = require(`jsonwebtoken`)
const JWT_SECRET = "pinClone"

const fetchUser = (req, res, next) => {
    const token = req.header(`auth-token`)

    if (!token) res.status(401).send("Faulty Authentication")
    
    try{
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user
        res.json(req.user)
    }catch(error){
        res.status(401).send(`Faulty Authentication`)
    }
}