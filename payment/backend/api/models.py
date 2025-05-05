# from django.db import models
from pydantic import BaseModel, Field


# Create your models here.
class PaymentRequest(BaseModel):
    amount: