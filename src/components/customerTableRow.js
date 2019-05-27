import React from 'react';

function CustomerTableRow(props) {
    const {items} = props;
    const itemKeys = Object.keys(items);
    return (
        <>
            <div className="customer-details">
            {
                itemKeys.map(item =>{
                        return(

                                <ul key={item.id}>
                                    <li key={item.id} ><p> {item}:-</p> {items[item]}</li>

                                </ul>



                        )
                })



            }

            </div>
         </>
    )
}

export default CustomerTableRow;