module.exports = {


  friendlyName: 'View syllabus',


  description: 'Display "Syllabus" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/syllabus'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
