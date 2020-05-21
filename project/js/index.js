let activeDog = null;

const newPage = (e) => {
   activeDog = e.target.id;
   if (activeDog == 'beagle'){
      window.location.href = "beagle.html"; }
   else if (activeDog == "bernese") {
      window.location.href = "bernese.html";
    }
   else if (activeDog == "chihuahua") {
      window.location.href = "chihuahua.html";
    }
   else if (activeDog == "corgi") {
      window.location.href = "corgi.html";
    }
   else if (activeDog == "dachshund") {
      window.location.href = "dachshund.html";
    }
   else if (activeDog == "german") {
      window.location.href = "german.html";
    }
   else if (activeDog == "golden") {
      window.location.href = "golden.html";
    }
   else if (activeDog == "husky") {
      window.location.href = "husky.html";
    }
    else if (activeDog == "lab") {
       window.location.href = "lab.html";
     }
   else if (activeDog == "pug") {
      window.location.href = "pug.html";
    }
   else if (activeDog == "shiba") {
      window.location.href = "shiba.html";
    }
}

const dogs = document.querySelectorAll('.dogs');
for (dog of dogs) {
   dog.onclick = newPage;
}
