import React from 'react';
import ReportBuilder from './ReportBuilder';
import BotPerformanceChart from './BotPerformanceChart';
import ClientActivityTable from './ClientActivityTable';
import BillingSummary from './BillingSummary';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-6">Reports and Analytics Dashboard</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <ReportBuilder />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <BotPerformanceChart />
          <ClientActivityTable />
        </div>
        <BillingSummary className="mt-8" />
      </div>
    </div>
  );
};

export default Dashboard;
