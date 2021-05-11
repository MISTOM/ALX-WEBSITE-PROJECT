document.addEventListener("DOMContentLoaded", () => {

    const toggleBtn = document.querySelector("#expand-button");
    const profileCard = document.querySelector(".profile-card");

    if (window.location.href.indexOf("profile.html") > -1) {
        toggleBtn.addEventListener("click", () => { profileCard.classList.toggle("expand") });
    }

    // FORMATS DATE TO HUMANN READABLE
    function format(date) {
        let d = new Date(date),
            month = (d.getMonth() + 1),
            day = d.getDate(),
            year = d.getFullYear(),
            temp = '' + ((day < 10) ? '0' : '') + day;
        temp += ((month < 10) ? '/0' : '/') + month;
        temp += '/' + year;

        return temp;
    }

    //SALUTATIONS
    function salutation() {
        let hrs = now.getHours();
        let greeting;
        console.log(hrs)
        if (hrs > -1 && hrs < 12) {
            return greeting = 'Good Morning';
        } else if (hrs > 11 && hrs < 16) {
            return greeting = 'Good Afternoon';
        } else return greeting = 'Good Evening';
    }

    let dateCreated = new Date('April 27, 2021 03:00:00');
    let now = new Date();
    let timeDiff = now.getTime() - dateCreated.getTime();
    let dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24))
    // INSERT DATE AND DAYS AGO TO THE PROFILE LINK
    console.log(format(dateCreated));
    dateCreated = format(dateCreated);

    document.querySelector(".dateCreated").innerHTML = `Created on ${dateCreated} ~ ${dayDiff} days ago.`;


    document.querySelector("#salutation").innerHTML = salutation();


    const thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", () => {
        thumbnailElement.classList.toggle("small")
    });

})