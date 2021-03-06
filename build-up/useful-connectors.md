---
title: Useful Connectors
---

# Useful Connectors

The connectors provide a meshanism that allows interaction between components. Connectors have many forms, not just simple peer-to-peer connections. Advanced connectors are powerful tools that simplifies the problem domains.

**Read-Write.** The read-write connector enables us reading and writing data through file system interfaces. It's not limited to the local file system; many remote resources can also be mounted to local file system, such as s3fs, hdfs, etc.

**Dump-Collect.** The dump-collect connector enables writers dumping data to the storage and collectors transporting data out from the storage. Usually the storage is a local file system, and the destination of data is a service that has a higher capacity and volumn. Such a connector is usually used in logging and monitoring system.

**Deliver.** The deliver connector is an one-way data exchange. The sender sends a message out and doesn't care if the message has delivered. This connector is typically based on UDP sockets.

**Request-Response.** The request-response connector, sometimes called request-reply, enables a client sending a request for some data and the server responding the data to the request.  It requires the client to know some basic information of the server, such as the IP address or domain of the server. It also implies the client needs to agree some forms of data exchanging protocols with the server, such as XML, JSON, gRPC, or a customized data format. This connector is typically implemented as RESTful HTTP API, RPC, etc.

**Publish-Subscribe.** The publish-subscribe connector, sometimes simplified as pub-sub, enables a publisher sending message and only those subscribers interested in certain types of topics receiving messages.

**Push-Pull.** The push-pull connector enables senders sending messages and the messages will be delivered to one of the receivers. It guarantees the message to be handled exact once. This connector is typically implemented as FIFO queues, UNIX pipes, etc.

