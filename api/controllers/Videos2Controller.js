/**
 * Videos2Controller
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

      //: req.param(''),

    }

    // Create a User with the params sent from 
    // the sign-up form --> new.ejs
    Videos2.create(paramObj, function videos2Created(err, videos2) {

      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        }
        return res.redirect('/videos2/new');
      }

      // res.json(videos2);
      res.redirect('/videos2/show/' + videos2.id);

    });
  },

  show: function(req, res, next) {
    console.log("begin")
    Videos2.find(req.param('id'), function foundVideos2(err, videos2) {
      console.log("first")
      if (err) return next(err);
      if (!videos2) return next();
      console.log('ending')
      // res.json(videos2);
      res.view({
        
        videos2: videos2
      });
    });
  },

  index: function(req, res, next) {
    Videos2.find(function foundVideos2s(err, videos2s) {
      if (err) return next(err);
      
      res.view({
        videos2s: videos2s
      });
    });
  },

  edit: function(req, res, next) {

    Videos2.findOne(req.param('id'), function foundVideos2(err, videos2) {
      if (err) return next(err);
      if (!videos2) return next('videos2 doesn\'t exist.');

      res.view({
        videos2: videos2
      });
    });
  },

  update: function(req, res, next) {

    var paramObj = {

     // : req.param(''),

    }

    Videos2.update(req.param('id'), paramObj, function videos2Updated(err) {
      if (err) {
        console.log(err);

        req.session.flash = {
          err: err
        }

        return res.redirect('/videos2/edit/' + req.param('id'));
      }

      res.redirect('/videos2/show/' + req.param('id'));
    });
  },

  destroy: function(req, res, next) {

    Videos2.findOne(req.param('id'), function foundVideos2(err, videos2) {
      if (err) return next(err);

      if (!videos2) return next('Videos2 doesn\'t exist.');

      Videos2.destroy(req.param('id'), function videos2Destroyed(err) {
        if (err) return next(err);
    });        

      res.redirect('/videos2');

    });
  }
 


};

