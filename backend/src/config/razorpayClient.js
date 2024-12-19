const Razorpay = require('razorpay');
apiKey='rzp_test_ipCtKOkJvSDDZC'
apiSecret='kUeOf6NfOQfBHtWFKr8Fi1DW'
// Initialize a Razorpay instance with API credentials
 const razorpay = new Razorpay({
  key_id:apiKey ,
  key_secret: apiSecret,
});
module.exports=razorpay