module.exports = {


  friendlyName: 'View quiz',


  description: 'Display "Quiz" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/quiz'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
