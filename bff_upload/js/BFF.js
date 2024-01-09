$(document).ready(function(){
    let ww=$(window).width();
    let wh=$(window).height();
    layout();
    $(window).resize(function(){
        layout()
    })
    function layout(){
        ww=$(window).width();
        wh=$(window).height();
        // m에서 pc로 전환 시 초기화
        $(".ham_menu").removeClass("m_ham_menu_on")
        $(".timer_menu_wrap").removeClass("m_timer_menu_wrap_off")
        $(".timer_page").css({
            width:ww,
            height:ww*0.502
        })
        $(".bridge").css({
            width:ww,
            height:ww*0.45,
            top:ww*0.08,
            backgroundPositionX:-ww*0.2
        })
        $("#timer").css({
            width:ww*0.4,
            lineHeight:ww*0.1+'px',
            top:ww*0.28,
            fontSize:ww*0.05
        })
        $(".timer_but").css({
            width:ww*0.15,
            height:ww*0.02,
            border:'2px solid #ffffff',
            borderRadius:ww*0.05,
            top:ww*0.369,
            left:ww*0.425,
            fontSize: ww*0.015
        })
        $(".timer_page_img").css({
            top:-ww*0.1
        })
        $(".timer_text_box").css({
            width:ww*0.3,
            height:ww*0.2,
            top:ww*0.085,
            left:ww*0.35,
            fontSize: ww*0.051
        })
        $(".timer_text_box .in_timer_text").css({
            fontSize: ww*0.047
        })
        $(".fire").css({
            width: ww*0.08,
            height: ww*0.08
        })
        $(".fire1").css({
            width: ww*0.12,
            height: ww*0.12,
            left: ww*0.24,
            top:ww*0.074
        })
        $(".fire2").css({
            width: ww*0.06,
            height: ww*0.06,
            left: ww*0.57,
            top:ww*0.035
        })
        $(".fire3").css({
            width: ww*0.1,
            height: ww*0.1,
            left: ww*0.68,
            top:ww*0.17
        })
        $(".fire4").css({
            width: ww*0.05,
            height: ww*0.05,
            left: ww*0.18,
            top:ww*0.17
        })
        $(".fire5").css({
            width: ww*0.05,
            height: ww*0.05,
            left: 0,
            top:0
        })
        $(".fire6").css({
            width: ww*0.1,
            height: ww*0.1,
            left: ww*0.1,
            top:ww*0.12
        })
        $(".fire7").css({
            width: ww*0.08,
            height: ww*0.08,
            right: ww*0.18,
            top:ww*0.1
        })
        $(".fire8").css({
            width: ww*0.12,
            height: ww*0.12,
            right: ww*0.05,
            top:ww*0.05
        })
        $(".fire9").css({
            width: ww*0.12,
            height: ww*0.12,
            right: ww*0.05,
            top:ww*0.05
        })
        $(".fire10").css({
            width: ww*0.18,
            height: ww*0.18,
            right: ww*0.3,
            top:ww*0.2
        })
        $(".fire11").css({
            width: ww*0.12,
            height: ww*0.12,
            left: ww*0.2,
            top:0
        })
        $(".fire12").css({
            width: ww*0.08,
            height: ww*0.08,
            right: ww*0.2,
            top:-ww*0.05
        })
        $(".fire13").css({
            width: ww*0.04,
            height: ww*0.04,
            right: ww*0.25,
            top:-ww*0.01
        })
        $(".fire14").css({
            width: ww*0.15,
            height: ww*0.15,
            left: ww*0.05,
            bottom:ww*0.01
        })
        $(".fire15").css({
            width: ww*0.08,
            height: ww*0.08,
            right: ww*0.05,
            top:ww*0.1
        })
        $(".fire16").css({
            width: ww*0.1,
            height: ww*0.1,
            right: ww*0.1,
            top:ww*0.05
        })
        $(".timer_menu_wrap").css({
            width:ww*0.8,
            height:ww*0.03,
            left:ww*0.1,
            top:0,
            lineHeight:ww*0.03+"px",
            fontSize:ww*0.01
        })
        $(".timer_main_menu").css({
            width:(ww*0.8)/6,
            fontSize:ww*0.01
        })
        $(".top_menu").css({
            width:ww*0.03,
            height:ww*0.03,
            borderRadius:ww*0.03,
            right:ww*0.03,
            lineHeight:ww*0.03+"px",
            fontSize:ww*0.01
        })
        $(".ham_menu").css({
            width:ww*0.03,
            height:ww*0.015,
            top:0,
            right:ww*0.03
        })
        $(".ham_menu div").css({
            width:ww*0.015,
            height:ww*0.001,
            marginLeft:ww*0.0075,
            marginTop:ww*0.003
        })
        //전체페이지
        // $(".wrap_page").css({
        //     width:ww,
        // })
        // 소개페이지
        $(".intro_page").css({
            width:ww,
            height:ww*0.502,
            // background:"green",
            position:"relative"
        })
        $(".intro_tit_box").css({
            width:ww*0.3,
            height:ww*0.08,
            top:ww*0.1,
            right:ww*0.07,
        })
        // $(".intro_page").hover(function(){
        //     $(".intro_tit_box,.intro_txt_box").addClass("intro_tit_box_left")
        // })
        $(".intro_tit").css({
            fontSize:ww*0.03
        })
        $(".intro_txt_box").css({
            right:ww*0.077,
            top:ww*0.178,
            marginTop:ww*0.036,
        })
        $(".intro_txt").css({
            fontSize:ww*0.01
        })
        $(".circle1").css({
            width:ww*0.01,
            height:ww*0.01,
            top:ww*0.324,
            left:ww*0.35,
            borderRadius: ww*0.01
        })
        $(".circle2,.circle3,.circle4").css({
            width:ww*0.3,
            height:ww*0.3,
            top:ww*0.18,
            left:ww*0.205,
        })
    
    
        $(".map_out_box").css({
            width:ww*0.57,
            height:ww*0.44,
            top:ww*0.035,
            left:0
        })
        $(".map_box").css({
            width:'100%',
            height:'100%'
        })
    
        // 정보페이지
        $(".info_page").css({
            width:ww,
            height:ww*0.7,
            // background:"blue",
            position:"relative"
        })
        $(".info_box").css({
            width:ww*0.2,
            height:ww*0.28,
            borderRadius:ww*0.03
        })
        $(".info_black_box").css({
            width:ww*0.2,
            height:ww*0.28,
            borderRadius:ww*0.03
        })
        $(".info_sub_box").css({
            width:ww*0.1,
            position:"absolute",
            border:"1px solid white",
            zIndex:999
        })
        // $(".sub_cancle_on").css({
        //     width:ww*0.03,
        //     height:ww*0.03
        // })
        $(".info_box1,.info_black_box1").css({
            top:ww*0.02,
            left:ww*0.05
        })
        $(".info_tit1").css({
            top:ww*0.22,
            left:ww*0.07,
            fontSize:ww*0.02
        })
        $(".info_txt").css({
            fontSize:ww*0.01
        })
        $(".info_txt1").css({
            top:ww*0.265,
            left:ww*0.07
        })
        $(".info_sub_box1").css({
            top:ww*0.25,
            left:ww*0.07
        })
        
        $(".info_box2,.info_black_box2").css({
            top:ww*0.05,
            left:ww*0.27
        })
        $(".info_sub_box2").css({
            top:ww*0.28,
            left:ww*0.29
        })
        $(".info_tit2").css({
            top:ww*0.25,
            left:ww*0.29,
            fontSize:ww*0.02
        })
        $(".info_txt2").css({
            top:ww*0.295,
            left:ww*0.29
        })
        
        $(".info_box3,.info_black_box3").css({
            top:ww*0.32,
            left:ww*0.05
        })
        $(".info_sub_box3").css({
            top:ww*0.55,
            left:ww*0.07
        })
        $(".info_tit3").css({
            top:ww*0.52,
            left:ww*0.07,
            fontSize:ww*0.018
        })
        $(".info_txt3").css({
            top:ww*0.565,
            left:ww*0.07
        })
        
        $(".info_box4,.info_black_box4").css({
            top:ww*0.35,
            left:ww*0.27
        })
        $(".info_sub_box4").css({
            top:ww*0.58,
            left:ww*0.29
        })
        $(".info_tit4").css({
            top:ww*0.55,
            left:ww*0.29,
            fontSize:ww*0.02
        })
        $(".info_txt4").css({
            top:ww*0.595,
            left:ww*0.29
        })
        
        
        $(".info_right_wrap").css({
            width:ww*0.21,
            height:ww*0.15,
            position:"absolute",
            top:ww*0.22,
            right:ww*0.1
        })
        $(".info_right_tit").css({
            fontSize:ww*0.03
        })
        $(".info_right_box1").css({
            marginTop:ww*0.036,
        })
        $(".info_right_txt").css({
            fontSize:ww*0.01
        })
        $(".info_homepage").css({
            width:ww*0.1,
            height:ww*0.02,
            borderRadius:ww*0.023,
            position:"absolute",
            top:ww*0.38,
            right:ww*0.1,
            lineHeight:ww*0.02+"px",
            fontSize:ww*0.01
        })
        //안내사항페이지
        $(".warn_page").css({
            width:ww,
            height:ww*0.552,
            // background:"gray",
        })
        $(".warn_tit").css({
            width:ww*0.667,
            height:ww*0.1,
            top:0,
            left:ww*0.1665,
            fontSize:ww*0.03,
            
        })
        $(".warn_tab_wrap").css({
            width:ww*0.667,
            height:ww*0.38,
            left:ww*0.1665,
            top:ww*0.13,
            borderRadius:ww*0.02
        })
        $(".warn_tab_box").css({
            width:"100%",
            height:"100%"
        })
        $(".warn_but_wrap").css({
            width:ww*0.667,
            height:ww*0.0235,
            top:ww*0.1,
            left:ww*0.1665
        })
        $(".warn_but").css({
            width:ww*0.1,
            height:ww*0.02,
            borderRadius:ww*0.023,
            fontSize:ww*0.01,
            lineHeight:ww*0.02+"px"
        })
        $(".warn_tab_box").css({
            display:"none"
        })
        $(".warn_tab_box1").css({
            display:"block"
        })
        
        //추천페이지
        $(".recomm_page").css({
            width:ww,
            height:ww*0.502,
        })
        $(".recomm_tit_box").css({
            width:ww*0.667,
            height:ww*0.1,
            fontSize:ww*0.03,
            left:ww*0.1665
        })
        $(".recomm_tit_box1").css({
            top:ww*0.05
        })
        $(".recomm_tit_box2").css({
            height:ww*0.05,
        })
        $(".recomm_mask").css({
            width:ww*0.66,
            height:ww*0.3,
            left:ww*0.1665,
            top:ww*0.05
        })
        $(".recomm_mask1").css({
            top:ww*0.13
        })
        $(".recomm_mask2").css({
            height:ww*0.35,
            top:ww*0.1
        })
        $(".recomm_move").css({
            width:ww*1.334,
        })
        $(".recomm_move1").css({
            paddingTop:ww*0.05,
        })
        $(".recomm_move_txt").css({
            bottom:ww*0.015,
            fontSize:ww*0.02
        })
        $(".recomm_move_txt2").css({
            bottom:ww*0.015,
            fontSize:ww*0.02
        })
        $(".recomm_box").css({
            width:ww*0.21,
            height:ww*0.21,
            borderRadius:"50%",
          
        })
       
        $(".recomm_txt").css({
            width:ww*0.21,
            height:ww*0.01,
        })
        $(".recomm_box2").css({
            width:ww*0.21,
            height:ww*0.27,
        })
        $(".recomm_txt2").css({
            width:ww*0.21,
            height:ww*0.01,
            fontSize:ww*0.013
        })
        $(".arrow").css({
            top:ww*0.17,
            fontSize:ww*0.05
        })
        $(".left_arrow1,.right_arrow1").css({
            top:ww*0.25
        })
        $(".left_arrow2,.right_arrow2").css({
            top:ww*0.20
        })
        $(".left_arrow").css({
            left:ww*0.1
        })
        $(".right_arrow").css({
            right:ww*0.1
        })
        
        $(".recomm_box2_img").eq(1).addClass("recomm_box2_img_on")
        $(".recomm_box2").eq(1).addClass("recomm_box2_on")
        $(".recomm_txt2").eq(1).addClass("recomm_box2_on")
    
        //공지사항페이지
        $(".notice_page").css({
            width:ww,
            height:ww*0.402,
        })
        $(".notice_tit").css({
            width:ww*0.667,
            height:ww*0.1,
            fontSize:ww*0.03,
            left:ww*0.1665,
            top:ww*0.05
        })
        $(".notice_wrap").css({
            width:ww*0.6,
            height:ww*0.2,
            left:ww*0.2,
            top:ww*0.12
        })
        $(".notice_box").css({
            width:"100%",
            height:"25%",
            // borderTop:"ww*0.01 solid blue"
        })
        $(".notice_date").css({
            width:"10%",
            height:"80%",
            marginTop:"0.6%",
            marginLeft:"2%"
        })
        $(".date").css({
            width:"100%",
            fontSize:ww*0.02
        })
        $(".year_month").css({
            width:"100%",
            fontSize:ww*0.009
        })
        $(".notice_txt").css({
            width:ww*0.35,
            height:ww*0.03,
            fontSize:ww*0.01,
            lineHeight:ww*0.029+"px",
            marginTop:ww*0.01,
            marginLeft:ww*0.02
        })
        $(".notice_right").css({
            width:"10%",
            height:"60%",
            fontSize:ww*0.01,
            lineHeight:ww*0.029+"px",
            marginTop:"1.2%",
            marginLeft:"2%"
        })
        $(".notice_arrow").css({
            width:ww*0.05,
            height:ww*0.03,
            fontSize:ww*0.03,
            lineHeight:ww*0.022+"px",
            marginTop:ww*0.01,
            marginLeft:ww*0.02
        })
        //푸터
        $("footer").css({
            width:ww,
            height:ww*0.1,
            background:"black"
        })
        //카운트다운 함수
        
        setInterval(updateTimer, 1000);
        // page_h1=$(".timer_page").height()
        // page_h2=$(".intro_page").height()
        // page_h3=$(".info_page").height()
        // page_h4=$(".warn_page").height()
        // page_h5=$(".recomm_page1").height()
        // page_h6=$(".recomm_page2").height()
        // page_h7=$(".footer_page").height()
        // page_h1d=page_h1/2
        // page_h12=page_h1d+page_h2
        // page_h12d=page_h12/2
        // page_h13=page_h1+page_h2+page_h3
        
        // $(".sub_cancle").css({
        //     width:ww*0.03,
        //     height:ww*0.03,
        //     right:ww*0.07,
        //     top:ww*0.05
        // })
        if(ww<1600){
            $(".right_arrow2").css({
                color:"#000066",
                textShadow:"none"
            })
        }else{
            $(".right_arrow2").css({
                color:"#ffffff",
                textShadow:"2px 2px 0 #000066"
            })
        }
        if(ww<1150){
            $(".left_arrow1").css({
                color:"#000066",
                textShadow:"none"
            })
        }else{
            $(".left_arrow1").css({
                color:"#ffffff",
                textShadow:"2px 2px 0 #000066"
            })
        }
        if(ww<1212){
            $(".recomm_txt").eq(0).css({
                color:"#000066",
                textShadow:"none"
            })
        }else{
            $(".recomm_txt").eq(0).css({
                color:"#ffffff",
                textShadow:"2px 2px 0 #000066"
            })
        }
        if(ww<1063){
            $(".recomm_tit_box2").css({
                color:"#000066",
                textShadow:"none"
            })
        }else{
            $(".recomm_tit_box2").css({
                color:"#ffffff",
                textShadow:"2px 2px 0 #000066"
            })
        }
        if(ww<915){
            $(".recomm_txt").eq(1).css({
                color:"#000066",
                textShadow:"none"
            })
        }else{
            $(".recomm_txt").eq(1).css({
                color:"#ffffff",
                textShadow:"2px 2px 0 #000066"
            })
        }
        if(ww<750){
            $(".recomm_txt").eq(2).css({
                color:"#000066",
                textShadow:"none"
            })
        }else{
            $(".recomm_txt").eq(2).css({
                color:"#ffffff",
                textShadow:"2px 2px 0 #000066"
            })
        }
        if(ww<570){
            $(".right_arrow1").css({
                color:"#000066",
                textShadow:"none"
            })
        }else{
            $(".right_arrow1").css({
                color:"#ffffff",
                textShadow:"2px 2px 0 #000066"
            })
        }
        // if(ww<505){
        //     $(".warn_but1").css({
        //         color:"#000000",
        //         border:"3px solid #000066",
        //         textShadow:"none",
        //         boxShadow:"none"
        //     })
        // }else{
        //     $(".warn_but1").css({
        //         color:"#ffffff",
        //         border:"3px solid #ffffff",
        //         textShadow:"2px 2px 0 #000066",
        //         boxShadow:"2px 2px 0 #000066"
        //     })
        // }
        if(ww<484){
            $(".recomm_tit_box1").css({
                color:"#000066",
                textShadow:"none"
            })
        }else{
            $(".recomm_tit_box1").css({
                color:"#ffffff",
                textShadow:"2px 2px 0 #000066"
            })
        }
        // page_h1=$(".timer_page").height()
        // page_h2=$(".intro_page").height()
        // page_h3=$(".info_page").height()
        // page_h4=$(".warn_page").height()
        // page_h5=$(".recomm_page1").height()
        // page_h6=$(".recomm_page2").height()
        // page_h7=$(".footer_page").height()
        // page_h1d=page_h1/2
        // page_h12=page_h1d+page_h2
        // page_h12d=page_h12/2
        // page_h13=page_h12+page_h3
        // page_h14=page_h13+page_h4
        // page_h15=page_h14+page_h5
        // page_h16=page_h15+page_h6
        click_num=0
        // 모바일영역
        if(ww<450){
            $(".timer_page").css({
                height:ww*2
            })
            $(".timer_page_txt_warp").addClass("timer_page_txt_warp_on")
            $(".ham_menu").addClass("m_ham_menu_on")
            $(".ham_menu").css({
                width:ww*0.1,
                height:ww*0.07,
                right:0,
            })
            $(".ham_menu div").css({
                width:ww*0.08,
                height:ww*0.01,
                marginLeft:ww*0.0075,
                marginTop:ww*0.009
            })
            $(".timer_menu_wrap").addClass("m_timer_menu_wrap_off")
            $(".timer_menu_wrap").css({
                width:ww*0.9,
                height:ww*0.07,
                left:0,
                top:0,
                lineHeight:ww*0.07+"px",
            })
            $(".timer_main_menu").css({
               fontSize:ww*0.015
            })
            $(".timer_page_img").css({
                top:ww*1.3
            })
            $(".bridge").css({
                top:ww*1.2
            })
            $(".timer_text_box").css({
                width:ww*0.6,
                height:ww*0.6,
                top:ww*0.5,
                left:ww*0.2,
                fontSize: ww*0.1,
                // lineHeight:ww*0.3
            })
            $(".in_timer_text").css({
                fontSize: ww*0.09,
                width:ww*0.8,
                // marginTop:ww*0.2
            })
            $("#timer").css({
                width:ww*0.6,
                lineHeight:ww*0.2+'px',
                top:ww*0.9,
                fontSize:ww*0.1
            })
            $(".timer_but").css({
                width:ww*0.15,
                height:ww*0.02,
                border:'2px solid #ffffff',
                borderRadius:ww*0.05,
                top:ww*1.1,
                left:ww*0.425,
                fontSize: ww*0.015
            })
            $(".fire1").css({
                top:ww*0.474
            })
            $(".fire2").css({
                top:ww*0.435
            })
            $(".fire3").css({
                top:ww*0.57
            })
            $(".fire4").css({
                top:ww*0.57
            })
            $(".fire5").css({
                left: 0,
                top:ww*0.4
            })
            $(".fire6").css({
                top:ww*0.52
            })
            $(".fire7").css({
                top:ww*0.5
            })
            $(".fire8").css({
                top:ww*0.45
            })
            // 인트로영역
            $(".intro_page").css({
                height:ww*1
            })
            $(".intro_tit_box").css({
                width:ww*0.3,
                height:ww*0.08,
                top:ww*0.5,
                right:ww*0.35,
                
            })
            $(".intro_txt_box").css({
                right:ww*0.35,
                top:ww*0.6,
                marginTop:ww*0.036,
            })
            $(".map_out_box").css({
                width:ww*0.57,
                height:ww*0.44,
                top:ww*0.035,
                left:ww*0.215
            })
            $(".circle1").css({
                top:ww*0.324,
                left:ww*0.565,
            })
            $(".circle2,.circle3,.circle4").css({
                top:ww*0.18,
                left:ww*0.42,
            })
            // $(".intro_tit_box,.intro_txt_box").addClass("intro_tit_box_left")
            // $(".map_icon").addClass("map_icon_on")
            // $(".intro_tit_box,.intro_txt_box").css({
            //     transform:"translateX(0)"
            // })
            // 인포영역
            $(".info_page").css({
                height:ww*1
            })
            //안내사항영역
            $(".warn_page").css({
                height:ww*1
            })
            //추천
            $(".recomm_page1").css({
                height:ww*1
            })
            //추천2
            $(".recomm_page2").css({
                height:ww*1
            })
        }
                page_h1=$(".timer_page").height()
                page_h2=$(".intro_page").height()
                page_h3=$(".info_page").height()
                page_h4=$(".warn_page").height()
                page_h5=$(".recomm_page1").height()
                page_h6=$(".recomm_page2").height()
                page_h7=$(".footer_page").height()
    }

    // 실행식 영역
    $(".info_black_box1").click(function(){
        $(".info_box,.info_sub_box,.info_tit,.info_txt,.info_black_box").css({
            display:"none"
        })
        $(".cancle1").css({
            width:ww*0.03,
            height:ww*0.03,
            right:ww*0.07,
            top:ww*0.05
        })
        $(".info_box1,.info_sub_box1,.info_tit1,.info_txt1").css({
            display:"block"
        })
        $(".info_box1").animate({
            top:ww*0.1
        })
        $(".info_tit1").animate({
            top:ww*0.3
        })
        $(".info_txt1").animate({
            top:ww*0.345
        })
        $(".info_sub_box1").animate({
            left:(ww/2)-ww*0.1
        },function(){
            $(".info_sub_box1").animate({
                width:ww*0.6,
                height:ww*0.4,
                left:ww*0.3,
                top:ww*0.05
            },function(){
                $(".info_sub_img1").addClass("info_sub_img1_on")
            }) 
        })
    })
    $(".cancle1").click(function(){
        $(".info_box,.info_sub_box,.info_tit,.info_txt,.info_black_box").css({
            display:"block"
        })
        $(".cancle1").css({
            width:0,
            height:0
        })
        $(".info_box1").css({
            top:ww*0.02,
            left:ww*0.05
        })
        $(".info_sub_box1").animate({
            top:ww*0.25,
            left:ww*0.07,
            height:0,
            width:ww*0.1
        })
        $(".info_tit1").animate({
            top:ww*0.22
        })
        $(".info_txt1").animate({
            top:ww*0.265
        })
    })
    $(".info_black_box2").click(function(){
        $(".info_box,.info_sub_box,.info_tit,.info_txt,.info_black_box").css({
            display:"none"
        })
        $(".cancle2").css({
                width:ww*0.03,
                height:ww*0.03,
                right:ww*0.07,
                top:ww*0.05
        })
        $(".info_box2,.info_sub_box2,.info_tit2,.info_txt2").css({
            display:"block"
        })
        $(".info_box2").animate({
            top:ww*0.1,
            left:ww*0.05
        })
        $(".info_tit2").animate({
            top:ww*0.3,
            left:ww*0.07,
        })
        $(".info_txt2").animate({
            top:ww*0.345,
            left:ww*0.07
        })
        $(".info_sub_box2").animate({
            left:(ww/2)-ww*0.1
        },function(){
            $(".info_sub_box2").animate({
                width:ww*0.6,
                height:ww*0.4,
                left:ww*0.3,
                top:ww*0.05
            },function(){
                $(".info_sub_img2").addClass("info_sub_img2_on")
            })   
        })
    })
    $(".cancle2").click(function(){
        $(".info_box2").removeClass("info_box_light")
        $(".info_box,.info_sub_box,.info_tit,.info_txt,.info_black_box").css({
            display:"block"
        })
        $(".cancle2").css({
            width:0,
            height:0
        })
        $(".info_box2").css({
            top:ww*0.05,
            left:ww*0.27
        })
        $(".info_sub_box2").animate({
            top:ww*0.28,
            left:ww*0.29,
            height:0,
            width:ww*0.1
        })
        $(".info_tit2").animate({
            top:ww*0.25,
            left:ww*0.29,
        })
        $(".info_txt2").animate({
            top:ww*0.295,
            left:ww*0.29
        })
    })
    $(".info_black_box3").click(function(){
        $(".info_box,.info_sub_box,.info_tit,.info_txt,.info_black_box").css({
            display:"none"
        })
        $(".cancle3").css({
            width:ww*0.03,
            height:ww*0.03,
            right:ww*0.07,
            top:ww*0.21
    })
        $(".info_box3,.info_sub_box3,.info_tit3,.info_txt3").css({
            display:"block"
        })
        $(".info_box3").animate({
            top:ww*0.25
        })
        $(".info_tit3").animate({
            top:ww*0.45,
            left:ww*0.07,
        })
        $(".info_txt3").animate({
            top:ww*0.495,
            left:ww*0.07
        })
        $(".info_sub_box3").animate({
            left:(ww/2)-ww*0.1,
            top:ww*0.42
        },function(){
            $(".info_sub_box3").animate({
                width:ww*0.6,
                height:ww*0.4,
                left:ww*0.3,
                top:ww*0.21
            },function(){
                $(".info_sub_img3").addClass("info_sub_img3_on")
            }) 
        })
    })
    $(".cancle3").click(function(){
        $(".info_box,.info_sub_box,.info_tit,.info_txt,.info_black_box").css({
            display:"block"
        })
        $(".cancle3").css({
            width:0,
            height:0
        })
        $(".info_box3").css({
            top:ww*0.32,
            left:ww*0.05
        })
        $(".info_sub_box3").animate({
            top:ww*0.55,
            left:ww*0.07,
            height:0,
            width:ww*0.1
        })
        $(".info_tit3").animate({
            top:ww*0.52,
            left:ww*0.07
        })
        $(".info_txt3").animate({
            top:ww*0.565,
            left:ww*0.07
        })
    })
    $(".info_black_box").hover(function(){
        $(this).addClass("info_black_box_off")
    },function(){
        $(this).removeClass("info_black_box_off")
    })
    // $(".info_black_box4").click(function(){
    //     $(".info_box,.info_sub_box,.info_tit,.info_txt,.info_black_box").css({
    //         display:"none"
    //     })
    //     $(".cancle4").css({
    //         width:ww*0.03,
    //         height:ww*0.03,
    //         right:ww*0.07,
    //         top:ww*0.21
    // })
    //     $(".info_box4,.info_sub_box4,.info_tit4,.info_txt4").css({
    //         display:"block"
    //     })
    //     $(".info_box4").animate({
    //         top:ww*0.25,
    //         left:ww*0.05
    //     })
    //     $(".info_tit4").animate({
    //         top:ww*0.45,
    //         left:ww*0.07,
    //     })
    //     $(".info_txt4").animate({
    //         top:ww*0.495,
    //         left:ww*0.07
    //     })
    //     $(".info_sub_box4").animate({
    //         left:(ww/2)-ww*0.1,
    //         top:ww*0.42
    //     },function(){
    //         $(".info_sub_box4").animate({
    //             width:ww*0.6,
    //             height:ww*0.4,
    //             left:ww*0.3,
    //             top:ww*0.21
    //         },function(){
    //             $(".info_sub_img4").addClass("info_sub_img4_on")
    //         }) 
    //     })
    // })
    // $(".cancle4").click(function(){
    //     $(".info_box,.info_sub_box,.info_click,.info_tit,.info_txt,.info_black_box").css({
    //         display:"block"
    //     })
    //     $(".cancle4").css({
    //         width:0,
    //         height:0
    //     })
    //     $(".info_box4").animate({
    //         top:ww*0.35,
    //         left:ww*0.27
    //     })
    //     $(".info_sub_box4").animate({
    //         top:ww*0.58,
    //         left:ww*0.29,
    //         height:0,
    //         width:ww*0.1
    //     })
    //     $(".info_click4").animate({
    //         top:ww*0.36,
    //         left:ww*0.43
    //     })
    //     $(".info_tit4").animate({
    //         top:ww*0.55,
    //         left:ww*0.29,
    //     })
    //     $(".info_txt4").animate({
    //         top:ww*0.595,
    //         left:ww*0.29
    //     })
    // })
    $(".warn_but1").click(function(){
        $(".warn_tab_box").css({
            display:"none"
        })
        $(".warn_tab_box1").css({
            display:"block"
         })
    })
    $(".warn_but2").click(function(){
        $(".warn_tab_box").css({
            display:"none"
        })
        $(".warn_tab_box2").css({
            display:"block"
        })
    })
    $(".warn_but3").click(function(){
        $(".warn_tab_box").css({
            display:"none"
        })
        $(".warn_tab_box3").css({
            display:"block"
        })
    })
    $(".left_arrow1").click(function(){
        $(".recomm_box").last().prependTo(".recomm_move1")
        $(".recomm_move1").css({
            left:-ww*0.21
        }).animate({
            left:0
        },1000)
        $(".recomm_txt").last().prependTo(".recomm_move_txt")
        $(".recomm_move_txt").css({
            left:-ww*0.21
        }).animate({
            left:0
        },1000)
    })
    $(".right_arrow1").click(function(){
        $(".recomm_move1").animate({
            left:-ww*0.225
        },1000,function(){
            $(".recomm_box").first().appendTo(".recomm_move1")
            $(".recomm_move1").css({
                left:0
            })
        })
        $(".recomm_move_txt").animate({
            left:-ww*0.225
        },1000,function(){
            $(".recomm_txt").first().appendTo(".recomm_move_txt")
            $(".recomm_move_txt").css({
                left:0
            })
        })
        
    })

    $(".left_arrow2").click(function(){
        $(".recomm_box2").removeClass("recomm_box2_on")
        $(".recomm_box2_img").removeClass("recomm_box2_img_on")
        $(".recomm_box2").last().prependTo(".recomm_move2")
        $(".recomm_box2").eq(1).addClass("recomm_box2_on")
        $(".recomm_box2_img").eq(1).addClass("recomm_box2_img_on")
        $(".recomm_move2").css({
            left:-ww*0.21
        }).animate({
            left:0
        },1000)
        $(".recomm_txt2").last().prependTo(".recomm_move_txt2")
        $(".recomm_move_txt2").css({
            left:-ww*0.21
        }).animate({
            left:0
        })
        $(".recomm_txt2").removeClass("recomm_box2_on")
        $(".recomm_txt2").eq(1).addClass("recomm_box2_on")
    })
    $(".right_arrow2").click(function(){
        $(".recomm_move2").animate({
            left:-ww*0.22
        },function(){
            $(".recomm_box2").first().appendTo(".recomm_move2")
            $(".recomm_move2").css({
                left:0
            })
            $(".recomm_box2").removeClass("recomm_box2_on")
            $(".recomm_box2_img").removeClass("recomm_box2_img_on")
            $(".recomm_box2").eq(1).addClass("recomm_box2_on")
            $(".recomm_box2_img").eq(1).addClass("recomm_box2_img_on")
        })
        $(".recomm_move_txt2").animate({
            left:-ww*0.22
        },function(){
            $(".recomm_txt2").first().appendTo(".recomm_move_txt2")
            $(".recomm_move_txt2").css({
                left:0
            })
            $(".recomm_txt2").removeClass("recomm_box2_on")
            $(".recomm_txt2").eq(1).addClass("recomm_box2_on")
        })
    })
            $(".ham_menu").click(function(){
                if(click_num==0){
                    $(".timer_menu_wrap").css({
                        display:"flex"
                    })
                    $(".timer_menu_wrap").addClass("main_menu_on")
                    click_num+=1;
                }else{
                    $(".timer_menu_wrap").css({
                        display:"none"
                    })
                    $(".timer_menu_wrap").removeClass("main_menu_on")
                    click_num=0;
                }
            })

            $(window).scroll(function(){
                page_h1=$(".timer_page").height()
                page_h2=$(".intro_page").height()
                page_h3=$(".info_page").height()
                page_h4=$(".warn_page").height()
                page_h5=$(".recomm_page1").height()
                page_h6=$(".recomm_page2").height()
                page_h7=$(".footer_page").height()
                page_h1d=page_h1/2
                page_h12=page_h1d+page_h2
                page_h12d=page_h12/2
                page_h13=page_h12+page_h3
                page_h14=page_h13+page_h4
                page_h15=page_h14+page_h5
                page_h16=page_h15+page_h6
                page_h=$(window).scrollTop()
                if(page_h>0 && page_h<page_h1d){
                    $(".intro_tit_box,.intro_txt_box").removeClass("intro_tit_box_left")
                    $(".info_right_tit,.info_right_txt,.info_homepage").removeClass("info_right_left")
                    $(".map_icon").removeClass("map_icon_on")
                }else if(page_h>page_h1d && page_h<page_h12){
                    $(".intro_tit_box,.intro_txt_box").addClass("intro_tit_box_left")
                    $(".map_icon").addClass("map_icon_on")
                }
                else if(page_h>page_h12 && page_h<page_h13){
                    $(".map_icon").removeClass("map_icon_on")
                    $(".intro_tit_box,.intro_txt_box").removeClass("intro_tit_box_left")
                    $(".info_right_tit,.info_right_txt,.info_homepage").addClass("info_right_left")
                }else if(page_h>page_h13){
                    $(".info_right_tit,.info_right_txt,.info_homepage").removeClass("info_right_left")
                }
    
                if(page_h>page_h13 && page_h<page_h14){
                    $(".warn_tit").addClass("warn_tit_on")
                }else{
                    $(".warn_tit").removeClass("warn_tit_on")
                }
                if(page_h>page_h14 && page_h<page_h15){
                    $(".recomm_tit_box").addClass("recomm_tit_box_on")
                }else{
                    $(".recomm_tit_box").removeClass("recomm_tit_box_on")
                }
                if(page_h>page_h15 && page_h<page_h16){
                    $(".recomm_tit_box2").addClass("recomm_tit_box_on")
                }else{
                    $(".recomm_tit_box2").removeClass("recomm_tit_box_on")
                }

                if(page_h>page_h1){
                    // $(".timer_menu_wrap").css({
                    //     display:"none"
                    // })
                    // $(".ham_menu").css({
                    //     display:"block"
                    // })
                    $(".timer_menu_wrap").removeClass("timer_menu_wrap_flex")
                    $(".timer_menu_wrap").addClass("timer_menu_wrap_off")
                    $(".ham_menu").addClass("ham_menu_on")
                }else if(page_h<page_h1){
                    // $(".timer_menu_wrap").css({
                    //     display:"flex"
                    // })
                    // $(".ham_menu").css({
                    //     display:"none"
                    // })
                    $(".timer_menu_wrap").removeClass("timer_menu_wrap_off")
                    $(".timer_menu_wrap").addClass("timer_menu_wrap_flex")
                    $(".ham_menu").removeClass("ham_menu_on")
                    click_num=0;
                }
            })
            

            
            $(".menu_scroll1").click(function(){
                page_h1=$(".timer_page").height()
                $("html,body").animate({
                    scrollTop:page_h1
                })
            })
            $(".menu_scroll2").click(function(){
                page_h2=$(".intro_page").height()
                $("html,body").animate({
                    scrollTop:page_h1+page_h2
                })
            })
            $(".menu_scroll3").click(function(){
                page_h3=$(".info_page").height()
                $("html,body").animate({
                    scrollTop:page_h1+page_h2+page_h3
                })
            })
            $(".menu_scroll4").click(function(){
                page_h4=$(".warn_page").height()
                $("html,body").animate({
                    scrollTop:page_h1+page_h2+page_h3+page_h4
                })
            })
            $(".menu_scroll5").click(function(){
                page_h5=$(".recomm_page1").height()
                $("html,body").animate({
                    scrollTop:page_h1+page_h2+page_h3+page_h4+page_h5
                })
            })
            $(".menu_scroll6").click(function(){
                page_h6=$(".recomm_page2").height()
                $("html,body").animate({
                    scrollTop:page_h1+page_h2+page_h3+page_h4+page_h5+page_h6
                })
            })
            $(".top_menu").click(function(){
                $("html,body").animate({
                    scrollTop:0
                })
            })
            

            function updateTimer() {
                let future = Date.parse("2023/11/04 18:00:00");
                let now = new Date();
                let diff = future - now;
        
                let days = Math.floor(diff / (1000 * 60 * 60 * 24));
                let hours = Math.floor(diff / (1000 * 60 * 60));
                let mins = Math.floor(diff / (1000 * 60));
                let secs = Math.floor(diff / 1000);
        
                let d = days;
                let h = hours - days * 24;
                let m = mins - hours * 60;
                let s = secs - mins * 60;
        
                $(".day").text(d)
                $(".hour").text(h)
                $(".min").text(m)
                $(".sec").text(s)
            }
    

            $(".notice_box").hover(function(){
                $(this).addClass("notice_box_on")
            },function(){
                $(this).removeClass("notice_box_on")
            })







})