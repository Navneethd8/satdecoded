module.exports = {


  friendlyName: 'View quiz',


  description: 'Display "Quiz" page.',
  inputs: {

  },

  exits: {

    success: {
      viewTemplatePath: 'pages/quiz'
    }

  },


  fn: async function () {

  for(i=0; i<10;i++)
  {
    for(j=0;j<4;j++)
    {
      if(answer=Questions.correct_answer)
      {
        
      };
    };
  }
    // Respond with view.
    return {};

  }


};
