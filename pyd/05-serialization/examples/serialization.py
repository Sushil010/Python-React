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

