function exceptionHandle(e) {

	if ($.isEmpty(e) || $.isEmpty(e.respMsg) || e.respMsg == '') {
		e = new Object();
		e.respMsg = '网络正在开小差,请重试或联系客服热线95347';
	}
	$.openMobileCover();
	var html = template('./mobile/onecode/mer/error', e);
	$('#cover').prepend(html);
	return;
}

function errorHandle(e) {
	// alert(e)
	if ($.isEmpty(e)) {
		e = new Object();
	}
	e.respMsg = '网络正在开小差,请重试或联系客服热线95347';
	var html = template('./mobile/onecode/mer/error', e);
	$('#cover').prepend(html);
	return;
}

var thsPayUserTag = "";

// function TLBankGetAppKey(res) {
// 	console.log('手机银行userTag:',res);
// 	thsPayUserTag = res;
// }

function loginData(res) {
	// alert('bank:'+res)
	thsPayUserTag = res;
}

//=====================================================手机银行支付js=================================================

var paySuccessData = {};
var activeInfo = {};
var tradeInfos = {};


/**
 * 手机银行jsApi支付调起函数
 * 需要支付的时候调用TLBankGoPa-=
 * 另外声明一个function handleTLBankPayResult处理支付完成的逻辑
 */
function tradePayForTL(tradeInfo) {
	tradeInfos = JSON.parse(tradeInfo);
	var machine = navigator.userAgent;
	if (machine.indexOf("Android") > -1 || machine.indexOf("Linux") > -1) {
		try {
			window.LocalJavaScriptBridge.TLBankGoPay(tradeInfo);
		}catch (error){
			console.log(error)
		}
	}
	if (machine.indexOf("iPhone") > -1) {
		try {
			TLBankGoPay(tradeInfo);
		}catch (error){
			console.log(error)
		}
	}
}


/**
 * 手机银行jsApi支付回调函数
 */
function handleTLBankPayResult(resData) {
	console.log("手机银行返回resData: " + resData);
	// 回调的时候,安卓/ios都传递过来的是json字符串,需要使用eval()函数转化为js对象,然后再取对象中的字段,这样就没问题了
	resData = eval("(" + resData + ")");
	console.log("resData.resultCode: " + resData.resultCode);
	if ("1" == resData.resultCode) {
		sensors.track('pay_result',{
			'pay_amount':resData.realPayAmt,
			'pay_from': '手机银行',
			'is_success': false,
			'remarks': staticRemark,
			'business_number': paySuccessData.merId,
		});
		// 用户中途取消支付  
		$(".oneCodebox").attr("style", "display:none");
		if (paySuccessData.paySizeType === "01") {
			$('#submitButtonTwo').html('确认支付');
		} else if (paySuccessData.paySizeType === "02") {
			$('#cogAndPay').html('识别并支付');
		}
		$.closeMobileCover();
	}
	else if ("0" == resData.resultCode) {
		sensors.track('pay_result',{
			'pay_amount':resData.realPayAmt,
			'pay_from': '手机银行',
			'is_success': true,
			'remarks': staticRemark,
			'business_number': paySuccessData.merId,
		});
		var suyuan_flag = 0;
		$.ajax({
			url: request_url + "/SOA/userQual",
			type: "POST",
			timeout: 10000,
			async: true,
			contentType: 'application/json;charset=utf-8',
			data: JSON.stringify({ transSsn: paySuccessData.respTxnSsn, list: [{ merId: paySuccessData.merId, queryType: "01" }] }),
			dataType: "JSON",
			context: document.body,
			success: function (e) {
				if ($.txnIsSuzccess(e.respCode)) {
					// 丽水溯源
					if(e.list[0].activeFlag == '01'){
						$("body").html(template('mobile/onecode/mer/cover',null));
						window.location.href = 'http://sy.gsj.lishui.gov.cn/pay/companydetail.html?orderNo=' + paySuccessData.respTxnSsn + '&orderDt=' + paySuccessData.respTxnTime.replace(new RegExp(/-|:| /g), '') +
							'&orderAmount=' + resData.txnAmt + '&payType=04' + '&mid=' + paySuccessData.merId;
					}
					// TLJC
					if(e.list[0].activeFlag == '02'){
						suyuan_flag = 1;
						$("body").html(template('mobile/onecode/mer/cover',null));						
						window.location.href = 'https://www.xinanshizu.com/pay/tl/cost/callback?orderNo=' + paySuccessData.respTxnSsn + '&orderDt=' + paySuccessData.respTxnTime.replace(new RegExp(/-| /g), '') +
							'&orderAmount=' + resData.txnAmt + '&payType=银联' + '&merId=' + paySuccessData.merId;
					}
				}
			},
			timeout: function (e) { },
			error: function (e) { }
		});
		if (suyuan_flag) {
			return;
		}
		renderResult(resData,'2');
		getResultInfo(resData);
	} else {
		sensors.track('pay_result',{
			'pay_amount':resData.realPayAmt,
			'pay_from': '手机银行',
			'is_success': false,
			'remarks': staticRemark,
			'business_number': paySuccessData.merId,
		});
		$(".oneCodebox").attr("style", "display:none");
		$.closeMobileCover();
		var res = {};
		res.respMsg = resData.resultMsg;
		exceptionHandle(res);
	}
}


/**
 * 跳转结果页面
 * @param {*} resData 
 * @param {*} paymentChannel 0:支付宝 1：微信 2：手机银行
 */
function renderResult(resData,paymentChannel){
	// alert(JSON.stringify(resData))
	$("body").html(template('mobile/onecode/mer/payResult', null));
	if (paySuccessData.actAmt > 0) {
		$("#actDiv").css('display', "");
		$("#relAmtDiv").css('display', "");
		$("#actName").html(paySuccessData.actName);
		$("#actAmt").html(paySuccessData.actAmt);
		$("#relAmt").html(paySuccessData.payAmt);
	}
	if (paymentChannel == '2'){
		$("#di3").html(paySuccessData.merName);
	}
	else {
		$("#di3").html(resData.merName);
	}
	$("#di4").html(paySuccessData.respTxnTime);
	$("#di5").html(paySuccessData.respTxnSsn);
	if (resData.pointDeductAmt) {
		// 参与积分抵扣金额
		// $(".amtInfoDiv").css({ height: "1.48rem" });
		$(".costStyleTwo").css({ lineHeight: "0.65rem" });
		$("#paymanjian").css({ display: "flex" });
		$("#di2").html((resData.pointDeductAmt>0?"-":"") + resData.pointDeductAmt);
	} else {
		// 没有参与积分抵扣金额
		// $(".amtInfoDiv").css({ height: "0.85rem" });
		$(".costStyleTwo").css({ lineHeight: "0.65rem" });
		$("#payOrder").css({ lineHeight: "0.85rem" });
		$("#paymanjian").css({ display: "none" });
	}

	switch(paymentChannel){
		case '0':
			$("#payAmt").html(resData.payAmt);
			$("#di1").html("" + resData.inputAmt);
			$("#di6").html(resData.tradeNO);
			$("#di7").html("支付宝");
			break;
		case '1':
			$("#payAmt").html(resData.payAmt);
			$("#di1").html("" + resData.inputAmt);
			$("#di6").html(resData.transactionId);
			$("#di7").html("微信");
			break;
		case '2':
			resData.realPayAmt = amtSub(paySuccessData.payAmt, resData.pointDeductAmt?resData.pointDeductAmt:"0.00")
			$("#payAmt").html(resData.realPayAmt);
			$("#di1").html("" + paySuccessData.orderAmt);
			$("#relAmt").html(resData.realPayAmt);
			$("#di7").html('手机银行');
			$("#payTradeNo").css({ display: "none" });
			$(".amtInfoDivTwo").css({ height: "3.56rem" });
	}
	$("#payResp").html("订单号");
	$("#finish").click(function () {
		$.mobileWindowClose();
	});
	if ((paySuccessData.remark === '') || (paySuccessData.remark === null)) {
		$("#di8").html("---");
	} else {
		$("#di8").html(paySuccessData.remark);
	}
}
function priceFormat(price) {
	return parseFloat(price).toFixed(2);
}
function amtSub(amt1, amt2) {
	var carry = 0;
	var p1 = amt1.split('.')[1], p2 = amt2.split(".")[1];
	var z1 = amt1.split('.')[0], z2 = amt2.split('.')[0];
	if (p1 == undefined) {
        p1 = "00";
    }
    if (p2 == undefined) {
        p2 = "00";
    }
    if (p1.length < 2) {
        p1 += "0";
    }
    if (p2.length < 2) {
        p2 += "0";
    }
	var ans = "";
	var c = 1;
	while(c >= 0) {
		ans = (parseInt(p1[c]) + carry >= parseInt(p2[c]) ? parseInt(p1[c]) + carry - parseInt(p2[c]):
		parseInt(p1[c]) + carry + 10 - parseInt(p2[c])) + ans;
		carry =  parseInt(p1[c]) + carry >= parseInt(p2[c]) ? 0 : -1;
		c -= 1;
	}
	ans = "." + ans;
	c = z1.length - z2.length;
	while(c --) {
		z2 = '0' + z2;
	}
	c = z1.length-1;
	while(c >= 0) {
		ans = (parseInt(z1[c]) + carry >= parseInt(z2[c]) ? parseInt(z1[c]) + carry - parseInt(z2[c]):
		parseInt(z1[c]) + carry + 10 - parseInt(z2[c])) + ans;
		carry =  parseInt(z1[c]) + carry >= parseInt(z2[c]) ? 0 : -1;
		c -= 1;
    }
    var offset = 0;
    for(var i = 0;i < ans.length - 2;i ++) {
        if (ans[i] == '0' && ans[i+1] != '.') {
            offset += 1;
        }else {
			break;
		}
    }
    ans = ans.substring(offset);
	return ans[0] == '.'?"0"+ans:ans;
}


// 结果页面请求接口
function getResultInfo(resData){
	$.ajax({
		url: request_url + "/SOA/queryImg",
		type: "POST",
		timeout: 10000,
		async: true,
		contentType: 'application/json;charset=utf-8',
		data: JSON.stringify({ queryList: [{ merId: paySuccessData.merId, prodId: prodId, adPst: '0003' }, { merId: paySuccessData.merId, prodId: prodId, adPst: '0004' }], evaluateFlagQuery: '01' }),
		dataType: "JSON",
		context: document.body,
		success: function (e) {
			if ($.txnIsSuzccess(e.respCode)) {
				console.info(e)
				var pics = e.picList;
				var imgUrl = '';
				var jumpUrl = '';
				var imgUrl_tanchuang = '';
				var jumpUrl_tanchuang = '';
				for (var i = 0; i < pics.length; i++) {
					if (pics[i].adPst == "0003") {
						imgUrl = pics[i].picId;
						jumpUrl = pics[i].jumpUrl;
					}
					if (pics[i].adPst == "0004") {
						imgUrl_tanchuang = pics[i].picId;
						jumpUrl_tanchuang = pics[i].jumpUrl;
					}
				}
				// 结果页广告
				if (!imgUrl) {
					$("#chaolianjie").attr("style", "display:none");
				} else {
					$("#chaolianjie").attr("style", "display:");
					getBase64ByUrl(imgUrl, function (url) {
						$("#imgGuangGao").attr("src", url);
						if (jumpUrl) {
							$("#imgGuangGao").click(function () {
								sensors.track('click_recommended',{
									'page_type': '收银台支付结果页面',
									'recommended_belong_area': '收银台支付结果页面：顶部广告图',
									'recommended_name': '',
									'recommended_id': '',
									'url': jumpUrl,
									'recommended_rank': '0003'
								}, function() {
									window.location.href = jumpUrl;
								})
							});
						}
					});
				}
				// 结果也弹窗广告
				if (!imgUrl_tanchuang || e.evaluateFlag == '0000') {
					$("#ad2").attr("style", "display:none");
					$("#tankuang").attr("style", "display:none");
				} else {
					getBase64ByUrl(imgUrl_tanchuang, function (url) {
						$("#ad2").attr("style", "display:");
						$("#tankuang").attr("style", "display:");
						// url("../../images/mobile/onecode/mer/Bitmap@2x.png") no-repeat center;
						// $(".ad2 .ad").attr("style", "background:url("+url+") no-repeat center");
						$(".ad2 .ad img").attr("src", url);
						if (jumpUrl_tanchuang) {
							$("#tuanKuangImg").click(function () {
								sensors.track('click_recommended',{
									'page_type': '收银台支付结果页面',
									'recommended_belong_area': '收银台支付结果页面：弹框广告图',
									'recommended_name': '',
									'recommended_id': '',
									'url': jumpUrl_tanchuang,
									'recommended_rank': '0004'
								}, function() {
									window.location.href = jumpUrl_tanchuang;
								});
							});
							$("#cloaeAd").click(function () {
								$("#ad2").attr("style", "display:none");
								$("#tankuang").attr("style", "display:none");
							});
						}
					});
				}
				e.respTxnSsn = resData.respTxnSsn
				e.merId = resData.merId
				getEvaluatePage(e);
			}
		},
		timeout: function (e) {
		},
		error: function (e) {
		}
	});
}

/**
 * 展示评价页面
 */
function getEvaluatePage(respData) {

	if ("0000" == respData.evaluateFlag) {
		$("#finish").attr("style", "display:none");
		var imgIndex = 0;
		$(".maskbigbox").css({ display: "block" })
		$(".imgbox").click(function () {
			if ("我的评价" == $("#evaluateTitle").html()) {
				return;
			}
			$(".contbox").css("height", "5.8rem");

			imgIndex = $(this).index() + 1;
			for (var j = 0; j < $(".imgbox").length; j++) {
				$(".imgbox").eq(j)[0].src = "./static/images/mobile/onecode/mer/xing@2x.png"
			}
			for (var i = 0; i < $(this).index() + 1; i++) {
				$(".imgbox").eq(i)[0].src = "./static/images/mobile/onecode/mer/xing_@2x.png"
			}
			switch ($(this).index() + 1) {
				case 1: $(".manyi").html("很不满意")
					break;
				case 2: $(".manyi").html("不满意")
					break;
				case 3: $(".manyi").html("一般")
					break;
				case 4: $(".manyi").html("满意")
					break;
				case 5: $(".manyi").html("非常满意")
					break;
				default:
					break;
			}
			$(".btn").css({ display: "block" })
		})
		$(".closebtn").click(function () {
			$(".maskbigbox").css({ display: "none" })
			$("#finish").attr("style", "margin-top: 23px; text-align: center;");
		})
		$(".btn").click(function () {
			$(".btn").css({ display: "none" })
			$(".successcont").css({ display: "block" })
			$("#evaluateTitle").html("我的评价");
			setTimeout(function () {
				$(".maskbigbox").css({ display: "none" })
			}, 2000);
			// 发送ajax,提交评价
			var evaluateData = {
				respTxnSsn: respData.respTxnSsn,
				merId: respData.merId,
				grade: imgIndex
			}
			$.ajax({
				url: request_url + "/sumbitEvaluate",
				type: "POST",
				timeout: 10000,
				async: true,
				contentType: 'application/json;charset=utf-8',
				data: JSON.stringify(evaluateData),
				dataType: "JSON",
				context: document.body,
				success: function (e) {
					if ($.txnIsSuzccess(e.respCode)) {

					}
				},
				timeout: function (e) {

				},
				error: function (e) {

				}
			});
		});
	} else {
		$(".maskbigbox").css({ display: "none" });
	}
}


//=====================================================微信支付js=================================================


function wxPayForMer(preOrderInfo, payData) {
	if (typeof WeixinJSBridge == "undefined") {
		if (document.addEventListener) {
			document.addEventListener('WeixinJSBridgeReady', function() {
				onBridgeReady(preOrderInfo, payData);
			}, false);
		} else if (document.attachEvent) {
			document.attachEvent('WeixinJSBridgeReady', function() {
				onBridgeReady(preOrderInfo, payData);
			});
			document.attachEvent('onWeixinJSBridgeReady', function() {
				onBridgeReady(preOrderInfo, payData);
			});
		}
	} else {
		onBridgeReady(preOrderInfo, payData);
	}
}


function onBridgeReady(preOrderInfo, payData) {
	WeixinJSBridge.invoke(
		'getBrandWCPayRequest', {
		"appId": preOrderInfo.appId,     //公众号名称，由商户传入     
		"timeStamp": preOrderInfo.timeStamp,         //时间戳，自1970年以来的秒数     
		"nonceStr": preOrderInfo.nonceStr, //随机串     
		"package": preOrderInfo.packageValue,
		"signType": preOrderInfo.signType,         //微信签名方式：     
		"paySign": preOrderInfo.paySign //微信签名 
	},
		function (res) {
			console.log('微信支付返回结果', res)
			if (res.err_msg == "get_brand_wcpay_request:ok") {
				var queryData = {
					respTxnSsn: payData.respTxnSsn,
					merId: payData.merId
				}
				sensors.track('pay_result',{
					'pay_amount': payData.inputAmt,
					'pay_from': '微信',
					'is_success': true,
					'remarks': staticRemark,
					'business_number': paySuccessData.merId,
				});
				$.ajax({
					url: request_url + "/queryWXPayTxnSsn",
					type: "POST",
					timeout: 10000,
					async: false,
					contentType: 'application/json;charset=utf-8',
					data: JSON.stringify(queryData),
					dataType: "JSON",
					context: document.body,
					success: function (e) {
						if ($.txnIsSuzccess(e.respCode)) {
							var wxPayTxnSsnData = e;
							var suyuan_flag = 0;
							$.ajax({
								url: request_url + "/SOA/userQual",
								type: "POST",
								timeout: 10000,
								async: true,
								contentType: 'application/json;charset=utf-8',
								data: JSON.stringify({ transSsn: paySuccessData.respTxnSsn, list: [{ merId: paySuccessData.merId, queryType: "01" }] }),
								dataType: "JSON",
								context: document.body,
								success: function (e) {
									if ($.txnIsSuzccess(e.respCode)) {
										// 丽水溯源
										if(e.list[0].activeFlag == '01'){
											$("body").html(template('mobile/onecode/mer/cover',null));
											//alert('http://sy.gsj.lishui.gov.cn/pay/companydetail.html?orderNo='+paySuccessData.respTxnSsn+'&orderDt='+paySuccessData.respTxnTime.replace(new RegExp(/-|:| /g),'')+
											//	'&orderAmount='+resData.txnAmt+'&payType=04'+'&mid='+paySuccessData.merId)
											window.location.href = 'http://sy.gsj.lishui.gov.cn/pay/companydetail.html?orderNo='+payData.respTxnSsn+'&orderDt='+(payData.respTxnTime.replace(new RegExp(/-|:| /g),''))+
											'&orderAmount='+payData.inputAmt+'&payType=02'+'&mid='+paySuccessData.merId;
										}
										if(e.list[0].activeFlag == '02'){
											suyuan_flag = 1;
											$("body").html(template('mobile/onecode/mer/cover',null));
											window.location.href = 'https://cloud.xinanshizu.com/farm-pay/v1/pub/farmPay/tl/callback?orderNo='+payData.respTxnSsn+'&orderDt='+(payData.respTxnTime.replace(new RegExp(/-| /g),''))+
											'&orderAmount='+payData.inputAmt+'&payType=微信'+'&merId='+paySuccessData.merId;
										}
									}
								},
								timeout: function (e) { },
								error: function (e) { }
							});
							if (suyuan_flag) {
								return;
							}
							// 微信订单号
							payData.transactionId = wxPayTxnSsnData.transactionId;
							renderResult(payData,'1');
							getResultInfo(payData);
						} else {
							exceptionHandle(e);
						}
					},
					timeout: function (e) {
						// alert("timeout");
						e.respMsg = '网络正在开小差,请重试或联系客服热线95347'
						exceptionHandle(e);
					},
					error: function (e) {
						// alert("error");
						errorHandle();
					}
				});


			} else if (res.err_msg == "get_brand_wcpay_request:cancel") {
				// 用户取消支付
				// alert("res.err_msg:   " + res.err_msg);
				$(".oneCodebox").attr("style", "display:none");
				if (payData.paySizeType === "01") {
					$('#submitButtonTwo').html('确认支付');

				} else if (payData.paySizeType === "02") {
					$('#cogAndPay').html('识别并支付');
				}
				$.closeMobileCover();
				sensors.track('pay_result',{
					'pay_amount': payData.inputAmt,
					'pay_from': '微信',
					'is_success': false,
					'remarks': staticRemark,
					'business_number': paySuccessData.merId,
				});
			}else if (res.err_msg == "stopMonitoringBeacons:ok") {
				
			} else {
				sensors.track('pay_result',{
					'pay_amount': payData.inputAmt,
					'pay_from': '微信',
					'is_success': false,
					'remarks': staticRemark,
					'business_number': paySuccessData.merId,
				});
				alert("res.err_msg" + res.err_msg);
				alert(JSON.stringify(res));

				$(".oneCodebox").attr("style", "display:none");
				$.closeMobileCover();

				res.respMsg = res.err_msg;
				exceptionHandle(res);
			}

		}
	);
}

//=====================================================支付宝支付js=================================================



/*支付宝jsApi*/
function ready(callback) {
	if (window.AlipayJSBridge) {
		// 如果jsbridge已经注入则直接调用
		callback && callback();
	} else {
		// 如果没有注入则监听注入的事件
		document.addEventListener('AlipayJSBridgeReady', callback, false);
	}
}

/*支付宝jsApi*/
function tradePay(tradeNO, aliPayData) {
	ready(function () {
		// 通过传入交易号唤起快捷调用方式(注意tradeNO大小写严格)
		console.info('tradePay', aliPayData)
		AlipayJSBridge.call("tradePay", {
			tradeNO: tradeNO
		}, function (data) {
			if("9000" != data.resultCode){
				sensors.track('pay_result',{
					'pay_amount': aliPayData.inputAmt,
					'pay_from': '支付宝',
					'is_success': false,
					'remarks': staticRemark,
					'business_number': paySuccessData.merId,
				});
				if ("6001" == data.resultCode) {
					$(".oneCodebox").attr("style", "display:none");
					if (aliPayData.paySizeType === "01") {
						$('#submitButtonTwo').html('确认支付');
					} else if (aliPayData.paySizeType === "02") {
						$('#cogAndPay').html('识别并支付');
					}
					$.closeMobileCover();
				}
				else if ("6002" == data.resultCode) {
					//weui.alert("网络连接错误");
					AlipayJSBridge.call('closeWebview');
				}
				else if ("4000" == data.resultCode) {
					//weui.alert("交易失败");
					AlipayJSBridge.call('closeWebview');
				}
				else if ("8000" == data.resultCode) {
					//weui.alert("订单正在处理中...");
					AlipayJSBridge.call('closeWebview');
				}
			}
			else if ("9000" == data.resultCode) {
				//weui.alert("订单支付成功");
				var suyuan_flag = 0;
				sensors.track('pay_result',{
					'pay_amount': aliPayData.inputAmt,
					'pay_from': '支付宝',
					'is_success': true,
					'remarks': staticRemark,
					'business_number': paySuccessData.merId,
				});
				$.ajax({
					url: request_url + "/SOA/userQual",
					type: "POST",
					timeout: 10000,
					async: true,
					contentType: 'application/json;charset=utf-8',
					data: JSON.stringify({ transSsn: paySuccessData.respTxnSsn, list: [{ merId: paySuccessData.merId, queryType: "01" }] }),
					dataType: "JSON",
					context: document.body,
					success: function (e) {
						console.log(e)
						if ($.txnIsSuzccess(e.respCode)) {
							// 丽水溯源
							if (e.list[0].activeFlag == '01') {
								suyuan_flag = 1;
								$("body").html(template('mobile/onecode/mer/cover',null));
								//console.log('http://sy.gsj.lishui.gov.cn/pay/companydetail.html?orderNo='+aliPayData.respTxnSsn+'&orderDt='+aliPayData.respTxnTime.replace(new RegExp(/-|:| /g),'')+ '&orderAmount='+aliPayData.inputAmt+'&payType=01'+'&mid='+paySuccessData.merId);
								window.location.href = 'http://sy.gsj.lishui.gov.cn/pay/companydetail.html?orderNo='+aliPayData.respTxnSsn+'&orderDt='+aliPayData.respTxnTime.replace(new RegExp(/-|:| /g),'')+
								'&orderAmount='+aliPayData.inputAmt+'&payType=01'+'&mid='+paySuccessData.merId;
							}
							if (e.list[0].activeFlag == '02') {
								suyuan_flag = 1;
								$("body").html(template('mobile/onecode/mer/cover',null));
								var targetUrl = 'https://cloud.xinanshizu.com/farm-pay/v1/pub/farmPay/tl/callback?orderNo='+aliPayData.respTxnSsn+'&orderDt='+aliPayData.respTxnTime.replace(new RegExp(/-| /g),'')+'&orderAmount='+aliPayData.inputAmt+'&payType=支付宝'+'&merId='+paySuccessData.merId;
								window.location.href = targetUrl;
							}
						}
					},
					timeout: function (e) { },
					error: function (e) { }
				});
				if (suyuan_flag) {
					return;
				}
				// 跳转支付结果页面
				aliPayData.tradeNO = tradeNO  //支付宝订单号
				renderResult(aliPayData,'0');
				getResultInfo(aliPayData);
			}
		});
	});
}

// 根据浏览器标识更改渠道图标
var prodId = 'PD1005';
var tunnel_type = '';
function changeIcon() {
	var userAgent = navigator.userAgent;
	console.log(userAgent)
	var iconImg = document.getElementsByClassName('tunnel_icon')[0];
	console.log(userAgent.match(/Alipay/i))
	console.log(userAgent.match(/MicroMessenger/i))
	if (userAgent.match(/Alipay/i)) {
		iconImg.src = './static/images/mobile/onecode/mer/list_pic_zhifubao@3x.png';
		tunnel_type = 'zfb';
		prodId = 'PD1003';
	}
	else if (userAgent.match(/MicroMessenger/i) || userAgent.match(/MicroMessenger/)) {
		// alert('wx')
		iconImg.src = './static/images/mobile/onecode/mer/list_pic_weixin@3x.png'
		tunnel_type = 'wx';
		prodId = 'PD1001';
	}else {
		tunnel_type = "tl_bank";
		if (userAgent.match(/iPhone/i)) {
			try {
				TLBankGetAppKey();
			}catch(error) {
				console.log(error)
			}
		}else {
			window.TLBankGetAppKey = function (res) {
				console.log('手机银行userTag:',res);
				thsPayUserTag = res;
			}
		}
	}
}
// 查询商户信息
function queryMchtInfo(strs) {
	$.openMobileCoverTwo();
	$(".spinner").attr("style", "display:");
	try {
		$.ajax({
			url: request_url + "/SOA/queryMchtManagerInfo",
			type: "POST",
			timeout: 5000,
			async: true,
			data: JSON.stringify({ paySessionCode: strs[0], queryFlag: '02' }),
			dataType: "JSON",
			cache: false,
			success: function (e) {
				if ($.txnIsSuzccess(e.respCode)) {
					cashierData = e;
					paySuccessData.merName = e.merName;
					paySuccessData.merId = e.merId;
					//1.2 渲染页面
					// $("body").html(template('mobile/onecode/mer/index',cashierData));
					document.getElementsByClassName("merNameValue")[0].innerHTML = '' + e.merName;
					if (e.quotaAmt != undefined) {
						// $('.quotaInfo').attr("style", "display:")
						quotaFlag = true
						quotaAmt = e.quotaAmt
					}
					if (e.openFlag) {
						remarkNeedFlag = true
					}
					else {
						remarkNeedFlag = false
					}
					if (e.mchtActFlag == '1') {
						$('.mchtActImg').css("display", "");
						mchtActFlag = true
					}
					$(".spinner").attr("style", "display:none");
					$(".keyboard").attr("style", "display:");
					// $(".keyboard").addClass('animation_in3');
					$.closeMobileCoverTwo();
					//查询收银台主界面广告图
					queryMainPageAd();
				} else {
					$.closeMobileCoverTwo();
					$(".spinner").attr("style", "display:none");
					$(".keyboard").attr("style", "display:none");
					exceptionHandle(e);
				}
			},
			error: function (e, stauts, errorThro) {
				// $.closeMobileCoverTwo();
				$(".spinner").attr("style", "display:none");
				$(".keyboard").attr("style", "display:none");
				errorHandle(e);
			}
		});
	} catch (error) {
		console.log(error);
	}
}
function getBase64ByUrl(src, callback, outputFormat) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', src, true);
	xhr.responseType = 'arraybuffer';
	xhr.send();
	xhr.onload = function (e) {
		console.log(e);
		if (xhr.status == 200) {
			var uInt8Array = new Uint8Array(xhr.response);
			var i = uInt8Array.length;
			var binaryString = new Array(i);
			while (i--) {
				binaryString[i] = String.fromCharCode(uInt8Array[i]);
			}
			var data = binaryString.join('');
			var base64 = window.btoa(data);
			var dataUrl = "data:" + (outputFormat || "image/png") + ";base64," + base64;
			callback.call(this, dataUrl);
		}
	};

}

//查询主页广告位
function queryMainPageAd() {
	$.ajax({
		url: request_url + "/SOA/queryImg",
		type: "POST",
		timeout: 10000,
		async: true,
		contentType: 'application/json;charset=utf-8',
		data: JSON.stringify({ queryList: [{ merId: paySuccessData.merId, prodId: prodId, adPst: '0002' }], evaluateFlagQuery: '01' }),
		dataType: "JSON",
		context: document.body,
		success: function (e) {
			if ($.txnIsSuzccess(e.respCode)) {
				var pics = e.picList;
				var imgUrl = '';
				for (var i = 0; i < pics.length; i++) {
					if (pics[i].adPst == "0002" && pics[i].picId) {
						// 查询到有广告位才展示
						imgUrl = pics[i].picId;
						document.getElementById('ad').style.display = "";
						// 图片下载好后替换展位图
						getBase64ByUrl(imgUrl, function (url) {
							$("#imgAd").attr("src", url);
							$("#imgAd").click(function () {
								sensors.track('click_recommended',{
									'page_type': '收银台支付页面',
									'recommended_belong_area': '收银台支付页面：轮播图',
									'recommended_name': '',
									'url': pics[i].jumpUrl,
									'recommended_rank': '0002'
								}, function() {
									window.location.href = pics[i].jumpUrl;
								});
							});
						});
						break;
					}
				}
			}
		},
		timeout: function (e) {

		},
		error: function (e) {

		}
	});
}

//1.1 查询商户信息*******************
var cashierData = {};
var remarkNeedFlag = true   //默认不需要备注
var mchtActFlag = false    //默认没有商户活动
var activeType = ""   //活动编号
var paySessionCode = '';
var quotaFlag = false
var quotaAmt = 0;

$(document).ready(function () {
	console.time('收银台加载流程时长');
	/** -------------------1. 初始化页面-----------------------*/
	var urlPath = window.location.search.substring(1)
	var query = urlPath.split('&')
	for (var i = 0; i < query.length; i++) {
		var pair = query[i].split('=')
		if (pair[0] == 'state') {
			paySessionCode = pair[1];
			// 去除逗号
			if (paySessionCode.substring(paySessionCode.length - 3, paySessionCode.length) == '%2C') {
				paySessionCode = paySessionCode.substring(0, paySessionCode.length - 3);
			}
		}
	}
	// 待修改
	var strs = new Array();
	paySessionCode += '&';
	strs = paySessionCode.split("&");
	$("body").html(template('mobile/onecode/mer/index', cashierData));
	
	changeIcon();
	paySessionCode = strs[0]
	queryMchtInfo(strs); // 查询商户信息
	$("#spinner").attr("style", "display:");
	// 待考察
	$("#oneCodebox").attr("style", "display:");
	// $(".keyboard").attr("style", "display:");
	/** -------------------页面样式事件---------------------*/
	var cursorField = $("#sp");
	var valu = cursorField.attr("value");
	var i = 0;
	function clock() {
		i++;
		if (i % 2 == 0) {
			cursorField.html('');
		} else {
			cursorField.html('|');
		}
	}
	clock();
	var int = self.setInterval(clock, 600);
	//键盘弹出效果
	$(".container").on("click", "#amtDiv", function () {
		$("#cursor").attr("style", "display:");
		$("#remark").blur();
		var _time = window.setTimeout(function () {
			window.clearTimeout(_time);
			$(".keyboard").attr("style", "display:");
		}, 265)
	});
	var inputElement = document.getElementById('remark');
	var inputElement2 = document.getElementById('remark2');
	// 处理输入框字数计算
	function handleKeyUp(event) {
		$('#counter').text((event.target.value.length>20?20:event.target.value.length) + '/20');
	}
	inputElement2.addEventListener('keyup', handleKeyUp);

	inputElement2.addEventListener('compositionstart', function(event){
		// 中文输入开始时移除keyup事件监听
		inputElement2.removeEventListener('keyup', handleKeyUp);
	})
	// 输入框中文输入法输入监听
	inputElement2.addEventListener('compositionend', function(event){
		var len = event.target.value.length;
		$('#counter').text((len>20?20:len) + '/20');
		inputElement2.addEventListener('keyup', handleKeyUp);
	})
	$("#remark_cancel").click(function(e) {
		$('.remarkConfirm').css({ display: "none" });
		$('.remarkConfirm').removeClass('animation_in');
		$.closeMobileCover();
		$("#cursor").attr("style", "display:");
		$(".keyboard").attr("style", "display:");
		var _time = window.setTimeout(function () {
			window.clearTimeout(_time);
			$(".keyboard").attr("style", "display:");
		}, 265)
	})
	$("#remark_ensure").click(function(e) {
		$('.remarkConfirm').css({ display: "none" });
		$.closeMobileCover();
		$('#remark')[0].value = $('#remark2')[0].value;
		if ($('#remark')[0].value.length > 0) {
			$("#shanchu").css("display", "");
		}
		$("#cursor").attr("style", "display:");
		$(".keyboard").attr("style", "display:");
		var _time = window.setTimeout(function () {
			window.clearTimeout(_time);
			$(".keyboard").attr("style", "display:");
		}, 265)
	})
	// $(".container").on("click", ".merInfo", function () {
	// 	$(".keyboard").attr("style", "display:none");
	// });
	// $(".container").on("click", ".buttonStyles", function () {
	// 	$(".keyboard").attr("style", "display:none");
	// });
	// $(".container").on("click", ".amtInfo .imgMony", function () {
	// 	$(".keyboard").attr("style", "display:none");
	// });
	// $(".container").on("click", ".amtInfo .imgMony .tips", function () {
	// 	$(".keyboard").attr("style", "display:none");
	// });
	$(".container").on("click", ".remarkDiv", function () {
		$(".keyboard").attr("style", "display:none");
	});
	$(".container").on("click", "#remark", function () {
		$("#cursor").attr("style", "display:none");
	});
	$(".container").on("click", "#emptyDiv", function () {
		$(".keyboard").attr("style", "display:none");
	});


	$(function () {
		// propertychange 可以监听js赋值 iE11以下 oninput：无法监听js赋值 IE8以上
		$("#remark").bind('input propertychange', function () {
			var remarkValue = $("#remark").val();
			if ((remarkValue === '') || (remarkValue === null)) {
				$("#shanchu").css("display", "none");
			} else {

				$("#shanchu").css("display", "");
			}

		});
	});

	$("#shanchu").click(function (e) {

		var remarkValue = $("#remark").val();

		if ((remarkValue === '') || (remarkValue === null)) {

		} else {
			$("#shanchu").css("display", "none");
			$("#remark").val("");
		}

	});
	//	金额框
	var amtField = $("#amt");
	var amtPlacer = '请输入金额';
	var max = '5'; //最大金额整数位数
	var amtFieldTwo = document.getElementById('amt');
	// 点击备注
	$('#remark').click(function(e) {
		$.openMobileCover();
		$('.remarkConfirm').addClass('animation_in');
		$('.remarkConfirm').css({ display: "" });
		$('#remark2')[0].value = $('#remark')[0].value;
		$('#counter').text(($('#remark2')[0].value.length>20?20:$('#remark2')[0].value.length) + '/20');
		var input = $('#remark2')[0];
		console.log(input);
		setTimeout(function() {
			input.focus();
		}, 300)
		// alert('focus')
	})
	//键盘
	$(".input .nums table td div").click(function (e) {
		// console.log(navigator);
		// if (navigator.vibrate) {
		// 	console.log("设备支持震动");
		// 	navigator.vibrate(10);
		// }
		var mean = $(this).attr("mean"); 	//按钮含义
		var currentAmt = amtField.attr("value");	//当前金额
		var preAmt = currentAmt;
		//预处理
		if (mean == 'del') {	//删除
			preAmt = preAmt.substring(0, preAmt.length - 1);
		} else {				//增加
			//预处理当前金额
			if ($.isEmpty(preAmt) || preAmt == '') {
				preAmt = '';
				if (mean == '.') {
					preAmt = '0';
				}
			}
			preAmt = preAmt + mean;
		}

		//校验合法
		if (validAmtFotInput(preAmt)) {
			if (preAmt == '') {
				amtField.removeClass("notnone");
				amtField.attr("value", preAmt);
				amtField.css("font-size", "0.3rem");
				amtField.css("color", "#999");
				amtField.css("font-weight", "");
				amtField.html('');
				$('#submitButton').addClass("unable");
			} else {
				/*if(preAmt > 500){
                    amtField.removeClass("notnone");
                    amtField.attr("value", "");
                    amtField.css("font-size", "0.3rem");
                    amtField.html('输入金额不得大于500');
                    amtField.css("color", "#D0021B");
                    $('#submitButton').addClass("unable");
                }else{*/

				amtField.addClass("notnone");
				amtField.attr("value", preAmt);
				amtField.css("font-size", "0.88rem");
				amtField.css("font-weight", "bold");
				amtField.css("color", "#333");

				/*var amtList = preAmt.split(".");
				if(amtList.length == 1){
					preAmt = preAmt + ".00";
				}else if(amtList.length > 1 && amtList[1].length < 1){
					preAmt = preAmt + "00";
				}else if(amtList.length > 1 && amtList[1].length == 1){
					preAmt = preAmt + "0";
				}*/

				amtField.html(preAmt);
				// if(amtFieldvalue === undefined  || amtFieldvalue === '' || amtFieldvalue === null || amtFieldvalue === '0' || amtFieldvalue === '0.' || amtFieldvalue === '0.0' || amtFieldvalue === '0.00')
				if (preAmt != '' && preAmt != null && preAmt != "0" && preAmt != "0." && preAmt != "0.0" && preAmt != "0.00" ) {
					$('#submitButton').removeClass("unable");
					// $('#submitButton').addClass("unable");
					// setTimeout(function() {
					// 	$('#submitButton').removeClass("unable");
					// }, 100)
				} else {
					$('#submitButton').addClass("unable");
				}
			}
			if (quotaFlag && Number(preAmt) > quotaAmt) {
				$('.quotaInfo').attr('style', 'display:')
			}
			if (quotaFlag && Number(preAmt) <= quotaAmt) {
				$('.quotaInfo').attr('style', 'display: none')
			}
		}
	})

	/**
	 * 校验金额(键盘)
	 */


	var regx1 = /^[1-9]\d{0,5}(\.\d{0,2})?$/;
	var regx2 = /^0\.\d{0,2}$/;
	//	var regx = /^[1-9]\d{0,4}(\.\d{1,2})?|0.\d{1,2}$/;
	function validAmtFotInput(amt) {
		if (amt == '') {	//为空
			return true;
		} else {			//为数字
			return regx1.test(amt) || regx2.test(amt) || amt == '0';
		}
	}


	//键盘点击效果
	$(".input .nums table td div").bind("touchstart", function () {
		$(this).addClass("touch");
	})
	$(".input .nums table td div").bind("touchend", function () {
		$(this).removeClass("touch");
	})
	$(".input .nums table td div").bind("touchcancel", function () {
		$(this).removeClass("touch");
	})
	$(".input .nums table td div").bind("touchmove", function () {
		$(this).removeClass("touch");
	})
	
	$("#submitButton").bind("touchstart", function () {
		$(this).addClass("touch");
	})
	$("#submitButton").bind("touchend", function () {
		$(this).removeClass("touch");
	})
	$("#submitButton").bind("touchcancel", function () {
		$(this).removeClass("touch");
	})
	$("#submitButton").bind("touchmove", function () {
		$(this).removeClass("touch");
	})

	//支付失败提示按钮
	// alert('绑定支付失败提示按钮事件')
	// $('body').on("click",".errorInfo .goOnButton", function(){
	// 	alert('关闭窗口')
	// 	$.closeMobileCover();
	// 	$.mobileWindowClose();
	// })
	$('body').on("click", ".goOnButton", function () {
		// alert('关闭窗口')
		$.closeMobileCover();
		$.mobileWindowClose();
	})



	function amtConvert(amt) {

		var amtList = amt.split(".");
		if (amtList.length == 1) {
			amt = amt + ".00";
		} else if (amtList.length > 1 && amtList[1].length < 1) {
			amt = amt + "00";
		} else if (amtList.length > 1 && amtList[1].length == 1) {
			amt = amt + "0";
		}

		return amt;
	};




	/** ----------------------确认支付 --------------------------*/
	$("#submitButton").click(function () {
		if ($("#submitButton").hasClass('unable'))
			return;
		staticRemark = $("#remark").val();
		sensors.track('confirm_pay',{
			'pay_amount': amtField.attr("value"),
			'remarks': staticRemark,
			'business_number': paySuccessData.merId,
		});
		paySuccessData.payAmt = amtConvert(amtField.attr("value"));
		$.openMobileCoverTwo();
		// 校验是否符合输入备注要求
		inputRemark("00");
	});

	$("#chahao").click(function () {
		$(".fatherBar").attr("style", "display:none");
		$("#submitButton").attr("style", "display:");
		$("#tishiyu").attr("style", "display:");
	});



	/**
	 * 自定义ajax方法,解决ajax同步请求,渲染UI线程和ajax js线程互斥问题
	 */
	function getAjaxData(payData, hbFqInfo) {
		console.log(arguments);
		var defer = $.Deferred();
		console.log('activeInfo', activeInfo);
		var data = {
			payAmt: payData.payAmt[payData.payAmt.length-1] === "." ? payData.payAmt + "00" : payData.payAmt,
			amt: payData.orderAmt,
			paySessionCode: paySessionCode,
			remark: payData.remark,
			actAmt: activeInfo.actAmt?activeInfo.actAmt: "0",   //活动减免金额：不满足减免条件传 0
			activeType: activeInfo.mchtActFlag === '01'?payData.activeType: "",
			mchtActFlag: activeInfo.mchtActFlag,
			ctbtType: activeInfo.mchtActFlag === '01'?activeInfo.ctbtType:""
		};
		if (thsPayUserTag) {
			data.payUserTag = thsPayUserTag;
		}
		if (hbFqInfo != undefined){
			data.hbFqNum = hbFqInfo.hbFqNum;
			data.termPrincipal = hbFqInfo.termPrincipal;
			data.termFee = hbFqInfo.termFee;
			data.hbFqSellerPercent = 0;
		}
		console.log('订单',data)
		$.ajax({
			url: request_url + "/merOneCodePay",
			type: "POST",
			timeout: 10000,
			async: true,
			// contentType: 'application/json;charset=utf-8',
			data: data,
			dataType: "JSON",
			context: document.body,
			success: function (e) {
				console.log(typeof(e))
				if(typeof(e) == 'string'){
					defer.resolve(JSON.parse(e));
				}
				else {
					defer.resolve(e);
				}
			},
			timeout: function (e) {
				//alert("timeout");
				$(".spinner").attr("style", "display:none");
				e.respMsg = '网络正在开小差,请重试或联系客服热线95347'
				exceptionHandle(e);
			},
			error: function (e) {
				//alert("error");
				$(".spinner").attr("style", "display:none");
				errorHandle();
			}

		});

		return defer;
	}


	/**
	 * 判断是否需要花呗支付
	 */
	function judgeHuabei(amt) {
		var defer = $.Deferred();
		if (tunnel_type == 'zfb') {
			$(".spinner").attr("style", "display:");
			$.openMobileCoverTwo();
			$.ajax({
				url: request_url + '/SOA/queryHbfqDetail',
				type: "POST",
				timeout: 10000,
				async: true,
				contentType: 'application/json;charset=utf-8',
				data: JSON.stringify({
					merId: paySuccessData.merId,
					amt: amt[amt.length-1] === "." ? amt + "00" : amt
				}),
				dataType: "JSON",
				context: document.body,
				success: function (hbInfo) {
					$.closeMobileCoverTwo();
					$(".spinner").attr("style", "display:none");
					if ($.txnIsSuzccess(hbInfo.respCode)){
						if (hbInfo.hbfqFlag == '00') {
							defer.resolve({showHuabei: false});
						}
						else{
							var hbList = hbInfo.hbfqList;
							$('.fenqi_info').each(function(index,element){
								element.innerHTML = '¥' + hbList[index].termPrincipal/100 + 'x' + hbList[index].hbFqNum +'期';
							})
							$('.fee_info').each(function(index,element){
								element.innerHTML = '手续费¥' + hbList[index].termFee/100 + '/期';
							})
							console.log('弹出花呗支付弹框', paySuccessData);
							console.log('弹出优惠弹框', activeInfo);
							// 弹出花呗支付弹框
							$('#tankuang').attr("style", "display:");
							$('.hb_popup').attr("style", "display:");
							$('.hb_popup').addClass('animation_in2')
							$("#hb_payAmt").html(priceFormat(paySuccessData.payAmt));
							if (paySuccessData.actAmt > '0') {
								$("#hb_order").css({ display: "" });
								$('#hb_orderAmt').html(priceFormat(paySuccessData.orderAmt));
								$('.thsPaySecondMsg').css({ display: "" })
								$('.thsPaySecondMsg').html(activeInfo.paySecondMsg)
								// 满减
								// if (paySuccessData.activeType === '41') {
									$("#hb_relPay").css({ display: "" });
									$("#hb_payAmt").html(priceFormat(paySuccessData.payAmt));
									$("#hb_act").css({ display: "" });
									$('#hb_actNmae').html(paySuccessData.actName);
									$('#hb_actAmt').html("-"+paySuccessData.actAmt);
								// }
								// // 随机减
								// else {
								// 	$("#hb_relPay").css({ display: "none" });   // 不展示实际支付金额
								// }
							}
							$('#close_huabei').click(function (){
								$('#tankuang').attr("style", "display:none");
								$('.hb_popup').attr("style", "display:none");
							});
							var last_selected = $('.choose_icon')[0];
							var last_selectedId = -1;
							$(".choose_icon").unbind('click').click(function (event){
								var img_obj = event.target;
								last_selectedId = img_obj.getAttribute('index');
								var tmpUrl = img_obj.getAttribute('src');
								if(tmpUrl.indexOf('danxuan_yixuanzhong') == -1){
									last_selected.setAttribute('src',
									'./static/images/mobile/onecode/mer/danxuan_weixuanzhong@2x.png');
									last_selected = img_obj;
									img_obj.setAttribute('src',
									'./static/images/mobile/onecode/mer/danxuan_yixuanzhong@2x.png');
								}
							});
							var icons = document.getElementsByClassName('choose_icon');
							for(var i = 0;i < icons.length;i ++){
								var tmpId = icons[i].getAttribute('index');
								if (tmpId == -1) {
									icons[i].setAttribute('src','./static/images/mobile/onecode/mer/danxuan_yixuanzhong@2x.png');
								}
								else {
									icons[i].setAttribute('src','./static/images/mobile/onecode/mer/danxuan_weixuanzhong@2x.png');
								}
							}
							$("#submitButtonThree").unbind('click').click(function (){
								sensors.track('last_confirm_pay',{
									'pay_amount': amtField.attr("value"),
									'remarks': staticRemark,
									'business_number': paySuccessData.merId,
								});
								var hbInfo = {}; 
								// alert(last_selectedId)
								if (last_selectedId == -1){
									$('#tankuang').attr("style", "display:none");
									$('.hb_popup').attr("style", "display:none");
									defer.resolve({showHuabei: true});
								}
								else {
									hbInfo.hbFqNum = hbList[last_selectedId].hbFqNum;
									hbInfo.termPrincipal = hbList[last_selectedId].termPrincipal;
									hbInfo.termFee = hbList[last_selectedId].termFee;
									hbInfo.hbFqSellerPercent = 0;
									$('#tankuang').attr("style", "display:none");
									$('.hb_popup').attr("style", "display:none");
									// alert(JSON.stringify(hbInfo))
									defer.resolve({showHuabei: true, hbInfo: hbInfo});
								}
							});
						}
					}else {
						exceptionHandle(hbInfo);
					}
				},
				timeout: function (e) {
					//alert("timeout");
					$(".spinner").attr("style", "display:none");
					$.closeMobileCoverTwo();
					e.respMsg = '网络正在开小差,请重试或联系客服热线95347'
					exceptionHandle(e);
				},
				error: function (e) {
					// alert(JSON.stringify(e))
					$(".spinner").attr("style", "display:none");
					$.closeMobileCoverTwo();
					errorHandle(e);
				}
			});
		}
		else{
			defer.resolve({showHuabei: false});
		}
		return defer;
	}
	/**
	 * 识别并支付
	 */
	function cogPayOrPay(payData, hbFqInfo) {
		$.openMobileCover();
		$(".spinner").attr("style", "display:");
		if (arguments.length == 1){
			hbFqInfo = undefined;
		}
		//当ajax执行完成之后,执行支付代码,实现在ajax异步请求下达到同步执行的效果
		$.when(getAjaxData(payData, hbFqInfo)).done(function (e) {
			$(".spinner").attr("style", "display:none");
			if ($.txnIsSuzccess(e.respCode)) {
				if (e.payUserTag) {
					// userId 关联
					sensors.login(e.payUserTag);
				}
				if (e.actAmt) {
					paySuccessData.actAmt = e.actAmt;
					paySuccessData.actName = e.activeName;
					paySuccessData.payAmt = e.txnAmt;
				}
				var cashierDataTwo = e;
				paySuccessData.respTxnSsn = cashierDataTwo.respTxnSsn;
				paySuccessData.respTxnTime = cashierDataTwo.respTxnTime;
				paySuccessData.haveImg = cashierDataTwo.haveImg;
				// 判断是否显示嘉兴分行评价页面
				paySuccessData.evaluateFlag = cashierDataTwo.evaluateFlag;
				//@author Fjf @date 20190612
				paySuccessData.jumpUrl = cashierDataTwo.jumpUrl;

				if (cashierDataTwo.appType == '01') {	//支付宝
					paySuccessData.payType = "01";
					// 支付宝交易号
					paySuccessData.tradeNo = cashierDataTwo.tradeNo;
					// 调用支付宝js发起支付(传递支付宝交易号)
					tradePay(cashierDataTwo.tradeNo, paySuccessData);
				} else if (cashierDataTwo.appType == '02') { //微信
					paySuccessData.payType = "02";
					wxPayForMer(cashierDataTwo, paySuccessData);
				} else if (cashierDataTwo.appType == '04') { //手机银行

					// 手机银行本行通道订单号
					paySuccessData.pagySeqId = cashierDataTwo.pagySeqId;
					paySuccessData.payType = "04";
					// 组装手机银行jsApi调起支付所需参数
					var tradeInfo = {
						merId: paySuccessData.merId,
						txnAmt: e.txnAmt,
						pagySeqId: paySuccessData.pagySeqId,
						remark: payData.remark,
						merName: paySuccessData.merName,
						respTxnTime:paySuccessData.respTxnTime,
						respTxnSsn:paySuccessData.respTxnSsn,
						txnOrderAmt: payData.payAmt,
					};
					paySuccessData.orderAmt = e.txnOrderAmt;
					// return;
					if (e.actAmt > 0) {
						paySuccessData.actAmt = e.actAmt;
						tradeInfo.txnOrderAmt = e.txnOrderAmt;
						tradeInfo.actAmt = e.actAmt;
						tradeInfo.actType = e.activeType;
						tradeInfo.actName = e.activeName?e.activeName:'开发联调满减活动';
						paySuccessData.actName = e.activeName;
						paySuccessData.payAmt = e.txnAmt;
					}
					console.log('组装手机银行jsApi调起支付所需参数', tradeInfo);
					var tradeInfoJson = JSON.stringify(tradeInfo);
					// 手机银行app支付js代码
					tradePayForTL(tradeInfoJson);

				} else {
					exceptionHandle(e);
				}
			} else {
				/*
				0601=活动名额已达上限，请重新支付
				0602=今日参与活动名额已达上限
				0603=活动名额已达上限，请重新支付
				0604=您当日的奖励额度已达上限
				0605=活动名额已达上限，请重新支付
				0606=您当日的奖励额度已达上限
				0607=活动名额已达上限，请重新支付
				0699=支付失败，请重新支付
				*/
				var specialCode = ["0601", "0602", "0603", "0604", "0605", "0606", "0607", "0699"];
				if (e.respCode.length === 7 && specialCode.includes(e.respCode.substring(3))) {
					$(".fatherBar").attr("style", "display:none");
					$("#submitButton").attr("style", "display:");
					$("#tishiyu").attr("style", "display:");
					// alert(e.respMsg);
					$.toast(e.respMsg, 1000);
					$.closeMobileCover();
					return;
				}
				exceptionHandle(e);
			}
		});
	}
	/**
	 * 移除子元素
	 */
	function removeAllChild() {

		var div = document.getElementById("imgRefresh");

		while (div.hasChildNodes()) {//当div下还存在子节点时 循环继续

			div.removeChild(div.firstChild);

		}

	}



    /**
     * 生成随机字符串
     */
	function randomWord(randomFlag, min, max) {
		var str = "";
		var range = min;
		var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

		// 随机产生
		if (randomFlag) {
			range = Math.round(Math.random() * (max - min)) + min;
		}
		for (var i = 0; i < range; i++) {
			pos = Math.round(Math.random() * (arr.length - 1));
			str += arr[pos];
		}
		return str;
	}



	/**
	 * 移除子元素,然后重新画二维码
	 */
	function add() {

		removeAllChild();

		var ee = randomWord(false, 32);

		//    	var rr = "http://dev.zjtlcb.com/ifsp-payweb/cognizePay/" + ee;
		var rr = "https://pay.zjtlcb.com/ifsp-payweb/cognizePay/" + ee;

		$("#imgRefresh").append('<img id="qrCodeIco" src="./static/images/mobile/onecode/mer/logo.png" style="width: 0.8rem;height: 0.8rem;position: absolute;top: 2.05rem;left: 3.38rem;" />');

		$('#imgRefresh').qrcode({ width: 150, height: 150, text: rr });

	}




	/**
	 * 确认支付
	 */
	$("#submitButtonTwo").click(function () {
		sensors.track('last_confirm_pay',{
			'pay_amount': amtField.attr("value"),
			'remarks': staticRemark,
			'business_number': paySuccessData.merId,
		});
		console.log('支付中...')
		var payAmt = $("#payAmt").html();
		var remark = $("#remark").val();
		var inputAmt = $("#inputAmt").html();
		// alert(inputAmt)
		var actAmt = $("#actAmt").html();
		//判断是否可以支付
		if ($('#submitButtonTwo').hasClass('unable') || $('#submitButtonTwo').hasClass('paying')) {
			return;
		}

		paySuccessData.remark = remark;

		var payInfo1 = {
			payAmt: payAmt, 
			orderAmt: inputAmt,
			remark: remark, 
			actAmt: actAmt.substring(1),
			activeType: paySuccessData.activeType,
		}

		if (payAmt <= 500.00) {
			paySuccessData.paySizeType = "01";
			$('#submitButtonTwo').html('正在支付');
			emitPayAction(payInfo1);
		} else if (payAmt > 500.00) {
			paySuccessData.paySizeType = "02";
			$("body").html(template('mobile/onecode/mer/cognizePay', null));
			$("#cogPayAmt").html("¥" + payAmt);
			$("#cogPayMerName").html(paySuccessData.merName);
			var imgData = randomWord(false, 32);
			imgData = "https://pay.zjtlcb.com/ifsp-payweb/cognizePay/" + imgData;
			$('#imgRefresh').qrcode({ width: 150, height: 150, text: imgData });
			// 设置定时器
			setInterval(function () { add(); }, 60000);
			// 给识别支付派发点击事件
			$("#cogAndPay").click(function () {
				$('#cogAndPay').html('识别支付中');
				emitPayAction(payInfo1)
			});
		}
	});
	/**
	 * @param {*} e {e.payAmt:实付金额, e.inputAmt: 订单金额, e.actAmt: 活动金额, 
	 * e.actName: 活动名称, e.activeType: 活动类型}
	 */
	function showActivityInfo(e) {
		// activeType: '51' 随机减
		if (e.mchtActFlag === "00") {
			inputRemark("01");
			return;
		}else {
			$(".sonBar").css({ height: "8rem" });
			$(".costStyle").css({ lineHeight: "0.90rem" });
			$('.thsPaySecondMsg').css({ display: "" })
			$('.thsPaySecondMsg').html(e.paySecondMsg)
			// 最终支付金额
			e.payAmt = amtConvert(e.payAmt);
			// 用户输入金额
			e.inputAmt = amtConvert(e.amt);
			// 活动减免金额
			e.actAmt = amtConvert(e.actAmt);
			$("#payAmt").html(e.payAmt);
			$("#inputAmt").html(e.inputAmt);
			paySuccessData.payAmt = $("#payAmt").html();
			paySuccessData.inputAmt = $("#inputAmt").html();
		    paySuccessData.activeType = activeType = e.activeType;
			$("#actNm").html(e.actName);
			$("#actAmt").html("-" + e.actAmt);
			paySuccessData.actAmt = $("#actAmt").html().substring(1);
			paySuccessData.actName = e.actName;
		}
		if (e.payLimitFlag === "0002") {
			$("#tishiyu2").css({ display: "" });
		} else {
			$("#tishiyu2").css({ display: "none" });
		}
		$(".fatherBar").attr("style", "display:");
		$("#submitButton").attr("style", "display:none");
		$("#tishiyu").attr("style", "display:none");
	}
	function queryActAmt() {
		var amtFieldvalue = amtField.attr("value");
		amtFieldvalue = amtFieldvalue[amtFieldvalue.length-1] === "." ? amtFieldvalue+"00" : amtFieldvalue;
		var data = {
			paySessionCode: paySessionCode,
			merId: cashierData.merId,
			amt: amtFieldvalue,
		}
		data.prodId = tunnel_type === 'zfb'?'PD1003'
					 :tunnel_type === 'wx'?'PD1001'
					 :'PD1005';
		$(".spinner").attr("style", "display:");
		$.ajax({
			url: request_url + "/queryActAmt",
			type: "POST",
			timeout: 10000,
			async: true,
			contentType: 'application/json;charset=utf-8',
			data: JSON.stringify(data),
			dataType: "JSON",
			context: document.body,
			success: function (e) {
				if (typeof e === 'string') e = JSON.parse(e)
				$(".spinner").attr("style", "display: none");
				$.closeMobileCoverTwo();
				if ($.txnIsSuzccess(e.respCode)) {
					if (e.mchtActFlag === '01') {
						activeInfo.actAmt = paySuccessData.actAmt = e.actAmt;
						activeInfo.actName = paySuccessData.actName = e.actName;
						activeInfo.activeType =  paySuccessData.activeType = e.activeType;
						activeInfo.ctbtType = e.ctbtType;   // 出资类型
						activeInfo.paySecondMsg = e.paySecondMsg;
						activeInfo.payAmt = e.payAmt;
					}
					activeInfo.mchtActFlag = e.mchtActFlag;			
					console.log('activeInfo', activeInfo)
					if (tunnel_type === 'zfb') {
						var payInfo2 = {
							payAmt: e.payAmt, 
							orderAmt: e.amt,
							remark: $("#remark").val(), 
							actAmt: e.actAmt,
							activeType: e.activeType,
						}
						paySuccessData.inputAmt = e.amt;   // 订单金额
						paySuccessData.orderAmt = e.amt;   // 订单金额
						paySuccessData.payAmt = e.payAmt;	
						$.when(judgeHuabei(e.payAmt)).done(function(hbInfo){
							// alert(JSON.stringify(hbInfo))
							if (hbInfo.showHuabei) {
								if (hbInfo.hbInfo) 
									cogPayOrPay(payInfo2, hbInfo.hbInfo);
								else 
									cogPayOrPay(payInfo2);
								return;
							}
							showActivityInfo(e)
						})
						return;
					}
					showActivityInfo(e);
				} else {
					exceptionHandle(e);
				}
			},
			timeout: function (e) {
				$(".spinner").attr("style", "display: none");
				$.closeMobileCoverTwo();
				$(".spinner").attr("style", "display:none");
				alert("timeout");
				e.respMsg = '网络正在开小差,请重试或联系客服热线95347'
				exceptionHandle(e);
			},
			error: function (e) {
				$.closeMobileCoverTwo();
				$(".spinner").attr("style", "display:none");
				errorHandle();
			}
		});
	}
	/**
	 * 
	 * @param {string} payAmt 订单金额
	 * @param {string} remarkValue 备注文字
	 */
	function emitPayAction(payData){
		$.when(judgeHuabei(payData.payAmt)).done(function(hbInfo){
			console.log('hbInfo',hbInfo);
			if (hbInfo.hbInfo) {
				cogPayOrPay(payData, hbInfo.hbInfo);
			}
			else {
				// 直接支付
				cogPayOrPay(payData);
			}
		})
	}
	/**
	 * 
	 * @param {string} tmpFlag "01":商户是活动商户，但用户输入金额不满足条件，仍然直接走普通流程
	 */
	function inputRemark(tmpFlag) {
		var remarkValue = $("#remark").val();
		if (remarkNeedFlag && !remarkValue) {
			var tip = "<div class='popup' style='display:none'><div class='mask'></div><div class='contbox' ><div class='top'><h3>温馨提示</h3><p>请输入备注 !</p></div><div class='bottomone'>确定</div></div></div>";
			$('.displayarea').html(tip);
			$('.popup').css({
				display: "block"
			})
			$(".mask").click(function () {//点击遮罩取消回调
				$(".popup").css({
					display: "none"
				});
			})
			$(".bottomone").click(function () {//点击确定按钮 回调
				$(".popup").css({
					display: "none"
				});
			})
			$.closeMobileCoverTwo();
			return;
		}
		// 商户参加活动 && 用户不一定不满足条件 && 手机银行不查活动
		if (mchtActFlag && tmpFlag != "01" && tunnel_type != "tl_bank") {
			queryActAmt();
		}else {
			var payAmt1 = amtField.attr("value");
			paySuccessData.inputAmt = payAmt1
			paySuccessData.payAmt = payAmt1
			paySuccessData.remark = remarkValue
			if (payAmt1 <= 500.00) {
				paySuccessData.paySizeType = "01";
				// 直接支付
				emitPayAction({payAmt: payAmt1, orderAmt: payAmt1, remark: remarkValue});
			} else if (payAmt1 > 500.00) {
				paySuccessData.paySizeType = "02";
				$("body").html(template('mobile/onecode/mer/cognizePay', paySuccessData));
				$("#cogPayAmt").html("¥" + payAmt1);
				$("#cogPayMerName").html(paySuccessData.merName);
				var imgData = randomWord(false, 32);
				imgData = "https://pay.zjtlcb.com/ifsp-payweb/cognizePay/" + imgData;
				console.info(imgData);
				$('#imgRefresh').qrcode({ width: 150, height: 150, text: imgData });
				// 设置定时器
				setInterval(function () { add(); }, 60000);
				// 给识别支付派发点击事件
				$("#cogAndPay").click(function(){
					var payInfo = {
						payAmt: payAmt1,
						remark: remarkValue,
						orderAmt: payAmt1,
					};
					emitPayAction(payInfo);
				});
			}
		}
	}
})
