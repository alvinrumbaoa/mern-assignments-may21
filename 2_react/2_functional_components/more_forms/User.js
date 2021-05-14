import React, {useState} from 'react';

const User =(props) => {
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    
    const createUser = (e) => {
        e.preventDefault();
    }
    
    
    return(
    <div class="container">
        <form onSubmit= {createUser}>
            <div class="text-box">
                <p>First Name:</p> <input type="text" onChange= { (e) => setFirstName(e.target.value) } value={ firstName } />
                {
                    firstName.length < 2?
                    <p class="alert">First Name must be at least 2 character</p>:
                    null
                }
            </div>
            <div class="text-box">
                <p>Last Name:</p> <input type="text" onChange={ (e) => setLastName(e.target.value) } value={lastName } />
                {
                    lastName.length < 2?
                    <p class="alert">Last Name must be at least 2 character</p>:
                    null
                }
            </div>
            <div class="text-box">
                <p>Email:</p><input type="text" onChange={ (e) => setEmail(e.target.value) } value={ email } />
                {
                    email.length < 5?
                    <p class="alert">Email must be at least 5 character</p>:
                    null
                }
            </div>
            <div class="text-box">
                <p>Password:</p><input type="password" onChange={ (e) => setPassword(e.target.value) } value={ password } />
            {
                    password.length < 8?
                    <p class="alert">Email must be at least 5 character</p>:
                    null
                
                    
            }   
            </div>
            <div class="text-box">
                <p>Confirm Password:</p><input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } value={ confirmPassword } />
                {
        
                password !== confirmPassword?
                <p class="alert">Password must Match!</p>:
                null
            }
            </div>
            <input type="submit" value="Submit"/>
        </form>
        <div>
        <h2>Your Form Data</h2>
        <p>FirstName: {firstName}</p>
        <p>LastName: {lastName} </p>
        <p>Email: {email} </p>
        <p>Password: {password} </p>
        <p>Confirm Password: {confirmPassword} </p>
        </div>

    </div> 
    );
}

    
    export default User;