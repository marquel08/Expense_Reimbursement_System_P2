const mongoose = require('mongoose')

const erSchema = new mongoose.Schema({
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

module.exports = mongoose.model('er', erSchema)