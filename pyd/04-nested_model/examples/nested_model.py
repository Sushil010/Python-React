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

class Comment(BaseModel):
    id:int
    name:str
    # Looks like this structure 
    # replies->optional->list[[id,name,replies],[id,name,replies].......]
    replies:Optional[List['Comment']]=None


Comment.model_rebuild()