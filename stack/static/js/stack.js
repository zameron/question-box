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
   var postdata = {title: 'hfhdfh',
                   description: 'ththtd',
                    votes: 1,
                    created: '2016-12-07T21:47:14.459747',
                    user: 1,
                    categories: 2}
   jQuery.ajax({url:'/stack/questions/', data:postdata, type:'POST'
   }).done(function(){   console.log(postdata)

   })
}

$("#addQ").click(questionPost)


function questionDelete(){
jQuery.ajax({url:'/stack/questions/4', type:'DELETE'}).done(function(){
})
}

function testQuestion(){
   var $stuff = $("<ol>")
   jQuery.ajax("/stack/questions/").done(function(results){
       var questionStuff = results.results
       console.log(results.results)
       for(var i = 0; i < questionStuff.length; i++){
           $stuff.html($stuff.html()+ questionStuff[i]['title'] + "<br>")
           $("#test").append($stuff)
       }
   })
}
testQuestion()
