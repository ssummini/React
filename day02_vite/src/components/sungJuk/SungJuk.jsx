import React, { useState } from 'react';
import dataList from './SungJukData';
import SungJukList from './SungJukList';
import '../../css/sungJuk.css';

const SungJuk = () => {
    const [list, setList ] = useState(dataList);

    return (
        <>
            <section>
                <div className='sungjukList'>
                    <h2>떡잎방범대 성적 리스트</h2>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>이름</th>
                                <th>국어</th>
                                <th>영어</th>
                                <th>수학</th>
                                <th>총점</th>
                                <th>평균</th>
                            </tr>
                        </thead>
                        <SungJukList list = { list }/>
                    </table>
                </div>
            </section>
        </>
    );
};

export default SungJuk;