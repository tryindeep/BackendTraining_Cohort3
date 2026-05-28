
// Dynamic routes 
import axios from "axios";

export default async function BlogPage({params} : any) {
    const postId = (await params).blogId; // same as folder name
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${postId}`)
    const data = response.data
    return(
        <div>
            Blog page {postId}

            <br />
            Id - {data.id}
            <br />
            Title = {data.title}
            <br />
           
        </div>
    )
}