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

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/
   'POST /user/register': 'user/register',
   'GET /user/confirm': 'user/confirm',
   'GET /user/reset-password': 'user/reset-password',
   'POST /user/login': 'user/login',
   'POST /user/forgot-password': 'user/forgot-password',
   'POST /user/reset-password': 'user/reset-password',
    'POST /login': { action: 'view-login' },
    'POST /file/upload': { action: 'file/upload' },
    'GET /document_view': { action: 'view-document-view' },
    'GET /list_videos': { action: 'view-list-videos' },
    'GET /approve_videos': { action: 'view-approve-videos' },
    'POST /api/v1/action-2': { action: 'action-2' },
    'GET /api/v1/action-2': { action: 'action-2' },
    'GET /upload_questions': { action: 'view-upload-questions' },
    'POST /create-question': { action: 'create-question' },
    'GET /list': { action: 'view-list' },
    'GET /quiziz': { action: 'view-quiziz' },
    'POST /api/v1/fileupload': { action: 'fileupload' },
    'POST /guides/upload': { action: 'guides/upload' },
    'GET /list_worksheets': { action: 'view-list-worksheets' },
    'GET /difficult': { action: 'view-difficult' },
    'POST /create-difficult-question': { action: 'create-difficult-question' },
    'GET /approve': { action: 'view-approve' },
    'POST /app': { action: 'app' },
    'GET /difficult_quiz': { action: 'view-difficult-quiz' },
    'POST /deny': {action:'deny'},
    'POST/deny_questions': {action:'deny-questions'},
};
