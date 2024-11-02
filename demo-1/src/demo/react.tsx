const App = function () {
    return (
        <>
            <div>
                <span>Hello World</span>
            </div>
        </>
    )
}
// 上面这段代码会通过babel或者swc转换成
// const App = () => {
//     return React.createElement('div', { id: 2 },
//         React.createElement('span', null, '小满zs')
//     );
// };
//实现简易虚拟DOM

const React = {
    //children为子元素
    createElement(type: string, props: {} | null, ...children: any[]) {
        return {
            type,
            props: {
                ...props,
                children: children.map((child) => {
                    if (typeof child === "object") {
                        return child
                    } else {
                        return React.createTextElement(child)
                    }
                }),
            },
        }
    },
    // 处理children为文本
    createTextElement(text: string) {
        return {
            type: "TEXT_TYPE",
            props: {
                nodeValue: text,
                children: [],
            },
        }
    },
}
const vdom = React.createElement("div", { id: "1" }, React.createElement("span", null, "hahhhah"))
export default vdom
