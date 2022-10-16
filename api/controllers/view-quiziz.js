module.exports = {


  friendlyName: 'View quiziz',


  description: 'Display "Quiziz" page.',

  inputs:{
  category:{
    type: 'string',
    required: false,

  },
  id:{
    type:'number',
    required:false,
  }
  },
  exits: {

    success: {
      viewTemplatePath: 'pages/quiziz'
    }

  },


  fn: async function (inputs,exits,env) {
     inputs.category="Maths:Heart of Algebra";
    var count= await Questions.count({category:inputs.category,});

    for(i=0;i<10;i++)
    {
      a=parseInt(Math.random()* count+ 1);
      console.log(a)
      var questions= await Questions.find({category:inputs.category,}).limit(1).skip(a);
      
    };

  // await Questions.splice(a,)
  //   var questions=await Questions.count().then(count => Questions.find().limit(10).skip(parseInt(Math.random() * count)))
  // .then(questions => questions.sort(() => 0.5 - Math.random()))
  // .then(questions => console.log(questions))
  // .catch(sails.log.error);
  // var questions= await Questions.find().limit(10).skip(parseInt(Math.random()* count));
  // var questions=find;

    
    // Respond with view.
    return env.res.view({
      questions: questions
    });

  }


};
