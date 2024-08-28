import React, { useState, useEffect } from 'react';
import Post from './Post';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                throw new Error('Error al obtener los datos');
                }
                const data = await response.json();
                setPosts(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()));
    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;
    
    return (
        <div>
            <h1>Posts</h1>
            <input
            type="text"
            placeholder="Buscar por título..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            />
            <ul>
                {filteredPosts.map(post => (
                <Post key={post.id} post={post} />
                ))}
            </ul>
    </div>
    );
}
export default Posts;