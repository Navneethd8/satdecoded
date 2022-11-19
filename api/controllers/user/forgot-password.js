module.exports = {


  friendlyName: 'Forgot password',


  description: '',


  inputs: {
    email: {
      description:
        "The email address of the user who wants to recover their password.",
      example: "albus@dumbledore.com",
      type: "string",
      required: true,
  },

  },


  exits: {
    success: {
      description:
        "Email matched a user and a recovery email might have been sent",
  },
 
  },


  fn: async function (inputs,exits,env) {
    res=env.res;
   
try {
  var user = await User.findOne({ email: inputs.email });
  if (!user) {
    return env.res.redirect('/somethingwentwrong.html')
  }
  const token = await sails.helpers.strings.random("url-friendly");
  x= Date.now() + 24 * 60 * 60 * 1000;
  await User.update({ id: user.id }).set({
   passwordResetToken: token,
   passwordResetTokenExpiresAt: x,
});
const recoveryLink = `${sails.config.custom.baseUrl}/resetpw.html?token=${token}`;
const email = {
 to: user.email,
 subject: "Reset Password",
 template: "forgot-password",
 context: {
   name: user.fullName,
   recoverLink: recoveryLink,
 },
};
  console.log('before mail')
  await sails.helpers.sendMail(email);
  console.log('mail sent')
  return env.res.redirect('/resetpwemail.html')

} 
catch (error) {
  console.log('error')
  sails.log(error);
  return env.res.redirect('/somethingwentwrong.html')
}
// return exits.success({
//   message: `A reset password email has been sent to ${user.email}.`,
// });
    
  }


};
