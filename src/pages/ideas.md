---
title: '💡 What Can We Improve?'
lastUpdated: 2022-01-08T07:12:46.226Z
order: 1.5
---

## Improving Scaleability with Microservices

Currently our architecture has a limitation. In general we are firing a single event, when the user interacts with the app, and performing many actions based on that event. And all of these events are going to a limited number of downstream depnedencies.

![Current Architecture](/current-system.png)

Here you can see that clinet requests are hitting lambda's that are scaling for us, but are all hitting our downstream dependencies simultaneously. This will cause response times to the user to be _slower_. This will put our downstream dependencies at risk of being overloaded. And ultimately limit are ability to scale.

Consider this version of our app with using SQS as a buffer between the client and downstream dependencies for all tasks that do not require a user response.

![Fan out](/fanout.png)

We will still need to hit our downstream dependencies for a limited number of tasks, but we will be able to scale up the number of tasks we do with each event, without sacraficing response times or overloading downstream dependencies.

## Some Ideas for Additional Features
Here are some things that are currently done, that could easily go into a queue, and some new things we may want to implement down the line, that would be easy to implement, with this architecture.

* Recording user activity as a history document in the databse.
* Reconciling contact documents with req contacts, user contacts, and master contacts.
* Sending email notifications to users, and in app notifications to other users. 
* Storing analytical data about user activity, such as data on the types of contacts that a user is hiring. We can use this data to help give users advice on their contacts and the leads they should be looking for.
* Performing long running tasks, such as creating bulk documents or agregating data.

::: dracula
🃏 Some other thoughts are down here, but I wrote these before I wrote the section above.
:::
## Long Running Tasks
Tasks that take a long time can be split up and run in parallel.

## Data Aggregation
Collect data from different sources in parallel, store that data you've collected in the `global store` and then `onClusterComplete` use that data to do something with it.

## Messages, Notifications, Emails
Send emails, text messages, and in app notifications in parallel, and batched for efficiency, without the user having to wait for the messages to be sent.

## Logging, Analytics, Monitoring, History Tracking
Logging, analytics, monitoring, and history tracking can be done in parallel, and batched for efficiency, without the user having to wait for the all of this background noise to occur.