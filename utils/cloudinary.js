const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: 'nbutenko',
    api_key: '249276619214227',
    api_secret: 'iwRw1Jp-qzw3pOQXFec8VLZKOfo'
});

module.exports = { cloudinary };