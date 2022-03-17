# Capstone-CS497

PART 1:

Step 1. To implement the function place the code inside a script: 

    /* Start Web Tool Function */

    function altcheck() {

    /* variables */
    
    var noalt = document.getElementsByTagName("img");
    
    var imgcheck = document.querySelectorAll('img[alt]');
    
    /* Highlight images missing alternate description */
    
    for (let i = 0; i < noalt.length; i++) {
    
        noalt[i].style.border = "dashed #dc3545";
        
        }
        
    for (let i = 0; i < imgcheck.length; i++) { 
    
        imgcheck[i].style.border = "none";
        
    }
    }

    /* End Web Tool Function */

Step 2. Call the function:

    /* Optional: Add an event handler to the call the function */

    /* Call the function */
    altcheck();

PART 2:

Step 1. This script is still in development:

    /* Start Add Alt */
    /* End Add Alt */



