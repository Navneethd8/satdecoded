module.exports = {


  friendlyName: 'View approve videos',


  description: 'Display "Approve videos" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/approve-videos'
    }

  },


  fn: async function (inputs,exits,env) {
    console.log('listing videos with approved status false')
    //var videos= await Videos.find();
    var videos= await Videos.find({approved_status: false});
    console.log(videos);
  console.log(" Listing videos not approved Success")
    return env.res.view({
      videos: videos
    });
    

    // Respond with view.
    return {};

  }


};
