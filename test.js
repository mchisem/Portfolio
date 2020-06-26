const title = document.querySelectorAll("h1");
const tl = new TimeLineMax

tl.fromTo(title, 0.5, 
    {y: "100", opacity: 0}, 
    {y: 0, opacity: 1});