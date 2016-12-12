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
})


function getQuestions(){
    var $stuff = $("<ol>")
    jQuery.ajax("/api/questions/").done(function(results){
    var questionStuff = results.results
    for(var i = 0; i < questionStuff.length; i++){
        if(questionStuff[i].user == $("#user_id").val()){
        var address = '/stack/questions/' + questionStuff[i]['id']
        $stuff.html($stuff.html()+ "<a href='" + address + "'>" + questionStuff[i]['title'] + "</a><button id='" + "delete" + questionStuff[i]['id'] + "' onClick='delete_click(this.id)'>delete</button><br>" + '<ul><li>' + questionStuff[i]['description'] + "</li></ul>")
    }
    $("#questionsAsked").append($stuff)
    }
})
}
getQuestions()

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
