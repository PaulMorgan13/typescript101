let grade:string 
let grade2:number
let test_total:number
 

grade = "85"
grade2 = 85 

test_total = 100 



let calcpercent = (studentGrade:number, testTotal:number) =>{
    let percentage =  studentGrade/testTotal 

    return `this is your percentage : ${percentage} : yay`

} 


console.log(calcpercent(grade2,test_total)) 


export{}