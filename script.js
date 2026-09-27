const profile=document.querySelector(".profile")
const username=document.querySelector(".name")
const email=document.querySelector(".email")
const country=document.querySelector(".country")
const refresh=document.querySelector(".refresh")

async function getdata(){
    const url="https://randomuser.me/api/";
    const response=await fetch(url);
    const data=await response.json();
    console.log(data);
    profile.src=data.results[0].picture.large;
    let firstname=data.results[0].name.first;
    let lastname=data.results[0].name.last;
    username.innerHTML=`${firstname} ${lastname}`;
    email.innerHTML=data.results[0].email;
    country.innerHTML=data.results[0].location.country;
    console.log(data.results[0].name);
}

refresh.addEventListener("click", ()=>{
    getdata();
})
