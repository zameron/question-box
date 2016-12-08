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
                    categories: 2}
   jQuery.ajax({url:'/stack/questions/', data:postdata, type:'POST'
   }).done(function(){
   })
}
$("#addQ").click(questionPost)


function questionDelete(){
jQuery.ajax({url:'/stack/questions/4', type:'DELETE'}).done(function(){
})
}

function testQuestion(){
   var $stuff = $("<ol>")
   jQuery.ajax("/api/questions/").done(function(results){
       var questionStuff = results.results
       for(var i = 0; i < questionStuff.length; i++){
           $stuff.html($stuff.html()+ questionStuff[i]['title'] + "<br>" + questionStuff[i]['description'] + "<br>")
           $("#test").append($stuff)
       }
   })
}
testQuestion()
