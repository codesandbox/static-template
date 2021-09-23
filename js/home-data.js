// 首页数据获取填充

/*
	banner数据
 */
setMask()
$.get(`${URLPROXY}http://admin.iqingtun.com/web/index/dolphin`,(data)=>{
	$.each(data.data.recommend,(i,value)=>{
		if (i>=5) {return false;}
		$('.banner-box li a').eq(i).attr('href',`./catalog.html?bookid=${value.book_id}`)
		$('.banner .banner-menu').append(
			`<a href='./catalog.html?bookid=${value.book_id}'>${value.book_title}</a>`
		)
	})
	/**
	* 最新推荐
	*/
	var html = "";
	$.each(data.data.bestsellers,(i,value)=>{
		if (i>=9) {return false;}
		html +=`
				<li>
					<div class="book-img">
						<a href="./catalog.html?bookid=${value.book_id}">
							<img src="http://${value.front_cover}" alt="">
						</a>
					</div>
				<div class="book-info">
					<h3><a href="./catalog.html?bookid=${value.book_id}">${value.book_title}</a></h3>
					<p class="book-about">${value.introduction}</p>
					<div class="info-box author-text">
						<a href="" class="author-text">
							<i class="iconfont">&#xe636;</i>
							<p>${value.u_name}</p>
						</a>
					</div>
				</div>
				</li>`
	})
	$('.host-block .host-left .host-new-book ul').html(html)
	setMask('none');
});


/**
 * 本周推荐
 */

$.get(`${URLPROXY}${encode('http://admin.iqingtun.com/web/bookroom/index?c_id=1&sales=1')}`,(data)=>{
	$.each(data.data,(i,value)=>{
		$('.host-block .host-right .host-week ul').append(`<li>
			<a href="javascript:;" class="category">[${value.update_status}]</a>
			<a href="./catalog.html?bookid=${value.id}" class="bookname">${value.title}</a>
			<span style="float:right;color:red;" class="iconfont">&#xe600;</i>${value.hits}</span>
		</li>`)
	})
});

/**
 * 限时免费
 */
$.get(`${URLPROXY}${encode('http://admin.iqingtun.com/web/bookroom/index?c_id=0&is_vip=1&sales=1&page=1')}`,(data)=>{
		$.each(data.data,(i,value)=>{
			if (i>=4) {return false;}
			$('.free-time ul').append(`<li>
					<img src="http://${value.front_cover}" alt="">
					<h3>${value.title}</h3>
					<a href="./catalog.html?bookid=${value.id}">免费阅读</a>
				</li>`)
		})
	});
/**
 * 榜单
 */
const rankinglist = ['update','hits','collect','recommend'];
rankinglist.forEach(function(val, index ) {
	$.get(`${URLPROXY}http://admin.iqingtun.com/web/rankinglist/${val}?id=&week=0&month=0&page=1`,(data)=>{
		$.each(data.data ,(i,value)=>{
			if (i==0) {
				$(`.ranking .rank_list:eq(${index}) ul`).append(`<li class="rank_first">
						<div class="rank_info">
							<span>NO.${i+1}</span>
							<h3><a href="./catalog.html?bookid=${value.book_id}">${value.book_title}</a></h3>
							<p>${value.c_title}· ${value.u_name}</p>
						</div>
						<div class="rank_bookimg">
							<a href="./catalog.html?bookid=${value.book_id}"><img src="http://${value.front_cover}" alt=""></a>
						</div>
					</li>`)
			}else{
				$(`.ranking .rank_list:eq(${index}) ul`).append(`<li>
						<span>${i+1}</span>
						<div class="rank_bookname">
							<h3><a href="./catalog.html?bookid=${value.book_id}">${value.book_title}</a></h3>
							<p>${value.u_name}</p>
						</div>
					</li>`)
			}

		})
	});

})

/**
 * 更新列表
 */
$.get(`${URLPROXY}http://guofeng.yuedu.163.com/bookUpdateInterface.do`,(data)=>{
	var updateBooks = ""
	$.each(data.list ,(i,value)=>{
		updateBooks +=`<li>
            <span class="classify">[${value.categoryLabel}]</span>
	            <span class="name">
                <a href="./catalog.html" target="_blank">《${value.title}》</a>
            </span>
            <span class="chapter">
            	<a href="./read.html" target="_blank">${value.latestArticleTitle}</a>
            	${value.vip ? '<em class="vip">vip</em>' : ''}
            </span>
            <span class="author">${value.author}</span>
            <span class="time">${value.updateTime}</span>
		</li>`
	})
	$('.updates ul').html(updateBooks)
});


