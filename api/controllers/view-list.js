module.exports = {


  friendlyName: 'View list',


  description: 'Display "List" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/list'
    }

  },


  fn: async function (inputs,exits,env) {
    var questions= await Questions.find({category:'Maths:Heart of Algebra'}).limit(2);
    console.log(questions);
    return env.res.view({
      questions: questions
    });

   

  }


};
