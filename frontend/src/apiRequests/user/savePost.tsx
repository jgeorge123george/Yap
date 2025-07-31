// src/apiRequests/user/savePost.tsx

export const sendPostCreation = async (
  postData: { email: string; content: string },
  token: string
) => {
  const response = await fetch('http://localhost:8080/profile/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json(); // or just `return response` if you want to handle it raw
};
