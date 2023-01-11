---
sidebar_label: "Search API"
sidebar_position: 1
---
## About the API 

- In the scenario below, Ramesh wants to buy 100ml of Milk using the  Buyer App, He searches the product using the product name, Using Search API to discover the product based on Ramesh's specific location from the large network of seller available in the ONDC 


- In Simple words, Search API is used to Discover the product for the Buyer from theONDC 

- The Search API allows user to search the full list of products based on the search query available in the Care Commerce.

- Use the Search API to get list of products available based on the Search parameter, Location, Mode of Payments etc..

Buyer Application can use Search API by Multiple ways:

1. Search Product by City (Based on the City)
2. Search Product by Product Name ( Based on the Product Name)
3. Search Product by Catagory (Based on the Product Catagory)
4. Search Product by Fulfillment (Based on the specified drop location or Pickup Location)

```bash
Method:               POST
Required Parameters:  Need city name and payment details
Url: 			      /protocol/v1/search
Description: 		  On the buyer node, the user searches for a Product using the name (change based on requirements). The user expects a list of Products with matching name
```

## Flow Diagram of Search and on_search
![search](https://i.imgur.com/VvS3C70.png)

### Flow  

- 1.0 → user searches for the product on the buyer APP eg milk
- 1.1 →  Search request goes to the ONDC API gateway
- 1.2 → ONDC broadcasts the request on the ONDC network 
- 1.3 → Send the buyer app search request to the Seller APP
- 1.4 → Seller returns the ack to the ONDC Gateway.
- 1.5 → ONDC gateway forwards the response to the buyer
- 1.6 → Buyer App receives the Acknowledgement message Buyer app will callback the on_search method.

- 2.0 → RabbitMQ receives the search request from the ONDC API gateway.
- 2.1 → The care-commerce API picks search request
- 2.2 → The care-commerce API process the request.
- 2.3 → Search request to elastic search
- 2.4 → Dispatch search request 
- 2.5 → Care Commerce Core Product Search API

- 2.6 → Push Search Response

- 3.1 → Buyer App OnSearch Request Message ID 
- 3.2 → ONDC OnSearch 
- 3.3 → Seller App OnSearch Request 
- 3.4 → OnSearch Response 
- 3.5 → ONDC OnSearch

### (Internal) 
- 4.0 → CC Seller App API OnSearch 


## Parameters
| Parameter    | Datatypes    | Description    |
| :-----:      | :---:           | :---:          |
| item.descriptor.name      | string             | Name of the Product to be searched.            |
| fulfillment.type          | string             | Defines the Delivery mode of the Particular Product.            |
| fulfillment.end.location.gps  | string    | Search the Product available in around the given GPS Coordinates.      |
| payment.@ondc/org/buyer_app_finder_fee_type  | string    |  Buyer app commission type. Enum: Amount, Percent      |
| payment.@ondc/org/buyer_app_finder_fee_amount  | string   |  Buyer app commission amount.   |



## Request Sample Data:

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

ONDC uses **async APIs**, So Seller App is taking some time to process the request. Serach request response will be passed on the on_search API response it is also called as Callback API.

So the Search request response will be unique message id and +ve Ack

## Response Sample Data:

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

## on_search API:

## About the API : 

- OnSearch API is a call back API, ie.,Whenever the Buyer App calls the Search API with specific parameters, the OnSearch API can be called using the Unique Message ID to get the reponse for the Search API request. 
- An Unique  Message ID will be generated for the specific request to the Buyer, Using the Unique Message ID, The product details can be fetched for the buyer. 

- In Simple words OnSearch API helps to get products details to be displayed to the buyer.








```bash
Method:               POST
Required Parameters:   Need provider_details,location_details,bpp_details,category_details,fulfillment_details
Url: 			      /protocol/v1/on_search
Description: 		  The seller node receives a search query and based on the request, it identifies matching items from the various seller catalogs on the platform. It consolidates all matching results and returns a list of items
```

## Request Sample Data

```json
messageId=37fd9c02-0f8b-4a3e-8397-b9ea64258c57

```
## Response Sample Data

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
				"images": [
					""
				],
				"long_desc": "We are a collaborative commerce platform",
				"name": "Innoviti",
				"short_desc": "We are a collaborative commerce platform that is using data intelligence to turn simple payment transactions into powerful purchase tools that urge consumers to buy more products and better products from you.",
				"symbol": ""
			},
			"bpp/fulfillments": [{
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
			"bpp/providers": [{
				"@ondc/org/fssai_license_no": "123456789",
				"descriptor": {
					"images": [
						""
					],
					"long_desc": "We are a collaborative commerce platform",
					"name": "Innoviti",
					"short_desc": "We are a collaborative commerce platform that is using data intelligence to turn simple payment transactions into powerful purchase tools that urge consumers to buy more products and better products from you.",
					"symbol": ""
				},
				"id": "111863",
				"items": [{
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
					},
				],
				"locations": [{
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
							"times": [
								"0800",
								"1300"
							]
						}
					}
				}],
				"ttl": "P1D"
			}]
		}
	}
}
```