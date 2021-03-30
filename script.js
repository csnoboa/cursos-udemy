$(function(){

    $('#l1').click(function(){
        $('#i1').fadeIn()
        $('#i2').hide()
        $('#i3').hide()
        $('#i4').hide()
    })

    $('#l2').click(function(){
        $('#i2').fadeIn()
        $('#i1').hide()
        $('#i3').hide()
        $('#i4').hide()
    })

    $('#l3').click(function(){
        $('#i3').fadeIn()
        $('#i1').hide()
        $('#i2').hide()
        $('#i4').hide()
    })

    $('#l4').click(function(){
        $('#i4').fadeIn()
        $('#i1').hide()
        $('#i2').hide()
        $('#i3').hide()
    })

});