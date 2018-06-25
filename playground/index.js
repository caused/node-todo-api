var userRepository = require("./repository/UserRepository");

userRepository.getUsers((err, users)=>{
    if(!err){
        console.log(JSON.stringify(users, undefined, 2));
    }
})

userRepository.getUsers((err, users)=>{
    if(!err){
        console.log(JSON.stringify(users, undefined, 2));
    }
})
