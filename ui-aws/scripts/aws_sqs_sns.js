function do_nothing(){
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
}

function generate_queue_name(app_name) {
    return "gamestream-dev-" + app_name + "-" + guid();
}


function subscribe_queue_to_topic(sns_conn, sqs_conn, topic_arn, app_name, callback_function, ui_callback_function) {
    var queue_name = generate_queue_name(app_name);
    var queue_url = "";
    var queue_arn = "";

    sqs_conn.createQueue({
        QueueName: queue_name,
    }, function (err, data) {
        if (err !== null) {
            window.alert(err);
        }
        queue_url = data.QueueUrl;

        var params = {
            QueueUrl: queue_url, /* required */
            AttributeNames: [
            'QueueArn',
                /* more items */
            ]
        };

        // get the queue ARN
        sqs_conn.getQueueAttributes(params, function(err, data) {
            if (err !== null) {
                window.alert(err);        
            } else {
                queue_arn = data['Attributes']['QueueArn'];
                
                // make the subscription
                sns_conn.subscribe({
                    TopicArn: topic_arn,
                    Protocol: 'sqs',
                    Endpoint: queue_arn
                }, function (err, data) {
                    if (err !== null) {
                        window.alert(err);
                    }

                    var sqs_policy = {
                        "Version":"2012-10-17",
                        "Id": queue_arn + "/SQSDefaultPolicy",
                        "Statement": [{
                            "Sid": "Sid" + new Date().getTime(),
                            "Effect": "Allow",
                            "Principal": {
                                "AWS": "*"
                            },
                            "Action":"SQS:SendMessage",
                            "Resource":queue_arn,
                            "Condition":{
                                "ArnEquals":{
                                    "aws:SourceArn":topic_arn
                                }
                            }
                        }]
                    }
                    var sqs_policy_json = JSON.stringify(sqs_policy);

                    sqs_conn.setQueueAttributes({
                        QueueUrl: queue_url, 
                        Attributes: {
                            Policy: sqs_policy_json
                        }
                    }, function (err, data) {
                        if (err !== null) {
                            window.alert(err);
                        }
                        alert("Game room now connected to " + app_name + " updates...");
                        callback_function(sqs_conn, sqs_arn, ui_callback_function);
                    });
                });
            }
        });
    });
}

// {"situationID":"1234","gameID":"1234","playerID":"1234","choice":{"action":"pass","position":"right","distance":"short"}}

/*
{
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
} */
