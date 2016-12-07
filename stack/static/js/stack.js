function testQuestion(){
    var $stuff = $("<ol>")
    jQuery.ajax("https://lit-escarpment-88574.herokuapp.com/stack/questions/").done(function(results){
        var questionStuff = results.results
        console.log(results.results)
        for(var i = 0; i < questionStuff.length; i++){
            $stuff.html($stuff.html()+ questionStuff[i]['title'] + "<br>")
            $("#test").append($stuff)
        }
    })
}
testQuestion()
