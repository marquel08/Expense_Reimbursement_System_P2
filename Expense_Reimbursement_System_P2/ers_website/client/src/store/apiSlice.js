import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURI = 'http://localhost:8080';

export const apiSlice = createApi({
    baseQuery : fetchBaseQuery({ baseUrl : baseURI}),
    endpoints : builder => ({
        // get ers_reimbursement_type
        getErs_reimbursement_type : builder.query({
            // get: 'http://localhost:8080/api/ers_reimbursement_type'
            query: () => '/api/ers_reimbursement_type',
            providesTags: ['ers_reimbursement_type']
        }),

        // get labels
        getLabels : builder.query({
            // get: 'http://localhost:8080/api/labels'
            query : () => '/api/labels',
            providesTags: ['ers_reimbursement']
        }),

        // add new Ers_reimbursement
        addErs_reimbursement : builder.mutation({
            query : (initialErs_reimbursement) => ({
                  // post: 'http://localhost:8080/api/ers_reimbursement'
                url: '/api/ers_reimbursement',
                method: "POST",
                body: initialErs_reimbursement
            }),
            invalidatesTags: ['ers_reimbursement']
        }),

        // delete record
        deleteErs_reimbursement : builder.mutation({
            query : recordId => ({
                // delete: 'http://localhost:8080/api/ers_reimbursement'
                url : '/api/ers_reimbursement',
                method : "DELETE",
                body : recordId
            }),
            invalidatesTags: ['ers_reimbursement']
        })

    })
})

export default apiSlice;                                                   