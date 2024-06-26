new Vue({
    el: '#app',
    data: {
        currentTab: 'dashboard',
        totalCampaigns: 12,
        activeCampaigns: 3,
        pendingPayments: 1500,
        newMessages: 5,
        activeCampaignList: [
            { id: 1, name: 'Campaign 1', brand: 'XYZ', status: 'Active', deadline: '30th June 2024' },
            { id: 2, name: 'Campaign 2', brand: 'ABC', status: 'Active', deadline: '15th July 2024' }
        ],
        messages: [
            { id: 1, content: 'Message from Brand XYZ' },
            { id: 2, content: 'Message from Brand ABC' }
        ],
        totalEarnings: 5000,
        paymentHistory: [
            { id: 1, amount: 500, status: 'Completed' },
            { id: 2, amount: 1000, status: 'Pending' }
        ]
    }
});