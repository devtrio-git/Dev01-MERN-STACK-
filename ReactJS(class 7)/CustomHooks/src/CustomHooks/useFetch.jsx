import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({});
    useEffect(()=>{
        fetchData();
    },[url])

    const fetchData = async ()=>{
        setIsLoading(true)
        try {
            const response = await fetch(url);
            const resData = await response.json();
            
            setData(resData);
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            setError(error)
            setIsLoading(false)
        }
    }


  return ({data, isLoading, error})
}

export default useFetch
