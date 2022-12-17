module.exports = {


  friendlyName: 'View approve videos',


  description: 'Display "Approve videos" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/approve-videos'
    }

  },


  fn: async function (inputs,exits,env) {
    console.log(env.req.cookies['user'])
    var user_id = 0;
    let user_email="";
    if (env.req.cookies['user']) {
      const user = await User.findOne({ email: env.req.cookies['user']})
      console.log(user.email)
      user_email=user.email
      console.log(user.id)
      user_id = user.id
      console.log(user_id)
    }
    console.log('listing videos with approved status false')
    //var videos= await Videos.find();
    var videos= await Videos.find({approved_status: false});
    console.log(videos);
    console.log(" Listing videos not approved Success")
    return env.res.view({
      videos: videos,
      user_id: user_id,
      user_email:user_email,
    });
    

    // Respond with view.
    return {};

  }


};
