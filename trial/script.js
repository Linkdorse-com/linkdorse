new Vue({
  el: '#app',
  data: {
      currentTab: 'dashboard',
      totalCampaigns: 15,
      activeCampaigns: 5,
      pendingPayments: 2300,
      newMessages: 8,
      campaignSearch: '',
      availableCampaignSearch: '',
      messageSearch: '',
      activeCampaignList: [
          { id: 1, name: 'Campaign 1', brand: 'XYZ', status: '800', deadline: '30th June 2024' },
          { id: 2, name: 'Campaign 2', brand: 'ABC', status: '750', deadline: '15th July 2024' },
          { id: 3, name: 'Campaign 3', brand: 'DEF', status: '87452', deadline: '20th July 2024' },
          { id: 4, name: 'Campaign 4', brand: 'GHI', status: '8794', deadline: '25th June 2024' },
          { id: 5, name: 'Campaign 5', brand: 'JKL', status: '887451', deadline: '5th August 2024' }
      ],
      availableCampaignList: [
          { id: 6, name: 'Campaign 6', brand: 'MNO', budget: 45000, deadline: '1st July 2024' },
          { id: 7, name: 'Campaign 7', brand: 'PQR', budget: 20000, deadline: '10th July 2024' },
          { id: 8, name: 'Campaign 8', brand: 'STU', budget: 12000, deadline: '20th July 2024' }
      ],
      messages: [
          { id: 1, content: 'Message from Brand XYZ' },
          { id: 2, content: 'Message from Brand ABC' },
          { id: 3, content: 'Message from Brand DEF' },
          { id: 4, content: 'Message from Brand GHI' }
      ],
      totalEarnings: 7500,
      paymentHistory: [
          { id: 1, amount: 500, status: 'Completed' },
          { id: 2, amount: 1000, status: 'Pending' },
          { id: 3, amount: 700, status: 'Completed' },
          { id: 4, amount: 1100, status: 'Completed' }
      ],
      recentActivities: [
          { id: 1, content: 'New campaign launched by Brand XYZ' },
          { id: 2, content: 'Payment received from Brand ABC' },
          { id: 3, content: 'Campaign 3 updated by Brand DEF' }
      ],
      topCampaigns: [
          { id: 1, name: 'Campaign 1', brand: 'XYZ', status: '8785', engagement: 75 },
          { id: 2, name: 'Campaign 2', brand: 'ABC', status: '84855', engagement: 82 },
          { id: 3, name: 'Campaign 3', brand: 'DEF', status: '5822', engagement: 60 },
          { id: 4, name: 'Campaign 4', brand: 'GHI', status: '854752', engagement: 88 }
      ],
      profile: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          bio: 'Influencer and Content Creator',
          avatar: 'https://via.placeholder.com/150'
      },
      notifications: [
          { id: 1, content: 'New follower on Instagram' },
          { id: 2, content: 'Brand ABC liked your post' }
      ],
      unreadNotifications: 2,
      settings: {
          notifications: {
              email: true,
              sms: false
          },
          privacy: {
              showProfile: true,
              showStats: false
          }
      },
      darkMode: false
  },
  computed: {
      filteredCampaigns() {
          return this.activeCampaignList.filter(campaign =>
              campaign.name.toLowerCase().includes(this.campaignSearch.toLowerCase())
          );
      },
      filteredAvailableCampaigns() {
          return this.availableCampaignList.filter(campaign =>
              campaign.name.toLowerCase().includes(this.availableCampaignSearch.toLowerCase())
          );
      },
      filteredMessages() {
          return this.messages.filter(message =>
              message.content.toLowerCase().includes(this.messageSearch.toLowerCase())
          );
      }
  },
  methods: {
      changeTab(tab) {
          this.currentTab = tab;
          this.$nextTick(() => {
              if (tab === 'dashboard') {
                  this.renderCharts();
              }
          });
      },
      renderCharts() {
          const ctx1 = document.getElementById('campaignChart').getContext('2d');
          new Chart(ctx1, {
              type: 'doughnut',
              data: {
                  labels: ['Total Campaigns', 'Active Campaigns'],
                  datasets: [{
                      data: [this.totalCampaigns, this.activeCampaigns],
                      backgroundColor: ['#36A2EB', '#FF6384']
                  }]
              },
              options: {
                  responsive: true,
                  plugins: {
                      tooltip: {
                          callbacks: {
                              label: function(context) {
                                  let label = context.label || '';
                                  if (label) {
                                      label += ': ';
                                  }
                                  if (context.raw !== null) {
                                      label += context.raw;
                                  }
                                  return label;
                              }
                          }
                      }
                  }
              }
          });

          const ctx2 = document.getElementById('earningsChart').getContext('2d');
          new Chart(ctx2, {
              type: 'bar',
              data: {
                  labels: ['Total Earnings', 'Pending Payments'],
                  datasets: [{
                      data: [this.totalEarnings, this.pendingPayments],
                      backgroundColor: ['#4BC0C0', '#FFCE56']
                  }]
              },
              options: {
                  responsive: true,
                  plugins: {
                      tooltip: {
                          callbacks: {
                              label: function(context) {
                                  let label = context.label || '';
                                  if (label) {
                                      label += ': ₹';
                                  }
                                  
                                    if (context.raw !== null) {
                                      label += context.raw;
                                  }
                                  return label;
                              }
                          }
                      }
                  }
              }
          });
      },
      getStatusClass(status) {
          return {
              'active-status': status === 'Active',
              'pending-status': status === 'Pending',
              'completed-status': status === 'Completed'
          };
      },
      applyCampaign(campaignId) {
          alert(`Applied for campaign ID: ${campaignId}`);
      },
      changePassword() {
          alert('Redirecting to change password page...');
      },
      manageSocialMedia() {
          alert('Redirecting to manage social media accounts page...');
      },
      requestPayout() {
          alert('Payout request has been sent!');
      },
      toggleDarkMode() {
          this.darkMode = !this.darkMode;
      },
      filterCampaigns() {
          // Filtering logic is already handled in computed properties
      },
      filterAvailableCampaigns() {
          // Filtering logic is already handled in computed properties
      },
      filterMessages() {
          // Filtering logic is already handled in computed properties
      }
  },
  mounted() {
      this.renderCharts();
  }
});
