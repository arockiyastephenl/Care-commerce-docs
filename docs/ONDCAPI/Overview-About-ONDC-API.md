---
sidebar_label: 'Overview About ONDC API'
sidebar_position: 1
---

## What is ONDC?

Open Network for Digital Commerce (ONDC) is a market-led initiative aimed at enabling interoperability in Digital Commerce.

Based on the principles of Openness, it aims to enable unbundling Digital Commerce, democratising Digital Commerce and unlock value for all parts of Digital Commerce, as well as enable innovation to unlock the next chapter of Digital Commerce. — ONDC LinkedIn

## How does it work?

ONDC is not a website or an app but it's a network. An open network built on top of Beckn protocol that makes it possible for any buyer/seller/logistics partner/credit provider, etc. to communicate with each other in a standardized language.Which in turn makes the ecosystem open for anyone to participate.So any buyer can use a buyer app to search for any products/services and sellers can list their offerings and serve orders.

## Basic About the ONDC:

- ONDC is a network, not an application/website.
- In order to use the network, you have to register with ONDC Registry.
- ONDC uses Async APIs.
- ONDC communication happens from server to server.
- ONDC spec has APIs (/search, /init, /track) and Callback APIs (/on_search, /on_init, /on_track)
- The participants of the network have to implement the APIs on their backend.
- Buyer apps will call the APIs and will get results on Callback APIs.
- Seller apps will respond to the call received on APIs.
So once all the participants have implemented the APIs on their backends, the applications can communicate with each other as the servers have common APIs and a common schema for the payload.

## About the ONDC API :

ONDC uses async APIs, which buyer apps and seller apps have to integrate to use the network.The APIs starting with on_ are callback APIs/webhooks.

Example. The buyer app will call search API to search an offering. Once this call is sent buyer app will get a unique id in response. Now the on_search hook of the buyer app will be called by the network to provide the result of the search from the sellers.

### Discovery API
- search - on_search
### Order API
- select - on_select
- init - on_init
- confirm - on_confirm
### Fulfillment API
- status - on_status
- track - on_track
- cancel - on_cancel
- update - on_update
### Post-Fulfillment API
- rating - on_rating
- support - on_support
### Other API
- get_cancellation_reasons
- cancellation_reasons
- get_return_reasons
- return_reasons
- get_rating_categories
- rating_categories
- get_feedback_categories
- feedback_categories
- get_feedback_form
- feedback_form

## The flow of a transaction

![transaction_diagram](https://miro.medium.com/max/1400/1*5WYeLNyFtCzGnGU9pmR6tg.png)
