---
sidebar_position: 2
---

# ONDC API

**ONDC API** acting as a Gateway of buyer and seller.

## Topics
### -  About ONDC API 
### -  Key APIs and there functions




## About this API 

This document aims to showing what are the main APIs are used what are the function involved into that APIs.

## Key APIs and their functions

Ther are four APIs are present in the ONDC API.

- Discovery API 
- Order API
- Fullfilment API
- Post Fullfillment API

### Discovery API

Following two functionality purpose this API used.

  - Search - Following Eight functionality purpose this API used.
  - OnSearch - Sellers provide their catalog in response to buyer search
  
### Order API

Following six functionality purpose this API used.

  - Select - Buyer selects one or more catalog items
  - On Select - Send draft order object with quoted price for selected items
  - init - Initialize an order by providing billing and/or shipping details
  - On init - Send order object with payment details updated
  - Confirm - Initialize an order by providing billing and/or shipping details
  - On Confirm - Send active order object

  ### Fullfilment API

Following Eight functionality purpose this API used.

  - track - Buyer tracks fulfillment of an order
  - Ontrack - Seller provides tracking details for an order
  - Status - Buyer checks for status of order
  - Onstatus - Seller provides status information for order
  - Cancel - Buyer cancels an order
  - OnCancel - Seller provides response to cancellation request
  - Update - Buyer updates an order
  - OnUpdate - Seller provides response to order update

  ### Post Fullfillment API

  Following Four functionality purpose this API used.

  - Rating - Buyer rates for one or more rating categories
  - Onrating - Seller provides response to rating provided by buyer
  - Support - Buyer searches for Support Contact details
  - On Support - Seller provides Contact Support details

### Conclusion 
 ONDC API plays important role for buyer and seller. It handles both buyer and  seller app experience.