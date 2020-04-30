// import React, {useState, useEffect} from 'react';
// import {Card, Button} from 'react-bootstrap'

// const TransactionBlocks = ({transactions}) => {    
//     let [transactionIndex, setTransactionIndex] = useState(0);

//     console.log(transactions)
//     return (
//         <Card style={{ width: '18rem' }}>
//             <Card.Body>
//                 <Card.Title>{transactions[transactionIndex].hash}</Card.Title>
//                 <Card.Text>

//                 </Card.Text>
//                 <Card.Footer>
//                     <Button 
//                         variant="primary" 
//                         disabled={transactionIndex === 0} 
//                         onClick={() => setTransactionIndex(transactionIndex-1)}
//                     >
//                         Prev
//                     </Button>            
//                     <Button 
//                         variant="primary" 
//                         disabled={transactionIndex === transactions.length-1} 
//                         onClick={() => setTransactionIndex(transactionIndex+1)}
//                     >
//                         Next
//                     </Button>            

//                 </Card.Footer>
//             </Card.Body>
//         </Card>
//     )
//  }

//  export default TransactionBlocks;


import React, {useState, useEffect} from 'react';
import {Card, Button} from 'react-bootstrap'

const TransactionBlocks = ({block}) => {    
    let [transactionIndex, setTransactionIndex] = useState(0);

    useEffect(() => {
        setTransactionIndex(0);
    }, [block])

    console.log("transactionIndex" + transactionIndex);

    let transactions = block && block.tx && block.tx.length > 0 ? block.tx : []
    let transactionComponent;

    if(transactions.length) {
        let selectedTransaction = transactions[transactionIndex];

        let transactionDisplay = {
            "Version" : selectedTransaction.ver,
            "Size" : selectedTransaction.size,
            "Time" : selectedTransaction.time,
            "Height" : selectedTransaction.block_height,
            "Weight" : selectedTransaction.weight
        } 
        transactionComponent =  (
            <Card style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title> Transaction Details</Card.Title>
                    <Card.Text>
                        <pre id="json"> {JSON.stringify(transactionDisplay, undefined, 2)} </pre>
                    </Card.Text>
                    <Card.Footer>
                        <Button 
                            variant="primary" 
                            disabled={transactionIndex === 0} 
                            onClick={() => setTransactionIndex(transactionIndex-1)}
                        >
                            Prev
                        </Button>            
                        <Button 
                            style={{ marginLeft: '5px' }}
                            variant="primary" 
                            disabled={transactionIndex === transactions.length-1} 
                            onClick={() => setTransactionIndex(transactionIndex+1)}
                        >
                            Next
                        </Button>            
                    </Card.Footer>
                </Card.Body>
            </Card>
        )    
    } else {
        transactionComponent = ( <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title> Transaction Details</Card.Title>
                <Card.Text>
                    No transaction available for the selected block
                </Card.Text>
            </Card.Body>
        </Card> 
        )      
    }

    return transactionComponent;
 }

 export default TransactionBlocks;