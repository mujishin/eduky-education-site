var multipleCardCarousel = document.querySelector("#carouselExampleControls");

if (window.matchMedia("(min-width: 576px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: true
  });
  var carouselWidth = $(".carousel-inner")[1].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;
  $("#carouselExampleControls .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 1) {
      scrollPosition += cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}


mapboxgl.accessToken =
      'pk.eyJ1IjoiYnRyYXZlcnN5IiwiYSI6ImNrbmh0dXF1NzBtbnMyb3MzcTBpaG10eXcifQ.h5ZyYCglnMdOLAGGiL1Auw'
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-71.060982, 42.35725],
      zoom: 18,
    })

    new PureCounter();


    const main = () => {
      const second = 1000
      const minute = second * 60
      const hour = minute * 60
      const day = hour * 24
          
      //INSERT EVENT DATE AND TIME HERE IN THIS FORMAT: 'June 1, 2023, 19:00:00'
      const EVENTDATE = new Date('July 15, 2023, 19:00:00')
     
      const countDown = new Date(EVENTDATE).getTime()
      const x = setInterval(() => {
    
            const now = new Date().getTime()
            const distance = countDown - now
    
            document.getElementById("days").innerText = Math.floor(distance / day)
            document.getElementById("hours").innerText = Math.floor((distance % day) / (hour))
            document.getElementById("minutes").innerText = Math.floor((distance % hour) / (minute))
            document.getElementById("seconds").innerText = Math.floor((distance % minute) / second)
    
          //delay in milliseconds
          }, 0)
      }
    
    main();