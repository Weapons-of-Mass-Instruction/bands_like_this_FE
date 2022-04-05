import React from 'react';
import { Form, Button } from 'react-bootstrap';

class SearchForm extends React.Component {


  formChange = (e) => {
    this.setState({
      searchQuery: e.target.searchQuery.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleFormQuery(this.state.searchQuery);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="searchQuery">
          <Form.Label>Search a Band</Form.Label>
          <Form.Control
            type="text"
            placeholder="ex: The Rolling Stones"
            onChange={this.formChange}
          />
          <Form.Text className="text-muted">Search a band and discover similar artists!</Form.Text>
        </Form.Group>
        <Button type="submit">Search</Button>
      </Form>
    );
  }
}

export default SearchForm;
