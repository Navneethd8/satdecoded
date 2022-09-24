const jwt = require("jsonwebtoken");
module.exports = {
 


  friendlyName: 'Generate new jwt token',


  description: '',


  inputs: {
    email: {
      type: "string",
      required: true
  }

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    console.log("before payload");
    const payload = {
      sub: inputs.email, // subject
      iss: "SAT Decoded" // issuer
 };
console.log(payload)
 //const secret = sails.config.jwtSecret || process.env.JWT_SECRET;
 const secret="SATDecoded123";
 console.log(secret)
 const token = jwt.sign(payload, secret, { expiresIn: "1d" });
 console.log("post process")
 return token;

    // TODO
  }


};

