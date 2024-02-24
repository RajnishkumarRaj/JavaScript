const grade = 'E';

switch(grade)
    {
        case "A":
            console.log("Very good");
            break;
        case "B":
            console.log("Good keep learning");
            break;
        case "C":
            console.log("Need improvement");
            break;
        case "D":
        case "E":
            console.log("Not good");
            break;
        default:
            console.log("Invalid grade");
    }