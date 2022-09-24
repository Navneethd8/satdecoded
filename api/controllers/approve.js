module.exports = {


  friendlyName: 'Approve',


  description: 'Approve something.',


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
    console.log('entering approve function')
    const video = await Videos.findOne({ id: inputs.id });
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
   console.log(" before email");

     const email = {
      to: user.email,
      subject: "Video Has Been Approved",
      template: "vid_approved",
      context: {
        name: user.fullName,
        recoverLink: recoveryLink,
      },
     };
     await sails.helpers.sendMail(email);
      console.log("email sent for approval");

     
     return env.res.redirect('/list_videos')

    // All done.

  }


};
