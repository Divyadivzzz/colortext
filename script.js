const color = ["#4A772F" , "#61ba49" ,"#337aad" ,"#b2a533" ,"#c227b7"];
    const text = [" I am like a princess",
   "Always gotta keep my head up",
    "You cant see my head down",
    "Know what call it bad luck",
   "In my life stay holy like",
   " Scriptures in the bible"];
    
    const title = document.querySelector(".text");
    const bg = document.querySelector(".colors");
    let i =0;
    setInterval(()=>{
    switch(i)
    {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            {
            title.innerHTML = text[i];
            bg.setAttribute("style", `background: ${color[i]}; opacity:0.5;`);
            i++;
            break;
            }
            default:
                {
                    i=0;
                }
    }
    },400);