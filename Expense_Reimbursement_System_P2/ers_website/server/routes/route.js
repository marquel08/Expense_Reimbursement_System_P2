const routes = require('express').Router();
const controller = require('../controller/controller');

routes.route('/api/ers_reimbursement_type')
    .post(controller.create_Ers_reimbursement_type)
    .get(controller.get_Ers_reimbursement_type)

routes.route('/api/ers_reimbursement')
    .post(controller.create_Ers_reimbursement)
    .get(controller.get_Ers_reimbursement)
    .delete(controller.delete_Ers_reimbursement)

routes.route('/api/labels')
    .get(controller.get_Labels)

module.exports = routes;