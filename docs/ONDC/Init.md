---
sidebar_label: "Init"
sidebar_position: 7
---

## About API :

The OnSelect API helps to get the offer of the products in the shopping cart. Once the shopper agrees to purchase the products, the order can proceed to checkout using this init API in the shopper application.     

    Using the init API, the buyer can confirm the order immediately. Using the Init API, the seller places the order at the price specified by the buyer for the quantity specified by the buyer. The Init API sends the order initialization request and checks whether the seller approves the seller's acceptance or rejection of the order.



```json
Method:               POST
Required Parameters:  Need item_details,quote_details,provider_details,fulfillments_details
Url: 			      /protocol/v1/init
Description: 		  init API helps the buyer to place the Order in the Cart of the Buyer Application.
. The user should also be able to change the quantity of items or remove the items from the cart
```
### Parameters


| Fields                                              | Purpose                                                                                                                                                                | Logic                                                                                                                                         |
|-----------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| message.order.provider.id                           | Id of the provider                                                                                                                                                     | Primary key for getting the specific provider.                                                                                                |
| message.order.provider.locations.id                 | Location/properties/id                                                                                                                                                 | Identify the location of product origin in case of any return                                                                                 |
| message.order.items.id                              | This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.                                                          | Primary key to get the product from the list of products.                                                                                     |
| message.order.items.quantity.count                  | Describes count or amount of an item                                                                                                                                   | This field is the count of an item end-user selected from the list of products. Logic is to reduce the product counts from the seller's side. |
| message.order.items.fulfillment_id                  | Unique reference ID to the fulfillment of an order                                                                                                                     | Primary key to get specific the fulfillment data                                                                                              |
| message.order.billing.name                          | Personal details of the customer needed for billing.                                                                                                                   | Identify who is paying for the amount. This will help multiple users use the same account.                                                    |
| message.order.billing.email                         | Personal details of the customer needed for billing.                                                                                                                   | Additional information                                                                                                                        |
| message.order.billing.phone                         | Personal details of the customer needed for billing.                                                                                                                   | This field help to communicate with customer if the payment related queries                                                                   |
| message.order.billing.address.name                  | Name of address if applicable. Example, shop name                                                                                                                      | Additional information                                                                                                                        |
| message.order.billing.address.city                  | City name                                                                                                                                                              | Additional information                                                                                                                        |
| message.order.billing.address.state                 | State name                                                                                                                                                             | Additional information                                                                                                                        |
| message.order.billing.address.country               | Country name                                                                                                                                                           | Additional information                                                                                                                        |
| message.order.billing.address.area_code             | Area code. This can be Pincode, ZIP code or any equivalent                                                                                                             | Additional information                                                                                                                        |
| message.order.fulfillments[0].type                  | This describes the type of fulfillment ("Pickup" - Buyer picks up from store by themselves or through their logistics provider; "Delivery" - seller delivers to buyer) | Logistic provider API will associate with this field help to pick up the products                                                             |
| message.order.fulfillments[0].tracking              | Indicates whether the fulfillment allows tracking                                                                                                                      | If allowed, the traction buyer app will show the live tracking option is shown on the UI.                                                     |
| message.order.fulfillments[0].end.location.gps      | Describes a gps coordinate                                                                                                                                             | Selected products are delivered by the logistics based on these location details.                                                             |
| message.order.fulfillments[0].end.location.address  | Describes an address                                                                                                                                                   | This field help with logistic to receive the products to the end user                                                                         |
| message.order.fulfillments[0].contact               | Describes an contact                                                                                                                                                   | Additional information                                                                                                                        |
| message.order.fulfillments[0].id                    | Unique reference ID to the fulfillment of an order                                                                                                                     | Primary key to get specific the fulfillment data                                                                                              |
| message.order.payment.collected_by                  | Describes who collect the payment Enum: [ BAP, BPP ]                                                                                                                   | This will confirm who will collect the payment either buyer or seller. Based on that Payment flow will be executed.                           |
| message.order.payment.@ondc/org/collected_by_status | Payment received status Enum: [ Assert, Agree, Disagree, Terminate ]                                                                                                   | This field will be used for payment receiving status from who will accept the payment. Seller app will identify the payment status.           |
| message.order.type                                  | Describes what kind of order Enum: [ ON-ORDER, PRE-FULFILLMENT, ON-FULFILLMENT, POST-FULFILLMENT ]                                                                     | Based on this who will pick up the products either buyer or seller or logistic                                                                |

## Request Sample Data:

```json
{
  "context": {
    "domain": "nic2004:52110",
    "country": "IND",
    "city": "std:080",
    "core_version": "1.0.0",
    "action": "init",
    "bap_id": "carecommerce.in",
    "bap_uri": "https://carecommerce.in/ondc/1.0/",
    "bpp_id": "carecommerce.in",
    "bpp_uri": "https://carecommerce.in/ondc/v1/148762/bpp",
    "transaction_id": "9b023f42-8532-4aa0-9f13-6cc909f1ae95",
    "message_id": "822480a8-797d-4950-8eae-291e4b7b0341",
    "timestamp": "2022-11-17T12:36:04.230Z",
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
          },
          "fulfillment_id": "1"
        }
      ],
      "billing": {
        "name": "Test",
        "address": {
          "name": "560016 Bengaluru Bengaluru Urban",
          "city": "Bengaluru",
          "state": "Karnataka",
          "country": "IN",
          "area_code": "560016"
        },
        "email": "test@gmail.com",
        "phone": "+911234567890"
      },
      "fulfillments": [
        {
          "type": "Delivery",
          "tracking": false,
          "end": {
            "location": {
              "gps": "13.01659,77.68040",
              "address": {
                "name": "560016 Bengaluru Bengaluru Urban",
                "city": "Bengaluru",
                "state": "Karnataka",
                "country": "IN",
                "area_code": "560016"
              }
            },
            "contact": {
              "phone": "+911234567890",
              "email": "test@gmail.com"
            }
          },
          "id": "1"
        }
      ],
      "payment": {
        "collected_by": "BAP",
        "@ondc/org/collected_by_status": "Assert",
        "type": "ON-ORDER"
      }
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
        "action": "init",
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
```

## On_Init API:

OnInit API is the response for the Init API, which has the status of the
Seller's Approval for the Order.

Once the Init API is invoked for the Order Creation as a Send request ,
OnInit API sends the response of the seller's approval for acceptance or
rejection of the order. An order shall be automatically rejected if the
seller does not act within the predefined time frame for approval by the
seller or the same happen if the seller manually rejects the order
request.

If the seller accepts the buyer's Order request from Init API,Buy may
have a status of Order acceptance.

No Response by Seller - Order Auto Rejected Seller accepts Order - Order
Acceptance Status Seller rejects Order - Order Rejection Status

```bash
Method:               POST
Required Parameters:   Need items details,billing details,fulfillments details,quote details,Payment details
Url: 			      /protocol/v1/on_init
Description: 		  The seller node receives a search query and based on the request, it identifies matching items from the various seller catalogs on the platform. It consolidates all matching results and returns a list of items
```

### Parameters


|                                      Field                                      |                           Description                           |                                           Logic                                          |
|:-------------------------------------------------------------------------------:|:---------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|
| order.billing.address.area_code                                                 | The area code of the billing address                            | Need to check logistic service availability                                              |
| order.billing.address.city                                                      | The city of the billing address                                 | Additional information                                                                   |
| order.billing.address.country                                                   | The country of the billing address                              | Additional information                                                                   |
| order.billing.address.name                                                      | The name of the billing address                                 | Additional information                                                                   |
| order.billing.address.state                                                     | The state of the billing address                                | Additional information                                                                   |
| order.billing.email                                                             | The email of the person being billed                            | Additional information                                                                   |
| order.billing.name                                                              | The name of the person being billed                             | Additional information                                                                   |
| order.billing.phone                                                             | The phone number of the person being billed                     | Additional information                                                                   |
| order.fulfillments                                                              | An array containing the details of the fulfillment(s)           | N/A                                                                                      |
| order.fulfillments[].end.contact.email                                          | The email of the person who will receive the fulfillment        | N/A                                                                                      |
| order.fulfillments[].end.contact.phone                                          | The phone number of the person who will receive the fulfillment | N/A                                                                                      |
| order.fulfillments[].end.location.address.area_code                             | The area code of the delivery address                           | N/A                                                                                      |
| order.fulfillments[].end.location.address.city                                  | The city of the delivery address                                | N/A                                                                                      |
| order.fulfillments[].end.location.address.country                               | The country of the delivery address                             | N/A                                                                                      |
| order.fulfillments[].end.location.address.name                                  | The name of the delivery address                                | N/A                                                                                      |
| order.fulfillments[].end.location.address.state                                 | The state of the delivery address                               | N/A                                                                                      |
| order.fulfillments[].end.location.gps                                           | The GPS coordinates of the delivery location                    | N/A                                                                                      |
| order.fulfillments[].id                                                         | The unique identifier of the fulfillment                        | N/A                                                                                      |
| order.fulfillments[].tracking                                                   | Whether or not the fulfillment is being tracked                 | N/A                                                                                      |
| order.fulfillments[].type                                                       | The type of fulfillment                                         | N/A                                                                                      |
| order.items                                                                     | An array containing the details of the items in the order       | N/A                                                                                      |
| order.items[].fulfillment_id                                                    | The unique identifier of the fulfillment for the item           | Use this id to what kind of delivery methods are used for the particular item            |
| order.items[].id                                                                | The unique identifier of the item in the order                  | Primary key to fetch the specific item                                                   |
| order.items[].quantity.count                                                    | The quantity of the item in the order                           | N/A                                                                                      |
| order.payment                                                                   | An object containing the details of the payment for the order   | This field contains the information about the Payment                                    |
| order.payment.@ondc/org/buyer_app_finder_fee_amount                             | The amount of the buyer app finder fee                          | Both seller and buyer agree to the finder fee                                            |
| order.payment.@ondc/org/buyer_app_finder_fee_type                               | The type of the buyer app finder fee                            | Possible values include "fixed" and "percentage".                                        |
| order.payment.@ondc/org/return_window                                           | The return window for the order                                 | N/A                                                                                      |
| message.order.payment.@ondc/org/settlement_details                              | The details of the settlement of the order                      | N/A                                                                                      |
| message.order.payment.@ondc/org/settlement_details[].settlement_type            | The type of settlement (NEFT, RTGS, etc.)                       | N/A                                                                                      |
| message.order.payment.@ondc/org/settlement_details[].settlement_phase           | The phase of settlement (sale-amount, tax, etc.)                | N/A                                                                                      |
| message.order.payment.@ondc/org/settlement_details[].settlement_counterparty    | The counterparty for settlement (seller-app, marketplace, etc.) | N/A                                                                                      |
| message.order.payment.@ondc/org/settlement_details[].settlement_bank_account_no | The bank account number for settlement                          | N/A                                                                                      |
| message.order.payment.@ondc/org/settlement_details[].settlement_ifsc_code       | The IFSC code of the bank for settlement                        | This field specifies the ifsc code of the bank.                                          |
| message.order.payment.@ondc/org/settlement_details[].bank_name                  | The name of the bank for settlement                             | This field specifies the bank name.                                                      |
| message.order.payment.@ondc/org/settlement_details[].branch_name                | The name of the bank branch for settlement                      | This field specifies the branch name.                                                    |
| message.order.payment.@ondc/org/settlement_details[].beneficiary_name           | The name of the beneficiary for settlement                      | This field specifies the beneficiary name.                                               |
| message.order.payment.@ondc/org/settlement_details[].upi_address                | The UPI address for settlement                                  | Who receive the Payment of the order Ethier Buyer app or seller app or Logistic provider |
| message.order.payment.collected_by                                              | The entity that collected the payment (BAP or marketplace)      | This field specifies who will collect the order payment.                                 |
| message.order.quote.price.currency                                              | The currency of the price of the order                          | N/A                                                                                      |
| message.order.quote.price.value                                                 | The total price of the order                                    | N/A                                                                                      |


## Request Sample Data

```json
messageId=37fd9c02-0f8b-4a3e-8397-b9ea64258c57

```

## Response Sample Data

```json
{
  "context": {
    "action": "on_init",
    "bap_id": "beta.mystore.in",
    "bap_uri": "https://beta.mystore.in/ondc/1.0/",
    "bpp_id": "buy.sellmore.app",
    "bpp_uri": "https://buy.sellmore.app/ondc/v1/148762/bpp/",
    "city": "std:080",
    "core_version": "1.0.0",
    "country": "IND",
    "domain": "nic2004:52110",
    "message_id": "822480a8-797d-4950-8eae-291e4b7b0341",
    "timestamp": "2022-11-17T12:36:05.198Z",
    "transaction_id": "9b023f42-8532-4aa0-9f13-6cc909f1ae95",
    "ttl": "PT30S"
  },
  "message": {
    "order": {
      "billing": {
        "address": {
          "area_code": "560016",
          "city": "Bengaluru",
          "country": "IN",
          "name": "560016 Bengaluru Bengaluru Urban",
          "state": "Karnataka"
        },
        "email": "test@gmail.com",
        "name": "Test",
        "phone": "+911234567890"
      },
      "fulfillments": [
        {
          "end": {
            "contact": {
              "email": "test@gmail.com",
              "phone": "+911234567890"
            },
            "location": {
              "address": {
                "area_code": "560016",
                "city": "Bengaluru",
                "country": "IN",
                "name": "560016 Bengaluru Bengaluru Urban",
                "state": "Karnataka"
              },
              "gps": "13.01659,77.68040"
            }
          },
          "id": "1",
          "tracking": false,
          "type": "Delivery"
        }
      ],
      "items": [
        {
          "fulfillment_id": "1",
          "id": "42602097",
          "quantity": {
            "count": 1
          }
        }
      ],
      "payment": {
        "@ondc/org/buyer_app_finder_fee_amount": "3",
        "@ondc/org/buyer_app_finder_fee_type": "fixed",
        "@ondc/org/return_window": "0",
        "@ondc/org/settlement_basis": "Collection",
        "@ondc/org/settlement_details": [
          {
            "bank_name": "",
            "beneficiary_name": "",
            "branch_name": "",
            "settlement_bank_account_no": "123121311",
            "settlement_counterparty": "seller-app",
            "settlement_ifsc_code": "ICICI0001",
            "settlement_phase": "sale-amount",
            "settlement_type": "neft",
            "upi_address": ""
          }
        ],
        "@ondc/org/settlement_window": "P2D",
        "@ondc/org/withholding_amount": "0.00",
        "collected_by": "BAP",
        "type": "ON-ORDER"
      },
      "provider": {
        "id": "111863"
      },
      "provider_location": {
        "id": null
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
