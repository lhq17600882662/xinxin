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
		},600);
		b=true;
		if(off==true){
			$('.oneimg').css('display','none');
			$('.twoimg').css('display','block');
			$('.lhq-ul').css('opacity','0')
			setTimeout(function(){
				$('.lhq-ul').css('top','-70px')
			},500);
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