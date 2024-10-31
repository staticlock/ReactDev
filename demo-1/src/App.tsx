import './App.css'
function App() {
  let obj = { name: "ss" }
  const fn = (par1, e) => {
    console.log(par1, e)
  }
  return (
    <>
      <div>{"dd"}</div>
      <div>{222}</div>
      <div>{[1, 2, 4]}</div>
      <div>{<span>dsids</span>}</div>
      <div>{true ? "1" : "2"}</div>
      <div>{"ss".concat("dd")}</div>
      <div>{JSON.stringify(obj)}</div>
      <button onClick={(e) => { fn(1, e) }}>ss</button>
    </>
  )
}

export default App
