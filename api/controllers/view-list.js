module.exports = {


  friendlyName: 'View list',


  description: 'Display "List" page.',

  inputs:{
    category:{
      type: 'string',
      required: true,
  
    },
    
    },
  exits: {

    success: {
      viewTemplatePath: 'pages/list'
    }

  },


  fn: async function (inputs,exits,env) {
    console.log({category:inputs.category})
    category= inputs.category
    console.log(category)
    var questions= await Questions.find({category: category});

    console.log(questions);
    console.log("displaying questions")
    return env.res.view({questions: questions});  

  }


};
