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
	VARS
	
	var parentSymbol = sym.$("parentSymbol");
	sym.getSymbol("parentSymbol").$("childSymbol").hide();
	stage.getSymbol("tg1").stop();
	
	--------------------------------------------------------------
	------------------------------------------------------------*/
	var sizes				= ["small"];
	var demo				= $("#demo");
	
	var theAd				= AdobeEdge.getComposition('DPR');
	var stage				= theAd.getStage();
	
	//----------FRAME_ELEMENTS----------
	var overall				= stage.$('border');
	var cta					= stage.$('cta');
	
	//FRAME01
	var mhead				= stage.$('mhead');
	var line1t				= stage.$('line1_top');
	var line1b				= stage.$('line1_bot');
	var wdw_logo			= stage.$('logo');
	var F01T				= stage.$('pom_top');
	var F01B				= stage.$('pom_bot');
	var tg1					= stage.$('tg1');
	//FRAME02
	var photo1				= stage.$('photo1');
	var txt2a				= stage.$('txt2a');
	var txt2b				= stage.$('txt2b');
	//FRAME03
	var F03T				= stage.$('nilla_top');
	var F03B				= stage.$('nilla_bot');
	var fp_logo				= stage.$('logo_fastpass');
	var txt3a				= stage.$('txt3a');
	var txt3b				= stage.$('txt3b');
	var kush				= stage.$('kush')
	//FRAME04
	var photo2				= stage.$('photo2');
	var txt4a				= stage.$('txt4a');
	var txt4b				= stage.$('txt4b');
	var ic1p				= stage.$('icon1');
	var ic2p				= stage.$('icon2');
	var ic3p				= stage.$('icon3');
	var ic4p				= stage.$('icon4');	
	var ic1t				= stage.$('icon1_txt');
	var ic2t				= stage.$('icon2_txt');
	var ic3t				= stage.$('icon3_txt');
	var ic4t				= stage.$('icon4_txt');
	var F04T				= stage.$('oj_top');
	var F04B				= stage.$('oj_bot');
	//FRAME05
	var phead				= stage.$('mhead_purple');
	var line2				= stage.$('line2');
	var ef_logo				= stage.$('logo_ef');
	var txt5a				= stage.$('txt5a');
	var txt5b				= stage.$('txt5b');
	
	/*------------------------------------------------------------
	--------------------------------------------------------------
	INITIAL_SETTINGS
	--------------------------------------------------------------
	------------------------------------------------------------*/
	function init()
	{	
		TweenLite.set( wdw_logo,	{ css:{transformPerspective:200, transformStyle:"preserve-3d"}});
		TweenLite.set( fp_logo,		{ css:{transformPerspective:200, transformStyle:"preserve-3d"}});
		TweenLite.set( ef_logo,		{ css:{transformPerspective:200, transformStyle:"preserve-3d"}});
		TweenLite.set( tg1,			{ css:{transformPerspective:200, transformStyle:"preserve-3d"}});
		TweenLite.set( photo1,		{ css:{transformPerspective:200, transformStyle:"preserve-3d"}});
		TweenLite.set( photo2,		{ css:{transformPerspective:200, transformStyle:"preserve-3d"}});
		TweenLite.set( txt2a,		{ css:{transformPerspective:200, transformStyle:"preserve-3d"}});
		TweenLite.set( txt2b,		{ css:{transformPerspective:200, transformStyle:"preserve-3d"}});
		TweenLite.set( txt3a,		{ css:{transformPerspective:200, transformStyle:"preserve-3d"}});
		TweenLite.set( txt3b,		{ css:{transformPerspective:200, transformStyle:"preserve-3d"}});
		TweenLite.set( txt4a,		{ css:{transformPerspective:200, transformStyle:"preserve-3d"}});
		TweenLite.set( txt4b,		{ css:{transformPerspective:200, transformStyle:"preserve-3d"}});
		TweenLite.set( txt5a,		{ css:{transformPerspective:200, transformStyle:"preserve-3d"}});
		TweenLite.set( txt5b,		{ css:{transformPerspective:200, transformStyle:"preserve-3d"}});
		
		TweenLite.to( phead,	0, 	{ alpha:0, left:140,top:118, overwrite:false });
		TweenLite.to( line2,	0, 	{ alpha:0, left:12, top:140, overwrite:false });
		TweenLite.to( F03T,		0,	{ alpha:0, left:0,  top:0,	 overwrite:false });
		TweenLite.to( F03B,		0,	{ alpha:0, left:0,  top:125, overwrite:false });
		TweenLite.to( F04T,		0,	{ alpha:0, left:0,  top:0,	 overwrite:false });
		TweenLite.to( F04B,		0,	{ alpha:0, left:0,  top:140, overwrite:false });
		TweenLite.to( fp_logo,	0,	{ alpha:0, left:73, top:133, overwrite:false });
		TweenLite.to( ef_logo,	0,	{ alpha:0, left:-43,top:199, overwrite:false });
		TweenLite.to( photo2,	0,	{ alpha:0, left:0,	top:0,	 overwrite:false });
		TweenLite.to( txt2a,	0, 	{ alpha:0, left:35, top:88,	 overwrite:false });
		TweenLite.to( txt2b,	0, 	{ alpha:0, left:35, top:120, overwrite:false });
		TweenLite.to( txt3a,	0, 	{ alpha:0, left:15, top:54,	 overwrite:false });
		TweenLite.to( txt3b,	0, 	{ alpha:0, left:15, top:86,	 overwrite:false });
		TweenLite.to( txt4a,	0, 	{ alpha:0, left:19, top:36,	 overwrite:false });
		TweenLite.to( txt4b,	0, 	{ alpha:0, left:19, top:67,	 overwrite:false });
		TweenLite.to( txt5a,	0, 	{ alpha:0, left:-1, top:7,	 overwrite:false });
		TweenLite.to( txt5b,	0, 	{ alpha:0, left:6,  top:39,	 overwrite:false });
		TweenLite.to( kush,		0, 	{ alpha:0, left:0,	top:0,	 overwrite:false });
		TweenLite.to( ic1p,		0, 	{ alpha:0, left:26,	top:111, overwrite:false });
		TweenLite.to( ic2p,		0, 	{ alpha:0, left:94,	top:115, overwrite:false });
		TweenLite.to( ic3p,		0, 	{ alpha:0, left:168,top:112, overwrite:false });
		TweenLite.to( ic4p,		0, 	{ alpha:0, left:253,top:118, overwrite:false });
		TweenLite.to( ic1t,		0, 	{ alpha:0, left:6,	top:150, overwrite:false });
		TweenLite.to( ic2t,		0, 	{ alpha:0, left:83,	top:150, overwrite:false });
		TweenLite.to( ic3t,		0, 	{ alpha:0, left:143,top:150, overwrite:false });
		TweenLite.to( ic4t,		0, 	{ alpha:0, left:233,top:150, overwrite:false });
		
		TweenLite.to( cta,		0, 	{ alpha:0, left:160,top:207, overwrite:false });
		
		
		Frame01();
	};
	
	init();
	
	/*------------------------------------------------------------
	--------------------------------------------------------------
	AD_FUNCTIONS
	--------------------------------------------------------------
	------------------------------------------------------------*/
	function EnableCTA()
	{
		cta.bind('click',function()
		{
			console.trace( 'CTA_CLICKED ' );
			window.open(clickTag, "_blank");
		});
		
		cta.bind('mouseover',function()
		{
			TweenLite.to( cta, 0.25, { scaleX:1.1, scaleY:1.1, ease:Quad.easeOut, overwrite:false })
		});
		
		cta.bind('mouseout',function()
		{
			TweenLite.to( cta, 0.25, { scaleX:1.0, scaleY:1.0, ease:Quad.easeOut, overwrite:false })
		});
	};
	
	overall.bind('click',function()
	{
		console.trace( 'OVERALL_CLICKED ' );
		window.open(clickTag, "_blank");
	});
	
	/*------------------------------------------------------------
	--------------------------------------------------------------
	ANIMATION
	console.trace();
	--------------------------------------------------------------
	------------------------------------------------------------*/
	function Frame01()
	{
		//ANIMATION
		TweenLite.from( mhead, 0.75, { alpha:0, scale:0.25, rotation:360, ease:Back.easeOut, delay:0.25, overwrite:false });
		TweenLite.from( line1t, 0.5, { scaleX:0, transformOrigin:"50% 50%", ease:Quad.easeIn, delay:0, overwrite:false });
		TweenLite.from( line1b, 0.5, { scaleX:0, transformOrigin:"50% 50%", ease:Quad.easeIn, delay:0, overwrite:false });
		
		TweenLite.from(	wdw_logo, 0.50, { scale:0.001, transformOrigin:"50% 50%", ease:Back.easeOut, delay:0.75, overwrite:false });
		TweenLite.to(	wdw_logo, 3.00, { z:30, transformOrigin:"50% 50%", ease:Quad.easeOut, overwrite: false });
		TweenLite.to(	wdw_logo, 0.75, { alpha:0, ease:Quad.easeIn, overwrite: false, delay:2.25 });
		
		TweenLite.to( tg1, 3.00, { z:30, transformOrigin:"50% 50%", ease:Quad.easeOut, overwrite: false });
		TweenLite.to( tg1, 0.50, { alpha:0, ease:Quad.easeIn, overwrite: false, delay:2.25 });
		
		//EXTEND_THE_LINE
		TweenLite.to( line1t, 1.5, { scaleX:1.5, transformOrigin:"50% 50%", ease:Quad.easeOut, delay:0.5, overwrite:false });
		TweenLite.to( line1b, 1.5, { scaleX:1.5, transformOrigin:"50% 50%", ease:Quad.easeOut, delay:0.5, overwrite:false });
		
		//TEXT_ANIMATION
		stage.getSymbol("tg1").play(0);
		
		//DAISY_CHAIN
		TweenLite.delayedCall( 2.5, Frame02 );
	};
	
	function Frame02()
	{
		//INITIAL_SETTINGS
		TweenLite.to( kush,		0, 	{ alpha:1, left:0,	top:0,	 overwrite:false });
		
		//EXIT_ANIMATION
		TweenLite.to( F01T, 0.5, { top:-120, ease:Quad.easeIn, overwrite:false });
		TweenLite.to( F01B, 0.5, { top: 250, ease:Quad.easeIn, overwrite:false });
		TweenLite.to( mhead, 0.5, { top: -15, ease:Quad.easeIn, overwrite:false });
		TweenLite.to( line1t, 0.5, { top: -1, ease:Quad.easeIn, overwrite:false });
		TweenLite.to( line1b, 0.5, { top: 250, ease:Quad.easeIn, overwrite:false });
		
		//ANIMATION
		TweenLite.delayedCall( 0.75, function(){ stage.getSymbol("photo1").play(0); });
		
		if( itsSafari == true )
		{
			TweenLite.to( photo1, 0.50, { rotation:10, scaleX:0.83, scaleY:0.83, ease:Back.easeOut, delay:1, overwrite:false });
		}else{
			TweenLite.to( photo1, 0.50, { rotation:10, z:-50, ease:Back.easeOut, delay:1, overwrite:false });
		};
		
		//DAISY_CHAIN
		TweenLite.delayedCall( 2, Frame03 );
	};

	function Frame03()
	{
		//INITIAL_SETTINGS
		TweenLite.to( txt2a,	0, 	{ alpha:1, z:0, left:35, top:88, overwrite:false });
		TweenLite.to( txt2b,	0, 	{ alpha:1, z:0, left:35, top:120, overwrite:false });
		
		//ANIMATION
		TweenLite.to( photo1, 0.75, { rotation:10, left:-180, top:300, ease:Quad.easeInOut, overwrite:false });
	
		//TEXT_ANIMATION
		TweenLite.from( txt2a, 0.75, { rotation:-50, left:35+100, top:88-250, ease:Quad.easeInOut, overwrite:false });
		TweenLite.from( txt2b, 0.75, { rotation:-50, left:35+100, top:120-250, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( txt2a, 0.5, { z:35, delay:0.5, overwrite:false });
		TweenLite.to( txt2a, 0.5, { z:0,  delay:1.0, overwrite:false });
		TweenLite.to( txt2b, 0.5, { z:35, delay:0.6, overwrite:false });
		TweenLite.to( txt2b, 0.5, { z:0,  delay:1.1, overwrite:false });
	
		//DAISY_CHAIN
		TweenLite.delayedCall( 2, Frame04 );
	};
	
	function Frame04()
	{
		//INITIAL_SETTINGS
		TweenLite.to( F03T,		0,	{ alpha:1, left:0, top:0, overwrite:false });
		TweenLite.to( F03B,		0,	{ alpha:1, left:0, top:125, overwrite:false });
		TweenLite.to( fp_logo,	0,	{ alpha:1, left:73, top:133, overwrite:false });
		TweenLite.to( txt3a,	0, 	{ alpha:1, left:15, top:54,	 overwrite:false });
		TweenLite.to( txt3b,	0, 	{ alpha:1, left:15, top:86,	 overwrite:false });
		
		//ANIMATION
		TweenLite.from( F03T, 0.5, { top:-125, ease:Quint.easeInOut, overwrite:false });
		TweenLite.from( F03B, 0.5, { top:300, ease:Quint.easeInOut, overwrite:false });
		
		TweenLite.from( fp_logo, 1, { alpha:0, top:133+140, ease:Quint.easeInOut, overwrite:false });
		TweenLite.from( fp_logo, 1, { rotation:-90, ease:Back.easeInOut, overwrite:false, delay:0 });
		TweenLite.to( fp_logo, 0.5, { scaleX:1.5, scaleY:1.5, ease:Back.easeIn, overwrite: false, delay:0.75 })
		TweenLite.to( fp_logo, 0.5, { scaleX:1.0, scaleY:1.0, ease:Back.easeOut, overwrite: false, delay:1.25 })
		
		TweenLite.from( txt3a, 0.5, { top:54-130, ease:Quint.easeInOut, overwrite:false })
		TweenLite.from( txt3b, 0.5, { top:86-130, ease:Quint.easeInOut, overwrite:false })
		TweenLite.to( txt3a, 0.25, { z:35, delay:0.50, overwrite:false });
		TweenLite.to( txt3a, 0.25, { z:0,  delay:0.75, overwrite:false });
		TweenLite.to( txt3b, 0.25, { z:35, delay:0.60, overwrite:false });
		TweenLite.to( txt3b, 0.25, { z:0,  delay:0.76, overwrite:false });
		
		//DAISY_CHAIN
		TweenLite.delayedCall( 2.00, Frame05 );
	};
	
	function Frame05()
	{
		//INITIAL_SETTINGS
		TweenLite.to( kush,		0, 	{ alpha:0, left:0,	top:0,	 overwrite:false });
		TweenLite.to( photo2,	0,	{ alpha:1, left:0,	top:0,	 overwrite:false });
		TweenLite.to( F04T,		0,	{ alpha:1, left:0,  top:0,	 overwrite:false });
		TweenLite.to( F04B,		0,	{ alpha:1, left:0,  top:140, overwrite:false });
		
		//EXIT_ANIMATION
		TweenLite.to( F03T, 0.5, { top:-125, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( F03B, 0.5, { top:300, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( txt3a, 0.5, { top:54-130, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( txt3b, 0.5, { top:86-130, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( fp_logo, 0.5, { top:133+140, ease:Quad.easeInOut, overwrite:false });
	
		//ANIMATION
		TweenLite.delayedCall( 0.5, function(){ stage.getSymbol("photo2").play(0); });
		
		if( itsSafari == true )
		{
			TweenLite.to( photo2, 0.5, { rotation:-10, scaleX:0.83, scaleY:0.83, ease:Back.easeOut, delay:0.75, overwrite:false });
		}else{
			TweenLite.to( photo2, 0.5, { rotation:-10, z:-50, ease:Back.easeOut, delay:0.75, overwrite:false });
		};
		
		//DAISY_CHAIN
		TweenLite.delayedCall( 2, Frame06 );
	};
	
	function Frame06()
	{
		//INITIAL_SETTINGS
		TweenLite.to( txt4a,	0, 	{ alpha:1, left:19, top:36,	 overwrite:false });
		TweenLite.to( txt4b,	0, 	{ alpha:1, left:19, top:67,	 overwrite:false });
		
		TweenLite.to( ic1p,		0, 	{ alpha:1, left:26,	top:111, overwrite:false });
		TweenLite.to( ic2p,		0, 	{ alpha:1, left:94,	top:115, overwrite:false });
		TweenLite.to( ic3p,		0, 	{ alpha:1, left:168,top:112, overwrite:false });
		TweenLite.to( ic4p,		0, 	{ alpha:1, left:253,top:118, overwrite:false });
		TweenLite.to( ic1t,		0, 	{ alpha:1, left:6,	top:150, overwrite:false });
		TweenLite.to( ic2t,		0, 	{ alpha:1, left:83,	top:150, overwrite:false });
		TweenLite.to( ic3t,		0, 	{ alpha:1, left:143,top:150, overwrite:false });
		TweenLite.to( ic4t,		0, 	{ alpha:1, left:233,top:150, overwrite:false });
		
		//EXIT_ANIMATION
		TweenLite.to( photo2, 0.75, { rotation:-10, left:0+200, top:0-350, ease:Quad.easeInOut, overwrite:false });
	
		//ICONS_ANIMATION
		TweenLite.from( ic1p, 0.75, { rotation:-50, left:26-100, top:111+300, ease:Quad.easeInOut, overwrite:false });
		TweenLite.from( ic2p, 0.75, { rotation:-50, left:94-100, top:115+300, ease:Quad.easeInOut, overwrite:false });
		TweenLite.from( ic3p, 0.75, { rotation:-50, left:168-100, top:112+300, ease:Quad.easeInOut, overwrite:false });
		TweenLite.from( ic4p, 0.75, { rotation:-50, left:253-100, top:118+300, ease:Quad.easeInOut, overwrite:false });
		
		TweenLite.from( ic1t, 0.75, { rotation:-50, left:6-100, top:150+300, ease:Quad.easeInOut, overwrite:false });
		TweenLite.from( ic2t, 0.75, { rotation:-50, left:83-100, top:150+300, ease:Quad.easeInOut, overwrite:false });
		TweenLite.from( ic3t, 0.75, { rotation:-50, left:143-100, top:150+300, ease:Quad.easeInOut, overwrite:false });
		TweenLite.from( ic4t, 0.75, { rotation:-50, left:233-100, top:150+300, ease:Quad.easeInOut, overwrite:false });
		
		for( var i=1; i<5; i++ )
		{
			TweenLite.to( eval( 'ic'+i+'p' ), 0.50, { scaleX:1.50, scaleY:1.50, ease:Quad.easeIn, overwrite:false, delay:0.50+i*0.25 })
			TweenLite.to( eval( 'ic'+i+'p' ), 0.50, { scaleX:1.00, scaleY:1.00, ease:Quad.easeOut, overwrite:false, delay:1.00+i*0.25 })
			
			TweenLite.to( eval( 'ic'+i+'t' ), 0.50, { scaleX:1.25, scaleY:1.25, ease:Quad.easeIn, overwrite:false, delay:0.50+i*0.25 })
			TweenLite.to( eval( 'ic'+i+'t' ), 0.50, { scaleX:1.00, scaleY:1.00, ease:Quad.easeOut, overwrite:false, delay:1.00+i*0.25 })
			TweenLite.to( eval( 'ic'+i+'t' ), 0.75, { alpha:0, ease:Quad.easeInOut, delay:2.5, overwrite:false });
		};
		
		//ANIMATION
		TweenLite.from( txt4a, 0.75, { rotation:-50, left:19-100, top:36+300, ease:Quad.easeInOut, overwrite:false });
		TweenLite.from( txt4b, 0.75, { rotation:-50, left:19-100, top:67+300, ease:Quad.easeInOut, overwrite:false });
		TweenLite.to( txt4a, 0.5, { z:35, delay:0.5, overwrite:false });
		TweenLite.to( txt4a, 0.5, { z:0,  delay:1.0, overwrite:false });
		TweenLite.to( txt4b, 0.5, { z:35, delay:0.6, overwrite:false });
		TweenLite.to( txt4b, 0.5, { z:0,  delay:1.1, overwrite:false });
		TweenLite.to( txt4a, 0.5, { alpha:0, ease:Quad.easeIn, overwrite: false, delay:1.75 });
		TweenLite.to( txt4b, 0.5, { alpha:0, ease:Quad.easeIn, overwrite: false, delay:1.75 });
		
		//DAISYCHAIN
		TweenLite.delayedCall( 2.5, Frame07 );
	};
	
	function Frame07()
	{
		//INITIAL_SETTINGS
		TweenLite.to( phead,	0, 	{ alpha:1, left:140,top:118, overwrite:false });
		
		//EXIT_ANIMATION
		for( var i=1; i<5; i++ )
		{
			TweenLite.to( eval( 'ic'+i+'p' ), 0.50, { alpha:0, left:150, transformOrigin:"50% 50%", ease:Back.easeIn, delay:0, overwrite:false })
		};
	
		//PRIMARY_ANIMATION
		TweenLite.from( phead, 0.5, { alpha:0, scaleX:0.25, scaleY:0.25, rotation:360, ease:Back.easeOut, delay:0.5, overwrite:false });
	
		//DAISYCHAIN
		TweenLite.delayedCall( 1.0, Frame08 );
	};
	
	function Frame08()
	{
		//INITIAL_SETTINGS
		TweenLite.to( txt2a,	0, 	{ alpha:0, z:0, left:35, top:88, overwrite:false });
		TweenLite.to( txt2b,	0, 	{ alpha:0, z:0, left:35, top:120, overwrite:false });
		TweenLite.to( line2,	0, 	{ alpha:1, left:12, top:140, overwrite:false });
		TweenLite.to( txt5a,	0, 	{ alpha:1, left:-1, top:7,	 overwrite:false });
		TweenLite.to( txt5b,	0, 	{ alpha:1, left:6,  top:39,	 overwrite:false });
		TweenLite.to( ef_logo,	0,	{ alpha:1, left:-43,top:199, overwrite:false });
		TweenLite.to( cta,		0, 	{ alpha:1, left:160,top:207, overwrite:false });
		
		//ANIMATION
		TweenLite.to( F04T, 0.5, { top:-140, ease:Quint.easeInOut, overwrite:false });
		TweenLite.to( F04B, 0.5, { top:300, ease:Quint.easeInOut, overwrite:false });
		
		TweenLite.to( phead, 0.5, { top:27, scaleX:0.6, scaleY:0.6, ease:Quad.easeInOut, overwrite:false });
		TweenLite.from( line2, 0.5, { scaleX:0, transformOrigin:"50% 50%", ease:Quad.easeIn, delay:0, overwrite:false });
		TweenLite.to( line2, 0.5, { top:34, ease:Quad.easeInOut, overwrite:false });
		TweenLite.from( cta, 0.25, { alpha:0, top:207+10, delay:0.5, onComplete:EnableCTA, overwrite:false });
		TweenLite.from( txt5a, 0.75, { alpha:0, ease:Quad.easeInOut, overwrite:false, delay:0.35 });
		TweenLite.from( txt5b, 0.75, { alpha:0, ease:Quad.easeInOut, overwrite:false, delay:0.25 });
		
	};
});