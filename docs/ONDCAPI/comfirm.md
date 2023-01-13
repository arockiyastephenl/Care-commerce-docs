---
sidebar_label: 'Confirm API'
sidebar_position: 4
---
## About the API:
Confirm API helps to confirm the order and to proceed the payment using preferred methods of payment facilitated by the Buyer app. 
Buyer receives the Updated quote and policies from the seller for confirmation. 
The Confirm API request includes the Payment mode the buyer wish to proceed with the order. 
The Payment mode may be Prepaid Payment or the Cash on Delivey (COD) 
Prepaid Payment : Buyer App can collect Prepaid Orders payment with the permission of Seller App 
Postpaid/ Cash on Delivery Payment :  Seller app can collect Cash on delivery payment with the permission of Buyer app 

## API Overview Diagram:
![confirm](https://i.imgur.com/kX74cZH.png)

```bash
Method:               POST
Required Parameters:  Need item_details,quote_details,provider_details,fulfillments_details
Url: 			      /protocol/v1/init
Description: 		  On the buyer node, the user selects item(s) from the search results and adds them to the cart. The user should also be able to change the quantity of items or remove the items from the cart
```
## Flow Diagram of Select and on_select
![select](https://i.imgur.com/WtGmhCI.png)

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
			"fulfillments": [{
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
			}],
			"quote": {
				"breakup": [{
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
				}, {
					"@ondc/org/item_id": "",
					"price": {
						"currency": "INR",
						"value": 23
					},
					"@ondc/org/title_type": "delivery",
					"title": "Delivery charges"
				}, {
					"@ondc/org/item_id": "",
					"price": {
						"currency": "INR",
						"value": 25
					},
					"@ondc/org/title_type": "packing",
					"title": "Packing charges"
				}],
				"price": {
					"currency": "INR",
					"value": "246.0"
				},
				"ttl": "P1D"
			},
			"items": [{
				"fulfillment_id": "1",
				"id": "42601533",
				"quantity": {
					"count": 2
				}
			}],
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
				"@ondc/org/settlement_details": [{
					"settlement_ifsc_code": "",
					"beneficiary_name": "",
					"upi_address": "",
					"settlement_bank_account_no": "",
					"bank_name": "",
					"settlement_type": "",
					"branch_name": "",
					"settlement_counterparty": "seller-app",
					"settlement_phase": "sale-amount"
				}]
			},
			"created_at": "2022-11-05T06:28:56.279Z",
			"updated_at": "2022-11-05T06:28:56.279Z",
			"provider": {
				"id": "111863",
				"locations": [{
					"id": "148273"
				}]
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
	On_confirm API is the callback API. This API validates status of the Payment and deliver or pickup location of the order and also order id .

```bash
Method:               POST
Required Parameters:   Need items details ,state=active,billing details,fulfillments details,quote,payment
Url: 			      /protocol/v1/on_confirm
Description: 		  The seller node receives the confirmation from the user, and validates the proof or promise of payment. The seller returns a confirmed order ID and the confirmed details of the fulfilment immediately.
```

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
			"items": [{
				"fulfillment_id": "1",
				"id": "42601533",
				"quantity": {
					"count": 2
				}
			}],
			"provider": {
				"id": "111863",
				"locations": [{
					"id": "148273"
				}]
			},
			"id": "a107f2b4-96cf-4d8c-a1de-c6c39b6064d8",
			"state": "Created",
			"quote": {
				"price": {
					"currency": "INR",
					"value": "246.0",
					"breakup": [{
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
					}, {
						"@ondc/org/item_id": "",
						"price": {
							"currency": "INR",
							"value": 23
						},
						"@ondc/org/title_type": "delivery",
						"title": "Delivery charges"
					}, {
						"@ondc/org/item_id": "",
						"price": {
							"currency": "INR",
							"value": 25
						},
						"@ondc/org/title_type": "packing",
						"title": "Packing charges"
					}]
				},
				"ttl": "P1D"
			},
			"payment": {
				"status": "NOT-PAID",
				"collected_by": "BPP",
				"@ondc/org/return_window": "0",
				"@ondc/org/withholding_amount": "0.00",
				"@ondc/org/settlement_details": [{
					"settlement_ifsc_code": "",
					"beneficiary_name": "",
					"upi_address": "",
					"settlement_bank_account_no": "",
					"bank_name": "",
					"settlement_type": "",
					"branch_name": "",
					"settlement_counterparty": "seller-app",
					"settlement_phase": "sale-amount"
				}],
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
