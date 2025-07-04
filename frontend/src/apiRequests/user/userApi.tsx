export const sendCreateAccountRequest = async (email:  string, password: string) => {
    const res = await fetch('http://localhost:8080/api/users/createAccount', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),

    })

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || `HTTP error! status: ${res.status}`);

    }
    return res;
}


