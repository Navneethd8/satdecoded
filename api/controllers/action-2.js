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
    console.log(inputs.video_id)
    try{
      console.log('entering approve function')
    const video = await Videos.findOne({ id: inputs.video_id });
      console.log(video);
      if (!video) {
        console.log("video not found")
        return exits.video_not_found({
          error: `Video was not found`,
        });
     }
     console.log("set videos");
     await Videos.update({ id: video.id }).set({
        approved_status: true,
   });
   console.log(" before email=approved");
   console.log(inputs)
   const user = await User.findOne({ id: inputs.user_id});

  //  console.log(user.email)
  //  if (!user) {
    return env.res.redirect('/')
 //};
    //  const email = {
    //   to: user.email,
    //   subject: "Approval of videos",
    //   template: "video_approved",
      
    //  };
    //  console.log(email)
    //  await sails.helpers.sendMail(email);
    //   console.log("email approved sent ");
     // return env.res.redirect("/video_detail_page.html")

    }
    catch{
      return env.res.redirect("error_somethingwentwrong.html")

    }
    // All done.
    return;

  },

};
