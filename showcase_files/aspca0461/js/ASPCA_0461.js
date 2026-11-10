AdobeEdge.bootstrapCallback(function (compId)
{
	/*------------------------------------------------------------
	INITIAL_VARS
	
	EDGE_API_GUIDE:
	var comp;
	comp = theAd.getStage();
	AdobeEdge.getComposition(compId).getStage().getSymbol("Parent").getSymbol("Child").stop();
	------------------------------------------------------------*/
	//alert("hello");
	var theAd		= AdobeEdge.getComposition('aspca');
	var stage		= theAd.getStage();
	
	//CODE_ELEMENTS
	var variation1	= 0;
	var variation2	= 0;
	var loopNum		= 2; //THE_AMOUNT_OF_TIMES_TO_LOOP_THE_AD
	
	//OBJECT_ELEMENTS
	var dtile		= stage.getSymbol( 'dogtile' );
	var cover		= theAd.getStage().$( 'cover' );
	var ctahit		= theAd.getStage().$( 'CTA' );
	var ctabtn		= theAd.getStage().$( 'GRAY_BAR_CTA' );
	var aspcalogo		= theAd.getStage().$( 'ASPCA_LOGO' );
	var overall		= theAd.getStage().$( 'OVERALL' )
	var txt1a		= theAd.getStage().$( 'txt01a' );
	var txt1b		= theAd.getStage().$( 'txt01b' );
	var txt1c		= theAd.getStage().$( 'txt01c' );
	var txt1d		= theAd.getStage().$( 'txt01d' );
	var txt2a		= theAd.getStage().$( 'txt02a' );
	var txt2b		= theAd.getStage().$( 'txt02b' );
	var txt3a		= theAd.getStage().$( 'txt03a' );
	var txt3b		= theAd.getStage().$( 'txt03b' );
	var txt3c		= theAd.getStage().$( 'txt03c' );
	var txt3d		= theAd.getStage().$( 'txt03d' );
	var txt3e		= theAd.getStage().$( 'txt03e' );
	var txt3f		= theAd.getStage().$( 'txt03f' );
	var EFDog		= theAd.getStage().$( 'Endframe_Dog' );
	var bg			= theAd.getStage().$( 'bg' );
	
	//NEED THESE TO CORRECT ROTATION FX
	TweenLite.set( dtile, {css:{transformPerspective:600, transformStyle:"preserve-3d"}});
	TweenLite.set( ctahit, {css:{transformPerspective:600, transformStyle:"preserve-3d"}});
	TweenLite.set( ctabtn, {css:{transformPerspective:600, transformStyle:"preserve-3d"}});
	TweenLite.set( overall, {css:{transformPerspective:600, transformStyle:"preserve-3d"}});
	TweenLite.set( txt1a, {css:{transformPerspective:600, transformStyle:"preserve-3d"}});
	TweenLite.set( txt1b, {css:{transformPerspective:600, transformStyle:"preserve-3d"}});
	TweenLite.set( txt1c, {css:{transformPerspective:600, transformStyle:"preserve-3d"}});
	TweenLite.set( txt1d, {css:{transformPerspective:600, transformStyle:"preserve-3d"}});
	TweenLite.set( txt2a, {css:{transformPerspective:600, transformStyle:"preserve-3d"}});
	TweenLite.set( txt2b, {css:{transformPerspective:600, transformStyle:"preserve-3d"}});
	TweenLite.set( txt3a, {css:{transformPerspective:600, transformStyle:"preserve-3d"}});
	TweenLite.set( txt3b, {css:{transformPerspective:600, transformStyle:"preserve-3d"}});
	TweenLite.set( txt3c, {css:{transformPerspective:600, transformStyle:"preserve-3d"}});
	TweenLite.set( txt3d, {css:{transformPerspective:600, transformStyle:"preserve-3d"}});
	TweenLite.set( txt3e, {css:{transformPerspective:600, transformStyle:"preserve-3d"}});
	TweenLite.set( txt3f, {css:{transformPerspective:600, transformStyle:"preserve-3d"}});
	TweenLite.set( EFDog, {css:{transformPerspective:600, transformStyle:"preserve-3d"}});
	
	//INITIAL_PROPS
	TweenLite.to( aspcalogo, 0, { scaleX:0.5, scaleY:0.5, overwrite:false });
	TweenLite.to(bg, 0, { scaleX:3, scaleY:3, z:-600, overwrite:false});
	TweenLite.to( ctabtn, 0, { scaleX:0.5, scaleY:0.5, overwrite:false });
	
	//HIDE_THE_DOG!
	EFDog.hide();
	
	/*------------------------------------------------------------
	CTA_ACTIONS
	------------------------------------------------------------*/
	ctahit.bind('click',function()
	{
		console.trace( 'CTA_CLICKED ' );
		window.open(clickTag, "_blank");
	});
	
	ctahit.bind('mouseover',function()
	{
		TweenLite.to( ctabtn, 0.25, { scaleX:0.55, scaleY:0.55, ease:Quad.easeOut, overwrite:false })
	});
	
	ctahit.bind('mouseout',function()
	{
		TweenLite.to( ctabtn, 0.25, { scaleX:0.5, scaleY:0.5, ease:Quad.easeOut, overwrite:false })
	});
	
	overall.bind('click',function()
	{
		console.trace( 'OVERALL_CLICKED ' );
		window.open(clickTag, "_blank");
	});
	
	/*------------------------------------------------------------
	TILING_CODE
	------------------------------------------------------------*/
	function ranNum( min, max )
	{
	    return( Math.floor( Math.random() * ( max - min + 1 )) + min );
	};
	
	function hideTiles()
	{
		for (var i = 0; i <= 80; i++)
		{
			dtile.$( 'dt'+i ).hide();
		}
	};
	
	function resetTiles()
	{
		for (var i = 0; i <= 80; i++)
		{
			var tilepiece = dtile.$( 'dt'+i );
			dtile.$( 'dt'+i ).show();
			
			if( i<=10 )
			{
				TweenLite.to( tilepiece, 0, { rotationX:0, rotationY:0, alpha:1, top:0, overwrite:false });
			}
			else if( i > 10 && i <= 20 )
			{
				TweenLite.to( tilepiece, 0, { rotationX:0, rotationY:0, alpha:1, top:31, overwrite:false });
			}
			else if( i > 20 && i <= 30 )
			{
				TweenLite.to( tilepiece, 0, { rotationX:0, rotationY:0, alpha:1, top:62, overwrite:false });
			}
			else if( i > 30 && i <= 40 )
			{
				TweenLite.to( tilepiece, 0, { rotationX:0, rotationY:0, alpha:1, top:93, overwrite:false });
			}
			else if( i > 40 && i <= 50 )
			{
				TweenLite.to( tilepiece, 0, { rotationX:0, rotationY:0, alpha:1, top:124, overwrite:false });
			}
			else if( i > 50 && i <= 60 )
			{
				TweenLite.to( tilepiece, 0, { rotationX:0, rotationY:0, alpha:1, top:155, overwrite:false });
			}
			else if( i > 60 && i <= 70 )
			{
				TweenLite.to( tilepiece, 0, { rotationX:0, rotationY:0, alpha:1, top:186, overwrite:false });
			}
			else if( i > 70 && i <= 80 )
			{
				TweenLite.to( tilepiece, 0, { rotationX:0, rotationY:0, alpha:1, top:217, overwrite:false });
			}
		};
	};
	
	function startTiles()
	{
		resetTiles();
		
		for (var i = 0; i <= 40; i++)
		{
			dtile.$( 'dt'+i ).show();
			var tilepiece = dtile.$( 'dt'+i )
			TweenLite.from( tilepiece, 0.5, { scaleX:1.1, scaleY:1.1, left:ranNum(0, 300), top:ranNum(0, 250), alpha:0, rotationX:720, rotationY:720,  ease:Quad.easeInOut, delay:0.5+i*0.05, overwrite:false})
			
			TweenLite.to( tilepiece, 0.5, { top:500, alpha:0, rotationX:360, rotationY:360, ease:Quad.easeInOut, delay:4.5+((ranNum(0,10)*0.05)), overwrite:false})
		}
		
		for (var i = 80; i > 40; i--)
		{
			dtile.$( 'dt'+i ).show();
			var tilepiece = dtile.$( 'dt'+i )
			TweenLite.from( tilepiece, 0.5, { scaleX:1.1, scaleY:1.1, left:ranNum(0, 300), top:ranNum(0, 250), alpha:0, rotationX:1440, rotationY:1440,  ease:Quad.easeInOut, delay:0.5-(i-79)*0.05, overwrite:false})
			
			TweenLite.to( tilepiece, 0.5, { top:500, alpha:0, rotationX:360, rotationY:360, ease:Quad.easeInOut, delay:4.5+((ranNum(0,10)*0.05)), overwrite:false})
		}
	};
	
	hideTiles();
	/*------------------------------------------------------------
	BACKGROUND_FUNCTIONS
	------------------------------------------------------------*/
	//HIDE_THE_STUFF
	function HideF01()
	{
		txt1a.hide();
		txt1b.hide();
		txt1c.hide();
		txt1d.hide();
	};
	
	function HideF02()
	{
		txt2a.hide();
		txt2b.hide();
	};
	
	function HideF03()
	{
		txt3a.hide();
		txt3b.hide();
		txt3c.hide();
		txt3d.hide();
		txt3e.hide();
		txt3f.hide();
	};
	
	//SHOW_THE_STUFF
	function ShowF01()
	{
		txt1a.show();
		txt1b.show();
		txt1c.show();
		txt1d.show();
	};
	
	function ShowF02()
	{
		txt2a.show();
		txt2b.show();
		
		//RESET_SETTINGS
		TweenLite.to( txt2a, 0, { z:0, rotationY:0, left:112, alpha:1, scaleX:1, scaleY:1, overwrite:false });
		TweenLite.to( txt2b, 0, { z:0, rotationY:0, left:30, alpha:1, scaleX:1, scaleY:1, overwrite:false });
	};
	
	function ShowF03()
	{
		txt3a.show();
		txt3b.show();
		txt3c.show();
		txt3d.show();
		txt3e.show();
		txt3f.show();
		
		//RESET_SETTINGS
		TweenLite.to( txt3a, 0, { z:0, rotationY:0, left:9, alpha:1, scaleX:1.0, scaleY:1.0, overwrite:false });
		TweenLite.to( txt3b, 0, { z:0, rotationY:0, left:9, alpha:1, scaleX:1.0, scaleY:1.0, overwrite:false });
		TweenLite.to( txt3c, 0, { z:0, rotationY:0, left:9, alpha:1, scaleX:1.0, scaleY:1.0, overwrite:false });
		TweenLite.to( txt3d, 0, { z:0, rotationY:0, left:9, alpha:1, scaleX:1.0, scaleY:1.0, overwrite:false });
		TweenLite.to( txt3e, 0, { z:0, rotationY:0, left:9, alpha:1, scaleX:1.0, scaleY:1.0, overwrite:false });
		TweenLite.to( txt3f, 0, { z:0, rotationY:0, left:9, alpha:1, scaleX:1.0, scaleY:1.0, overwrite:false });
	};
	
	//RUN_IT
	HideF02();
	HideF03();
	
	/*------------------------------------------------------------
	ANIMATION
	------------------------------------------------------------*/	
	function Frame01()
	{
		ShowF01();
		TweenLite.to( cover, 0.5, { alpha:0, ease:Quad.easeOut, overwrite:false });
		
		//ANIMATE_ELEMENTS
		TweenLite.from( txt1a, 1, { alpha:0, ease:Quad.easeOut, delay:0.5, overwrite:false });
		TweenLite.from( txt1b, 1, { z:200, rotationY:-45, left:125+10, alpha:0, scaleX:1.1, scaleY:1.1, ease:Quad.easeInOut, delay:2.0, overwrite:false });
		TweenLite.from( txt1c, 1, { z:200, rotationY:-45, left:7+10, alpha:0, scaleX:1.1, scaleY:1.1, ease:Quad.easeInOut, delay:2.2, overwrite:false });
		TweenLite.from( txt1d, 1, { z:200, rotationY:-45, left:72+10, alpha:0, scaleX:1.1, scaleY:1.1, ease:Quad.easeInOut, delay:2.4, overwrite:false });
		
		//DAISY_CHAIN
		TweenLite.delayedCall( 4, Frame02 );
		
	};
	
	function Frame02()
	{
		//ANIMATE_ELEMENTS
		startTiles();
		TweenLite.delayedCall( 3.5, HideF01 );
		TweenLite.delayedCall( 3.5, ShowF02 );
		
		//DAISY_CHAIN
		TweenLite.delayedCall( 4, Frame03 );
	};
	
	function Frame03()
	{
		//ANIMATE_ELEMENTS
		TweenLite.to( txt2a, 0.5, { z:200, rotationY:45, left:112-10, alpha:0, scaleX:1.1, scaleY:1.1, delay:2.0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( txt2b, 0.5, { z:200, rotationY:45, left:30-10, alpha:0, scaleX:1.1, scaleY:1.1, delay:2.2, ease:Quad.easeInOut, overwrite:false });
		
		//DAISY_CHAIN
		TweenLite.delayedCall( 3.25, Frame04 );
	};
	
	function Frame04()
	{
		//SHOW_HIDDEN_ELEMENTS
		ShowF03();
		EFDog.show();
		TweenLite.to( EFDog, 0, { alpha:1, left:0, overwrite:false });
		
		//ANIMATE_ELEMENTS
		TweenLite.from( txt3a, 0.5, { z:200, rotationY:-45, left:9+10, alpha:0, scaleX:1.1, scaleY:1.1, delay:0.0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.from( txt3b, 0.5, { z:200, rotationY:-45, left:9+10, alpha:0, scaleX:1.1, scaleY:1.1, delay:0.2, ease:Quad.easeInOut, overwrite:false });
		TweenLite.from( txt3c, 0.5, { z:200, rotationY:-45, left:9+10, alpha:0, scaleX:1.1, scaleY:1.1, delay:0.4, ease:Quad.easeInOut, overwrite:false });
		TweenLite.from( txt3d, 0.5, { z:200, rotationY:-45, left:9+10, alpha:0, scaleX:1.1, scaleY:1.1, delay:0.6, ease:Quad.easeInOut, overwrite:false });
		TweenLite.from( txt3e, 0.5, { z:200, rotationY:-45, left:8+10, alpha:0, scaleX:1.1, scaleY:1.1, delay:0.8, ease:Quad.easeInOut, overwrite:false });
		TweenLite.from( txt3f, 0.5, { z:200, rotationY:-45, left:9+10, alpha:0, scaleX:1.1, scaleY:1.1, delay:1.0, ease:Quad.easeInOut, overwrite:false });
		
		TweenLite.from( EFDog, 0.5, { alpha:0, left:15, ease:Quad.easeInOut, delay:0.5, overwrite:false });
		
		//LOOP_CHECKER
		if(loopNum !== 1)
		{
			loopNum-=1;
			//TweenLite.delayedCall( 3.5, Loop01 );
			TweenLite.delayedCall( 6.5, Loop01 );
		};
	};
	
	function Loop01()
	{
		//SHOW_HIDDEN_ELEMENTS
		ShowF01();
		
		//EXIT_ELEMENTS
		TweenLite.to( txt3a, 0.5, { z:200, rotationY:45, left:9-10, alpha:0, scaleX:1.1, scaleY:1.1, delay:0.0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( txt3b, 0.5, { z:200, rotationY:45, left:9-10, alpha:0, scaleX:1.1, scaleY:1.1, delay:0.2, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( txt3c, 0.5, { z:200, rotationY:45, left:9-10, alpha:0, scaleX:1.1, scaleY:1.1, delay:0.4, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( txt3d, 0.5, { z:200, rotationY:45, left:9-10, alpha:0, scaleX:1.1, scaleY:1.1, delay:0.6, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( txt3e, 0.5, { z:200, rotationY:45, left:8-10, alpha:0, scaleX:1.1, scaleY:1.1, delay:0.8, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( txt3f, 0.5, { z:200, rotationY:45, left:9-10, alpha:0, scaleX:1.1, scaleY:1.1, delay:1.0, ease:Quad.easeInOut, overwrite:false });
	
		TweenLite.to( EFDog, 0.5, { alpha:0, ease:Quad.easeOut, overwrite:false });

		//ANIMATE_ELEMENTS
		TweenLite.from( txt1a, 1, { alpha:0, ease:Quad.easeOut, delay:1.5, overwrite:false });
		TweenLite.from( txt1b, 1, { z:200, rotationY:-45, left:125+10, alpha:0, scaleX:1.1, scaleY:1.1, ease:Quad.easeInOut, delay:3.0, overwrite:false });
		TweenLite.from( txt1c, 1, { z:200, rotationY:-45, left:7+10, alpha:0, scaleX:1.1, scaleY:1.1, ease:Quad.easeInOut, delay:3.2, overwrite:false });
		TweenLite.from( txt1d, 1, { z:200, rotationY:-45, left:72+10, alpha:0, scaleX:1.1, scaleY:1.1, ease:Quad.easeInOut, delay:3.4, overwrite:false });
		
		//DAISY_CHAIN
		TweenLite.delayedCall( 5, Frame02 );
	};
	
	Frame01();
	
	/*------------------------------------------------------------
	Abaddream II.
	
	Who awaits me in deepest slumber,
	but a siren haunting in crystal fiction.
	You, black winged lover, my grasping memory,
	Take hold, sweet, dark addiction.
	------------------------------------------------------------*/
});