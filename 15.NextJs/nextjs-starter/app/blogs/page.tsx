import axios from "axios";
import { json } from "stream/consumers";

async function getBlogs() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/",
  );
  return response.data;
}
export default async function Blogs() {
  const blogs = await getBlogs();
  return (
    <div>
      Learn Recoil / redux form the best platform on the world
      {blogs.map((blog: ITodo) => (
        <Todo title={blog.title} completed={blog.completed} />
      ))}
    </div>
  );
}

interface ITodo {
  title: string;
  completed: boolean;
}

function Todo({ title, completed }: ITodo) {
  return (
    <div>
      {title} {completed ? "done!" : "not done!"}
    </div>
  );
}
