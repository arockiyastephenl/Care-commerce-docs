---
sidebar_label: "Search"
sidebar_position: 5
---

### About the API

 Search API is used to Discover the product for the
  Buyer from the ONDC

-The Search API allows users to search the full list of products based on the search query available in Care Commerce.


- Use the Search API to get a list of products available based on the Search parameter, Location, Mode of Payments, etc.. 

Buyer Application can use Search API by Multiple ways:

1.  Search Product by City (Based on the City)
2.  Search Product by Product Name ( Based on the Product Name)
3.  Search Product by Category (Based on the Product Category)
4.  Search Product by Fulfillment (Based on the specified drop location
    or Pickup Location)

<!-- ::: {#cb1 .sourceCode} -->

```{.sourceCode .ruby}
Method:               POST
Required Parameters:  Need Products name and customer locations
Url:                  /protocol/v1/search
Description:          On the buyer node, the user searches for a Product using the name (change based on requirements). The user expects a list of Products with matching name
```

<!-- ::: -->


## Search API :
### Parameters

| Fields                                                        | Purpose                                               | Logic                                                              |
|---------------------------------------------------------------|-------------------------------------------------------|--------------------------------------------------------------------|
| intent.item.descriptor.name: coffee                           | This field is used to search the item with their name | This name matches with our database products name                  |
| intent.Fulfillment.type: Delivery                             | Mention the type of delivery                          | Need to check with logistic API                                    |
| intent.Fulfillment.type.end.location.gps: 12.974002,77.613458 | End user location                                     | Need to check logistic service availability for the given location |
| intent.Fulfillment.type.end.location.address:area_code:560001 | End user area code                                    | Need to check logistic service availability                        |
| payment.@ondc/org/buyerapp finder_fee_type                    | Buyer app commission for selling the product          | Both seller and buyer agree to the finder fee                      |
| payment.@ondc/org/buyerapp finder_fee_amount                  | Mention the amount of buyer app commission            | Both seller and buyer agree to the finder fee                      |
                    
### Request Sample Data:

```json
{
  "context": {
    "domain": "nic2004:52110",
    "country": "IND",
    "city": "std:080",
    "core_version": "1.0.0",
    "action": "search",
    "bap_id": "carecommerce.in",
    "bap_uri": "https://carecommerce.in/ondc/1.0/",
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

ONDC uses **async APIs**, So the Seller App is taking some time to process
the request. Search request response will be passed on the on_search API
response it is also called as Callback API.

So the Search request response will be unique message id and +ve Ack

### Response Sample Data:

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

## On_Search API:

Whenever the Buyer App calls the Search API with specific parameters,
the OnSearch API can be called using the Unique Message ID to get the
response for the Search API request.

An Unique Message ID will be generated for the specific request to the
Buyer, Using the Unique Message ID, The product details can be fetched
for the buyer.

```bash
Method:               POST
Required Parameters:   Need provider_details,location_details,bpp_details,category_details,fulfillment_details
Url: 			      /protocol/v1/on_search
Description: 		  The seller node receives a search query and based on the request, it identifies matching items from the various seller catalogs on the platform. It consolidates all matching results and returns a list of items
```
### Parameters

| Fields                                                                  | Purpose                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Logic                                                                                                                                                                                                                                  |
|-------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| bpp/fulfillments.id                                                     | Unique id of the fulfillment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | This field is used as the primary key to find the fulfillment                                                                                                                                                                          |
| bpp/fulfillments.type                                                   | Type of the delivery                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | This describes the type of fulfillment ("Pickup" - Buyer picks up from store by themselves or through their logistics provider; "Delivery" - seller delivers to the buyer) Enum: [ Delivery, Pickup, Delivery and Pickup, Reverse QC ] |
| bpp/descriptor.name                                                     | Represent the store name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Identify the name of the store                                                                                                                                                                                                         |
| bpp/descriptor.symbol                                                   | Represent the store symbol or logo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Additional information                                                                                                                                                                                                                 |
| bpp/descriptor.short_desc                                               | Description about the store                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Additional information                                                                                                                                                                                                                 |
| bpp/descriptor.long_desc                                                | Description about the store                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Additional information                                                                                                                                                                                                                 |
| bpp/descriptor.images[0]                                                | List of images                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Additional information                                                                                                                                                                                                                 |
| bpp/providers[0].bpp/descriptor                                         | Its contains name,symbol, short_desc,long_desc and images of the provider                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Additional information                                                                                                                                                                                                                 |
| bpp/providers[0].items[0].id                                            | Unique id of the product                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Use this field to identify the exact product                                                                                                                                                                                           |
| bpp/providers[0].items[0].descriptor                                    | Describes a product or a service offered to the end consumer by the provider - Statutory requirements for category_id "Packaged Commodities" - descriptor.name (for item name), price.value (for declared price), price.maximum_value (for MRP); Statutory requirements for category_id "Packaged Foods" - descriptor.name (for item name), descriptor.symbol (for veg or non-veg), descriptor.short_desc (for food allergen), descriptor.long_desc (for instructions for use), price.value (for declared price); All other statutory attributes must be provided, as applicable, for the above; No statutory requirement for category_id "F&B" or "Fruits and Vegetables" | Additional information                                                                                                                                                                                                                 |
| bpp/providers[0].items[0].quantity                                      | Describes the count or amount of an item                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Quantity will be decreased by a selected amount of count.                                                                                                                                                                              |
| bpp/providers[0].items[0].price                                         | Describes the price of an item. Allows for domain extension.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Used sort and filter the products based on the price                                                                                                                                                                                   |
| bpp/providers[0].items[0].fulfillment_id                                | Unique reference ID to the fulfillment of an order                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Use this id to what kind of delivery methods are used for the particular item                                                                                                                                                          |
| bpp/providers[0].items[0].location_id                                   | Location/properties/id                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Identify the location of product origin in case of any return                                                                                                                                                                          |
| bpp/providers[0].items[0].@ondc/org/returnable                          | whether the item is returnable                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | This field is boolean. If it is a true need to check with logistic providers                                                                                                                                                           |
| bpp/providers[0].items[0].@ondc/org/cancellable                         | whether the item is cancellable                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | This field is boolean. If it is a true need to check with logistic providers                                                                                                                                                           |
| bpp/providers[0].items[0].@ondc/org/seller_pickup_return                | in case of a return, whether the item should be picked up by seller                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Need check seller agrees to pick up the product                                                                                                                                                                                        |
| bpp/providers[0].items[0].@ondc/org/time_to_ship                        | time from order confirmation by which item ready to ship in ISO8601 durations format (e.g. 'PT30M' indicates item ready to ship in 30 mins). Mandatory for category_id "F&B"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Check with logistic API to delivery person can pickup                                                                                                                                                                                  |
| bpp/providers[0].items[0].@ondc/org/available_on_cod                    | whether the catalog item is available on COD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Logistic provider to accept the payment, need to check with logistic provider                                                                                                                                                          |
| bpp/providers[0].items[0].@ondc/org/contact_details_consumer_care       | contact details for consumer care                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | This fields allows the end-user to contact the seller in case of any query about the product.                                                                                                                                          |
| bpp/providers[0].items[0].@ondc/org/statutory_reqs_packaged_commodities | mandatory for category_id "Packaged Commodities" - required attributes for all include the following - manufacturer_or_packer_name, manufacturer_or_packer_address, common_or_generic_name_of_commodity, net_quantity_or_measure_of_commodity_in_pkg, month_year_of_manufacture_packing_import; other attributes are required on case-by-case basis                                                                                                                                                                                                                                                                                                                        | Additional information about the package                                                                                                                                                                                               |
| bpp/providers[0].items[0].@ondc/org/statutory_reqs_prepackaged_food     | mandatory for category_id "Packaged food" - required attributes include the following - nutritional_info, additives_info, net_quantity; other attributes are required on case-by-case basis                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Check with the logistic API if the item is in the food category and needs to be delivered on time.                                                                                                                                     |
| bpp/providers[0].items[0].@ondc/org/mandatory_reqs_veggies_fruits       | mandatory for category_id "Fruits and Vegetables" required attributes include the following - net_quantity                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Check with logistic API if the item is food category is Fruits and Vegetables. And order should be delivered on given time period.                                                                                                     |
| bpp/providers[0].items[0].tags                                          | Describes a tag. This is a simple key-value store which is used to contain extended metadata                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Metadata about the order                                                                                                                                                                                                               |

### Request Sample Data

```json
messageId=37fd9c02-0f8b-4a3e-8397-b9ea64258c57

```

### Response Sample Data

```json
{
  "context": {
    "action": "on_search",
    "bap_id": "carecommerce.in",
    "bap_uri": "https://carecommerce.in/ondc/1.0/",
    "bpp_id": "carecommerce.in",
    "bpp_uri": "https://carecommerce.in/ondc/v1/148762/bpp/",
    "city": "std:080",
    "core_version": "1.0.0",
    "country": "IND",
    "domain": "nic2004:52110",
    "message_id": "7dd14992-ba43-42b8-ba02-a613e9e206fc",
    "timestamp": "2022-11-17T12:34:05.226Z",
    "transaction_id": "5b2b3137-5922-4592-82d0-5734446f4994",
    "ttl": "PT30S"
  },
  "message": {
    "catalog": {
      "bpp/descriptor": {
        "images": [""],
        "long_desc": "We are a collaborative commerce platform",
        "name": "carecommerce",
        "short_desc": "We are a collaborative commerce platform that is using data intelligence to turn simple payment transactions into powerful purchase tools that urge consumers to buy more products and better products from you.",
        "symbol": ""
      },
      "bpp/fulfillments": [
        {
          "id": "1",
          "type": "Delivery"
        },
        {
          "id": "2",
          "type": "Pickup"
        },
        {
          "id": "3",
          "type": "Delivery and Pickup"
        }
      ],
      "bpp/providers": [
        {
          "@ondc/org/fssai_license_no": "123456789",
          "descriptor": {
            "images": [""],
            "long_desc": "We are a collaborative commerce platform",
            "name": "carecommerce",
            "short_desc": "We are a collaborative commerce platform that is using data intelligence to turn simple payment transactions into powerful purchase tools that urge consumers to buy more products and better products from you.",
            "symbol": ""
          },
          "id": "111863",
          "items": [
            {
              "@ondc/org/available_on_cod": false,
              "@ondc/org/cancellable": false,
              "@ondc/org/contact_details_consumer_care": "growth@plotch.ai, 9920175041",
              "@ondc/org/return_window": "P7D",
              "@ondc/org/returnable": false,
              "@ondc/org/s": {
                "net_quantity": ""
              },
              "@ondc/org/seller_pickup_return": false,
              "@ondc/org/statutory_reqs_packaged_commodities": {
                "common_or_generic_name_of_commodity": "",
                "imported_product_country_of_origin": "India",
                "manufacturer_or_packer_address": "",
                "manufacturer_or_packer_name": "",
                "month_year_of_manufacture_packing_import": "",
                "net_quantity_or_measure_of_commodity_in_pkg": ""
              },
              "@ondc/org/statutory_reqs_prepackaged_food": {
                "additives_info": "",
                "nutritional_info": ""
              },
              "@ondc/org/time_to_ship": "P7D",
              "category_id": "Packaged Foods",
              "descriptor": {
                "images": [
                  "https://cdn.plotch.io/image/upload/w_301,h_301/C/V/PLO1667275457_da39a3ee5e6b4b0d3255bfef95601890afd80709.jpg",
                  "https://cdn.plotch.io/image/upload/w_301,h_301/C/V/PLO1667275472_da39a3ee5e6b4b0d3255bfef95601890afd80709.jpg"
                ],
                "long_desc": "delicious butter",
                "name": "delicious butter",
                "short_desc": "delicious butter",
                "symbol": ""
              },
              "fulfillment_id": "1",
              "id": "42621582",
              "location_id": 148273,
              "price": {
                "currency": "INR",
                "maximum_value": "50.0",
                "value": "50.0"
              },
              "tags": {
                "non-veg": "no",
                "veg": "no"
              }
            }
          ],
          "locations": [
            {
              "address": {
                "area_code": "560016",
                "city": "Bengaluru",
                "state": "KARNATAKA",
                "street": "Kalkere Road Horamavu Village, Hobli, Krishnarajapura,"
              },
              "circle": {
                "gps": "13.0306162,77.667275",
                "radius": {
                  "unit": "km",
                  "value": "15"
                }
              },
              "gps": "13.0306162,77.667275",
              "id": 148273,
              "time": {
                "days": "1,2,3,4,5,6,7",
                "range": {
                  "end": "2200",
                  "start": "0800"
                },
                "schedule": {
                  "frequency": "PT4H",
                  "times": ["0800", "1300"]
                }
              }
            }
          ],
          "ttl": "P1D"
        }
      ]
    }
  }
}
```
