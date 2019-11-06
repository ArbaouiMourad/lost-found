import React from 'react'

function Carousel() {
    return (
      <div class="container-fluid area">
 
<div id="bs4-slide-carousel" class="carousel slide" data-ride="carousel" >
 
  <ol class="carousel-indicators">
 
    <li data-target="#bs4-slide-carousel" data-slide-to="0" class="active"></li>
 
    <li data-target="#bs4-slide-carousel" data-slide-to="1"></li>
 
    <li data-target="#bs4-slide-carousel" data-slide-to="2"></li>
 
  </ol>
 
  <div class="carousel-inner">
 
    <div class="carousel-item active">

      <img class="d-block mx-auto img-fluid " src="https://media.istockphoto.com/photos/close-up-magnifying-glass-leaning-on-wooden-table-picture-id527479747?k=6&m=527479747&s=612x612&w=0&h=s8M3hRH0lfqcKAFtl4MfsCBEVdLILT0e9B3l4MtvzeE=" alt="Slide One"/>
 

       
 
   </div>
 
    <div class="carousel-item">
 
      <img class="d-block mx-auto " src="https://gcm.rmnet.be/imgcontrol/c750-d511/clients/rmnet/content/medias/questions_750.jpg" alt="Slide Two"/>

       
    </div>
 
    <div class="carousel-item">
 
      <img class="d-block mx-auto" src="https://media.insider.com/images/5a98bbf08d6026e2008b456a-750-405.jpg" alt="Slide Three"/>

 
    </div>
 
  </div>
 
  <a class="carousel-control-prev" href="#bs4-slide-carousel" role="button" data-slide="prev">
 
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
 
    <span class="sr-only">Previous</span>
 
  </a>
 
  <a class="carousel-control-next" href="#bs4-slide-carousel" role="button" data-slide="next">
 
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
 
    <span class="sr-only">Next</span>
 
  </a> 
 
 
</div>
 

</div>
    )
}

export default Carousel;
