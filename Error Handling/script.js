//Exception Handling

try{
    num = prompt("Enter a number")
    if(num==='')
        throw 'Cannot be empty'
    if(isNaN(num))
        throw "Enter a valid Number"
    console.log(num**2)
}
catch(error){
    console.log(error)
}
finally{
    console.log('bye')
}
