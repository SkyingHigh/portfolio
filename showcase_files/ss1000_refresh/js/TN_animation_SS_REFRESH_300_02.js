var comp;

AdobeEdge.bootstrapCallback(function (compId)
{
	/*------------------------------------------------------------
	VARS
	------------------------------------------------------------*/
	var theAd = AdobeEdge.getComposition('SS');
	var Looper = 1; //for Looping endframe
	
	stage = theAd.getStage();
	
	//FRAME_ELEMENTS
	var PollenHolder	= stage.getSymbol( 'f2_PollenHolder' );
	var refresh_btn		= theAd.getStage().$( 'f2_refresh' );
	var bg			= theAd.getStage().$( 'bg_white' );
	var overall		= theAd.getStage().$( 'border' );
	var cta			= theAd.getStage().$( 'btn_cta' );
	var cta_hit		= theAd.getStage().$( 'cta_hit' );
	var replay		= theAd.getStage().$( 'btn_replay' );
	var shine		= theAd.getStage().$( 'shine' );
	var gleam		= theAd.getStage().$( 'gleam' );
	
	//FRAME_01_ELEMENTS
	var f1refresh		= theAd.getStage().$( 'f1_refresh' );
	var f1a			= theAd.getStage().$( 'f1a' );
	var f1b			= theAd.getStage().$( 'f1b' );
	var f1c			= theAd.getStage().$( 'f1c' );
	//FRAME_02_ELEMENTS
	var f2_lt		= theAd.getStage().$( 'f2_loading_txt' );
	var f2_l01		= theAd.getStage().$( 'f2_loading_bar' );
	var f2_l02		= theAd.getStage().$( 'f2_loading_bar_fill' );
	var f2a			= theAd.getStage().$( 'f2a' );
	var f2b			= theAd.getStage().$( 'f2b' );
	//FRAME_03_ELEMENTS
	var f3v			= theAd.getStage().$( 'f3_vac' );
	//FRAME_04_ELEMENTS
	//FRAME_05_ELEMENTS
	var f5a			= theAd.getStage().$( 'f5a' );
	var f5b			= theAd.getStage().$( 'f5b' );
	var f5c			= theAd.getStage().$( 'f5c' );
	var f5_badge		= theAd.getStage().$( 'f5badge' );
	
	var f5bX		= f5_badge.offset().left;
	var f5bY		= f5_badge.offset().top;
	
	//HIDE_CLICKABLES
	cta.hide();
	gleam.hide();
	replay.hide();
	refresh_btn.hide();
	
	//TOSS IN EVERY OBJECT SO WE CAN ADJUST THEIR VALUES
	var elements		= 
	[
		f1refresh,
		f1a,
		f1b,
		f1c,
		//F2_ELEMENTS
		f2_lt,
		f2_l01,
		f2_l02,
		f2a,
		f2b,
		refresh_btn,
		//F3_ELEMENTS
		f3v,
		//F4_ELEMENTS
		//F5_ELEMENTS
		f5a,
		f5b,
		f5c,
		f5_badge,
		shine
	];
	
	//SET INITIAL X AND Y VALUES OF THE POLLEN PIECES FOR REPLAYING AD
	var pollenX		= []
	var pollenY		= []
	
	for( i=1; i<21; i++)
	{
		//NOT SURE WHY THERE IS AN EXTRA 20 PIXEL EACH WAY, MAYBE HALF OF THE IMAGE'S WIDTH/HEIGHT?
		pollenX.push( PollenHolder.$( 'Pollen'+i ).offset().left - 20 );
		pollenY.push( PollenHolder.$( 'Pollen'+i ).offset().top - 20 );
		
		//console.log( "L is " + PollenHolder.$( 'Pollen'+i ).offset().left )
		//console.log( "T is " + PollenHolder.$( 'Pollen'+i ).offset().top )
	};
	
	//console.log( f1a.offset().left )
	
	//:::::::::::::::::::: COMMON_FUNCTIONS ::::::::::::::::::::
	//RANDOM RANGE
	function ranRange(min, max)
	{
	    return Math.random() * (max - min) + min;
	};
	
	function resetObj( obj )
	{
		TweenLite.to( obj, 0, { alpha:0, x:0, y:0, rotation:0, overwrite:false });	
		//ONLY USE THE NEXT LINE IF YOU WANT TO TWEEN THE Z PROPERTY
		//TweenLite.set( obj, {css:{transformPerspective:600, transformStyle:"preserve-3d"}});
	};
	
	function showObj( obj )
	{
		TweenLite.to( obj, 0, { alpha:1, scaleX:1, scaleY:1, overwrite:false });
	};
	
	//HIDE_THE_OBJECTS
	function HideAll()
	{
		for( i=0; i<elements.length; i++ )
		{
			resetObj(elements[i])
		};
	};
		
	//ANIMATE_POLLEN
	function EnterPollen()
	{
		for( i=1; i<21; i++)
		{
			var pollen	= PollenHolder.$( 'Pollen'+i );
			var ranN	= ranRange( 100, 1000 );
			
			TweenLite.to( pollen, 0, { css: { '-webkit-filter': 'blur(0px)' }, overwite:false });
			TweenLite.to( pollen, 0, { alpha:1, scaleX:0.001*ranN, scaleY:0.001*ranN, left:pollenX[i-1], top:pollenY[i-1], overwrite:false });
			TweenLite.from( pollen, 0.5, { top:0, alpha:0, scaleX:0, scaleY:0, ease:Quad.easeInOut, delay:0.5+(i*0.2), overwrite:false });
		};
	};
	
	function ExitPollen()
	{
		for( i=1; i<21; i++)
		{
			var pollen	= PollenHolder.$( 'Pollen'+i );
			var ranN	= ranRange( 0, 10 );
			var ranX	= ranRange( 100, 175 );
			var ranY	= ranRange( 150, 200 );
			var ranE	= ranRange( 50, 200 );
			TweenLite.to( pollen, 1, { css: { '-webkit-filter': 'blur(5px)' }, ease:Quad.easeIn, delay:1.5+(ranN*0.1), overwite:false });
			TweenLite.to( pollen, 0.5, { alpha:0, bezier:[{left:ranX, top:ranY}, {left:ranX, top:ranY}, {left:ranE, top:150}], ease:Quad.easeIn, delay:1.5+(ranN*0.1), overwrite:false });
		};
	};
	
	for( i=1; i<21; i++)
	{
		resetObj( PollenHolder.$( 'Pollen'+i ) );
	};
	
	/*------------------------------------------------------------
	--------------------------------------------------------------
	USER_INITIATED_CLEANSE
	--------------------------------------------------------------
	------------------------------------------------------------*/
	function refreshIt()
	{
		refresh_btn.unbind('mouseover', refreshIt )
		TweenMax.killAll();
		ResolveA();
	};
	
	function allowRefresh()
	{
		refresh_btn.bind('mouseover', refreshIt )
	};
	
	/*------------------------------------------------------------
	--------------------------------------------------------------
	CTA_ACTIONS_AND_REPLAY
	notes:add 80px to line
	--------------------------------------------------------------
	------------------------------------------------------------*/	
	function ctaClick()
	{
		console.trace( 'CTA_CLICKED ' );
		//window.open(clickTag, "_blank");
	};
		
	function ctaOut(){ TweenLite.to( cta, 0.25, { scaleX:1.0, scaleY:1.0, ease:Quad.easeOut, overwrite:false }); };
	function ctaOver(){ TweenLite.to( cta, 0.25, { scaleX:1.1, scaleY:1.1, ease:Quad.easeIn, overwrite:false }); };
	
	function Replay()
	{
		Looper = 1;
		TweenMax.killAll();
		FrameOne();
	};
	
	//ENABLE_BUTTONS
	function EnableCTA()
	{
		cta_hit.bind( 'mouseover', ctaOver );
		cta_hit.bind( 'mouseout', ctaOut );
	};
	
	function DisableCTA()
	{
		cta_hit.unbind( 'mouseover', ctaOver );
		cta_hit.unbind( 'mouseout', ctaOut );
	};
	
	function repOut(){ TweenLite.to( this, 0.25, { scaleX:1.0, scaleY:1.0, ease:Quad.easeOut, overwrite:false }); };
	function repOver(){ TweenLite.to( this, 0.25, { scaleX:1.1, scaleY:1.1, ease:Quad.easeIn, overwrite:false }); };
	
	function EnableReplay()
	{
		replay.bind( 'click', Replay );
		replay.bind( 'mouseover', repOver );
		replay.bind( 'mouseout', repOut );
	};
	
	function DisableReplay()
	{
		replay.unbind( 'click', Replay );
		replay.unbind( 'mouseover', repOver );
		replay.unbind( 'mouseout', repOut );
	};
	
	overall.bind('click',function()
	{
		console.trace( 'OVERALL_CLICKED ' );
		//window.open(clickTag, "_blank");
	});
	
	//cta_hit.bind( 'click', ctaClick );
	
	/*------------------------------------------------------------
	--------------------------------------------------------------
	ANIMATION
	
	REFERENCE:
	filter:'blur(10px)' - all around blur, non-directional
	filter:'blur(Add = 0, Direction = 225, Strength = 10)'
	--------------------------------------------------------------
	------------------------------------------------------------*/
	function FrameOne()
	{
		//INITIAL_SETTINGS
		HideAll();
		cta.hide();
		gleam.hide();
		replay.hide();
		stage.play(1);
		for( i=0; i<4; i++ ){ showObj(elements[i]); };
		TweenLite.to( bg, 0, { left:-100, overwrite:false });
		
		//ANIMATION
		TweenLite.from( f1refresh, 0.5, { alpha:0, rotation:"-180", ease:Quad.easeOut, delay:1, overwrite:false });
		TweenLite.from( f1a, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:1.2, overwrite:false });
		TweenLite.from( f1b, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:1.4, overwrite:false });
		TweenLite.from( f1c, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:1.6, overwrite:false });
		
		//DAISY_CHAIN
		TweenLite.delayedCall( 3, FrameTwo );
	};
	
	function FrameTwo()
	{
		//INITIAL_SETTINGS
		refresh_btn.show();
		stage.play(1000);
		for( i=4; i<10; i++ ){ showObj(elements[i]); };
		TweenLite.to( refresh_btn, 0, { alpha:0.75, rotation:0, overwrite:false });
		TweenLite.to( f2_l02, 0, { css:{clip:"rect(0px,140px,6px,0px)"}, overwrite:false });
		TweenLite.delayedCall( 1, EnterPollen );
		
		//EXIT_ANIMATION
		TweenLite.to( bg, 0.5, { left:300, ease:Quad.easeInOut, delay:0.25, overwrite:false });
		TweenLite.to( f1refresh, 0.5, { alpha:0, rotation:"180", x:"10", ease:Quad.easeOut, delay:0.2, overwrite:false });
		TweenLite.to( f1a, 0.5, { alpha:0, x:"10", ease:Quad.easeInOut, delay:0.2, overwrite:false });
		TweenLite.to( f1b, 0.5, { alpha:0, x:"10", ease:Quad.easeInOut, delay:0.4, overwrite:false });
		TweenLite.to( f1c, 0.5, { alpha:0, x:"10", ease:Quad.easeInOut, delay:0.6, overwrite:false });
		
		//ANIMATION
		TweenLite.from( f2_lt, 0.5, { alpha:0, ease:Quad.easeInOut, delay:1, overwrite:false });
		
		TweenLite.from( f2_l01, 0.5, { alpha:0, ease:Quad.easeInOut, delay:1, overwrite:false });
		TweenLite.from( f2_l02, 4.5, { css:{clip:"rect(0px,0px,6px,0px)"}, delay:1, ease:Quad.easeIn, overwrite:false });
		
		TweenLite.from( f2a, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:1.2, overwrite:false });
		TweenLite.from( f2b, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:1.4, overwrite:false });
		TweenLite.from( refresh_btn, 0.5, { alpha:0, rotation:"-180", x:"-10", ease:Quad.easeInOut, delay:1.6, overwrite:false, onComplete:allowRefresh });
		
		//DAISY_CHAIN
		TweenLite.delayedCall( 5.5, ResolveA )
	};
	
	function ResolveA()
	{
		//INITIAL_SETTINGS
		showObj( elements[10] );
		refresh_btn.unbind('click', refreshIt )
		TweenLite.to( f3v, 0, { y:0, overwrite:false });
		
		//EXIT_ANIMATION
		TweenLite.to( f2_lt, 0.5, { alpha:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( f2_l01, 0.5, { alpha:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( f2_l02, 0.5, { alpha:0, ease:Quad.easeInOut, overwrite:false });
		
		TweenLite.to( f2a, 0.5, { alpha:0, x:"10", ease:Quad.easeInOut, delay:0.2, overwrite:false });
		TweenLite.to( f2b, 0.5, { alpha:0, x:"10", ease:Quad.easeInOut, delay:0.4, overwrite:false });
		TweenLite.to( refresh_btn, 0.5, { alpha:0, rotation:"180", ease:Quad.easeInOut, overwrite:false, onComplete:function(){refresh_btn.hide();} });
		
		//ANIMATION
		TweenLite.from( f3v, 0.5, { y:"-200", ease:Quad.easeInOut, delay:1.0, overwrite:false });
		ExitPollen();
		
		//DAISY_CHAIN
		TweenLite.delayedCall( 2.75, ResolveB )
	};
	
	function ResolveB()
	{
		//INITIAL_SETTINGS
		for( i=11; i<16; i++ ){ showObj(elements[i]); };
		cta.show();
		gleam.show();
		TweenLite.to( gleam, 0, { left:184, alpha:1, overwrite:false });
		TweenLite.from( gleam, 1, { left:38, ease:Quad.easeInOut, delay:2, overwrite:false });
		TweenLite.from( gleam, 0.5, { alpha:0, delay:2, overwrite:false });
		TweenLite.to( gleam, 0.5, { alpha:0, delay:2.5, onComplete:function(){ gleam.hide(); }, overwrite:false });
		
		TweenLite.to( bg, 0, { left:-100, overwrite:false });
		TweenLite.to( cta, 0, { alpha:1, overwrite:false });
		TweenLite.to( f5_badge, 0, { scaleX:1, scaleY:1, left:f5bX, top:f5bY, overwrite:false })
		
		//EXIT_ANIMATION
		TweenLite.to( f3v, 0.5, { y:"-200", ease:Quad.easeInOut, overwrite:false });
		
		//ANIMATION
		TweenLite.from( bg, 0.5, { left:-400, ease:Quad.easeInOut, overwrite:false });
		TweenLite.from( f5a, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:0.2, overwrite:false });
		TweenLite.from( f5b, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:0.4, overwrite:false });
		TweenLite.from( f5c, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:0.6, overwrite:false });
		TweenLite.from( f5_badge, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:0.8, overwrite:false });
		TweenLite.from( cta, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:1, overwrite:false, onComplete:EnableCTA });
		
		//SHINE
		TweenLite.from( shine, 2.0, { rotation:-360, ease:Quad.easeInOut, delay:1.4, overwrite:false });
		TweenLite.from( shine, 0.5, { alpha:0, scaleX:0.1, scaleY:0.1, ease:Quad.easeInOut, delay:1.4, overwrite:false });
		TweenLite.to( shine, 0.5, { alpha:0, scaleX:0.1, scaleY:0.1, ease:Quad.easeInOut, delay:1.9, overwrite:false });
		
		//DAISY_CHAIN
		TweenLite.delayedCall( 3.5, ResolveC )
	};
	
	function ResolveC()
	{
		//INITIAL_SETTINGS
		replay.show();
		stage.play(1750);
		TweenLite.to( replay, 0, { alpha:1, overwrite:false });
		
		gleam.show();
		TweenLite.to( gleam, 0, { left:184, alpha:1, overwrite:false });
		TweenLite.from( gleam, 1, { left:38, ease:Quad.easeInOut, delay:2, overwrite:false });
		TweenLite.from( gleam, 0.5, { alpha:0, delay:2, overwrite:false });
		TweenLite.to( gleam, 0.5, { alpha:0, delay:2.5, onComplete:function(){ gleam.hide(); }, overwrite:false });
		
		//SHINE
		showObj(elements[15]);
		TweenLite.from( shine, 2.0, { rotation:-360, ease:Quad.easeInOut, delay:1.4, overwrite:false });
		TweenLite.from( shine, 0.5, { alpha:0, scaleX:0.1, scaleY:0.1, ease:Quad.easeInOut, delay:1.4, overwrite:false });
		TweenLite.to( shine, 0.5, { alpha:0, scaleX:0.1, scaleY:0.1, ease:Quad.easeInOut, delay:1.9, overwrite:false });
		
		//EXIT_ANIMATION
		TweenLite.to( f5_badge, 1, { alpha:0, scaleX:0.2, scaleY:0.2, left:23, top:60, ease:Quad.easeInOut, delay:0.0, overwrite:false });
		
		//ANIMATION
		TweenLite.from( replay, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:0.2, overwrite:false, onComplete:EnableReplay });
		
		//DAISY_CHAIN
		TweenLite.delayedCall( 5.0, LoopA );
	};
	
	function LoopA()
	{
		Looper += 1;
		
		gleam.show();
		TweenLite.to( gleam, 0, { left:184, alpha:1, overwrite:false });
		TweenLite.from( gleam, 1, { left:38, ease:Quad.easeInOut, delay:2, overwrite:false });
		TweenLite.from( gleam, 0.5, { alpha:0, delay:2, overwrite:false });
		TweenLite.to( gleam, 0.5, { alpha:0, delay:2.5, onComplete:function(){ gleam.hide(); }, overwrite:false });
		
		//SHINE
		showObj(elements[15]);
		TweenLite.from( shine, 2.0, { rotation:-360, ease:Quad.easeInOut, delay:1.4, overwrite:false });
		TweenLite.from( shine, 0.5, { alpha:0, scaleX:0.1, scaleY:0.1, ease:Quad.easeInOut, delay:1.4, overwrite:false });
		TweenLite.to( shine, 0.5, { alpha:0, scaleX:0.1, scaleY:0.1, ease:Quad.easeInOut, delay:1.9, overwrite:false });
		
		TweenLite.delayedCall( 5.0, LoopB );
	};
	
	function LoopB()
	{
		Looper += 1;
		
		gleam.show();
		TweenLite.to( gleam, 0, { left:184, alpha:1, overwrite:false });
		TweenLite.from( gleam, 1, { left:38, ease:Quad.easeInOut, delay:2, overwrite:false });
		TweenLite.from( gleam, 0.5, { alpha:0, delay:2, overwrite:false });
		TweenLite.to( gleam, 0.5, { alpha:0, delay:2.5, onComplete:function(){ gleam.hide(); }, overwrite:false });
		
		//SHINE
		showObj(elements[15]);
		TweenLite.from( shine, 2.0, { rotation:-360, ease:Quad.easeInOut, delay:1.4, overwrite:false });
		TweenLite.from( shine, 0.5, { alpha:0, scaleX:0.1, scaleY:0.1, ease:Quad.easeInOut, delay:1.4, overwrite:false });
		TweenLite.to( shine, 0.5, { alpha:0, scaleX:0.1, scaleY:0.1, ease:Quad.easeInOut, delay:1.9, overwrite:false });
		
		if( Looper !== 3 )
		{
			TweenLite.delayedCall( 5.0, LoopA );
		};
	};
	
	FrameOne();
});