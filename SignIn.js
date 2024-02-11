import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSignIn = (event) => {
        event.preventDefault();
        console.log('Submitted:', { email, password });
        history.push('/');
    };
    
    const handleBack = () => {
        history.push('/');
    }

    
    return (
        <div>
            <div className="header">
                <h2 className="name">JobQuest</h2>
            </div>
            <h2> Sign in </h2>
            <div className="sign-in-container">
            <form onSubmit={handleSignIn}>
                <label>
                    Email:
                    <input type="email" name="email" value={email}
                    onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    <br />
                    
                    <label>
                        Password:
                        <input type="password" name="password" value={password}
                        onChange={(e) => setPassword(e.target.value)} required />
                        </label>
                        <br />
                        <div className="button-container">
                        <button className="sign-in-submit" type="submit">Sign In </button>
                        <button className="back" onClick={handleBack}>Back</button>
                        
                        </div>
                        </form>
                        </div>
                        </div>
    );
};

export default SignIn;