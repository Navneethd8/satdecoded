const { env } = require('process');

module.exports = {


  friendlyName: 'Fileupload',


  description: 'Fileupload something.',


  // inputs: {

  // },


  // exits: {

  // },


  

 function  (req,res){
    console.log(req)
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(
  '<form action="http://localhost:1337/api/v1/fileupload" enctype="multipart/form-data" method="post">'+
  '<input type="text" name="title"><br>'+
  '<input type="file" name="file" multiple="multiple"><br>'+
  '<input type="submit" value="Upload">'+'<input list="category" name="category">'+
  '<datalist id="category">'
  +'<option value="Heart of Algebra">'+'<option value="Passport to advanced mathematics">' +
    '<option value="Problem solving and data analysis">'+'<option value="Additional topics in math">'+
    '<option value="Reading:Science">'+'<option value="Reading:History">'+
    '<option value="Reading:Literature">'+'<option value="Reading:Social Science">'+
    '<option value="Writing:argument">'+
    '<option value="Writing:informative">'+
    '<option value="Writing:narrative">'+
    '<option value="Grammar and effective language use">'+'</datalist>',
  '</form>'
  
  )
},


 function (req, res) {
  console.log("BEgin"),
  console.log(req),
  
  req.file('file').upload({
    
      dirname: require('path').resolve(sails.config.appPath, 'assets/worksheets'),
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
        console.log("file upload success",fd);
        
        category=uploadedFiles[0].category;
        console.log(category);
        let filecontrol = await Guides.create({
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