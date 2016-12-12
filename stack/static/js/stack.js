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

function testQuestion(){
   var $stuff = $("<ol>")
   jQuery.ajax("/api/questions/").done(function(results){
       var questionStuff = results.results
       for(var i = 0; i < questionStuff.length; i++){
           var address = '/stack/questions/' + questionStuff[i]['id']
           $stuff.html($stuff.html()+ "<a href='" + address + "'>" + questionStuff[i]['title'] + "</a><br>" + '<ul><li>' + questionStuff[i]['description'] + "</li></ul>")
       }
       $("#allQuestions").append($stuff)
   })
}
testQuestion()
