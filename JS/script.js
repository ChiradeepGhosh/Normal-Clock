let hr = document.querySelector(".hr");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

setInterval(() => {
    let day = new Date();
    
    var hh = day.getHours();
    let mh = day.getMinutes();
    let sh = day.getSeconds();

    let date = day.getDate();
    // console.log(date);

    let month = day.getMonth() + 1;
    // console.log(month);

    let year = day.getFullYear();
    // console.log(year);


    let mval = (mh * 6);
    let hval = ((hh - 12) * 30)+(mval/12);
    let sval = (sh * 6);


    hr.style.transform = `rotateZ(${hval}deg)`;
    min.style.transform = `rotateZ(${mval}deg)`;
    sec.style.transform = `rotateZ(${sval}deg)`;
})

