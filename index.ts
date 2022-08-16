let firstName:string='max';
let age:number=22;
let active:boolean=true


// let names:string[] = ['1','2','3','4']
let names:string[] = ['bobby','daniel','zack']

enum studentTypes {
    pending,
    active,
    graduates,
    ta,
    teachers
}

const myStatus=studentTypes.graduates

// console.log(names)
// console.log(`my first name is ${firstName}`)
// console.log(myStatus)
// if (myStatus==studentTypes.graduates)
// console.log(`the student is graduated`)

// switch (Number(myStatus)){
//     case studentTypes.active:
//         console.log(' student is active ')
//         break;
//     case studentTypes.graduates:
//         console.log(' student is graduated ')
//         break;
//     case studentTypes.pending:
//         console.log(' student is pending')
//         break;
//     case studentTypes.teachers:
//         console.log(' these are teachers')
//         break;
// }

// let code :string | number=11

// console.log(code)

// function sum(arr: number[]){
  
// return arr.reduce((total:number, num:number)=>total+num
// )
// }

// let numbers: any[]=[1,2,3,4,5,6]

// console.log(sum(numbers))

let complexItem:any={name:'yours'}
complexItem={title:'professor'}
complexItem=9
// console.log(complexItem)

interface Human {
    name:string,
    age:number,
    height:number,
    bloodtype:string
}

const me :Human ={
    name:'max',
    age:22,
    height:65,
    bloodtype:'B'
}