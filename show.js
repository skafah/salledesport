

    function myFunction1() {

        document.getElementById("menclass").style.display = "block";

        document.getElementById("womenclass").style.display = "none";

 

    }
    function myFunction2() {

        document.getElementById("menclass").style.display = "none";

        document.getElementById("womenclass").style.display = "block";

      

    }

    const parentContainer =  document.querySelector('.read-more-container');

parentContainer.addEventListener('click', event=>{

   const current = event.target;

   const isReadMoreBtn = current.className.includes('read-more-btn');

   if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('En Savoir Plus') ? "En Savoir Moins..." : "En Savoir Plus...";

});
