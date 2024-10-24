import React, { useState } from 'react';

const SungJukDTO = ({dto}) => {
    const {seq, name, kor, eng, math} = dto;
    const tot = kor + eng + math;
    const avg = tot / 3.0;
    return (
        <tr>
            <td>{ seq }</td>
            <td>{ name }</td>
            <td>{ kor }</td>
            <td>{ eng }</td>
            <td>{ math }</td>
            <td>{ tot }</td>
            <td>{ avg }</td>
        </tr>
    );
};

export default SungJukDTO;