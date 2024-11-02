import { useState } from "react"
const useStateComponent = function () {
    let message = "123" // 普通变量
    const [message2, setMessage2] = useState(0)
    // 对对象使用useState
    const [obj, setObj] = useState(() => {
        const date = new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDay()
        return {
            name: 'xxx',
            age: 12,
            date
        }
    })
    const update = function (text: any) {
        message = text
        setMessage2(1)
        console.log(message2) // 此时还是没更新的值，因为react是异步更新的，setMessage2是异步代码，
        // 我这个是同步，先走完 异步是为了性能，我多次的修改可以被合并成一次修改在渲染
        // 如果要多次相同修改，使用下面的写法  
        setMessage2(pre => pre + 1)
        setMessage2(pre => pre + 1)
        setMessage2(pre => pre + 1)
        // setMessage2( message2 + 1) 这种写法达不到效果
        setObj({
            // 原先属性不变，使用解构，只更改修改的属性
            ...obj,
            name: "dddd"
        })
        // 另一种写法
        setObj(Object.assign(obj, { age: 133 }))
    }
    return (
        <>
            <h1>{message}</h1>
            <h1>{message2}</h1>
            <div>{obj.age}</div>
            <div>{obj.date}</div>
            <div>{obj.name}</div>
            <button type="button" onClick={() => update("456")}>点我</button>
        </>
    )
}
export default useStateComponent