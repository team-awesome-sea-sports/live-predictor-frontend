/* Data Examples

Situation Data: {"situationID":"1234","gameID":"1234","playerID":"1234","choice":{"action":"pass","position":"right","distance":"short"}}
Score Data: {
    "gameID":"1234",
    "situationID": "1234",
    "playerScores": [
      {
          "playerID": "1234",
          "score": "29"
      },
      {
          "playerID": "5678",
          "score": "56"
      }
    ]
}
*/

function read_one_message_from_queue(sqs_conn, queue_url, ui_callback_function){
    var receive_message_params = {
        "QueueUrl": queue_url,
        "MaxNumberOfMessages": 1,
        "VisibilityTimeout": 30,
        "WaitTimeSeconds": 20
    }
    sqs_conn.receiveMessage(
        receive_message_params,
        function (err, data) {
        var sqs_message_body;
        if (data && data.Messages) {
            if (typeof data.Messages[0] !== 'undefined' && typeof data.Messages[0].Body !== 'undefined') {
                //sqs msg body
                sqs_message_body = JSON.parse(data.Messages[0].Body);
        
                //if it works, delete message from queue
                sqs_conn.deleteMessage({
                    "QueueUrl" : queue_url,
                    "ReceiptHandle" :data.Messages[0].ReceiptHandle
                }, function(err, data){
                    //do something...
                    if(err === null) ui_callback_function(sqs_message_body);
                });

            } 
        } 
        setTimeout(function(){
            read_one_message_from_queue(sqs_conn, queue_url, ui_callback_function)
        }, 5000);
    });
}



function read_messages_from_queue(sqs_conn, queue_url, ui_callback_function){
    //alert("Checking for new messages on SQS URL: "+ queue_url);
    read_one_message_from_queue(sqs_conn, queue_url, ui_callback_function);
}
