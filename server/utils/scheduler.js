const cron = require('node-cron');
const { exec } = require('child_process');

// Schedule sync every day at 2 AM
cron.schedule('0 2 * * *', () => {
  console.log('Starting scheduled product sync...');
  
  exec('node utils/syncProducts.js', (error, stdout, stderr) => {
    if (error) {
      console.error('Sync failed:', error);
      return;
    }
    console.log('Sync output:', stdout);
    if (stderr) console.error('Sync errors:', stderr);
  });
});

// Optional: Sync every hour during business hours (9 AM - 6 PM)
cron.schedule('0 9-18 * * *', () => {
  console.log('Hourly sync during business hours...');
  
  exec('node utils/syncProducts.js', (error, stdout, stderr) => {
    if (error) {
      console.error('Hourly sync failed:', error);
      return;
    }
    console.log('Hourly sync completed');
  });
});

console.log('Cron jobs scheduled:');
console.log('- Daily sync: 2:00 AM');
console.log('- Hourly sync: 9 AM - 6 PM');

module.exports = {};
