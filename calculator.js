
// input value read 

let input=document.getElementById('input-field');

// all button value 
let buttons=document.querySelectorAll('button');

// vlaue store empty field
let string='';

// copy of buttons array element
let arr=Array.from(buttons);

// arr element get form forEach function
arr.forEach(button => {


     button.addEventListener('click',function(event){


         if(event.target.innerHTML == 'AC'){

            string='';
            input.value=string;

         }


         else if ( event.target.innerHTML == 'DEL'){

            string=string.substring(0,string.length-1);
            
            input.value=string;


         }


         else if( event.target.innerHTML == '='){

            string=eval(string);
            input.value=string;

         }

         else {


            string +=event.target.innerHTML;
            input.value=string;

         }



     })


})

