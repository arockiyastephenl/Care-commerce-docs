---
sidebar_label: "Confirm"
sidebar_position: 8
---


## About the API:

Confirm API helps to confirm the order and to proceed the payment using
preferred methods of payment facilitated by the Buyer app. Buyer
receives the Updated quote and policies from the seller for
confirmation. The Confirm API request includes the Payment mode the
buyer wish to proceed with the order. The Payment mode may be Prepaid
Payment or the Cash on Delivey (COD) Prepaid Payment : Buyer App can
collect Prepaid Orders payment with the permission of Seller App
Postpaid/ Cash on Delivery Payment : Seller app can collect Cash on
delivery payment with the permission of Buyer app



```bash
Method:               POST
Required Parameters:  Need item_details,quote_details,provider_details,fulfillments_details
Url: 			      /protocol/v1/init
Description: 		  On the buyer node, the user selects item(s) from the search results and adds them to the cart. The user should also be able to change the quantity of items or remove the items from the cart
```
### Parameters

|                        Field                       |                                        Purpose                                        |                                                                                                                                                                                                                                                                                                                                                 Logic                                                                                                                                                                                                                                                                                                                                                |
|:--------------------------------------------------:|:-------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| message.order.id                                   | Unique identifier for the order                                                       | Used to track and identify the order                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| message.order.state                                | The current state of the order                                                        | Used to track the progress of the order                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| message.order.billing.address                      | The billing address for the order                                                     | Used for billing purposes and to ensure the correct address is used for delivery                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| message.order.billing.created_at                   | The date and time the billing information was created                                 | Used to track when the billing information was added/updated                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| message.order.billing.email                        | The email address associated with the billing information                             | Used for billing purposes and communication with the customer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| message.order.billing.name                         | The name associated with the billing information                                      | Used for billing purposes and to ensure the correct person is billed                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| message.order.billing.phone                        | The phone number associated with the billing information                              | Used for billing purposes and communication with the customer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| message.order.billing.updated_at                   | The date and time the billing information was updated                                 | Used to track when the billing information was updated                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| message.order.fulfillments                         | Information about the fulfillment(s) for the order                                    | Used to track the delivery of the order                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| message.order.fulfillments.end                     | The delivery endpoint details for the fulfillment                                     | Used to identify where the order should be delivered                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| message.order.fulfillments.id                      | Unique identifier for the fulfillment                                                 | Used to track and identify the fulfillment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| message.order.fulfillments.tracking                | Boolean value indicating whether the order is being tracked                           | Used to indicate whether the order is being tracked                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| message.order.fulfillments.type                    | The type of fulfillment (e.g. Delivery)                                               | Used to identify the type of fulfillment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| message.order.fulfillments.provider_id             | Unique identifier for the fulfillment provider                                        | Used to identify the provider responsible for the fulfillment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| message.order.items                                | Information about the item(s) in the order                                            | Used to track the item(s) in the order                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| message.order.items.fulfillment_id                 | The unique identifier for the fulfillment associated with the item                    | Used to track which fulfillment is associated with which item                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| message.order.items.id                             | Unique identifier for the item in the order                                           | Used to track and identify the item in the order                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| message.order.items.quantity.count                 | The quantity of the item in the order                                                 | Used to track the quantity of the item in the order                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| message.order.payment                              | Information about the payment for the order                                           | Used to track the payment for the order                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| message.order.payment.type                         | The type of payment (e.g. POST-FULFILLMENT)                                           | Used to identify the type of payment for the order                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| message.order.payment.params                       | Additional parameters associated with the payment                                     | Used to provide additional information about the payment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| message.order.payment.status                       | The current status of the payment                                                     | Used to track the progress of the payment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| message.order.payment.collected_by                 | The entity responsible for collecting the payment                                     | Used to identify who is responsible for collecting the payment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| message.order.payment.@ondc/org/withholding_amount | The withholding amount for the payment                                                | Used to track any withholding amounts associated with the payment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| message.order.payment.@ondc/org/return_window      | The return window for the payment                                                     | Used to track the time frame during which the payment can be returned                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| order.billing.address.area_code                    | Stores the area code of the billing address.                                          | Additional information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| order.billing.address.city                         | Stores the city of the billing address.                                               | Additional information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| order.billing.address.country                      | Stores the country of the billing address.                                            | Additional information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| order.billing.address.door                         | Stores the door number of the billing address.                                        | Additional information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| order.billing.address.locality                     | Stores the locality of the billing address.                                           | Additional information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| order.billing.address.name                         | Stores the name associated with the billing address.                                  | Additional information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| order.billing.address.state                        | Stores the state of the billing address.                                              | Additional information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| order.billing.created_at                           | Stores the timestamp when the billing address was created.                            | ISO 8601 formatted string data type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| order.billing.email                                | Stores the email address associated with the billing address.                         | Additional information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| order.billing.name                                 | Stores the name associated with the billing address.                                  | Additional information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| order.billing.phone                                | Stores the phone number associated with the billing address.                          | Additional information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| order.billing.updated_at                           | Stores the timestamp when the billing address was last updated.                       | ISO 8601 formatted string data type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| order.fulfillments                                 | An array containing the details of the fulfillment(s) of the order.                   | Array data type. It contains the fulfillment details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| order.fulfillments.end.contact.email               | Stores the email address associated with the person receiving the fulfillment.        | Additional information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| order.fulfillments.end.contact.phone               | Stores the phone number associated with the person receiving the fulfillment.         | Additional information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| order.fulfillments.end.location.address.area_code  | Stores the area code of the location where the fulfillment will be delivered.         | Additional information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| order.fulfillments.end.location.address.city       | Stores the city of the location where the fulfillment will be delivered.              | Additional information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| order.fulfillments.end.location.address.country    | Stores the country of the location where the fulfillment will be delivered.           | Additional information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| order.fulfillments.end.location.address.door       | Stores the door number of the location where the fulfillment will be delivered.       | Additional information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| order.fulfillments.end.location.address.locality   | Stores the locality of the location where the fulfillment will be delivered.          | Additional information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| order.fulfillments.end.location.address.name       | Stores the name associated with the location where the fulfillment will be delivered. | Additional information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| message.order.items                                | Contains the list of items ordered in the order                                       | Each item object contains the following fields: fulfillment_id: ID of the fulfillment associated with the item id: ID of the item quantity: Quantity of the item ordered                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| message.order.payment                              | Contains information about the payment for the order                                  | The payment object contains the following fields: type: Type of payment params: Payment parameters, such as amount and currency status: Payment statuscollected_by: Party that collects the payment@ondc/org/withholding_amount: Amount withheld from the payment @ondc/org/return_window: Return window for the payment@ondc/org/buyer_app_finder_fee_type: Type of fee charged by the buyer app@ondc/org/buyer_app_finder_fee_amount: Amount of fee charged by the buyer app@ondc/org/settlement_basis: Basis for calculating the settlement@ondc/org/settlement_window: Window for settling the payment @ondc/org/settlement_details: Details of the settlement, such as bank account information |
| message.order.created_at                           | Timestamp indicating when the order was created                                       | This is in the ISO 8601 format                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| message.order.updated_at                           | Timestamp indicating when the order was last updated                                  | This is in the ISO 8601 format                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| message.order.provider                             | Contains information about the provider fulfilling the order                          | The provider object contains the following fields:id: ID of the provider locations: List of locations associated with the provider                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| message.order.provider.id                          | ID of the provider fulfilling the order                                               | Primary key to fetch the specific provider                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| message.order.provider.locations                   | List of locations associated with the provider                                        | Each location object contains the following field: id: ID of the location                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| message.order.provider.locations.id                | ID of a location associated with the provider                                         | This is a string                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

## Request Sample Data:

```json
{
  "context": {
    "domain": "nic2004:52110",
    "action": "confirm",
    "country": "IND",
    "city": "std:080",
    "core_version": "1.0.0",
    "bpp_id": "buy.sellmore.app",
    "bpp_uri": "https://buy.sellmore.app/ondc/v1/148762/bpp/",
    "bap_id": "ondc.meesho.org",
    "bap_uri": "https://ondc.meesho.org/ondc/v1/155210/",
    "transaction_id": "d4a9a832-1582-4575-97b8-16848acd2c7d",
    "message_id": "dfde2d56-4d78-456a-8fc3-30e4bd978374",
    "timestamp": "2022-11-05T06:28:56.302Z",
    "ttl": "PT30S"
  },
  "message": {
    "order": {
      "id": "a107f2b4-96cf-4d8c-a1de-c6c39b6064d8",
      "state": "Created",
      "billing": {
        "address": {
          "area_code": "560016",
          "city": "Bangalore",
          "country": "IN",
          "door": "560016 Bangalore",
          "locality": "560016 Bangalore",
          "name": "560016 Bangalore",
          "state": "KARNATAKA"
        },
        "created_at": "2022-11-05T11:58:56",
        "email": "test@gmail.com",
        "name": "test",
        "phone": "1234567890",
        "updated_at": "2022-11-05T11:58:56"
      },
      "fulfillments": [
        {
          "end": {
            "contact": {
              "email": "test@gmail.com",
              "phone": "1234567890"
            },
            "location": {
              "address": {
                "area_code": "560016",
                "city": "Bangalore",
                "country": "IN",
                "door": "",
                "locality": "",
                "name": "560016 Bangalore",
                "state": "KARNATAKA"
              },
              "gps": "13.0165929,77.68039689999999"
            },
            "person": {
              "name": "kumar"
            }
          },
          "id": "1",
          "tracking": false,
          "type": "Delivery",
          "provider_id": "111863"
        }
      ],
      "quote": {
        "breakup": [
          {
            "title": "Chilly Spices",
            "price": {
              "currency": "INR",
              "value": 198
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
            "@ondc/org/item_quantity": {
              "count": 2
            },
            "@ondc/org/item_id": "42601533"
          },
          {
            "@ondc/org/item_id": "",
            "price": {
              "currency": "INR",
              "value": 23
            },
            "@ondc/org/title_type": "delivery",
            "title": "Delivery charges"
          },
          {
            "@ondc/org/item_id": "",
            "price": {
              "currency": "INR",
              "value": 25
            },
            "@ondc/org/title_type": "packing",
            "title": "Packing charges"
          }
        ],
        "price": {
          "currency": "INR",
          "value": "246.0"
        },
        "ttl": "P1D"
      },
      "items": [
        {
          "fulfillment_id": "1",
          "id": "42601533",
          "quantity": {
            "count": 2
          }
        }
      ],
      "payment": {
        "type": "POST-FULFILLMENT",
        "params": {
          "amount": "246.0",
          "currency": "INR"
        },
        "status": "NOT-PAID",
        "collected_by": "BPP",
        "@ondc/org/withholding_amount": "0.00",
        "@ondc/org/return_window": "0",
        "@ondc/org/buyer_app_finder_fee_type": "percent",
        "@ondc/org/buyer_app_finder_fee_amount": "3",
        "@ondc/org/settlement_basis": "P2D",
        "@ondc/org/settlement_window": "P2D",
        "@ondc/org/settlement_details": [
          {
            "settlement_ifsc_code": "",
            "beneficiary_name": "",
            "upi_address": "",
            "settlement_bank_account_no": "",
            "bank_name": "",
            "settlement_type": "",
            "branch_name": "",
            "settlement_counterparty": "seller-app",
            "settlement_phase": "sale-amount"
          }
        ]
      },
      "created_at": "2022-11-05T06:28:56.279Z",
      "updated_at": "2022-11-05T06:28:56.279Z",
      "provider": {
        "id": "111863",
        "locations": [
          {
            "id": "148273"
          }
        ]
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
    "action": "confirm",
    "core_version": "1.0.0",
    "bap_id": "buyer-app.ondc.org",
    "bap_uri": "https://buyer-app.ondc.org/protocol/v1",
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

## On_Confirm API:

## About the API:

On_confirm API is the callback API. This API validates status of the
Payment and deliver or pickup location of the order and also order id .

OnConfirm API is the response for the Confirm API, which has the status
of the Seller's Approval for the Order. Confirm API sends the Order
Confirmation from the user, validates the proof of payment. OnConfirm
returns a Confirmed Order ID as a response. Buyer can use the Order ID
to know the Order details, Status of the Payment.

```bash
Method:               POST
Required Parameters:   Need items details ,state=active,billing details,fulfillments details,quote,payment
Url: 			      /protocol/v1/on_confirm
Description: 		  The seller node receives the confirmation from the user, and validates the proof or promise of payment. The seller returns a confirmed order ID and the confirmed details of the fulfilment immediately.
```

### Parameters

|                           Field                           |                                   Purpose                                  |                                                                                      Logic                                                                                      |
|:---------------------------------------------------------:|:--------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| order.billing.name                                        | Name of the person who placed the order                                    | Additional information                                                                                                                                                          |
| order.billing.created_at                                  | Date and time the order was created                                        | Date and time fields to understand when the record is created or updated.                                                                                                       |
| order.billing.updated_at                                  | Date and time the order was last updated                                   | Date and time fields to understand when the record is created or updated.                                                                                                       |
| order.billing.phone                                       | Phone number of the person who placed the order                            | Additional information                                                                                                                                                          |
| order.billing.address                                     | Address information of the person who placed the order                     | JSON object with keys: city, door, name, locality, country, area_code, and state                                                                                                |
| order.billing.email                                       | Email address of the person who placed the order                           | Additional information                                                                                                                                                          |
| order.items                                               | List of items ordered                                                      | JSON array of objects with keys: fulfillment_id, id, and quantity                                                                                                               |
| order.provider                                            | Information about the provider                                             | JSON object with keys: id and locations                                                                                                                                         |
| order.id                                                  | Unique identifier for the order                                            | Primary key to fetch the specific order                                                                                                                                         |
| order.state                                               | Current state of the order                                                 | This field represents the order Status. Logistic API will use this field to status of and order                                                                                 |
| order.quote                                               | Pricing information for the order                                          | JSON object with keys: price and ttl                                                                                                                                            |
| order.payment                                             | Payment information for the order                                          | JSON object with keys: status, collected_by, params, type, and additional keys prefixed with "@ondc/org/"                                                                       |
| payment.status                                            | Indicates the status of the payment                                        | Possible values include "NOT-PAID", "PAID", "PENDING", "REFUNDED", "FAILED", etc.                                                                                               |
| payment.collected_by                                      | Indicates who collected the payment                                        | Possible values include "BPP" (Buyer Protection Program), "COD" (Cash on Delivery), "WALLET", etc.                                                                              |
| payment.@ondc/org/return_window                           | Indicates the number of days within which the item can be returned         | The value is in string format.                                                                                                                                                  |
| payment.@ondc/org/withholding_amount                      | Indicates the amount withheld by the platform for taxes or other charges   | The value is in string format and includes two decimal places.                                                                                                                  |
| payment.@ondc/org/settlement_details                      | Provides details of the settlement process                                 | Includes settlement bank account number, IFSC code, bank name, beneficiary name, UPI address, settlement type, branch name, counterparty (seller-app), and phase (sale-amount). |
| payment.@ondc/org/settlement_window                       | Indicates the number of days within which the settlement will be processed | The value is in string format and includes "P" to indicate a period, followed by the number of days.                                                                            |
| payment.@ondc/org/settlement_basis                        | Indicates the basis of the settlement                                      | Possible values include "Collection" and "Disbursement".                                                                                                                        |
| payment.params                                            | Provides details of the payment                                            | Includes the currency and amount of the payment.                                                                                                                                |
| payment.@ondc/org/buyer_app_finder_fee_amount             | Indicates the finder fee charged by the platform to the buyer              | The value is in string format and includes two decimal places.                                                                                                                  |
| payment.type                                              | Indicates the type of payment                                              | Possible values include "PRE-FULFILLMENT", "POST-FULFILLMENT", "REFUND", etc.                                                                                                   |
| payment.@ondc/org/buyer_app_finder_fee_type               | Indicates the type of finder fee charged by the platform to the buyer      | Possible values include "fixed" and "percentage".                                                                                                                               |
| order.items[].fulfillment_id                              | ID of the fulfillment service used for the order                           | Primary key to fetch a specific fulfillment                                                                                                                                     |
| order.items[].id                                          | ID of the ordered item                                                     | Primary key to fetch a specific order item                                                                                                                                      |
| order.items[].quantity.count                              | Quantity of the ordered item                                               | This field is used to reduce the inventory list from the seller side                                                                                                            |
| order.provider.id                                         | ID of the provider from whom the order was placed                          | Primary key to fetch the specific provider                                                                                                                                      |
| order.provider.locations[].id                             | ID of the location of the provider                                         | Primary key fetch the specific location                                                                                                                                         |
| order.id                                                  | ID of the order                                                            | Primary key to fetch the specific order                                                                                                                                         |
| order.state                                               | Current state of the order                                                 | Represents the origin of the item                                                                                                                                               |
| order.quote.price.currency                                | Currency used for the order price                                          | Buyer and seller app acceptance of the currency                                                                                                                                 |
| order.quote.price.value                                   | Total price of the order                                                   | Represents the price of an order                                                                                                                                                |
| order.quote.price.breakup[].title                         | Title of the price breakup item                                            | It will show backup price of an item                                                                                                                                            |
| order.quote.price.breakup[].price.currency                | Currency of the price breakup item                                         | This field is used when payment gateway is initialized                                                                                                                          |
| order.quote.price.breakup[].price.value                   | Value of the price breakup item                                            | This field is used when payment gateway is initialized                                                                                                                          |
| order.quote.price.breakup[].@ondc/org/title_type          | Type of the price breakup item                                             | Additional information                                                                                                                                                          |
| order.quote.price.breakup[].item.price.currency           | Currency of the ordered item                                               | This field is used when payment gateway is initialized                                                                                                                          |
| order.quote.price.breakup[].item.price.value              | Value of the ordered item                                                  | This field is used when payment gateway is initialized                                                                                                                          |
| order.quote.price.breakup[].@ondc/org/item_quantity.count | Quantity of the ordered item                                               | This field is used to reduce the inventory list from the seller side                                                                                                            |
## Request Sample Data

```json
messageId=37fd9c02-0f8b-4a3e-8397-b9ea64258c57

```

## Response Sample Data

```json
{
  "context": {
    "city": "std:080",
    "domain": "nic2004:52110",
    "bpp_uri": "https://carecommerce.in/ondc/v1/148762/bpp/",
    "core_version": "1.0.0",
    "bap_id": "carecommerce.in",
    "ttl": "PT30S",
    "timestamp": "2022-11-05T06:28:56.751Z",
    "bpp_id": "carecommerce.in",
    "country": "IND",
    "action": "on_confirm",
    "bap_uri": "https://carecommerce.in/ondc/v1/155210/",
    "message_id": "dfde2d56-4d78-456a-8fc3-30e4bd978374",
    "transaction_id": "d4a9a832-1582-4575-97b8-16848acd2c7d"
  },
  "message": {
    "order": {
      "billing": {
        "name": "",
        "created_at": "2022-11-05T11:58:56",
        "updated_at": "2022-11-05T11:58:56",
        "phone": "8097527450",
        "address": {
          "city": "Bangalore",
          "door": "560016 Bangalore",
          "name": "560016 Bangalore",
          "locality": "560016 Bangalore",
          "country": "IN",
          "area_code": "560016",
          "state": "KARNATAKA"
        },
        "email": "test@gmail.com"
      },
      "items": [
        {
          "fulfillment_id": "1",
          "id": "42601533",
          "quantity": {
            "count": 2
          }
        }
      ],
      "provider": {
        "id": "111863",
        "locations": [
          {
            "id": "148273"
          }
        ]
      },
      "id": "a107f2b4-96cf-4d8c-a1de-c6c39b6064d8",
      "state": "Created",
      "quote": {
        "price": {
          "currency": "INR",
          "value": "246.0",
          "breakup": [
            {
              "title": "Chilly Spices",
              "price": {
                "currency": "INR",
                "value": 198
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
              "@ondc/org/item_quantity": {
                "count": 2
              },
              "@ondc/org/item_id": "42601533"
            },
            {
              "@ondc/org/item_id": "",
              "price": {
                "currency": "INR",
                "value": 23
              },
              "@ondc/org/title_type": "delivery",
              "title": "Delivery charges"
            },
            {
              "@ondc/org/item_id": "",
              "price": {
                "currency": "INR",
                "value": 25
              },
              "@ondc/org/title_type": "packing",
              "title": "Packing charges"
            }
          ]
        },
        "ttl": "P1D"
      },
      "payment": {
        "status": "NOT-PAID",
        "collected_by": "BPP",
        "@ondc/org/return_window": "0",
        "@ondc/org/withholding_amount": "0.00",
        "@ondc/org/settlement_details": [
          {
            "settlement_ifsc_code": "",
            "beneficiary_name": "",
            "upi_address": "",
            "settlement_bank_account_no": "",
            "bank_name": "",
            "settlement_type": "",
            "branch_name": "",
            "settlement_counterparty": "seller-app",
            "settlement_phase": "sale-amount"
          }
        ],
        "@ondc/org/settlement_window": "P2D",
        "@ondc/org/settlement_basis": "Collection",
        "params": {
          "currency": "INR",
          "amount": "246.0"
        },
        "@ondc/org/buyer_app_finder_fee_amount": "3",
        "type": "POST-FULFILLMENT",
        "@ondc/org/buyer_app_finder_fee_type": "fixed"
      }
    }
  }
}
```
