import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { addAllData } from "../Features/userDataSlice";

const useGetUserDataOnMount = () => {
    const [isLoading,setIsLoading] = useState(true)
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            const data = JSON.parse(localStorage.getItem("userData"));
            if(data)
                dispatch(addAllData(data))
        } catch (error) {
            console.log("Failed to get user data",error);
        }finally{
            setIsLoading(false)
        }
    }, [dispatch])
    return isLoading
}


export default useGetUserDataOnMount;