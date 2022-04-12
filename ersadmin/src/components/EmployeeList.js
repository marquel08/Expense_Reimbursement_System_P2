import React from 'react';
import {List, Datagrid, TextField} from 'react-admin';

function EmployeeList() {
    return (
        <List { ... props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='first_name' />
                <TextField source='last_name' />
                <TextField source='email' />
                <TextField source='reimbursement_tickets' />
                <TextField source='reimbursement_total' />
            </Datagrid>
        </List>
    );
}

export default EmployeeList;