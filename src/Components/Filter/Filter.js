import React from 'react';
import Form from 'react-bootstrap/Form';

class Filter extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group controlId='searchMenu'>
          <Form.Label>Search by Number of Horns:</Form.Label>
          <Form.Select
            onChange={this.props.handleSelect}
          >
            <option value='all'>All</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='other'>Other</option>
          </Form.Select>
        </Form.Group>
      </Form>
    );
  }
}

export default Filter;