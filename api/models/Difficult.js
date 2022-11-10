/**
 * Difficult.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

      attributes: {

      qn:
      {
       type: 'string',
       required: true,
      },
      qn_type:
     {
      type: 'string',
      required: false,
     },
     answer1:
     {
      type: 'string',
      required: true,
     },
     answer2:
     {
      type: 'string',
      required: true,
     },
     answer3:
     {
      type: 'string',
      required: true,
     },
     answer4:
     {
      type: 'string',
      required: true,
     },
     correct_answer:
     {
      type: 'string',
      required: true,
     },
     category:
     {
      type: 'string',
      required: true,
     },
     answer_description:
     {
      type: 'string',
      required: true,
     },
     approved_status:
    {
      type:'boolean',
      defaultsTo:false,

    },
  
  },

};

