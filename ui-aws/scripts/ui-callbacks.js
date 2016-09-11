// Callback functions for UI updates when we receive new data from backend
function new_situation(situation_data){
    //TODO
    alert("New Situation Data Received! " + situation_data);
    $("#situation_msg").innerHTML = situation_data;
}

function new_scores(score_data){
    //TODO
    alert("New Scores Data Received! " + score_data);
    $("#scores_msg").innerHTML = score_data;
}


// Function for sending new user selections to backend
function test_sending_selection_data(sqs_conn){
    var selections = {
        "situationID":"1234",
        "gameID":"1234",
        "playerID":"1234",
        "choice": {
            "action":"pass",
            "position":"right",
            "distance":"short"}
        };
    submit_selections(sqs_conn, selections);
    alert('Test selections submitted!');
}

function submit_selections(sqs_conn, selections){
    send_selections_to_queue(sqs_conn, selections);
}
