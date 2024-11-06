import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import UseStateComponent from "./demo/useState.tsx"
import UseReducerComponent from "./demo/useReducer.tsx"

// !为非空断言
ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode> // 严格模式会导致组件渲染两次
    <div>
        <UseReducerComponent />
        <App />
        <UseStateComponent />
    </div>
    // </React.StrictMode>
)
