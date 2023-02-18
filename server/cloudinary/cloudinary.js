const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'db9senjev', 
    api_key: '969555555631658', 
    api_secret: '7uigG68QX-EDeYex6A-DNTqghnw',
    secure: true
  });
  module.exports = cloudinary