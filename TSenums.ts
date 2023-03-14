enum Month{
    jan, 
    feb,
    mar,
    apr,
    may,
    jun, 
    jul,
    aug,
    sep,
    oct,
    nov,
    dec   
} 


function isItSummer(month: Month){
    let isSummer:boolean 
    switch(month){
        case Month.jun: 
        case Month.jul: 
        case Month.aug:  
            isSummer = true 
            break;  

        default: 
            isSummer = false
        break
    }  
    return isSummer

}

console.log(isItSummer(Month.jun));
