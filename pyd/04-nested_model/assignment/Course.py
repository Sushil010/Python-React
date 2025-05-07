
# Course has modules
# Modules has lessons


from pydantic import BaseModel #type:ignore
from typing import List,Optional

class Lessons(BaseModel):
    id:int
    name:str

class Module(BaseModel):
    module_id:int
    mod_name:str
    lessons=List[Lessons]


class Course(BaseModel):
    course_id:int
    name:str
    module:List[Module]