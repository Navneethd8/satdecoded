module.exports = {


  friendlyName: 'App',


  description: 'App something.',


  inputs: {
    question_id: {
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
    console.log("question approval")
    console.log(inputs.question_id)
    try{
      console.log('entering approve function')
      const diffi = await Difficult.find({ id: inputs.question_id });
      console.log(diffi);
      if (!diffi) {
        console.log("video not found")
        return exits.video_not_found({
          error: `Video was not found`,
        });
     }
     console.log("set videos");
     await Difficult.update({ id: diffi.id }).set({
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

  }


};