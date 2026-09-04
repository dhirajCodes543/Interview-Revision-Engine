import LoadingSpinner from "./Components/LoadingSpinner";
import useGetUserData from "./CustomHook/useGetUserDataOnMount"

function App() {
  const isLoading = useGetUserData();

  return isLoading === true ?(
    <>
      <LoadingSpinner/>
    </>
  ):(
    <>
    </>
  )
}

export default App
