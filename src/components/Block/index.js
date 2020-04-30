import React from 'react'
import {Card, Button} from 'react-bootstrap'

const Block = ({block, setBlock}) => {
    let blockComponent;
    if(block !== null) {
        let blockDisplay = {
            "Version" : block.ver,
            "Size" : block.size,
            "Time" : block.time,
            "Number of Transactions" : block.n_tx,
            "Height" : block.height,
            "Weight" : block.weight
        } 
        blockComponent = (
            <Card style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title> Block Details </Card.Title>
                    <Card.Text>
                        <pre id="json"> {JSON.stringify(blockDisplay, undefined, 2)} </pre>
                    </Card.Text>
                    <Card.Footer>
                        <Button 
                            variant="primary" 
                            disabled={!block.hasOwnProperty('prev_block') || block.prev_block == null} 
                            onClick={() => setBlock(block.prev_block)}
                        >
                            Trace previous block
                        </Button>            
                    </Card.Footer>
                </Card.Body>
            </Card>
        )
    } else {
        blockComponent = ( 
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title> Block Details</Card.Title>
                    <Card.Text>
                        No block available
                    </Card.Text>
                </Card.Body>
            </Card> 
        )      
    }

    return blockComponent;
}

export default Block;