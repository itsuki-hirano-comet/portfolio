(function() {
   'use strict';
   console.log('reading js');

   const web = document.querySelector('#web');
   const graphic = document.querySelector('#graphic');
   const motion = document.querySelector('#motion');
   const webWorks = document.querySelector('#webWorks');
   const graphicWorks = document.querySelector('#graphicWorks');
   const motionWorks = document.querySelector('#motionWorks');
   let sectionOnScreen = 'web';
   const overlay = document.querySelector('#overlay');
   let overlayClicked = false;
   const articles = document.querySelectorAll('article');


   setGallery();
   openOverlay();

   web.addEventListener('click', function(){
    if(sectionOnScreen !== 'web') {
        sectionOnScreen = 'web';
        web.className = 'active';
        graphic.className = 'inactive';
        motion.className = 'inactive';
        webWorks.removeAttribute('class');
        graphicWorks.className = 'off';
        motionWorks.className = 'off';
        setGallery();
        // openOverlay();
    }
   });

   graphic.addEventListener('click', function(){
    if(sectionOnScreen !== 'graphic') {
        sectionOnScreen = 'graphic';
        web.className = 'inactive';
        graphic.className = 'active';
        webWorks.className = 'off';
        motion.className = 'inactive';
        motionWorks.className = 'off';
        graphicWorks.removeAttribute('class');
        setGallery();
        // openOverlay();
    }
   });

   motion.addEventListener('click', function(){
    if(sectionOnScreen !== 'motion') {
        sectionOnScreen = 'motion';
        motion.className = 'active';
        graphic.className = 'inactive';
        web.className = 'inactive';
        webWorks.className = 'off';
        graphicWorks.className = 'off';
        motionWorks.removeAttribute('class');
        setGallery();
    }
   })

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