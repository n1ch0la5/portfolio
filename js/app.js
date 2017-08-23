var projects = $('.project_box').find('img');

projects.on('click', function() {
  $('.project_info').hide();
  projects.show();
  $(this).hide();
  $(this).next('.project_info').fadeIn('slow');
});

$('.project_info').on('click', function() {
   $('.project_info').hide();
   $(this).prev('img').fadeIn('slow');
});

projects.on('mouseover', function(){
  $(this).animate({top: '-10px'}, 'fast');
});

 projects.on('mouseout', function(){
  $(this).animate({top: '0px'}, 'fast');
});

 var currentYear = (new Date).getFullYear();
 var startedYear = 2007;
 var yearsSince = currentYear - startedYear;

 $('#years').html(yearsSince);
 $('#year').html(currentYear);
