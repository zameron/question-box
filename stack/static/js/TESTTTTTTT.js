var patchdata = {'votes': voteCount}
jQuery.ajax({url: answerId, data: patchdata, type:'PATCH'}).done(function(){
})




function makeVote(){
    var $buttons = $("<table>")
    jQuery.ajax("/api/answers/").done(function(results){
        var answerStuff = results.results
        for(var i = 0; i<answerStuff.length; i++){
            if(answerStuff[i].question == $("#qid").val()){
            $buttons.html($buttons.html()+ "<tr><td><button id='" + answerStuff[i].url +"down' onClick='vote_click(this.id)'" + ">down</button></td><td><button id='" + answerStuff[i].url +"uppp' onClick='vote_click(this.id)'" + ">up</button></td><tr>")
        }
        }
        $("#votebuttons").append($buttons)
    })
}



function taskDeletes(urlDel){

}


<div class="container">
    <div class="row">
        <div class="col-md-12">

        </div>
    </div>
</div>
