// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require mediaelement_rails
//= require Acc.DC.API
//= require calendar_generator.min
//= require calendar_generator
//= require setup
//= require_directory .

  $(document).ready(function() {
    // add a click handler to a link
    // that point to same-page targets (href="#main...")		
    $("a[href^='#main']").click(function() {
        // give that id focus (for browsers that didn't already do so)
        $('#main').focus()
    });
  });
