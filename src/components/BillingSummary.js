import React from 'react';
import { useSelector } from 'react-redux';

const BillingSummary = () => {
  const reportData = useSelector(state => state.report.reportData);

  return (
    <div className="bg-gray-50 p-4 shadow-md rounded-lg mt-6">
      <h2 className="text-xl font-semibold mb-4">Billing Summary</h2>
      <ul className="list-disc pl-6">
        {reportData?.billing?.map((bill, index) => (
          <li key={index} className="mb-2">
            {bill.client}: <span className="font-bold">${bill.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BillingSummary;
