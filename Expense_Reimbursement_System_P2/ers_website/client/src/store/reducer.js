import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    ers_reimbursement_type : [],
    er_reimbursement: []
}

export const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers : {
        getErs_reimbursements: (state) => {
                // get code
        }
    }
})

export const { getErs_reimbursements } = expenseSlice.actions; 
export default expenseSlice.reducer;