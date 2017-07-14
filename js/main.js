var t1=["img/m1.jpeg","img/m2.jpeg","img/m3.jpeg","img/m4.jpeg","img/m5.jpeg","img/m6.jpeg","img/m7.jpeg"];
var t2=["img/m1.jpeg","img/m2.jpeg","img/m3.jpeg","img/m4.jpeg","img/m5.jpeg","img/m6.jpeg","img/m7.jpeg"];
//Math.floor(Math.random() * 10);
function echange(t, x,y)
{
   var z=t[x];
  t[x]=t[y];
  t[y]=z;
  return t;
  
}
 //function Mixed array
function melange(t)
{
     var l=t.length;
  for(k=1;k<l;k++)
   {
     p=Math.floor(Math.random() * (l-k));
     t=echange(t, p,l-k);
   } 

  
}
//change the image of the first div
document.getElementById("jouer").addEventListener("click",function(){ melange(t1)
   var rang1=document.getElementsByClassName("imrang1");
         for(i=0;i<rang1.length;i++)
         {
         	rang1[i].src=t1[i];
         };
	});
//change the image of the second div 
document.getElementById("jouer").addEventListener("click", function(){melange(t2);
   var rang2=document.getElementsByClassName("imrang2");
         for(i=0;i<rang2.length;i++)
         {
         	rang2[i].src=t2[i];
         };

}); 
//functin echange fo 2 elemnt

