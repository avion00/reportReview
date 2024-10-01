import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setReportData } from '../redux/actions';
import dataService from '../api/dataService';

const ReportBuilder = () => {
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const dispatch = useDispatch();

  const generateReport = async () => {
    const data = await dataService.getReportData(dateRange);
    dispatch(setReportData(data));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Customizable Report Builder</h2>
      <div className="flex items-center space-x-4">
        <input 
          type="date" 
          value={dateRange.start} 
          onChange={e => setDateRange({ ...dateRange, start: e.target.value })} 
          className="border border-gray-300 p-2 rounded-md"
        />
        <input 
          type="date" 
          value={dateRange.end} 
          onChange={e => setDateRange({ ...dateRange, end: e.target.value })} 
          className="border border-gray-300 p-2 rounded-md"
        />
        <button 
          onClick={generateReport} 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Generate Report
        </button>
      </div>
    </div>
  );
};

export default ReportBuilder;
