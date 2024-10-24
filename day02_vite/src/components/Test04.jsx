import React, { useState } from 'react';

const Test04 = () => {
    const [visible, isVisible] = useState(false);

    const onToggle = () => {
        isVisible(!visible)
    }

    const onShow = () => {
        isVisible(true)
    }

    const onHide = () => {
        isVisible(false)
    }

    return (
        <div>
            <button onClick={ onShow }>보이기</button>
            <button onClick={ onHide }>숨기기</button>
            <button onClick={ onToggle }>{visible ? '숨기기' : '보이기'}</button> 
            <hr/>
            {
                //조건 ? 참 : 거짓
                visible ? <div style={{width: 300, height: 100, margin: 20, backgroundColor: 'hotpink'}}></div> : null
            }   
            <hr/>
            {
                //현재조건이 &&(참)이면 수행하도록 !!
                visible && <div style={{width: 300, height: 100, margin: 20, backgroundColor: 'cyan'}}></div>
            } 
        </div>
    );
};

export default Test04;