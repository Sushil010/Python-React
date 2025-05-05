from pydantic import BaseModel,Field #type:ignore
from typing import List, Dict, Optional

#For utilizing conditions while entering values we use Field model.
class Employee(BaseModel):
    id:int
    # the 3 dots at beginning indicates that it is a required field
    name:str = Field(
        ...,
        min_length=3,
        max_length=50,
        description="Enter min 3char",
        example="John Doe"
        )
    department:Optional[str]='General'
    salary:float = Field(...,ge=10000)
    

