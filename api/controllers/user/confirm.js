module.exports = {


  friendlyName: 'Confirm',


  description: 'Confirm user.',


  inputs: {
    token: {
      type: 'string',
      description: "The confirmation token from the email.",
      example: "4-32fad81jdaf$329",
    },

  },


  exits: {
    success: {
      description: "Email address confirmed and requesting user logged in.",
    },
  invalidOrExpiredToken: {
    statusCode: 400,
    description:
      "The provided token is expired, invalid, or already used up.",
  },

  },


  fn: async function (inputs,exits,env) {
    res=env.res
    console.log("error")
    if (!inputs.token) {
      // return exits.invalidOrExpiredToken({
      //   error: "The provided token is expired, invalid, or already used up.",
      // });
      return env.res.redirect('/archives/error_invalidtoken.html')
    }
    else
    {
    var user = await User.findOne({ emailProofToken: inputs.token });
    if (!user || user.emailProofTokenExpiresAt <= Date.now()) {
      return env.res.redirect('/archives/error_somethingwentwrong')
      // return exits.invalidOrExpiredToken({
      //   error: "The provided token is expired, invalid, or already used up.",
      // });
    }
    if (user.emailStatus === "unconfirmed") {
      await User.updateOne({ id: user.id }).set({
      emailStatus: "confirmed",
      emailProofToken: "",
      emailProofTokenExpiresAt: 0,
  });
  console.log('sucsess')
  // return exits.success({
  //   message: "Your account has been confirmed",
  // });
  return env.res.redirect('/archives/account_confirmed.html')
}


    }
    

    // All done.
   

  }


};
