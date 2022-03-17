/* Start Web Tool Function */
function altcheck() {
    /* variables */
    var noalt = document.getElementsByTagName("img");
    var imgcheck = document.querySelectorAll('img[alt]');
    var message = document.getElementById("message");
    /* Highlight images missing alternate description*/
    for (let i = 0; i < noalt.length; i++) {
        noalt[i].style.border = "dashed #dc3545";
        }
    for (let i = 0; i < imgcheck.length; i++) { 
        imgcheck[i].style.border = "none";
    }

    /* Message appears but only once */ 
    if (message.style.visibility = "block"){
        message.innerHTML = ""
    }
    message.innerHTML += '</br>' + '** The red border indicates the image is missing an alt tag **'
}
/* End Web Tool Function */


/* Start Add Alt */
function addalt() {
    /* variables */
    var addAlt = document.querySelector('img');
    var input = document.getElementById("altadd").value;
    /* Alternate description input */
    addAlt.alt = input;
   }
/* End Add Alt */