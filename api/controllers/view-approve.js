// const Difficult = require("../models/Difficult");

module.exports = {


  friendlyName: 'View approve',


  description: 'Display "Approve" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/approve'
    }

  },


  fn: async function (inputs,exits,env) {
    var user_id = 0,user
    if (env.req.cookies['user']) {
    const user = await User.findOne({ email: env.req.cookies['user']})
    user_id=user.id
    }
    console.log('listing questions with approved status false')
    //var videos= await Videos.find();
    var diff= await Difficult.find({approved_status: false});
    console.log(diff);
  console.log(" Listing questions not approved Success")
    return env.res.view({
      diff:diff,
      user_id:user_id,
    });


  }


};
