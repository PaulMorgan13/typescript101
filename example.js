let grade 
let grade2
let test_total
 

grade = "85"
grade2 = 85 

test_total = 100 



let calcpercent = (studentGrade, testTotal)=>{
    let percentage =  studentGrade/testTotal 

    return `this is your percentage : ${percentage}`

} 


console.log(calcpercent(grade,test_total))