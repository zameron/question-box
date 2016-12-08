function blah(){
   var $stuff = $("<p>")
   jQuery.ajax("/api/answers/").done(function(results){
   var answerStuff = results.results
   for(var i = 0; i < answerStuff.length; i++){
       if(answerStuff[i].question == $("#qid").val()){
           console.log(answerStuff[i])
       $stuff.html($stuff.html()+ answerStuff[i]['text'] +'<br>' )
   }
   $("#test").append($stuff)
   }
})
}
blah()

function seeUser(){



}
