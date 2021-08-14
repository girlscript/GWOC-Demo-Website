
        let toggler=document.getElementById("navbar-toggle");
        let navbar=document.getElementsByClassName("nav-items");
        let count=0;
        toggler.addEventListener("click",function(){
            if(count%2===0)
            {
            navbar[0].style.display="block";
            }
            else{
            navbar[0].style.display="none";
            }
            count++;
        });
        navbar[0].addEventListener("click",function(){
            count++;
            navbar[0].style.display="none";
        });