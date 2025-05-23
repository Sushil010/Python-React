from pydantic import BaseModel


class User(BaseModel):
    id:int
    name:str
    is_active:bool

values={
    'id':101,
    'name':'Values',
    'is_active' : False
}

# unpacks dictionary to above function
users=User(**values)
print(users)