from pydantic import BaseModel #type:ignore
from typing import List,Optional,Dict

class Carts(BaseModel):
    id:int
    items:List[str]
    quantities:Dict[str:int]

class Blog(BaseModel):
    title:str
    content:str
    image:Optional[str]=None