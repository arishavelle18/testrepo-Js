let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
//if else if else

if(userRole === "admin"){
    accessLevel = "Full access granted";
}else if(userRole === "manager"){
    accessLevel = "Limited access granted";
}else{
    accessLevel =  "No access granted";
}

//if else nested
if(isLoggedIn){
    if(userRole === "admin"){
        userMessage = "Welcome, Admin!";
    }else if(userRole === "manager"){
        userMessage = "Welcome, User!";
    }
}else{
    userMessage = "Please log in to access the system.";
}

let userType = "subscriber";
let userCategory;
//switch case
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ?  "Authenticated" :"Not Authenticated";

//dietary service
let person="Employee";
let userAccessLevel;
switch(person){
    case "Employee":
        userAccessLevel ="Authorized to access Dietary Services";
        break;
    case "Enrolled Member":
        userAccessLevel ="Authorized to access Dietary Services and one-on-one interaction with a dietician";
        break;
    case "Subscriber":
        userAccessLevel ="Authorized to have partial access to facilitate Dietary Services only";
        break;
    case "Non-Subscriber":
        userAccessLevel ="Enroll or at least subscribe first to avail this facility";
        break;
}


console.log("Access Level:",accessLevel);
console.log("User Message:",userMessage);
console.log("User Category:",userCategory)
console.log("Authentication Status:",authenticationStatus);
console.log("Dietary Service Access:",userAccessLevel);