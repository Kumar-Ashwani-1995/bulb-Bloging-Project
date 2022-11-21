import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Routing from "./components/config/Routing";
import { getDbStatus } from "./redux/action/post.action";

function App() {
  // let dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getDbStatus())
  //   setInterval(() => {
  //     dispatch(getDbStatus())
  //   }, 30000);
  // }, [])
  
  return (
    <>
      <Routing></Routing>
    </>
  );
}

export default App;
