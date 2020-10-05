import React from 'react';
import { Button, Container, Form, FormControl } from 'react-bootstrap';

const SearchEvent = () => {
    return (
        <Container>
            <h4 style={{ textAlign: 'center'}}>I GROW BY HELPING PEOPLE IN NEDD.</h4>
            <Form style={{width: '35%', margin: '0 auto'}} inline>
                <FormControl type="text" placeholder="Search..." className="m-auto w-75" />
                <Button className="m-auto w-25" type="submit">Submit</Button>
            </Form>
        </Container>
    );
};

export default SearchEvent;