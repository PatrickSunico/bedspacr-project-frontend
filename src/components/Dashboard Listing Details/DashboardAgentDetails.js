import React from 'react';

export const DashboardAgentDetails = () => {
  return (
    <div className="bg-white p-6 rounded-md agents-container">
      <h3 className="text-xl font-semibold text-gray-700">Agents</h3>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="placeholder-image">
            <p>PS</p>
          </div>
          <div className="agent-details">
            <h3 className="text-sm">Agent Name</h3>
            <p className="text-sm">Phone</p>
            <p className="text-sm">Email</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAgentDetails;
