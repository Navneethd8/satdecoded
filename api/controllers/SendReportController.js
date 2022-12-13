/**
 * SendReportController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    upload: async function  (req, res) {
        console.log("Report send begin"),
        console.log(req.body.category)
        var category = req.body.category
        console.log("---Session---")
        console.log(req.cookies['user'])
        var email = ''
        var user_id = 0
        var user = ''
	    if (req.cookies['user']) {
		    user = await User.findOne({ email: req.cookies['user']})
            email=user.email ? user.email : ''
            user_id = user.id
        }
        console.log(user.email)
        console.log("---Session---")
        req.file('file').upload({           
            dirname: require('path').resolve(sails.config.appPath, 'assets/reports'),
            maxBytes:50000000000,
            maxTimeToBuffer: 100000,
        },
        async function (err, uploadedFiles) {
            console.log(uploadedFiles.length)
            if (err) 
            {
                console.log("No files uploaded")
                return res.serverError(err);
            }
            else
            {
                if (uploadedFiles.length === 0) 
                {
                    console.log("No files uploaded")
                    return;
                }    
                str=uploadedFiles[0].fd;
                fd=str.substring(str.lastIndexOf("\\")+1);
                console.log("file upload success",fd);
                console.log(uploadedFiles[0].filename)
                const email = {
                    to: user.email,
                    subject: 'Quiz Report',
                    template: 'quiz_report',
                    context: {
                        name: user.fullName,
                    },
                    attachments: [ 
                        {
                            filename: uploadedFiles[0].filename,
                            path: "assets/reports/"+fd,
                            cid: 'quiz_report.pdf'
                        }
                    ]
                };
                await sails.helpers.sendMail(email);
                console.log("Success")

        }
        
        }); 
          // TODO: Create a new page that says "Quiz report has been sent and redirect to it"
          return res.redirect('/quiziz'); 
      }
};

