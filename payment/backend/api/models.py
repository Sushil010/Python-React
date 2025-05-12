# POST: to create data.
# GET: to read data.
# PUT: to update data.
# DELETE: to delete data.


# from django.db import models
# from pydantic import BaseModel,Field#type:ignore
from fastapi import FastAPI #type:ignore
from typing import Literal,Optional
from sqlmodel import SQLModel,create_engine,Session, Field  #type:ignore
from enum import Enum 

app=FastAPI()
# Create your models here.

class Currency(str, Enum):
    NPR='NPR',
    USD='USD'

class Source(str,Enum):
    esewa="esewa",
    khalti="khalti"



class PaymentRequest(SQLModel,table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    amount:float
    
    # Use below in case of pydantic and BaseModel as it supports Literal but not
    # with SQLModel
    # currency:Literal['NPR','USD']=Field(...,description='3-letter currency code')
    currency:Currency=Field(...,description='3-letter currency code')
    source:Source=Field(...,description='Payment Provider')
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
def createpayment(payment:PaymentRequest):
    with Session(engine) as session:
        session.add(payment)
        session.commit()
        session.refresh(payment)
    return {"status":"success", "data":payment}



# data will vanish won't be received so better to store in some database so SQL is used in
# our case.
# won't work because session has to be established in below to get all datas.
# @app.get("/datas")
# def get_datas(payment:PaymentRequest):
#     return{f"User has entered:{payment.amount} amount value"}




# Search by all payment methods
# payment is list not an object so cannot access like above 
@app.get("/payments")
def getPayment():
    with Session(engine) as session:
        payments=session.query(PaymentRequest).all()
        # amount=[payment.amount for payment in payments]
    return{f"User entered following amount:{payments}"}


# retreive by specific payment id 
# @app.get("/payments/{payment_id}")
# def getPayment(payment_id:int):
#     with Session(engine) as session:
#         payments=session.get(PaymentRequest,payment_id)
#         if not payment:
#             return{f"Details not found"}
#         return{f"User entered follwing details:{payments}"}

# users=PaymentRequest(
#     amount=42323.12,
#     currency='NPR',
#     source='Khalti',
#     remarks='pay'
# )

# print(users)