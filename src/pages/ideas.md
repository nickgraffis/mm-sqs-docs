---
title: '💡 What Can We Improve?'
lastUpdated: 2022-01-08T07:12:46.226Z
order: 1.5
---

## Long Running Tasks
Tasks that take a long time can be split up and run in parallel.

## Data Aggregation
Collect data from different sources in parallel, store that data you've collected in the `global store` and then `onClusterComplete` use that data to do something with it.

## Messages, Notifications, Emails
Send emails, text messages, and in app notifications in parallel, and batched for efficiency, without the user having to wait for the messages to be sent.

## Logging, Analytics, Monitoring, History Tracking
Logging, analytics, monitoring, and history tracking can be done in parallel, and batched for efficiency, without the user having to wait for the all of this background noise to occur.