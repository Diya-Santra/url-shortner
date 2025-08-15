const sessionMap=new Map();

function setSession(uid,user){
    sessionMap.set(uid,user)
}

function getSession(uid){
    console.log("sdf",uid)
   const userName=sessionMap.get(uid)
   console.log(userName)
   return userName
}

export{
    setSession,
    getSession
}