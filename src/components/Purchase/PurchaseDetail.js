import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const PurchaseDetail = () => {
    const { purchaseId } = useParams();
    const clicked = () => {
        toast('amar sonar bangla')
    }
    return (
        <div>
            <h3>Purchase detail:::: {purchaseId}</h3>
            <button onClick={clicked}>click</button>
        </div>
    );
};

export default PurchaseDetail;