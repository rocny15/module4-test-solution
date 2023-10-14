(function(window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  var write = function () {
    for(var i = 0; i < names.length; i++ ){
      if(names[i][0].charAt().toUpperCase() === "J"){
        window.byeSpeaker(names[i]);
      }
      else{
        window.helloSpeaker(names[i]);
      }
    }
  }

  write();

})(window);