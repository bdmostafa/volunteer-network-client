import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
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
        fetch('https://arcane-inlet-44879.herokuapp.com/add-event', {
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
                <Row>
                    <Col>
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
                    </Col>
                    <Col>
                        <label htmlFor="date">Event Date</label>
                        <input
                            type="date"
                            name="date"
                            ref={
                                register({
                                    required: true
                                })}
                            defaultValue={new Date()}
                        />
                        {
                            errors.date
                            && <p className="error">Event date is required.</p>
                        }
                    </Col>
                </Row>


                <Row>
                    <Col>
                        <label htmlFor="description">Description</label>
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
                            && <p className="error">Description is required.</p>
                        }
                    </Col>
                    <Col>
                        <label>Banner</label>
                        <input
                            type="file"
                            name="file"
                            ref={register}
                        />
                        {/* {errors.file && <p className="error">Image File is required.</p>} */}
                        <br />
                    </Col>
                </Row>
                <Button type="submit"> Submit </Button>
            </form>
        </div>
    );
};

export default AddEvent;