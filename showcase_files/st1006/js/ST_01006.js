var comp;

AdobeEdge.bootstrapCallback(function (compId)
{
	/*************************************************************
	INITIAL_VARS
	*************************************************************/
	var theAd		= AdobeEdge.getComposition('ST');
	var stage		= theAd.getStage();
	
	//OBJECT_ELEMENTS
	var cover			= theAd.getStage().$( 'COVER' );
	var cta				= theAd.getStage().$( 'CTA' );
	var cta_hit			= theAd.getStage().$( 'CTA_HIT' );
	var overall			= theAd.getStage().$( 'OVERALL' );
	
	//FRAME_01_ASSETS
	var F1_PHOTO			= theAd.getStage().$( 'F1_Photo' );
	var F1_BG 			= theAd.getStage().$( 'F1_BG' );
	//FRAME_02/03_ASSETS
	var T_L1 			= theAd.getStage().$( 'T_LIGHTUP' );
	var T_L2 			= theAd.getStage().$( 'T_THEIRWORLD' );
	var PL	 			= theAd.getStage().$( 'PIXY_L' );
	var PR	 			= theAd.getStage().$( 'PIXY_R' );
	var F2_T1	 		= theAd.getStage().$( 'F2_T1' );
	var F2_T2	 		= theAd.getStage().$( 'F2_T2' );
	var F2_BO			= theAd.getStage().$( 'F2_BLUE_OVERLAY' );
	var F2_OV			= theAd.getStage().$( 'F2_Overlay' );
	var F2_BG			= theAd.getStage().$( 'F2_BG' );
	var F3_OVERLAY			= theAd.getStage().$( 'F3_OVERLAY' );
	
	//ARRAY_OF_ELEMENTS
	var allObjects = [
		cta,
		T_L1,
		T_L2,
		PL,
		PR,
		F2_T1,
		F2_T2,
		F2_BO,
		F2_OV,
		F2_BG,
		F3_OVERLAY,
	];
	
	/*------------------------------------------------------------
	PARTICLE_FX
	------------------------------------------------------------*/
	//PARTICLE_VARS
	var sizes				= ["small"];
	var endY				= 250;
	//EMITTER
	var emit				= stage.$('Emitter');
	var emitter_x				= emit.offset().left;
	var emitter_y				= emit.offset().top;
	//PARTICLE_STATS
	var createParticles			= true;
	var count				= 0;
	var countTotal				= 12;
	
	/*------------------------------------------------------------
	PARTICLE_CODE
	------------------------------------------------------------*/
	function updater()
	{
		emitter_x = emit.offset().left + (Math.random() * 3);;
		emitter_y = emit.offset().top + (Math.random() * 3);;
		
		
		if( count !== countTotal )
		{
			for (var i = 0; i <countTotal; i++)
			{
				count++
				var sizeIndex = randomNumber(0,2); //get random number between 0 and 2
		  		var size = sizes[sizeIndex]; //get random size
		  	  	var speed = (3 - sizeIndex) //larger faster
		  	  	var bubble = $('<div class="bubble ' + size + 'Particle"/>').appendTo(Stage); //create a bubble
		  	  	var ranNum =  (Math.random() * 3);
				
				function remove( obj )
				{
					obj.remove();
				};
				
				TweenLite.to(bubble, 0, { alpha:0, y:emitter_y, x:emitter_x, rotation:(Math.random() * 360), overwrite:false }); // place it
				TweenLite.to(bubble, 0.1, { alpha:1, delay:i*0.01, overwrite:false });
				TweenLite.to(bubble, 3, { alpha:0, y:randomNumber(emitter_y-75, emitter_y+75), x:randomNumber(emitter_x-75, emitter_x+75), ease:Quad.easeOut, onComplete:remove, onCompleteParams:[ bubble ], delay:i*0.01, overwrite:false })
			};
		};
		
		if( count == countTotal )
		{
			count = 0;
		};
	};
	
	function randomNumber(min, max)
	{
		return Math.floor(Math.random() * (1 + max - min) + min);
	}
	
	function cpixie()
	{
		clearInterval( pixiedust );
	};
	
	/*------------------------------------------------------------
	HIDE_ELEMENTS
	------------------------------------------------------------*/
	//RANGE_RANDOMIZER_FUNCTION
	function ranRange(min, max)
	{
	    return Math.random() * (max - min) + min;
	};
	
	function resetObj( obj )
	{
		TweenLite.to( obj, 0, { alpha:0, rotation:0, x:0, y:0, scaleX:1, scaleY:1, overwrite:false });	
		//!!! ONLY USE THE NEXT LINE IF YOU WANT TO TWEEN THE Z PROPERTY !!!
		TweenLite.set( obj, {css:{transformPerspective:600, transformStyle:"preserve-3d"}});
	};
	
	function showObj( obj )
	{
		TweenLite.to( obj, 0, { alpha:1, scaleX:1, scaleY:1, overwrite:false });
	};
	
	//HIDE_THE_OBJECTS
	function HideAll()
	{
		for( i=0; i<allObjects.length; i++ )
		{
			resetObj(allObjects[i])
		};
	};
	
	
	/*------------------------------------------------------------
	CTA_ACTIONS
	------------------------------------------------------------*/
	overall.bind('click',function()
	{
		console.trace( 'OVERALL_CLICKED ' );
		window.open(clickTag, "_blank");
	});
	
	function ctaClicked()
	{
		console.trace( 'CTA_CLICKED ' );
		window.open(clickTag, "_blank");
	};
	
	function ctaOver()
	{
		TweenLite.to( cta, 0.1, { scaleX:1.1, scaleY:1.1, ease:Quad.easeOut, overwrite:false });
	};
	
	function ctaOut()
	{
		TweenLite.to( cta, 0.1, { scaleX:1, scaleY:1, ease:Quad.easeOut, overwrite:false });
	};
	
	cta_hit.bind('click', ctaClicked );
	
	function AllowCTA()
	{
		cta_hit.bind('mouseover', ctaOver);
		cta_hit.bind('mouseout', ctaOut);
	};
	
	/*************************************************************
	ANIMATION
	*************************************************************/	
	var LoopNum = 0;
	
	function Frame01()
	{
		//INIT_SETTINGS
		LoopNum+=1;
		console.log("Current Loop is "+LoopNum);
		HideAll();
		
		resetObj( F1_PHOTO );
		showObj( F1_PHOTO );
		showObj( F1_BG );
		
		//ANIMATION
		TweenLite.to( cover, 1, { autoAlpha:0, delay:1, overwrite:false });
		TweenLite.from( F1_PHOTO, 2, { alpha:0, rotation:"40", x:"40", y:"-80", scaleX:2, scaleY:2, ease:Quad.easeInOut, overwrite:false });
		
		//DAISY_CHAIN
		TweenLite.delayedCall( 2.25, Frame02 )
	};
	
	function Frame02()
	{
		//INIT_SETTINGS
		showObj( PL );
		showObj( PR );
		showObj( T_L1 );
		showObj( T_L2 );
		showObj( F2_T1 );
		showObj( F2_T1 );
		showObj( F2_T2 );
		showObj( F2_BO );
		showObj( F2_OV );
		showObj( F2_BG );
		showObj( cta );
		showObj( F3_OVERLAY );
		
		//---------- PIXY ANIM ----------
		TweenLite.delayedCall( 2, function()
		{
			var pixiedust = setInterval( updater, 25 );
			TweenLite.delayedCall( 1.25, cpixie )
			function cpixie()
			{
				clearInterval( pixiedust );
			};
			stage.play( 1 );
		});
		
		TweenLite.from( PL, 1, { css:{clip:"rect(0px,0px,250px,0px)"}, ease:Quad.easeIn, delay:1.8, overwrite:false });
		TweenLite.from( PR, 1, { css:{clip:"rect(0px,150px,250px,0px)"}, ease:Quad.easeOut, delay:2.3, overwrite:false });
		TweenLite.from( T_L1, 0.5, { alpha:0, ease:Quad.easeInOut, delay:2.3, overwrite:false });
		TweenLite.from( T_L2, 0.5, { alpha:0, ease:Quad.easeInOut, delay:2.8, overwrite:false });
		//TweenLite.to( T_L1, 2, { x:"-31", ease:Quad.easeInOut, delay:3, overwrite:false });
		//TweenLite.to( T_L2, 2, { x:"37", ease:Quad.easeInOut, delay:3, overwrite:false });
		
		//ANIMATION
		TweenLite.to( F1_PHOTO, 2, { alpha:0, rotation:"-10", x:"-5", y:"20", scaleX:0.70, scaleY:0.70, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( F1_BG, 1, { alpha:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( F2_OV, 3, { alpha:0, ease:Quad.easeInOut, delay:1, overwrite:false });
		
		TweenLite.from( F2_T1, 1, { alpha:0, z:100, ease:Quad.easeInOut, delay:3.3, overwrite:false });
		TweenLite.from( F2_T2, 1, { alpha:0, z:100, ease:Quad.easeInOut, delay:3.5, overwrite:false });
		TweenLite.from( cta, 1, { alpha:0, ease:Quad.easeInOut, delay:3.7, onComplete:function(){ AllowCTA(); }, overwrite:false });
		TweenLite.from( F3_OVERLAY, 3, { alpha:0, ease:Quad.easeInOut, delay:1, overwrite:false });
		
		//DAISYCHAIN
		if( LoopNum<3 )
		{
			showObj( cover );
			TweenLite.from( cover, 1, { autoAlpha:0, delay:11, ease:Quad.easeIn, overwrite:false });
			TweenLite.delayedCall( 12, Frame01 )
			console.log("Will loop animation!")
		}else
		{
			console.log("Will not loop animation.")
		}
	};
	
	
	
	Frame01();
	
	/*------------------------------------------------------------
	------------------------------------------------------------*/
});