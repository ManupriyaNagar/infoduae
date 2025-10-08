import React from 'react';
import { metadata } from '../layout';
import InvestmentManagement from '@/components/Service/InvestmentManagement';
import MarketAlerts from '@/components/Service/MarketAlerts';
import UpLearn from '@/components/Service/Uplearn';



const Service = () => {
    return (
        <div>
            <InvestmentManagement/>
            <MarketAlerts/>
            <UpLearn/>
        </div>
    );
};

export default Service;