const DashBoardData = [
  {
    "dateOptions": [
      { "id": 1, "label": "Today" },
      { "id": 2, "label": "Yesterday" },
      { "id": 3, "label": "Last 7 Days" },
      { "id": 4, "label": "Last 30 Days" },
      { "id": 5, "label": "This Month" },
      { "id": 6, "label": "Last Month" }
    ],
    "salesOverview": {
      "sales": 500,
      "purchase": 300,
      "salesData": [30000, 25000, 35000, 50000, 20000, 40000, 30000],  // Sales data for each day of the week
      "purchaseData": [20000, 15000, 25000, 30000, 25000, 30000, 20000],  // Purchase data for each day of the week
      "data": [
        { "day": "Sat", "sales": 20000, "purchase": 10000 },
        { "day": "Sun", "sales": 25000, "purchase": 15000 },
        { "day": "Mon", "sales": 30000, "purchase": 20000 },
        { "day": "Tues", "sales": 50000, "purchase": 30000 },
        { "day": "Wed", "sales": 20000, "purchase": 25000 },
        { "day": "Thurs", "sales": 35000, "purchase": 20000 },
        { "day": "Fri", "sales": 40000, "purchase": 30000 }
      ]
    },
    "totalOverview": [
      { "id": 1, "label": "Total Income", "amount": 50000, "icon": "cash", "iconColor": "#34D399" }, // Ionicons cash-outline
      { "id": 2, "label": "Total Expense", "amount": 50000, "icon": "reader-outline", "iconColor": "#EF4444" }, // Ionicons wallet-outline
      ],
    "quickOverview": [
      { "id": 1, "label": "Total Income", "amount": 50000, "icon": "cash-outline", "iconColor": "#34D399" }, // Ionicons cash-outline
      { "id": 2, "label": "Total Expense", "amount": 50000, "icon": "wallet", "iconColor": "#EF4444" }, // Ionicons wallet-outline
      { "id": 3, "label": "Total Due", "amount": 50000, "icon": "time-outline", "iconColor": "#F59E0B" }, // Ionicons time-outline
      { "id": 4, "label": "Stock Value", "amount": 25055, "icon": "cube-outline", "iconColor": "#3B82F6" } // Ionicons cube-outline
    ],
    "lossProfit": [
      { "id": 1, "label": "Total Loss", "amount": 50000, "icon": "trending-down-outline", "iconColor": "#EF4444" }, // Ionicons trending-down-outline
      { "id": 2, "label": "Total Profit", "amount": 50000, "icon": "trending-up-outline", "iconColor": "#10B981" } // Ionicons trending-up-outline
    ]
  }
];

export default DashBoardData;
