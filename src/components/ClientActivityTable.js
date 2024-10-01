import React from 'react';
import { useSelector } from 'react-redux';

const ClientActivityTable = () => {
  const reportData = useSelector(state => state.report.reportData);

  return (
    <div className="bg-gray-50 p-4 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Client Activity</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Client</th>
            <th className="py-2 px-4 border-b">Activity</th>
          </tr>
        </thead>
        <tbody>
          {reportData?.clients?.map(client => (
            <tr key={client.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{client.name}</td>
              <td className="py-2 px-4 border-b">{client.activity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientActivityTable;
