import React, { useState } from 'react';
import dataList from './CatData';
import CatList from './CatList';


const Cat = () => {
    const [list, setList] = useState(dataList);
    return (
        <>
            <section className='business'>
                <div className='inner'>
                    <h2>고양이</h2>
                    <p>고양이들</p>
                    <CatList list={ list } />
                </div>
            </section>
        </>
    );
};

export default Cat;