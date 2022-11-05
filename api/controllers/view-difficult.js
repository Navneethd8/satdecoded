module.exports = {


  friendlyName: 'View difficult',


  description: 'Display "Difficult" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/difficult'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
