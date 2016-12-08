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

function getQuestions(){
    $.getJSON('/api/questions/', function (questions){
        var source = $('#post-template').html();
        var template = Handlebars.compile(source);
        var html = template(questions.results);
        $('main').append(html);
        console.log(source)

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

//
//
// function getQuestions(){
//    var $stuff = $("<ol>")
//    jQuery.ajax("/api/questions/").done(function(results){
//    var questionStuff = results.results
//    console.log(results.results)
//    for(var i = 0; i < questionStuff.length; i++){
//        if(questionStuff[i].user == $("#user_id").val()){
//        $stuff.html($stuff.html()+ questionStuff[i]['title'] + "<br>")
//    }
//    $("#test").append($stuff)
//    }
// })
// }
// getQuestions()
