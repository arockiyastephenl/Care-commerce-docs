---
sidebar_label: 'Flow of Logistic API'
sidebar_position: 5
---

## Logistic API flow On ONDC
This document explains how the logistic API work in the ONDC Network:

The seller app has called logistic API. This method is also called p2p API call.

## Peer-to-Peer API Call:
Peer-to-peer (P2P) API calling refers to a method of communication where two or more devices or applications directly connect and exchange information without the need for a central server or intermediary. In P2P API calling, each device acts as both a client and a server, allowing for direct communication between devices. This can result in faster and more efficient communication, as well as reduced dependence on centralized servers.  

## List of API call:
- Search - On_search
- Init - On_Init
- Confirm -On_confirm
- Cancel - On_cancel
- Track - On_track

### Search Logistic API:

## About the API:

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

# On_Search Logistic API:

## About the API:

## Sample Logistic On_Search Response payload:

```json
{
    "context": {
        "domain": "nic2004:60232",
        "country": "IND",
        "city": "std:080",
        "action": "on_search",
        "core_version": "1.0.0",
        "bap_id": "ondcpreprod.sellerapp.in",
        "bap_uri": "https://ondcpreprod.sellerapp.in/bapl/u/",
        "bpp_id": "ondc-preprod.loadshare.net",
        "bpp_uri": "https://ondc-preprod.loadshare.net/logistics/bpp",
        "transaction_id": "98d12b3a-1f83-4562-baa6-1660d8d5de62",
        "message_id": "fdbbe2e4-cf34-4da3-aef7-6a86061a279e",
        "timestamp": "2022-11-05T09:43:59.080Z",
        "ttl": "PT30s"
    },
    "message": {
        "catalog": {
            "bpp/descriptor": {
                "name": "LoadShare Delivery"
            },
            "bpp/providers": [
                {
                    "id": "loadshare@ondc-preprod.loadshare.net",
                    "descriptor": {
                        "name": "LoadShare Networks",
                        "long_desc": "LoadShare Networks Private Limited",
                        "short_desc": "LoadShare Networks Private Limited"
                    },
                    "categories": [
                        {
                            "id": "Next Day Delivery",
                            "time": {
                                "label": "TAT",
                                "duration": "P1D"
                            }
                        }
                    ],
                    "items": [
                        {
                            "id": "nextday",
                            "price": {
                                "currency": "INR",
                                "value": "42"
                            },
                            "descriptor": {
                                "name": "Next Day Delivery",
                                "long_desc": "Upto 2 working days for Delivery",
                                "short_desc": "Upto 2 working days for Delivery"
                            },
                            "category_id": "Next Day Delivery",
                            "time": {
                                "range": {
                                    "start": "2022-11-06T15:13:59.000Z",
                                    "end": "2022-11-06T17:13:59.000Z"
                                }
                            }
                        },
                        {
                            "id": "scheduled_t1_1800",
                            "price": {
                                "currency": "INR",
                                "value": "42"
                            },
                            "descriptor": {
                                "name": "Scheduled Delivery",
                                "long_desc": "Scheduled: 18:00 - 20:00",
                                "short_desc": "Scheduled Delivery"
                            },
                            "category_id": "Next Day Delivery",
                            "time": {
                                "range": {
                                    "start": "2022-11-05T18:00:00.000Z",
                                    "end": "2022-11-05T20:00:00.000Z"
                                }
                            }
                        },
                        {
                            "id": "scheduled_t1_1900",
                            "price": {
                                "currency": "INR",
                                "value": "42"
                            },
                            "descriptor": {
                                "name": "Scheduled Delivery",
                                "long_desc": "Scheduled: 19:00 - 21:00",
                                "short_desc": "Scheduled Delivery"
                            },
                            "category_id": "Next Day Delivery",
                            "time": {
                                "range": {
                                    "start": "2022-11-05T19:00:00.000Z",
                                    "end": "2022-11-05T21:00:00.000Z"
                                }
                            }
                        },
                        {
                            "id": "scheduled_t2_1000",
                            "price": {
                                "currency": "INR",
                                "value": "42"
                            },
                            "descriptor": {
                                "name": "Scheduled Delivery",
                                "long_desc": "Scheduled: 10:00 - 12:00",
                                "short_desc": "Scheduled Delivery"
                            },
                            "category_id": "Next Day Delivery",
                            "time": {
                                "range": {
                                    "start": "2022-11-06T10:00:00.000Z",
                                    "end": "2022-11-06T12:00:00.000Z"
                                }
                            }
                        },
                        {
                            "id": "scheduled_t2_1100",
                            "price": {
                                "currency": "INR",
                                "value": "42"
                            },
                            "descriptor": {
                                "name": "Scheduled Delivery",
                                "long_desc": "Scheduled: 11:00 - 13:00",
                                "short_desc": "Scheduled Delivery"
                            },
                            "category_id": "Next Day Delivery",
                            "time": {
                                "range": {
                                    "start": "2022-11-06T11:00:00.000Z",
                                    "end": "2022-11-06T13:00:00.000Z"
                                }
                            }
                        },
                        {
                            "id": "scheduled_t2_1200",
                            "price": {
                                "currency": "INR",
                                "value": "42"
                            },
                            "descriptor": {
                                "name": "Scheduled Delivery",
                                "long_desc": "Scheduled: 12:00 - 14:00",
                                "short_desc": "Scheduled Delivery"
                            },
                            "category_id": "Next Day Delivery",
                            "time": {
                                "range": {
                                    "start": "2022-11-06T12:00:00.000Z",
                                    "end": "2022-11-06T14:00:00.000Z"
                                }
                            }
                        },
                        {
                            "id": "scheduled_t2_1300",
                            "price": {
                                "currency": "INR",
                                "value": "42"
                            },
                            "descriptor": {
                                "name": "Scheduled Delivery",
                                "long_desc": "Scheduled: 13:00 - 15:00",
                                "short_desc": "Scheduled Delivery"
                            },
                            "category_id": "Next Day Delivery",
                            "time": {
                                "range": {
                                    "start": "2022-11-06T13:00:00.000Z",
                                    "end": "2022-11-06T15:00:00.000Z"
                                }
                            }
                        },
                        {
                            "id": "scheduled_t2_1400",
                            "price": {
                                "currency": "INR",
                                "value": "42"
                            },
                            "descriptor": {
                                "name": "Scheduled Delivery",
                                "long_desc": "Scheduled: 14:00 - 16:00",
                                "short_desc": "Scheduled Delivery"
                            },
                            "category_id": "Next Day Delivery",
                            "time": {
                                "range": {
                                    "start": "2022-11-06T14:00:00.000Z",
                                    "end": "2022-11-06T16:00:00.000Z"
                                }
                            }
                        },
                        {
                            "id": "scheduled_t2_1500",
                            "price": {
                                "currency": "INR",
                                "value": "42"
                            },
                            "descriptor": {
                                "name": "Scheduled Delivery",
                                "long_desc": "Scheduled: 15:00 - 17:00",
                                "short_desc": "Scheduled Delivery"
                            },
                            "category_id": "Next Day Delivery",
                            "time": {
                                "range": {
                                    "start": "2022-11-06T15:00:00.000Z",
                                    "end": "2022-11-06T17:00:00.000Z"
                                }
                            }
                        },
                        {
                            "id": "scheduled_t2_1600",
                            "price": {
                                "currency": "INR",
                                "value": "42"
                            },
                            "descriptor": {
                                "name": "Scheduled Delivery",
                                "long_desc": "Scheduled: 16:00 - 18:00",
                                "short_desc": "Scheduled Delivery"
                            },
                            "category_id": "Next Day Delivery",
                            "time": {
                                "range": {
                                    "start": "2022-11-06T16:00:00.000Z",
                                    "end": "2022-11-06T18:00:00.000Z"
                                }
                            }
                        },
                        {
                            "id": "scheduled_t2_1700",
                            "price": {
                                "currency": "INR",
                                "value": "42"
                            },
                            "descriptor": {
                                "name": "Scheduled Delivery",
                                "long_desc": "Scheduled: 17:00 - 19:00",
                                "short_desc": "Scheduled Delivery"
                            },
                            "category_id": "Next Day Delivery",
                            "time": {
                                "range": {
                                    "start": "2022-11-06T17:00:00.000Z",
                                    "end": "2022-11-06T19:00:00.000Z"
                                }
                            }
                        },
                        {
                            "id": "scheduled_t2_1800",
                            "price": {
                                "currency": "INR",
                                "value": "42"
                            },
                            "descriptor": {
                                "name": "Scheduled Delivery",
                                "long_desc": "Scheduled: 18:00 - 20:00",
                                "short_desc": "Scheduled Delivery"
                            },
                            "category_id": "Next Day Delivery",
                            "time": {
                                "range": {
                                    "start": "2022-11-06T18:00:00.000Z",
                                    "end": "2022-11-06T20:00:00.000Z"
                                }
                            }
                        },
                        {
                            "id": "scheduled_t2_1900",
                            "price": {
                                "currency": "INR",
                                "value": "42"
                            },
                            "descriptor": {
                                "name": "Scheduled Delivery",
                                "long_desc": "Scheduled: 19:00 - 21:00",
                                "short_desc": "Scheduled Delivery"
                            },
                            "category_id": "Next Day Delivery",
                            "time": {
                                "range": {
                                    "start": "2022-11-06T19:00:00.000Z",
                                    "end": "2022-11-06T21:00:00.000Z"
                                }
                            }
                        }
                    ]
                }
            ]
        }
    },
    "error": null
}
```

## Logistic init API

## About the API

## Sample Logistic init request payload:
```json
{
    "context": {
        "domain": "nic2004:60232",
        "country": "IND",
        "city": "std:080",
        "action": "init",
        "core_version": "1.0.0",
        "bap_id": "ondcpreprod.sellerapp.in",
        "bap_uri": "https://ondcpreprod.sellerapp.in/bapl/u/",
        "bpp_id": "ondc-preprod.loadshare.net",
        "bpp_uri": "https://ondc-preprod.loadshare.net/logistics/bpp",
        "transaction_id": "98d12b3a-1f83-4562-baa6-1660d8d5de62",
        "message_id": "005cfd7c-8136-41c1-a2dc-ce02edb56e1e",
        "timestamp": "2022-11-05T09:48:32.351Z",
        "ttl": "PT30s"
    },
    "message": {
        "order": {
            "provider": {
                "id": "loadshare@ondc-preprod.loadshare.net"
            },
            "items": [
                {
                    "id": "nextday",
                    "category_id": "Next Day Delivery"
                }
            ],
            "billing": {
                "name": "SELLMETRIC PRIVATE LIMITED",
                "phone": "9650439777",
                "address": {
                    "door": "1, 621/A",
                    "name": "12th main road , Hal 2nd stage",
                    "city": "Bangalore",
                    "state": "Karnataka",
                    "country": "India",
                    "area_code": "560038",
                    "locality": "Indiranagar Bangalore"
                },
                "email": "billing@sellerapp.com",
                "tax_number": "29ABDCS3411L1Z7"
            },
            "fulfillments": [
                {
                    "id": "7ae63e5c-aaec-4f31-96fa-6b3c6fda2a7a",
                    "type": "Prepaid",
                    "start": {
                        "location": {
                            "gps": "12.970557,77.6448023",
                            "address": {
                                "door": "3rd floor,",
                                "name": "agroutkarsh",
                                "ward": "indira nagar 12th main",
                                "building": "Just dogs Building",
                                "street": "12th main,",
                                "city": "Bengaluru",
                                "state": "Karnataka",
                                "country": "India",
                                "area_code": "560038",
                                "locality": "indira nagar"
                            }
                        },
                        "contact": {
                            "phone": "9100061999",
                            "email": "agroutkarsh789@gmail.com"
                        }
                    },
                    "end": {
                        "location": {
                            "gps": "12.97056,77.64707",
                            "address": {
                                "name": "12th Main Rd HAL 2nd Stage Indiranagar Bangalore Urban ",
                                "city": "Bengaluru",
                                "state": "Karnataka",
                                "country": "IN",
                                "area_code": "560038"
                            }
                        },
                        "contact": {
                            "phone": "+919080739414",
                            "email": "dummyrgz77f@mystore5.com"
                        }
                    }
                }
            ],
            "payment": {
                "type": "POST-FULFILLMENT",
                "collected_by": "BAP",
                "@ondc/org/settlement_window": "P2D"
            }
        }
    }
}
```

## Logitic On_Init API

## About the API

## Sample Logistic On_Init Response payload:
```json
{
    "context": {
        "domain": "nic2004:60232",
        "country": "IND",
        "city": "std:080",
        "action": "on_init",
        "core_version": "1.0.0",
        "bap_id": "ondcpreprod.sellerapp.in",
        "bap_uri": "https://ondcpreprod.sellerapp.in/bapl/u/",
        "bpp_id": "ondc-preprod.loadshare.net",
        "bpp_uri": "https://ondc-preprod.loadshare.net/logistics/bpp",
        "transaction_id": "98d12b3a-1f83-4562-baa6-1660d8d5de62",
        "message_id": "005cfd7c-8136-41c1-a2dc-ce02edb56e1e",
        "timestamp": "2022-11-05T09:48:32.956Z",
        "ttl": "PT30s"
    },
    "message": {
        "order": {
            "provider": {
                "id": "loadshare@ondc-preprod.loadshare.net"
            },
            "items": [
                {
                    "id": "nextday",
                    "category_id": "Next Day Delivery"
                }
            ],
            "quote": {
                "price": {
                    "currency": "INR",
                    "value": "42"
                },
                "breakup": [
                    {
                        "title": "Delivery Charge",
                        "price": {
                            "currency": "INR",
                            "value": "42"
                        },
                        "@ondc/org/item_id": "nextday",
                        "@ondc/org/title_type": "Delivery Charge"
                    }
                ]
            },
            "payment": {
                "params": {
                    "amount": "42",
                    "transaction_id": "98d12b3a-1f83-4562-baa6-1660d8d5de62"
                },
                "type": "POST-FULFILLMENT",
                "time": {
                    "range": {
                        "end": "2022-12-05T09:48:32.986Z"
                    },
                    "label": "Pay by"
                },
                "status": "NOT-PAID"
            }
        }
    },
    "error": null
}
```


## Logistic Confirm API

## About the API

## Sample Logistic Confirm request payload:
```json
{
    "context": {
        "domain": "nic2004:60232",
        "country": "IND",
        "city": "std:080",
        "action": "confirm",
        "core_version": "1.0.0",
        "bap_id": "ondcpreprod.sellerapp.in",
        "bap_uri": "https://ondcpreprod.sellerapp.in/bapl/u/",
        "bpp_id": "ondc-preprod.loadshare.net",
        "bpp_uri": "https://ondc-preprod.loadshare.net/logistics/bpp",
        "transaction_id": "98d12b3a-1f83-4562-baa6-1660d8d5de62",
        "message_id": "966d3e9d-b2a6-4171-9fcf-e990a16f9ee1",
        "timestamp": "2022-11-05T09:50:53.863Z",
        "ttl": "PT30s"
    },
    "message": {
        "order": {
            "id": "636631fa8d995cc72d302d25",
            "state": "Created",
            "provider": {
                "id": "loadshare@ondc-preprod.loadshare.net"
            },
            "items": [
                {
                    "id": "nextday",
                    "category_id": "Next Day Delivery"
                }
            ],
            "billing": {
                "tax_number": "29ABDCS3411L1Z7"
            },
            "fulfillments": [
                {
                    "id": "7ae63e5c-aaec-4f31-96fa-6b3c6fda2a7a",
                    "type": "Prepaid",
                    "start": {
                        "instructions": {
                            "name": "Status for pickup",
                            "short_desc": "2d25"
                        },
                        "person": {
                            "name": "agroutkarsh"
                        },
                        "location": {
                            "gps": "12.970557,77.6448023",
                            "address": {
                                "door": "3rd floor,",
                                "name": "agroutkarsh",
                                "ward": "indira nagar 12th main",
                                "building": "Just dogs Building",
                                "street": "12th main,",
                                "city": "Bengaluru",
                                "state": "Karnataka",
                                "country": "India",
                                "area_code": "560038",
                                "locality": "indira nagar"
                            }
                        },
                        "contact": {
                            "phone": "9100061999",
                            "email": "agroutkarsh789@gmail.com"
                        }
                    },
                    "end": {
                        "instructions": {
                            "name": "Status for drop",
                            "short_desc": "2d25"
                        },
                        "person": {
                            "name": "Raja"
                        },
                        "location": {
                            "gps": "12.97056,77.64707",
                            "address": {
                                "name": "12th Main Rd HAL 2nd Stage Indiranagar Bangalore Urban ",
                                "city": "Bengaluru",
                                "state": "Karnataka",
                                "country": "IN",
                                "area_code": "560038"
                            }
                        },
                        "contact": {
                            "phone": "+919080739414",
                            "email": "dummyrgz77f@mystore5.com"
                        }
                    },
                    "tags": {
                        "@ondc/org/order_ready_to_ship": "no"
                    }
                }
            ],
            "quote": {
                "price": {
                    "currency": "INR",
                    "value": "42"
                },
                "breakup": [
                    {
                        "title": "Delivery Charge",
                        "price": {
                            "currency": "INR",
                            "value": "42"
                        },
                        "@ondc/org/item_id": "nextday",
                        "@ondc/org/title_type": "Delivery Charge"
                    }
                ]
            },
            "payment": {
                "type": "POST-FULFILLMENT",
                "@ondc/org/settlement_window": "PT2D",
                "@ondc/org/collection_amount": "902"
            },
            "@ondc/org/linked_order": {
                "items": [
                    {
                        "descriptor": {
                            "name": "UTKARSH PANTHER (PGR BASED FERTILIZER FOR EFFECTIVE FLOWERING)"
                        },
                        "category_id": "Packaged Commodities",
                        "quantity": {
                            "count": 1,
                            "measure": {
                                "value": 1,
                                "unit": "Kilogram"
                            }
                        },
                        "price": {
                            "currency": "INR",
                            "value": "860"
                        }
                    }
                ],
                "provider": {
                    "descriptor": {
                        "name": "Utkarsh Agro"
                    },
                    "address": {
                        "door": "3rd floor,",
                        "name": "agroutkarsh",
                        "ward": "indira nagar 12th main",
                        "building": "Just dogs Building",
                        "street": "12th main,",
                        "city": "Bengaluru",
                        "state": "Karnataka",
                        "country": "India",
                        "area_code": "560038",
                        "locality": "indira nagar"
                    }
                },
                "order": {
                    "id": "636631fa8d995cc72d302d25",
                    "weight": {
                        "value": 1,
                        "unit": "Kilogram"
                    }
                }
            }
        }
    }
}
```
## Logitic On_Confirm API

## About the API

## Sample Logistic On_Confirm Response payload:
```json
{
    "context": {
        "domain": "nic2004:60232",
        "country": "IND",
        "city": "std:080",
        "action": "on_confirm",
        "core_version": "1.0.0",
        "bap_id": "ondcpreprod.sellerapp.in",
        "bap_uri": "https://ondcpreprod.sellerapp.in/bapl/u/",
        "bpp_id": "ondc-preprod.loadshare.net",
        "bpp_uri": "https://ondc-preprod.loadshare.net/logistics/bpp",
        "transaction_id": "98d12b3a-1f83-4562-baa6-1660d8d5de62",
        "message_id": "966d3e9d-b2a6-4171-9fcf-e990a16f9ee1",
        "timestamp": "2022-11-05T09:50:54.046Z",
        "ttl": "PT30s"
    },
    "message": {
        "order": {
            "id": "636631fa8d995cc72d302d25",
            "state": "Accepted",
            "provider": {
                "id": "loadshare@ondc-preprod.loadshare.net"
            },
            "items": [
                {
                    "id": "nextday",
                    "category_id": "Next Day Delivery"
                }
            ],
            "fulfillments": [
                {
                    "id": "7ae63e5c-aaec-4f31-96fa-6b3c6fda2a7a",
                    "type": "Prepaid",
                    "state": {
                        "descriptor": {
                            "name": "Pending",
                            "code": "Pending"
                        },
                        "updated_at": "2022-11-05T09:50:54.046Z",
                        "updated_by": "ondc-preprod.loadshare.net"
                    },
                    "tags": {
                        "@ondc/org/order_ready_to_ship": "no"
                    }
                }
            ],
            "quote": {
                "price": {
                    "currency": "INR",
                    "value": "42"
                },
                "breakup": [
                    {
                        "title": "Delivery Charge",
                        "price": {
                            "currency": "INR",
                            "value": "42"
                        },
                        "@ondc/org/item_id": "nextday",
                        "@ondc/org/title_type": "Delivery Charge"
                    }
                ]
            }
        }
    },
    "error": null
}
```


## Logistic Cancel API

## About the API

## Sample Logistic Cancel request payload:
```json
{
    "context": {
        "domain": "nic2004:60232",
        "country": "IND",
        "city": "std:080",
        "action": "cancel",
        "core_version": "1.0.0",
        "bap_id": "ondcpreprod.sellerapp.in",
        "bap_uri": "https://ondcpreprod.sellerapp.in/bapl/u/",
        "bpp_id": "dev-ondc.shiprocket.in",
        "bpp_uri": "https://dev-ondc.shiprocket.in/",
        "transaction_id": "a9d9f6fe-7a53-4caa-a98a-5aabe19ce036",
        "message_id": "c035bc7d-6b47-483a-9d91-31d6eb67241b",
        "timestamp": "2022-11-05T09:23:42.453Z"
    },
    "message": {
        "order_id": "2022-10-05-823776",
        "cancellation_reason_id": "001"
    }
}
```

## Logitic On_Cancel API

## About the API

## Sample Logistic On_Cancel Response payload:
```json
{
    "context": {
        "domain": "nic2004:60232",
        "country": "IND",
        "city": "std:080",
        "action": "on_cancel",
        "core_version": "1.0.0",
        "bap_id": "ondcpreprod.sellerapp.in",
        "bap_uri": "https://ondcpreprod.sellerapp.in/bapl/u/",
        "bpp_id": "dev-ondc.shiprocket.in",
        "bpp_uri": "https://dev-ondc.shiprocket.in/",
        "transaction_id": "a9d9f6fe-7a53-4caa-a98a-5aabe19ce036",
        "message_id": "c035bc7d-6b47-483a-9d91-31d6eb67241b",
        "timestamp": "2022-11-05T09:23:43.710Z"
    },
    "message": {
        "order": {
            "id": "2022-10-05-823776",
            "state": "Cancelled",
            "fulfillments": [
                {
                    "id": "Fulfillment1-Cancelled",
                    "type": "Prepaid",
                    "tags": {
                        "AWB no": "",
                        "cancellation_reason_id": "001"
                    }
                }
            ]
        }
    },
    "error": null
}
```

