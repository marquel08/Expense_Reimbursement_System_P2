import React from 'react';
import { Admin, Resource } from 'ersadmin';
import logo from './logo.svg';
import './App.css';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <Admin dataProvider={lb4Provider('http:/localhost:')}>
    <Resource name='Employees'  list={EmployeeList} />
    <Resource name='Reimbursements' list={ReimburseList} />
    </Admin>
  );
}

export default App;
