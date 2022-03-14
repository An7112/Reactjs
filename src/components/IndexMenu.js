import React, {Component} from 'react';
import axios from 'axios';
import TableMenu from './TableMenu';

export default class IndexMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {products: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/products')
            .then(response => {
                console.log(response.data);
                this.setState({products: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabMenu() {
        return this.state.products.map(function (object, i) {
            return <TableMenu obj={object} key={i}/>;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Products List</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <tbody>
                    {this.tabMenu()}
                    </tbody>
                </table>
            </div>
        );
    }
}