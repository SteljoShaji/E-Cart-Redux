import { useEffect, useState } from "react"

const useFetch = (url)=>{
    //to fetch data from an api
    const [data,setdata] = useState(null)
    useEffect(()=>{
        //make api call
        fetch(url).then((res)=>{
            res.json().then(data=>setdata(data.products))
        })
    },[url])
    return data
}
export default useFetch;