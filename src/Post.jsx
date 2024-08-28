import React from 'react';

// Componente Post que recibe el post como prop
function Post({ post }) {
    return (
        <li>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </li>

    );
}
export default Post;