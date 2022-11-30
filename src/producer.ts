import Kafka from "node-rdkafka";
import mastostream from "./mastostream";
import dotenv from "dotenv"
dotenv.config();

//create a producer
const producer = new Kafka.Producer({
    'metadata.broker.list': process.env["kafka.uri"],
    'security.protocol': 'ssl',
    'ssl.key.location': process.env["ssl.key.location"],
    'ssl.certificate.location': process.env["ssl.certificate.location"],
    'ssl.ca.location': process.env["ssl.ca.location"],
    'dr_cb': true
});

producer.on('event.log', function (log) {
    console.log(log);
});

//logging all errors
producer.on('event.error', function (err) {
    console.error(err);
});

producer.on('connection.failure', function (err) {
    console.error(err);
});

producer.on('delivery-report', function (err, report) {
    console.log('Message was delivered' + JSON.stringify(report));
});

producer.on('disconnected', function (arg) {
    console.log('producer disconnected. ' + JSON.stringify(arg));
});

producer.on('ready', async () => {
    mastostream((status) => {
        producer.produce(
            'mastodon',  // name of the topic
            null,  // partition, use null for librdkafka default partitioner
            Buffer.from(status),  // message to send
            null,  // optional key
            Date.now()  // optional timestamp
        );
        producer.flush(2000);
        console.log("Message sent");
    }).catch((error) => {
        throw error;
    });
});

producer.connect({}, (err) => {
    if (err) {
        console.error(err);
    }
});