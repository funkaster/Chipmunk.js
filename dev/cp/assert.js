define([], {
  debugging: false,
  
  hard: function(condition, message){
    if( !condition ){
      throw message;
    }
  },
  
  soft: function(condition, message){
    if( !condition && this.debugging ){
      console.log( message );
    }
  }
});
