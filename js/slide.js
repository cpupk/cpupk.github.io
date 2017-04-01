jQuery(document).ready(function(){
  
  jQuery('li.q-menuitem').mousemove(function(){
  jQuery(this).find('ul').slideDown();
  });
  jQuery('li.q-menuitem').mouseleave(function(){
  jQuery(this).find('ul').slideUp("fast");
  });
  
});