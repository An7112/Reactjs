import React, { Component } from 'react';
import axios from 'axios';
import './TableMenu.css';
import {Col, Card } from 'react-bootstrap';
class TableMenu extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/products/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
    render() {
        return (
                <Col>
                    <Card style={{margin:'auto', width:'30%', marginLeft:'2.5%'}}>
                        <Card.Body >
                        <Card.Title class="card card--1" style={{width:'100%'}}>
                        <div class="card__img"></div>
                        <a href="#"  class="card_link">
                             <div class="card__img--hover"></div>
                        </a>
                        
                        <span class="card__money">${this.props.obj.price}</span>
                    
                        </Card.Title>
                        <span class="card__category">
                            <Card.Title>{this.props.obj.name}</Card.Title>
                        </span>
                            <Card.Title>{this.props.obj.introduce}</Card.Title>
                            <span class="card__by">by <a href="#" class="card__author" title="author">{this.props.obj.author}</a></span>
                        </Card.Body>
                    </Card>
                </Col>
        );
    }
}
export default TableMenu;

