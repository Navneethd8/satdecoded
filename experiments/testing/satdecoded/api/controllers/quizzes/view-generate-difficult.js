module.exports = {


  friendlyName: 'View generate difficult',


  description: 'Display "Generate difficult" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/quizzes/generate-difficult'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
