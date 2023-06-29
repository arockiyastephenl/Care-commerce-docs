---
sidebar_label: "Select"
sidebar_position: 6
---

## About the API :

The Select API allows the buyer to choose the products listed by the different sellers in ONDC. It allows the user to add products to the cart and also remove them from it.   

In the search results, the user selects the items and adds them to the shopping cart. In addition, the user should be able to change the number of items or remove them from the cart.

The end user selects the search response list of products. The selection of the API helps to add the products to the shopping cart.

```bash
Method:               POST
Required Parameters:  Need item_details,quote_details,provider_details,fulfillments_details
Url: 			      /protocol/v1/select
Description: 		  Select API helps the buyer to Add or remove the product from the Cart from the response received throught the OnSearch API
```

### Parameters

|                            Fields                            |                                                    Purpose                                                    |                                                                    Logic                                                                    |
|:------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------:|
|                   message.order.provider.id                  |                                               Id of the provider                                              |                                                   Primary key to get the provider details.                                                  |
|              message.order.provider.locations.id             |                                  Describes the location of a runtime object.                                  |                                                   Primary key to get the location details.                                                  |
|                    message.order.items.id                    | This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product. |                                          Primary key to get the product from the list of products.                                          |
|              message.order.items.quantity.count              |                                      Describes count or amount of an item                                     | This field is the count of an item end-user selected from the list of products. Logic is to reduce the product counts from the seller side. |
|        message.order.fulfillments[0].end.location.gps        |                                           Describes a gps coordinate                                          |                              Selected products are delivered by the logistics based on these location details.                              |
| message.order.fulfillments[0].end.location.address.area_code |                           Area code. This can be Pincode, ZIP code or any equivalent                          |  When the seller calls the logistic search API, the logistic provider needs to check with area_code and they provide service for this area. |


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
        "locations": [
          {
            "id": 148273
          }
        ]
      },
      "items": [
        {
          "id": "42602097",
          "quantity": {
            "count": 1
          }
        }
      ],
      "fulfillments": [
        {
          "end": {
            "location": {
              "gps": "13.01659,77.68040",
              "address": {
                "area_code": "560016"
              }
            }
          }
        }
      ]
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

Buyer selects the product throught the Buyer app using Select API,At the
time, Seller App - end receives the Order details. OnSelect API is a
call back API,Using the OnSearch API, you can get the Select API's
response The response will be the Quotation of the Selected products
using the Select API, this includes the Delivery option, Delivery
charges etc..

```bash
Method:               POST
Required Parameters:   Need provider_details,location_details,bpp_details,category_details,fulfillment_details
Url: 			      /protocol/v1/on_select
Description: 		  OnSelect API returns a quotation of the total products in the cart. Quotation includes the Price, Delivery options , Delivery Charges of the product.
```
### Parameters

|                            Fields                            |                                                    Purpose                                                    |                                                      Logic                                                      |
|:------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------:|
|               message.order.fulfillments[0].id               |                               Unique reference ID to the fulfillment of an order                              |                                 Primary key to get specific the fulfillment data                                |
|          message.order.fulfillments[0].@ondc/org/TAT         |           fulfillment turnaround time in ISO8601 durations format e.g. 'PT24H' indicates 24 hour TAT          |          We can check to turn around time with a logistic when they pickup the products from the seller         |
|       message.order.fulfillments[0].@ondc/org/category       |                                              Fulfillment Category                                             |                                              Additional information                                             |
|     message.order.fulfillments[0].@ondc/org/provider_name    |                                              Name Of the provider                                             |                                              Additional information                                             |
|        message.order.fulfillments[0].state.descriptor        |                               Describes the description of a real-world object.                               |                                              Additional information                                             |
|            message.order.fulfillments[0].tracking            |                               Indicates whether the fulfillment allows tracking                               |                 If allowed, the traction buyer app will show the live tracking option on the UI.                |
|             message.order.items[0].fulfillment_id            |                               Unique reference ID to the fulfillment of an order                              |                                 Primary key to get specific the fulfillment data                                |
|                   message.order.items[0].id                  | This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product. |                       Primary key for getting the specific product on a list of products.                       |
|                   message.order.provider.id                  |                                               Id of the provider                                              |                                  Primary key for getting the specific provider.                                 |
|      message.order.quote.breakup[0].@ondc/org/title_type     |                      Enum: [ item, delivery, packing, tax, convenience charge, discount ]                     | Breakup is an array. It has list of objects those this field is used for find what is the purpose of the object |
| message.order.quote.breakup[0].@ondc/org/item_quantity.count |                                      Count of an item quantity minimum: 0                                     |                               Seller has to minus the count in their catalog count                              |
|        message.order.quote.breakup[0].item.price.value       |                                  ISO 4217 alphabetic currency code e.g. 'INR'                                 |         Compare the other products or other provider products. Which provider sells the product cheaply?        |
|      message.order.quote.breakup[0].item.price.currency      |                           pattern: [+-]?([0-9]*[.])?[0-9]+ Describes a decimal value                          |              This field is used for identifying which country currency is used for the transaction.             |
|             message.order.quote.breakup[0].title             |                                            Mention the product name                                           |                                              Additional information                                             |
|              message.order.quote.breakup[0].ttl              |                                    Describes duration as per ISO8601 format                                   |                   This field is used for How log request will be alive between sever to client                  |
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
