AdobeEdge.bootstrapCallback(function (compId)
{
	/*------------------------------------------------------------
	--------------------------------------------------------------
	SAFARI DETECTION FOR FIXING 3D GLITCHES
	--------------------------------------------------------------
	------------------------------------------------------------*/
	var nVer = navigator.appVersion;
	var nAgt = navigator.userAgent;
	var browserName  = navigator.appName;
	var fullVersion  = ''+parseFloat(navigator.appVersion); 
	var majorVersion = parseInt(navigator.appVersion,10);
	var nameOffset,verOffset,ix;
	var itsSafari = false;
	
	// In Safari, the true version is after "Safari" or after "Version" 
	if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
		browserName = "Safari";
		itsSafari = true;
		fullVersion = nAgt.substring(verOffset+7);
		if ((verOffset=nAgt.indexOf("Version"))!=-1) 
			fullVersion = nAgt.substring(verOffset+8);
	};
	
	/*------------------------------------------------------------
	--------------------------------------------------------------
	************ (S)HERMAN (H)UANG - INITIAL_SETTINGS ************
	--------------------------------------------------------------
	------------------------------------------------------------*/
	var theAd 				= AdobeEdge.getComposition('MDA');
	var stage				= theAd.getStage();
	
	var holder				= stage.getSymbol( 'holder' ); //I tacked this on to add z depth for safari bugs.
	
	//STAGE_ELEMENTS
	var cta					= stage.$( 'cta' );
	var border				= stage.$( 'border' );
	var cover				= stage.$( 'cover' );
	var rollover				= stage.$( 'rollover' );
	
	//PRIMARY_ELEMENTS
	var elements0A				= holder.getSymbol( 'elements1' );
	var elements0X				= holder.getSymbol( 'elements1_1' );
	var elements0B				= holder.getSymbol( 'elements2' );
	var elements1				= holder.$( 'elements1' );
	var elements1_1				= holder.$( 'elements1_1' );
	var elements2				= holder.$( 'elements2' );
	var ellipses1				= elements0A.$( 'ellipses1' );
	var ellipses2				= elements0A.$( 'ellipses2' );
	var ellipses3				= elements0A.$( 'ellipses3' );
	var cres1				= elements0A.$( 'cres1' );
	var cres2				= elements0A.$( 'cres2' );
	var circle1				= elements0X.$( 'circle1' );
	var circle2				= elements0X.$( 'circle2' );
	var circle3				= elements0X.$( 'circle3' );
	var dot					= elements0A.$( 'dot' );
	var dottedline1				= elements0A.$( 'dottedline1' );
	var dottedline2				= elements0A.$( 'dottedline2' );
	var dottedline3				= elements0A.$( 'dottedline3' );
	var dottedline4				= elements0A.$( 'dottedline4' );
	var line				= elements0A.$( 'line' );
	var sun					= elements0A.$( 'sun' );
	var whitebox				= elements0A.$( 'whitebox' );
	var globe				= elements0X.$( 'globe' );
	var continents				= elements0A.$( 'continents' );
	
	//TEXT
	var t1a					= elements0B.$( 't1a' );
	var t1b					= elements0B.$( 't1b' );
	var t1c					= elements0B.$( 't1c' );
	var t1d					= elements0B.$( 't1d' );
	var t1_highlight			= elements0B.$( 't1_highlight' );
	
	var t2a					= elements0B.$( 't2a' );
	var t2b					= elements0B.$( 't2b' );
	var t2c					= elements0B.$( 't2c' );
	var t2d					= elements0B.$( 't2d' );
	var t2_highlight1			= elements0B.$( 't2_highlight1' );
	var t2_highlight2			= elements0B.$( 't2_highlight2' );
	
	var t3a					= elements0B.$( 't3a' );
	var t3b					= elements0B.$( 't3b' );
	var t3c					= elements0B.$( 't3c' );
	var t3_highlight			= elements0B.$( 't3_highlight' );
	
	var t4a					= elements0B.$( 't4a' );
	var t4b					= elements0B.$( 't4b' );
	var t4c					= elements0B.$( 't4c' );
	var t4_highlight			= elements0B.$( 't4_highlight' );
	
	var t5a					= stage.$( 't5a' );
	var t5b					= stage.$( 't5b' );
	var t5_highlight			= stage.$( 't5_highlight' );
	
	var elements				=
	[
		elements0A,
		elements0X,
		elements0B,
		elements1,
		elements1_1,
		elements2,
		ellipses1,
		ellipses2,
		ellipses3,
		cres1,
		cres2,
		circle1,
		circle2,
		circle3,
		t1a,
		t1b,
		t1c,
		t1d,
		t1_highlight,
		t2a,
		t2b,
		t2c,
		t2d,
		t2_highlight1,
		t2_highlight2,
		t3a,
		t3b,
		t3c,
		t3_highlight,
		t4a,
		t4b,
		t4c,
		t4_highlight,
		t5a,
		t5b,
		t5_highlight,
		dot,
		dottedline1,
		dottedline2,
		dottedline3,
		dottedline4,
		line,
		sun,
		whitebox,
		globe,
		continents,
		rollover
	];
	
	/*------------------------------------------------------------
	--------------------------------------------------------------
	RESET_OBJS
	--------------------------------------------------------------
	------------------------------------------------------------*/
	function resetObj( obj )
	{
		TweenLite.to( obj, 0, { z:0, rotation:0, rotationX:0, rotationY:0, rotationZ:0, scaleX:1, scaleY:1, alpha:0, overwrite:false });	
		//ONLY USE THE NEXT LINE IF YOU WANT TO TWEEN THE Z PROPERTY
		//TweenLite.set( obj, {css:{transformPerspective:600, transformStyle:"preserve-3d"}});
	};
	
	function showObj( obj )
	{
		TweenLite.to( obj, 0, { alpha:1, overwrite:false });
	};
	
	//HIDE_THE_OBJECTS
	function HideAll()
	{
		for( i=1; i<elements.length; i++ )
		{
			resetObj(elements[i])
		};
	};
	
	//INITIALIZE_THE_AD
	function init()
	{
		for( i=0; i<elements.length; i++ )
		{
			TweenLite.set( elements[i], { transformOrigin:"50% 50%", css:{transformPerspective:200, transformStyle:"preserve-3d"}});
		;}
		
		TweenLite.set( holder, 0, { z:100 });
		HideAll();
		TweenLite.to( elements1, 0, { x:2, y:-43 });
		TweenLite.to( elements1_1, 0, { x:2, y:-43 });
		TweenLite.to( elements2, 0, { x:2, y:-43 });
	};
	
	init();
	
	/*------------------------------------------------------------
	--------------------------------------------------------------
	ANIMATION
	TweenLite.from( rise, 3, { alpha:0, clip:"rect(95px 173px 95px 0px)", ease:Quad.easeInOut, delay:Num-1, overwrite:false }); 
	--------------------------------------------------------------
	------------------------------------------------------------*/
	
	function Frame01()
	{	
		//cta.show();
		//EnableCTA();
		//TweenLite.to( bg2, 0, { alpha:0, overwrite:false });
		showObj(ellipses1);
		showObj(ellipses2);
		showObj(ellipses3);
		showObj(cres1);
		showObj(cres2);
		showObj(circle1);
		showObj(circle2);
		showObj(elements1);
		showObj(elements1_1);
		showObj(elements2);
		
		//ANIMATION
		TweenLite.to( cover, 1, { autoAlpha:0, overwrite:false });
		TweenLite.from( ellipses1, 1, {  alpha:0, rotation:140, delay:1, overwrite:false });
		TweenLite.from( ellipses2, 1, {  alpha:0, rotation:-160, delay:1, overwrite:false });
		TweenLite.from( ellipses3, 1, {  alpha:0, rotation:150, delay:1, overwrite:false });
		TweenLite.from( cres1, 3, {  clip:"rect(300px 300px 300px 0px)", rotation:-180, overwrite:false });
		TweenLite.from( cres2, 3, {  clip:"rect(300px 300px 300px 0px)", rotation:-180, overwrite:false });
		TweenLite.from( elements1, 0.5, { z:-350, transformOrigin:"50% 50%", rotationX:-180, rotationY:-160, ease:Quad.easeOut, overwrite:false });
		TweenLite.from( elements1_1, 0.5, { z:-350, transformOrigin:"50% 50%", rotationX:-180, rotationY:-160, ease:Quad.easeOut, overwrite:false });
		TweenLite.from( elements2, 0.5, { z:-350, transformOrigin:"50% 50%", rotationX:-180, rotationY:-160, ease:Quad.easeOut, overwrite:false });
		
		//DAISYCHAIN
		TweenLite.delayedCall( 1, Frame02 );
		
	};
	
	function Frame02()
	{
		showObj(t1a);
		showObj(t1b);
		showObj(t1c);
		showObj(t1d);
		showObj(t1_highlight);
		
		//ANIMATION
		TweenLite.to( cres1, 1, { rotationY:360, ease:Quad.easeInOut, delay:0, overwrite:false });
		TweenLite.to( cres2, 1, { rotationY:360, ease:Quad.easeInOut, delay:0, overwrite:false });
		TweenLite.to( ellipses1, 1, { rotationY:360, ease:Quad.easeInOut, delay:0.0, overwrite:false });
		TweenLite.to( ellipses2, 1, { rotationY:360, ease:Quad.easeInOut, delay:0.0, overwrite:false });
		TweenLite.to( ellipses3, 1, { rotationY:360, ease:Quad.easeInOut, delay:0.0, overwrite:false });
		TweenLite.to( circle1, 0.5, { z:-20, alpha:0, rotationY:90, ease:Quad.easeIn, delay:0, overwrite:false });
		TweenLite.from( circle2, 0.5, { z:-20, alpha:0, rotationY:-90, ease:Quad.easeOut, delay:0.5, overwrite:false });
		
		TweenLite.from( t1a, 0.5, { clip:"rect( 0px 80px 300px 0px)", ease:Quad.easeInOut, delay:0.5, overwrite:false });
		TweenLite.from( t1b, 0.5, { clip:"rect( 0px 60px 300px 0px)", ease:Quad.easeInOut, delay:0.6, overwrite:false });
		TweenLite.from( t1c, 0.5, { clip:"rect( 0px 40px 300px 0px)", ease:Quad.easeInOut, delay:0.7, overwrite:false });
		TweenLite.from( t1d, 0.5, { clip:"rect( 0px 90px 300px 0px)", ease:Quad.easeInOut, delay:0.8, overwrite:false });
		TweenLite.from( t1_highlight, 0.75, { clip:"rect( 0px 100px 300px 0px)", ease:Quad.easeInOut, delay:0.8, overwrite:false });
		
		TweenLite.to( cres1, 10, { rotation:"20", delay:2.5, overwrite:false });
		TweenLite.to( cres2, 10, { rotation:"20", delay:2.5, overwrite:false });
		
		//DAISYCHAIN
		TweenLite.to( elements1, 1, { z:-90, rotationX:"20", rotationY:"30", ease:Quad.easeIn, delay:2.0, overwrite:false });
		TweenLite.to( elements1_1, 1, { z:-90, rotationX:"20", rotationY:"30", ease:Quad.easeIn, delay:2.0, overwrite:false });
		TweenLite.to( elements2, 1, { z:-90, rotationX:"20", rotationY:"30", ease:Quad.easeIn, delay:2.0, overwrite:false });
		TweenLite.delayedCall( 2.5, Frame03 );
	};
	
	function Frame03()
	{
		showObj(dottedline1);
		showObj(t2a);
		showObj(t2b);
		showObj(t2c);
		showObj(t2d);
		showObj(t2_highlight1);
		showObj(t2_highlight2);
		
		//ANIMATION
		TweenLite.to( elements1, 1, { z:0, x:2, y:129, rotationX:0, rotationY:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( elements1_1, 1, { z:0, x:2, y:129, rotationX:0, rotationY:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( elements2, 1, { z:0, x:2, y:129, rotationX:0, rotationY:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.from( dottedline1, 1, { clip:"rect(60px 300px 300px 0px)", ease:Quad.easeInOut, overwrite:false });
		
		TweenLite.to( t1a, 0.5, { alpha:0, delay:1.0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( t1b, 0.5, { alpha:0, delay:1.1, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( t1c, 0.5, { alpha:0, delay:1.2, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( t1d, 0.5, { alpha:0, delay:1.3, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( t1_highlight, 0.5, { alpha:0, delay:1.2, ease:Quad.easeInOut, overwrite:false });
		
		TweenLite.from( t2a, 0.5, { clip:"rect( 0px 50px 401px 0px)", ease:Quad.easeInOut, delay:0.5, overwrite:false });
		TweenLite.from( t2b, 0.5, { clip:"rect( 0px 50px 401px 0px)", ease:Quad.easeInOut, delay:0.6, overwrite:false });
		TweenLite.from( t2c, 0.5, { clip:"rect( 0px 50px 401px 0px)", ease:Quad.easeInOut, delay:0.7, overwrite:false });
		TweenLite.from( t2d, 0.5, { clip:"rect( 0px 20px 401px 0px)", ease:Quad.easeInOut, delay:0.8, overwrite:false });
		TweenLite.from( t2_highlight1, 1, { clip:"rect( 0px 60px 401px 0px)", ease:Quad.easeInOut, delay:0.6, overwrite:false });
		TweenLite.from( t2_highlight2, 1, { clip:"rect( 0px 20px 401px 0px)", ease:Quad.easeInOut, delay:0.9, overwrite:false });
		
		//DAISYCHAIN
		TweenLite.to( elements1, 1, { z:-90, rotationX:"-30", rotationY:"-20", ease:Quad.easeIn, delay:2.5, overwrite:false });
		TweenLite.to( elements1_1, 1, { z:-90, rotationX:"-30", rotationY:"-20", ease:Quad.easeIn, delay:2.5, overwrite:false });
		TweenLite.to( elements2, 1, { z:-90, rotationX:"-30", rotationY:"-20", ease:Quad.easeIn, delay:2.5, overwrite:false });
		TweenLite.delayedCall( 3.0, Frame04 );
	};
	
	function Frame04()
	{
		showObj(globe);
		showObj(continents);
		showObj(dottedline2);
		showObj(dottedline3);
		showObj(dot);
		showObj(t3a);
		showObj(t3b);
		showObj(t3c);
		showObj(t3_highlight);
		TweenLite.to( t3a, 0, { clip:"rect( 0px 300px 300px 0px)", ease:Quad.easeInOut, delay:0, overwrite:false });
		TweenLite.to( t3b, 0, { clip:"rect( 0px 300px 300px 0px)", ease:Quad.easeInOut, delay:0, overwrite:false });
		TweenLite.to( t3c, 0, { clip:"rect( 0px 300px 300px 0px)", ease:Quad.easeInOut, delay:0, overwrite:false });
		
		//ANIMATION
		TweenLite.from( globe, 1, { alpha:0, ease:Quad.easeOut, delay:0.5, overwrite:false });
		TweenLite.from( continents, 0.5, { alpha:0, ease:Quad.easeOut, delay:1, overwrite:false });
		TweenLite.to( continents, 3, { x:"-40", ease:Quad.easeInOut, delay:0, overwrite:false });
		TweenLite.to( ellipses2, 0.5, { rotation:-3, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( elements1, 1, { z:0, x:219, y:9, rotationX:0, rotationY:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( elements1_1, 1, { z:0, x:219, y:9, rotationX:0, rotationY:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( elements2, 1, { z:0, x:219, y:9, rotationX:0, rotationY:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.from( dottedline2, 1, { clip:"rect(0px 523px 300px 300px)", ease:Quad.easeInOut, delay:0.5, overwrite:false });
		TweenLite.from( dottedline3, 0.5, { clip:"rect(180px 300px 300px 0px)", ease:Quad.easeInOut, delay:1, overwrite:false });
		TweenLite.from( dot, 1, { alpha:0, scaleX:0.01, scaleY:0.01, ease:Back.easeOut, delay:1.0, overwrite:false });
		
		TweenLite.to( t2a, 0.5, { clip:"rect( 0px 300px 401px 300px)", ease:Quad.easeInOut, delay:0.0, overwrite:false });
		TweenLite.to( t2b, 0.5, { clip:"rect( 0px 300px 401px 300px)", ease:Quad.easeInOut, delay:0.1, overwrite:false });
		TweenLite.to( t2c, 0.5, { clip:"rect( 0px 300px 401px 300px)", ease:Quad.easeInOut, delay:0.2, overwrite:false });
		TweenLite.to( t2d, 0.5, { clip:"rect( 0px 300px 401px 300px)", ease:Quad.easeInOut, delay:0.3, overwrite:false });
		TweenLite.to( t2_highlight1, 0.5, { clip:"rect( 0px 300px 401px 300px)", ease:Quad.easeInOut, delay:0.0, overwrite:false });
		TweenLite.to( t2_highlight2, 0.5, { clip:"rect( 0px 300px 401px 300px)", ease:Quad.easeInOut, delay:0.4, overwrite:false });
		
		TweenLite.from( t3a, 0.5, { clip:"rect( 0px 60px 300px 0px)", ease:Quad.easeInOut, delay:0.8, overwrite:false });
		TweenLite.from( t3b, 0.5, { clip:"rect( 0px 60px 300px 0px)", ease:Quad.easeInOut, delay:0.9, overwrite:false });
		TweenLite.from( t3c, 0.5, { clip:"rect( 0px 60px 300px 0px)", ease:Quad.easeInOut, delay:1.0, overwrite:false });
		TweenLite.from( t3_highlight, 0.5, { clip:"rect( 0px 60px 300px 0px)", ease:Quad.easeInOut, delay:1.0, overwrite:false });
		
		//DAISYCHAIN
		TweenLite.to( elements1, 1, { z:-90, rotationX:"30", rotationY:"-30", ease:Quad.easeIn, delay:2.5, overwrite:false });
		TweenLite.to( elements1_1, 1, { z:-90, rotationX:"30", rotationY:"-30", ease:Quad.easeIn, delay:2.5, overwrite:false });
		TweenLite.to( elements2, 1, { z:-90, rotationX:"30", rotationY:"-30", ease:Quad.easeIn, delay:2.5, overwrite:false });
		TweenLite.delayedCall( 3.0, Frame05 );
	};
	
	function Frame05()
	{
		showObj(line);
		showObj(sun);
		showObj(t4a);
		showObj(t4b);
		showObj(t4c);
		showObj(t4_highlight);
		
		//ANIMATION
		TweenLite.to( elements1, 1, { z:0, x:-220, y:-150, rotationX:0, rotationY:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( elements1_1, 1, { z:0, x:-220, y:-150, rotationX:0, rotationY:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( elements2, 1, { z:0, x:-220, y:-150, rotationX:0, rotationY:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( ellipses3, 0.5, { rotation:-13, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( sun, 5, { rotation:"-15", ease:Quad.easeInOut, delay:0.5, overwrite:false });
		
		TweenLite.to( t3a, 0.5, { clip:"rect( 0px 523px 300px 300px)", ease:Quad.easeInOut, delay:0.0, overwrite:false });
		TweenLite.to( t3b, 0.5, { clip:"rect( 0px 523px 300px 300px)", ease:Quad.easeInOut, delay:0.1, overwrite:false });
		TweenLite.to( t3c, 0.5, { clip:"rect( 0px 523px 300px 300px)", ease:Quad.easeInOut, delay:0.2, overwrite:false });
		TweenLite.to( t3_highlight, 0.5, { clip:"rect( 0px 300px 401px 300px)", ease:Quad.easeInOut, delay:0.0, overwrite:false });
		
		TweenLite.from( t4a, 0.5, { clip:"rect( 0px 300px 300px 0px)", ease:Quad.easeInOut, delay:0.5, overwrite:false });
		TweenLite.from( t4b, 0.5, { clip:"rect( 0px 300px 300px 0px)", ease:Quad.easeInOut, delay:0.6, overwrite:false });
		TweenLite.from( t4c, 0.5, { clip:"rect( 0px 300px 300px 0px)", ease:Quad.easeInOut, delay:0.7, overwrite:false });
		TweenLite.from( t4_highlight, 1, { clip:"rect( 0px 300px 300px 0px)", ease:Quad.easeInOut, delay:0.6, overwrite:false });
		
		//DAISYCHAIN
		TweenLite.to( elements1, 1, { z:-80, rotationX:"-20", rotationY:"50", ease:Quad.easeIn, delay:2.5, overwrite:false });
		TweenLite.to( elements1_1, 1, { z:-80, rotationX:"-20", rotationY:"50", ease:Quad.easeIn, delay:2.5, overwrite:false });
		TweenLite.to( elements2, 1, { z:-80, rotationX:"-20", rotationY:"50", ease:Quad.easeIn, delay:2.5, overwrite:false });
		TweenLite.delayedCall( 3.0, Frame06 );
	};
	
	function Frame06()
	{
		//2.5s left
		showObj(dottedline4);
		showObj(whitebox);
		showObj(circle3);
		showObj(t5a);
		showObj(t5b);
		showObj(t5_highlight);
		showObj( rollover );
		
		//ANIMATION
		TweenLite.to( elements1, 1, { x:3, y:-95, rotationX:0, rotationY:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( elements1_1, 1, { x:3, y:-95, rotationX:0, rotationY:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( elements2, 1, { x:3, y:-95, rotationX:0, rotationY:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( circle2, 0.5, { z:-20, alpha:0, rotationY:90, ease:Quad.easeIn, delay:0, overwrite:false });
		TweenLite.from( circle3, 0.5, { z:-20, alpha:0, rotationY:-90, ease:Quad.easeOut, delay:0.5, overwrite:false });
		
		TweenLite.from( whitebox, 1, { alpha:0, delay:0, delay:1, overwrite:false });
		TweenLite.from( dottedline4, 0.5, { alpha:0, ease:Quad.easeInOut, delay:0, overwrite:false });
		TweenLite.to( line, 0.5, { alpha:0, ease:Quad.easeInOut, delay:0, overwrite:false });
		TweenLite.to( sun, 0.5, { alpha:0, rotation:"-15", ease:Quad.easeInOut, delay:0, overwrite:false });
		TweenLite.to( t4a, 0.5, { clip:"rect( 0px 300px 300px 300px)", ease:Quad.easeInOut, delay:0.0, overwrite:false });
		TweenLite.to( t4b, 0.5, { clip:"rect( 0px 300px 300px 300px)", ease:Quad.easeInOut, delay:0.1, overwrite:false });
		TweenLite.to( t4c, 0.5, { clip:"rect( 0px 300px 300px 300px)", ease:Quad.easeInOut, delay:0.2, overwrite:false });
		TweenLite.to( t4_highlight, 0.5, { clip:"rect( 0px 300px 401px 300px)", ease:Quad.easeInOut, delay:0.0, overwrite:false });
		
		TweenLite.from( t5a, 1, { clip:"rect( 0px 0px 250px 0px)", ease:Quad.easeInOut, delay:0.5, overwrite:false });
		TweenLite.from( t5b, 1, { clip:"rect( 0px 0px 250px 0px)", ease:Quad.easeInOut, delay:0.6, overwrite:false });
		TweenLite.from( t5_highlight, 1, { clip:"rect( 0px 0px 250px 0px)", ease:Quad.easeInOut, delay:0.7, overwrite:false });
		TweenLite.from( rollover, 1, { alpha:0, ease:Quad.easeInOut, delay:2.5, overwrite:false });
		
		TweenLite.delayedCall( 3.5, Frame07 )
	};
	
	function Frame07()
	{
		EnableCTA();
		mouseCheck();
	};
	
	Frame01();
	
	/*------------------------------------------------------------
	--------------------------------------------------------------
	CTA_ACTIONS
	--------------------------------------------------------------
	------------------------------------------------------------*/
	var withinAd = false;
	
	function ctaClick()
	{
		console.trace( 'CTA_CLICKED ' );
		window.open(clickTag, "_blank");
	};
	
	function EnableCTA()
	{
		border.bind( 'mouseover', borderOver );
		border.bind( 'mouseout', borderOut );
	};
	
	function borderOver(){ withinAd = true; ctaOut(); };
	function borderOut(){ withinAd = false; };
	//cta.bind( 'click', ctaClick );
	
	
	/*------------------------------------------------------------
	--------------------------------------------------------------
	KILLSWITCH
	--------------------------------------------------------------
	------------------------------------------------------------*/	
	function killThemAll()
	{
		TweenLite.killTweensOf( cres1 );
		TweenLite.killTweensOf( cres2 );
		TweenLite.killTweensOf( continents );
		TweenLite.killTweensOf( dottedline4 );
		TweenLite.killTweensOf( line );
		TweenLite.killTweensOf( sun );
	
		TweenLite.killTweensOf( t5a );
		TweenLite.killTweensOf( t5b );
		TweenLite.killTweensOf( t5_highlight );
	
		TweenLite.killTweensOf( t2a );
		TweenLite.killTweensOf( t2b );
		TweenLite.killTweensOf( t2c );
		TweenLite.killTweensOf( t2d );
		TweenLite.killTweensOf( t2_highlight1 );
		TweenLite.killTweensOf( t2_highlight2 );
	
		TweenLite.killTweensOf( t3a );
		TweenLite.killTweensOf( t3b );
		TweenLite.killTweensOf( t3c );
		TweenLite.killTweensOf( t3_highlight );
	
		TweenLite.killTweensOf( t4a );
		TweenLite.killTweensOf( t4b );
		TweenLite.killTweensOf( t4c );
		TweenLite.killTweensOf( t4_highlight );
	
		TweenLite.killTweensOf( whitebox );	
		TweenLite.killTweensOf( elements1 );
		TweenLite.killTweensOf( elements1_1 );
		TweenLite.killTweensOf( elements2 );
	};
	
	/*------------------------------------------------------------
	--------------------------------------------------------------
	JQUERY_MOUSE_CHECKER
	--------------------------------------------------------------
	------------------------------------------------------------*/	
	var posT = false;
	var posL = false;
	var posR = false;
	var posC = true;
	
	function clearTop()
	{		
		posT = false;
		
		TweenLite.to( t2a, 0.5, { clip:"rect( 0px 300px 401px 300px)", ease:Quad.easeInOut, delay:0.0, overwrite:false });
		TweenLite.to( t2b, 0.5, { clip:"rect( 0px 300px 401px 300px)", ease:Quad.easeInOut, delay:0.1, overwrite:false });
		TweenLite.to( t2c, 0.5, { clip:"rect( 0px 300px 401px 300px)", ease:Quad.easeInOut, delay:0.2, overwrite:false });
		TweenLite.to( t2d, 0.5, { clip:"rect( 0px 300px 401px 300px)", ease:Quad.easeInOut, delay:0.3, overwrite:false });
		TweenLite.to( t2_highlight1, 0.5, { clip:"rect( 0px 300px 401px 300px)", ease:Quad.easeInOut, delay:0.0, overwrite:false });
		TweenLite.to( t2_highlight2, 0.5, { clip:"rect( 0px 300px 401px 300px)", ease:Quad.easeInOut, delay:0.4, overwrite:false });
	};
	
	function clearLeft()
	{
		posL = false;
		TweenLite.to( t3a, 0.5, { clip:"rect( 0px 523px 300px 300px)", ease:Quad.easeInOut, delay:0.0, overwrite:false });
		TweenLite.to( t3b, 0.5, { clip:"rect( 0px 523px 300px 300px)", ease:Quad.easeInOut, delay:0.1, overwrite:false });
		TweenLite.to( t3c, 0.5, { clip:"rect( 0px 523px 300px 300px)", ease:Quad.easeInOut, delay:0.2, overwrite:false });
		TweenLite.to( t3_highlight, 0.5, { clip:"rect( 0px 300px 523px 300px)", ease:Quad.easeInOut, delay:0.0, overwrite:false });
	};
	
	function clearRight()
	{
		posR = false;
		TweenLite.to( t4a, 0.5, { clip:"rect( 0px 300px 300px 300px)", ease:Quad.easeInOut, delay:0.0, overwrite:false });
		TweenLite.to( t4b, 0.5, { clip:"rect( 0px 300px 300px 300px)", ease:Quad.easeInOut, delay:0.1, overwrite:false });
		TweenLite.to( t4c, 0.5, { clip:"rect( 0px 300px 300px 300px)", ease:Quad.easeInOut, delay:0.2, overwrite:false });
		TweenLite.to( t4_highlight, 0.5, { clip:"rect( 0px 300px 401px 300px)", ease:Quad.easeInOut, delay:0.0, overwrite:false });
		TweenLite.to( dottedline4, 0.5, { alpha:1, ease:Quad.easeInOut, delay:0, overwrite:false });
		TweenLite.to( line, 0.5, { alpha:0, ease:Quad.easeInOut, delay:0, overwrite:false });
		TweenLite.to( sun, 0.5, { alpha:0, rotation:"-15", ease:Quad.easeInOut, delay:0, overwrite:false });
	};
	
	function MoveCenter()
	{
		if( posC == false )
		{
			killThemAll();
			posC = true;
			clearTop();
			clearLeft();
			clearRight();
			
			TweenLite.to( cres1, 3, {  rotation:0, overwrite:false });
			TweenLite.to( cres2, 3, { rotation:0, overwrite:false });
			TweenLite.to( t5a, 0.5, { alpha:1, ease:Quad.easeInOut, delay:0.5, overwrite:false });
			TweenLite.to( t5b, 0.5, { alpha:1, ease:Quad.easeInOut, delay:0.5, overwrite:false });
			TweenLite.to( t5_highlight, 0.5, { alpha:1, ease:Quad.easeInOut, delay:0.5, overwrite:false });
			TweenLite.to( whitebox, 1, { alpha:1, delay:0, delay:1, overwrite:false });
			
			//DAISYCHAIN
			TweenLite.to( elements1, 1, { z:-80, x:3, y:-95, rotationX:0, rotationY:0, ease:Quad.easeInOut, overwrite:false });
			TweenLite.to( elements1_1, 1, { z:-80, x:3, y:-95, rotationX:0, rotationY:0, ease:Quad.easeInOut, overwrite:false });
			TweenLite.to( elements2, 1, { z:-80, x:3, y:-95, rotationX:0, rotationY:0, ease:Quad.easeInOut, overwrite:false });
		};
	};
	
	function moveTop()
	{
		killThemAll();
		clearLeft();
		clearRight();
		
		TweenLite.to( t5a, 0.5, { alpha:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( t5b, 0.5, { alpha:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( t5_highlight, 0.5, { alpha:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( whitebox, 1, { alpha:0, delay:0, overwrite:false });
		
		TweenLite.to( t2a, 0, { clip:"rect( 0px 300px 401px 0px)", overwrite:false });
		TweenLite.to( t2b, 0, { clip:"rect( 0px 300px 401px 0px)", overwrite:false });
		TweenLite.to( t2c, 0, { clip:"rect( 0px 300px 401px 0px)", overwrite:false });
		TweenLite.to( t2d, 0, { clip:"rect( 0px 300px 401px 0px)", overwrite:false });
		TweenLite.to( t2_highlight1, 0, { clip:"rect( 0px 300px 401px 0px)", overwrite:false });
		TweenLite.to( t2_highlight2, 0, { clip:"rect( 0px 300px 401px 0px)", overwrite:false });
		
		//ANIMATION
		TweenLite.to( elements1, 1, { z:0, x:2, y:129, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( elements1_1, 1, { z:0, x:2, y:129, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( elements2, 1, { z:0, x:2, y:129, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( cres1, 3, {  rotation:45, overwrite:false });
		TweenLite.to( cres2, 3, { rotation:45, overwrite:false });
		
		TweenLite.from( t2a, 0.5, { clip:"rect( 0px 50px 401px 0px)", ease:Quad.easeInOut, delay:0.5, overwrite:false });
		TweenLite.from( t2b, 0.5, { clip:"rect( 0px 50px 401px 0px)", ease:Quad.easeInOut, delay:0.6, overwrite:false });
		TweenLite.from( t2c, 0.5, { clip:"rect( 0px 50px 401px 0px)", ease:Quad.easeInOut, delay:0.7, overwrite:false });
		TweenLite.from( t2d, 0.5, { clip:"rect( 0px 20px 401px 0px)", ease:Quad.easeInOut, delay:0.8, overwrite:false });
		TweenLite.from( t2_highlight1, 1, { clip:"rect( 0px 60px 401px 0px)", ease:Quad.easeInOut, delay:0.6, overwrite:false });
		TweenLite.from( t2_highlight2, 1, { clip:"rect( 0px 20px 401px 0px)", ease:Quad.easeInOut, delay:0.9, overwrite:false });
	};
	
	function moveLeft()
	{
		killThemAll();
		clearTop();
		clearRight();
		
		TweenLite.to( t5a, 0.5, { alpha:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( t5b, 0.5, { alpha:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( t5_highlight, 0.5, { alpha:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( whitebox, 1, { alpha:0, delay:0, overwrite:false });
		
		TweenLite.to( t3a, 0, { clip:"rect( 0px 300px 300px 0px)", delay:0, overwrite:false });
		TweenLite.to( t3b, 0, { clip:"rect( 0px 300px 300px 0px)", delay:0, overwrite:false });
		TweenLite.to( t3c, 0, { clip:"rect( 0px 300px 300px 0px)", delay:0, overwrite:false });
		TweenLite.to( t3_highlight, 0, { clip:"rect( 0px 300px 300px 0px)", delay:0, overwrite:false });
		TweenLite.to( continents, 0, { alpha:0, x:0, overwrite:false });
		
		//ANIMATION
		TweenLite.to( continents, 1, { alpha:1, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( continents, 3, { x:"-40", ease:Quad.easeInOut, overwrite:false });
		
		TweenLite.to( elements1, 1, { z:0, x:219, y:9, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( elements1_1, 1, { z:0, x:219, y:9, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( elements2, 1, { z:0, x:219, y:9, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( cres1, 3, {  rotation:-45, overwrite:false });
		TweenLite.to( cres2, 3, { rotation:-45, overwrite:false });
		
		TweenLite.from( t3a, 0.5, { clip:"rect( 0px 60px 300px 0px)", ease:Quad.easeInOut, delay:0.8, overwrite:false });
		TweenLite.from( t3b, 0.5, { clip:"rect( 0px 60px 300px 0px)", ease:Quad.easeInOut, delay:0.9, overwrite:false });
		TweenLite.from( t3c, 0.5, { clip:"rect( 0px 60px 300px 0px)", ease:Quad.easeInOut, delay:1.0, overwrite:false });
		TweenLite.from( t3_highlight, 0.5, { clip:"rect( 0px 60px 300px 0px)", ease:Quad.easeInOut, delay:1.0, overwrite:false });
	};
	
	function moveRight()
	{
		killThemAll();
		clearTop();
		clearLeft();
		
		TweenLite.to( t5a, 0.5, { alpha:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( t5b, 0.5, { alpha:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( t5_highlight, 0.5, { alpha:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( whitebox, 1, { alpha:0, delay:0, overwrite:false });
		TweenLite.to( dottedline4, 0.5, { alpha:0, ease:Quad.easeInOut, delay:0, overwrite:false });
		TweenLite.to( line, 0.5, { alpha:1, ease:Quad.easeInOut, delay:0, overwrite:false });
		
		TweenLite.to( t4a, 0, { clip:"rect( 0px 497px 300px 0px)", delay:0, overwrite:false });
		TweenLite.to( t4b, 0, { clip:"rect( 0px 497px 300px 0px)", delay:0, overwrite:false });
		TweenLite.to( t4c, 0, { clip:"rect( 0px 497px 300px 0px)", delay:0, overwrite:false });
		TweenLite.to( t4_highlight, 0, { clip:"rect( 0px 497px 300px 0px)", delay:0, overwrite:false });
		TweenLite.to( sun, 0, { alpha:1, rotation:0, overwrite:false });
		
		//ANIMATION		
		TweenLite.to( elements1, 1, { z:0, x:-220, y:-150, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( elements1_1, 1, { z:0, x:-220, y:-150, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( elements2, 1, { z:0, x:-220, y:-150, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( sun, 5, { rotation:"-12", delay:0.5, overwrite:false });
		TweenLite.from( sun, 1, { alpha:0, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( cres1, 3, {  rotation:45, overwrite:false });
		TweenLite.to( cres2, 3, { rotation:45, overwrite:false });
		
		TweenLite.from( t4a, 0.5, { clip:"rect( 0px 300px 300px 0px)", ease:Quad.easeInOut, delay:0.5, overwrite:false });
		TweenLite.from( t4b, 0.5, { clip:"rect( 0px 300px 300px 0px)", ease:Quad.easeInOut, delay:0.6, overwrite:false });
		TweenLite.from( t4c, 0.5, { clip:"rect( 0px 300px 300px 0px)", ease:Quad.easeInOut, delay:0.7, overwrite:false });
		TweenLite.from( t4_highlight, 1, { clip:"rect( 0px 300px 300px 0px)", ease:Quad.easeInOut, delay:0.6, overwrite:false });
	};
	
	var triggerNum = 75;
	var logoShowing = true;
	var logoAnimating = false;
	
	function coinFlip1()
	{
		logoShowing = false;
		logoAnimating = true;
		TweenLite.to( circle1, 0, { z:0, alpha:1, rotationY:0, overwrite:false });
		//ANIMATE
		TweenLite.from( circle1, 0.5, { z:-20, alpha:0, rotationY:-90, ease:Quad.easeOut, delay:0.5, overwrite:false, onComplete:function(){ logoAnimating = false }});
		TweenLite.to( circle3, 0.5, { z:-20, alpha:0, rotationY:90, ease:Quad.easeIn, delay:0, overwrite:false });
	};
	
	function coinFlip2()
	{
		logoShowing = true;
		logoAnimating = true;
		TweenLite.to( circle3, 0, { z:0, alpha:1, rotationY:0, overwrite:false });	
		//ANIMATE
		TweenLite.from( circle3, 0.5, { z:-20, alpha:0, rotationY:-90, ease:Quad.easeOut, delay:0.5, overwrite:false, onComplete:function(){ logoAnimating = false }});
		TweenLite.to( circle1, 0.5, { z:-20, alpha:0, rotationY:90, ease:Quad.easeIn, delay:0, overwrite:false });		
	};
	
	function mouseCheck()
	{
		$(document).mousemove(function(e)
		{
			//LOGOFLIPPING
			if( e.pageY >= 15 && e.pageY <= 149 && e.pageX >= 83 && e.pageY <= 219 && logoShowing == true && logoAnimating == false )
			{
				coinFlip1();
			};
			
			if(	e.pageY < 15 && logoShowing == false && logoAnimating == false || 
				e.pageY > 149 && logoShowing == false && logoAnimating == false || 
				e.pageX < 83 && logoShowing == false && logoAnimating == false ||
				e.pageY > 219 && logoShowing == false && logoAnimating == false )
			{
				coinFlip2();
			}
			
			//RESET
			if( withinAd == false )
			{
				MoveCenter();
				TweenLite.to( rollover, 1, { alpha:1, ease:Quad.easeInOut, overwrite:false });
			};
			
			if( e.pageY > triggerNum && e.pageX > triggerNum && e.pageX <= 300-triggerNum )
			{
				MoveCenter();
				TweenLite.to( rollover, 1, { alpha:1, ease:Quad.easeInOut, overwrite:false });
			};
			
			//TOP
			if( e.pageY >= 0 && e.pageY < triggerNum && posT == false && withinAd == true )
			{
				posT = true;
				posC = false;
				moveTop();
				TweenLite.to( rollover, 1, { alpha:0, ease:Quad.easeInOut, overwrite:false });
			};
			
			//LEFT
			if( e.pageY > triggerNum && e.pageX < triggerNum && e.pageX >= 0 && posL == false && withinAd == true )
			{
				posL = true;
				posC = false;
				moveLeft();
				TweenLite.to( rollover, 1, { alpha:0, ease:Quad.easeInOut, overwrite:false });
			};
			
			//RIGHT
			if( e.pageY > triggerNum && e.pageX > 300-triggerNum && e.pageX <= 300 && posR == false && withinAd == true )
			{
				posR = true;
				posC = false;
				moveRight();
				TweenLite.to( rollover, 1, { alpha:0, ease:Quad.easeInOut, overwrite:false });
			};
		});
	};
});































