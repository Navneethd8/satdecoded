module.exports = {


  friendlyName: 'View worksheets',


  description: 'Display "Worksheets" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/worksheets'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
