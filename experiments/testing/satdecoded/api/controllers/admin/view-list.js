module.exports = {


  friendlyName: 'View list',


  description: 'Display "List" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/admin/list'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
