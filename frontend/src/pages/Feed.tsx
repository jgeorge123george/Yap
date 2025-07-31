import PostButton from "../components/postComponents/PostButton.tsx";
import PostBox from "../components/postComponents/PostBox.tsx";
import {useState} from 'react'

export default function Feed() {

  const [showPostBox, setShowPostBox] = useState(false);
  
  const handleTogglePostBox = () => {
    setShowPostBox((prev) => !prev)
  }

  const handlePost = (text: string) => {
    console.log('Post Submitted', text);
    setShowPostBox(false);
  }


  return (
    <div className="relatvie max-w-2xl min-h-screen max-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Your feed</h1>
      <div className="border-b border-gray-300 mb-4" />

       {/* Post button to show/hide PostBox */}
      <PostButton onClick={handleTogglePostBox} />

      {/* Show PostBox only if state is true */}
      {showPostBox && <PostBox onPost={handlePost} />}
    </div>
  )





}
