import React from 'react';

function TableRow(props){
    const { item } = props;
    const {id,name,price,color,size,quantity} = item;
    return (
        <tr>
            <td> {id}</td>
            <td>{ name }</td>
            <td>{'\u20B9'}{ price }</td>
            <td>{ color }</td>
            <td>{ size }</td>
            <td>{quantity}</td>


        </tr>
    )
}

export default TableRow;