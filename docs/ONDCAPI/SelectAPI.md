---
sidebar_label: 'Select API'
sidebar_position: 2
---
## About the API : 

The Select API allows the buyer to select the products listed by the various sellers in ONDC. It enables the user to add and also remove products from the shopping cart.

In the search results, the user selects and adds the item(s) to the cart. In addition, the user should be able to change the quantity of items or remove them from the cart 



End user will choose the onsearch response list of products. Select api will help to add the products to the cart.

## API Overview Diagram:
![select](https://i.imgur.com/JWxSoLN.png)

```bash
Method:               POST
Required Parameters:  Need item_details,quote_details,provider_details,fulfillments_details
Url: 			      /protocol/v1/select
Description: 		  Select API helps the buyer to Add or remove the product from the Cart from the response received throught the OnSearch API
```


| Parameter                  | Data type | Description                                                                                                                                 |
| -------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| message.order.fulfillments | Array     | Fulfillment field explain the delivery or pickup location of the customer. Eg: it contains the GPS coordinates long and lat 13.0827,80.2707 |
| message.order.item         | Array     | Item field has the list of customer selected product details from the list of products of a search response. Eg: It explains the cart       |
| message.order.provider     | Object    | Provider field has the details about select products that were selling from whom. Ex: saravana store                                        |
## Flow Diagram of Select and On_Select

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
## On_Select API:

## About the API : 

Buyer selects the product throught the Buyer app using Select API,At the time, Seller App - end receives the Order details. 
OnSelect API is a call back API,Using the OnSearch API, you can get the Select API's response
The response will be the Quotation of the Selected products using the Select API, this includes the Delivery option, Delivery charges etc..


```bash
Method:               POST
Required Parameters:   Need provider_details,location_details,bpp_details,category_details,fulfillment_details
Url: 			      /protocol/v1/on_select
Description: 		  OnSelect API returns a quotation of the total products in the cart. Quotation includes the Price, Delivery options , Delivery Charges of the product.
```

## Request Sample Data

```json
messageId=37fd9c02-0f8b-4a3e-8397-b9ea64258c57

```
## Response Sample Data

```json
 {
  "context": {
    "action": "on_select",
    "bap_id": "carecommerce.in",
    "bap_uri": "https://carecommerce.in/ondc/1.0/",
    "bpp_id": "carecommerce.in",
    "bpp_uri": "https://carecommerce.in/ondc/v1/148762/bpp/",
    "city": "std:080",
    "core_version": "1.0.0",
    "country": "IND",
    "domain": "nic2004:52110",
    "message_id": "4ef58f69-6186-48cb-a2e2-02eeba51ee37",
    "timestamp": "2022-11-17T12:35:43.037Z",
    "transaction_id": "9b023f42-8532-4aa0-9f13-6cc909f1ae95",
    "ttl": "PT30S"
  },
  "message": {
    "order": {
      "fulfillments": [
        {
          "@ondc/org/TAT": "P4D",
          "@ondc/org/category": "Immediate Delivery",
          "@ondc/org/provider_name": "careaommerce",
          "id": 1,
          "state": {
            "descriptor": {
              "name": "Serviceable"
            }
          },
          "tracking": true
        }
      ],
      "items": [
        {
          "fulfillment_id": "1",
          "id": "42602097"
        }
      ],
      "provider": {
        "id": "111863"
      },
      "quote": {
        "breakup": [
          {
            "@ondc/org/item_id": "42602097",
            "@ondc/org/item_quantity": {
              "count": 1
            },
            "@ondc/org/title_type": "item",
            "item": {
              "price": {
                "currency": "INR",
                "value": 99
              },
              "quantity": {
                "available": {
                  "count": "100"
                },
                "maximum": {
                  "count": "100"
                }
              }
            },
            "price": {
              "currency": "INR",
              "value": 99
            },
            "title": "Butter milk Amul"
          },
          {
            "@ondc/org/item_id": "",
            "@ondc/org/title_type": "delivery",
            "price": {
              "currency": "INR",
              "value": 23
            },
            "title": "Delivery charges"
          },
          {
            "@ondc/org/item_id": "",
            "@ondc/org/title_type": "packing",
            "price": {
              "currency": "INR",
              "value": 25
            },
            "title": "Packing charges"
          }
        ],
        "price": {
          "currency": "INR",
          "value": "147.0"
        },
        "ttl": "P1D"
      }
    }
  }
}
```
