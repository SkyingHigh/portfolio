AdobeEdge.bootstrapCallback(function (compId)
{
	/*------------------------------------------------------------
	INITIAL_VARS
	
	EDGE_API_GUIDE:
	var comp;
	comp = theAd.getStage();
	AdobeEdge.getComposition(compId).getStage().getStage().$("Parent").getStage().$("Child").stop();
	------------------------------------------------------------*/
	var theAd		= AdobeEdge.getComposition('ASPCA');
	var stage		= theAd.getStage();
	
	//CODE_ELEMENTS
	var loopNum		= 3; //THE_AMOUNT_OF_TIMES_TO_LOOP_THE_AD
	
	//OBJECT_ELEMENTS
	var black_cover			= theAd.getStage().$( 'black_cover' );
	var logo			= theAd.getStage().$( 'logo' );
	var border			= theAd.getStage().$( 'border' );
	
	var hover_cta_back		= theAd.getStage().$( 'hover_cta_back' );
	var hover_cta_btn		= theAd.getStage().$( 'hover_cta_btn' );
	var hover_cta_btn_hit		= theAd.getStage().$( 'hover_cta_btn_hit' );
	var hover_cta_btn_over		= theAd.getStage().$( 'hover_cta_btn_over' );
	var hover_cta_refresh_icon	= theAd.getStage().$( 'hover_cta_refresh_icon' );
	var hover_cta_t1		= theAd.getStage().$( 'hover_cta_t1' );
	var hover_cta			= theAd.getStage().$( 'hover_cta' );
	
	var intro0			= theAd.getStage().$( 'intro0' );
	var intro1			= theAd.getStage().$( 'intro1' );
	var intro2			= theAd.getStage().$( 'intro2' );
	var t_intro0			= theAd.getStage().$( 't_intro0' );
	var t_intro1			= theAd.getStage().$( 't_intro1' );
	var t_intro2a			= theAd.getStage().$( 't_intro2a' );
	var t_intro2b			= theAd.getStage().$( 't_intro2b' );
	var t_intro3a			= theAd.getStage().$( 't_intro3a' );
	var t_intro3b			= theAd.getStage().$( 't_intro3b' );
	var t_intro4a			= theAd.getStage().$( 't_intro4a' );
	var t_intro4b			= theAd.getStage().$( 't_intro4b' );
	
	var mill_bg1			= theAd.getStage().$( 'mill_bg1' );
	var mill_bg2a			= theAd.getStage().$( 'mill_bg2a' );
	var mill_bg2b			= theAd.getStage().$( 'mill_bg2b' );
	var mill_bg3			= theAd.getStage().$( 'mill_bg3' );
	
	var mill_t11			= theAd.getStage().$( 'mill_t11' );
	var mill_t12			= theAd.getStage().$( 'mill_t12' );
	var mill_t13			= theAd.getStage().$( 'mill_t13' );
	var mill_t14			= theAd.getStage().$( 'mill_t14' );
	var mill_t15			= theAd.getStage().$( 'mill_t15' );
	var mill_t16			= theAd.getStage().$( 'mill_t16' );
	var mill_t21			= theAd.getStage().$( 'mill_t21' );
	var mill_t22			= theAd.getStage().$( 'mill_t22' );
	var mill_t23			= theAd.getStage().$( 'mill_t23' );
	var mill_t31			= theAd.getStage().$( 'mill_t31' );
	var mill_t32			= theAd.getStage().$( 'mill_t32' );
	var mill_t33			= theAd.getStage().$( 'mill_t33' );
	
	var fight_bg1			= theAd.getStage().$( 'fight_bg1' );
	var fight_bg2a			= theAd.getStage().$( 'fight_bg2a' );
	var fight_bg2b			= theAd.getStage().$( 'fight_bg2b' );
	var fight_bg3			= theAd.getStage().$( 'fight_bg3' );
	
	var fight_t11			= theAd.getStage().$( 'fight_t11' );
	var fight_t12			= theAd.getStage().$( 'fight_t12' );
	var fight_t13			= theAd.getStage().$( 'fight_t13' );
	var fight_t14			= theAd.getStage().$( 'fight_t14' );
	var fight_t15			= theAd.getStage().$( 'fight_t15' );
	var fight_t21			= theAd.getStage().$( 'fight_t21' );
	var fight_t22			= theAd.getStage().$( 'fight_t22' );
	var fight_t23			= theAd.getStage().$( 'fight_t23' );
	var fight_t24			= theAd.getStage().$( 'fight_t24' );
	var fight_t31			= theAd.getStage().$( 'fight_t31' );
	var fight_t32			= theAd.getStage().$( 'fight_t32' );
	var fight_t33			= theAd.getStage().$( 'fight_t33' );
	
	var endframebg			= theAd.getStage().$( 'endframebg' );
	var endframe_mills_01		= theAd.getStage().$( 'endframe_mills_01' );
	var endframe_mills_02		= theAd.getStage().$( 'endframe_mills_02' );
	var endframe_fight_01		= theAd.getStage().$( 'endframe_fight_01' );
	var endframe_fight_02		= theAd.getStage().$( 'endframe_fight_02' );
	
	var endframe_t1			= theAd.getStage().$( 'endframe_t1' );
	var endframe_t2			= theAd.getStage().$( 'endframe_t2' );
	
	//INVISIBLE_BUTTONS
	var btn_mill			= theAd.getStage().$( 'btn_mill' );
	var btn_fight			= theAd.getStage().$( 'btn_fight' );
	
	var masterlist			=
	[
		logo,
		intro1,
		intro2,
		t_intro0,
		t_intro1,
		t_intro2a,
		t_intro2b,
		t_intro3a,
		t_intro3b,
		t_intro4a,
		t_intro4b,
		mill_bg1,
		mill_bg2a,
		mill_bg2b,
		mill_bg3,
		mill_t11,
		mill_t12,
		mill_t13,
		mill_t14,
		mill_t15,
		mill_t16,
		mill_t21,
		mill_t22,
		mill_t23,
		mill_t31,
		mill_t32,
		mill_t33,
		fight_bg1,
		fight_bg2a,
		fight_bg2b,
		fight_bg3,
		fight_t11,
		fight_t12,
		fight_t13,
		fight_t14,
		fight_t15,
		fight_t21,
		fight_t22,
		fight_t23,
		fight_t24,
		fight_t31,
		fight_t32,
		fight_t33,
		endframebg,
		endframe_mills_01,
		endframe_mills_02,
		endframe_fight_01,
		endframe_fight_02,
		endframe_t1,
		endframe_t2
	]
	
	var hoverlist				=
	[
		hover_cta_back,
		hover_cta_btn,
		hover_cta_btn_hit,
		hover_cta_btn_over,
		hover_cta_refresh_icon,
		hover_cta_t1,
		hover_cta,
	]
	
	//COMMON_FUNCTIONS
	function resetObj( obj )
	{
		TweenLite.set( obj, {css:{transformPerspective:1000, transformStyle:"preserve-3d"}})
		TweenLite.to( obj, 0, { x:0, y:0, rotation:0, alpha:0, overwrite:false });
		obj.hide();
	};
	
	function showObj( obj )
	{
		obj.show();
		TweenLite.to( obj, 0, { z:0, scaleX:1, scaleY:1, x:0, y:0, rotation:0, alpha:1, overwrite:false });
	};
	
	function HideAll()
	{
		for( i=0; i<masterlist.length; i++ )
		{
			resetObj(masterlist[i]);
		};
	};
	function HideHover()
	{
		for( i=0; i<hoverlist.length; i++ )
		{
			resetObj(hoverlist[i]);
		};
	}
	function ranNum( min, max )
	{
	    return( Math.floor( Math.random() * ( max - min + 1 )) + min );
	};
	
	/*------------------------------------------------------------
	CTA_ACTIONS
	------------------------------------------------------------*/
	hover_cta_btn_hit.bind('click',function()
	{
		console.trace( 'CTA_CLICKED ' );
		window.open(clickTag, "_blank");
	});
	
	border.bind('click',function()
	{
		console.trace( 'OVERALL_CLICKED ' );
		window.open(clickTag, "_blank");
	});
	
	/*------------------------------------------------------------
	BUTTONS
	------------------------------------------------------------*/
	btn_mill.bind('click',function()
	{
		playing = true;
		btn_mill.hide();
		btn_fight.hide();
		hideEndframe();
		TweenLite.to( black_cover, 0.25, { alpha:1, ease:Quad.easeOut, delay:0, overwrite:false });
		TweenLite.delayedCall( 0.25, Mill01 )
	});
	
	btn_mill.bind('mouseover',function()
	{
		highlight1 = true;
		highlight2 = false;
		
		if( allowAuto == true ){ cancelAutoPlay(); };
		if( replay == true ){ cancelReplay(); };
		
		intro1.show();
		TweenLite.to( intro1, 0.5, { alpha:1, ease:Quad.easeOut, overwrite:false });
		TweenLite.to( intro2, 0.5, { alpha:0, ease:Quad.easeOut, overwrite:false });
	});
		
	btn_mill.bind('mouseout',function()
	{
		highlight1 = false;
		autoP = setTimeout( autoPlayCheck, 1 );
		TweenLite.to( intro1, 0.5, { alpha:0, ease:Quad.easeOut, overwrite:false });		
	});
	
	btn_fight.bind('click',function()
	{
		playing = true;
		btn_mill.hide();
		btn_fight.hide();
		hideEndframe();
		TweenLite.to( black_cover, 0.25, { alpha:1, ease:Quad.easeOut, delay:0, overwrite:false });
		TweenLite.delayedCall( 0.25, Fight01 )
	});
	
	btn_fight.bind('mouseover',function()
	{
		highlight1 = false;
		highlight2 = true;
		
		if( allowAuto == true ){ cancelAutoPlay(); };
		if( replay == true ){ cancelReplay(); };
		
		intro2.show();
		TweenLite.to( intro2, 0.5, { alpha:1, ease:Quad.easeOut, overwrite:false });
		TweenLite.to( intro1, 0.5, { alpha:0, ease:Quad.easeOut, overwrite:false });
	});
		
	btn_fight.bind('mouseout',function()
	{
		highlight2 = false;
		autoP = setTimeout( autoPlayCheck, 1 );
		TweenLite.to( intro2, 0.5, { alpha:0, ease:Quad.easeOut, overwrite:false });		
	});
	
	//HOVER_MENU_BUTTONS
	hover_cta_back.bind('click',function()
	{
		TweenMax.killAll();
		Frame01();
	});
	
	hover_cta_back.bind('mouseover',function()
	{
		TweenLite.to( hover_cta_refresh_icon, 0.5, { rotation:-180, ease:Quad.easeInOut, overwrite:false });
	});
	
	hover_cta_back.bind('mouseout',function()
	{
		TweenLite.to( hover_cta_refresh_icon, 0.5, { rotation:0, ease:Quad.easeInOut, overwrite:false });
	});
	
	hover_cta_btn_hit.bind('mouseover',function()
	{
		showObj( hover_cta_btn_over );
		TweenLite.from( hover_cta_btn_over, 0.5, { alpha:0, ease:Quad.easeInOut, overwrite:false });
	});
	
	hover_cta_btn_hit.bind('mouseout',function()
	{
		TweenLite.to( hover_cta_btn_over, 0.5, { alpha:0, ease:Quad.easeInOut, overwrite:false });
	});
		
	/*------------------------------------------------------------
	ANIMATION console.log( ranNum(1, 2) );
	------------------------------------------------------------*/
	var rNum		= ranNum(1, 2);
	var firstplay		= true;
	var allowAuto		= true;
	var playing		= false;
	var replay		= false;
	var loop		= 1;
	var highlight1		= false;
	var highlight2		= false;
	var enableHoverMenu	= false;
	var HoverMenuVisible	= false;
	
	function Frame01()
	{
		HideAll();
		HideHover();
		enableHoverMenu	= false;
		playing		= false;
		btn_mill.show();
		btn_fight.show();
		
		//SHOW_OBJS
		AutoPlay();
		showObj( logo );
		showObj( t_intro0 );showObj( t_intro1 );
		showObj( t_intro2a );showObj( t_intro2b );
		showObj( t_intro3a );showObj( t_intro4a );
		
		//RemoveHoverMenu
		HoverMenuVisible = false;
		resetObj( hover_cta_back );
		resetObj( hover_cta_btn );
		resetObj( hover_cta_btn_over );
		resetObj( hover_cta_btn_hit );
		resetObj( hover_cta_refresh_icon );
		resetObj( hover_cta_t1 );
		resetObj( hover_cta );
		
		TweenLite.to( black_cover, 0.5, { alpha:0, ease:Quad.easeOut, overwrite:false });
	};
	
	Frame01();
	
	function commonFunctions()
	{
		playing = true;
		allowAuto = false;
		replay = false;
		btn_mill.hide();
		btn_fight.hide();
		
		if( firstplay == false )
		{
			loop+=1;
		};
		
	};
	
	function endElements()
	{
		firstplay = false;
		playing = false;
		btn_mill.show();
		btn_fight.show();
		highlight1 = false;
		highlight2 = false;
		autoP = setTimeout( autoPlayCheck, 1 );
		
		//RemoveHoverMenu
		TweenLite.to( hover_cta_back, 0.5, { y:"43", ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( hover_cta_btn, 0.5, { y:"43", ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( hover_cta_btn_hit, 0.5, { y:"43", ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( hover_cta_btn_over, 0.5, { y:"43", ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( hover_cta_refresh_icon, 0.5, { y:"43", ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( hover_cta_t1, 0.5, { y:"43", ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( hover_cta, 0.5, { y:"43", ease:Quad.easeInOut, overwrite:false });
		
		HoverMenuVisible = false;
		function resetHover()
		{
			resetObj( hover_cta_back );
			resetObj( hover_cta_btn );
			resetObj( hover_cta_btn_over );
			resetObj( hover_cta_btn_hit );
			resetObj( hover_cta_refresh_icon );
			resetObj( hover_cta_t1 );
			resetObj( hover_cta );
		};
		
		TweenLite.delayedCall(0.5, resetHover);
	};
	
	function hideEndframe()
	{
		resetObj( endframebg );
		resetObj( endframe_fight_01 );resetObj( endframe_fight_02 );
		resetObj( endframe_mills_01 );resetObj( endframe_mills_02 );
		resetObj( endframe_t1 );resetObj( endframe_t2 );
		resetObj( t_intro0 );resetObj( t_intro1 );
	};
	
	/*------------------------------------------------------------
	CHOICE_MILL
	------------------------------------------------------------*/
	function Mill01()
	{
		highlight1 = true;
		highlight2 = false;
		enableHoverMenu = true;
		commonFunctions();
		
		//HIDE_OBJS
		HideAll();
		resetObj( logo );
		resetObj( t_intro0 );resetObj( t_intro1 );
		resetObj( t_intro3a );
		resetObj( t_intro4a );
		TweenLite.to( black_cover, 0.75, { alpha:0, ease:Quad.easeOut, overwrite:false });
		hideEndframe();
		
		resetObj(intro1);resetObj( t_intro3b );
		
		//SHOW_OBJS
		showObj( mill_bg1 );
		showObj( mill_t11 );showObj( mill_t12 );showObj( mill_t13 );
		showObj( mill_t14 );showObj( mill_t15 );showObj( mill_t16 );
		
		//ANIMATE_ELEMENTS
		//NOTE: rotation:0.01 is to fix choppy animation bug in firefox.
		TweenLite.to( mill_bg1, 10, { scaleX:1.1, scaleY:1.1, overwrite:false });
		
		TweenLite.from( mill_t11, 1, { alpha:0, ease:Quad.easeInOut, delay:0.2, overwrite:false });
		TweenLite.from( mill_t12, 1, { alpha:0, ease:Quad.easeInOut, delay:0.3, overwrite:false });
		TweenLite.from( mill_t13, 1, { alpha:0, ease:Quad.easeInOut, delay:0.4, overwrite:false });
		
		TweenLite.to( mill_t11, 10, { z:"100", rotation:0.01, overwrite:false });
		TweenLite.to( mill_t12, 12, { z:"100", rotation:0.01, overwrite:false });
		TweenLite.to( mill_t13, 14, { z:"100", rotation:0.01, overwrite:false });
		
		TweenLite.from( mill_t14, 1, { alpha:0, ease:Quad.easeInOut, delay:0.8, overwrite:false });
		TweenLite.from( mill_t15, 1, { alpha:0, ease:Quad.easeInOut, delay:0.9, overwrite:false });
		TweenLite.from( mill_t16, 1, { alpha:0, ease:Quad.easeInOut, delay:1.0, overwrite:false });
		
		TweenLite.to( mill_t14, 10, { z:"100", rotation:0.01, overwrite:false });
		TweenLite.to( mill_t15, 12, { z:"100", rotation:0.01, overwrite:false });
		TweenLite.to( mill_t16, 14, { z:"100", rotation:0.01, overwrite:false });
		
		//DAISY_CHAIN
		TweenLite.to( black_cover, 0.5, { alpha:1, ease:Quad.easeOut, delay:3.0, overwrite:false });
		TweenLite.delayedCall( 3.5, Mill02 );
	};
	
	function Mill02()
	{
		//HIDE_OBJS
		resetObj( mill_bg1 );
		resetObj( mill_t11 );resetObj( mill_t12 );resetObj( mill_t13 );
		resetObj( mill_t14 );resetObj( mill_t15 );resetObj( mill_t16 );
		TweenLite.to( black_cover, 0.75, { alpha:0, ease:Quad.easeIn, overwrite:false });
		
		//SHOW_OBJS
		showObj( mill_bg2a );showObj( mill_bg2b );
		showObj( mill_t21 );showObj( mill_t22 );showObj( mill_t23 );
		
		//ANIMATE_ELEMENTS
		TweenLite.to( mill_bg2a, 10, { scaleX:1.1, scaleY:1.1, overwrite:false });
		TweenLite.to( mill_bg2b, 10, { scaleX:1.1, scaleY:1.1, overwrite:false });
		
		TweenLite.from( mill_t21, 1, { alpha:0, scaleX:0.8, scaleY:0.8, ease:Back.easeOut, delay:0.0, overwrite:false });
		TweenLite.from( mill_t22, 1, { alpha:0, scaleX:0.8, scaleY:0.8, ease:Back.easeOut, delay:0.5, overwrite:false });
		TweenLite.from( mill_t23, 1, { alpha:0, scaleX:0.8, scaleY:0.8, ease:Back.easeOut, delay:1.0, overwrite:false });
		
		//DAISY_CHAIN
		TweenLite.to( black_cover, 0.5, { alpha:1, ease:Quad.easeOut, delay:3.0, overwrite:false });
		TweenLite.delayedCall( 3.5, Mill03 );
	};
	
	function Mill03()
	{
		//HIDE_OBJS
		resetObj( mill_bg2a );resetObj( mill_bg2b );
		resetObj( mill_t21 );resetObj( mill_t22 );resetObj( mill_t23 );
		TweenLite.to( black_cover, 0.75, { alpha:0, ease:Quad.easeIn, overwrite:false });
		
		//SHOW_OBJS
		showObj( mill_bg3 );
		showObj( mill_t31 );showObj( mill_t32 );showObj( mill_t33 );
		
		//ANIMATE_ELEMENTS
		TweenLite.to( mill_bg3, 10, { scaleX:1.1, scaleY:1.1, overwrite:false });
		
		TweenLite.from( mill_t31, 1, { alpha:0, ease:Quad.easeInOut, delay:0, overwrite:false });
		TweenLite.from( mill_t32, 1, { alpha:0, scaleX:0.9, scaleY:0.6, ease:Back.easeOut, delay:0.6, overwrite:false });
		TweenLite.from( mill_t33, 1, { alpha:0, ease:Quad.easeInOut, delay:0.9, overwrite:false });
		
		//DAISY_CHAIN
		TweenLite.to( black_cover, 0.5, { alpha:1, ease:Quad.easeOut, delay:3.0, overwrite:false });
		TweenLite.delayedCall( 3.5, Endframe_Mill );
	};
	
	function Endframe_Mill()
	{
		endElements();
		enableHoverMenu = false;
		
		//HIDE_OBJS
		resetObj( mill_bg3 );
		resetObj( mill_t31 );resetObj( mill_t32 );resetObj( mill_t33 );
		TweenLite.to( black_cover, 0.75, { alpha:0, ease:Quad.easeIn, overwrite:false });
		
		//SHOW_OBJS
		showObj( logo );showObj( t_intro3a );showObj( t_intro4a );
		showObj( endframebg );showObj( endframe_mills_01 );showObj( endframe_mills_02 );
		showObj( endframe_t1 );showObj( endframe_t2 );
		showObj( t_intro0 );showObj( t_intro1 );
		
		//ANIMATE_ELEMENTS
		TweenLite.from( endframe_mills_01, 0.5, { alpha:0, scaleX:0.8, scaleY:0.8, ease:Quad.easeInOut, overwrite:false });
		TweenLite.from( endframe_mills_02, 0.5, { alpha:0, scaleX:0.8, scaleY:0.8, ease:Quad.easeInOut, overwrite:false });
		TweenLite.from( t_intro3a, 0.5, { alpha:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.from( t_intro3b, 0.5, { alpha:0, ease:Quad.easeInOut, overwrite:false });
	};
	
	/*------------------------------------------------------------
	CHOICE_FIGHT
	------------------------------------------------------------*/
	function Fight01()
	{
		highlight1 = false;
		highlight2 = true;
		enableHoverMenu = true;
		commonFunctions();
		
		//HIDE_OBJS
		HideAll();
		resetObj( logo );
		resetObj( t_intro0 );resetObj( t_intro1 );
		resetObj( t_intro3a );
		resetObj( t_intro4a );
		TweenLite.to( black_cover, 0.75, { alpha:0, ease:Quad.easeOut, overwrite:false });
		hideEndframe();
		
		resetObj(intro2);resetObj( t_intro4b );
		
		//SHOW_OBJS
		showObj( fight_bg1 );
		showObj( fight_t11 );showObj( fight_t12 );showObj( fight_t13 );
		showObj( fight_t14 );showObj( fight_t15 );
		
		//ANIMATE_ELEMENTS
		//NOTE: rotation:0.01 is to fix choppy animation bug in firefox.
		TweenLite.to( fight_bg1, 10, { scaleX:1.1, scaleY:1.1, overwrite:false });
		
		TweenLite.from( fight_t11, 1, { alpha:0, ease:Quad.easeInOut, delay:0.2, overwrite:false });
		TweenLite.from( fight_t12, 1, { alpha:0, ease:Quad.easeInOut, delay:0.3, overwrite:false });
		TweenLite.from( fight_t13, 1, { alpha:0, ease:Quad.easeInOut, delay:0.4, overwrite:false });
		
		TweenLite.to( fight_t11, 10, { z:"90", rotation:0.01, overwrite:false });
		TweenLite.to( fight_t12, 12, { z:"90", rotation:0.01, overwrite:false });
		TweenLite.to( fight_t13, 14, { z:"90", rotation:0.01, overwrite:false });
		
		TweenLite.from( fight_t14, 1, { alpha:0, ease:Quad.easeInOut, delay:0.8, overwrite:false });
		TweenLite.from( fight_t15, 1, { alpha:0, ease:Quad.easeInOut, delay:0.9, overwrite:false });
		
		TweenLite.to( fight_t14, 10, { z:"90", rotation:0.01, overwrite:false });
		TweenLite.to( fight_t15, 12, { z:"90", rotation:0.01, overwrite:false });
		
		//DAISY_CHAIN
		TweenLite.to( black_cover, 0.5, { alpha:1, ease:Quad.easeOut, delay:3.0, overwrite:false });
		TweenLite.delayedCall( 3.5, Fight02 );
	};
	
	function Fight02()
	{
		//HIDE_OBJS
		resetObj( fight_bg1 );
		resetObj( fight_t11 );resetObj( fight_t12 );resetObj( fight_t13 );
		resetObj( fight_t14 );resetObj( fight_t15 );
		TweenLite.to( black_cover, 0.75, { alpha:0, ease:Quad.easeIn, overwrite:false });
		
		//SHOW_OBJS
		showObj( fight_bg2a );showObj( fight_bg2b );
		showObj( fight_t21 );showObj( fight_t22 );showObj( fight_t23 );showObj( fight_t24 );
		
		//ANIMATE_ELEMENTS
		TweenLite.to( fight_bg2a, 10, { scaleX:1.1, scaleY:1.1, overwrite:false });
		TweenLite.to( fight_bg2b, 10, { scaleX:1.1, scaleY:1.1, overwrite:false });
		
		TweenLite.from( fight_t21, 1, { alpha:0, scaleX:0.8, scaleY:0.8, ease:Back.easeOut, delay:0.0, overwrite:false });
		TweenLite.from( fight_t22, 1, { alpha:0, scaleX:0.8, scaleY:0.8, ease:Back.easeOut, delay:0.6, overwrite:false });
		TweenLite.from( fight_t23, 1, { alpha:0, scaleX:0.8, scaleY:0.8, ease:Back.easeOut, delay:0.9, overwrite:false });
		TweenLite.from( fight_t24, 1, { alpha:0, scaleX:0.8, scaleY:0.8, ease:Back.easeOut, delay:1.2, overwrite:false });
		
		//DAISY_CHAIN
		TweenLite.to( black_cover, 0.5, { alpha:1, ease:Quad.easeOut, delay:3.0, overwrite:false });
		TweenLite.delayedCall( 3.5, Fight03 );
	};
	
	function Fight03()
	{
		//HIDE_OBJS
		resetObj( fight_bg2a );resetObj( fight_bg2b );
		resetObj( fight_t21 );resetObj( fight_t22 );resetObj( fight_t23 );resetObj( fight_t24 );
		TweenLite.to( black_cover, 0.75, { alpha:0, ease:Quad.easeIn, overwrite:false });
		
		//SHOW_OBJS
		showObj( fight_bg3 );
		showObj( fight_t31 );showObj( fight_t32 );showObj( fight_t33 );
		
		//ANIMATE_ELEMENTS
		TweenLite.to( fight_bg3, 10, { x:"10", scaleX:1.1, scaleY:1.1, overwrite:false });
		
		TweenLite.from( fight_t31, 1, { alpha:0, ease:Quad.easeInOut, delay:0, overwrite:false });
		TweenLite.from( fight_t32, 1, { alpha:0, ease:Quad.easeInOut, delay:0.6, overwrite:false });
		TweenLite.from( fight_t33, 1, { alpha:0, scaleX:0.9, scaleY:0.9, ease:Back.easeOut, delay:0.9, overwrite:false });
		
		//DAISY_CHAIN
		TweenLite.to( black_cover, 0.5, { alpha:1, ease:Quad.easeOut, delay:3.0, overwrite:false });
		TweenLite.delayedCall( 3.5, Endframe_Fight );
	};
	
	function Endframe_Fight()
	{
		enableHoverMenu = false;
		endElements();
		
		//HIDE_OBJS
		resetObj( fight_bg3 );
		resetObj( fight_t31 );resetObj( fight_t32 );resetObj( fight_t33 );
		TweenLite.to( black_cover, 0.75, { alpha:0, ease:Quad.easeIn, overwrite:false });
		
		//SHOW_OBJS
		showObj( logo );showObj( t_intro3a );showObj( t_intro4a );
		showObj( endframebg );showObj( endframe_fight_01 );showObj( endframe_fight_02 );
		showObj( endframe_t1 );showObj( endframe_t2 );
		showObj( t_intro0 );showObj( t_intro1 );
		
		//ANIMATE_ELEMENTS
		TweenLite.from( endframe_fight_01, 0.5, { alpha:0, scaleX:0.8, scaleY:0.8, ease:Quad.easeInOut, overwrite:false });
		TweenLite.from( endframe_fight_02, 0.5, { alpha:0, scaleX:0.8, scaleY:0.8, ease:Quad.easeInOut, overwrite:false });
		TweenLite.from( t_intro3a, 0.5, { alpha:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.from( t_intro3b, 0.5, { alpha:0, ease:Quad.easeInOut, overwrite:false });
	};
	
	/*------------------------------------------------------------
	--------------------------------------------------------------
	JQUERY_MOUSE_CHECKER_&_AUTOPLAY
	--------------------------------------------------------------
	------------------------------------------------------------*/
	var autoP = setTimeout( autoPlayCheck, 1 );
	
	function AutoPlay()
	{
		console.log( "autoplay" );
		//INIT_OBJECTS
		if( rNum == 1 )
		{
			highlight1 = true;
			highlight2 = false;
			
			showObj(intro1);showObj( t_intro3b );
			TweenLite.from( intro1, 1, { alpha:0, ease:Quad.easeOut, delay:1.5, overwrite:false });
			TweenLite.to( t_intro3b, 0, { css:{clip:"rect(0px,118px,22px,0px)"}, overwrite:false });
			TweenLite.from( t_intro3b, 3, { css:{clip:"rect(0px,0px,22px,0px)"}, delay:1.5, overwrite:false });
			
			TweenLite.to( black_cover, 0.25, { alpha:1, ease:Quad.easeOut, delay:3.75, overwrite:false });
			TweenLite.delayedCall( 4, Mill01 );
		}else
		if( rNum == 2 )
		{
			highlight1 = false;
			highlight2 = true;
			
			showObj(intro2);showObj( t_intro4b );
			TweenLite.from( intro2, 1, { alpha:0, ease:Quad.easeOut, delay:1.5, overwrite:false });
			TweenLite.to( t_intro4b, 0, { css:{clip:"rect(0px,134px,22px,0px)"}, overwrite:false });
			TweenLite.from( t_intro4b, 3, { css:{clip:"rect(0px,0px,22px,0px)"}, delay:1.5, overwrite:false });
			
			TweenLite.to( black_cover, 0.25, { alpha:1, ease:Quad.easeOut, delay:3.75, overwrite:false });
			TweenLite.delayedCall( 4, Fight01 );
		};
	};
	
	function cancelAutoPlay()
	{
		allowAuto = false;
		clearTimeout( autoP );
		
		//KILLTWEENS
		if( rNum == 1 )
		{
			TweenLite.killTweensOf( intro1 );
			TweenLite.killTweensOf( t_intro3b );
		}else
		if( rNum == 2 )
		{
			TweenLite.killTweensOf( intro2 );
			TweenLite.killTweensOf( t_intro4b );
		};
		
		TweenLite.killTweensOf( black_cover );
		
		//CANCEL_DELAYED_CALLS
		TweenLite.killTweensOf( Mill01 );
		TweenLite.killTweensOf( Fight01 );
		
		//TWEENS
		TweenLite.to( black_cover, 0.5, { alpha:0, ease:Quad.easeOut, overwrite:false });
		TweenLite.to( t_intro3b, 0, { css:{clip:"rect(0px,0px,22px,0px)"}, overwrite:false });
		TweenLite.to( t_intro4b, 0, { css:{clip:"rect(0px,0px,22px,0px)"}, overwrite:false });
	};
	
	function cancelReplay()
	{
		replay = false;
		clearTimeout( autoP );
		TweenLite.killTweensOf( AutoPlay );
		
		//KILLTWEENS
		if( rNum == 1 )
		{
			TweenLite.killTweensOf( intro1 );
			TweenLite.killTweensOf( t_intro3b );
		}else
		if( rNum == 2 )
		{
			TweenLite.killTweensOf( intro2 );
			TweenLite.killTweensOf( t_intro4b );
		};
		
		TweenLite.killTweensOf( black_cover );
		
		//CANCEL_DELAYED_CALLS
		TweenLite.killTweensOf( Mill01 );
		TweenLite.killTweensOf( Fight01 );
		
		//TWEENS
		TweenLite.to( black_cover, 0.5, { alpha:0, ease:Quad.easeOut, overwrite:false });
		TweenLite.to( t_intro3b, 0, { css:{clip:"rect(0px,0px,22px,0px)"}, overwrite:false });
		TweenLite.to( t_intro4b, 0, { css:{clip:"rect(0px,0px,22px,0px)"}, overwrite:false });
	};
	
	function autoPlayCheck()
	{
		if( highlight1 == false && highlight2 == false )
		{
			if( playing == false && allowAuto == false && firstplay == true )
			{
				allowAuto = true;
				AutoPlay();
			};
			
			if( playing == false && replay == false && firstplay == false && loop < loopNum )
			{
				replay = true;
				TweenLite.delayedCall( 6, AutoPlay );
			};
		};
	};
	
	/************************************************************/	
	$(document).mousemove(function(e)
	{
		if( e.pageX < 300 && e.pageX > 0 && e.pageY > 0 && e.pageY < 250 )
		{
			if( enableHoverMenu == true &&  HoverMenuVisible == false )
			{
				HoverMenuVisible = true;
				showObj( hover_cta_back );
				showObj( hover_cta_btn_hit );
				showObj( hover_cta_btn );
				showObj( hover_cta_refresh_icon );
				showObj( hover_cta_t1 );
				showObj( hover_cta );
				
				TweenLite.from( hover_cta_back, 0.5, { y:"43", ease:Quad.easeInOut, overwrite:false });
				TweenLite.from( hover_cta_btn, 0.5, { y:"43", ease:Quad.easeInOut, overwrite:false });
				TweenLite.from( hover_cta_btn_hit, 0.5, { y:"43", ease:Quad.easeInOut, overwrite:false });
				TweenLite.from( hover_cta_btn_over, 0.5, { y:"43", ease:Quad.easeInOut, overwrite:false });
				TweenLite.from( hover_cta_refresh_icon, 0.5, { y:"43", ease:Quad.easeInOut, overwrite:false });
				TweenLite.from( hover_cta_t1, 0.5, { y:"43", ease:Quad.easeInOut, overwrite:false });
				TweenLite.from( hover_cta, 0.5, { y:"43", ease:Quad.easeInOut, overwrite:false });
			};
		}else
		if( e.pageX > 300 || e.pageY < 0 || e.pageY < 0 || e.pageY > 250 )
		{
			//console.log('mouse is out of the frame');
			if( enableHoverMenu == true &&  HoverMenuVisible == true )
			{
				HoverMenuVisible = false;
				
				TweenLite.to( hover_cta_back, 0.5, { y:"43", ease:Quad.easeInOut, overwrite:false });
				TweenLite.to( hover_cta_btn, 0.5, { y:"43", ease:Quad.easeInOut, overwrite:false });
				TweenLite.to( hover_cta_btn_hit, 0.5, { y:"43", ease:Quad.easeInOut, overwrite:false });
				TweenLite.to( hover_cta_btn_over, 0.5, { y:"43", ease:Quad.easeInOut, overwrite:false });
				TweenLite.to( hover_cta_refresh_icon, 0.5, { y:"43", ease:Quad.easeInOut, overwrite:false });
				TweenLite.to( hover_cta_t1, 0.5, { y:"43", ease:Quad.easeInOut, overwrite:false });
				TweenLite.to( hover_cta, 0.5, { y:"43", ease:Quad.easeInOut, overwrite:false });
			};
		};
	});
	
	/*------------------------------------------------------------
	------------------------------------------------------------*/
});