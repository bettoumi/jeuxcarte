var t1=["img/m1.jpeg","img/m2.jpeg","img/m3.jpeg","img/m4.jpeg","img/m5.jpeg","img/m6.jpeg","img/m7.jpeg"];
var t2=["img/m1.jpeg","img/m2.jpeg","img/m3.jpeg","img/m4.jpeg","img/m5.jpeg","img/m6.jpeg","img/m7.jpeg"];
var tb1=["#14248a","#a53860","#fcab64","#4c191b","#e83151","#f0c808","#9EFD38"];
var rang1=document.getElementsByClassName("imrang1");
var div=document.getElementsByClassName("imaged1");
// console.log(div1);
var rang2=document.getElementsByClassName("imrang2");
var div2=document.getElementsByClassName("imaged2");
var score=0;


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
function rejouer()
{
	   for(let i=0;i<7;i++)
             {
                  div[i].style.backgroundColor=tb1[i];
                  div2[i].style.backgroundColor=tb1[i];

              }
   
         for(let j=0;j<7;j++)
         {
         	    rang1[j].src=t1[j];

                rang2[j].src=t2[j];
         	     rang2[j].style.opacity = "0";
                 rang1[j].style.opacity = "0";
         	  
              
         }
               document.getElementById("score").innerHTML=0;
               score=0;

}


//change the image of the first div
document.getElementById("jouer").addEventListener("click",function(){
    melange(t1);
    melange(t2);
     rejouer();
               

             
   });  

var src1="";
var src2="";
var firstimage="";
function affich(img)
  {

     if(src1=="")
     { src1=img.src;
     	firstimage=img;
       img.style.opacity=1;
         //  firstimage.ondblclick = function(e) {
         //      e.stopImmediatePropagation();
         // }


     }
    else 
     {
     	  src2=img.src;
     	  img.style.opacity=1;
     	   
     	     if(src1===src2)
            {
     	           score++;
     	           document.getElementById("score").innerHTML=score;
     	           img.style.cursor="none";
     	           img.classList.add("souris");
     	  	       firstimage.classList.add("souris");
     	           if(score==7){ 
     	           	alert("tu as gagnier");
     	           	rejouer();
                      
     	           }
     	           src1="";
     	           src2="";
     	           
              }
           else{
     	            setTimeout(function(){
     	            	// console.log(firstimage);
     	            	 img.style.opacity=0;
     	  	            firstimage.style.opacity=0;
     	  	            
     	  	           
     	  	             src1="";
     	                src2="";

     	            },1000); 
         

               }
            
     }

       


  } 
















