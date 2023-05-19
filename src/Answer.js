import React from 'react';
import { useParams } from 'react-router-dom';


const Answer = ({ match }) => {
    const { IE, NS, FT, PJ } = useParams();
    return (
        <h1>your result { IE } { NS } { FT } { PJ }</h1>
    );
};

export default Answer;
