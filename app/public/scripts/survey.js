var questions = [
    "you love chicken?",
    "you love pork?",
    "you love beef?",
    "you love scuba?"
];

var surveyAnswerOptions = 
    "<option value = '1'>1 - Strongly Agree</option>"+
    "<option value = '2'>2</option>"+
    "<option value = '3'>3</option>"+
    "<option value = '4'>4</option>"+
    "<option value = '5'>5 - Strongly Agree</option>";

var html="";
for (var i=0;i<questions.length;i++){
    var surveyQuestionDiv=$("<div>");
    $(surveyQuestionDiv).html(questions[i]);
    $(surveyQuestionDiv).addClass("surveyQuestion");
    $('#surveyContainer').append(surveyQuestionDiv);

    var surveyAnswerOptionsDiv=$('<div>');
    html= "<select id='q"+i+"' name='q"+i+"'>"
    + surveyAnswerOptions+
    "</select>";
    $(surveyAnswerOptionsDiv).addClass("surveyAnswerOptions")
    $(surveyAnswerOptionsDiv).html(html);
    $('#surveyContainer').append(surveyAnswerOptionsDiv);
}

$("#submitBtn").on("click",function(){
    var name = $("#name").val().trim();
    var answerList=[];
    for(var i=0;i<questions.length;i++){
        var questionNumber="#q"+i;
        console.log(questionNumber);
        var answer=$(questionNumber).val().trim();
        answerList.push(answer);
        console.log(answer);
    }
    console.log(answerList);
    var data = {
        "name":name,
        "answers":answerList
    }
    $.post("/api/friends",data,function(){
        console.log("submitted!"); // this never gets logged?
    });
});
