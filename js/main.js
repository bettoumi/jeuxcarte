var t1=["img/m1.jpeg","img/m2.jpeg","img/m3.jpeg","img/m4.jpeg","img/m5.jpeg","img/m6.jpeg","img/m7.jpeg"];
var t2=["img/m1.jpeg","img/m2.jpeg","img/m3.jpeg","img/m4.jpeg","img/m5.jpeg","img/m6.jpeg","img/m7.jpeg"];
var tb1=["#14248a","#a53860","#fcab64","#4c191b","#e83151","#f0c808","#9EFD38"];
var rang1=document.getElementsByClassName("imrang1");
var newdiv=document.getElementsByClassName("newdiv");
var rang2=document.getElementsByClassName("imrang2");
var newdiv2=document.getElementsByClassName("newdiv2");
var score=0;
for(i=0;i<7;i++)
         {
           newdiv[i].style.backgroundColor=tb1[i];
           newdiv2[i].style.backgroundColor=tb1[i];

         }

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
document.getElementById("jouer").addEventListener("click",function(){
    melange(t1);
   
         for(i=0;i<rang1.length;i++)
         {
         	    rang1[i].src=t1[i];

             
              rang1[i].style.zIndex = "-100";
         	  newdiv[i].style.zIndex = "100";
              
         }

   });      
      
      //  //noeudRemplacé = noeudParent.replaceChild(nouvelEnfant, ancienEnfant);
      //  //replacedNode = parentNode.replaceChild(newChild, oldChild);


//change the image of the second div 
   document.getElementById("jouer").addEventListener("click", function(){
   	melange(t2);
   
         for(i=0;i<rang2.length;i++)
         {
         	rang2[i].src=t2[i];
         	rang2[i].style.zIndex = "-100";
           	newdiv2[i].style.zIndex = "100";
         	
         	
         }

});
//ACTION ONCLICK IN IMAGES
// function montre(j)
// {
// 	 rang1[j].style.zIndex = "100";
//      newdiv[j].style.zIndex = "-100";
// }
//var img=document.getElementsByClassName("imaged1");
 var trouve=0;
 
 for( let i=0;i<7;i++)
   {     
 	 
 	 
 	  newdiv[i].addEventListener("click", function(){
 	      
          rang1[i].style.zIndex = "100";
       
  
          newdiv[i].style.zIndex = "-100"; 
          for(let j=0;j<7;j++)
          {
          	if(i!=j){ newdiv[j].style.cursor="none";}
          }
         
         
                         for( let k=0;k<7;k++)
                         {
                                newdiv2[k].addEventListener("click", function(){
 	      
                                    rang2[k].style.zIndex = "100";
         
					                           newdiv2[k].style.zIndex = "-100"; 
					                     
					                           for(let j=0;j<7;j++)
					                                   {
					          	                          if(k!=j){ newdiv2[j].style.cursor="none";}
					                                     } 

					               console.log(rang2[k].src);
					               console.log(rang1[i].src);
					                       if(rang1[i].src=== rang2[k].src)
					                       	   { score++;
					                       	   	  document.getElementById("score").innerHTML=score;

					                             }  //else{ setTimeout() }
					                  
					              });
                                
           
                          }

          });
         
      //    setTimeout(function(){ { rang1[i].style.zIndex = "-100";
      //                                                        rang2[k].style.zIndex = "-100";}
                                                                                                     
      //       else{trouve++; console.log(trouve) ; rang1[i].style.zIndex = "1000";
      //                                                        rang2[k].style.zIndex = "1000";}

                      
      //     for(let l=0;l<7;l++)
      //      {
      //     	newdiv2[l].style.cursor="default"; newdiv[l].style.cursor="default";}  },2000);
              
           
   
 }  
   
     //  console.log(rang1[i].alt);
     //  console.log(rang2[i].alt);
     // if(rang1[i].alt===rang2[i].alt){ scor++;
     //  console.log(scor);} 
     // else{
     	
     //     newdiv[i].style.zIndex = "100";
        
     //   newdiv2[i].style.zIndex = "100";
     // }      


