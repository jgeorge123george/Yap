import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { sendLoginRequest } from '../user/userLogin.tsx'


type LoginResponse = {
    message?: string;
    error?: string;
}

export function loginForm() {
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();


        try {
            const result = await sendLoginRequest(email, password);

            if (result.message) {
                navigate('/feed');
            }
            else {
                alert(result.error || 'Invalid login');
            }
        }
        catch(err: any) {
            alert(err.message || 'Server error');
        }

    };
}