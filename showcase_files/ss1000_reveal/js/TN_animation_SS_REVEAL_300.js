var comp;

AdobeEdge.bootstrapCallback(function (compId)
{
	/*------------------------------------------------------------
	VARS
	------------------------------------------------------------*/
	var theAd = AdobeEdge.getComposition('SS');
	var Looper = 1; //FOR LOOPING ENDFRAME
	stage = theAd.getStage();
	
	//FRAME_ELEMENTS
	var steam_holder	= stage.getSymbol( 'steam_holder' );
	var carpet_holder	= stage.getSymbol( 'carpet_holder' );
	var carpet_clean	= theAd.getStage().$( 'carpet_clean' );
	var cover_white		= theAd.getStage().$( 'cover_white' );
	var bgWH		= theAd.getStage().$( 'bg_white' );
	var bgBL		= theAd.getStage().$( 'bg_black' );
	var overall		= theAd.getStage().$( 'border' );
	var cta			= theAd.getStage().$( 'btn_cta' );
	var cta_hit		= theAd.getStage().$( 'cta_hit' );
	var replay		= theAd.getStage().$( 'btn_replay' );
	var replay_hit		= theAd.getStage().$( 'replay_hit' );
	var shine		= theAd.getStage().$( 'shine' );
	var gleam		= theAd.getStage().$( 'gleam' );
	
	//FRAME_01_ELEMENTS
	var f1a			= theAd.getStage().$( 'f1a' );
	var f1b			= theAd.getStage().$( 'f1b' );
	var f1c			= theAd.getStage().$( 'f1c' );
	//FRAME_02_ELEMENTS
	var f2_steemer		= theAd.getStage().$( 'steemer' );
	var f2_roll		= theAd.getStage().$( 'f2_rollover' );
	var f2a			= theAd.getStage().$( 'f2a' );
	var f2b			= theAd.getStage().$( 'f2b' );
	
	var steemerX		= f2_steemer.offset().left;
	var steemerY		= f2_steemer.offset().top;
	
	//FRAME_05_ELEMENTS
	var f5a			= theAd.getStage().$( 'f5a' );
	var f5b			= theAd.getStage().$( 'f5b' );
	var f5c			= theAd.getStage().$( 'f5c' );
	var f5d			= theAd.getStage().$( 'f5d' );
	//FRAME_06_ELEMENTS
	var f6a			= theAd.getStage().$( 'f6a' );
	var f6b			= theAd.getStage().$( 'f6b' );
	var f6c			= theAd.getStage().$( 'f6c' );
	var f6d			= theAd.getStage().$( 'f6d' );
	
	//HIDE_CLICKABLES
	cta.hide();
	cta_hit.hide();
	gleam.hide();
	replay.hide();
	replay_hit.hide();
	
	//HIDE_STEAM
	for( i=0; i<12; i++)
	{
		var puff = steam_holder.$( 'p'+(i+1) )
		TweenLite.to( puff, 0, { alpha:0, overwrite:false });
	};
	
	//CARPET_CLEANING_BOOLEANS
	var f2_clear		= false;
	var c01			= false;
	var c02			= false;
	var c03			= false;
	var c04			= false;
	var c05			= false;
	var c06			= false;
	var c07			= false;
	var c08			= false;
	var c09			= false;
	var c10			= false;
	var c11			= false;
	var c12			= false;
	
	//RESET_CARPET
	function ResetCarpet()
	{
		//RESET DEM BOOLEANS
		f2_clear	= false;
		c01		= false;
		c02		= false;
		c03		= false;
		c04		= false;
		c05		= false;
		c06		= false;
		c07		= false;
		c08		= false;
		c09		= false;
		c10		= false;
		c11		= false;
		c12		= false;
		
		//DIRTY UP THE CARPET!
		for( i=0; i<12; i++)
		{
			var piece = carpet_holder.$( 'carpet_'+(i+1) )
			TweenLite.to( piece, 0, { alpha:1, overwrite:false });
		};
		
		//PUT THE STICK BACK!
		TweenLite.to( f2_steemer, 0, { alpha:0, left:steemerX, top:steemerY, overwrite:false });
	};
	
	//TOSS IN EVERY OBJECT SO WE CAN ADJUST THEIR VALUES
	var elements		= 
	[
		f1a,
		f1b,
		f1c,
		
		f2_roll,
		f2_roll,
		f2a,
		f2b,
		
		cover_white,
		f5a,
		f5b,
		f5c,
		f5d,
		
		f6a,
		f6b,
		f6c,
		f6d
	];
	
	//:::::::::::::::::::: COMMON_FUNCTIONS ::::::::::::::::::::
	//RANDOM RANGE
	function ranRange(min, max)
	{
	    return Math.random() * (max - min) + min;
	};
	
	function resetObj( obj )
	{
		TweenLite.to( obj, 0, { alpha:0, x:0, y:0, rotation:0, scaleX:1, scaleY:1, overwrite:false });	
		//ONLY USE THE NEXT LINE IF YOU WANT TO TWEEN THE Z PROPERTY
		//TweenLite.set( obj, {css:{transformPerspective:600, transformStyle:"preserve-3d"}});
	};
	
	function showObj( obj )
	{
		TweenLite.to( obj, 0, { alpha:1, x:0, y:0, rotation:0, scaleX:1, scaleY:1, overwrite:false });
	};
	
	//HIDE_THE_OBJECTS
	function HideAll()
	{
		resetObj( shine );
		
		for( i=0; i<elements.length; i++ )
		{
			resetObj(elements[i])
		};
	};
	
	/*------------------------------------------------------------
	--------------------------------------------------------------
	CTA_ACTIONS_AND_REPLAY
	--------------------------------------------------------------
	------------------------------------------------------------*/
	function ctaClick()
	{
		console.trace( 'CTA_CLICKED ' );
		window.open(clickTag, "_blank");
	};
		
	function ctaOut(){ TweenLite.to(cta, 0.25, { scaleX:1.0, scaleY:1.0, ease:Quad.easeOut, overwrite:false }); };
	function ctaOver(){ TweenLite.to( cta, 0.25, { scaleX:1.1, scaleY:1.1, ease:Quad.easeIn, overwrite:false }); };
	
	function ReplayOut(){ TweenLite.to(replay, 0.25, { scaleX:1.0, scaleY:1.0, ease:Quad.easeOut, overwrite:false }); };
	function ReplayOver(){ TweenLite.to( replay, 0.25, { scaleX:1.1, scaleY:1.1, ease:Quad.easeIn, overwrite:false }); };
	
	function Replay()
	{
		TweenMax.killAll();
		FrameOne();
	};
	
	//ENABLE_BUTTONS
	function EnableCTA()
	{
		cta_hit.bind( 'click', ctaClick );
		cta_hit.bind( 'mouseover', ctaOver );
		cta_hit.bind( 'mouseout', ctaOut );
	};
	
	function DisableCTA()
	{
		cta_hit.unbind( 'click', ctaClick );
		cta_hit.unbind( 'mouseover', ctaOver );
		cta_hit.unbind( 'mouseout', ctaOut );
	};
	
	function EnableReplay()
	{
		replay_hit.bind( 'click', Replay );
		replay_hit.bind( 'mouseover', ReplayOver );
		replay_hit.bind( 'mouseout', ReplayOut );
	};
	
	function DisableReplay()
	{
		replay_hit.unbind( 'click', Replay );
		replay_hit.unbind( 'mouseover', ReplayOver );
		replay_hit.unbind( 'mouseout', ReplayOut );
	};
	
	overall.bind('click',function()
	{
		console.trace( 'OVERALL_CLICKED ' );
		window.open(clickTag, "_blank");
	});
	
	/*------------------------------------------------------------
	--------------------------------------------------------------
	IDLE_TIMER_ANIMATION
	--------------------------------------------------------------
	------------------------------------------------------------*/
	var idleTime;
	var idleChecker;
	var seconds;
	
	function idleCheck()
	{
		idleTime+=1;
		//console.log( idleTime );
		TweenLite.to( f2_roll, 0.5, { x:"-5", ease:Quad.easeIn, delay:0, overwrite:false });
		TweenLite.to( f2_roll, 0.5, { x:"0", ease:Quad.easeOut, delay:0.5, overwrite:false });
		
		if( idleTime !== seconds  ) //multiplied by interval loop in StartChecker function.
		{
			TweenLite.to( steam_holder.$( 'p'+idleTime ), 0, { alpha:0.25, scaleX:0.5, scaleY:0.5, top:20, left:-30, overwrite:false });
			TweenLite.from( steam_holder.$(  'p'+idleTime ), 0.5, { scaleX:0, scaleY:0, alpha:0, ease:Quad.easeOut, overwrite:false });
			TweenLite.to( steam_holder.$(  'p'+idleTime ), 0.5, { alpha:0, ease:Quad.easeOut, delay:0.5, overwrite:false });
		};
		
		if( idleTime == seconds ) //multiplied by interval loop in StartChecker function.
		{
			//console.log("5 idle seconds!")
			
			//CLEAR_OUT_FRAME_ELEMENTS
			TweenLite.to( f2_roll, 0.5, { alpha:0, x:"10", ease:Quad.easeInOut, delay:0.0, overwrite:false });
			TweenLite.to( f2a, 0.5, { alpha:0, x:"10", ease:Quad.easeInOut, delay:0.2, overwrite:false });
			$(document).off("mousemove"); //DISABLE_INTERACTIVITY
			clearInterval(idleChecker);
			
			//ANIMATE_STEEMER
			TweenLite.to( f2_steemer, 0.5, { left:175, top:-108, ease:Quad.easeInOut, delay:0.0, overwrite:false });
			TweenLite.to( f2_steemer, 0.5, { left:5, top:-108, ease:Quad.easeInOut, delay:0.5, overwrite:false });
			
			TweenLite.to( f2_steemer, 0.25, { left:5, top:-155, ease:Quad.easeInOut, delay:1.0, overwrite:false });
			TweenLite.to( f2_steemer, 0.5, { left:175, top:-155, ease:Quad.easeInOut, delay:1.25, overwrite:false });
			
			TweenLite.to( f2_steemer, 0.25, { left:175, top:-210, ease:Quad.easeInOut, delay:1.75, overwrite:false });
			TweenLite.to( f2_steemer, 0.5, { left:5, top:-210, ease:Quad.easeInOut, delay:2.0, overwrite:false });
			
			TweenLite.to( f2_steemer, 0.5, { alpha:0, top:-317, ease:Quad.easeInOut, delay:2.5, overwrite:false });
			
			//ANIMATE_STEAM
			var steamscale 		= 0.5;
			var steamOpacity	= 0.25;
			
			function AnimateSteam( puff, delay, L, T )
			{
				TweenLite.to( puff, 0, { left:L, top:T, scaleX:steamscale, scaleY:steamscale, alpha:steamOpacity, delay:0, overwrite:false });			
				TweenLite.from( puff, 0.5, { scaleX:0, scaleY:0, alpha:0, ease:Quad.easeOut,  delay:0.1+(delay*0.2), overwrite:false });
				TweenLite.to( puff, 0.5, { alpha:0.0, ease:Quad.easeOut, delay:0.8+(delay*0.2), overwrite:false });
			};
			
			AnimateSteam( steam_holder.$( 'p12'), 1, 180, 80 );
			AnimateSteam( steam_holder.$( 'p11'), 2, 100, 80 );
			AnimateSteam( steam_holder.$( 'p10'), 3, 20, 80 );
			AnimateSteam( steam_holder.$( 'p9'), 4, -60, 80 );
			
			AnimateSteam( steam_holder.$( 'p5'), 5, -60, 20 );
			AnimateSteam( steam_holder.$( 'p6'), 6, 20, 20 );
			AnimateSteam( steam_holder.$( 'p7'), 7, 100, 20 );
			AnimateSteam( steam_holder.$( 'p8'), 8, 180, 20 );
			
			AnimateSteam( steam_holder.$( 'p4'), 9, 180, -40 );
			AnimateSteam( steam_holder.$( 'p3'), 10, 100, -40 );
			AnimateSteam( steam_holder.$( 'p2'), 11, 20, -40 );
			AnimateSteam( steam_holder.$( 'p1'), 12, -60, -40 );
			
			
			//ANIMATE_CARPET
			TweenLite.to( carpet_holder.$( 'carpet_12' ), 0.5, { alpha:0, ease:Quad.easeOut, delay:0.3, overwrite:false });
			TweenLite.to( carpet_holder.$( 'carpet_11' ), 0.5, { alpha:0, ease:Quad.easeOut, delay:0.5, overwrite:false });
			TweenLite.to( carpet_holder.$( 'carpet_10' ), 0.5, { alpha:0, ease:Quad.easeOut, delay:0.7, overwrite:false });
			TweenLite.to( carpet_holder.$( 'carpet_9' ), 0.5, { alpha:0, ease:Quad.easeOut, delay:0.9, overwrite:false });
			
			TweenLite.to( carpet_holder.$( 'carpet_5' ), 0.5, { alpha:0, ease:Quad.easeOut, delay:1.0, overwrite:false });
			TweenLite.to( carpet_holder.$( 'carpet_6' ), 0.5, { alpha:0, ease:Quad.easeOut, delay:1.2, overwrite:false });
			TweenLite.to( carpet_holder.$( 'carpet_7' ), 0.5, { alpha:0, ease:Quad.easeOut, delay:1.4, overwrite:false });
			TweenLite.to( carpet_holder.$( 'carpet_8' ), 0.5, { alpha:0, ease:Quad.easeOut, delay:1.6, overwrite:false });
			
			TweenLite.to( carpet_holder.$( 'carpet_4' ), 0.5, { alpha:0, ease:Quad.easeOut, delay:2.0, overwrite:false });
			TweenLite.to( carpet_holder.$( 'carpet_3' ), 0.5, { alpha:0, ease:Quad.easeOut, delay:2.2, overwrite:false });
			TweenLite.to( carpet_holder.$( 'carpet_2' ), 0.5, { alpha:0, ease:Quad.easeOut, delay:2.4, overwrite:false });
			TweenLite.to( carpet_holder.$( 'carpet_1' ), 0.5, { alpha:0, ease:Quad.easeOut, delay:2.6, overwrite:false });
			
			//RESOLVE_AD
			TweenLite.delayedCall( 3.0, ResolveA );
		};
	};
	
	function StartChecker()
	{
		seconds = 4; //mutiply by idle checker interval rate
		idleTime = 0;
		idleChecker = setInterval(idleCheck, 1000);
	};
	
	/*------------------------------------------------------------
	--------------------------------------------------------------
	ANIMATION
	--------------------------------------------------------------
	------------------------------------------------------------*/
	function FrameOne()
	{
		//REPLAY_SETTINGS
		cta.hide();
		cta_hit.hide();
		gleam.hide();
		replay.hide();
		replay_hit.hide();
		ResetCarpet();
		Looper = 1;
		
		//INITIAL_SETTINGS
		stage.play(1);
		HideAll();
		for( i=0; i<3; i++ ){ showObj(elements[i]); };
		TweenLite.to( bgWH, 0, { alpha:1, overwrite:false });
		
		//ANIMATION
		TweenLite.from( f1a, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:0.2, overwrite:false });
		TweenLite.from( f1b, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:0.4, overwrite:false });
		TweenLite.from( f1c, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:0.6, overwrite:false });
		
		//DAISY_CHAIN
		TweenLite.delayedCall( 2, FrameTwo );
	};
	
	function FrameTwo()
	{
		//INITIAL_SETTINGS
		stage.play(1000);
		for( i=3; i<7; i++ ){ showObj(elements[i]); };
		TweenLite.to( f2_steemer, 0, { alpha:1, left:steemerX, top:steemerY, overwrite:false });
		
		//EXIT_ANIMATION
		TweenLite.to( bgWH, 0.5, { alpha:0, ease:Quad.easeInOut, delay:0.0, overwrite:false });
		TweenLite.to( f1a, 0.5, { alpha:0, x:"10", ease:Quad.easeInOut, delay:0.1, overwrite:false });
		TweenLite.to( f1b, 0.5, { alpha:0, x:"10", ease:Quad.easeInOut, delay:0.2, overwrite:false });
		TweenLite.to( f1c, 0.5, { alpha:0, x:"10", ease:Quad.easeInOut, delay:0.3, overwrite:false });
		
		//ANIMATION
		TweenLite.from( f2_steemer, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:0.3, overwrite:false });
		TweenLite.from( f2_roll, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:0.5, overwrite:false });
		TweenLite.from( f2a, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:1.0, overwrite:false });
		TweenLite.from( f2b, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:1.1, overwrite:false });
		
		//DELAYED_CALL_TO_ALLOW_CLEAN
		TweenLite.delayedCall( 1.5, allowJS );
		TweenLite.delayedCall( 1.5, StartChecker ); //CHECKS_IDLETIME
	};
	
	function ResolveA()
	{
		TweenMax.killAll();
		//EXIT_ANIMATION
		
		
		//ANIMATION		
		for( i=0; i<12; i++)
		{
			var puff = steam_holder.$( 'p'+(i+1) );
			
			if( i<=3 )
			{
				TweenLite.to( puff, 0, { alpha:1, scaleX:1, scaleY:1, left:-100+(i*100), top:-100, overwrite:false });
			}else 
			if( i>3 && i<=6 )
			{
				TweenLite.to( puff, 0, { alpha:1, scaleX:1, scaleY:1, left:-100+((i-3)*100), top:50, overwrite:false });
			}else 
			if( i>6 && i<=9 )
			{
				TweenLite.to( puff, 0, { alpha:1, scaleX:1, scaleY:1, left:-100+((i-5)*100), top:150, overwrite:false });
			}else 
			if( i>9 && i<=12 )
			{
				TweenLite.to( puff, 0, { alpha:1, scaleX:1, scaleY:1, left:-100+((i-9)*100), top:200, overwrite:false });
			};
			
			TweenLite.from( puff, 1.5, { alpha:0, scaleX:0.5, scaleY:0.5, left:-100+(i*100), top:300, ease:Quad.easeOut, overwrite:false });
			TweenLite.to( puff, 1.5, { alpha:0, ease:Quad.easeOut, delay:1, overwrite:false });
		};
		
		//DAISY_CHAIN
		TweenLite.delayedCall( 0.5, ResolveB );
	};
	
	function ResolveB()
	{
		//INITIAL_SETTINGS
		for( i=7; i<12; i++ ){ showObj(elements[i]); };
		TweenLite.delayedCall( 1, function(){ stage.play(1750); });
		TweenLite.to( cta, 0, { alpha:1, overwrite:false });
		cta.show();
		cta_hit.show();
		showObj( shine );
		gleam.show();
		TweenLite.to( gleam, 0, { left:182, alpha:1, overwrite:false });
		TweenLite.from( gleam, 1, { left:42, ease:Quad.easeInOut, delay:2, overwrite:false });
		TweenLite.from( gleam, 0.5, { alpha:0, delay:2, overwrite:false });
		TweenLite.to( gleam, 0.5, { alpha:0, delay:2.5, onComplete:function(){ gleam.hide(); }, overwrite:false });
		
		//SHINE
		TweenLite.from( shine, 2.0, { rotation:-360, ease:Quad.easeInOut, delay:1.4, overwrite:false });
		TweenLite.from( shine, 0.5, { alpha:0, scaleX:0.1, scaleY:0.1, ease:Quad.easeInOut, delay:1.4, overwrite:false });
		TweenLite.to( shine, 0.5, { alpha:0, scaleX:0.1, scaleY:0.1, ease:Quad.easeInOut, delay:1.9, overwrite:false });
		
		//ANIMATION
		TweenLite.from( cover_white, 1, { alpha:0, ease:Quad.easeInOut, delay:0.0, overwrite:false });
		TweenLite.from( f5a, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:0.2, overwrite:false });
		TweenLite.from( f5b, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:0.4, overwrite:false });
		TweenLite.from( f5c, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:0.6, overwrite:false });
		TweenLite.from( f5d, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:0.8, overwrite:false });
		TweenLite.from( cta, 0.5, { alpha:0, y:"20", ease:Quad.easeInOut, delay:1, overwrite:false, onComplete:EnableCTA });
		
		//DAISY_CHAIN
		TweenLite.delayedCall( 3.0, ResolveC );
	};
	
	function ResolveC()
	{
		//INITIAL_SETTINGS
		for( i=12; i<16; i++ ){ showObj(elements[i]); };
		TweenLite.to( replay, 0, { alpha:1, overwrite:false });
		replay.show();
		replay_hit.show();
		
		showObj( shine );
		gleam.show();
		TweenLite.to( gleam, 0, { left:182, alpha:1, overwrite:false });
		TweenLite.from( gleam, 1, { left:42, ease:Quad.easeInOut, delay:2, overwrite:false });
		TweenLite.from( gleam, 0.5, { alpha:0, delay:2, overwrite:false });
		TweenLite.to( gleam, 0.5, { alpha:0, delay:2.5, onComplete:function(){ gleam.hide(); }, overwrite:false });
		
		//SHINE
		TweenLite.from( shine, 2.0, { rotation:-360, ease:Quad.easeInOut, delay:1.4, overwrite:false });
		TweenLite.from( shine, 0.5, { alpha:0, scaleX:0.1, scaleY:0.1, ease:Quad.easeInOut, delay:1.4, overwrite:false });
		TweenLite.to( shine, 0.5, { alpha:0, scaleX:0.1, scaleY:0.1, ease:Quad.easeInOut, delay:1.9, overwrite:false });
		
		//EXIT_ANIMATION
		TweenLite.to( f5a, 0.5, { alpha:0, x:"10", ease:Quad.easeInOut, delay:0.2, overwrite:false });
		TweenLite.to( f5b, 0.5, { alpha:0, x:"10", ease:Quad.easeInOut, delay:0.4, overwrite:false });
		TweenLite.to( f5c, 0.5, { alpha:0, x:"10", ease:Quad.easeInOut, delay:0.6, overwrite:false });
		TweenLite.to( f5d, 0.5, { alpha:0, x:"10", ease:Quad.easeInOut, delay:0.8, overwrite:false });
		
		//ANIMATION
		TweenLite.from( f6a, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:0.4, overwrite:false });
		TweenLite.from( f6b, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:0.6, overwrite:false });
		TweenLite.from( f6c, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:0.8, overwrite:false });
		TweenLite.from( f6d, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:1.0, overwrite:false });
		TweenLite.from( replay, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:1.0, overwrite:false, onComplete:EnableReplay });
		
		TweenLite.delayedCall( 6.0, LoopA );
	};
	
	function LoopA()
	{
		//INITIAL_SETTINGS
		for( i=7; i<12; i++ ){ showObj(elements[i]); };
		
		showObj( shine );
		gleam.show();
		TweenLite.to( gleam, 0, { left:182, alpha:1, overwrite:false });
		TweenLite.from( gleam, 1, { left:42, ease:Quad.easeInOut, delay:2, overwrite:false });
		TweenLite.from( gleam, 0.5, { alpha:0, delay:2, overwrite:false });
		TweenLite.to( gleam, 0.5, { alpha:0, delay:2.5, onComplete:function(){ gleam.hide(); }, overwrite:false });
		
		//SHINE
		TweenLite.from( shine, 2.0, { rotation:-360, ease:Quad.easeInOut, delay:1.4, overwrite:false });
		TweenLite.from( shine, 0.5, { alpha:0, scaleX:0.1, scaleY:0.1, ease:Quad.easeInOut, delay:1.4, overwrite:false });
		TweenLite.to( shine, 0.5, { alpha:0, scaleX:0.1, scaleY:0.1, ease:Quad.easeInOut, delay:1.9, overwrite:false });
		
		//EXIT_ANIMATION
		TweenLite.to( f6a, 0.5, { alpha:0, x:"10", ease:Quad.easeInOut, delay:0.2, overwrite:false });
		TweenLite.to( f6b, 0.5, { alpha:0, x:"10", ease:Quad.easeInOut, delay:0.4, overwrite:false });
		TweenLite.to( f6c, 0.5, { alpha:0, x:"10", ease:Quad.easeInOut, delay:0.6, overwrite:false });
		TweenLite.to( f6d, 0.5, { alpha:0, x:"10", ease:Quad.easeInOut, delay:0.8, overwrite:false });
		
		//ANIMATION
		TweenLite.from( f5a, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:0.4, overwrite:false });
		TweenLite.from( f5b, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:0.6, overwrite:false });
		TweenLite.from( f5c, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:0.8, overwrite:false });
		TweenLite.from( f5d, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:1.0, overwrite:false });
		
		//DAISY_CHAIN
		TweenLite.delayedCall( 3.0, LoopB );
	};
	
	function LoopB()
	{
		Looper += 1;
		
		//INITIAL_SETTINGS
		for( i=12; i<16; i++ ){ showObj(elements[i]); };
		
		showObj( shine );
		gleam.show();
		TweenLite.to( gleam, 0, { left:182, alpha:1, overwrite:false });
		TweenLite.from( gleam, 1, { left:42, ease:Quad.easeInOut, delay:2, overwrite:false });
		TweenLite.from( gleam, 0.5, { alpha:0, delay:2, overwrite:false });
		TweenLite.to( gleam, 0.5, { alpha:0, delay:2.5, onComplete:function(){ gleam.hide(); }, overwrite:false });
		
		//SHINE
		TweenLite.from( shine, 2.0, { rotation:-360, ease:Quad.easeInOut, delay:1.4, overwrite:false });
		TweenLite.from( shine, 0.5, { alpha:0, scaleX:0.1, scaleY:0.1, ease:Quad.easeInOut, delay:1.4, overwrite:false });
		TweenLite.to( shine, 0.5, { alpha:0, scaleX:0.1, scaleY:0.1, ease:Quad.easeInOut, delay:1.9, overwrite:false });
		
		//EXIT_ANIMATION
		TweenLite.to( f5a, 0.5, { alpha:0, x:"10", ease:Quad.easeInOut, delay:0.2, overwrite:false });
		TweenLite.to( f5b, 0.5, { alpha:0, x:"10", ease:Quad.easeInOut, delay:0.4, overwrite:false });
		TweenLite.to( f5c, 0.5, { alpha:0, x:"10", ease:Quad.easeInOut, delay:0.6, overwrite:false });
		TweenLite.to( f5d, 0.5, { alpha:0, x:"10", ease:Quad.easeInOut, delay:0.8, overwrite:false });
		
		//ANIMATION
		TweenLite.from( f6a, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:0.4, overwrite:false });
		TweenLite.from( f6b, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:0.6, overwrite:false });
		TweenLite.from( f6c, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:0.8, overwrite:false });
		TweenLite.from( f6d, 0.5, { alpha:0, x:"-10", ease:Quad.easeInOut, delay:1.0, overwrite:false });
		
		//DAISY_CHAIN
		if( Looper !== 3 )
		{
			TweenLite.delayedCall( 3.0, LoopA );
		};
	};
	
	FrameOne();
	
	/*------------------------------------------------------------
	--------------------------------------------------------------
	JQUERY_MOUSE_CHECKER
	carpet_holder.$( 'carpet_'+i )
	--------------------------------------------------------------
	------------------------------------------------------------*/	
	function allowJS()
	{
	var steamscale 		= 0.5;
	var steamOffestX	= 90;
	var steamOffestY	= 15;
	var steamOpacity	= 0.25;
	
	$(document).mousemove(function(e)
	{
		if( e.pageX < 300 && e.pageX > 0 && e.pageY > 0 && e.pageY < 250 )
		{
			//CLEAR FRAME 2 ELEMENTS
			if( f2_clear == false )
			{
				clearInterval(idleChecker);
				f2_clear = true;
				TweenLite.to( f2_roll, 0.5, { alpha:0, x:"10", ease:Quad.easeInOut, delay:0.0, overwrite:false });
				TweenLite.to( f2a, 0.5, { alpha:0, x:"10", ease:Quad.easeInOut, delay:0.2, overwrite:false });
			};
			
			//MOVE_STEAMER_TO_MOUSE_POSITION
			f2_steemer.offset({
				left: e.pageX - 70,
				top: e.pageY - 265
			});
			    
		    for( i=0; i<12; i++)
		    {
    	    		var puff = steam_holder.$( 'p'+(i+1) )
    	    		puff.offset({ left: e.pageX - steamOffestX, top: e.pageY - steamOffestY });
		    };
		    
		    
	    	};
		
		//COL_01
		if( e.pageX > 0 && e.pageX <= 75 )
		{
			if( e.pageY > 0 && e.pageY <= 70 )
			{
				if( c01 == false )
				{
					TweenLite.to( steam_holder.$( 'p1' ), 0, { scaleX:steamscale, scaleY:steamscale, alpha:steamOpacity, overwrite:false });
					TweenLite.from( steam_holder.$( 'p1' ), 0.5, { scaleX:0, scaleY:0, alpha:0, ease:Quad.easeOut,  delay:0, overwrite:false });
					TweenLite.to( steam_holder.$( 'p1' ), 0.5, { alpha:0.0, ease:Quad.easeOut, delay:0.5, overwrite:false });
					TweenLite.to( carpet_holder.$( 'carpet_1' ), 0.5, { alpha:0, ease:Quad.easeOut, overwrite:false });
					c01 = true;
				};
			}
			else if( e.pageY > 70 && e.pageY <= 140 )
			{
				if( c02 == false )
				{
					TweenLite.to( steam_holder.$( 'p2' ), 0, { scaleX:steamscale, scaleY:steamscale, alpha:steamOpacity, overwrite:false });
					TweenLite.from( steam_holder.$( 'p2' ), 0.5, { scaleX:0, scaleY:0, alpha:0, ease:Quad.easeOut,  delay:0, overwrite:false });
					TweenLite.to( steam_holder.$( 'p2' ), 0.5, { alpha:0.0, ease:Quad.easeOut, delay:0.5, overwrite:false });
					TweenLite.to( carpet_holder.$( 'carpet_5' ), 0.5, { alpha:0, ease:Quad.easeOut, overwrite:false });
					c02 = true;
				};
			}
			else if( e.pageY > 140 && e.pageY <= 209 )
			{
				if( c03 == false )
				{
					TweenLite.to( steam_holder.$( 'p3' ), 0, { scaleX:steamscale, scaleY:steamscale, alpha:steamOpacity, overwrite:false });
					TweenLite.from( steam_holder.$( 'p3' ), 0.5, { scaleX:0, scaleY:0, alpha:0, ease:Quad.easeOut,  delay:0, overwrite:false });
					TweenLite.to( steam_holder.$( 'p3' ), 0.5, { alpha:0.0, ease:Quad.easeOut, delay:0.5, overwrite:false });
					TweenLite.to( carpet_holder.$( 'carpet_9' ), 0.5, { alpha:0, ease:Quad.easeOut, overwrite:false });
					c03 = true;
				};
			}	
		};
		
		//COL_02
		if( e.pageX > 75 && e.pageX <= 150 )
		{
			if( e.pageY > 0 && e.pageY <= 70 )
			{
				if( c04 == false )
				{
					TweenLite.to( steam_holder.$( 'p4' ), 0, { scaleX:steamscale, scaleY:steamscale, alpha:steamOpacity, overwrite:false });
					TweenLite.from( steam_holder.$( 'p4' ), 0.5, { scaleX:0, scaleY:0, alpha:0, ease:Quad.easeOut,  delay:0, overwrite:false });
					TweenLite.to( steam_holder.$( 'p4' ), 0.5, { alpha:0.0, ease:Quad.easeOut, delay:0.5, overwrite:false });
					TweenLite.to( carpet_holder.$( 'carpet_2' ), 0.5, { alpha:0, ease:Quad.easeOut, overwrite:false });
					c04 = true;
				};
			}
			else if( e.pageY > 70 && e.pageY <= 140 )
			{
				if( c05 == false )
				{
					TweenLite.to( steam_holder.$( 'p5' ), 0, { scaleX:steamscale, scaleY:steamscale, alpha:steamOpacity, overwrite:false });
					TweenLite.from( steam_holder.$( 'p5' ), 0.5, { scaleX:0, scaleY:0, alpha:0, ease:Quad.easeOut,  delay:0, overwrite:false });
					TweenLite.to( steam_holder.$( 'p5' ), 0.5, { alpha:0.0, ease:Quad.easeOut, delay:0.5, overwrite:false });
					TweenLite.to( carpet_holder.$( 'carpet_6' ), 0.5, { alpha:0, ease:Quad.easeOut, overwrite:false });
					c05 = true;
				};
			}
			else if( e.pageY > 140 && e.pageY <= 209 )
			{
				if( c06 == false )
				{
					TweenLite.to( steam_holder.$( 'p6' ), 0, { scaleX:steamscale, scaleY:steamscale, alpha:steamOpacity, overwrite:false });
					TweenLite.from( steam_holder.$( 'p6' ), 0.5, { scaleX:0, scaleY:0, alpha:0, ease:Quad.easeOut,  delay:0, overwrite:false });
					TweenLite.to( steam_holder.$( 'p6' ), 0.5, { alpha:0.0, ease:Quad.easeOut, delay:0.5, overwrite:false });
					TweenLite.to( carpet_holder.$( 'carpet_10' ), 0.5, { alpha:0, ease:Quad.easeOut, overwrite:false });
					c06 = true;
				};
			}
		};
		
		//COL_03
		if( e.pageX > 150 && e.pageX <= 225 )
		{
			if( e.pageY > 0 && e.pageY <= 70 )
			{
				if( c07 == false )
				{
					TweenLite.to( steam_holder.$( 'p7' ), 0, { scaleX:steamscale, scaleY:steamscale, alpha:steamOpacity, overwrite:false });
					TweenLite.from( steam_holder.$( 'p7' ), 0.5, { scaleX:0, scaleY:0, alpha:0, ease:Quad.easeOut,  delay:0, overwrite:false });
					TweenLite.to( steam_holder.$( 'p7' ), 0.5, { alpha:0.0, ease:Quad.easeOut, delay:0.5, overwrite:false });
					TweenLite.to( carpet_holder.$( 'carpet_3' ), 0.5, { alpha:0, ease:Quad.easeOut, overwrite:false });
					c07 = true;
				};
			}
			else if( e.pageY > 70 && e.pageY <= 140 )
			{
				if( c08 == false )
				{
					TweenLite.to( steam_holder.$( 'p8' ), 0, { scaleX:steamscale, scaleY:steamscale, alpha:steamOpacity, overwrite:false });
					TweenLite.from( steam_holder.$( 'p8' ), 0.5, { scaleX:0, scaleY:0, alpha:0, ease:Quad.easeOut,  delay:0, overwrite:false });
					TweenLite.to( steam_holder.$( 'p8' ), 0.5, { alpha:0.0, ease:Quad.easeOut, delay:0.5, overwrite:false });
					TweenLite.to( carpet_holder.$( 'carpet_7' ), 0.5, { alpha:0, ease:Quad.easeOut, overwrite:false });
					c08 = true;
				};
			}
			else if( e.pageY > 140 && e.pageY <= 209 )
			{
				if( c09 == false )
				{
					TweenLite.to( steam_holder.$( 'p9' ), 0, { scaleX:steamscale, scaleY:steamscale, alpha:steamOpacity, overwrite:false });
					TweenLite.from( steam_holder.$( 'p9' ), 0.5, { scaleX:0, scaleY:0, alpha:0, ease:Quad.easeOut,  delay:0, overwrite:false });
					TweenLite.to( steam_holder.$( 'p9' ), 0.5, { alpha:0.0, ease:Quad.easeOut, delay:0.5, overwrite:false });
					TweenLite.to( carpet_holder.$( 'carpet_11' ), 0.5, { alpha:0, ease:Quad.easeOut, overwrite:false });
					c09 = true;
				};
			}
		};
		
		//COL_04
		if( e.pageX > 225 && e.pageX <= 300 )
		{
			if( e.pageY > 0 && e.pageY <= 70 )
			{
				if( c10 == false )
				{
					TweenLite.to( steam_holder.$( 'p10' ), 0, { scaleX:steamscale, scaleY:steamscale, alpha:steamOpacity, overwrite:false });
					TweenLite.from( steam_holder.$( 'p10' ), 0.5, { scaleX:0, scaleY:0, alpha:0, ease:Quad.easeOut,  delay:0, overwrite:false });
					TweenLite.to( steam_holder.$( 'p10' ), 0.5, { alpha:0.0, ease:Quad.easeOut, delay:0.5, overwrite:false });
					TweenLite.to( carpet_holder.$( 'carpet_4' ), 0.5, { alpha:0, ease:Quad.easeOut, overwrite:false });
					c10 = true;
				};
			}
			else if( e.pageY > 70 && e.pageY <= 140 )
			{
				if( c11 == false )
				{
					TweenLite.to( steam_holder.$( 'p11' ), 0, { scaleX:steamscale, scaleY:steamscale, alpha:steamOpacity, overwrite:false });
					TweenLite.from( steam_holder.$( 'p11' ), 0.5, { scaleX:0, scaleY:0, alpha:0, ease:Quad.easeOut,  delay:0, overwrite:false });
					TweenLite.to( steam_holder.$( 'p11' ), 0.5, { alpha:0.0, ease:Quad.easeOut, delay:0.5, overwrite:false });
					TweenLite.to( carpet_holder.$( 'carpet_8' ), 0.5, { alpha:0, ease:Quad.easeOut, overwrite:false });
					c11 = true;
				};
			}
			else if( e.pageY > 140 && e.pageY <= 209 )
			{
				if( c12 == false )
				{
					TweenLite.to( steam_holder.$( 'p12' ), 0, { scaleX:steamscale, scaleY:steamscale, alpha:steamOpacity, overwrite:false });
					TweenLite.from( steam_holder.$( 'p12' ), 0.5, { scaleX:0, scaleY:0, alpha:0, ease:Quad.easeOut,  delay:0, overwrite:false });
					TweenLite.to( steam_holder.$( 'p12' ), 0.5, { alpha:0.0, ease:Quad.easeOut, delay:0.5, overwrite:false });
					TweenLite.to( carpet_holder.$( 'carpet_12' ), 0.5, { alpha:0, ease:Quad.easeOut, overwrite:false });
					c12 = true;
				};
			}
		};
		
		//checker
		if( c01 == true
			&& c02 == true
			&& c03 == true
			&& c04 == true
			&& c05 == true
			&& c06 == true
			&& c07 == true
			&& c08 == true
			&& c09 == true
			&& c10 == true
			&& c11 == true
			&& c12 == true
		)
		{
			TweenLite.to( f2_steemer, 0.5, { alpha:0, top:-317, ease:Quad.easeInOut, delay:0.0, overwrite:false });
			TweenLite.delayedCall( 1.5, ResolveA );
			console.log("clear");
			$(document).off("mousemove");
		};
	});
	};
});