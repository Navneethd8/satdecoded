module.exports = {


  friendlyName: 'View list difficult',


  description: 'Display "List difficult" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/quizzes/list-difficult'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
