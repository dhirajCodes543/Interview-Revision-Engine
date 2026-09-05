import AddOrViewFields from "./Components/addOrViewFields/AddOrViewFields";
import Home from "./Components/Home/Home";
import LoadingSpinner from "./Components/LoadingSpinner";
import useGetUserData from "./CustomHook/useGetUserDataOnMount"
import { Routes,Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Session from "./Components/Questions/Session";

function App() {
  const isLoading = useGetUserData();

  return isLoading === true ?(
    <>
      <LoadingSpinner/>
    </>
  ):(
    <>
      <Routes>
          <Route path="/" element = {<Layout/>}>
              <Route path="/" element = {<Home/>}/>
              <Route path="/prepare" element = {<AddOrViewFields/>}/>
              <Route path="/session/:topicId" element = {<Session/>}/>
          </Route>
      </Routes>
    </>
  )
}

export default App
