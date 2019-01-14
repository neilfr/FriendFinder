var questions = [
    "I really love chicken!",
    "I really love pork!",
    "I really love beef!",
    "I really love fish!",
    "I really love lamb!",
    "I really love turkey!",
    "I really love bison!",
    "I really love ostrich!",
    "I really love goat!",
    "I really love venison!"
];

var surveyAnswerOptions = 
    "<option value = '1'>1 - Strongly Disagree</option>"+
    "<option value = '2'>2</option>"+
    "<option value = '3'>3</option>"+
    "<option value = '4'>4</option>"+
    "<option value = '5'>5 - Strongly Agree</option>";

var html="";
for (var i=0;i<questions.length;i++){
    var surveyQuestionContainerDiv=$("<div>");
    $(surveyQuestionContainerDiv).addClass("surveyQuestionContainer");

    var surveyQuestionDiv=$("<div>");
    $(surveyQuestionDiv).html(questions[i]);
    $(surveyQuestionDiv).addClass("surveyQuestion");
    $(surveyQuestionContainerDiv).append(surveyQuestionDiv);

    var surveyAnswerOptionsDiv=$('<div>');
    html= "<select id='q"+i+"' name='q"+i+"'>"
    + surveyAnswerOptions+
    "</select>";
    $(surveyAnswerOptionsDiv).addClass("surveyAnswerOptions")
    $(surveyAnswerOptionsDiv).html(html);
    $(surveyQuestionContainerDiv).append(surveyAnswerOptionsDiv);

    $('#surveyContainer').append(surveyQuestionContainerDiv);
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
    $.post("/api/friends",data,function(res){
        console.log("submitted!"); 
        console.log('the response is: ');
        console.log(res);
        alert("submitted!");
        alert(JSON.stringify(res));
        $(".modal-body").html(res.name);
    });
});

/*  How do i reload/clear the page after closing the modal window.  This didn't work.
$("#modalCloseBtn").on("click",function(){
    location.reload();
}
*/