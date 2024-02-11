import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const [userType, setUserType] = useState('candidate');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const history = useHistory();

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    const handlePasswordChange = (event) => {
        const passwordValue = event.target.value;
        setConfirmPassword('');
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(.{8,})$/;

        if (!passwordRegex.test(passwordValue)) {
            setPasswordError('Password must be at least 8 characters long, contain at least one special character, and one number');
        } else {
            setPasswordError('');
        }
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (confirmPassword !== passwordError) {
            alert('Passwords do not match');
            return;
        }

        console.log('Submitted:', { password: confirmPassword });

        if (confirmPassword.length >= 8 && passwordError === '') {
            if (userType === 'employer') {
                history.push('/employer-dashboard');
            } else {
                history.push('/candidate-dashboard');
            }
        } else {
            alert('Password does not meet requirements!');
        }
    };

    const handleBack = () => {
        history.push('/');
    };

    return (
        <div>
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" required onChange={handlePasswordChange} />
                </label>
                <br />
                <label>
                    Confirm Password:
                    <input type="password" name="confirmPassword" required onChange={handleConfirmPasswordChange} />
                </label>
                <br />
                <label>
                    Are you a(n):<br />
                    <br />
                    <select value={userType} onChange={handleUserTypeChange}>
                        <option value="candidate">Candidate</option>
                        <option value="employer">Employer</option>
                    </select>
                </label>
                <br />
                <div className="button-container">
                    <button className="submit" type="submit"> Sign Up </button>
                    <button className="back" onClick={handleBack}>Back</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
