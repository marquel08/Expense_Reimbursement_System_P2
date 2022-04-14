import React, { Component } from "react";

export default class Reimbursement extends Component {
    render() {
        return (
            <form>

                <h5>Please Select Type and Amount</h5>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Food</label></div>
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Travel</label></div>
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Lodging</label></div>
                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Other</label>
                    </div>
                </div>
                <div className="form-group">
                    <label>Amount Request for Reimbursement $</label>
                    <input type="amount" className="form-control" placeholder="Enter Amount" />
                </div>
                <p>Please keep a check on your email and you will see if the Reimbursements was approved or denied.</p>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Submit Request</button>
                
            </form>
        );
    }
}