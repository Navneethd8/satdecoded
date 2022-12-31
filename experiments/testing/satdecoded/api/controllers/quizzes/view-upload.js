module.exports = {


  friendlyName: 'View upload',


  description: 'Display "Upload" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/quizzes/upload'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
