var n=document.querySelectorAll(".drum").length;
for(var i = 0; i < n; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        if((this.innerHTML)=="w")
        {
            var a=new Audio('./sounds/crash.mp3');
            a.play();
        }
        if((this.innerHTML)=="a")
        {
            var a=new Audio('./sounds/kick-bass.mp3');
            a.play();
        }
        if((this.innerHTML)=="s")
        {
            var a=new Audio('./sounds/snare.mp3');
            a.play();
        }
        if((this.innerHTML)=="d")
        {
            var a=new Audio('./sounds/tom-1.mp3');
            a.play();
        }
        if((this.innerHTML)=="j")
        {
            var a=new Audio('./sounds/tom-2.mp3');
            a.play();
        }
        if((this.innerHTML)=="k")
        {
            var a=new Audio('./sounds/tom-3.mp3');
            a.play();
        }
        if((this.innerHTML)=="l")
        {
            var a=new Audio('./sounds/tom-4.mp3');
            a.play();
        }
    } );


}