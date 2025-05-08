from pydantic import BaseModel #type:ignore
from typing import Lists
from datetime import datetime



class Address(BaseModel):
   street:str
   city:str
   zipcode:str


class User(BaseModel):
   id:int
   name:str
   isActive:bool=True
   email:str
   address:Address
   datetime:datetime
   tags:Lists[str]=[]

user=User(
   id=1,
   name='Random_indv',
   isActive=True,
   email="Random@gmail.com",
   address=Address(
      street="Anywhere",
      city="Random_place",
      zipcode="124asdf"
   ),
   datetime=datetime(2025,3,12,14,53),
   tags=["subscribed","Not-Subscribed"]
)
