
type LoginResponse = {
    message?: string;
    error?: string;
}

export async function sendLoginRequest(email: string, password: string): Promise<LoginResponse> {
    
    const response = await fetch('http://localhost:8080/api/users/login', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
    });

    const data = await response.json();

    if (!response.ok || data.error) {
        throw new Error(data.error || 'Login failed');
    }
    return data;
}