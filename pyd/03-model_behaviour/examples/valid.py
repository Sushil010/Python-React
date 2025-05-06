from pydantic import BaseModel,field_validator,model_validator, computed_field ,#type:ignore


class User(BaseModel):
    username:str

    @field_validator('username')
    # cls is the name of class that we are gonna pass and v is the value like username 
    # in this case
    def username_length(cls,v):
        if len(v) < 4:
            raise ValueError("Must have more than 4 length")
        return v