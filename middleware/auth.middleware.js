import { getSession } from "../services/auth.services.js";

function isLoggedIn(req,res,next){
    console.log(req.cookies.sessionId)
    const user=getSession(req.cookies.sessionId)
    if(!user){
        console.log(user);
         return res.json({
            message:"please loginn again"
        })
    }
    next();
}

export default isLoggedIn