import { useState } from 'react';

export default function PostBox({ onPost }: { onPost: (text: string) => void }) {
  const [text, setText] = useState('');

  const handlePost = () => {
    if (text.trim()) {
      onPost(text.trim());
      setText('');
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full bg-gray-700 p-3 rounded text-white resize-none h-24 mb-4"
        maxLength={280}
      />
      <button
         onClick={handlePost}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Post
      </button>
    </div>
  );


  <div className="bg-gray-800 p-4 rouunded-lg shaodw-md mb-6">
    
  </div>
}
