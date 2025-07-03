import { useState } from 'react';
import PostBox from '../components/postComponents/PostBox.tsx';
import PostButton from '../components/postComponents/PostButton.tsx';

export default function Feed() {
  const [showPostBox, setShowPostBox] = useState(false);

  const handleNewPost = (text: string) => {
    console.log("New post:", text);
    setShowPostBox(false);
  };

  return (
    <div className="relative max-w-2xl min-h-screen mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Your feed</h1>
      <div className="border-b border-gray-300 mb-4" />

      {showPostBox && (
        <>
          <PostBox onPost={handleNewPost} />
          <div className="border-b border-gray-300 my-4" />
        </>
      )}

      <PostButton
        onClick={() => setShowPostBox(true)}
        className="absolute bottom-6 right-6"
      />
    </div>
  );
}
