function answersList(){
    var $stuff = $("<table>")
    jQuery.ajax("/api/answers/").done(function(results){
    var answerStuff = results.results
    console.log(answerStuff)
    for(var i = 0; i < answerStuff.length; i++){
        if(answerStuff[i].question == $("#qid").val()){
        $stuff.html($stuff.html()+"<tr><td><h4>" + answerStuff[i]['text'] +'</h4><br>' + "<h6>answered by:" + answerStuff[i].user +"<br><h6>SCORE:" + answerStuff[i]['votes'] + "<br><br><br></td><td><button class='down' id='" + answerStuff[i].url +"down' onClick='vote_click(this.id)'" + ">down</button></td><td><button class='uppp' id='" + answerStuff[i].url +"uppp' onClick='vote_click(this.id)'" + ">up</button></td>")
    }
    $("#answers").append($stuff)
    }
})
}
answersList()


function vote_click(clicked_id){
    var answerChoice = clicked_id.slice(-4)
    var answerId = clicked_id.replace(answerChoice, "")
    var voteCount = 0
    jQuery.ajax(answerId).done(function(results){
        console.log(results.votes)
        voteCount = results.votes
        if(answerChoice == 'down'){
            voteCount--
            patchVotes(answerId, voteCount)
        }
        if(answerChoice == 'uppp'){
            voteCount++
            patchVotes(answerId, voteCount)
        }
    })
}

function patchVotes(answerId, voteCount){
    var patchdata = {'votes': voteCount}
    jQuery.ajax({url: answerId, data: patchdata, type:'PATCH'}).done(function(){
        location = location
    })

}


function tagFinderStuff(){
    jQuery.ajax("/api/questions/").done(function(results){
    var questionStuff = results.results
    for(var i = 0; i < questionStuff.length; i++){
        if(questionStuff[i].id == $("#qid").val()){
            for(var j = 0; j < questionStuff[i].categories.length; j++){
                tagGrabber(questionStuff[i].categories[j])
                // $stuff.html($stuff.html()+ questionStuff[i].categories[j])
            }
    }
    // $("#tags").append($stuff)
    }
})
}
tagFinderStuff()


function answerPost(){
    var text = $("#addAnswer").val()
    var user_id = $("#user_id").val()
    var created = new Date().toISOString()
    var question = $("#qid").val()
    var postdata = {text: text,
                    votes: 1,
                    created: created,
                    user: user_id ,
                    question: question}
   jQuery.ajax({url:'/api/answers/', data:postdata, type:'POST'
   }).done(function(){
       location = location
   })
}
$("#addA").click(answerPost)


function tagGrabber(tag){
    var $stuff = $("<p>")
    jQuery.ajax("/api/tag/"+tag).done(function(results){
    var tagStuff = results
    $("#tags").append(results.topic)
})
}
