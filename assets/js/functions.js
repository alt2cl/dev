$( document ).ready(function() {

  // Get started!

  var owl = $("#owl-demo");
  var owl2 = $("#owl-sale");
  var owl3 = $("#owl-categories");
  var owl4 = $("#owl-products1");
  var owl5 = $("#owl-products2");
  var owl6 = $("#owl-products3");

  

  

  
 
  owl.owlCarousel({
      items : 2, //10 items above 1000px browser width
      itemsDesktop : [1000,2], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,2], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });

  owl2.owlCarousel({
    items : 3, //10 items above 1000px browser width
    itemsDesktop : [1000,3], //5 items between 1000px and 901px
    itemsDesktopSmall : [900,3], // betweem 900px and 601px
    itemsTablet: [600,1], //2 items between 600 and 0
    itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
});

owl3.owlCarousel({
  items : 3, //10 items above 1000px browser width
  itemsDesktop : [1000,3], //5 items between 1000px and 901px
  itemsDesktopSmall : [900,3], // betweem 900px and 601px
  itemsTablet: [600,1], //2 items between 600 and 0
  itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
});

owl4.owlCarousel({
  items : 5, //10 items above 1000px browser width
  itemsDesktop : [1000,5], //5 items between 1000px and 901px
  itemsDesktopSmall : [900,4], // betweem 900px and 601px
  itemsTablet: [600,3], //2 items between 600 and 0
  itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
});

owl5.owlCarousel({
  items : 5, //10 items above 1000px browser width
  itemsDesktop : [1000,5], //5 items between 1000px and 901px
  itemsDesktopSmall : [900,4], // betweem 900px and 601px
  itemsTablet: [600,3], //2 items between 600 and 0
  itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
});

owl6.owlCarousel({
  items : 5, //10 items above 1000px browser width
  itemsDesktop : [1000,5], //5 items between 1000px and 901px
  itemsDesktopSmall : [900,4], // betweem 900px and 601px
  itemsTablet: [600,3], //2 items between 600 and 0
  itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
});
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })

});
