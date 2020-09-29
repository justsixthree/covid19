 
$('.slider_content').slick({
    dots: true,
    arrows:true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 774,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
     {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
