import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Register.css';
import logo from '../../assets/logos/logo.png'

const Register = () => {
    const { eventTitle } = useParams();
    const { loggedInUser } = useContext(UserContext);

    // Destructuring loggedInUser
    const { name, email } = loggedInUser;

console.log(useParams())
    const { register, errors, handleSubmit } = useForm();

    const history = useHistory();

    // Handle submit form data
    const onSubmit = data => {

        const updatedForm = { 
            ...loggedInUser.event,
            ...data
        }

        fetch('https://arcane-inlet-44879.herokuapp.com/register-event', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedForm)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result){
                history.push('/viewMyEvents')
            }
        })
    }

    return (
        <div className="registration-area">
            <Link to='/'> <img src={logo} alt="" /></Link>
            <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
                <h2>Register as a Volunteer</h2><br />
                <input
                    placeholder="Full Name"
                    type="text"
                    name="name"
                    ref={
                        register({
                            required: true
                        })}
                    defaultValue={name ? name : ''} />
                {
                    errors.name
                    && <p className="error">Your full name is required</p>
                }
                <br />

                <input
                    placeholder="Your Email"
                    type="email"
                    name="email"
                    ref={
                        register({
                            required: "Enter your e-mail",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Enter a valid e-mail address",
                            },
                        })}
                    defaultValue={email && email}
                />
                {errors.email && <p className="error">{errors.email.message}</p>}
                <br />

                <input
                    placeholder="Date"
                    name="date"
                    ref={
                        register({
                            required: true
                        })}
                    type="date"
                />
                {errors.date
                    && <p className="error">Date is required</p>
                }
                <br />

                <input
                    placeholder="Description"
                    name="description"
                    ref={
                        register({
                            required: true
                        })}
                />
                {errors.description
                    && <p className="error">Description is required</p>
                }
                <br />

                <input
                    placeholder="Event Name"
                    name="title"
                    defaultValue={eventTitle && eventTitle}
                    ref={
                        register({
                            required: true
                        })}
                />
                {errors.title &&
                    <p className="error">Event name is required</p>
                }
                <br />

                <Button type="submit"> Registration </Button>
            </form>
        </div>
    );
};

export default Register;