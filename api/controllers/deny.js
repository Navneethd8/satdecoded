module.exports = {


  friendlyName: 'Deny',


  description: 'Deny something.',


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

  },


  fn: async function (inputs,exits,env) {
    console.log("invoking deny")
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
    console.log(inputs)
   try{
    console.log('entering deny function')
    const video = await Videos.findOne({ id: inputs.video_id });
      console.log(video);
      if (!video) {
        console.log("video not found")
        return env.res.redirect("/archives/error_somethingwentwrong.html")
     }
     console.log("set videos");
     await Videos.destroyOne({ id: video.id });
     console.log("Destroy Successful")
     
   console.log(" before email=approved");
   console.log(inputs)
    console.log("before email")
    console.log(email1)
     const email = {
      to: email1,
      subject: "Approval of videos",
      template: "video_denied",
      
     };
     console.log(email)
     await sails.helpers.sendMail(email);
      console.log("email denied sent ");
     return env.res.redirect("/list_videos")


   }
   catch{

   }
  }


};
