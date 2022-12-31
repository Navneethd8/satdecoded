/**
 * Guides.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    fd:
    {
      type:'string',
      required:true,
    },
    filename:
    {
      type:'string',
      required:true,
    },
    category:
    {
      type:'string',
      required:false,
    },
    userid_upload:
    {
      type:'number',
      required:false,
    },
    userid_approve:
    {
      type:'number',
      required:false,
    },
    filetype:
    {
      type:'string',
      required:true,
    },
    size:
    {
      type:'number',
      required:true,
    },

  },

};

