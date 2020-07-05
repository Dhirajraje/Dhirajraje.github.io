// your own data here
var profileData = {
    "Name"  : "Dhiraj Salunke",
    "Email" : "dhirajraje113@gmail.com",
    "Bio"   : "I am a passionate django-web flutter-firebase developer and a linux geek. Looking forward to work with organization where I can use my knoledge and skills for organizations groth and my own developement.",
    "phone" : "+91 9923454467",
    "GitHub": "https://github.com/Dhirajraje",
    "LinkedIn"  : "https://www.linkedin.com/in/dhiraj-salunke-702564183/",
    "Instagram" : "https://instagram.com/_dhirajraje_"
}


yourName = document.getElementById('your-name');
bio = document.getElementById('bio');


yourName.innerHTML = profileData['Name'];
bio.innerHTML = profileData['Bio'];