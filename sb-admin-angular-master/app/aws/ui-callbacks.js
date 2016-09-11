function new_situation(situation_data){
    //TODO
    // alert("New Situation Data Received! " + situation_data);
    $("#situation_msg").innerHTML = JSON.stringify(situation_data);
    alert(JSON.stringify(situation_data.Message));
    console.log(JSON.stringify(situation_data.Message));
}

function new_scores(score_data){
    //TODO
    alert("New Scores Data Received! " + JSON.stringify(score_data));
      console.log(JSON.stringify(score_data));
}
