import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    tagTypes: ['onDeleteProduct','onUploadProduct'],
    // api end points...
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => {
                return {
                    url: 'products',
                    method: "GET"
                }
            },
            providesTags: ['onDeleteProduct', 'onUploadProduct']
        }),
        getSingleProduct: builder.query({
            query: (id) => {
                return {
                    url: 'products/' + id,
                    method: "GET"
                }
            },
        }),
        deleteProduct: builder.mutation({
            query: (id) => {
                return {
                    url: 'products/' + id,
                    method: "DELETE"
                }
            },
            invalidatesTags: ['onDeleteProduct']
        }),
        addNewProduct: builder.mutation({
            query: (data) => {
                return {
                    url: 'products',
                    method: "POST",
                    body: data
                }
            },
            invalidatesTags: ['onUploadProduct']
        }),
    }),




    // api end points end

})




export const { useLazyGetAllProductsQuery, useGetAllProductsQuery, useDeleteProductMutation, useAddNewProductMutation, useGetSingleProductQuery } = productsApi