import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeIntroduce  = this.onChangeIntroduce.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            introduce: '',
            price:''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/products/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    introduce: response.data.introduce,
                    price: response.data.price });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeIntroduce(e) {
        this.setState({
            introduce: e.target.value
        })
    }
    onChangePrice(e) {
        this.setState({
            price: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            name: this.state.name,
            introduce: this.state.introduce,
            price: this.state.price
        };
        axios.post('http://localhost:4000/products/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/index');
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Update Product Info</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Introduce: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.introduce}
                               onChange={this.onChangeIntroduce}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.price}
                               onChange={this.onChangePrice}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                               value="Update Product Info"
                               className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}