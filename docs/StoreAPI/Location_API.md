---
sidebar_label: 'Location API'
sidebar_position: 3
---

# Care Commerce Location API
This document aims to enable developers to work with the Location API frameworks such as Add Location, Update Location, Get location by Id, GetAll location by Id and Delete location in the Care Commerce Application. Use this API to Location details on Care Commerce.

## About this API
This API aims to enable developers to create new locations in  the  Care Commerce.

## 1. Add Location:
### 1.1 Scope:

| Scopes  | Details |
|---------|-----|
| Method: | POST |
|Required Parameters:	| Need Location Details |
|Url: | /api/sellerapp/v1/store/{storeId}/location |
|Description: 	|Add location API is use to add a store location details.|

### 1.2.UI Design:


### 1.3.API: 
#### 1.3.1. API Request Format:

{  
       "gps":{   
            "log":”long”,  
            “lati”:”long”  
                   },  
        “store”:{  
           “branch_name”:”string”  
                      },  
       "address":{  
        "name":"string",  
        "locality":"string",  
        "city":"string",  
        "country":"string",  
        "postal_code":"long"  
    }  
}  

####  1.3.2. API Request Sample Data:
Request Body:  
{  
    "gps":{  
         "13.06696502”,  
          “80.26705667"  
            },  
      “store”:{  
            “branch_name”:”legend”  
                },  
      "address":{  
        "name":"Chaicup",  
        "locality":"Egmore",  
        "city":"Chennai",  
        "country":"India",  
        "postal_code":"631210"  
    }  
}  

####  1.3.3. API ResponseFormat:
{  
    "id":"uuid",  
    "gps":{   
                                                                     “log”:”long”,  
                                                                      “lat”:”long”  
     },  
 “store”:{  
  “branch_name:”string”  
    },  
    "address":{  
        "name":"string",  
 "locality":"string",  
 "city":"string",  
 "country":"string",  
 "postal_code":"long"  
    }  
}  
Return status code 201 is a location created

####  1.3.4. API Response Sample Data:
Response Body:
{  
     "id":"9150538",  
     "gps":{  
     “log":”13.06696502”,  
      “lat”:”80.26705667"  
           },  
      “store”:{  
            “branch_name”:”legend”  
             },  
     "address":{  
        "name":"Chaicup",  
        "locality":"Egmore",  
        "city":"Chennai",  
        "country":"India",  
        "postal_code":"631210"  
    }  
}  


### 1.4.Database:
  Database detail explanation. To refer this link   [click here](https://docs.google.com/document/d/1C6xy2633cWnq-ni3hE_pfGM4UXKeHBx5_TRQRhkeyEs/edit#heading=h.uhaum673rpd2)

### 1.5. Authentication and Authorization:
1.Care commerce admin can add the store serving location details.
2.Care commerce admin set a privilege to the store owner can add the store location details. 
3.If store owner have privilege to given access store user can add the store location details. 

### 1.6.Business Logic:
   1. Store serving  location should not be same.
   2. Care commerce admin or store owner can add the store location details.
   3. Care commerce can provide service only for onboarded stores.
   4. If store can’t onboard care commerce should not provide service.
   5. Care commerce admin or store owner can add postal code in there location.
   6 . store user have the privilege to add postal code in there location.   

### 1.7.Swagger Spec:	 
1. To see the Swagger Spec [click here](https://docs.google.com/document/d/1M2TUuvbqhAt2uC1fKM7q5B4LGQObKl5Tjkwi2mNSmEI/edit)  
2. In the above link have JSON data to copy and paste the JSON data here 
(https://editor.swagger.io/)  (Draft swagger)  


### 1.8 Validation
1. Unique id for location should not empty.
2. GPS should not be empty.
3. Address should not be empty and must have a string.
4. Locality should not be empty and must have a string.
5. City should not be empty and must have a string.
6. Country not be empty and must have a string.
7. Store name should be unique not a empty and must have string.  


## 2. Update Location:
### 2.1 Scope:

| Scopes  | Details |
|---------|-----|
|Method:  | POST |
|Required Parameters:	|Need Location Details|
|Url:|/api/sellerapp/v1/store/{storeId}/location |
|Description: 	| Update  location API is use to change a store location details. Use the update location API  to update one or more location field values. In the request, provide only the fields you want to update.|

### 2.2.UI Design:

If user get the GPS details(lat,lang) automatically get Address details from Google API.


### 2.3.API: 
#### 2.3.1. API Request Format:

{  
       “store_id”:”uuid”,  
      "gps":{  
                                                                            “log”:”long”,  
                                                                            “lat”:”long”  
     }  
 “store”:{  
      “branch_name:”string”  
    }  
       "address":{  
        "name":"string",  
        "locality":"string",  
        "city":"string",  
        "country":"string",          
                "postal_code":"long"  
    }  
}  

#### 2.3.2. API Request Sample Data:
Request Body:  
{  
   “store_id”:”12133”  
   "gps":{  
         "13.06696502”,  
          “80.26705667"  
            },  
      “store”:{  
            “branch_name”:”legend”  
                }  
    "address":{  
        "name":"Chaicup",  
        "locality":"Egmore",  
        "city":"Chennai",  
        "country":"India",       
        "postal_code":"631210"  
    }  
}  

#### 2.3.3. API ResponseFormat:
{  
    "id":"uuid",  
    "gps":{   
                                                                     “log”:”long”,  
                                                                      “lat”:”long”  
     }  
 “store”:{  
  “branch_name:”string”  
    }  
    "address":{  
        "name":"string",  
 "locality":"string",  
 "city":"string",  
 "country":"string",  
 "postal_code":"long"  
    }  
}  
Return status code 201 is a location created  

#### 2.3.4. API Response Sample Data:
Response Body:  
{  
     "id":"9150538",  
     "gps":{  
     “log":”13.06696502”,  
      “lat”:”80.26705667"  
           }  
      “store”:{  
            “branch_name”:”legend”  
             }  
     "address":{  
        "name":"Chaicup",  
        "locality":"Egmore",  
        "city":"Chennai",  
        "country":"India",  
        "postal_code":"631210"  
    }  
}  


### 2.4.Database:
  Database detail explanation. To refer this link [click here](https://docs.google.com/document/d/1C6xy2633cWnq-ni3hE_pfGM4UXKeHBx5_TRQRhkeyEs/edit?usp=sharing)

### 2.5. Authentication and Authorization:
1.Care commerce admin can update the all store serving location details.  
2.Care commerce admin set a privilege to the store owner can update the store location details.     
3.If store owner have privilege to given access store user can update the store location details.   
###  2.6.Business Logic:
   1.Store serving  location should not be same.  
   2.Care commerce admin or store owner can change the postal code in there location.  
   3. store user have privilege to modify the address and location details  in there location.   
### 2.7.Swagger Spec:	 
  
1. To see the Swagger Spec [click here](https://docs.google.com/document/d/1M2TUuvbqhAt2uC1fKM7q5B4LGQObKl5Tjkwi2mNSmEI/edit?usp=sharing)  
2. In the above link have JSON data to copy and paste the JSON data here (https://editor.swagger.io/)  (Draft swagger)  



###  2.8 Validation
 1. Unique id for location should not empty.
2. GPS should not be empty.
3. Address should not be empty and must have string 
4. Locality should not be empty and must have string
5. City should not be empty and must have string
6. Country not be empty and must have string.
7. Store name should be unique not a empty and must have string.  



## 3. Get Location by Id API:
### 3.1 Scope:

| Scopes  | Details |
|---------|-----|
|Method:  | GET |
|Required Parameters:	|Need Location Details|
|Url:|/api/sellerapp/v1/store/{storeId}/location |
|Description: 	| Get location API is use to view the particular store location detials.|

### 3.2.UI Design:

 If user get the gps details(lat,lang) automatgically get Address details from Google API.



### 3.3.API:  
####  3.3.1. API Request Format:

{  
      "gps":{  
             "log":”long”,  
             “lati”:”long”   
              }  
       “store”:{  
              branch_name:”string”   
               }  
       "address":{  
        "name":"string",  
        "locality":"string",  
        "city":"string",  
        "country":"string",  
        "postal_code":"long"  
    }  
}  

####  3.3.2. API Request Sample Data:
Request Body:
{  
     "gps":{  
         "13.06696502”,  
          “80.26705667"  
            },  
      “store”:{  
            “branch_name”:”legend”  
                }  
    "address":{  
        "name":"Chaicup",  
        "locality":"Egmore",  
        "city":"Chennai",  
        "country":"India",    
        "postal_code":"631210"  
    }  

}  

####  3.3.3. API ResponseFormat:
{  
   "id":"uuid",  
       "gps":{  
             "log":”long”,  
             “lati”:”long”  
              },  
       “store”:{  
              branch_name:”string”   
               },  
    "address":{  
          "name":"string",  
  "locality":"string",  
  "city":"string",  
  "country":"string",  
  "postal_code":"long"  
    }  
}  
Return status code 200 is a location created  

####  3.3.4. API Response Sample Data:
Response Body:  
{  
     "id":"9150538",  
     "gps":{  
         "13.06696502”,  
          “80.26705667"  
            },  
      “store”:{  
            “branch_name”:”legend”  
                },  
     "address":{  
        "name":"Chaicup",  
        "locality":"Egmore",  
        "city":"Chennai",  
        "country":"India",  
        "postal_code":"631210"  
    }  
}  

 ### 3.4.Database:
   Database detail explanation. To refer this link [click here](https://docs.google.com/document/d/1C6xy2633cWnq-ni3hE_pfGM4UXKeHBx5_TRQRhkeyEs/edit?usp=sharing)

 ### 3.5. Authentication and Authorization:
1.Care commerce admin can get the store serving location details.
2.Care commerce admin set a privilege to the store owner can get the store location details. 
3.If store owner have privilege to given access store user can get the store location details.
###  3.6.Business Logic:
   1.Care commerce admin or store owner can view the particular store location details.
   2.Store user have privilege to view  the particular store location details.
   3.Care commerce admin or store owner can get the particular postal code in there location.
### 3.7.Swagger Spec:	 
1. To see the Swagger Spec [click here](https://docs.google.com/document/d/1M2TUuvbqhAt2uC1fKM7q5B4LGQObKl5Tjkwi2mNSmEI/edit?usp=sharing)
2. In the above link have JSON data to copy and paste the JSON data here (https://editor.swagger.io/)  (Draft swagger)  


###  3.8 Validation
 1. Unique id for location should not empty.
2. GPS should not be empty.
3. Address should not be empty and must have string. 
4. Locality should not be empty and must have string.
5. City should not be empty and must have string.
6.  Country not be empty and must have string.
7. Store name should be unique not a empty and must have string.    
   


## 4. GetAll Location by Id API:
### 4.1 Scope:

| Scopes  | Details |
|---------|-----|
|Method:  | GET |
|Required Parameters:	|Need Location Details|
|Url:|/api/sellerapp/v1/store/{storeId}/location |
|Description: 	| Getall location API is use to get the all store serving location detials.|

### 4.2.UI Design:

 If user get the gps details(lat,lang) automatgically get Address details from Google API.


### 4.3.API: 
####  4.3.1. API Request Format:

{ 
      "gps":{  
             "log":”long”,  
             “lati”:”long”  
              }  
       “store”:{  
              branch_name:”string”   
               }  
       "address":{  
        "name":"string",  
        "locality":"string",  
        "city":"string",  
        "country":"string",  
        "postal_code":"long"  
    }  
}  

####  4.3.2. API Request Sample Data:

Request Body:  
{  
     "gps":{  
         "13.06696502”,  
          “80.26705667"  
            },  
      “store”:{  
            “branch_name”:”legend”  
                }  
    "address":{  
        "name":"Chaicup",  
        "locality":"Egmore",  
        "city":"Chennai",  
        "country":"India",      
        "postal_code":"631210"  
    }  
}  

####  4.3.3. API ResponseFormat:
{  
    "id":"uuid",  
    "gps":{  
             "log":”long”,  
             “lati”:”long”  
              }  
     “store”:{  
              “branch_name”:”string”  
               }  
    "address":{  
          "name":"string",  
  "locality":"string",  
  "city":"string",  
  "country":"string",  
  "postal_code":"long"  
    }  
}  
Return status code 200 is a location created

####  4.3.4. API Response Sample Data:
Response Body:  
{  
     "id":"9150538",  
      "gps":{  
         "13.06696502”,  
          “80.26705667"  
            },  
      “store”:{  
            “branch_name”:”legend”  
                }  
    "address":{  
        "name":"Chaicup",  
        "locality":"Egmore",  
        "city":"Chennai",  
        "country":"India",       
        "postal_code":"631210"  
}  

### 4.4.Database:
   Database detail explanation. To refer this link [click here](https://docs.google.com/document/d/1C6xy2633cWnq-ni3hE_pfGM4UXKeHBx5_TRQRhkeyEs/edit?usp=sharing)

### 4.5. Authentication and Authorization:
1.Care commerce admin can get the all store serving location details.
2.Care commerce admin set a privilege to the store owner can getAll the store location details. 
3.If store owner have privilege to given access store user can getAll the store location details. 
### 4.6.Business Logic:
   1.Care commerce admin or store owner can view the all store serving location.
   2.Store user have privilege to view  the all store location details.
   3.Care commerce admin or store owner can view the all postal code in there location.
   4. Get order confirmation form to the store owner.
### 4.7.Swagger Spec:	 
1. To see the Swagger Spec [click here](https://docs.google.com/document/d/1M2TUuvbqhAt2uC1fKM7q5B4LGQObKl5Tjkwi2mNSmEI/edit?usp=sharing)
2. In the above link have JSON data to copy and paste the JSON data here (https://editor.swagger.io/)  (Draft swagger)  

### 4.8 Validation:
 1. Unique id for location should not empty.
2. GPS should not be empty.
3. Address should not be empty and must have string.
4. Locality should not be empty and must have string.
5. City should not be empty and must have string.
6.  Country not be empty and must have string.
7. Store name should be unique not a empty and must have string.   



## 5. Delete Location:

### 5.1 Scope:
| Scopes  | Details |
|---------|-----|
|Method:  | GET |
|Required Parameters:	|Need Location Details|
|Url:|/api/sellerapp/v1/store/{storeId}/location |
|Description: 	| Delete location API is use to delete the location detials.|


### 5.2.UI Design:



### 5.3.API: 
#### 5.3.1. API Request Format:

{  
        "store_id":"uuid",  
    "gps":{  
             "log":”long”,  
             “lati”:”long”  
              },  
     “store”:{  
              “branch_name”:”string”  
               },  
        "address":{  
         "name":"string",  
  "locality":"string",  
  "city":"string",  
  "country":"string",  
  "postal_code":"long"  
    }  
}  

####  5.3.2. API Request Sample Data:
Request Body:  
{  
   “store_id”:”12133”  
   "gps":{  
         "13.06696502”,  
          “80.26705667"  
            },  
      “store”:{  
            “branch_name”:”legend”  
                },  
    "address":{  
        "name":"Chaicup",  
        "locality":"Egmore",  
        "city":"Chennai",  
        "country":"India",      
            "postal_code":"631210"  
    }  
}  

####  5.3.3. API ResponseFormat: 
{  
    "id":"uuid",  
    "gps":{  
             "log":”long”,  
             “lati”:”long”  
              }   
     “store”:{  
              “branch_name”:”string”  
               }  
    "address":{  
          "name":"string",  
  "locality":"string",  
  "city":"string",  
  "country":"string",  
  "postal_code":"long"  
    }  
}  
Return status code 201 is a location created

####  5.3.4. API Response Sample Data:
Response Body:  
{  
     "id":"9150538",  
      "gps":{  
         "13.06696502”,  
          “80.26705667"  
            },  
      “store”:{  
            “branch_name”:”legend”  
                }  
    "address":{  
        "name":"Chaicup",  
        "locality":"Egmore",  
        "city":"Chennai",  
        "country":"India",       
        "postal_code":"631210"  
}  

###  5.4.Database:
   Database detail explanation. To refer this link [click here](https://docs.google.com/document/d/1C6xy2633cWnq-ni3hE_pfGM4UXKeHBx5_TRQRhkeyEs/edit?usp=sharing) 

### 5.5. Authentication and Authorization:
1. Care commerce admin or store owner can delete the store  location.
2. If store owner have privilege to given access store user  can delete the store location detials.

### 5.6.Business Logic:
   1. Care commerce admin or store owner can delete the postal code in there location.
   2. Store user have privilege to delete the postal code in there location.
   3. If More than one store haveing serving location is same it should be deleted.
   4. Store user have privilege to delete the store location.  

### 5.7.Swagger Spec:	 
1. To see the Swagger Spec [click here](https://drive.google.com/file/d/1jvfHZdpZBrFI0s_P7J74ivzMlqyEfgws/view?usp=sharing)  
2. In the above link have JSON data to copy and paste the JSON data here (https://editor.swagger.io/) (Draft swagger)  


 ###  5.8 Validation
 1. Unique id for location should not empty.
2. GPS should not be empty.
3. Address should not be empty and must have string.
4. Locality should not be empty and must have string.
5. City should not be empty and must have string.
6.  Country not be empty and must have string.
7. Store name should be unique not a empty and must have string. 




