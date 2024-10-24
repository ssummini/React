import React from 'react';

import '../../css/reset.css';
import '../../css/style.css';

const CatItem = ({ item }) => {
    const { id, img, title } = item;
    return (
        <li className='list2'>
            <a href='#'>
                <div>
                    <img src={ img } alt={title} />
                </div>
            </a>
        </li>
    );
};

export default CatItem;