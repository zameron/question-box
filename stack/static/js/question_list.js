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
