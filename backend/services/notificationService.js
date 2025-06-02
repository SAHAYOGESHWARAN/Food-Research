// Simple notification service for in-app and email notifications
const emailService = require('./emailService');

// Send in-app notification (stub for future implementation)
const sendInAppNotification = async (userId, message) => {
  // This could be extended to save notifications to a database or push to a frontend
  console.log(`In-app notification to user ${userId}: ${message}`);
  return { success: true };
};

// Send email notification
const sendEmailNotification = async (to, subject, html) => {
  return await emailService.sendEmail(to, subject, html);
};

module.exports = {
  sendInAppNotification,
  sendEmailNotification,
};
