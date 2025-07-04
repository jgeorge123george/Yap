import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { sendCreateAccountRequest } from '../apiRequests/user/userApi.tsx';

export function useAccountForm() {
    const [email, setEmail] = useState('');
    const [passwordOne, setPasswordOne] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();

        if (passwordOne !== passwordTwo) {
            alert("Passwords do not match!");
            return;
        }

        try {
            await sendCreateAccountRequest(email, passwordOne);
            navigate('/login');
        } catch (err: any) {
            alert(err.message || 'Server error');
            console.error(err);
        }
    }


    return {
        email,
        setEmail,
        passwordOne,
        setPasswordOne,
        passwordTwo,
        setPasswordTwo,
        handleSubmit
    }
}