from pydantic import BaseModel


class Products(BaseModel):
    id:int
    name:str 
    price:float
    in_stock:bool=True

pro_values={
    'id':101,
    'name':'Item1',
    'price':12.890,
    # 'in_stock':''
}
pros=Products(**pro_values)
print(pros)