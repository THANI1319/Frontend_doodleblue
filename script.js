//27/10/2026 session

/*let a=1;
console.log(a)
let b=++a;
console.log(b)
let c=a++;
console.log(c)
console.log(a+b+c)*/
//----------------------------------------------
/*const a=5
const b=5
const c=a-b
const d=c
console.log(d)
*/
//------------------------------------------------
//console.log(typeof [])

/*let user={name:"thani",age:20}
const {name} = user
console.log(name)
*/
//------------------------------------------------
/* const a="5"
const b="10"
const c=(b+a)-(a+b) //use + and - operators to convert string to number
console.log(c) */
//------------------------------------------------
/* const a="5"
const b="10"
const c=(Number(b)*a)+(a*b) //use + and - operators to convert string to number
console.log(c)  */
//------------------------------------------------
/* const a="5"
const b="10"
const c=(Number(b)*a)+(a+b) 
console.log(c) 
 */
//------------------------------------------------
/* const a="5"
const b=5
const c=a==b
console.log(c)  */
//------------------------------------------------
/* const a="5"
const b=5
const c=a===b
console.log(c)  */

/* console.log("1"===1)//false */
//------------------------------------------------


// 28/10/2026 session

/* console.log("1"===String(1))//true */

/* let name=["thani","kumar","siva","bas"]
const newname=name.map((name,index)=>{
    return `index of this name ${name} is ${index}`
})
console.log(newname)
console.log(name) */

/* let Numbers=[1,2,3,4,5]
const EvenNumbers=Numbers.filter((Numbers,index )=>Numbers%2==0)
console.log(EvenNumbers)
console.log(Numbers)
 */


/* console.log("Find Method")
const data=[
    {id:1,name:"thani",age:20},
    {id:2,name:"kumar",age:25},
    {id:3,name:"siva",age:30},
    {id:4,name:"bas",age:35}
]
const newdatabyid=data.find((user)=>user.id==3)
console.log(newdatabyid.name,newdatabyid.age)

const newdatabyname=data.find((user)=>user.name=="kumar")
console.log(newdatabyname.id,newdatabyname.age) */

/* let name=[1,2,3,4,5]
const num=name.find((num)=>num==2)
console.log(num) */

/* const data=[
    {id:1,name:"thani",age:20},
    {id:2,name:"kumar",age:25},
    {id:3,name:"siva",age:30},
    {id:4,name:"bas",age:35},
    {id:5,name:"bala",age:24},
     {id:6,name:"santhosh",age:29},
    {id:7,name:"sudharsan",age:23},
    {id:8,name:"shiva",age:26},
    {id:9,name:"basuu",age:36},
    {id:10,name:"balli",age:27}

]
const result=data.find((data)=>data.id==5)
console.log(result.name) 
const findindexarray=data.findIndex((data)=>data.id==9)
console.log(findindexarray) */


/* const word=["a","b","c","d","e"]
const count=word.reduce((acc,n)=>acc+"Letter:")
console.log(count) */