import React, {Component} from 'react';
import axios from 'axios';

export default class Users extends Component {
    static getUsers() {
        return axios.get('https://jsonplaceholder.typicode.com/users').then(resp => resp.data);
    }
    render() {
        {this.getUsers()}
    }
}