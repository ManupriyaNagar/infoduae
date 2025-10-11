import React from 'react';

import InvestmentManagement from '@/components/Service/InvestmentManagement';
import MarketAlerts from '@/components/Service/MarketAlerts';
import UpLearn from '@/components/Service/Uplearn';

export const metadata = {
    title: "Services | InfoD",
    description: "Explore our services to help you achieve your financial goals.",
};

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