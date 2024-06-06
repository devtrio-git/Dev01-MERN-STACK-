import { useParams } from "react-router-dom"
import { useGetSingleProductQuery } from "./redux/apis/product.api";

export default function ProductInfo() {
    const { product_id } = useParams();
    const { data, error, isLoading, isError, refetch } = useGetSingleProductQuery(product_id, {
        skip: !product_id
    });


    console.log(data);


    return <div>
        {!isError && !isLoading && data && <h1>{data.title}</h1>}

    </div>
}