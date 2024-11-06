// 插值语法 {}
function App() {
    let obj = { name: "ss" }
    // 泛型要加,不然被误认为标签
    const fn = <T,>(par1: T, event: any) => {
        console.log(par1, event)
    }
    let id = "222"
    let className = "ss"
    let style = { color: "red" }
    let arr = [1, 2, 3, 4, 5]
    return (
        <>
            {/* 各种差值语法 */}
            <div>{"dd"}</div>
            <div>{222}</div>
            <div>{[1, 2, 4]}</div>
            <div>{<span>dsids</span>}</div>
            <div>{true ? "1" : "2"}</div>
            <div>{"ss".concat("dd")}</div>
            <div>{JSON.stringify(obj)}</div>
            {/* 想传参，用高阶函数 */}
            <button onClick={(e) => { fn(1, e) }}>ss</button>
            <div id={id}></div>
            <div className={className}></div>
            <div className={`${className} name2`}></div>
            <div style={style}></div>
            <div >
                {
                    arr.map((item, index) => {
                        return <div key={index}>{item}</div>
                    })
                }
            </div>
        </>
    )
}

export default App
