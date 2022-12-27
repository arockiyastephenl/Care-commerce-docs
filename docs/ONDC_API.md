---
sidebar_position: 2
---

# ONDC API

**ONDC API** acting as a Gateway of buyer and seller. The ONDC get the request of the buyer and send it to the seller . Get the seller response details forewarded to buyer.

## Topics
#### -  About ONDC API 
#### -  Key APIs and there functions




### About this API 

This document aims to showing what are the main APIs are used what are the function involved into that APIs.

### Key APIs and their functions

Ther are four APIs are present in the ONDC API.

- Discovery API 
- Order API
- Fullfilment API
- Post Fullfillment API

### Discovery API
User search the product and get the product details using this API .
Following two functionality is taken place.

  - Search - Buyer searches for products and services.
  - OnSearch - Sellers provide their catalog in response to buyer search
  
### Order API
In this API following things are taken place, product selected by buyer and selected product put it into the cart and finalize the product and initilize order for billing & shipping and confirm the order and place the order
Following six functionality purpose this API used.

  - Select - Buyer selects one or more catalog items
  - On Select - Send draft order object with quoted price for selected items
  - init - Initialize an order by providing billing and/or shipping details
  - On init - Send order object with payment details updated
  - Confirm - Confirm the order and place the order
  - On Confirm - Send active order object

### Fullfilment API
The buyer can track and seller should provide the tracking details for an order also buyer get the e status. If buyer needs to cancel they may cancel at anytime and seller accept the cancellation and provide response. Buyer may updates order seller get the update  details and give response to buyer.
Following eight functionality purpose this API used.

  - track - Buyer tracks fulfillment of an order
  - Ontrack - Seller provides tracking details for an order
  - Status - Buyer checks for status of order
  - Onstatus - Seller provides status information for order
  - Cancel - Buyer cancels an order
  - OnCancel - Seller provides response to cancellation request
  - Update - Buyer updates an order
  - OnUpdate - Seller provides response to order update

### Post Fullfillment API
In this API following things are take place Buyer can give rating of the product and seller provides response for it. If buyer needs any support the seller provides customer support details.
  Following Four functionality purpose this API used.

  - Rating - Buyer rates for one or more rating categories
  - Onrating - Seller provides response to rating provided by buyer
  - Support - Buyer searches for Support Contact details
  - On Support - Seller provides Contact Support details

### Conclusion 
 ONDC API plays important role for buyer and seller. It handles both buyer and  seller app experience.