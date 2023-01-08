module.exports = {


  friendlyName: 'View login',


  description: 'Display "Login" page.',

  inputs: {
    email: {
      type: "string",
      required: true,
    },
  password: {
    type: "string",
    required: true,
  },
  

  },

  exits: {

    success: {
      viewTemplatePath: 'views/login'
    },
    notAUser: {
      statusCode: 404,
      description: "User not found",
    },
    passwordMismatch: {
      statusCode: 401,
      description: "Password do not match",
    },
    operationalError: {
      statusCode: 400,
      description: 'The request was formed properly'
  }

  },


  fn: async function (inputs,exits,env) {
    console.log(Object.keys(env))
    res=env.res
    try{
      console.log(inputs.email)
      const user = await User.findOne({ email: inputs.email });
      console.log(user)
      if (!user) {
        window.alert("User not found")
     }
     console.log("before password")
     await sails.helpers.passwords.checkPassword(inputs.password, user.password)
        .intercept('incorrect', (error) => {
      exits.passwordMismatch({ error: error.message });
      console.log("after pw")
});
console.log("before token")
const token = await sails.helpers.generateNewJwtToken(inputs.email);
console.log("after token")

console.log("before success")
// return exits.success({
//   message: `${user.email} has been logged in`,
//   data: user,
//   token, });
res= env.res
env.req.session=user;
env.res.cookie('user', user.email)
console.log('printing session')
console.log(env.req.session)
if (inputs.email== 'satdecoded5@gmail.com')
{
  return env.res.redirect('/subpages/admin/admin_after_sign_in.html')
}
else
{
  return env.res.redirect('/subpages/general/home_after_sign_in.html')
}
  
    }
    catch (error){
      sails.log.error(error);
      if (error.isOperational) {
        // return exits.operationalError({
        //   message: `Error logging in user ${inputs.email}`,
        //   error: error.raw,
        // });
        return env.res.redirect("/archives/errorlogin.html")
      }
      // return exits.error({
      //   message: `Error logging in user ${inputs.email}`,
      //   error: error.message,
      return env.res.redirect("/archives/error_somethingwentwrong")
 // });
    }


    // Respond with view.
    

  }


};
