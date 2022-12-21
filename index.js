function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

saturdayFun('bathe my dog')

function mondayWork(job = 'go to the office'){
    return `This Monday, I will ${job}.`
}

mondayWork('work from home')

function wrapAdjective(exam = "*"){
    return function ex(guess = 'special'){
        return `You are ${exam}${guess}${exam}!`}
    
}