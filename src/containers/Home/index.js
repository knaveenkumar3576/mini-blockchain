import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap'

import Block from '../../components/Block'
import TransactionBlocks from '../../components/TransactionBlocks'
import SearchBlock from './SearchBlock';

import axiosHandler from '../../components/axios-block';

const Home = () => {    
    let [blockDetails, setBlockDetails] = useState(null)
    let [selectedBlock, setBlock] = useState("");
    let [showLatestBlock, toggleLatestBlock] = useState(false)

    useEffect(() => {
        if(showLatestBlock) {
            axiosHandler.get(`/latestblock`).then(result => {
                setBlock(result.data.hash)
            })    
        }
    }, [showLatestBlock])

    useEffect(() => {
        if(selectedBlock !== "") {
            axiosHandler.get(`rawblock/${selectedBlock}`).then(result => {
                setBlockDetails(result.data)
            }).catch(() => {
                setBlockDetails(null)
            })    
        }
    }, [selectedBlock])

    return (
    <>
        <h1> Mini Block Chain</h1>

        <Container>
            <Row>
                <Col>
                    <SearchBlock
                        handleSearch = {setBlock}
                        selectedBlock = {selectedBlock}
                        toggleLatestBlock = {toggleLatestBlock}
                    />
                </Col>
            </Row>
            <Row
                style={{ marginTop: '40px' }}
            >
                <Col>
                    <Block 
                        block={blockDetails}
                        setBlock={setBlock}
                    />
                </Col>
                <Col>
                    <TransactionBlocks 
                        block = {blockDetails}
                    />
                </Col>
            </Row>

        </Container>

    </>)
 }

 export default Home;