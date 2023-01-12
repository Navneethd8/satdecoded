module.exports = {


  friendlyName: 'create difficult question',


  description: '',


  inputs: {
          
    answer1:
    {
      type: 'string',
      required: false,
    },
    answer2:
    {
      type: 'string',
      required: false,
    },
    answer3:
    {
      type: 'string',
      required: false,
    },
    answer4:
    {
      type: 'string',
      required: false,
    },
    correct_answer:
    {
      type: 'string',
      required: false,
    },
    category:
    {
      type: 'string',
      required: false,
    },
    qn:
      {
      type: 'string',
      required: false,
      },
    answer_description:
      {
      type: 'string',
      required: false,
      },
  


  },


  exits: {

  },


  fn: async function (inputs,exits,env) {

    console.log("begin upload questions function")
    console.log(inputs)
     let difficult = await Difficult.create({
       qn:inputs.qn,
       category:inputs.category,
       answer1:inputs.answer1,
       answer2:inputs.answer2,
       answer3:inputs.answer3,
       answer4:inputs.answer4,
       correct_answer:inputs.correct_answer,
       answer_description:inputs.answer_description,
       approved_status:false,
      }).fetch();
    return env.res.redirect("/subpages/general/home_after_sign_in.html")
   


  }


};
