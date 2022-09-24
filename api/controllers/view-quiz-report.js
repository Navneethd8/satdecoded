module.exports = {


  friendlyName: 'View quiz report',


  description: 'Display "Quiz report" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/quiz-report'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
