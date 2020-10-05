import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import './AdminPanel.css';

const AddEvent = () => {
    const { register, errors, handleSubmit } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        const formData = new FormData();
        const totalData = JSON.stringify(data);
        formData.append('total', totalData)
        formData.append('file', data.file[0]);
        console.log(data);
        fetch('http://localhost:4000/add-event', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('You added an event successfully.')
                    history.replace('/')
                }
            })
    }

    return (
        <div>
            <form className="add-event-form" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="title">Event Title</label>
                <input
                    placeholder="Enter title"
                    type="text"
                    name="title"
                    ref={
                        register({
                            required: true
                        })}
                />
                {
                    errors.title
                    && <p className="error">Event title is required.</p>
                }

                <label htmlFor="date">Event Date</label>
                <input
                    type="date"
                    name="date"
                    ref={
                        register({
                            required: true
                        })}
                    defaultValue={new Date().toDateString()}
                />
                {
                    errors.date
                    && <p className="error">Event date is required.</p>
                }

                <label htmlFor="description">Event Date</label>
                <input
                    placeholder="Enter description"
                    type="text"
                    name="description"
                    ref={
                        register({
                            required: true
                        })}
                />
                {
                    errors.description
                    && <p className="error">Event date is required.</p>
                }

                <label>Banner</label>
                <input
                    type="file"
                    name="file"
                    ref={register}
                />
                {errors.file && <p className="error">Image File is required.</p>}
                <br />
                <Button type="submit"> Submit </Button>
            </form>
        </div>
    );
};

export default AddEvent;