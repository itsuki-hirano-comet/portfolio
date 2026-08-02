(function() {
   'use strict';
   console.log('reading js');

   const web = document.querySelector('#web');
   const graphic = document.querySelector('#graphic');
   const webWorks = document.querySelector('#webWorks');
   const graphicWorks = document.querySelector('#graphicWorks');
   let webOnScreen = true;
   const overlay = document.querySelector('#overlay');
   let overlayClicked = false;
   const articles = document.querySelectorAll('article');


   setGallery();
   openOverlay();

   web.addEventListener('click', function(){
    if(!webOnScreen) {
        webOnScreen = true;
        web.className = 'active';
        graphic.className = 'inactive';
        webWorks.removeAttribute('class');
        graphicWorks.className = 'off';
        setGallery();
        // openOverlay();
    }
   });

   graphic.addEventListener('click', function(){
    if(webOnScreen) {
        webOnScreen = false;
        web.className = 'inactive';
        graphic.className = 'active';
        webWorks.className = 'off';
        graphicWorks.removeAttribute('class');
        setGallery();
        // openOverlay();
    }
   });

   function setGallery() {
    var webGallery = Macy({
            container: '#webGallery',
            trueOrder: false,
            margin: 24,
            columns: 2,
            breakAt: {
                640: 1
            }
        });

        var graphicGallery = Macy({
            container: '#graphicGallery',
            trueOrder: false,
            margin: 24,
            columns: 2,
            breakAt: {
                640: 1
            }
        });
   }

   function openOverlay() {
    const sections = document.querySelectorAll('.gallery img');
    sections.forEach(function(eachSection) {
        eachSection.addEventListener('click', function(){
            const id = this.id;
            // console.log(id);
            const overlayID = `${id}Over`;
            overlay.removeAttribute('class');
            console.log(overlayID)
            document.querySelector(`#${overlayID}`).className = 'popup';
            overlayClicked = false;
            
        })
    })
   }

   overlay.addEventListener('click', function(event) {
    articles.forEach(function(eachArticle) {
        if (!eachArticle.contains(event.target)) {
            // console.log('outside');
        } else {
            overlayClicked = true;
        }
    } );

    // console.log(overlayClicked);
    if (!overlayClicked) {
        // console.log('close');
        closeOverlay();
    }

    overlayClicked = false; 
   });

   document.addEventListener('keydown', function(event){
    if (event.key === 'Escape') {
        closeOverlay();
    }
   });

   document.querySelectorAll('.close').forEach(function(eachBtn){
    eachBtn.addEventListener('click', function(){
        closeOverlay();
    })
   })

   function closeOverlay() {
    overlay.className = 'off';
    document.querySelector('.popup').className = 'off';
   }
   

}());