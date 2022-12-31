/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  'GET /':                   { action: 'view-homepage-or-redirect' },
  'GET /welcome/:unused?':   { action: 'dashboard/view-welcome' },

  'GET /faq':                { action:   'view-faq' },
  'GET /legal/terms':        { action:   'legal/view-terms' },
  'GET /legal/privacy':      { action:   'legal/view-privacy' },
  'GET /contact':            { action:   'view-contact' },

  'GET /signup':             { action: 'entrance/view-signup' },
  'GET /email/confirm':      { action: 'entrance/confirm-email' },
  'GET /email/confirmed':    { action: 'entrance/view-confirmed-email' },

  'GET /login':              { action: 'entrance/view-login' },
  'GET /password/forgot':    { action: 'entrance/view-forgot-password' },
  'GET /password/new':       { action: 'entrance/view-new-password' },

  'GET /account':            { action: 'account/view-account-overview' },
  'GET /account/password':   { action: 'account/view-edit-password' },
  'GET /account/profile':    { action: 'account/view-edit-profile' },


  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗   ┬   ╔╦╗╔═╗╦ ╦╔╗╔╦  ╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗  ┌┼─   ║║║ ║║║║║║║║  ║ ║╠═╣ ║║╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝  └┘   ═╩╝╚═╝╚╩╝╝╚╝╩═╝╚═╝╩ ╩═╩╝╚═╝
  '/terms':                   '/legal/terms',
  '/logout':                  '/api/v1/account/logout',


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝
  // …


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.
  '/api/v1/account/logout':                           { action: 'account/logout' },
  'PUT   /api/v1/account/update-password':            { action: 'account/update-password' },
  'PUT   /api/v1/account/update-profile':             { action: 'account/update-profile' },
  'PUT   /api/v1/account/update-billing-card':        { action: 'account/update-billing-card' },
  'PUT   /api/v1/entrance/login':                        { action: 'entrance/login' },
  'POST  /api/v1/entrance/signup':                       { action: 'entrance/signup' },
  'POST  /api/v1/entrance/send-password-recovery-email': { action: 'entrance/send-password-recovery-email' },
  'POST  /api/v1/entrance/update-password-and-login':    { action: 'entrance/update-password-and-login' },
  'POST  /api/v1/deliver-contact-form-message':          { action: 'deliver-contact-form-message' },
  'POST  /api/v1/observe-my-session':                 { action: 'observe-my-session', hasSocketFeatures: true },

  //CUSTOM ROUTES
  //Note: send== upload && create==generates  
  //text based pages
  //_________________________________________________________________________________________________________
  // Non dynamic pages
  'GET /about': { action: 'view-about' },
  //View for the about page
  'GET /syllabus': { action: 'view-syllabus' },
  //view for the syllabus page
  'GET /questions_about_the_sat': { action: 'view-questions-about-the-sat' },
  // view for the questions about the sat page
  //_________________________________________________________________________________________________________
  //Admin
  'GET /admin/index': { action: 'admin/view-index' },
  //view the admin index page
  'GET /admin/list': { action: 'admin/view-list' },
  //view the list users page 
  //TODO:maybe this needs to be changed into an action
  //__________________________________________________________________________________________________________
  //Quiz
  'GET /quizzes/index': { action: 'quizzes/view-index' },
  //generates the quiz home page
  'GET /quizzes/approve_difficult': { action: 'quizzes/view-approve-difficult' },
  //generate the approve difficult questions page
  'GET /quizzes/upload_difficult': { action: 'quizzes/view-upload-difficult' },
  //generate the upload difficult questions page
  'GET /quizzes/generate_difficult': { action: 'quizzes/view-generate-difficult' },
  //generate the quiz of difficult questions
  'GET /quizzes/generate': { action: 'quizzes/view-generate' },
  //generate the quiz of categorical questions
  'GET /quizzes/upload': { action: 'quizzes/view-upload' },
  //generate the upload categorical questions page
  'GET /quizzes/list': { action: 'quizzes/view-list' },
  // generate the list questions from different categories for the admin
  'GET /quizzes/list_difficult': { action: 'quizzes/view-list-difficult' },
  //generate the list difficult questions from difficult categories for the admin
  'POST /quizzes/send': { action: 'quizzes/send' },
  //generate the action for uploading a question
  'POST /quizzes/send-difficult': { action: 'quizzes/send-difficult' },
  //generate the action for uploading the difficult question
  'POST /quizzes/create': { action: 'quizzes/create' },
  //generate the action for generating the quiz
  'POST quizzes/create-difficult': { action: 'quizzes/create-difficult' },
  //generate the action for generate the difficult quiz
  'POST /quizzes/allow': { action: 'quizzes/allow' },
  //generate the action for approving the difficult questions
  'POST /api/v1/quizzes/deny': { action: 'quizzes/deny' },
  //generate the action for denying the difficult questions
  //__________________________________________________________________________________________________________
  //Videos
  'GET /videos/index': { action: 'videos/view-index' },
  //generate the home page for the videos section
  'GET /videos/view': { action: 'videos/view-view' },
  //generate the home page for the list section
  'GET /videos/upload': { action: 'videos/view-upload' },
  //generate the upload video upload page
  'GET /videos/approve': { action: 'videos/view-approve' },
  //generate the approve video page
  'GET /videos/approve_multiple': { action: 'videos/view-approve-multiple' },
  //generate a multiple approve  video page
  'POST /videos/allow': { action: 'videos/allow' },
  //generate the action for allowing/approving the videos
  'POST /videos/deny': { action: 'videos/deny' },
  //generate the action for the denying the videos
  'POST /videos/send': { action: 'videos/send' },
  //generate the action for uploading the videos
  //_________________________________________________________________________________________________________
  //Worksheets
  'GET /worksheets/index': { action: 'worksheets/view-index' },
  //generate the home page for the worksheets section
  'GET /worksheets/view': { action: 'worksheets/view-view' },
  //generate the view worksheets page
  'GET /worksheets/upload': { action: 'worksheets/view-upload' },
  //generate the page for the uploading the worksheets
  'POST /worksheets/send': { action: 'worksheets/send' },
  //generate the action for uploading the worksheets 
  //_________________________________________________________________________________________________________
};
