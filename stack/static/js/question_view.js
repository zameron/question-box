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
