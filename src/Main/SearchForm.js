import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../CSSfiles/searchForm.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: ''
    }
  }

  formChange = (e) => {
    this.setState({
      searchQuery: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleFormQuery(this.state.searchQuery);
    this.props.searchBand(this.state.searchQuery);
  };

  render() {
  
    return (
      <Form className="formHome" onSubmit={this.handleSubmit}>
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
