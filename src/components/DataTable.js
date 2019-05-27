import React, {Component} from 'react';
import TableRow from './TableRow';
import '../components/stylesheet/tableItem.css';

class DataTable extends Component {

    render() {
        const {items} = this.props;
        const addedItems = items.addedItems || [];

        //  console.log('items in data table',items);


        return (

            <div className="tableData">


                <table className="final-table">
                    <thead>
                    <tr>
                        <th> Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th>Size</th>
                        <th>Quantity</th>



                    </tr>
                    </thead>
                    <tbody>

                    {
                        addedItems.map(item => {
                                return (
                                    <TableRow key={item.id} item={item}/>
                                )

                            }
                        )
                    }
                    </tbody>


                </table>
            </div>

        );
    }
}

export default DataTable;