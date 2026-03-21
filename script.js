(function() {
   'use strict';
   console.log('reading js');
   
   const links = document.querySelectorAll('#pages a');
   for (const eachLink of links) {
        if (eachLink.className === 'currentPage') {
            eachLink.addEventListener('click', function(event){
                event.preventDefault();
            })
        }
   }
}())