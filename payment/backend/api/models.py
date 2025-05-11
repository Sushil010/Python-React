# POST: to create data.
# GET: to read data.
# PUT: to update data.
# DELETE: to delete data.


# from django.db import models
from pydantic import BaseModel,Field#type:ignore
from fastapi import FastAPI #type:ignore
from typing import Literal,Optional
from sqlmodel import SQLModel,create_engine,Session #type:ignore


app=FastAPI()
# Create your models here.
class PaymentRequest(SQLModel,table=True):
    id:Optional[int]=Field(primary_Key=True)
    amount:float
    currency:Literal['NPR','USD']=Field(...,description='3-letter currency code')
    source:Literal['esewa','Khalti']=Field(...,description='Payment Provider')
    remarks:str=Field(...,min_length=3,max_length=200,description='Min 3 letter required')

#Define databse name 
file_name="database.db"
engine=create_engine(f"sqlite:///{file_name}",echo=True)

#Create database table
def create_table():
    SQLModel.metadata.create_all(engine)


@app.on_event("startup")
def onstartup():
    create_table()

@app.get("/")
def read_root():
    return{"Hello":"User"}


@app.post("/payments")
# FastAPI auto-validates request body using this model
def creatrepayment(payment:PaymentRequest):
    return {"status":"success", "data":payment}



# data will vanish won't be received so better to store in some database so SQL is used in
# our case.
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