const Razorpay = require('razorpay');
apiKey='YOUR_KEY_ID'
apiSecret='YOUR_KEY_SECRET'
 const razorpay = new Razorpay({
  key_id:apiKey ,
  key_secret: apiSecret,
});
module.exports=razorpay