module.exports = {


  friendlyName: 'Action 2',


  description: 'Approves videos',


  inputs: {
    video_id: {
      type: "number",
      required: false,
    },
    user_id:
    {
      type: "number",
      required: false,
    },

  },


  exits: {
    
    success: {
    },

  },


  fn: async function (inputs,exits,env) {
    console.log("invoking action 2")
    console.log(env.req.body.category)
    var category = env.req.body.category
    console.log("---Session---")
    console.log(env.req.cookies['user'])
    var user_id = 0
    if (env.req.cookies['user']) {
      const user = await User.findOne({ email: env.req.cookies['user']})
      console.log(user.email)
      email1=user.email
      console.log(user.id)
      user_id = user.id
      console.log(user_id)
    }
    console.log(inputs.video_id)
    try{
      console.log('entering approve function')
      const video = await Videos.findOne({ id: inputs.video_id });
      console.log(video);
      if (!video) {
        console.log("video not found")
        return env.res.redirect("/archives/error_somethingwentwrong.html")
     }
     console.log("set videos");
     await Videos.update({ id: video.id }).set({
        approved_status: true,
   });
   console.log(" before email=approved");
   console.log(inputs)
   const user = await User.findOne({ id: inputs.user_id});
    console.log("before email")
    console.log(email1)
     const email = {
      to: email1,
      subject: "Approval of videos",
      template: "vid_approved",
      
     };
     console.log(email)
     await sails.helpers.sendMail(email);
      console.log("email approved sent ");
     return env.res.redirect("/list_videos")

    }
    catch{
      return env.res.redirect("/archives/error_somethingwentwrong.html")
    }
    // All done.
   },

};