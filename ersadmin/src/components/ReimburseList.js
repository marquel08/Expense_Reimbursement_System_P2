import React, {Component} from 'react';

export default class Reimbursement extends Component {
    render(){
       

const ReimburseList = (props) => (
     <List { ... props} filters={<RentalFilter />} title='list of Reimbursements'>
         <Datagrid>
            <TextField source='EmpId' />
            <TextField source='Food' />
            <TextField source='Travel' />
            <TextField source='Lodging' />
            <TextField source='Other' />
            <TextField source='Total' />
         </Datagrid>



     </List>
    )
    
}
}