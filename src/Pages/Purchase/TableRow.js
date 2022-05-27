import React from 'react';

const TableRow = ({ detail }) => {
    console.log(detail.value);
    return (
        <tr className="hover">
            <th>2</th>
            <td>{detail.value}</td>

        </tr>
    );
};

export default TableRow;