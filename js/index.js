$(document).ready(function(){
    let ww=$(window).width();
    let wh=$(window).height();

    layout();
    $(window).resize(function(){
        layout();
    })
        
    

    function layout(){
        ww=$(window).width();
        wh=$(window).height();
        info_bg=["rgb(244, 128, 148)","rgb(196, 128, 244)","rgb(123, 108, 238)","rgb(98, 241, 143)","rgb(246, 151, 97)"] 
        // 메인페이지시작
        // $(".wrap").css({
        //     width:ww,
        //     height:(ww*0.5018)*5.5
        // })
        $(".main_page").css({
            width:ww,
            // height:ww*0.5018,
            height:wh,
            fontSize:ww*0.043
        })
        $(".main_wrap").css({
            top:wh*0.3018
        })
        $(".main_text_wrap1").css({
            width:ww*0.63,
            height:ww*0.06,
            left:ww*0.2,
            // top:ww*((0.5018-0.2)/2)
            // top:wh*0.3018
        })
        $(".main_text_wrap2").css({
            width:ww*0.75,
            height:ww*0.06,
            left:ww*0.16,
            // top:ww*((0.5018-0.08)/2),
            // top:wh*0.4538,
            top:ww*0.06,
            fontSize:ww*0.038
        })
        $(".main_smile_icon_box").css({
            left:ww*0.237,
            top:ww*0.01
        })
        $(".main_smile_music").css({
            fontSize:ww*0.02
        })
        $(".main_smile_music1").css({
            left:ww*0.23,
            top:ww*0.0
        })
        $(".main_smile_music2").css({
            left:ww*0.28,
            top:ww*0.005
        })
        $(".main_smile_icon").css({
            width:ww*0.05,
            height:ww*0.05,
        })

        $(".main_bot_text_wrap").css({
            width:ww*0.2,
            height:ww*0.03,
            left:ww*0.4,
            bottom:ww*0.05
        })
        $(".main_bot_coin").css({
            width:ww*0.02,
            height:ww*0.02,
            left:ww*0.01
        })
        $(".main_bot_text").css({
            fontSize:ww*0.015,
            left:ww*0.04,
            top:-ww*0.005
        })

        // 소개페이지
        $(".info_page").css({
            width:ww,
            height:wh
        })
        $(".page_tit").css({
            width:ww,
            height:ww*0.07,
            fontSize:ww*0.05,
            lineHeight:ww*0.1+"px"
        })
        $(".info_box").css({
            width:ww,
            height:ww*0.075,
            fontSize:ww*0.04,
            lineHeight:ww*0.075+"px"
        })
        $(".info_move_box2, .info_move_box4").css({
            fontSize:ww*0.035
        })
        $(".info_box").eq(0).css({
            marginTop:ww*0.05
        })
        $(".info_move_box").css({
            top:0,
            background:function(index){
                return info_bg[index]
            }
        })
        // 기술페이지
        $(".skill_page").css({
            width:ww,
            // height:(ww*0.5018)*3
            height:wh*3
        })
        $(".skill_obj_wrap").css({
            top:wh*0.52
        })
        $(".skill_icon_box").css({
            width:ww*0.6,
            height:ww*0.3,
            // top:ww*0.1,
            // top:wh*0.2,
            top:-ww*0.14,
            left:ww*1.2,
        })
        $(".skill_icon").css({
            width:ww*0.08,
            height:ww*0.09,
        })
        $(".skill_icon1").css({
            // top:ww*0.1,
            // left:ww*0.2
        })
        $(".skill_icon2").css({
            top:ww*0.21,
            left:ww*0.1
        })
        $(".skill_icon3").css({
            // top:ww*0.1,
            left:ww*0.2
        })
        $(".skill_icon4").css({
            top:ww*0.21,
            left:ww*0.3,
            height:ww*0.08
        })
        $(".skill_icon5").css({
            // top:ww*0.1,
            left:ww*0.4,
            height:ww*0.08
        })
        $(".skill_icon6").css({
            top:ww*0.21,
            left:ww*0.5,
            height:ww*0.08
        })
        $(".pacicon").css({
            width:ww*0.02,
            height:ww*0.023,
            top:0,
            right:0
        })
        $(".pac_all_wrap").css({
            width:ww*0.8,
            height:ww*0.05,
            // top:ww*0.25,
            // top:wh*0.5,
            left:ww*0.1
        })
        $(".pac_ghost_box").css({
            width:ww*0.12,
            height:ww*0.05,
            top:0,
            left:0
        })
        $(".ghost").css({
            width:ww*0.025,
            height:ww*0.023
        })
        $(".ghost1").css({
            top:-ww*0.01
        })
        $(".ghost2").css({
            top:-ww*0.005,
            left:ww*0.03
        })
        $(".ghost3").css({
            top:ww*0.015
        })
        $(".ghost4").css({
            top:ww*0.02,
            left:ww*0.03
        })
        // $(".pacfood_box").css({
        //     width:ww*0.5,
        //     height:ww*0.02,
        //     top:ww*0.25,
        //     left:ww*0.27
        // })
        $(".pacfood").css({
            width:ww*0.005,
            height:ww*0.005,
            top:ww*0.005,
            marginLeft:ww*0.065
        })
        $(".pac_ghost_box").removeClass("pac_ghost_box_mo_on")
        // 포폴페이지
        $(".swiper").css({
            display:"none"
        })
        $(".pofo_page").css({
            width:ww,
            // height:(ww*0.5018)*3
            height:wh*3
        })
        $(".pofo_sub_tit").css({
            width:ww,
            height:ww*0.03,
            fontSize:ww*0.02,
            lineHeight:ww*0.03+"px",
            top:ww*0.065
        })
        $(".pofo_box_wrap").css({
            width:ww*0.7,
            height:ww*0.2,
            left:ww*0.15,
            top:0
        })
        $(".pofo_wrap").css({
            top:wh*0.35,
        })
        $(".pofo_box").css({
            width:ww*0.15,
            height:"100%"
        })
        $(".pofo_select_wrap").css({
            width:ww*0.2,
            height:ww*0.3,
            left:ww*0.125,
            // top:ww*0.03
            top:-ww*0.05
        })
        $(".pofo_select_box").css({
            width:ww*0.025,
            height:ww*0.04,
            left:ww*0.0875,
            top:-ww*0.02
        })
        $(".pofo_select_arrow").css({
            width:ww*0.025,
            height:ww*0.04,
            marginLeft:0,
            marginTop:0
        })
        $(".pofo_select_box2").css({
            width:ww*0.18,
            height:ww*0.24,
            top:ww*0.03,
            left:ww*0.01
        })
        $(".pofo_text_box").css({
            width:ww*0.3,
            height:ww*0.05,
            top:wh*0.86,
            left:ww*0.35,
            fontSize:ww*0.015
        })
        // 포폴페이지2
        $(".pf_2_wrap").css({
            width:ww*0.6,
            height:ww*0.3,
            top:wh*1.2,
            left:ww*0.2
        })
        $(".pf_2_left_box").css({
            width:ww*0.25,
            height:ww*0.3,
        })
        $(".pf_2_right_box").css({
            width:ww*0.3,
            height:ww*0.2,
            top:ww*0.03,
            right:0
        })
        $(".pf_2_right_name").css({
            height:ww*0.05,
            fontSize:ww*0.015,
            lineHeight:ww*0.05+"px"
        })
        $(".pf_2_right_info").css({
            height:ww*0.13,
            fontSize:ww*0.01,
            opacity:0
        })
        $(".pf_2_right_box_wrap").css({
            height:ww*0.02,
            lineHeight:ww*0.02+"px",
            fontSize:ww*0.01
        })
        $(".cancle").css({
            width:ww*0.03,
            height:ww*0.03
        })
        $(".pf_2_right_name").text("")
        $(".pf_2_wrap").removeClass("pf_2_wrap_on")
        $(".pofo_box_wrap").removeClass("pofo_box_wrap_off")
        // 컨택페이지
        $(".contact_page").css({
            width:ww,
            // height:ww*1.5
            height:wh*3
        })
        $(".contact_box").css({
            fontSize:ww*0.02,
            transform:"translateY(1500%)"
        })
        $(".contact_wrap").css({
            top:wh*0.30
        })
        $(".contact_mail").css({
            width:ww*0.4,
            height:ww*0.03,
            // top:ww*0.15,
            left:ww*0.15
        })
        $(".contact_kakao").css({
            width:ww*0.4,
            height:ww*0.03,
            // top:ww*0.185,
            top:ww*0.035,
            left:ww*0.15
        })
        $(".contact_thx").css({
            width:ww*0.3,
            height:ww*0.06,
            top:ww*0.10,
            left:ww*0.15,
            fontSize:ww*0.05
        })
        $(".contact_you").css({
            width:ww*0.15,
            height:ww*0.06,
            top:ww*0.13,
            left:ww*0.33,
            fontSize:ww*0.05
        })
        $(".contact_page_wrap").css({
            width:ww,
            height:wh*3
        })
        $(".face_wrap").css({
            left:ww*0.6,
            top:wh*0.3
        })
        $(".contact_face").css({
            width:ww*0.2,
            height:ww*0.18,
        })
        $(".sunglasses").css({
            width:ww*0.15,
            height:ww*0.03,
            top:ww*0.085,
            left:ww*0.025,
            transform:"translateY(-1500%)"
        })
        // 논페이지
        $(".none_page").css({
            width:ww,
            height:wh*3
        })
        // 반응형 
        if(ww<=1350){
            $(".main_wrap").css({
                top:wh*0.4018,
            })
            $(".main_bot_text_wrap").css({
                width:ww*0.6,
                height:ww*0.03,
                left:ww*0.2,
                bottom:ww*0.05
            })
            $(".main_bot_coin").css({
                width:ww*0.05,
                height:ww*0.05,
                left:ww*0.12,
                top:ww*0.0
            })
            $(".main_bot_text").css({
                fontSize:ww*0.04,
                left:ww*0.19,
                top:-ww*0.005
            })
            $(".info_box").css({
                height:wh*0.15,
                lineHeight:wh*0.15+"px"
            })
        }
        // 모바일
        mo_info_num=0;
        if(ww<=650){
            // 모바일 메인 페이지
            $(".main_page").css({
                opacity:1
            })
            $(".mo_main_wrap").css({
                width:ww*0.8,
                height:ww,
                top:wh*0.2,
                left:ww*0.1
            })
            $(".mo_main_text").css({
                fontSize:ww*0.1
            })
            $(".mo_smile_icon").css({
                width:ww*0.6,
                height:ww*0.6,
                left:ww*0.1
            })
            $(".main_smile_music").css({
                fontSize:ww*0.15,
            })
            $(".main_smile_music1").css({
                left:ww*0.1,
                top:wh*0.20
            })
            $(".main_smile_music2").css({
                left:ww*0.55,
                top:wh*0.17
            })
            // 모바일 인포페이지
            $(".info_page").css({
                opacity:1
            })
            $(".mo_info_box").css({
                width:ww,
                height:wh*0.15,
                lineHeight:wh*0.15+"px"
            })
            $(".mo_info_box").eq(0).css({
                marginTop:ww*0.05
            })
            $(".mo_info_in_box").css({
                background:function(index){
                    return info_bg[index]
                }
            })

            //모바일 스킬페이지
            $(".skill_page").css({
                opacity:1,
                height:wh*0.9
            })
            $(".skill_icon_box").css({
                width:ww*0.9,
                height:ww,
                left:ww*0.05,
                top:-wh*0.28,
            })
            $(".skill_icon").css({
                width:ww*0.2,
                height:ww*0.23
            })
            $(".skill_icon2").css({
                top:ww*0.31,
                left:0,
            })
            $(".skill_icon3").css({
                left:ww*0.35
            })
            $(".skill_icon4").css({
                top:ww*0.31,
                left:ww*0.35,
                height:ww*0.2
            })
            $(".skill_icon5").css({
                // top:ww*0.1,
                left:ww*0.70,
                height:ww*0.2
            })
            $(".skill_icon6").css({
                top:ww*0.31,
                left:ww*0.7,
                height:ww*0.2
            })
            $(".pac_ghost_box").css({
                top:wh*0.1,
                width:ww*0.2
            })
            $(".pacicon").css({
                width:ww*0.06,
                height:ww*0.067,
                top:0,
                right:0
            })
            $(".ghost").css({
                width:ww*0.05,
                height:ww*0.056
            })
            $(".ghost1").css({
                top:-ww*0.03
            })
            $(".ghost2").css({
                top:-ww*0.015,
                left:ww*0.06
            })
            $(".ghost3").css({
                top:ww*0.03
            })
            $(".ghost4").css({
                top:ww*0.05,
                left:ww*0.06
            })
            pac_return();
            $(".pac_ghost_box").addClass("pac_ghost_box_mo_on")
            //모바일 포폴페이지
            $(".swiper").css({
                display:"block"
            })
            $(".pofo_page").css({
                height:wh*1.2
            })
            $(".pofo_wrap").css({
                top:wh*0.2
            })
            $(".pofo_box_wrap").css({
                width:ww*3,
                height:ww,
                left:0,
                top:ww*0.08
            })
            $(".pofo_box").css({
                width:ww*0.7,
                height:"100%"
            })
            $(".pofo_select_wrap").css({
                width:ww*0.2,
                height:ww*0.3,
                left:ww*0.015,
                // top:-ww*0.05
            })
            $(".pofo_select_box2").css({
                width:ww*0.95,
                height:ww*1.2
            })
            $(".pofo_select_arrow").css({
                width:ww*0.13,
                height:ww*0.2,
                marginLeft:ww*0.34,
                marginTop:-ww*0.1
            })
            $(".mo_arrow").css({
                fontSize:ww*0.1,
                top:wh*0.25
            })
            $(".mo_right_arrow").css({
                right:0
            })
            $(".swiper").css({
                width:ww*0.7,
                height:ww*0.8,
                top:wh*0.15
            })
            $(".pf_2_wrap").css({
                width:ww*0.8,
                height:ww*1.2,
                left:ww*0.1,
                top:wh*0.1
            })
            $(".pf_2_left_box").css({
                width:"100%",
                height:ww*0.5,
            })
            $(".pf_2_right_box").css({
                width:"100%",
                height:ww*0.5,
                top:ww*0.9,
                right:0
            })
            $(".pf_2_right_info").css({
                opacity:1
            })
            $(".pf_2_right_name").css({
                height:ww*0.1,
                fontSize:ww*0.06,
                lineHeight:ww*0.1+"px",
                
            })
            $(".pf_2_right_name2").css({
                fontSize:ww*0.05
            })
            $(".pf_2_right_info").css({
                height:ww*0.3,
                fontSize:ww*0.035,
            })
            $(".pf_2_right_box_wrap").css({
                height:ww*0.1,
                lineHeight:ww*0.1+"px",
                fontSize:ww*0.04
            })
            $(".cancle").css({
                width:ww*0.08,
                height:ww*0.08
            })
            $(".mo_select").css({
                width:ww*0.08,
                height:ww*0.125,
                top:wh*0.07,
                left:ww*0.46
            })
            $(".pf_2_right_name1").text("name : Grip Swany")
            $(".pf_2_right_name2").text("name : Busan Firework Festival")
            $(".pf_2_right_name3").text("name : Kespa")
            $(".pf_2_wrap").removeClass("pf_2_wrap_on")
            $(".pf_2_wrap_1").addClass("pf_2_wrap_on")
            // 모바일 컨택페이지
            $(".contact_page_wrap").css({
                height:wh*1.2
            })
            $(".contact_page").css({
                height:wh*1.2
            })
            $(".contact_box").css({
                fontSize:ww*0.045,
                transform:"translateY(0)"
            })
            $(".contact_mail").css({
                width:ww,
                height:ww*0.05,
                left:0
            })
            $(".contact_kakao").css({
                width:ww,
                height:ww*0.05,
                top:ww*0.15,
                left:0
            })
            $(".contact_thx").css({
                width:ww,
                height:ww*0.05,
                top:ww*0.3,
                left:0,
                fontSize:ww*0.1
            })
            $(".contact_you").css({
                width:ww,
                height:ww*0.05,
                top:ww*0.43,
                left:0,
                fontSize:ww*0.1
            })
            $(".contact_box").each(function(){
                let pc_contact2=$(this).html();
                $(this).html(pc_contact2.replaceAll(":","<br>"));
            })
            $(".none_page").css({
                width:0,
                height:0
            })
            $(".face_wrap").css({
                left:ww*0.1,
                top:wh*0.65
            })
            $(".contact_face").css({
                width:ww*0.8,
                height:ww*0.75,
            })
            $(".sunglasses").css({
                width:ww*0.6,
                height:ww*0.15,
                top:ww*0.355,
                left:ww*0.095,
                transform:"translateY(0%)"
            })
        }else{
            $(".contact_box").each(function(){
                let pc_contact=$(this).html();
                $(this).html(pc_contact.replaceAll("<br>",":"));
            })
        }
    }
        // 실행식영역
        page_h1=$(".main_page").height();
        page_h2=$(".info_page").height();
        page_h3=$(".skill_page").height();
        page_h4=$(".pofo_page").height();
        page_h5=$(".contact_page").height();
        page_main=$(".main_page").offset().top;
        page_info=$(".info_page").offset().top;
        page_skill=$(".skill_page").offset().top;
        page_pofo=$(".pofo_page").offset().top;
        page_contact=$(".contact_page").offset().top;
        page_end=$(document).height();
        // @@스크롤실행식@@
       
            $(window).scroll(function(){
                page_h=$(window).scrollTop();
                // scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
                main_page_opac=page_h1/(page_h*10);
                info_page_opac=(page_h*0.001)/2
                
                if(ww>650){
                    if(main_page_opac<0.12){
                        main_page_opac=0
                    }
                    if(info_page_opac<0.3){
                        info_page_opac=0
                    }else if(info_page_opac>0.4){
                        info_page_opac=1
                    }
                    $(".main_page").css({
                        opacity:main_page_opac
                    })
                    $(".info_page").css({
                        opacity:info_page_opac
                    })
                    if(page_h<(page_h1+page_h2)){
                        $(".skill_page").css({
                            opacity:0
                        })
                    }
                    if(page_h>(page_skill) && page_h<(page_pofo)){
                        val2=page_h-(page_skill)
                        if(page_h>(page_skill) && page_h<=(page_skill+99)){
                            val2=0
                            $(window).scrollTop(page_skill)
                        }
                        $(".skill_page").css({
                            opacity:val2*0.002
                        })
                        pacv=parseInt((val2-500)*0.01)
                        if(pacv>=0 && pacv<15){
                            
                            if(pacv%2==0){
                                $(".pacicon").children("img").attr("src","./img/pacman_2.png")
                            }else{
                                $(".pacicon").children("img").attr("src","./img/pacman.png", "alt","pm1")
                            }
                            $(".pac_ghost_box").css({
                                left:pacv*(ww*0.07)
                            })
                                $(`.pacfood:lt(${pacv})`).addClass("pacfood_off")
                                // $(".pacfood").eq(pacv-1).addClass("pacfood_off")
                                // alert(pacv)
                            if(pacv>=14){
                                $(".ghost").children("img").attr("src","./img/ghostgang.png")
                                $(".pacicon").css({
                                    transform:"rotateY(180deg)"
                                })
                            }else if(pacv<=0){
                                pac_return()
                            }
                        }
                        val3=(val2-500)*0.001
                        if(val3>1){
                            val3=1
                        }
                        $(".skill_icon_box").css({
                            left:(ww*1.2)-(ww*val3)
                        })
                    }
                    if(page_h>page_contact && page_h<page_end){
                        val4=page_h-(page_contact)
                        if(page_h>(page_contact) && page_h<=(page_contact+99)){
                            val4=0
                            $(window).scrollTop(page_contact)
                        }
                        $(".sunglasses").addClass("sungl_on")
                        val5=1500-val4
                        if(val5<=0){
                            val5=0
                        }
                        $(".contact_box").css({
                            transform:`translateY(${val5}%)`
                        })
                        $(".sunglasses").css({
                            transform:`translateY(${-val5}%)`
                        })
                    }else{
                        $(".sunglasses").removeClass("sungl_on")
                    }
                    if(page_h>=page_contact){
                        $(".contact_page").addClass("contact_page_fix")
                    }else{
                        $(".contact_page").removeClass("contact_page_fix")
                    }
                }
            })

            function pac_return(){
                $(".pacicon").css({
                    transform:"rotateY(0deg)"
                })
                $(".ghost1").children("img").attr("src","./img/ghost1.png")
                $(".ghost2").children("img").attr("src","./img/ghost2.png")
                $(".ghost3").children("img").attr("src","./img/ghost3.png")
                $(".ghost4").children("img").attr("src","./img/ghost4.png")
            } 

               // @@인포페이지 실행식@@
                
                $(".info_box").hover(function(){
                    num=$(this).index();
                    if(ww>650){
                        auto=setInterval(function(){
                            $(".info_box").eq(num-1).children(".info_move_box").animate({
                                left:"-100%"
                            },10000,'linear',function(){
                                $(".info_box").eq(num-1).children(".info_text").eq(0).appendTo(".info_move_box")
                                $(".info_box").eq(num-1).children(".info_move_box").css({
                                    left:0
                                })
                            })
                        })
                    }
                },function(){
                    if(ww>650){
                        clearInterval(auto)
                        $(".info_move_box").finish();
                    }
                })
                
                //@@모바일 인포 실행식@@
                mo_info_auto=setInterval(function(){
                    $(".mo_info_box").eq(mo_info_num).addClass("mo_info_box_off")
                    $(".mo_info_in_box").eq(mo_info_num).addClass("mo_info_in_box_on")
                },1500)
                mo_info_auto2=setInterval(function(){
                    $(".mo_info_box").eq(mo_info_num).removeClass("mo_info_box_off")
                    $(".mo_info_in_box").eq(mo_info_num).removeClass("mo_info_in_box_on")
                    mo_info_num++
                    if(mo_info_num>=5){
                        mo_info_num=0
                    }
                },3000)

                // @@포폴1페이지 실행식@@
    
            p_text1="-Grip Swany-"
            p_text2="-Busan Firework Festival-"
            p_text3="-Kespa-"
            $(".pofo_box").hover(function(){
                if(ww>650){
                    $(".pofo_select_wrap").addClass("pofo_select_wrap_on")
                    po_num=$(this).offset().left;
                    po_index=$(this).index()
                    $(".pofo_select_wrap").css({
                        left:po_num-ww*0.025
                    })
                    if(po_index==0){
                        $(".pofo_text_box").text(p_text1)
                    }else if(po_index==1){
                        $(".pofo_text_box").text(p_text2)
                    }else if(po_index==2){
                        $(".pofo_text_box").text(p_text3)
                    }
                }
            },function(){
               if(ww>650){
                    $(".pofo_select_wrap").removeClass("pofo_select_wrap_on")
                    $(".pofo_text_box").text("")
               }
            })
            
            // @@포폴2페이지 실행식@@
    
            $(".pofo_box").click(function(){
                po_index=$(this).index()
                txtIdx2 = 0;
                if(ww>650){
                    $(".pofo_box_wrap").animate({
                        top:-ww*0.5
                    },function(){
                        $(".pofo_box_wrap").addClass("pofo_box_wrap_off")
                    })
                    if(po_index==0){
                        $(".pf_2_wrap_1").addClass("pf_2_wrap_on")
                        pf_1_content = "name : grip swany ";
                        pf_1_text = document.querySelector(".pf_2_right_name1");
                    }else if(po_index==1){
                        $(".pf_2_wrap_2").addClass("pf_2_wrap_on")
                        pf_1_content = "name : busan firework festival ";
                        pf_1_text = document.querySelector(".pf_2_right_name2");
                    }else if(po_index==2){
                        $(".pf_2_wrap_3").addClass("pf_2_wrap_on")
                        pf_1_content = "blank1234 ";
                        pf_1_text = document.querySelector(".pf_2_right_name3");
                    }
                    $(".pf_2_wrap").animate({
                        top:wh*0.28
                    },2000,function(){
                        typing_pf_2_1()
                        $(".pf_2_right_info").delay(1000).animate({
                                opacity:1
                        },1000,function(){
                            $(".cancle").animate({
                                opacity:1
                            })
                        })
                    })
                }else if(ww<=650){
                    $(".pofo_wrap").addClass("pofo_wrap_off")
                    $(".mo_arrow").addClass("mo_arrow_off")
                    if(mo_po_click_num==0){
                        $(".pf_2_wrap_1").addClass("pf_2_wrap_on")
                    }else if(mo_po_click_num==1){
                        $(".pf_2_wrap_2").addClass("pf_2_wrap_on")
                    }else if(mo_po_click_num==2){
                        $(".pf_2_wrap_3").addClass("pf_2_wrap_on")
                    }
                    
                }
        
            })
    
            $(".cancle").click(function(){
                if(ww>650){
                    $(".pofo_box_wrap").removeClass("pofo_box_wrap_off")
                    $(".pofo_box_wrap").animate({
                        top:0
                    })
                    $(".pf_2_wrap").animate({
                        top:wh*1.2
                    })
                    $(".pf_2_wrap").removeClass("pf_2_wrap_on")
                    $(".pf_2_right_name").text("")
                    $(".pf_2_right_info").finish()
                    $(".cancle").finish()
                    $(".pf_2_right_info").css({
                        opacity:0
                    })
                }else if(ww<=650){
                }
            })
                
            // pf_1_text.textContent = "";
            function typing_pf_2_1(){
               txt2 = pf_1_content[txtIdx2++];
              if (txt2 == undefined) return;
              pf_1_text.innerHTML += txt2=== "\n" ? "<br/>": txt2;
              if (txtIdx2 >= pf_1_content.length) {
                  txtIdx2 =  pf_1_content.length-1;
              }else{
                setTimeout(typing_pf_2_1, 100)
              }
            }
            // 모바일포폴실행식
            mo_po_click_num=0
            var swiper = new Swiper(".mySwiper", {
                direction: 'horizontal',
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                on: {
                    activeIndexChange: function () {
                      mo_po_index=this.realIndex;
                      if(mo_po_index==0){
                        $(".pf_2_wrap").removeClass("pf_2_wrap_on")
                        $(".pf_2_wrap_1").addClass("pf_2_wrap_on")
                      }else if(mo_po_index==1){
                        $(".pf_2_wrap").removeClass("pf_2_wrap_on")
                        $(".pf_2_wrap_2").addClass("pf_2_wrap_on")
                      }else if(mo_po_index==2){
                        $(".pf_2_wrap").removeClass("pf_2_wrap_on")
                        $(".pf_2_wrap_3").addClass("pf_2_wrap_on")
                      }
                    }
                  }
            });
           
        // @@메인페이지 실행식@@
            
        setTimeout(function(){
            $(".main_smile_icon").animate({
                opacity:1
            },1000)
        },3500)

        const content = "Welcome, Dohyeon's Play";
        const text = document.querySelector(".main_text");
        const text_blink = document.querySelector(".main_blink");
        // text.textContent = "";/
        text_blink.textContent = "_";
        let txtIdx = 0;
        function typing(){
              let txt = content[txtIdx++];
              if (txt == undefined) return;
            // =>else로 가려는 회로를 막음
              text.innerHTML += txt=== "\n" ? "<br/>": txt;
              if (txtIdx >= content.length) {
                  txtIdx = 0;
                  text_blink.textContent = "";
                  typing1()
              }else{
                setTimeout(typing, 100)
              }
        }
        typing();
            const content1 = "Just Enjoy \n\n\n\n Don't Get Stressed";
            const text1 = document.querySelector(".main_sec_text");
            const text_blink2 = document.querySelector(".main_blink2");
            text1.textContent = "";
            let txtIdx1=0;
            function typing1(){
                text_blink2.textContent = "_";
                let txt1 = content1[txtIdx1++];
                if(txt1 == undefined) return;
                text1.innerHTML += txt1=== "\n" ? "&nbsp;": txt1;
                if(txtIdx1 > content1.length) {
                    txtIdx1 = 0;
                }else{
                    setTimeout(typing1, 100)
                }
            }
        //     const mo_content = "Welcome\nDoHyeon's\nPlay";
        //     $(".mo_main_text").textContent = "";
        //     let mo_txtIdx=0;
        // function mo_typing(){
        //     let mo_txt=mo_content[mo_txtIdx];
        //     if(mo_txt == undefined) return;
        //     $(".mo_main_text").innerHTML += mo_txt=== "\n" ? "<br>": mo_txt;
        //     if(mo_txtIdx >= mo_content.length){
        //         mo_txtIdx =0;
        //     }else{
        //         setTimeout(typing, 100)
        //     }
        // }
        // mo_typing();
})