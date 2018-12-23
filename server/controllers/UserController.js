const _ = require("lodash");
var {mongoose} = require("../db/mongoose");
var {User} = require("../models/user");

exports.createUser = (req, res) =>{
    var body = _.pick(req.body, ['email', 'password']);

    var user = new User(body)

    user.save().then((doc) =>{
        res.status(200).send(doc)
    }).catch((e)=>{
        res.status(400).send(e);
    })
}