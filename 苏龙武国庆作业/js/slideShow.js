$(function(){
	var page = -1;         //当前索引，初始化为-1，因为一开始执行函数就++到0
	var start = true;      //开始状态，Boolean值（true/false）
	
	//轮播函数
	function slide(){
		if(start){         //如果，(start=true)
			page++;        //page+1
			if(page==5){   //轮播图片数为5张，索引值只有01234，到5的时候归零重新开始
				page = 0;
			}
			$('.silde').animate({   //设置动画，每次偏移page*833px
				left: -page*833
			},300)
			//设置导航li
			$('.silde-page li').removeClass('on');        //所有li移除on样式
			$('.silde-page li').eq(page).addClass('on');  //当前索引li添加on样式
		}
		setTimeout(slide,2000);       //2s后，再执行slide
		//setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。
		//setTimeout(要执行的代码, 等待的毫秒数)
        //setTimeout(JavaScript 函数, 等待的毫秒数)
	}
	slide();//调用函数
	
	//鼠标移入到轮播图上的时候，停止设置偏移量
	$('.focus').mouseover(function(){  //鼠标移入轮播时，轮播动画停止
		start = false;
	}).mouseout(function(){            //鼠标移出时，轮播动画继续开始
		start = true;
	})
	$('.silde-page li').mouseover(function(){  //当鼠标移入导航li时执行的函数
		page = $(this).index();                //当前导航li的索引值就赋给page
		$('.silde').stop(true,true).animate({
			left: -page*833
		},300)
		$('.silde-page li').removeClass('on');        //所有li移除on样式
		$('.silde-page li').eq(page).addClass('on');  //当前索引li添加on样式
	})
})