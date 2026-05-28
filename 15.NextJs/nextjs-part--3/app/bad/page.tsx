"use client"
import { useState } from "react";

export default function (){
    const [count , setCount] = useState(0);
    return (
        <div>
            hi there  {count}
            <button onClick={() => {
                setCount(c => c + 1)
            }}> Click me! </button>
        </div>
    )   
}