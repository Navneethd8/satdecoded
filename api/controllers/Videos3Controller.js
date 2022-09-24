/**
 * Videos3Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  'new': function(req,res){
    res.view();    
  },

  create: function(req, res) {

    var paramObj = {

     // : req.param(''),

    }

    // Create a User with the params sent from 
    // the sign-up form --> new.ejs
    Videos3.create(paramObj, function videos3Created(err, videos3) {
      console.log('begin')
      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        }
        console.log('redirecting...')
        return env.res.redirect('/videos3/new');
      }

      // res.json(videos3);
      console.log('redirecting...')
      res.redirect('/videos3/show/' + videos3.id);

    });
  },

  show: function(req, res, next) {
    Videos3.findOne(req.param('id'), function foundVideos3(err, videos3) {
      if (err) return next(err);
      if (!videos3) return next();

      // res.json(videos3);
      res.view({
        videos3: videos3
      });
    });
  },

  index: function(req, res, next) {
    console.log("begin")
    Videos3.find(function foundVideos3s(err, videos3s) {
      if (err) return next(err);
      console.log("before view")
      res.view({
        videos3s: videos3s
      });
    });
    console.log("end")
  },

  edit: function(req, res, next) {

    Videos3.findOne(req.param('id'), function foundVideos3(err, videos3) {
      if (err) return next(err);
      if (!videos3) return next('videos3 doesn\'t exist.');

      res.view({
        videos3: videos3
      });
    });
  },

  update: function(req, res, next) {

    var paramObj = {

    //  : req.param(''),

    }

    Videos3.update(req.param('id'), paramObj, function videos3Updated(err) {
      if (err) {
        console.log(err);

        req.session.flash = {
          err: err
        }

        return res.redirect('/videos3/edit/' + req.param('id'));
      }

      res.redirect('/videos3/show/' + req.param('id'));
    });
  },

  destroy: function(req, res, next) {

    Videos3.findOne(req.param('id'), function foundVideos3(err, videos3) {
      if (err) return next(err);

      if (!videos3) return next('Videos3 doesn\'t exist.');

      Videos3.destroy(req.param('id'), function videos3Destroyed(err) {
        if (err) return next(err);
    });        

      res.redirect('/videos3');

    });
  }
 


};

