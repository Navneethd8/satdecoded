module.exports = {


  friendlyName: 'Upload',


  description: 'Upload video.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    // All done.
    return;

  },

      upload: function  (req, res) {
        console.log("BEgin"),
        console.log(req.body.category)
        console.log(req)
        var category = req.body.category

        req.file('file').upload({

            dirname: require('path').resolve(sails.config.appPath, 'assets/videos'),
            maxBytes:50000000000,
            maxTimeToBuffer: 100000,
            },
           async function (err, uploadedFiles) {


            if (err)
            {
              return res.serverError(err);
            }
            else
            {
              str=uploadedFiles[0].fd;
              fd=str.substring(str.lastIndexOf("\\")+1);
              console.log("video upload success",fd);

              console.log(category);
              let filecontrol = await Videos.create({
                fd:fd,
                filename:uploadedFiles[0].filename,
                category:category,
                userid_upload:'2',
                filetype:uploadedFiles[0].type,
                size:uploadedFiles[0].size
               }).fetch();
              //  console.log('before function user_email')
              //  const user = await User.findOne({ email: email});

              //  user_email(user.email);
              // email= await User.meta.fetch(email_id)
              // console.log(email)
              // user_email(email);
              return res.redirect('/video_detail_page.html');
            }

          });
      }


};
