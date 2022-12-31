module.exports = {


  friendlyName: 'View questions about the sat',


  description: 'Display "Questions about the sat" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/questions-about-the-sat'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
