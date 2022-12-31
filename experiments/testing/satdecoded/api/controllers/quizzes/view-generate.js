module.exports = {


  friendlyName: 'View generate',


  description: 'Display "Generate" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/quizzes/generate'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
