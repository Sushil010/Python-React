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

address=Address(
    id=1,
    location="Somewhere",
    postal_code="123 street"
)

user=User(
    id=1,
    name="Someone",
    address=address
)
comment=Comment(
    id="123one",
    name="asdf",
    replies=List[
        Comment(id="456two",name="ghjkl"),
        Comment(id="789three",name="qwer"),
    ]
)