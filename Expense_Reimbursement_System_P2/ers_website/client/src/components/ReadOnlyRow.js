import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className=''>
      <td >{contact.id}</td>
      <td>{contact.fullName}</td>
      <td >{contact.reimbursement}</td>
      <td>{contact.type}</td>
      <td>{contact.detail}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
        
        </button>
        <button className="btn btn-dark btn-lg btn-block" type="button" onClick={() => handleDeleteClick(contact.id)}>
          Approve
        </button>
        <button className="btn btn-dark btn-lg btn-block" type="button" onClick={() => handleDeleteClick(contact.id)}>
          Deny
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
