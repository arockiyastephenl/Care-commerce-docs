---
sidebar_label: 'Confirm API'
sidebar_position: 4
---

```bash
Method:               POST
Required Parameters:  Need item_details,quote_details,provider_details,fulfillments_details
Url: 			      /protocol/v1/init
Description: 		  On the buyer node, the user selects item(s) from the search results and adds them to the cart. The user should also be able to change the quantity of items or remove the items from the cart
```
## Flow Diagram of Select and on_select
![select](https://i.imgur.com/WtGmhCI.png)

## Request Sample Data:

## Response Sample Data:


## on_init API:


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
