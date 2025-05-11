# from django.db import models
from pydantic import BaseModel,Field#type:ignore
from fastapi import FastAPI #type:ignore
from typing import Literal


app=FastAPI()
# Create your models here.
class PaymentRequest(BaseModel):
    amount:float
    currency:Literal['NPR','USD']=Field(...,description='3-letter currency code')
    source:Literal['esewa','Khalti']=Field(...,description='Payment Provider')
    remarks:str=Field(...,min_length=3,max_length=200,description='Min 3 letter required')


@app.get("/")
def read_root():
    return{"Hello":"User"}


@app.post("/payments")
def creatrepayment(payment:PaymentRequest):
    return {"status":"success", "data":payment}

@app.get("/datas")
def get_datas(payment:PaymentRequest):
    return{f"User has entered:{payment.amount} amount value"}




# users=PaymentRequest(
#     amount=42323.12,
#     currency='NPR',
#     source='Khalti',
#     remarks='pay'
# )

# print(users)