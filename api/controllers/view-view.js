module.exports = {


  friendlyName: 'View view',


  description: 'Display "View" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/view'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
