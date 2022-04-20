const mongoose =  require('mongoose')

const Schema = mongoose.Schema;

// ers_reimbursement_type => field => ['type', 'color']
const ers_reimbursement_type_model =new Schema({
    type: { type : String, default: "Food"},
    color : {type: String, default: '#FCBE44'}
})

// Ers_reimbursement  => field => ['name', 'type', 'amount', 'date']
const ers_reimbursement_model = new Schema({
    name: { type : String, default:"Anonymous"},
    type: { type : String, default:"Food"},
    amount: { type : Number},
    date: { type : Date, default : Date.now}
})

const Ers_reimbursement_type = mongoose.model('ers_reimbursement_type', ers_reimbursement_type_model)
const Ers_reimbursement = mongoose.model('ers_reimbursement', ers_reimbursement_model);

exports.default = Ers_reimbursement;
module.exports = {
    Ers_reimbursement_type,
    Ers_reimbursement
}