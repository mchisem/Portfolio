 new fullpage("#fullpage", {
     autoScrolling: true,
     navigation: true,
     onLeave: (origin, destination, direction) => {
         const section = destination.item;
         const title = section.querySelector("h1");
         const tl = new TimelineMax({delay: 0.5});
         tl.fromTo(title, 0.5, 
            {y: "50", opacity: 0}, {y: 0, opacity: 1});

        if(destination.index === 1) {
            const img = document.querySelectorAll("img");
            const work = document.querySelector("#work");

            tl.fromTo(work, 1,
                {x: "-50", opacity: 0}, 
                {x: 0, opacity: 1, ease: Power2.easeInOut});

            tl.fromTo(img, 1, 
                {x: "50", opacity: 0}, 
                {x: 0, opacity: 1, ease: Power2.easeInOut},"-=.7");
        }    
     }
 });