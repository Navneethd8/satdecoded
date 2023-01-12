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
    
      console.log('entering approve function')
      const diffi = await Difficult.find({ id: inputs.question_id });
      console.log(diffi);
      if (!diffi) {
        console.log("question not found")
        return exits.question_not_found({error: `Question was not found`,}), env.res.redirect('/archives/error_somethingwentwrong.html')
     }
     console.log("set videos");
     await Difficult.update({ id: diffi.id }).set({
        approved_status: true,
   });
   console.log(" before email=approved");
   console.log(inputs)
   let user_id,user_email,user;
   if (env.req.cookies['user']) {
    const user = await User.findOne({ email: env.req.cookies['user']})
    user_id=user.id;
    user_email=user.email;
    console.log(user_id)
    console.log(user.email)
  }

     const email = {
      to: user_email,
      subject: "Approval of videos",
      template: "question_approved",
      
     };
     console.log(email)
     await sails.helpers.sendMail(email);
      console.log("email approved sent ");
      return env.res.redirect('/subpages/quiz/generate_difficult_quiz.html')
    

    
    

    return;

  }


};
