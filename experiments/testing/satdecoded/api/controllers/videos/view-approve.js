module.exports = {


  friendlyName: 'View approve',


  description: 'Display "Approve" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/videos/approve'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
