function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

module.exports = {


  friendlyName: 'View difficult quiz',


  description: 'Display "Difficult quiz" page.',

  inputs:{
    category:{
      type: 'string',
      required: false,
  
    },
    id:{
      type:'number',
      required:false,
    },
     correct_answer:{
      type: 'string',
      required: false,
    },
  },
  exits: {

    success: {
      viewTemplatePath: 'pages/difficult-quiz'
    }

  },


  fn: async function (inputs,exits,env) {
     
    var count= await Difficult.count({category:inputs.category,});
    var randm = Math.floor((Math.random() * count));
    console.log(randm)
    if(randm < 0) randm = 0;
    
    // var questions= await Questions.findAll().where();
    var questions= await Difficult.find({category:inputs.category,correct_answer:inputs.correct_answer}).limit(10);
    shuffle(questions)
    // var questions=Questions.findOne({order: sequelize.random()});  
    // Respond with view.
    console.log('After retreival',questions);
    return env.res.view({questions: questions})

    // Respond with view.
    return {};

  }


};
