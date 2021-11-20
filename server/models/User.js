const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    _id : {
        type: Number,
        require : true
    },
    name : {
        type: String,
        require : true
    },
    type : {
        type: String,
        require : true
    }
})

module.exports = mongoose.model('users', UserSchema);