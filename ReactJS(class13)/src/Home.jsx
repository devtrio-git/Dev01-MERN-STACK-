import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, decrementByValue, increment } from './redux/features/counter.slice';
import { incrementBonus } from './redux/features/bonus.slice';
import { getPosts } from './redux/features/posts.slice';
import { useAddNewProductMutation, useDeleteProductMutation, useGetAllProductsQuery, useLazyGetAllProductsQuery } from './redux/apis/product.api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigation = useNavigate();
    // const dispatch = useDispatch();
    // const state = useSelector(state => state);
    const [products, setProducts] = useState();
    const [activeItemId, setActiveItemId] = useState('');
    const [productName, setProductName] = useState('')

    // const { data, error, isLoading, isError, refetch } = useGetAllProductsQuery();
    const [callAllProductsApi, { data, error, isLoading, isError }] = useLazyGetAllProductsQuery();
    const [callDeleteProduct, { data: deleted_product, error: delete_product_err, isLoading: removing_product, isError: is_delete_product_err }] = useDeleteProductMutation();
    const [callAddProductApi, { data: addedProduct, error: errorAddedProduct, isLoading: submitting, isError: isAddedProductErr }] = useAddNewProductMutation();


    useEffect(() => {
        if (data) {
            setProducts(data)
        }
    }, [data])


    async function getAllProducts(params) {
        await callAllProductsApi();
    }



    async function deleteProduct(id) {
        setActiveItemId(id);
        const res = await callDeleteProduct(id);
        // if (!res.error) {
        //     callAllProductsApi()
        // }
    }


    async function addNewProduct(e) {
        e.preventDefault()
        const data = {
            title: productName,
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        }
        const res = await callAddProductApi(data);
        // if (!res.error) {
        //     callAllProductsApi()
        // }
    }
    return (
        <div>


            <form>
                {isAddedProductErr && <h1>Failed to upload products...</h1>}

                <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
                <button onClick={addNewProduct}>{submitting ? "loading.." : "Add New Product"}</button>
            </form>




            <button onClick={getAllProducts}>Fetch Products</button>

            {isLoading && <h1>Loading...</h1>}
            {isError && <h1>Failed to fetch products...</h1>}
            {is_delete_product_err && <h1>Failed to delete products...</h1>}
            {!isError && !isLoading && products && products.map(item => <div key={item.id} style={{ display: "flex", gap: 30 }}>
                <h3>{item.title.slice(0, 10)}</h3>
                <button style={{ color: "red" }} onClick={() => deleteProduct(item.id)} >{(activeItemId == item.id && removing_product) ? "loading" : "remove"}</button>
                <button style={{ color: "blue" }} onClick={() => navigation(`/product/${item.id}`)} >{"show product detail"}</button>
            </div>)}







            {/* <h2>Counter: {state.counter.value} </h2>
      <button onClick={() => dispatch(increment())}>Counter ++ </button>
      <button onClick={() => dispatch(decrement())}>Counter -- </button>
      <button onClick={() => dispatch(decrementByValue(5))}>Decrement by 5 </button>
      <br />
      <br />

      <h2>Bonus: {state.bonus.value} </h2>
      <button onClick={() => dispatch(incrementBonus())}>Bonus ++ </button>


      <h3>Api Posts</h3>
      <button onClick={() => dispatch(getPosts())}>Call Apis</button>
      {state.posts.loader && <h1>loading...</h1>}
      {!state.posts.loader && state.posts.error && <h1>{state.posts.error}</h1>}
      {!state.posts.loader && state.posts.posts && state.posts.posts.map(p =>  <h1 key={p.id}>{p.title}</h1>)}
    */}
        </div>
    )
}

export default Home
