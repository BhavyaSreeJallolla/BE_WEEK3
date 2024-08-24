// src/config/config.js
export const config = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb+srv://BhavyaSreeJallolla:bhavya2006@testcluster.8fed9.mongodb.net/test?retryWrites=true&w=majority',
  JWT_SECRET: process.env.JWT_SECRET,
  TOKEN_EXPIRY: process.env.TOKEN_EXPIRY || '1h',
};
