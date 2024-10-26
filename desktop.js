
    document.getElementById('project').addEventListener('mouseenter', function() { 
      document.getElementById('finance').style.opacity = '1';
      document.getElementById('Legalsupport').style.opacity = '1';
      fadeOtherItems(0.5);
         fadeOtherItems(0.5);
         hideTimeout = setTimeout(function() {
                fadeOtherItems(0);
            }, 3000); 
        });

    document.getElementById('project').addEventListener('mouseleave', function() {
        
      document.getElementById('finance').style.opacity = '0';
      document.getElementById('Legalsupport').style.opacity = '0';
      fadeOtherItems(1);
      clearTimeout(hideTimeout);
    
    });

    document.getElementById('contacts').addEventListener('mouseenter', function() {
      document.getElementById('number').style.opacity = '1';
      document.getElementById('Telegram').style.opacity = '1';
      fadeOtherItems(0.5);
    });

    document.getElementById('contacts').addEventListener('mouseleave', function() {
      document.getElementById('number').style.opacity = '0';
      document.getElementById('Telegram').style.opacity = '0';
      fadeOtherItems(1);
    });
    document.getElementById('about').addEventListener('mouseenter', function() {
       
            document.getElementById('project').style.opacity = '0.5';
            document.getElementById('contacts').style.opacity = '0.5';
            document.getElementById('services').style.opacity = '0.5';
        });
        document.getElementById('about').addEventListener('mouseleave', function() {
         
            document.getElementById('project').style.opacity = '1';
            document.getElementById('contacts').style.opacity = '1';
            document.getElementById('services').style.opacity = '1';
        });
        document.getElementById('services').addEventListener('mouseenter', function() {
 
            document.getElementById('project').style.opacity = '0.5';
            document.getElementById('contacts').style.opacity = '0.5';
            document.getElementById('about').style.opacity = '0.5';
        });
        document.getElementById('services').addEventListener('mouseleave', function() {
           
            document.getElementById('project').style.opacity = '1';
            document.getElementById('contacts').style.opacity = '1';
            document.getElementById('about').style.opacity = '1';
        });
        document.getElementById('Investing').addEventListener('mouseenter', function() {
       
            document.getElementById('column2').style.opacity = '1'
        });
        document.getElementById('Investing').addEventListener('mouseleave', function() {
        
            document.getElementById('column2').style.opacity = '0';
        });
        document.getElementById('Opening').addEventListener('mouseenter', function() {
         
            document.getElementById('column3').style.opacity = '1'
        });
        document.getElementById('Opening').addEventListener('mouseleave', function() {
         
            document.getElementById('column3').style.opacity = '0';
        });
        document.getElementById('foreign').addEventListener('mouseenter', function() {
         
            document.getElementById('column4').style.opacity = '1'
        });
        document.getElementById('foreign').addEventListener('mouseleave', function() {
          
            document.getElementById('column4').style.opacity = '0';
        });
        document.getElementById('estate').addEventListener('mouseenter', function() {
          
            document.getElementById('column5').style.opacity = '1'
        });
        document.getElementById('estate').addEventListener('mouseleave', function() {
           
            document.getElementById('column5').style.opacity = '0';
        });
        


    function fadeOtherItems(opacity) {
      document.getElementById('about').style.opacity = opacity;
      document.getElementById('services').style.opacity = opacity;
      document.getElementById('project').style.opacity = opacity;
      document.getElementById('contacts').style.opacity = opacity;
    }

    window.addEventListener('scroll', function() {
      let scrollTop = window.scrollY;
      let windowHeight = window.innerHeight;
      let docHeight = document.documentElement.scrollHeight;
      let scrollPercent = scrollTop / (docHeight - windowHeight);
      let opacity = Math.min(Math.max(0.1 + scrollPercent * 0.4, 0.5), 0.5);
      let hideTimeout;

      document.querySelectorAll('.container:not(.row-1)').forEach(container => {
        container.style.opacity = opacity;
      });
      
      const elements = document.querySelectorAll('.Investing, .Opening, .foreign, .estate, .registration');


function moveDown() {
    const wordsToMove = Array.from(elements).slice(Array.from(elements).indexOf(this) + 1);
    const isforeign = this.classList.contains('foreign');
    const isOpening = this.classList.contains('Opening');

wordsToMove.forEach(word => {
    if (isforeign) {
        word.classList.add('move-down-300'); 
    } 
    if (isOpening) {
        word.classList.add('move-down-300'); 
    }else {
        word.classList.add('move-down');
    }
});

setTimeout(() => {
        column2.classList.remove('move-down'); 
    }, 5000);
}

function moveUp() {
    const wordsToMove = Array.from(elements).slice(Array.from(elements).indexOf(this) + 1);
    wordsToMove.forEach(word => {
        word.classList.remove('move-down', 'move-down-300');
    });

    column2.style.opacity = '0';
        }



elements.forEach(element => {
    element.addEventListener('mouseenter', moveDown);
    element.addEventListener('mouseleave', moveUp);
});
        
    });
