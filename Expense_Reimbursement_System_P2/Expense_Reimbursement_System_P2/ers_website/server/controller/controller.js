const model = require('../models/model');

//  post: http://localhost:8080/api/ers_reimbursement_type
async function create_Ers_reimbursement_type(req, res){
   const Create = new model.Ers_reimbursement_type({
       type: "Investment",
       color: "#FCBE44"
   })

   await Create.save(function(err){
       if (!err) return res.json(Create);
       return res.status(400).json({ message : `Error while creating cers_reimbursement_type ${err}`});
   });
}

//  get: http://localhost:8080/api/ers_reimbursement_type
async function  get_Ers_reimbursement_type(req, res){
    let data = await model.Ers_reimbursement_type.find({})

    let filter = await data.map(v => Object.assign({}, { type: v.type, color: v.color}));
    return res.json(filter);
}

//  post: http://localhost:8080/api/ers_reimbursement
async function create_Ers_reimbursement(req, res){
    if(!req.body) return res.status(400).json("Post HTTP Data not Provided");
    let { name, type, amount } = req.body;

    const create = await new model.Ers_reimbursement(
        {
            name,
            type,
            amount,
            date: new Date()
        }
    );

    create.save(function(err){
        if(!err) return res.json(create);
        return res.status(400).json({ message : `Erro while creating ers_reimbursement ${err}`});
    });

}

//  get: http://localhost:8080/api/ers_reimbursement
async function get_Ers_reimbursement(req, res){
    let data = await model.Ers_reimbursement.find({});
    return res.json(data);
}

//  delete: http://localhost:8080/api/ers_reimbursement
async function delete_Ers_reimbursement(req, res){
    if (!req.body) res.status(400).json({ message: "Request body not Found"});
    await model.Ers_reimbursement.deleteOne(req.body, function(err){
        if(!err) res.json("Record Deleted...!");
    }).clone().catch(function(err){ res.json("Error while deleting Ers_reimbursement Record")});
}

//  get: http://localhost:8080/api/labels
async function get_Labels(req, res){

    model.Ers_reimbursement.aggregate([
        {
            $lookup : {
                from: "ers_reimbursement_type",
                localField: 'type',
                foreignField: "type",
                as: "ers_reimbursement_type_info"
            }
        },
        {
            $unwind: "$ers_reimbursement_type_info"
        }
    ]).then(result => {
        let data = result.map(v => Object.assign({}, { _id: v._id, name: v.name, type: v.type, amount: v.amount, color: v.Ers_reimbursement_type_info['color']}));
        res.json(data);
    }).catch(error => {
        res.status(400).json("Looup Collection Error");
    })

}

module.exports = {
    create_Ers_reimbursement_type,
    get_Ers_reimbursement_type,
    create_Ers_reimbursement,
    get_Ers_reimbursement,
    delete_Ers_reimbursement,
    get_Labels
}