let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 

    // for( let i = 0; i <= studentRecords.length; i++){
    //     arr = []
    //  var a = studentRecords[i].marks;
    //       arr.push(a)

    //       if(arr >50){
    //         console.log(arr)
    //       }
          
    // }
    //  let stdarr = studentRecords.map((a) => a.name.toUpperCase())
    // console.log(stdarr)
    
//    let stdarr = studentRecords.filter((a) => a.marks>50)
//    console.log(stdarr);



// let stdid = studentRecords.filter((a) =>a.id>120)

// let stdgre = stdid.filter((a) =>a.marks>50) 
// console.log(stdgre);

//  let summarks = studentRecords.reduce((a,b)=> a+=b.marks ,0)
//  console.log(summarks);

// let maxmarks = studentRecords.filter((a) => a.marks>50)
// let stdname = maxmarks.map((a) => a.name)

// let maxid = studentRecords.filter((a) => a.id>120)

// let stdsum = maxid.reduce((a,b) => a+=b.marks, 0)
// console.log(stdsum);


// let maxmarks = studentRecords.filter((a) => a.marks>50)
// let summ = maxmarks.reduce((a,b) => a += b.marks, 0)

// let below = studentRecords.filter((a)=>a.marks<50)
// let add = below.map((a)=>a.marks+15);
// let great = add.filter((a) => a>50)
// let summgr = great.reduce((a,b) =>a += b ,0)

// total = summgr + summ
stuarr =[]
function Student(name,classnm,rollno){
 this.stdname = name,
 this.stdclass = classnm,
 this.stdrollno = rollno
}
let std1 = new Student("Abhi",'Ea17', 01)
let std2 = new Student("sanjay",'Ea17', 02)
let std3 = new Student("Anurag",'Ea17', 03)
let std4 = new Student("Kamal",'Ea17', 04)
let std5 = new Student("Arun",'Ea17', 05)
let std6 = new Student("Ravi",'Ea17', 06)
stuarr.push(std1)
stuarr.push(std2)
stuarr.push(std3)
stuarr.push(std4)
stuarr.push(std5)
stuarr.push(std6)

console.log(stuarr);