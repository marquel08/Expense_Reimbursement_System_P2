import React, { Component } from "react";
import Graph from './Graph';
import Form from './Form';

export default class thanks extends Component {
  render() {
  return (
  <div className="Reimb">
    <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
      <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">Reimbursement Form</h1>

      {/* grid columns */}
      <div className="grid md:grid-cols-2 gap-4">
          {/* Chart */}
          <Graph></Graph>
          {/* Form */}
          <Form></Form>
      </div>
    </div>
  </div>
  );
}
}