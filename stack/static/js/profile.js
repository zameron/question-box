function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie = jQuery.trim(cookies[i]);
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}

var csrftoken = getCookie('csrftoken');
function csrfSafeMethod(method) {
  return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

$.ajaxSetup({
   beforeSend: function(xhr, settings) {
       if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
           xhr.setRequestHeader("X-CSRFToken", csrftoken);
       }
   }
<<<<<<< HEAD
})


function getQuestions(){
    var $stuff = $("<ol>")
    jQuery.ajax("/api/questions/").done(function(results){
    var questionStuff = results.results
    for(var i = 0; i < questionStuff.length; i++){
        if(questionStuff[i].user == $("#user_id").val()){
        var address = '/stack/questions/' + questionStuff[i]['id']
        $stuff.html($stuff.html()+ "<div id='questiondiv'><a href='" + address + "'>" + questionStuff[i]['title'] + "</a><button class='deleteClass' id='" + "delete" + questionStuff[i]['id'] + "' onClick='delete_click(this.id)'>delete</button><br>" + '<ul><li>' + questionStuff[i]['description'] + "</li></ul></div>  <br>")
    }
    $("#questionsAsked").append($stuff)
    }
})
}
getQuestions()

function getAnswers(){
    var $stuff = $("<ol>")
    jQuery.ajax("/api/answers/").done(function(results){
    var answerStuff = results.results
    for(var i = 0; i < answerStuff.length; i++){
        if(answerStuff[i].user == $("#user_id").val()){
        var address = '/stack/questions/' + answerStuff[i].question
        $stuff.html($stuff.html()+ "<div id='answersdiv'><a href='" + address + "'>"  + '<ul><li>' + answerStuff[i]['text'] + "</a>" + "</li></ul></div><br>")
    }
    $("#answersGiven").append($stuff)
    }
})
}
getAnswers()

function questionPost(){
    var title = $("#addQuestion").val()
    var description = $("#addDescription").val()
    var user_id = $("#user_id").val()
    var created = new Date().toISOString();
   var postdata = {title: title,
                   description: description,
                    votes: 1,
                    created: created,
                    user: user_id,
                    categories: 1}
   jQuery.ajax({url:'/api/questions/', data:postdata, type:'POST'
   }).done(function(){
       location = location
   })
}
$("#addQ").click(questionPost)


function delete_click(clicked_id){
    var delete_url = clicked_id.replace('delete', "")
    jQuery.ajax({url:"/api/questions/"+delete_url, type:'DELETE'}).done(function(){
        location = location
    })
}
=======
});

function getQuestions(){
    $.getJSON('/api/questions/', function (questions){
        var source = $('#post-template').html();
        var template = Handlebars.compile(source);
        var html = template(questions.results);
        $('main').append(html);
        console.log(questions)
    })
}
var context = getQuestions()

Handlebars.registerHelper('displayLink', function(id, title, url) {
 title = Handlebars.Utils.escapeExpression(title);
 id  = Handlebars.Utils.escapeExpression(id);
 datatype = this.url.split('/');
 datatype = datatype[datatype.length-3]
   return '<a href="' + '/stack' + '/' + datatype + '/' + this.id + '">' + this.title + '</a>';
});


function questionPost(){
   var title = $("#addQuestion").val()
   var description = $("#addDescription").val()
   var user_id = $("#user_id").val()
   var created = new Date().toISOString();
   console.log(created)
  var postdata = {title: title,
                  description: description,
                   votes: 1,
                   created: created,
                   user: user_id,
                   categories: }
  jQuery.ajax({url:'/api/questions/', data:postdata, type:'POST'
  }).done(function(){
  })
}
$("#addQ").click(questionPost)
>>>>>>> 85802a057d07de45f031082993383766bf6070eb
