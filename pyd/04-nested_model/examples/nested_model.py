from pydantic import BaseModel #type:ignore
from typing import List,Optional


class Address(BaseModel):
    id:int
    location:str
    postal_code:str

class User(BaseModel):
    id:int
    name:str
    # Address will have the structure as defined above in Address class
    address:Address

