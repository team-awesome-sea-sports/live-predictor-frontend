function read_one_message_from_queue(sqs_conn, sqs_arn, ui_callback_function){
    sqs_conn.receiveMessage({
        "QueueArn": sqs_arn,
        "MaxNumberOfMessages": 1,
        "VisibilityTimeout": 30,
        "WaitTimeSeconds": 20
    }, function (err, data) {
        var sqs_message_body;
        if (data.Messages) {
            if (typeof data.Messages[0] !== 'undefined' && typeof data.Messages[0].Body !== 'undefined') {
                //sqs msg body
                sqs_message_body = JSON.parse(data.Messages[0].Body);
        
                //do something...
                ui_callback_function(sqs_message_body);

                //if it works, delete message from queue
                sqs_conn.deleteMessage({
                    "QueueArn" : sqs_arn,
                    "ReceiptHandle" :data.Messages[0].ReceiptHandle
                });
            }
            else { window.alert(err); console.log(err); }
        }
        else { window.alert(err); console.log(err); }
    });
}

function read_messages_from_queue(sqs_conn, sqs_arn, ui_callback_function){
    // repeat forever, polling every 2 seconds
    //alert("Checking for new messages on SQS arn: "+ sqs_arn);
    window.setInterval(read_one_message_from_queue(sqs_conn, sqs_arn, ui_callback_function), 2000); 
}
