from pydantic import BaseModel #type:ignore
from typing import List
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
   tags:List[str]=[]

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


# model_dump will provide dictionary values to user
python_dict=user.model_dump()
print(python_dict)

print("<================================================>\n")

# model_dump_json will provide json file to user
python_json=user.model_dump_json()
print(python_json)