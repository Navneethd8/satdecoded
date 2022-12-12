/**
 * FileController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const { env } = require('process');
// const Videos = require('../models/Videos');

async function user_email(email)
  {
    console.log('before send mail_approval')
      const send_email =
       {
        to: email,
        subject: "Your video has been sent for approval!",
        template: "video_sent",
      }
    await sails.helpers.sendMail(send_email);
    console.log('email sent approval');
    return true;
 };
     
  
module.exports = {
    index: function (req,res){

        res.writeHead(200, {'content-type': 'text/html'});
        res.end(
        '<form action="http://localhost:1337/file/upload" enctype="multipart/form-data" method="post">'+
        '<input type="text" name="title"><br>'+
	      '<input list="category" name="category" id="category">'+
        '<datalist id="category">'
        +'<option value="Heart of Algebra">'+
        '<option value="Passport to advanced mathematics">' +
          '<option value="Problem solving and data analysis">'+
          '<option value="Additional topics in math">'+
          '<option value="Reading:Science">'
          +'<option value="Reading:History">'+
          '<option value="Reading:Literature">'
          +'<option value="Reading:Social Science">'+
          '<option value="Writing:argument">'+
          '<option value="Writing:informative">'+
          '<option value="Writing:narrative">'+
          '<option value="Grammar and effective language use">'+'</datalist><br/>'+
        '<input type="file" name="file"><br>'+
        '<input type="submit" value="Upload">',
        '</form>'
        
        )
      },

      
      upload: async function  (req, res) {
        console.log("BEgin"),
        console.log(req.body.category)
        var category = req.body.category
        console.log("---Session---")
        console.log(req.cookies['user'])
        var user_id = 0
	      if (req.cookies['user']) {
		    const user = await User.findOne({ email: req.cookies['user']})
		    console.log(user.email)
        email=user.email
        console.log(user.id)
		    user_id = user.id
        console.log(user_id)
	      }
        console.log("---Session---")
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
                userid_upload:user_id,
                filetype:uploadedFiles[0].type,
                size:uploadedFiles[0].size,
               }).fetch();
               console.log(filecontrol)
               console.log(email)
              
            }
          
          }); 
           user_email(email);
          return res.redirect('/list_videos'); 
      }

};