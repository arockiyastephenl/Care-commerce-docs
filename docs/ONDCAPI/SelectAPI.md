---
sidebar_label: 'Select API'
sidebar_position: 2
---

## About the API : 

- The Select API allows the buyer to select the products listed by the various sellers in ONDC. It enables the user to add and also remove products from the shopping cart.

- In the search results, the user selects and adds the item(s) to the cart. In addition, the user should be able to change the quantity of items or remove them from the cart 

End user will choose the onsearch response list of products. Select api will help to add the products to the cart.

```bash
Method:               POST
Required Parameters:  Need item_details,quote_details,provider_details,fulfillments_details
Url: 			      /protocol/v1/select
Description: 		  On the buyer node, the user selects item(s) from the search results and adds them to the cart. The user should also be able to change the quantity of items or remove the items from the cart
```

## Flow Diagram of Select and on_select

![select](https://i.imgur.com/sbYoRit.png)



## Request Sample Data:

```json
 {
  "context": {
    "domain": "nic2004:52110",
    "country": "IND",
    "city": "std:080",
    "core_version": "1.0.0",
    "action": "select",
    "bap_id": "beta.mystore.in",
    "bap_uri": "https://beta.mystore.in/ondc/1.0/",
    "bpp_id": "buy.sellmore.app",
    "bpp_uri": "https://buy.sellmore.app/ondc/v1/148762/bpp",
    "transaction_id": "9b023f42-8532-4aa0-9f13-6cc909f1ae95",
    "message_id": "4ef58f69-6186-48cb-a2e2-02eeba51ee37",
    "timestamp": "2022-11-17T12:35:41.989Z",
    "ttl": "PT30S"
  },
  "message": {
    "order": {
      "provider": {
        "id": "111863",
        "locations": [{
          "id": 148273
        }]
      },
      "items": [{
        "id": "42602097",
        "quantity": {
          "count": 1
        }
      }],
      "fulfillments": [{
        "end": {
          "location": {
            "gps": "13.01659,77.68040",
            "address": {
              "area_code": "560016"
            }
          }
        }
      }]
    }
  }
}
```
## Response Sample Data:

```json
{
"context": {
"domain": "nic2004:52110",
"country": "IND",
"city": "std:044",
"action": "select",
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
