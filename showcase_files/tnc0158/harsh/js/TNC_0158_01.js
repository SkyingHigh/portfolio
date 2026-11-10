AdobeEdge.bootstrapCallback(function (compId)
{
	/*------------------------------------------------------------
	INITIAL_VARS
	
	------------------------------------------------------------*/
	var theAd		= AdobeEdge.getComposition('TNC');
	var stage		= theAd.getStage();
	
	//OBJECT_ELEMENTS
	var cover			= theAd.getStage().$( 'cover' );
	var cta				= theAd.getStage().$( 'cta' );
	var border			= theAd.getStage().$( 'border' );
	var dynamic_d			= theAd.getStage().$( 'dynamic_d' );
	var dynamic_h			= theAd.getStage().$( 'dynamic_h' );
	var dynamic_m			= theAd.getStage().$( 'dynamic_m' );
	var dynamic_s			= theAd.getStage().$( 'dynamic_s' );
	var date			= theAd.getStage().$( 'date' );
	
	var bg				= theAd.getStage().$( 'bg' );
	var rise			= theAd.getStage().$( 'rise' );
	var subhead			= theAd.getStage().$( 'subhead' );
	var earthday			= theAd.getStage().$( 'earthday' );
	
	earthday.hide();
	
	/*------------------------------------------------------------
	CTA_ACTIONS
	------------------------------------------------------------*/
	cta.bind('mouseover', ctaOver );
	cta.bind('mouseout', ctaOut );
	
	function ctaOver(){ TweenLite.to(cta, 0.25, { scale:1.1, overwrite:false }); };
	function ctaOut(){ TweenLite.to(cta, 0.25, { scale:1, overwrite:false }); };
	
	border.bind('click',function()
	{
		console.trace( 'OVERALL_CLICKED ' );
		window.open(clickTag, "_blank");
	});
	
	cta.bind('click', function()
	{
		console.trace( 'CTA_CLICKED ' );
		window.open(clickTag, "_blank");
	});
	
	/*------------------------------------------------------------
	COUNTDOWN_TIMER
	------------------------------------------------------------*/
	function getTimeRemaining(endtime)
	{
		var t = Date.parse(endtime) - Date.parse(new Date());
		var seconds = Math.floor((t / 1000) % 60);
		var minutes = Math.floor((t / 1000 / 60) % 60);
		var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		var days = Math.floor(t / (1000 * 60 * 60 * 24));
		
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	function initializeClock(endtime)
	{
		function updateClock()
		{
			var t = getTimeRemaining(endtime);
			//console.log("t is "+t.total)
			
			if( t.days < 10 && t.days >= 0 )
			{
				dynamic_d.html( '0' + t.days );
			}else{
				dynamic_d.html( t.days );	
			};
			dynamic_h.html(('0' + t.hours).slice(-2));
			dynamic_m.html(('0' + t.minutes).slice(-2));
			dynamic_s.html(('0' + t.seconds).slice(-2));
			
			
			if (t.total <= 0 && t.days >= -1)
			{
				//clearInterval(timeinterval);
				earthday.show();
				
				TweenLite.to( date, 1, { alpha:0, ease:Quad.easeInOut, delay:0.0, overwrite:false });
				TweenLite.to( dynamic_d, 1, { alpha:0, ease:Quad.easeInOut, delay:0.0, overwrite:false });
				TweenLite.to( dynamic_h, 1, { alpha:0, ease:Quad.easeInOut, delay:0.0, overwrite:false });
				TweenLite.to( dynamic_m, 1, { alpha:0, ease:Quad.easeInOut, delay:0.0, overwrite:false });
				TweenLite.to( dynamic_s, 1, { alpha:0, ease:Quad.easeInOut, delay:0.0, overwrite:false });
				
				TweenLite.to( earthday, 0, { alpha:0, ease:Quad.easeInOut, delay:0.0, overwrite:false });
				TweenLite.to( earthday, 1, { alpha:1, ease:Quad.easeInOut, delay:0.5, overwrite:false });
				
			}
			
			if (t.days <= -2 )
			{
				clearInterval(timeinterval);
				TweenLite.to( date, 1, { alpha:0, ease:Quad.easeInOut, delay:0.0, overwrite:false });
				TweenLite.to( dynamic_d, 1, { alpha:0, ease:Quad.easeInOut, delay:0.0, overwrite:false });
				TweenLite.to( dynamic_h, 1, { alpha:0, ease:Quad.easeInOut, delay:0.0, overwrite:false });
				TweenLite.to( dynamic_m, 1, { alpha:0, ease:Quad.easeInOut, delay:0.0, overwrite:false });
				TweenLite.to( dynamic_s, 1, { alpha:0, ease:Quad.easeInOut, delay:0.0, overwrite:false });
				TweenLite.to( earthday, 1, { alpha:0, ease:Quad.easeInOut, delay:0.0, overwrite:false });
				console.log("done!")
			};
		};
		
		updateClock();
		var timeinterval = setInterval(updateClock, 1000);
	};

	var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
	
	//FOR_QA_ONLY
	/*
	var testdate = new Date();
	testdate.setSeconds(testdate.getSeconds() + 30);
	console.log( testdate );
	var deadline = testdate;
	*/
	//var deadline = new Date(Date.parse(new Date()) + 5 * 1000);
	
	initializeClock(deadline);
	
	console.log( "Date is "+ new Date(Date.parse(new Date())));
	
	if( new Date(Date.parse(new Date())) == deadline )
	{
		console.log("test");
	};
		
	/*------------------------------------------------------------
	ANIMATION console.log( ranNum(1, 2) );
	------------------------------------------------------------*/
	//RANDOM_RANGE
	function R(max,min){return Math.random()*(max-min)+min};
	
	function Frame01()
	{
		//SYNCOPATION_NUM
		//var Num = 4;
		var Num = 0.5;
		
		//ANIMATION
		TweenLite.to( cover, 1, { autoAlpha:0, overwrite:false });
		/*
		TweenLite.from( rise, 3, { alpha:0, clip:"rect(95px 173px 95px 0px)", ease:Quad.easeInOut, delay:Num-1, overwrite:false }); 
		TweenLite.from( subhead, 3, { alpha:0, ease:Quad.easeInOut, delay:Num, overwrite:false });
		TweenLite.from( rise, Num, { rotationX:0.01, scale:1.0, ease:Quad.easeOut, overwrite:false });
		TweenLite.from( bg, Num, { rotationX:0.01, scale:1.3, ease:Quad.easeOut, overwrite:false });
		TweenLite.from( bg_flare, Num, { rotationX:0.01, scale:1.3, ease:Quad.easeOut, overwrite:false });
		TweenLite.from( bg_flare_b, Num, { rotationX:0.01, scale:1.3, ease:Quad.easeOut, overwrite:false });
		
		TweenLite.to( bg_flare, 1, { alpha:0, delay:Num, overwrite:false });
		TweenLite.to( bg_flare_b, 1, { alpha:0, delay:Num, overwrite:false });
		*/
		
		//LOOPING_FADE
		/*
		var tl = new TimelineMax({repeat:-1});
		
		for(var i=50; i--;)
		{
			tl.to(bg_flare,R(0.1,0.5),{opacity:R(0,1)})
			tl.to(bg_flare_b,R(0.2,0.75),{opacity:R(0,1)})
		};
		
		//LOOP_SLAYER
		TweenLite.delayedCall( Num, function(){ tl.kill(); })
		*/
	};
	
	
	
	Frame01();
	
	/*------------------------------------------------------------
	------------------------------------------------------------*/
});