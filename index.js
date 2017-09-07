var AWS = require('aws-sdk');
var fs = require('fs');

AWS.config.update({
  // TODO: Add your AWS S3 IAM user credentials here
  accessKeyId: "",
  secretAccessKey: ""
});

var s3 = new AWS.S3({
  // TODO: Add your region
  region: ""
});

fs.readFile('./image.png', function (err, data) {
  if (err) { throw err; }
  var base64data = new Buffer(data, 'binary');

  s3.upload({
    Bucket: '', // TODO: Enter your bucket name here
    Key: 'uploads/images/designs.png',
    Body: base64data,
    ACL: 'public-read'
  },function (resp) {
    console.log(arguments);
    console.log('Image uploaded.');
  });
});
