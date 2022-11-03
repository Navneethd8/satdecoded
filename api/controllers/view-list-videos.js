//const Videos = require("../models/Videos");

module.exports = {


  friendlyName: 'View list videos',


  description: 'Display "List videos" page.',


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
    console.log('before find');
    //var videos= await Videos.find();
    var videos= await Videos.find({approved_status: true});
    console.log(videos);
  console.log("Success")
    return env.res.view({
      videos: videos
    });
    // console.log("success")
    // return res.redirect("/video_detail_page.html");

  }


};
