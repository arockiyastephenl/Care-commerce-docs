---
sidebar_label: "Search API"
sidebar_position: 1
---

- The Search API allows user to search the full list of products based on the search query available in the Care Commerce.

- Use the Search API to get list of products available based on the Search parameter, Location, Mode of Payments etc..

Buyer Application can use Search API by Multiple ways

1. Search Product by City (Based on the City)
2. Search Product by Product Name ( Based on the Product Name)
3. Search Product by Catagory (Based on the Product Catagory)
4. Search Product by Fulfillment (Based on the specified drop location or Pickup Location)

```javascript
Method:	 	POST
Required Parameters:	 Need city name and payment details
Url: 			/protocol/v1/search
Description: 		On the buyer node, the user searches for a city using the city name. The user expects a list of cities with matching name
```

# API Request Sample Data:

```json
{
  "context": {
    "domain": "nic2004:52110",
    "country": "IND",
    "city": "std:080",
    "core_version": "1.0.0",
    "action": "search",
    "bap_id": "beta.mystore.in",
    "bap_uri": "https://beta.mystore.in/ondc/1.0/",
    "transaction_id": "5b2b3137-5922-4592-82d0-5734446f4994",
    "message_id": "7dd14992-ba43-42b8-ba02-a613e9e206fc",
    "timestamp": "2022-11-17T12:34:03.992Z",
    "ttl": "PT30S"
  },
  "message": {
    "intent": {
      "item": {
        "descriptor": {
          "name": "butter"
        }
      },
      "fulfillment": {
        "type": "Delivery",
        "end": {
          "location": {
            "gps": "13.01659,77.68040"
          }
        }
      },
      "payment": {
        "@ondc/org/buyer_app_finder_fee_type": "percent",
        "@ondc/org/buyer_app_finder_fee_amount": "3"
      }
    }
  }
}
```

ONDC uses async APIs, So Seller App is taking some time to process the request. Serach request response will be passed on the on_search API response it is also called as Callback API.

So the Search request response will be unique message id and +ve Ack

## API Response Sample Data:

```json
{
"context": {
"domain": "nic2004:52110",
"country": "IND",
"city": "std:044",
"action": "search",
"core_version": "1.0.0",
"bap_id": "carecommerce.in",
"bap_uri": "https://carecommerce.in/protocol/v1",
"transaction_id": "ea2766e0-357c-4add-88c8-f6c5f64a170c",
"message_id": "37fd9c02-0f8b-4a3e-8397-b9ea64258c57",
"timestamp": "2022-11-24T07:31:47.870Z",
"ttl": "PT30S"
},
"message": {
"ack": {
"status": "ACK"
}
}
}

```