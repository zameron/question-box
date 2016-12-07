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
    var postdata = {'title': 'test2q', 'description': 'testDES2', 'votes': 0, 'created': '2016-12-06 22:49:34.415098+00', 'user':1}
    jQuery.ajax({url:'/stack/questions/', data:postdata, type:'POST'
    }).done(function(){
        location = location
    })
}
questionPost()

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
