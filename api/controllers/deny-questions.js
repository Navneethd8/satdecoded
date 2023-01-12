// const Difficult = require("../models/Difficult");

module.exports = {


  friendlyName: 'Deny questions',


  description: '',


  inputs: {
    question_id:
    {
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
  
    console.log('entering deny function')
    const diff = await Difficult.findOne({ id: inputs.question_id });
      console.log(diff);
      if (!diff) {
        console.log("Question not found")
        return env.res.redirect("/archives/error_somethingwentwrong.html")
     }
     console.log("set videos");
     await Difficult.destroyOne({ id: diff.id });
     console.log("Destroy Successful")
     
   console.log(" before email=approved");
   console.log(inputs)
    console.log("before email")
    console.log(email1)
     const email = {
      to: email1,
      subject: "Approval of videos",
      template: "question_denied",
      
     };
     console.log(email)
     await sails.helpers.sendMail(email);
      console.log("email denied sent ");
     return env.res.redirect("subpages/quiz/generate_quiz.html")


   
   


  }


};
