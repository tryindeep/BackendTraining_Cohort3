# Hydration

**What is Hydration in Next.js?**

Hydration is the process by which a client-side JavaScript framework (such as React) takes over an already rendered HTML page and makes it interactive. In a Next.js application, pages are often server-rendered (SSR) or statically generated (SSG). The server sends a fully formed HTML document to the browser, allowing users to see meaningful content quickly (which is great for SEO and performance). Once the page arrives in the browser, React’s JavaScript bundle “hydrates” that static HTML by attaching event listeners and other interactive behaviors so that the page becomes a fully functional React application.

"use client";
import axios from "axios";
import { useEffect } from "react"

export function Refresh() {

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1");
    }, [])

    return <div>
        <button onClick={() => {
            console.log("onclick pressed")
        }}>click me</button>
        hello refresh component
    </div>
}