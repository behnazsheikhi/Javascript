// && and 
// || or 
// === equivant in type and value
// !== not equivant in type and value

//  if -- else if -- else

function time(){
    var time=8;
    if (time<10){
        document.getElementById('lblResult').innerHTML="Good Morning!";
    }else if (time<13){
        document.getElementById('lblResult').innerHTML="Good noon!";
    }else if (time<18){
        document.getElementById('lblResult').innerHTML="Good Afternoon!";
    }
    else if (time<20){
        document.getElementById('lblResult').innerHTML="Good Evening!";
    }else{
        document.getElementById('lblResult').innerHTML="Good Night!";
    }
}


// switch case 

function dayOfTheWeek(){
    var currentDay= new Date().getDay();
    switch (currentDay)
    {
        case 0:
            {

            document.getElementById('lblResult').innerHTML="Sunday";
            break;
        }
        case 1:{
            document.getElementById('lblResult').innerHTML="MOnday";
            break;
        }
        case 2:{
            document.getElementById('lblResult').innerHTML="Tuesday";
            break;
        }
        case 3:{
            document.getElementById('lblResult').innerHTML="Wednesday";
            break;
        }
        case 4:{
            document.getElementById('lblResult').innerHTML="Thursday";
            break;
        }
        case 5:{
            document.getElementById('lblResult').innerHTML="Friday";
            break;
        }
    }
}

// switch case 
a=5
switch (a){
    case 1:{

    }
    case 2:{
        
    }
    case 3:{
        
    }
    case 4:{
        
    }
    default:
        {
            alert('not Found')
        }
}