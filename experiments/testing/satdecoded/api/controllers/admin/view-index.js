module.exports = {


  friendlyName: 'View index',


  description: 'Display "Index" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/admin/index'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
