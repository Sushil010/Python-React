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
    

class Signup(BaseModel):
    password:str
    conf_password:str

    @model_validator(mode='after')

    # reason of doing values.password instead of direct password,
    # this model_validator will run only after all above field validator runs 
    # therefore all values are referenced by using "." operator
    def mode_val(cls,values):
        if(values.password!=values.conf_password):
            raise ValueError("Mismatch Password")
        return values
        

class Products(BaseModel):
    price:float
    quantity:int

    @computed_field
    @property
    
    def total(self)->float:
        return self.price*self.quantity