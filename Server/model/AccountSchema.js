const mongoose = require("mongoose");

// acname,type,owner,city,source,sector,pstcode,sic,state,country,revenue,phone,websit,emplye,addline

const AccountSchema = new mongoose.Schema({
    acname: {
        type: String,
        required: true,
        unique:true
    },
    type: {
        type: String,
        required: true,
        unique: true
    },
    owner: { 
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    sector: {
        type: String,
        required: true
    },
    pstcode: {
        type: Number,
        required: true
    },
    sic: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    revenue: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    websit: {
        type: String,
        required: true
    },
    emplye: {
        type: Number,
        required: true
    },
    addline: {
        type: String,
        required: true
    }
});

const Account = new mongoose.model("Account",AccountSchema);


module.exports = Account;

