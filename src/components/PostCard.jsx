import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
import { useEffect, useState } from "react";

function PostCard({$id, title, featuredImage}) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(()=>{
    appwriteService.getFilePreview(featuredImage).then((url)=>{
      setImageUrl(url.href);
    });
  },[featuredImage]);

  const imageStyle = imageUrl && imageUrl.height > 10 ? { height: '10px' } : {};

    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={imageUrl} alt={title}
                className='rounded-xl' style={imageStyle} />
            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard