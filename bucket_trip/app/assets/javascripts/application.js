// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {

  function renderInfos( info ) {
    var $info = $('.info');
    var $destination = $('<li class="destination">');
    var $name = $('<h4>');
    $name.text( info.name );
    var $region = $('<h6>');
    $region.text( info.region);
    var $capital = $('<p>');
    $capital.text( info.capital);
    var $button = $('<button class="button-primary add">');
    $button.text('Add');

    $destination.append($name);
    $destination.append($region);
    $destination.append($capital);
    $destination.append($button);
    $info.append($destination)
  }

  function getInfos () {
    $.getJSON('/trips').done(function( infos ) {
      infos.forEach(function ( info ) {
        console.log(info);
        renderInfos( info )
      })
    })
  }

  function createBucket(e) {
    console.log('clicked');
    let data = {
      country: $('h4'),
      region: $('h6'),
      capital: $('p'),
    }

    $.post('/buckets', data).done( (response) => {
      console.log(response);
    })
  }

  // function deleteBucket() {
  //   let id;
  //   let url = '/buckets/' + id;
  //   $.delete(url).done( (response) => {
  //     console.log('deleted');
  //   })
  // }

  $('img').click(getInfos);
  $('li').on('click', '.add', createBucket);
  // $('.delete').click(deleteBucket)

})
