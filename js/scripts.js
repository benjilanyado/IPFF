$(document).ready(function(){



 $("#clickme1").on({
  'click': function(event) {

              event.preventDefault();               

               if($("#tab1").css('height') == '314px'){
                   $("#tab1").css("z-index", "1")
                   $("#tab1").animate({"width": "940px","height": "628px" }, 1000, function(){
                    $("#tab1header").animate({"top": "5px","left": "375px" }, 500, function(){
                    $("#expand1").html("<img src='images/expandtopleft.png'> BACK UP")
                    $("#copy1").fadeIn()
                    $("#embed1").fadeIn(function(){
                      $("#embed1").html('<iframe src="http://player.vimeo.com/video/32958521?title=0&amp;byline=0&amp;portrait=0" width="700" height="394" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
                    })
                   })
                  })
                }

                if($("#tab1").css('height') == '628px'){
                  $("#copy1").fadeOut()
                    $("#embed1").fadeOut()
                    $("#expand1").html('EXPLORE <img src="images/explore.png">')
                  $("#tab1header").animate({"top": "100px","left": "130px" }, 500)
                   $("#tab1").animate({"width": "470px","height": "314px" }, 1000, function(){
                      $("#tab1").css("z-index", "1", function(){
                        $("#embed1").html('')
                      })
                    })
                  
            }
                      
}
});

 $("#clickme2").on({
  'click': function(event) {

              event.preventDefault();               

               if($("#tab2").css('height') == '314px'){

                $("#tab2").css("z-index", "1")
                $("#tab2").animate({"width": "940px","height": "628px" }, 1000, function(){
                  $("#tab2header").animate({"top": "5px","right": "320px" }, 500, function(){
                    $("#embed2").fadeIn()
                    $("#copy2").fadeIn()
                    $("#expand2").html('<img src="images/expandtopright.png">BACK UP')
                    $("#embed2").html('<iframe src="http://player.vimeo.com/video/29805267?title=0&amp;byline=0&amp;portrait=0&amp;badge=0" width="700" height="394" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
                  })
                })
                   
                }

                if($("#tab2").css('height') == '628px'){
                  $("#copy2").fadeOut()
                    $("#embed2").fadeOut()
                    $("#expand2").html('EXPLORE <img src="images/explore.png">')
                  $("#tab2header").animate({"top": "100px","right": "90px" }, 500)
                   $("#tab2").animate({"width": "470px","height": "314px" }, 1000, function(){
                      $("#tab2").css("z-index", "0", function(){
                        $("#embed2").html('')
                      })
                    })
                  
            }
                      
}
});

 $("#clickme3").on({
  'click': function(event) {

              event.preventDefault();               

               if($("#tab3").css('height') == '313px'){
                   $("#tab3").css("z-index", "1")
                   $("#tab3").animate({"width": "940px","height": "628px" }, 1000, function(){
                    $("#tab3header").animate({"bottom": "530px","left": "315px" }, 500, function(){
                    $("#expand3").html("<img src='images/expandbottomleft.png'> BACK UP")
                    $("#copy3").fadeIn()
                    $("#embed3").fadeIn(function(){
                      $("#embed3").html('<iframe src="http://player.vimeo.com/video/31408482?byline=0&amp;portrait=0&amp;color=FFCC33" width="700" height="394" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
                    })
                   })
                  })
                }

                if($("#tab3").css('height') == '628px'){
                  $("#copy3").fadeOut()
                    $("#embed3").fadeOut()
                    $("#expand3").html('EXPLORE <img src="images/explore.png">')
                  $("#tab3header").animate({"bottom": "100px","left": "80px" }, 500)
                   $("#tab3").animate({"width": "470px","height": "314px" }, 1000, function(){
                      $("#tab3").css("z-index", "0", function(){
                        $("#embed3").html('')
                      })
                    })
                  
            }
                      
}
});

 $("#clickme4").on({
  'click': function(event) {

              event.preventDefault();               

               if($("#tab4").css('height') == '313px'){

                $("#tab4").css("z-index", "1")
                $("#tab4").animate({"width": "940px","height": "628px" }, 1000, function(){
                  $("#tab4header p").html("LATIN AMERICA")
                  $("#tab4header p").css("width", "640px")
                  $("#tab4header").animate({"bottom": "530px","right": "100px" }, 500, function(){
                    $("#embed4").fadeIn()
                    $("#copy4").fadeIn()
                    $("#expand4").html('<img src="images/expandbottomright.png">BACK UP')
                    $("#embed4").html('<iframe src="http://player.vimeo.com/video/11843959?byline=0&amp;portrait=0&amp;badge=0&amp;color=ffcc33" width="700" height="394" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
                  })
                })
                   
                }

                if($("#tab4").css('height') == '628px'){
                  $("#copy4").fadeOut()
                    $("#embed4").fadeOut()
                    $("#tab4header").html("<p>LATIN<br/> AMERICA</p>")
                    $("#expand4").html('EXPLORE <img src="images/explore.png">')
                  $("#tab4header").animate({"bottom": "74px","right": "-255px" }, 500)
                   $("#tab4").animate({"width": "470px","height": "313px" }, 1000, function(){
                      $("#tab4").css("z-index", "0", function(){
                        $("#embed4").html('')
                      })
                    })
                  
            }
                      
}
});

}); //ready

