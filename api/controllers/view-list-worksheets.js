//const Guides = require("../models/Guides");

module.exports = {


  friendlyName: 'View list worksheets',


  description: 'Display "List worksheets" page.',

  inputs:{
    category:{
      type: 'string',
      required: false,
  
    },
  },
  exits: {

    success: {
      viewTemplatePath: 'pages/list-videos'
    }

  },
  
   fn: async function (inputs,exits,env) {
    console.log(env)
    console.log({category:inputs.category})
    var guides= await Guides.find({category: inputs.category});

    console.log("displaying worksheets")
    return env.res.view({guides:guides});  

    // Respond with view.

  }


}

