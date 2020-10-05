import React from 'react';
import { Button, Container, Form, FormControl } from 'react-bootstrap';

const SearchEvent = () => {
    return (
        <Container>
            <h4>I GROW BY HELPING PEOPLE IN NEDD.</h4>
            <Form inline>
                <FormControl type="text" placeholder="Search..." className="m-auto" />
                <Button className="m-auto" type="submit">Submit</Button>
            </Form>
        </Container>
    );
};

export default SearchEvent;