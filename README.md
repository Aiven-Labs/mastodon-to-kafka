# Streaming data from Mastodon public timelines to Apache Kafka® with NodeJS

This repository illustrates 

1. How to stream the data from Mastadon with Mastodon client library
2. How to use **node-rdkafka** to send Mastodon data to an Apache Kafka topic.
 

## Set up

1. Add your ca.pem, certificate.cert and service.key to **certificates** folder.
2. Copy .env.example, rename to .env and set **kafka.uri** to point to you Aiven for Apache Kafka service
3. Add your Mastodon token to .env
3. Run ``npm install``
4. Run ``npm run start``


## Contributions

This project does not expect any contributions.

## License

This work is licensed under the Apache License, Version 2.0. Full license text is available in the LICENSE file and at http://www.apache.org/licenses/LICENSE-2.0.txt


## Trademarks
Apache Kafka is either a registered trademark or trademark of the Apache Software Foundation in the United States and/or other countries.
