// your own data here
var profileData = {
    "Name"  : "Dhiraj Salunke",
    "Email" : "dhirajraje113@gmail.com",
    "Bio"   : "I am a passionate django, web, flutter-firebase developer and a linux geek. Looking forward to work with the organization where I can use my knowledge and skills for its growth.",
    "Phone" : "+91 9923454467",
    "GitHub": "https://github.com/Dhirajraje",
    "LinkedIn"  : "https://www.linkedin.com/in/dhiraj-salunke-702564183/",
    "Instagram" : "https://instagram.com/_dhirajraje_",
    "Facebook"  : "https://www.facebook.com/dhirajraje.salunke",
}


yourName = document.getElementById('your-name');
bio = document.getElementById('bio');
phone = document.querySelector('#Phone a');
email = document.querySelector('#Email a');
github = document.querySelector('#Github a');
linkedIn = document.querySelector('#LinkedIn a');
instagram = document.querySelector('#Instagram a');
facebook = document.querySelector('#Facebook a');
resumeBlock = document.getElementById('resume-block');

document.title = profileData.Name;
yourName.innerHTML = profileData.Name;
bio.innerHTML = profileData.Bio;


//list data set

phone.title = profileData.Phone;
phone.href = "tel:"+profileData.Phone;

email.title = profileData.Email;
email.href = "mailto:"+profileData.Email;

github.title = profileData.GitHub;
github.href = profileData.GitHub;

linkedIn.title = profileData.LinkedIn;
linkedIn.href = profileData.LinkedIn;

instagram.title = profileData.Instagram;
instagram.href = profileData.Instagram;

facebook.title = profileData.Facebook;
facebook.href = profileData.Facebook;


// Resume block display
function showResume(){
    window.open('Assets/Resume.pdf');
}