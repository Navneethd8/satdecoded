// const Difficult = require("../models/Difficult");

module.exports = {


  friendlyName: 'View approve',


  description: 'Display "Approve" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/approve'
    }

  },


  fn: async function (inputs,exits,env) {
    console.log('listing videos with approved status false')
    //var videos= await Videos.find();
    var diff= await Difficult.find({approved_status: false});
    console.log(diff);
  console.log(" Listing videos not approved Success")
    return env.res.view({
      diff:diff
    });

    // Respond with view.
    return {};

  }


};
