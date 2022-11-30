# Streaming data from Mastodon public timelines to Apache Kafka with NodeJS

This repository illustrates 

1. How to stream the data from Mastadon with Mastadon client library
2. How to use **node-rdkafka** to send Mastadon data to an Apache Kafka topic.
 

## Set up

1. Add your ca.pem, certificate.cert and service.key to **certificates** folder.
2. Copy .env.example, rename to .env and set **kafka.uri** to point to you Aiven for Apache Kafka service
3. Run ``npm install``
4. Run ``npm run start``

## License


This work is licensed under a
[Creative Commons Attribution 4.0 International License] (<http://creativecommons.org/licenses/by/4.0/>).
