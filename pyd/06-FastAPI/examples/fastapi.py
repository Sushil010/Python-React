from fastapi import FastAPI, Depends
from pydantic import BaseModel, EmailStr #type:ignore


app=FastAPI()



class User(BaseModel):
    name:str
    Email:EmailStr
    password:str


class Settings(BaseModel):
    app_name:str="App Test"
    admin_mail:str="admin@gmail.com"


def getsettings():
    return Settings()

@app.post('/signup')
def signup(user:User):
    return {'message':f"{User.name} has signed in successfully"}

# the below is done so to make any changes or if any value is to be retreived
@app.get('/settings')
def get_endpoint(settings: Settings=Depends(getsettings)):
    return settings