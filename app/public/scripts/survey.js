var questions = [
    "you love chicken?",
    "you love pork?"
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
    $(surveyQuestionDiv).addClass("surveyQuestion")
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
    var answer1 = $("#q1").val().trim();
    var answer2 = $("#q2").val().trim();
    console.log("name is: "+name);
    var data = {
        "name":name,
        "answers":[answer1,answer2]
    }
    $.post("/api/friends",data,function(){
        console.log("submitted!"); // this never gets logged?
    });
});
