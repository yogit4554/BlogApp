import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import Spinner from '../components/Spinner';

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading,setloading]=useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await appwriteService.getPosts([]);
                if (response) {
                    setPosts(response.documents);
                }
            } catch (error) {
                console.log(`error message : ${error.message}`);
            } finally {
                setloading(false);
            }
        };

        fetchPosts();
    }, [])
  return (
    <div className='w-full py-8'>
        <Container>
            {loading? (<Spinner loading={loading}/>) : (<div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>)}
            </Container>
    </div>
  )
}

export default AllPosts