// app/models/nerd.js

module.exports = function(mongoose) {
  var Schema       = mongoose.Schema;

  // define our nerd model
  // module.exports allows us to pass this to other files when it is called
  var NerdSchema   = new Schema({
      name : {type : String, default: ''}
  });

  mongoose.model('Nerd', NerdSchema);
}


//http://mongoosejs.com/docs/guide.html
