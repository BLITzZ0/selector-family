import {  RecoilRoot, useRecoilStateLoadable } from "recoil"
import { todosFamily } from "./atomFamily"
import { Suspense } from "react"


function App() {

  return (
    <RecoilRoot>
      {/* <Suspense fallback = "Loading.." /> */}
      <MainApp id ={1} /> 
      <MainApp id ={110} />
    </RecoilRoot>
  )
}
function MainApp({id}){
  const [todo, setTodo]= useRecoilStateLoadable(todosFamily(id))
  if(todo.state === "loading"){
    return <div>
      Loading ...
    </div>
  }
  if(todo.state === "hasError"){
    return <div>
      Error while loading data !!!
    </div>
  }
  if(todo.state === "hasValue"){
    return(
    <div>
      {todo.contents.todo} 
      <br />
      {todo.contents.userId}
            <br />      <br />      <br />
    </div>
  )
  }
}


export default App
