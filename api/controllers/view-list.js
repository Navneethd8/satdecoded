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
    var admin = false
    if (req.cookies['user']) {
      const user = await User.findOne({ email: req.cookies['user']})
      console.log(user.email)
      admin = user.admin
  }

    if (admin) {
      console.log({category:inputs.category})
      category= inputs.category
      console.log(category)
      var questions= await Questions.find({category: category});

      console.log(questions);
      console.log("displaying questions")
      return env.res.view({questions: questions});  
    }
    else
    {
      // Return empty array if the user is not an admin
      return env.res.view({questions: []});  
    }
  }


};
