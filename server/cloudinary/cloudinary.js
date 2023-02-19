const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'dbr4rgxf0', 
    api_key: '587122813591527', 
    api_secret: 'e23BBPqWtD0xncUG5ZGgiUZvU20',
    secure: true
  });
  module.exports = cloudinary