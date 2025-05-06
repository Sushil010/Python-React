from pydantic import BaseModel,Field,field_validator,model_validator,computed_field #type:ignore



class Booking(BaseModel):
    user_id:int
    room_id:int
    nights:int=Field(...,ge=1)
    rate_per_night:float

    # @field_validator
    # def nt_valid(cls,v):
    #     if(v<1):
    #         raise ValueError("Invalid night value")
    #     return v
    
    @computed_field
    @property

    def total_amt(self)->float:
        return self.nights*self.rate_per_night