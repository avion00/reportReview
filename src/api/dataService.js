const dataService = {
  getReportData: async (dateRange) => {
    // Simulate an API call that fetches the report data
    return {
      dates: ['2024-01-01', '2024-01-02', '2024-01-03'],
      performance: [50, 60, 70],
      clients: [
        { id: 1, name: 'Client A', activity: 'Logged in' },
        { id: 2, name: 'Client B', activity: 'Made a purchase' }
      ],
      billing: [
        { client: 'Client A', amount: 120 },
        { client: 'Client B', amount: 300 }
      ]
    };
  },
};

export default dataService;
