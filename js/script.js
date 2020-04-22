// slider intro //
const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");

const tl = new TimelineMax();

tl.fromTo(
    hero, 3, 
    {height: "0%"}, 
    {height:"70%", ease: Power2.easeInOut}
    );

tl.fromTo(
    hero, 1.2, 
    {width: "100%"}, 
    {width:"90%", ease: Power2.easeInOut}
    );

tl.fromTo(
    slider, 1,
    {x: "-100%"},
    {x: "0%", ease: Power2.easeInOut},
    "-=1.2"
);

