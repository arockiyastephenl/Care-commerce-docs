---
sidebar_label: 'Flow of Logistic API'
sidebar_position: 5
---

## Logistic API flow On ONDC
This document explains how the logistic API work in the ONDC Network:

Logistic API has been called by the sellerApp

## List of API call:
- Search - On_search
- Init - On_Init
- Confirm -On_confirm
- Cancel - On_cancel
- Track - On_track

## Search and On_Search Logistic API:



When the buyer app calls the init API, the seller app calls the search API of the logistic API.



# Logistic search API request has
- Fulfillment
- Category
- Payment
- Payload_details

## Sample Logistic search request payload:
```json
{
    "context":{
        "domain":"nic2004:60232",
        "country":"IND",
        "city":"std:080",
        "action":"search",
        "core_version":"1.0.0",
        "bap_id":"ondcpreprod.sellerapp.in",
        "bap_uri":"https://ondcpreprod.sellerapp.in/bapl/u/",
        "transaction_id":"98d12b3a-1f83-4562-baa6-1660d8d5de62",
        "message_id":"fdbbe2e4-cf34-4da3-aef7-6a86061a279e",
        "timestamp":"2022-11-05T09:43:58.248Z"
    },
    "message":{
        "intent":{
            "fulfillment":{
                "type":"Prepaid",
                "start":{
                    "location":{
                        "gps":"12.970557,77.6448023",
                        "address":{
                            "area_code":"560038"
                        }
                    }
                },
                "end":{
                    "location":{
                        "gps":"12.968488,77.642574",
                        "address":{
                            "area_code":"560008"
                        }
                    }
                }
            },
            "category":{
                "id":"Next Day Delivery"
            },
            "payment":{
                "@ondc/org/collection_amount":"0"
            },
            "@ondc/org/payload_details":{
                "weight":{
                    "value":1,
                    "unit":"Kilogram"
                },
                "dimensions":{
                    "length":{
                        "value":10,
                        "unit":"centimeters"
                    },
                    "breadth":{
                        "value":10,
                        "unit":"centimeters"
                    },
                    "height":{
                        "value":10,
                        "unit":"centimeters"
                    }
                },
                "category":"Packaged Commodities",
                "value":{
                    "currency":"INR",
                    "value":"860"
                }
            }
        }
    }
}



```

