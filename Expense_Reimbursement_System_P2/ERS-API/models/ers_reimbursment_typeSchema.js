const mongoose = require('mongoose')

const ers_reimbursment_typeSchema = new mongoose.Schema({
reimTypeId: {
    type: String,
    required: true
},
reimType: {
    type: String,
    required: true
},
date: {
type: Date,
    required: true,
    default: Date.now
}
})

module.exports = mongoose.model('ers_reimbursment_type', ers_reimbursment_typeSchema)

