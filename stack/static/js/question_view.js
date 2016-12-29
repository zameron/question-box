<<<<<<< HEAD
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
=======
function getCookie(name) {
  var cookieValue = null
  if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';')
      for (var i = 0; i < cookies.length; i++) {
          var cookie = jQuery.trim(cookies[i])
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
              break;
          }
      }
  }
  return cookieValue
}


var csrftoken = getCookie('csrftoken')
function csrfSafeMethod(method) {
  return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method))
}


$.ajaxSetup({
   beforeSend: function(xhr, settings) {
       if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
           xhr.setRequestHeader("X-CSRFToken", csrftoken)
       }
   }
})


function currentURL(){
   var url = window.location.href
   getQuestionDetail(url)

}
currentURL()


function getQuestionDetail(url){
   var id = url.split('/')
   id = '/' + url.slice(-2)
   $.ajax({
       url: '/api/questions' + id,
       type: 'GET',
   }).done(function(results){
       var answers = results.answers
       displayAnswers(answers)
       var context = {
           title: results.title,
           created: results.created,
           text: results.text,
       }
       var source = $('#post-template').html()
       var template = Handlebars.compile(source)
       var html = template(context)
       $('#questDetail').append(html)

   })
}


function displayAnswers(answers){
   console.log(answers)
   var sourceTwo = $('#post-template-two').html()
   var templateTwo = Handlebars.compile(sourceTwo)
   var htmlTwo = templateTwo(answers)
   console.log(htmlTwo)
   $('#answerDetail').append(htmlTwo)

}


Handlebars.registerHelper('formatTime', function (date) {
   var day = date.slice(8, 10)
   var month = date.slice(5, 7)
   var year = date.slice(0, 4)
   return month + "-" + day + "-" + year

})

getQuestionDetail()
>>>>>>> 85802a057d07de45f031082993383766bf6070eb
