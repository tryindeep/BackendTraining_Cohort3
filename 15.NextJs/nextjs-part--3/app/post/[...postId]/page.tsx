
// [... catch all segments]

import axios from "axios";

export default async function BlogPage({params} : any) {
    const postIds  = (await params).postId; //[2,1,2]
    return(
        <div>
            post page {JSON.stringify(postIds)}
        </div>
    )
}