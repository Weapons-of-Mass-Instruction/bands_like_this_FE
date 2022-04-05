import React from 'react';
import { Form, Button } from 'react-bootstrap';

class SearchForm extends React.Component {
  render() {
    return (
      <Form /*onSubmit={submit function}*/>
        <Form.Group controlId="searchQuery">
          <Form.Label>Search a Band</Form.Label>
          <Form.Control
            type="text"
            placeholder="ex: The Rolling Stones"
          />
          <Form.Text className="text-muted">Search a band and discover similar artists!</Form.Text>
        </Form.Group>
        <Button type="submit">Search</Button>
      </Form>
    );
  }
}

export default SearchForm;
