import React from 'react'
import {Form, Button} from 'react-bootstrap'

const SearchBlock = ({handleSearch, selectedBlock, toggleLatestBlock}) => {

    let searchRef = React.createRef();

    return (
        <Form onSubmit={(e) => {
            e.preventDefault();
            handleSearch(searchRef.value)
            toggleLatestBlock(false);
        }}>
        <Form.Group controlId="formBlockHash">
            <Form.Label>Search block</Form.Label>
            <Form.Control ref={(element) => searchRef=element} type="text" />
            <Form.Text className="text-muted">
            Search a block with a hash
            </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
            Search
        </Button>
        <Button 
            style={{ marginLeft: '30px' }}
            variant={"success"} 
            onClick={() => toggleLatestBlock(true)}
        >
            Get Latest Block
        </Button>

        </Form>
    )

}

export default SearchBlock;