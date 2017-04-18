window.addEventListener('load',function(){
//导航

		var liheight=$('.weiyi').height()
		
	$('.lhq-ul>li').mouseover(function(){
		var navlength=$(this).children('.ul-er').children('a').length;
		$(this).children('.ul-er').css("height",liheight*navlength+'px')
	})
	$('.lhq-ul>li').mouseout(function(){
		$(this).children('.ul-er').css("height","0px")
	})

	//收缩导航条
	var off = true;
	var b = false;
	$('.oneimg').css('display','block');
	$('.twoimg').css('display','none');
	$('.leftimg').click(function(){
		if(b){
			return;
		}
		setTimeout(function(){
			b=false;
		},300);
		b=true;
		if(off==true){
			$('.oneimg').css('display','none');
			$('.twoimg').css('display','block');
			$('.lhq-ul').css('opacity','0')
			setTimeout(function(){
				$('.lhq-ul').css('top','-70px')
			},300);
			off = false;
		}else{
			$('.oneimg').css('display','block');
			$('.twoimg').css('display','none');
			$('.lhq-ul').css('opacity','1')
			$('.lhq-ul').css('top','0px')
			off=true;
		}
	})
})


window.addEventListener('load',function(){
				var isFirefox = typeof document.body.style.MozUserSelect != 'undefined',
				now = 0,
				active = true,
				all = document.getElementsByClassName("lhqq")[0],
				obj = all.getElementsByTagName("li");
				var cri = document.getElementsByClassName("caozuo")[0],
				    lhq = cri.getElementsByTagName("i");
			//绑定滚轮事件
			window.addEventListener(isFirefox ? 'DOMMouseScroll' : "mousewheel", fn, false);

			function fn(e) {
				e = e || event;
				a = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail % 3 == 0 ? e.detail / 3 : e.detail);
				if (active) {
					active = false;
					setTimeout(one, 1000)
					two(a)
				}
			}

			function one() {
				active = true;
			}

			function two(a) {
				now += a;
				if (now < -6) {
					now = -6;
				} else if (now > 0) {
					now = 0;
				}
				
				all.style.top = (now * 100) + "vh";
				var now1 = Math.abs(now);
				for (var i = 0, len = lhq.length; i <= len-1; i++) {
					if (i == now1) {
						obj[i].setAttribute("class","active");
						lhq[i].style.background='rgba(0,0,0,0)';
						lhq[i].style.border='2px solid #ffffff';
						lhq[i].style.width='14px';
						lhq[i].style.height='14px';
						lhq[i].style.borderRadius='30%';
					}else{
						obj[i].setAttribute("class","");
						lhq[i].style.background='';
						lhq[i].style.border='';
						lhq[i].style.width='';
						lhq[i].style.height='';
						lhq[i].style.borderRadius='';
					}
				}
			}
			two(0);
            cri.addEventListener("click",fn2,false);
            
            function fn2(e){
            	var num = e.target,
            	    str = num.getAttribute("date-url");
            	    now = parseInt(str);
            	    two(0);
            }
})

//轮播
$(function(){
	var index=0;
	var time;
	$('.XTB span:eq(0)').css('background','#55575A')
	$('.XTB span').click(function(){
		index=$(this).index()
		tab()
	})
	$('.LBleft').click(function(){
		index--;
		if(index == -1){
			index = $('.LBul li').length - 1;
		}
		tab();
	})
	
	$('.LBright').click(function(){
		index++;
//		index%=$('.LBul li').length;
		if(index == $('.LBul li').length){
			index = 0;
		}
		tab();
	})
	
	function tab(){
		$('.LBul li').eq(index).fadeIn(300).siblings().fadeOut(300);
		$('.XTBfather img').eq(index).fadeIn(300).siblings().fadeOut(300);
		$('.XTB span').eq(index).css('background','#55575A').siblings().css('background','#FFFFFF');
	}
	$('.LBul').hover(function(){
		clearInterval(time)
	},function(){
		clearInterval(time)
		time=setInterval(function(){
			index++;
			if(index == $('.LBul li').length){
				index = 0;
			}
			tab();
		},3000)
	}).trigger('mouseleave')
})