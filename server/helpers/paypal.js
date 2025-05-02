const paypal = require("paypal-rest-sdk");
///////////////////////////////////////
paypal.configure({
  mode: "sandbox",
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_SECRET_KEY,
  // client_id:"AU-swZwKGiAya_xjKFhb_RdC9H3TwtbMwABelLfEkrM6XVJrJFG5yaHCT1F4umXxoPiViW3-WePAw8XM",
  // client_secret:"ED5z-bZ70epDcFV4elRr3tm41jwhzWaIU4SwKrOp4wv_4CSbfo4OftzXBRoJj99XYftlwpviZdK5f9pI",

  //client_id: "AZfMdqphLjOM1c_XIpU8nNvtkqVAdHVPjIQu_ch76hnsNHF-xZ9tNm-nbqPjwHRNDlUDe_R5qKK8ihrV",
  //ECal4FPfS-oNXFst30SBxOVah52jSQ2g1Pll4stMh1gNdliVLLopriD4Mc7ThkKF5s932yUXd-HdTbP

});

module.exports = paypal;
