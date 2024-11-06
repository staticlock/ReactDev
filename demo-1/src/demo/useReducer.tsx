import { useReducer } from "react"
function useReducerComponent() {
    const reducer = (count: any, action: any) => {
        switch (action) {
            case "add":
                return count + 1
            case "sub":
                return count - 1
            default:
                return count
        }
    }
    let initobj = { name: "xd" }
    type objType = typeof initobj
    const reducer2 = (obj: objType, action: any) => {
        switch (action) {
            case "1":
                return { name: obj.name + "1" }
            case "2":
                return { name: obj.name + "2" }
            default:
                return { name: obj.name }
        }
    }
    // useReducer三个参数 1.reducer 2.初始值,可对象可数据  3.可选，是个函数，返回值替换初始值，只执行一次
    // 调用dispatch(setCount)，传入参数，就会触发reducer，传入的参数会作为reducer的第二个参数,第一个参数是数据本身
    const [count, setCount] = useReducer(reducer, 1, () => 12)
    const [obj, setObj] = useReducer(reducer2, initobj) // 没写initfunc

    const initData = [
        { name: "小满(只)", price: 100, count: 1, id: 1, isEdit: false },
        { name: "中满(只)", price: 200, count: 1, id: 2, isEdit: false },
        { name: "大满(只)", price: 300, count: 1, id: 3, isEdit: false },
    ]

    type Data = typeof initData
    //action是调用reducerfn传递第一个参数参数，用来判断操作类型，state为 initData
    const reducerfn = (state: Data, action: { type: string; id: number }) => {
        switch (action.type) {
            case "add":
                return state.map((item) => {
                    if (item.id == action.id) {
                        // return { ...item, count: item.count + 1 }
                        return Object.assign(item, { count: item.count + 1 })
                    }
                    return item
                })
                break
        }
        return state
    }
    const [data, setData] = useReducer(reducerfn, initData)
    return (
        <>
            <div>
                <table cellSpacing={0} border={1} width={800}>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>价格</th>
                            <th>数量</th>
                            <th>总价</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button onClick={() => setData({ type: "add", id: item.id })}>增加</button>
                                        {item.count}
                                        <button onClick={() => setData({ type: "sub", id: item.id })}>减少</button>
                                    </td>
                                    <td>{item.count * item.price}</td>
                                    <td>
                                        <button>修改</button>
                                        <button>删除</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={4}></td>
                            {/* 计算总价 */}
                            <td>总价{data.reduce((pre, next) => pre + next.count * next.price, 0)}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div>
                <h1>{count}</h1>
                <button onClick={() => setCount("add")}>+</button>
                <br />
                <button onClick={() => setCount("sub")}>-</button>
                <h1>{obj.name}</h1>
                <button onClick={() => setObj("1")}>+</button>
                <br />
                <button onClick={() => setObj("2")}>-</button>
            </div>
        </>
    )
}
export default useReducerComponent
