$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
    
    // navbar toggle
    $('#nav-toggle').click(function(){
        $(this).toggleClass('is-active')
        $('ul.nav').toggleClass('show');
    });
    $(".service-card").addClass("shadowBox");
});


 // Get the modal
 var modal = document.getElementById("myModal");
 // Get the image and insert it inside the modal - use its "alt" text as a caption
 var img = document.getElementById("myImg");
 var modalImg = document.getElementById("img01");
 var captionText = document.getElementById("caption");
 img.onclick = function(){
 modal.style.display = "block";
 modalImg.src = this.src;
 captionText.innerHTML = this.alt;
 }
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() { 
 modal.style.display = "none";
}
 var modal = document.getElementById("myModal");
 // Get the image and insert it inside the modal - use its "alt" text as a caption
 var img = document.getElementById("myImg2");
 var modalImg = document.getElementById("img01");
 var captionText = document.getElementById("caption");
 img.onclick = function(){
 modal.style.display = "block";
 modalImg.src = this.src;
 captionText.innerHTML = this.alt;
 }
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() { 
 modal.style.display = "none";
}
 var modal = document.getElementById("myModal");
 // Get the image and insert it inside the modal - use its "alt" text as a caption
 var img = document.getElementById("myImg3");
 var modalImg = document.getElementById("img01");
 var captionText = document.getElementById("caption");
 img.onclick = function(){
 modal.style.display = "block";
 modalImg.src = this.src;
 captionText.innerHTML = this.alt;
 }
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() { 
 modal.style.display = "none";
}
