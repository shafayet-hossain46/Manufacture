import { useEffect, useState } from "react"

const useData = () => {

    // HomeTools Data
    const [tools, setTools] = useState([])
    useEffect(()=>{
        const toolsDataLoad = async () => {
            const url = 'http://localhost:5000/getTools'
            const res = await fetch(url);
            const data = await res.json();
            setTools(data)
        }
        toolsDataLoad()
    },[])
    return {tools}
}
export default useData;