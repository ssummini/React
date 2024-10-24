import React from 'react';
import SungJukDTO from './SungJukDTO';

const SungJukList = ({ list }) => {
    return (
        <tbody>
            {
                list.map(item => <SungJukDTO key={item.seq} dto = { item } />)
            }
        </tbody>
    );
};

export default SungJukList;