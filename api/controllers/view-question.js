module.exports = {


  friendlyName: 'view question',


  description: 'Display "Question" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/question'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
