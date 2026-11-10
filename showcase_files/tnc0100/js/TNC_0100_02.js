AdobeEdge.bootstrapCallback(function (compId)
{
	/*------------------------------------------------------------
	INITIAL_VARS
	-52 -48
	EDGE_API_GUIDE:
	var comp;
	comp = theAd.getStage();
	AdobeEdge.getComposition(compId).getStage().getStage().$("Parent").getStage().$("Child").stop();
	------------------------------------------------------------*/
	var theAd		= AdobeEdge.getComposition('TNC');
	var stage		= theAd.getStage();
	
	//OBJECT_ELEMENTS
	var black_cover			= theAd.getStage().$( 'black_cover' );
	var cta_hit			= theAd.getStage().$( 'cta_hit' );
	var border			= theAd.getStage().$( 'border' );
	
	var btxt1			= theAd.getStage().$( 'btxt1' );
	var btxt2			= theAd.getStage().$( 'btxt2' );
	var btxt3			= theAd.getStage().$( 'btxt3' );
	var bg1a			= theAd.getStage().$( 'bg1a' );
	var bg1b			= theAd.getStage().$( 'bg1b' );
	var bg1c			= theAd.getStage().$( 'bg1c' );
	var bg1_eye			= theAd.getStage().$( 'bg1_eye' );
	var bg2				= theAd.getStage().$( 'bg2' );
	
	var bg3a			= theAd.getStage().$( 'bg_large' );
	var bg3b			= theAd.getStage().$( 'monkey_large1' );
	var bg3c			= theAd.getStage().$( 'monkey_large2' );
	var f3_t1			= theAd.getStage().$( 'f3_t1' );
	var f3_t2_lg1			= theAd.getStage().$( 'f3_t2a' );
	var f3_t2_lg2			= theAd.getStage().$( 'f3_t2b' );
	var f3_t3			= theAd.getStage().$( 'f3_t3' );
	var f3_t4			= theAd.getStage().$( 'f3_t4' );
	var grad			= theAd.getStage().$( 'grad' );
	
	var cta1			= theAd.getStage().$( 'cta1' );
	var cta2			= theAd.getStage().$( 'cta2' );
	
	var logo_tnc			= theAd.getStage().$( 'logo_tnc' );
	
	var bokka1			= theAd.getStage().$( 'bokka1' );
	var bokka2			= theAd.getStage().$( 'bokka2' );
	var bokka3			= theAd.getStage().$( 'bokka3' );
	var bokka4			= theAd.getStage().$( 'bokka4' );
	var bokka5			= theAd.getStage().$( 'bokka5' );
	var bokka6			= theAd.getStage().$( 'bokka6' );
	var bokka7			= theAd.getStage().$( 'bokka7' );
	var bokka8			= theAd.getStage().$( 'bokka8' );
	var bokka9			= theAd.getStage().$( 'bokka9' );
	var bokka10			= theAd.getStage().$( 'bokka10' );
	var bokka11			= theAd.getStage().$( 'bokka11' );
	var bokka12			= theAd.getStage().$( 'bokka12' );
	var bokka13			= theAd.getStage().$( 'bokka13' );
	var bokka14			= theAd.getStage().$( 'bokka14' );
	var bokka15			= theAd.getStage().$( 'bokka15' );
	var bokka16			= theAd.getStage().$( 'bokka16' );
	var bokka17			= theAd.getStage().$( 'bokka17' );
	var bokka18			= theAd.getStage().$( 'bokka18' );
	var bokka19			= theAd.getStage().$( 'bokka19' );
	var bokka20			= theAd.getStage().$( 'bokka20' );
	
	var masterlist			=
	[
		black_cover,
		
		bokka1,
		bokka2,
		bokka3,
		bokka4,
		bokka5,
		bokka6,
		bokka7,
		bokka8,
		bokka9,
		bokka10,
		bokka11,
		bokka12,
		bokka13,
		bokka14,
		bokka15,
		bokka16,
		bokka17,
		bokka18,
		bokka19,
		bokka20,
		
		btxt1,
		btxt2,
		btxt3,
		bg1a,
		bg1b,
		bg1c,
		bg1_eye,
		bg2,
		bg3a,
		bg3b,
		bg3c,
		f3_t1,
		f3_t2_lg1,
		f3_t2_lg2,
		f3_t3,
		f3_t4,
		grad,
		logo_tnc,
		
		cta1,
		cta2
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
	
	function ranNum( min, max )
	{
	    return( Math.floor( Math.random() * ( max - min + 1 )) + min );
	};
	
	/*------------------------------------------------------------
	CTA_ACTIONS
	------------------------------------------------------------*/
	function enableCTA()
	{
		cta_hit.bind('mouseover', ctaOver );
		cta_hit.bind('mouseout', ctaOut );
	};
	
	function ctaOver(){ TweenLite.to(cta2, 0.5, { alpha:1, overwrite:false }); };
	function ctaOut(){ TweenLite.to(cta2, 0.5, { alpha:0, overwrite:false }); };
	
	border.bind('click',function()
	{
		console.trace( 'OVERALL_CLICKED ' );
		window.open(clickTag, "_blank");
	});
	
	cta_hit.bind('click', function()
	{
		console.trace( 'CTA_CLICKED ' );
		window.open(clickTag, "_blank");
	});
		
	/*------------------------------------------------------------
	ANIMATION console.log( ranNum(1, 2) );
	------------------------------------------------------------*/
	function blackCover()
	{
		showObj( black_cover );
		TweenLite.to( black_cover, 0, { alpha:1, overwrite:false });
		TweenLite.from( black_cover, 0.5, { alpha:0, ease:Quad.easeIn, overwrite:false });
	};
	
	function Frame01()
	{
		TweenMax.killAll();
		HideAll();                                            
		
		//SHOW_OBJS
		showObj( btxt1 );
		showObj( bg1_eye );
		showObj( bg1a );showObj( bg1b );showObj( bg1c );
		showObj( bokka1 );showObj( bokka2 );showObj( bokka3 );
		
		//INITIAL_SETTINGS
		TweenLite.to( bokka1, 0, { alpha:0.3, overwrite:false });
		TweenLite.to( bokka2, 0, { alpha:0.3, overwrite:false });
		TweenLite.to( bokka3, 0, { alpha:0.15, overwrite:false });
		TweenLite.to( bg1c, 0, { alpha:0, overwrite:false });
		
		//ANIMATION
		TweenLite.from( bg1_eye, 1.5, { rotation:90, ease:Quad.easeInOut, overwrite:false });
		TweenLite.from( bg1_eye, 6, { scaleX:1.1, scaleY:1.1, overwrite:false });
		TweenLite.from( bg1a, 1.5, { scaleX:1.1, scaleY:1.1, overwrite:false });
		TweenLite.from( bg1b, 1.5, { scaleX:1.1, scaleY:1.1, overwrite:false });
		TweenLite.from( bg1c, 1.5, { scaleX:1.1, scaleY:1.1, overwrite:false });
		TweenLite.from( bg1c, 1.5, { alpha:1, overwrite:false });
		
		TweenLite.to( bokka1, 1.5, { alpha:0.2, rotation:0.01, ease:Quad.easeInOut, x:"-25", y:"5" });
		TweenLite.to( bokka2, 1.5, { alpha:0.1, rotation:0.01, ease:Quad.easeInOut, x:"5", y:"-5" });
		TweenLite.to( bokka3, 1.5, { alpha:0.1, rotation:0.01, ease:Quad.easeInOut, x:"35", y:"-10" });
		
		TweenLite.from( btxt1, 0.5, { alpha:0, ease:Quad.easeIn, delay:1.5, overwrite:false });
		
		//DAISY_CHAIN
		TweenLite.delayedCall( 1.0, blackCover );
		TweenLite.delayedCall( 2.0, Frame02 );
	};
	
	function Frame02()
	{
		TweenLite.to( black_cover, 1, { alpha:0, ease:Quad.easeIn, overwrite:false });
		TweenLite.to( btxt1, 1, { alpha:0, ease:Quad.easeIn, overwrite:false });
		
		//SHOW_OBJS
		showObj( btxt2 );
		showObj( bg2 );
		showObj( bokka4 );showObj( bokka5 );showObj( bokka6 );showObj( bokka7 );
		showObj( bokka8 );showObj( bokka9 );showObj( bokka10 );
		
		//INITIAL_SETTINGS
		TweenLite.to( bokka4, 0, { scaleX:1.2, scaleY:1.2, alpha:0.4, overwrite:false });
		TweenLite.to( bokka5, 0, { scaleX:1.2, scaleY:1.2, alpha:0.4, overwrite:false });
		TweenLite.to( bokka6, 0, { scaleX:1.3, scaleY:1.3, alpha:0.5, overwrite:false });
		TweenLite.to( bokka7, 0, { scaleX:1.3, scaleY:1.3, alpha:0.3, overwrite:false });
		TweenLite.to( bokka8, 0, { scaleX:1.4, scaleY:1.4, alpha:0.2, overwrite:false });
		TweenLite.to( bokka9, 0, { scaleX:1.4, scaleY:1.4, alpha:0.2, overwrite:false });
		TweenLite.to( bokka10, 0, { scaleX:1.4, scaleY:1.4, alpha:0.3, overwrite:false });
		
		//ANIMATION
		TweenLite.from( bg2, 6, { scaleX:1.1, scaleY:1.1, y:"-5", ease:Quad.easeInOut, overwrite:false });
		
		TweenLite.to( bokka4, 2, { alpha:0.3, rotation:0.01, x:"-45", y:"15", overwrite:false });
		TweenLite.to( bokka5, 2, { alpha:0.3, rotation:0.01, x:"45", y:"-15", overwrite:false });
		TweenLite.to( bokka6, 2, { alpha:0.1, rotation:0.01, x:"55", y:"-15", overwrite:false });
		TweenLite.to( bokka7, 2, { alpha:0.2, rotation:0.01, x:"-55", y:"15", overwrite:false });
		TweenLite.to( bokka8, 2, { alpha:0.2, rotation:0.01, x:"25", y:"-25", overwrite:false });
		TweenLite.to( bokka9, 2, { alpha:0.2, rotation:0.01, x:"65", y:"-15", overwrite:false });
		TweenLite.to( bokka10, 2, { alpha:0.2, rotation:0.01, x:"65", y:"25", overwrite:false });
		
		TweenLite.from( btxt2, 0.5, { alpha:0, ease:Quad.easeIn, delay:1.5, overwrite:false });
		
		//DAISY_CHAIN
		TweenLite.delayedCall( 1.5, blackCover );
		TweenLite.delayedCall( 2.5, Frame03 );
	};
	
	function Frame03()
	{
		TweenLite.to( black_cover, 1, { alpha:0, ease:Quad.easeIn, overwrite:false });
		TweenLite.to( btxt2, 1, { alpha:0, ease:Quad.easeIn, overwrite:false });
		
		//SHOW_OBJS
		showObj( btxt3 );
		showObj( bg3a );showObj( bg3b );showObj( bg3c );
		showObj( bokka11 );showObj( bokka12 );showObj( bokka13 );showObj( bokka14 );
		showObj( bokka15 );showObj( bokka16 );showObj( bokka17 );
		
		//INITIAL_SETTINGS
		TweenLite.to( bokka11, 0, { scaleX:1.6, scaleY:1.4, alpha:0.4, overwrite:false });
		TweenLite.to( bokka12, 0, { scaleX:1.6, scaleY:1.4, alpha:0.4, overwrite:false });
		TweenLite.to( bokka13, 0, { scaleX:1.5, scaleY:1.3, alpha:0.5, overwrite:false });
		TweenLite.to( bokka14, 0, { scaleX:1.7, scaleY:1.5, alpha:0.4, overwrite:false });
		TweenLite.to( bokka15, 0, { scaleX:1.7, scaleY:1.5, alpha:0.4, overwrite:false });
		TweenLite.to( bokka16, 0, { scaleX:1.5, scaleY:1.3, alpha:0.5, overwrite:false });
		TweenLite.to( bokka17, 0, { scaleX:1.5, scaleY:1.3, alpha:0.3, overwrite:false });
		
		TweenLite.to( bg3a, 0, { scaleX:1.25, scaleY:1.25, x:0, y:"75", rotation:0.0, overwrite:false });
		TweenLite.to( bg3b, 0, { scaleX:1.25, scaleY:1.25, x:0, y:"75", rotation:0.0, overwrite:false });
		TweenLite.to( bg3c, 0, { scaleX:1.25, scaleY:1.25, x:0, y:"75", rotation:0.0, overwrite:false });
		
		//ANIMATION
		TweenLite.to( bokka11, 5, { scaleX:1, scaleY:1, alpha:0.3, rotation:0.01, x:"65", y:"15", delay:0, overwrite:false });
		TweenLite.to( bokka12, 5, { scaleX:1, scaleY:1, alpha:0.3, rotation:0.01, x:"-65", y:"-15", delay:0, overwrite:false });
		TweenLite.to( bokka13, 5, { scaleX:1, scaleY:1, alpha:0.3, rotation:0.01, x:"-65", y:"15", delay:0, overwrite:false });
		TweenLite.to( bokka14, 5, { scaleX:1, scaleY:1, alpha:0.3, rotation:0.01, x:"65", y:"-15", delay:0, overwrite:false });
		TweenLite.to( bokka15, 5, { scaleX:1, scaleY:1, alpha:0.3, rotation:0.01, x:"-65", y:"-25", delay:0, overwrite:false });
		TweenLite.to( bokka16, 5, { scaleX:1, scaleY:1, alpha:0.3, rotation:0.01, x:"-65", y:"-15", delay:0, overwrite:false });
		TweenLite.to( bokka17, 5, { scaleX:1, scaleY:1, alpha:0.3, rotation:0.01, x:"65", y:"25", delay:0, overwrite:false });
		
		TweenLite.from( bg3a, 2, { scaleX:1.3, scaleY:1.3, rotation:0.01, ease:Quad.easeOut, overwrite:false });
		TweenLite.from( bg3b, 2, { scaleX:1.3, scaleY:1.3, rotation:0.01, ease:Quad.easeOut, overwrite:false });
		TweenLite.from( bg3c, 2, { scaleX:1.3, scaleY:1.3, rotation:0.01, ease:Quad.easeOut, overwrite:false });
		
		TweenLite.to( bg3a, 5, { scaleX:0.50, scaleY:0.50, x:0, y:0, rotation:-0.01, ease:Quad.easeOut, delay:1.75, overwrite:false });
		TweenLite.to( bg3b, 6, { scaleX:0.50, scaleY:0.50, x:0, y:0, rotation:-0.01, ease:Quad.easeOut, delay:2.25, overwrite:false });
		TweenLite.to( bg3c, 6, { scaleX:0.50, scaleY:0.50, x:0, y:0, rotation:-0.01, ease:Quad.easeOut, delay:2.25, overwrite:false });
		TweenLite.from( btxt3, 0.5, { alpha:0, ease:Quad.easeIn, delay:1.5, overwrite:false });
		
		//DAISY_CHAIN
		TweenLite.delayedCall( 1.5, blackCover );
		TweenLite.delayedCall( 2.5, Frame04 )
	};
	
	function Frame04()
	{
		TweenLite.to( black_cover, 1, { alpha:0, ease:Quad.easeIn, overwrite:false });
		TweenLite.to( btxt3, 1, { alpha:0, ease:Quad.easeIn, overwrite:false });
		
		//SHOW_OBJS
		showObj( bokka18 );showObj( bokka19 );showObj( bokka20 );
		showObj( f3_t1 );
		showObj( f3_t3 );showObj( f3_t4 );
		showObj( logo_tnc );showObj( grad );
		showObj( cta1 );
		showObj( cta2 );
		showObj( f3_t2_lg1 );showObj( f3_t2_lg2 );
		
		//INITIAL_SETTINGS
		TweenLite.to( bokka18, 0, { alpha:0.40, overwrite:false });
		TweenLite.to( bokka19, 0, { alpha:0.40, overwrite:false });
		TweenLite.to( bokka20, 0, { alpha:0.25, overwrite:false });
		TweenLite.to( cta2, 0, { alpha:0, overwrite:false });
		
		TweenLite.to( f3_t1, 0, { scaleX:1, scaleY:1, x:0, y:0, rotation:0.0, overwrite:false });
		TweenLite.to( f3_t2_lg1, 0, { alpha:0, overwrite:false });
		TweenLite.to( f3_t2_lg2, 0, { alpha:0, overwrite:false });
		
		//ANIMATION
		TweenLite.from( bokka18, 4, { alpha:0, x:"-25", delay:0, overwrite:false });
		TweenLite.from( bokka19, 4, { alpha:0, x:"25", delay:0, overwrite:false });
		TweenLite.from( bokka20, 4, { alpha:0, x:"75", delay:0, overwrite:false });
		TweenLite.from( bokka18, 6, { scaleX:3, scaleY:3, delay:0, overwrite:false });
		TweenLite.from( bokka19, 6, { scaleX:3, scaleY:3, delay:0, overwrite:false });
		TweenLite.from( bokka20, 6, { scaleX:3, scaleY:3, delay:0, overwrite:false });
		TweenLite.to( bokka18, 1, { alpha:0.3, rotation:0.01, ease:Quad.easeInOut, x:"-25", y:"5", delay:4 });
		TweenLite.to( bokka19, 1, { alpha:0.2, rotation:0.01, ease:Quad.easeInOut, x:"5", y:"-5", delay:4 });
		TweenLite.to( bokka20, 1, { alpha:0.2, rotation:0.01, ease:Quad.easeInOut, x:"35", y:"-10", delay:4 });
		
		//STRING
		TweenLite.from( f3_t1, 1, { alpha:0, delay:0.5, overwrite:false });
		TweenLite.from( f3_t1, 4, { scaleX:1.5, scaleY:1.5, x:"-24", y:"-32", rotation:0.01, ease:Quad.easeInOut, delay:0, overwrite:false });
		
		TweenLite.to( f3_t2_lg1, 3, { scaleX:0.5, scaleY:0.5, rotation:0.01, ease:Quad.easeOut, delay:2, overwrite:false });
		TweenLite.to( f3_t2_lg2, 3, { scaleX:0.5, scaleY:0.5, rotation:0.01, ease:Quad.easeOut, delay:3, overwrite:false });
		TweenLite.from( f3_t2_lg1, 3, { x:"50", y:"75", ease:Quad.easeInOut, delay:2, overwrite:false });
		TweenLite.from( f3_t2_lg2, 3, { x:"50", y:"75", ease:Quad.easeInOut, delay:3, overwrite:false });
		
		TweenLite.to( f3_t2_lg1, 1, { alpha:1, ease:Quad.easeOut, delay:2, overwrite:false });
		TweenLite.to( f3_t2_lg2, 1, { alpha:1, ease:Quad.easeOut, delay:3, overwrite:false });
		
		TweenLite.from( f3_t3, 2, { alpha:0, scaleX:1.5, scaleY:1.5, rotation:0.01, ease:Quad.easeInOut, delay:5, overwrite:false });
		TweenLite.from( f3_t4, 2, { alpha:0, scaleX:1.5, scaleY:1.5, rotation:0.01, ease:Quad.easeInOut, delay:5.5, overwrite:false });
		TweenLite.from( logo_tnc, 2, { alpha:0, scaleX:1.5, scaleY:1.5, rotation:0.01, ease:Quad.easeInOut, delay:5.5, overwrite:false });
		TweenLite.from( cta1, 2, { alpha:0, scaleX:1.5, scaleY:1.5, rotation:0.01, ease:Quad.easeInOut, onComplete:enableCTA, delay:5.5, overwrite:false });
		TweenLite.from( grad, 2, { alpha:0, delay:5.5, overwrite:false });
	};
	
	Frame01();
	
	/*------------------------------------------------------------
	------------------------------------------------------------*/
});