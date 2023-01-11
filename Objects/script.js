let item = {
  name:'phone',
  price:25000,
  quantity:1,
  categories:['electronics','phones'],
  dimensions:{
    length:7,
    breadth:3.5,
    height:.5
  }
}
console.log(item)
console.log(item.categories[0])
console.log(item.dimensions.length)

//another way to create object
let item2 = new Object();
item2.name = 'charger'
item2.price = 700
item2.quantity = 1
console.log(item2)

//accessing object
//dot notation
console.log(item.price)
item.price = 26000
console.log(item.price)
//adding new property
item.returnable = true
console.log(item)

//square bracket notation
console.log(item['price'])
item['returbale'] = false

let key = 'price'
item[key] = 27500
item.key = 28000 //doesn't work
console.log(item)

item = {
  name: "phone", 
  quantity:1,
  price:25000,
  buy: function(){
    console.log('item added to cart')
  },
  addToList(){
    console.log('item added to list')
  }
}
item.buy()
item.addToList()
item.buy()
item.addToList()
item.buy()
item.addToList()
item.buy()
item.addToList()
