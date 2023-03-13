type Student = {
        student_id:number, 
        first_name:string,
        middle_name:string, 
        last_name:string,
        is_enrolled:boolean

}

type StudentGPA = {
    gpa_value:number

} 


type StudentwithGpa = Student & StudentGPA

let student_info = (info:Student): string =>{
    let enrolled = info.is_enrolled ? "" : "not"
    return `${info.first_name} ${info.last_name} is ${enrolled} enrolled`

}

console.log(student_info({
    student_id:13,
    first_name:"paul",
    last_name:"morgan",
    middle_name:"robert",
    is_enrolled:false

}))