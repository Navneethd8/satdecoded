module.exports = {


  friendlyName: 'View upload',


  description: 'Display "Upload" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/videos/upload'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
