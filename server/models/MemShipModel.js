const mongoose = require("mongoose");

const MemberModel = mongoose.Schema({
    userWallet: { type: String, ref: "CryptoUser" },
    isMember: { type: Boolean, default: false },
    whatMember: { type: String },
    startDateMem: { type: Date }
})

const MemberDetails = mongoose.model('MemberTable', MemberModel)
module.exports = MemberDetails