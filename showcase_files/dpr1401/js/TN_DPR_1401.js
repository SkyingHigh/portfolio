AdobeEdge.bootstrapCallback(function (compId)
{
	/*------------------------------------------------------------
	INITIAL_VARS
	------------------------------------------------------------*/
	//PARTICLE_VARS
	var sizes				= ["small"];
	var endY				= 250;
	
	//ANIMATION_VARS
	var theAd				= AdobeEdge.getComposition('DPR');
	var stage				= theAd.getStage();
	
	var txt01				= theAd.getStage().$( 'txt01' );
	var endframe				= theAd.getStage().$( 'EndFrame' );
	var cta					= theAd.getStage().$( 'cta' );
	var overall				= theAd.getStage().$( 'overall' );
	var copyright_2				= theAd.getStage().$( 'copyright_2' );
	var copyright_3				= theAd.getStage().$( 'copyright_3' );
	
	//MAIN_PHOTOS
	var p01					= theAd.getStage().$( 'photo01' );
	var p02					= theAd.getStage().$( 'photo02' );
	var p03					= theAd.getStage().$( 'photo03' );
	var p04					= theAd.getStage().$( 'photo04' );
	var pCL					= theAd.getStage().$( 'photo_cluster' );
	var photo01				= stage.getSymbol( 'photo01' );
	var photo02				= stage.getSymbol( 'photo02' );
	var photo03				= stage.getSymbol( 'photo03' );
	var photo04				= stage.getSymbol( 'photo04' );
	var photoCL				= stage.getSymbol( 'photo_cluster' );
	//SECONDARY_PHOTOS
	var img01				= theAd.getStage().$( 'img01' );
	var img02				= theAd.getStage().$( 'img02' );
	var img03				= theAd.getStage().$( 'img03' );	
	var img04				= theAd.getStage().$( 'img04' );
	var img05				= theAd.getStage().$( 'img05' );
	var img06				= theAd.getStage().$( 'img06' );
	var img07				= theAd.getStage().$( 'img07' );
	var img08				= theAd.getStage().$( 'img08' );
	var img09				= theAd.getStage().$( 'img09' );
	var img10				= theAd.getStage().$( 'img10' );
	var img11				= theAd.getStage().$( 'img11' );
	var img12				= theAd.getStage().$( 'img12' );
	var img13				= theAd.getStage().$( 'img13' );
	var img14				= theAd.getStage().$( 'img14' );
	var img15				= theAd.getStage().$( 'img15' );
	
	var img01c				= stage.getSymbol( 'img01' );
	var img02c				= stage.getSymbol( 'img02' );
	var img03c				= stage.getSymbol( 'img03' );	
	var img04c				= stage.getSymbol( 'img04' );
	var img05c				= stage.getSymbol( 'img05' );
	var img06c				= stage.getSymbol( 'img06' );
	var img07c				= stage.getSymbol( 'img07' );
	var img08c				= stage.getSymbol( 'img08' );
	var img09c				= stage.getSymbol( 'img09' );
	var img10c				= stage.getSymbol( 'img10' );
	var img11c				= stage.getSymbol( 'img11' );
	var img12c				= stage.getSymbol( 'img12' );
	var img13c				= stage.getSymbol( 'img13' );
	var img14c				= stage.getSymbol( 'img14' );
	var img15c				= stage.getSymbol( 'img15' );
	
	var cloud01				= theAd.getStage().$( 'cloud01' );
	var cloud02				= theAd.getStage().$( 'cloud02' );
	var blue_bg				= theAd.getStage().$( 'blue_bg' );
		
	//EMITTER
	var emit				= stage.$('Emitter');
	var emitter_x				= emit.offset().left;
	var emitter_y				= emit.offset().top;
	
	//PARTICLE_STATS
	var createParticles			= true;
	var count				= 0;
	var countTotal				= 5;
	
	//SET_3D
	TweenLite.set( blue_bg,			{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( cloud01,			{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( cloud02,			{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( txt01,			{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});	
	TweenLite.set( p01,			{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( p02,			{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( p03,			{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( p04,			{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( pCL,			{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});	
	TweenLite.set( img01,			{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( img02,			{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( img03,			{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( img04,			{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( img05,			{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( img06,			{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( img07,			{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( img08,			{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( img09,			{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( img10,			{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( img11,			{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( img12,			{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( img13,			{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( img14,			{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( img15,			{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( photoCL.$('img1'), 	{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( photoCL.$('img2'), 	{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( photoCL.$('img3'), 	{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( photoCL.$('img4'), 	{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( photoCL.$('img5'), 	{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	TweenLite.set( photoCL.$('img6'), 	{ css:{ transformPerspective:200, transformStyle:"preserve-3d"}});
	
	//PLACE_THE_OBJECTS
	TweenLite.to( copyright_2, 0, { alpha:0, overwrite:false });
	TweenLite.to( copyright_3, 0, { alpha:0, overwrite:false });
	TweenLite.to( endframe, 0, { alpha:0, overwrite:false });
	TweenLite.to( cta, 0, { alpha:0, overwrite:false });
	TweenLite.to( blue_bg, 0, { css:{ scaleX:10, scaleY:10, z:-1800 }, overwrite:false });
	TweenLite.to( p01, 0, { css:{ alpha:0.1, z:-430 }, overwrite:false });
	TweenLite.to( p02, 0, { css:{ alpha:0.1, z:-530 }, overwrite:false });
	TweenLite.to( p03, 0, { css:{ alpha:0.1, z:-630 }, overwrite:false });
	TweenLite.to( p04, 0, { css:{ alpha:0.1, z:-730 }, overwrite:false });
	TweenLite.to( pCL, 0, { css:{ alpha:0.1 }, overwrite:false });
	TweenLite.to( photo01.$('photo_glow'), 0, { alpha:0, overwrite:false });
	TweenLite.to( photo02.$('photo_glow'), 0, { alpha:0, overwrite:false });
	TweenLite.to( photo03.$('photo_glow'), 0, { alpha:0, overwrite:false });
	TweenLite.to( photo04.$('photo_glow'), 0, { alpha:0, overwrite:false });
	
	//INITIAL_TILES
	TweenLite.to( img01, 0, { css:{ z:-100, x:-100, y:-100 }, overwrite:false });
	TweenLite.to( img02, 0, { css:{ z:-200, x:180, y:-50 }, overwrite:false });
	TweenLite.to( img03, 0, { css:{ z:-300, x:0, y:100 }, overwrite:false });
	TweenLite.to( img04, 0, { css:{ z:-430, x:-100, y:-100 }, overwrite:false });
	TweenLite.to( img05, 0, { css:{ z:-530, x:180, y:-50 }, overwrite:false });
	TweenLite.to( img06, 0, { css:{ z:-630, x:0, y:120 }, overwrite:false });
	TweenLite.to( img07, 0, { css:{ z:-730, x:-100, y:-100 }, overwrite:false });
	TweenLite.to( img08, 0, { css:{ z:-830, x:180, y:-50 }, overwrite:false });
	TweenLite.to( img09, 0, { css:{ z:-930, x:0, y:120 }, overwrite:false });
	TweenLite.to( img10, 0, { css:{ z:-1030, x:-100, y:-100 }, overwrite:false });
	TweenLite.to( img11, 0, { css:{ z:-1130, x:180, y:-50 }, overwrite:false });
	TweenLite.to( img12, 0, { css:{ z:-1230, x:0, y:120 }, overwrite:false });
	TweenLite.to( img13, 0, { css:{ z:-1330, x:-100, y:-100 }, overwrite:false });
	TweenLite.to( img14, 0, { css:{ z:-1430, x:180, y:-50 }, overwrite:false });
	TweenLite.to( img15, 0, { css:{ z:-1530, x:0, y:120 }, overwrite:false });
	TweenLite.to( img01c.$('imgBL'), 0, { alpha:0.75, overwrite:false });
	TweenLite.to( img02c.$('imgBL'), 0, { alpha:0.75, overwrite:false });
	TweenLite.to( img03c.$('imgBL'), 0, { alpha:0.75, overwrite:false });
	TweenLite.to( img04c.$('imgBL'), 0, { alpha:0.90, overwrite:false });
	TweenLite.to( img05c.$('imgBL'), 0, { alpha:0.90, overwrite:false });
	TweenLite.to( img06c.$('imgBL'), 0, { alpha:0.90, overwrite:false });
	TweenLite.to( img07c.$('imgBL'), 0, { alpha:0.90, overwrite:false });
	TweenLite.to( img08c.$('imgBL'), 0, { alpha:0.90, overwrite:false });
	TweenLite.to( img09c.$('imgBL'), 0, { alpha:0.90, overwrite:false });
	TweenLite.to( img10c.$('imgBL'), 0, { alpha:0.90, overwrite:false });
	TweenLite.to( img11c.$('imgBL'), 0, { alpha:0.90, overwrite:false });
	TweenLite.to( img12c.$('imgBL'), 0, { alpha:0.90, overwrite:false });
	TweenLite.to( img13c.$('imgBL'), 0, { alpha:0.90, overwrite:false });
	TweenLite.to( img14c.$('imgBL'), 0, { alpha:0.90, overwrite:false });
	TweenLite.to( img15c.$('imgBL'), 0, { alpha:0.90, overwrite:false });
	TweenLite.to( cloud01, 0, { css:{ alpha:0.50, z:-1600 }, overwrite:false });
	TweenLite.to( cloud02, 0, { css:{ alpha:0.50, z:-1700 }, overwrite:false });
	
	//PHOTO_CLUSTER
	TweenLite.to( photoCL.$('img1'), 0, { css:{ z:-600, x:-150, y:-100 }, overwrite:false });
	TweenLite.to( photoCL.$('img2'), 0, { css:{ z:-700, x:50, y:-50 }, overwrite:false });
	TweenLite.to( photoCL.$('img3'), 0, { css:{ z:-800, x:150, y:100 }, overwrite:false });
	TweenLite.to( photoCL.$('img4'), 0, { css:{ z:-900, x:100, y:100 }, overwrite:false });
	TweenLite.to( photoCL.$('img5'), 0, { css:{ z:-1000, x:-50, y:100 }, overwrite:false });
	TweenLite.to( photoCL.$('img6'), 0, { css:{ z:-1100, x:200, y:-75 }, overwrite:false });
	
	/*------------------------------------------------------------
	CTA_ACTIONS
	------------------------------------------------------------*/
	cta.bind('click',function()
	{
		console.trace( 'CTA_CLICKED ' );
		window.open(clickTag, "_blank");
	});
	
	cta.bind('mouseover',function()
	{
		TweenLite.to( cta, 0.25, { scaleX:1.10, scaleY:1.10, ease:Quad.easeOut, overwrite:false });
	});
	
	cta.bind('mouseout',function()
	{
		TweenLite.to( cta, 0.25, { scaleX:1.0, scaleY:1.00, ease:Quad.easeOut, overwrite:false });
	});
	
	overall.bind('click',function()
	{
		console.trace( 'OVERALL_CLICKED ' );
		window.open(clickTag, "_blank");
	});
	
	/*------------------------------------------------------------
	ANIMATION
	------------------------------------------------------------*/
	
	function scene01()
	{
		//:::::::::::::::::::::::::::::: INITIAL_SETTINGS ::::::::::::::::::::::::::::::
		stage.play(1);
		
		//:::::::::::::::::::::::::::::: ANIMATION ::::::::::::::::::::::::::::::
		TweenLite.from( txt01, 1, { css:{ z:-30 }, ease:Quad.easeOut, overwrite:false });
		TweenLite.from( img01, 1, { css:{ z:-130 }, ease:Quad.easeOut, overwrite:false });
		TweenLite.from( img02, 1, { css:{ z:-230 }, ease:Quad.easeOut, overwrite:false });
		TweenLite.from( img03, 1, { css:{ z:-330 }, ease:Quad.easeOut, overwrite:false });
		
		//:::::::::::::::::::::::::::::: DAISYCHAIN ::::::::::::::::::::::::::::::
		TweenLite.delayedCall( 1.5, scene02 )
	};
	
	function scene02()
	{
		//:::::::::::::::::::::::::::::: INITIAL_SETTINGS ::::::::::::::::::::::::::::::
		stage.play( 1000 );
		
		//:::::::::::::::::::::::::::::: EXIT_ANIMATION ::::::::::::::::::::::::::::::
		TweenLite.to( txt01, 1, { css:{ left:100, top:-50, alpha:0.25, rotationX:-20, rotationY:30 }, delay:0.1, overwrite:false });
		TweenLite.to( img01, 1, { css:{ left:100, top:-50, alpha:0.25, rotationX:-20, rotationY:30 }, delay:0.1, overwrite:false });
		TweenLite.to( img02, 1, { css:{ left:100, top:-50, alpha:0.25, rotationX:-20, rotationY:30 }, delay:0.1, overwrite:false });
		TweenLite.to( img03, 1, { css:{ left:100, top:-50, alpha:0.25, rotationX:-20, rotationY:30 }, delay:0.1, overwrite:false });
		TweenLite.to( img01c.$('imgBL'), 0.5, { alpha:0, delay:0.1, overwrite:false });
		TweenLite.to( img02c.$('imgBL'), 0.5, { alpha:0, delay:0.1, overwrite:false });
		TweenLite.to( img03c.$('imgBL'), 0.5, { alpha:0, delay:0.1, overwrite:false });
		
		TweenLite.to( txt01, 1, { css:{ alpha:1, z:500 }, ease:Quad.easeInOut, delay:0.1, overwrite:false });
		TweenLite.to( img01, 1, { css:{ alpha:1, z:500 }, ease:Quad.easeInOut, delay:0.2, overwrite:false });
		TweenLite.to( img02, 1, { css:{ alpha:1, z:500 }, ease:Quad.easeInOut, delay:0.3, overwrite:false });
		TweenLite.to( img03, 1, { css:{ alpha:1, z:500 }, ease:Quad.easeInOut, delay:0.4, overwrite:false });
		
		//:::::::::::::::::::::::::::::: ANIMATION ::::::::::::::::::::::::::::::
		
		//ROTATIONAL - BG
		TweenLite.to( img04, 1.0, { css:{ rotationX:-10, rotationY:20 }, ease:Quad.easeInOut, delay:0.1, overwrite:false });
		TweenLite.to( img05, 1.0, { css:{ rotationX:-10, rotationY:20 }, ease:Quad.easeInOut, delay:0.1, overwrite:false });
		TweenLite.to( img06, 1.0, { css:{ rotationX:-10, rotationY:20 }, ease:Quad.easeInOut, delay:0.1, overwrite:false });
		TweenLite.to( img04, 0.5, { css:{ rotationX:0, rotationY:0 }, ease:Quad.easeInOut, delay:1.1, overwrite:false });
		TweenLite.to( img05, 0.5, { css:{ rotationX:0, rotationY:0 }, ease:Quad.easeInOut, delay:1.1, overwrite:false });
		TweenLite.to( img06, 0.5, { css:{ rotationX:0, rotationY:0 }, ease:Quad.easeInOut, delay:1.1, overwrite:false });
		//STANDARD - BG
		TweenLite.to( img04, 1.0, { css:{ z:-90, x:-100, y:-100 }, delay:0.5, overwrite:false });
		TweenLite.to( img05, 1.0, { css:{ z:-190, x:180, y:-50 }, delay:0.5, overwrite:false });
		TweenLite.to( img06, 1.0, { css:{ z:-290, x:-50, y:220 }, delay:0.5, overwrite:false });
		TweenLite.to( img04, 0.5, { css:{ z:-100 }, delay:1.5, overwrite:false });
		TweenLite.to( img05, 0.5, { css:{ z:-200 }, delay:1.5, overwrite:false });
		TweenLite.to( img06, 0.5, { css:{ z:-300 }, delay:1.5, overwrite:false });
		//BLUE_COVER
		TweenLite.to( img04c.$('imgBL'), 0.5, { alpha:0.75, delay:0.1, overwrite:false });
		TweenLite.to( img05c.$('imgBL'), 0.5, { alpha:0.75, delay:0.1, overwrite:false });
		TweenLite.to( img06c.$('imgBL'), 0.5, { alpha:0.75, delay:0.1, overwrite:false });
		
		//ROTATIONAL - MAIN
		TweenLite.to( p01, 1.0, { css:{ rotationX:-10, rotationY:20 }, ease:Quad.easeInOut, delay:0.1, overwrite:false });
		TweenLite.to( p01, 0.5, { css:{ rotationX:0, rotationY:0 }, ease:Quad.easeInOut, delay:1.1, overwrite:false });
		//STANDARD - MAIN
		TweenLite.to( p01, 1.0, { css:{ alpha:1, z:10 }, ease:Quad.easeInOut, delay:0.5, overwrite:false });
		TweenLite.to( p01, 0.5, { css:{ z:0 }, ease:Quad.easeOut, delay:1.5, overwrite:false });
		TweenLite.to( photo01.$('photo_glow'), 0.5, { alpha:1, delay:2, overwrite:false });
		TweenLite.to( photo01.$('photo_glow'), 0.5, { alpha:0, delay:2.6, overwrite:false });
		
		//:::::::::::::::::::::::::::::: DAISYCHAIN ::::::::::::::::::::::::::::::
		TweenLite.delayedCall( 2.75, scene03 )
	};
	
	function scene03()
	{
		//:::::::::::::::::::::::::::::: INITIAL_SETTINGS ::::::::::::::::::::::::::::::
		var pixiedust = setInterval( updater, 25 );
		TweenLite.delayedCall( 1.5, cpixie )
		function cpixie()
		{
			clearInterval( pixiedust );
		};
		
		stage.play( 2500 );
		
		//:::::::::::::::::::::::::::::: EXIT_ANIMATION ::::::::::::::::::::::::::::::
		TweenLite.to( p01, 1, { z:30, css:{ z:-30, left:100, top:-50, rotationX:-20, rotationY:-30 }, ease:Back.easeIn, delay:0.3, overwrite:false });
		TweenLite.to( img04, 1, { css:{ z:-130, left:100, top:-50, rotationX:-20, rotationY:-30 }, ease:Back.easeIn, delay:0.3, overwrite:false });
		TweenLite.to( img05, 1, { css:{ z:-230, left:100, top:-50, rotationX:-20, rotationY:-30 }, ease:Back.easeIn, delay:0.3, overwrite:false });
		TweenLite.to( img06, 1, { css:{ z:-330, left:100, top:-50, rotationX:-20, rotationY:-30 }, ease:Back.easeIn, delay:0.3, overwrite:false });
		TweenLite.to( img04c.$('imgBL'), 0.5, { alpha:0, delay:0.75, overwrite:false });
		TweenLite.to( img05c.$('imgBL'), 0.5, { alpha:0, delay:0.75, overwrite:false });
		TweenLite.to( img06c.$('imgBL'), 0.5, { alpha:0, delay:0.75, overwrite:false });
		
		TweenLite.to( p01, 1, { css:{ alpha:1, z:400 }, ease:Back.easeIn, delay:0.3, overwrite:false });
		TweenLite.to( img04, 1, { css:{ alpha:1, z:400 }, ease:Back.easeIn, delay:0.3, overwrite:false });
		TweenLite.to( img05, 1, { css:{ alpha:1, z:400 }, ease:Back.easeIn, delay:0.4, overwrite:false });
		TweenLite.to( img06, 1, { css:{ alpha:1, z:400 }, ease:Back.easeIn, delay:0.5, overwrite:false });
		
		//:::::::::::::::::::::::::::::: ANIMATION ::::::::::::::::::::::::::::::
		
		//ROTATIONAL - BG
		TweenLite.to( img07, 1.0, { css:{ rotationX:-10, rotationY:-20 }, ease:Quad.easeInOut, delay:0.1, overwrite:false });
		TweenLite.to( img08, 1.0, { css:{ rotationX:-10, rotationY:-20 }, ease:Quad.easeInOut, delay:0.1, overwrite:false });
		TweenLite.to( img09, 1.0, { css:{ rotationX:-10, rotationY:-20 }, ease:Quad.easeInOut, delay:0.1, overwrite:false });
		TweenLite.to( img07, 0.5, { css:{ rotationX:0, rotationY:0 }, ease:Quad.easeInOut, delay:1.1, overwrite:false });
		TweenLite.to( img08, 0.5, { css:{ rotationX:0, rotationY:0 }, ease:Quad.easeInOut, delay:1.1, overwrite:false });
		TweenLite.to( img09, 0.5, { css:{ rotationX:0, rotationY:0 }, ease:Quad.easeInOut, delay:1.1, overwrite:false });
		//STANDARD - BG
		TweenLite.to( img07, 1.0, { css:{ z:-90, x:-100, y:-100 }, delay:0.8, overwrite:false });
		TweenLite.to( img08, 1.0, { css:{ z:-190, x:180, y:-50 }, delay:0.8, overwrite:false });
		TweenLite.to( img09, 1.0, { css:{ z:-290, x:50, y:220 }, delay:0.8, overwrite:false });
		TweenLite.to( img07, 0.5, { css:{ z:-100 }, delay:1.8, overwrite:false });
		TweenLite.to( img08, 0.5, { css:{ z:-200 }, delay:1.8, overwrite:false });
		TweenLite.to( img09, 0.5, { css:{ z:-300 }, delay:1.8, overwrite:false });
		//BLUE_COVER
		TweenLite.to( img07c.$('imgBL'), 0.5, { alpha:0.75, delay:0.1, overwrite:false });
		TweenLite.to( img08c.$('imgBL'), 0.5, { alpha:0.75, delay:0.1, overwrite:false });
		TweenLite.to( img09c.$('imgBL'), 0.5, { alpha:0.75, delay:0.1, overwrite:false });
		
		//ROTATIONAL - MAIN
		TweenLite.to( p02, 1.0, { css:{ rotationX:-10, rotationY:-20 }, ease:Quad.easeInOut, delay:0.4, overwrite:false });
		TweenLite.to( p02, 0.5, { css:{ rotationX:0, rotationY:0 }, ease:Quad.easeInOut, delay:1.4, overwrite:false });
		//STANDARD - MAIN
		TweenLite.to( p02, 1.0, { css:{ alpha:1, z:10 }, ease:Quad.easeInOut, delay:0.8, overwrite:false });
		TweenLite.to( p02, 0.5, { css:{ z:0 }, ease:Quad.easeOut, delay:1.8, overwrite:false });
		TweenLite.to( photo02.$('photo_glow'), 0.5, { alpha:1, delay:2.3, overwrite:false });
		TweenLite.to( photo02.$('photo_glow'), 0.5, { alpha:0, delay:2.9, overwrite:false });
		
		TweenLite.to( copyright_2, 0.5, { alpha:1, ease:Quad.easeOut, delay:1.0, overwrite:false });
		
		//:::::::::::::::::::::::::::::: DAISYCHAIN ::::::::::::::::::::::::::::::
		TweenLite.delayedCall( 2.75, scene04 )
	};
	
	function scene04()
	{
		//:::::::::::::::::::::::::::::: INITIAL_SETTINGS ::::::::::::::::::::::::::::::
		var pixiedust = setInterval( updater, 25 );
		TweenLite.delayedCall( 1.5, cpixie )
		function cpixie()
		{
			clearInterval( pixiedust );
		};
		
		stage.play( 4000 );
		
		//:::::::::::::::::::::::::::::: EXIT_ANIMATION ::::::::::::::::::::::::::::::
		TweenLite.to( p02, 1, { z:30, css:{ z:-30, left:100, top:-50, rotationX:20, rotationY:30 }, ease:Back.easeIn, delay:0.3, overwrite:false });
		TweenLite.to( img07, 1, { css:{ z:-130, left:100, top:-50, rotationX:20, rotationY:30 }, ease:Back.easeIn, delay:0.3, overwrite:false });
		TweenLite.to( img08, 1, { css:{ z:-230, left:100, top:-50, rotationX:20, rotationY:30 }, ease:Back.easeIn, delay:0.3, overwrite:false });
		TweenLite.to( img09, 1, { css:{ z:-330, left:100, top:-50, rotationX:20, rotationY:30 }, ease:Back.easeIn, delay:0.3, overwrite:false });
		TweenLite.to( img07c.$('imgBL'), 0.5, { alpha:0, delay:0.75, overwrite:false });
		TweenLite.to( img08c.$('imgBL'), 0.5, { alpha:0, delay:0.75, overwrite:false });
		TweenLite.to( img09c.$('imgBL'), 0.5, { alpha:0, delay:0.75, overwrite:false });
		
		TweenLite.to( p02, 1, { css:{ alpha:1, z:400 }, ease:Back.easeIn, delay:0.3, overwrite:false });
		TweenLite.to( img07, 1, { css:{ z:400 }, ease:Back.easeIn, delay:0.3, overwrite:false });
		TweenLite.to( img08, 1, { css:{ z:400 }, ease:Back.easeIn, delay:0.4, overwrite:false });
		TweenLite.to( img09, 1, { css:{ z:400 }, ease:Back.easeIn, delay:0.5, overwrite:false });
		
		//:::::::::::::::::::::::::::::: ANIMATION ::::::::::::::::::::::::::::::
		
		//ROTATIONAL - BG
		TweenLite.to( img10, 1.0, { css:{ rotationX:-10, rotationY:-20 }, ease:Quad.easeInOut, delay:0.5, overwrite:false });
		TweenLite.to( img11, 1.0, { css:{ rotationX:-10, rotationY:-20 }, ease:Quad.easeInOut, delay:0.5, overwrite:false });
		TweenLite.to( img12, 1.0, { css:{ rotationX:-10, rotationY:-20 }, ease:Quad.easeInOut, delay:0.5, overwrite:false });
		TweenLite.to( img10, 0.5, { css:{ rotationX:0, rotationY:0 }, ease:Quad.easeInOut, delay:1.5, overwrite:false });
		TweenLite.to( img11, 0.5, { css:{ rotationX:0, rotationY:0 }, ease:Quad.easeInOut, delay:1.5, overwrite:false });
		TweenLite.to( img12, 0.5, { css:{ rotationX:0, rotationY:0 }, ease:Quad.easeInOut, delay:1.5, overwrite:false });
		//STANDARD - BG
		TweenLite.to( img10, 1.0, { css:{ z:-90, x:-100, y:-100 }, delay:1.0, overwrite:false });
		TweenLite.to( img11, 1.0, { css:{ z:-190, x:180, y:-50 }, delay:1.0, overwrite:false });
		TweenLite.to( img12, 1.0, { css:{ z:-290, x:-150, y:220 }, delay:1.0, overwrite:false });
		TweenLite.to( img10, 0.5, { css:{ z:-100 }, delay:1.5, overwrite:false });
		TweenLite.to( img11, 0.5, { css:{ z:-200 }, delay:1.5, overwrite:false });
		TweenLite.to( img12, 0.5, { css:{ z:-300 }, delay:1.5, overwrite:false });
		//BLUE_COVER
		TweenLite.to( img10c.$('imgBL'), 0.5, { alpha:0.75, delay:0.1, overwrite:false });
		TweenLite.to( img11c.$('imgBL'), 0.5, { alpha:0.75, delay:0.1, overwrite:false });
		TweenLite.to( img12c.$('imgBL'), 0.5, { alpha:0.75, delay:0.1, overwrite:false });
		
		//ROTATIONAL - MAIN
		TweenLite.to( p03, 1.0, { css:{ rotationX:-10, rotationY:-20 }, ease:Quad.easeInOut, delay:0.6, overwrite:false });
		TweenLite.to( p03, 0.5, { css:{ rotationX:0, rotationY:0 }, ease:Quad.easeInOut, delay:1.6, overwrite:false });
		//STANDARD - MAIN
		TweenLite.to( p03, 1.0, { css:{ alpha:1, z:10 }, ease:Quad.easeInOut, delay:1.0, overwrite:false });
		TweenLite.to( p03, 0.5, { css:{ z:0 }, ease:Quad.easeOut, delay:2.0, overwrite:false });
		TweenLite.to( photo03.$('photo_glow'), 0.5, { alpha:1, delay:2.5, overwrite:false });
		TweenLite.to( photo03.$('photo_glow'), 0.5, { alpha:0, delay:3.1, overwrite:false });
		
		TweenLite.to( copyright_2, 0.5, { alpha:0, ease:Quad.easeOut, delay:1.0, overwrite:false });
		TweenLite.to( copyright_3, 0.5, { alpha:1, ease:Quad.easeOut, delay:1.0, overwrite:false });
		
		//:::::::::::::::::::::::::::::: DAISYCHAIN ::::::::::::::::::::::::::::::
		TweenLite.delayedCall( 2.75, scene05 )
	};
	
	function scene05()
	{
		//:::::::::::::::::::::::::::::: INITIAL_SETTINGS ::::::::::::::::::::::::::::::
		var pixiedust = setInterval( updater, 25 );
		TweenLite.delayedCall( 1.5, cpixie )
		function cpixie()
		{
			clearInterval( pixiedust );
		};
		
		function delayPlay(){ stage.play( 5500 ); };
		TweenLite.delayedCall( 0.25, delayPlay )
		
		//:::::::::::::::::::::::::::::: EXIT_ANIMATION ::::::::::::::::::::::::::::::
		TweenLite.to( p03, 1, { z:30, css:{ z:-30, left:100, top:-50, rotationX:20, rotationY:30 }, ease:Back.easeIn, delay:0.3, overwrite:false });
		TweenLite.to( img10, 1, { css:{ z:-130, left:100, top:-50, rotationX:20, rotationY:30 }, ease:Back.easeIn, delay:0.3, overwrite:false });
		TweenLite.to( img11, 1, { css:{ z:-230, left:100, top:-50, rotationX:20, rotationY:30 }, ease:Back.easeIn, delay:0.3, overwrite:false });
		TweenLite.to( img12, 1, { css:{ z:-330, left:100, top:-50, rotationX:20, rotationY:30 }, ease:Back.easeIn, delay:0.3, overwrite:false });
		TweenLite.to( img10c.$('imgBL'), 0.5, { alpha:0, delay:0.75, overwrite:false });
		TweenLite.to( img11c.$('imgBL'), 0.5, { alpha:0, delay:0.75, overwrite:false });
		TweenLite.to( img12c.$('imgBL'), 0.5, { alpha:0, delay:0.75, overwrite:false });
		
		TweenLite.to( p03, 1, { css:{ alpha:1, z:400 }, ease:Back.easeIn, delay:0.3, overwrite:false });
		TweenLite.to( img10, 1, { css:{ z:400 }, ease:Back.easeIn, delay:0.3, overwrite:false });
		TweenLite.to( img11, 1, { css:{ z:400 }, ease:Back.easeIn, delay:0.4, overwrite:false });
		TweenLite.to( img12, 1, { css:{ z:400 }, ease:Back.easeIn, delay:0.5, overwrite:false });
		
		//:::::::::::::::::::::::::::::: ANIMATION ::::::::::::::::::::::::::::::
		
		//ROTATIONAL - BG
		TweenLite.to( img13, 1.0, { css:{ rotationX:-10, rotationY:-20 }, ease:Quad.easeInOut, delay:0.5, overwrite:false });
		TweenLite.to( img14, 1.0, { css:{ rotationX:-10, rotationY:-20 }, ease:Quad.easeInOut, delay:0.5, overwrite:false });
		TweenLite.to( img15, 1.0, { css:{ rotationX:-10, rotationY:-20 }, ease:Quad.easeInOut, delay:0.5, overwrite:false });
		TweenLite.to( img13, 0.5, { css:{ rotationX:0, rotationY:0 }, ease:Quad.easeInOut, delay:1.5, overwrite:false });
		TweenLite.to( img14, 0.5, { css:{ rotationX:0, rotationY:0 }, ease:Quad.easeInOut, delay:1.5, overwrite:false });
		TweenLite.to( img15, 0.5, { css:{ rotationX:0, rotationY:0 }, ease:Quad.easeInOut, delay:1.5, overwrite:false });
		//STANDARD - BG
		TweenLite.to( img13, 1.0, { css:{ z:-90, x:-100, y:-100 }, delay:1.0, overwrite:false });
		TweenLite.to( img14, 1.0, { css:{ z:-190, x:180, y:-50 }, delay:1.0, overwrite:false });
		TweenLite.to( img15, 1.0, { css:{ z:-290, x:-150, y:220 }, delay:1.0, overwrite:false });
		TweenLite.to( img13, 0.5, { css:{ z:-100 }, delay:1.5, overwrite:false });
		TweenLite.to( img14, 0.5, { css:{ z:-200 }, delay:1.5, overwrite:false });
		TweenLite.to( img15, 0.5, { css:{ z:-300 }, delay:1.5, overwrite:false });
		//BLUE_COVER
		TweenLite.to( img13c.$('imgBL'), 0.5, { alpha:0.75, delay:0.1, overwrite:false });
		TweenLite.to( img14c.$('imgBL'), 0.5, { alpha:0.75, delay:0.1, overwrite:false });
		TweenLite.to( img15c.$('imgBL'), 0.5, { alpha:0.75, delay:0.1, overwrite:false });
		
		//ROTATIONAL - MAIN
		TweenLite.to( p04, 1.0, { css:{ rotationX:-10, rotationY:-20 }, ease:Quad.easeInOut, delay:0.6, overwrite:false });
		TweenLite.to( p04, 0.5, { css:{ rotationX:0, rotationY:0 }, ease:Quad.easeInOut, delay:1.6, overwrite:false });
		//STANDARD - MAIN
		TweenLite.to( p04, 1.0, { css:{ alpha:1, z:10 }, ease:Quad.easeInOut, delay:1.0, overwrite:false });
		TweenLite.to( p04, 0.5, { css:{ z:0 }, ease:Quad.easeOut, delay:2.0, overwrite:false });
		TweenLite.to( photo04.$('photo_glow'), 0.5, { alpha:1, delay:2.5, overwrite:false });
		TweenLite.to( photo04.$('photo_glow'), 0.5, { alpha:0, delay:3.1, overwrite:false });
		
		TweenLite.to( copyright_3, 0.5, { alpha:0, ease:Quad.easeOut, delay:0.5, overwrite:false });
		
		//:::::::::::::::::::::::::::::: DAISYCHAIN ::::::::::::::::::::::::::::::
		TweenLite.delayedCall( 2.75, scene06 )
	};
	
	function scene06()
	{
		//:::::::::::::::::::::::::::::: INITIAL_SETTINGS ::::::::::::::::::::::::::::::
		var pixiedust = setInterval( updater, 100 );
		TweenLite.delayedCall( 1.5, cpixie )
		function cpixie()
		{
			clearInterval( pixiedust );
		};
		
		function delayPlay(){ stage.play( 7000 ); };
		TweenLite.delayedCall( 0.25, delayPlay );
		
		//:::::::::::::::::::::::::::::: EXIT_ANIMATION ::::::::::::::::::::::::::::::
		TweenLite.to( p04, 1, { z:30, css:{ z:-30, left:100, top:-50, alpha:0.25, rotationX:20, rotationY:30 }, ease:Back.easeIn, delay:0.0, overwrite:false });
		TweenLite.to( img13, 1, { css:{ z:-130, left:100, top:-50, alpha:0.25, rotationX:20, rotationY:30 }, ease:Back.easeIn, delay:0.0, overwrite:false });
		TweenLite.to( img14, 1, { css:{ z:-230, left:100, top:-50, alpha:0.25, rotationX:20, rotationY:30 }, ease:Back.easeIn, delay:0.0, overwrite:false });
		TweenLite.to( img15, 1, { css:{ z:-330, left:100, top:-50, alpha:0.25, rotationX:20, rotationY:30 }, ease:Back.easeIn, delay:0.0, overwrite:false });
		
		TweenLite.to( p04, 1, { css:{ alpha:1, z:400 }, ease:Back.easeIn, delay:0.0, overwrite:false });
		TweenLite.to( img13, 1, { css:{ alpha:1, z:400 }, ease:Back.easeIn, delay:0.0, overwrite:false });
		TweenLite.to( img14, 1, { css:{ alpha:1, z:400 }, ease:Back.easeIn, delay:0.1, overwrite:false });
		TweenLite.to( img15, 1, { css:{ alpha:1, z:400 }, ease:Back.easeIn, delay:0.2, overwrite:false });
		
		//:::::::::::::::::::::::::::::: ANIMATION ::::::::::::::::::::::::::::::
		TweenLite.to( pCL, 1, { css:{ alpha:1 }, delay:0.5, overwrite:false });
		TweenLite.to( photoCL.$('img1'), 1, { css:{ top:-150, z:400 }, ease:Quad.easeInOut, delay:0.5, overwrite:false });
		TweenLite.to( photoCL.$('img2'), 1, { css:{ top:-150, z:400 }, ease:Quad.easeInOut, delay:0.6, overwrite:false });
		TweenLite.to( photoCL.$('img3'), 1, { css:{ top:-150, z:400 }, ease:Quad.easeInOut, delay:0.7, overwrite:false });
		TweenLite.to( photoCL.$('img4'), 1, { css:{ top:-150, z:400 }, ease:Quad.easeInOut, delay:0.8, overwrite:false });
		TweenLite.to( photoCL.$('img5'), 1, { css:{ top:-150, z:400 }, ease:Quad.easeInOut, delay:0.9, overwrite:false });
		TweenLite.to( photoCL.$('img6'), 1, { css:{ top:-150, z:400 }, ease:Quad.easeInOut, delay:1.0, overwrite:false });
		
		TweenLite.to( cloud01, 1, { css:{ alpha:1.0, z:400 }, ease:Quad.easeInOut, delay:1.1, overwrite:false });
		TweenLite.to( cloud02, 1, { css:{ alpha:1.0, z:400 }, ease:Quad.easeInOut, delay:1.2, overwrite:false });
		
		//:::::::::::::::::::::::::::::: DAISYCHAIN ::::::::::::::::::::::::::::::
		TweenLite.delayedCall( 1.5, scene07 )
	};
	
	function scene07()
	{	
		stage.play( 8510 );
		TweenLite.to( endframe, 1, { alpha:1, delay:0.00, overwrite:false });
		TweenLite.to( cta, 1, { alpha:1, delay:0.50, overwrite:false });
	};
	
	scene01();
	
	//TweenLite.from( photo01, 1, { alpha:0, z:-500, rotation:10, ease:Quad.easeInOut, delay:1, overwrite:false });
	
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
	
	//console.trace( 'hello ' + emitter_x );
	
	var pixiedust = setInterval( updater, 25 ); 
	
	TweenLite.delayedCall( 1.5, cpixie )
	
	function cpixie()
	{
		clearInterval( pixiedust );
	};
	
	
	
	/*------------------------------------------------------------
	------------------------------------------------------------*/
	
	/*------------------------------------------------------------
	------------------------------------------------------------*/
	
});