// function Book1(title,name,year){
//     this.title = title;
//     this.name = name;
//     this.year = year;
//     this.Bookinfo=function(){
//            return`${this.title} and author is ${this.name} and publice year ${this.year}`
//     }
// }
// const object1 = new Book1("Rich and poor dade","xyz",2020)
// const object2 = new Book1("alibaba","xyz1",2010)
// const object3 = new Book1("tanalirama","xyz2",2015)

// const detail1=object1.Bookinfo()
// const detail2=object2.Bookinfo()
// const detail3=object3.Bookinfo()

// console.log(detail1)
// console.log(detail2)
// console.log(detail3)

function Car(make,model,year,color){
    this.make = make;
    this.model = model;
    this.year=year;
    this.color = color;
    this.start = function(){
        console.log(`Starting the ${this.make} ${this.model}`)
    }
    this.stop = function(){
        console.log(`Stop the ${this.make} ${this.model}`)
    }
}
const car1 = new Car("Toyota","Camry",2020,"Silver")
car1.start()
car1.stop()

const a = new Array()
console.log(a)

const arra = [1,2,3,4,5,6]
const findIndex1 = arra.reverse()
console.log(findIndex1)
function iterate(e){
    console.log(e)
}

const finalRes = findIndex1.forEach(iterate)
console.log(finalRes)
console.log(findIndex1)
const arr= [1,2,3,4,5,6,7]
const res1 = arr.length
console.log(res1)

const res = arr.join(" * ")
console.log(res)