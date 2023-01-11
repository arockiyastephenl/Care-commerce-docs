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
Description: 		  Select API helps the buyer to Add or remove the product from the Cart from the response received throught the OnSearch API
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
## on_select API:

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
