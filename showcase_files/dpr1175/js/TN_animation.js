var comp;

AdobeEdge.bootstrapCallback(function (compId)
{
	/*------------------------------------------------------------
	VARS
	------------------------------------------------------------*/
	var theAd = AdobeEdge.getComposition('dpr');
	
	var tl = new TimelineMax();
	comp = theAd.getStage();
	/*
	TweenLite.delayedCall(15, replay);
	function replay()
	{
		console.trace( 'REPLAY ' );
		//comp.play();
	};
	*/
	
	//FRAME_ELEMENTS
	var logo = theAd.getStage().$('WDW_LOGO');
	var txt1a = theAd.getStage().$('txt01');
	var txt2a = theAd.getStage().$('txt02a');
	var txt2b = theAd.getStage().$('txt02b');
	var txt3a = theAd.getStage().$('txt03a');
	var txt3b = theAd.getStage().$('txt03b');
	var txt4a = theAd.getStage().$('txt04');
	var txt5a = theAd.getStage().$('txt05a');
	var txt5b = theAd.getStage().$('txt05b');
	
	var ctabtn = theAd.getStage().$('cta');
	var overall = theAd.getStage().$('overall')
	//var txt1a = theAd.getStage().$('txt01');
	
	txt2a.hide();
	txt2b.hide();
	txt3a.hide();
	txt3b.hide();
	txt4a.hide();
	txt5a.hide();
	txt5b.hide();
	
	/*------------------------------------------------------------
	CTA_ACTIONS
	------------------------------------------------------------*/
	ctabtn.bind('click',function()
	{
		console.trace( 'CTA_CLICKED ' );
		window.open(clickTag, "_blank");
	});
	
	overall.bind('click',function()
	{
		console.trace( 'OVERALL_CLICKED ' );
		window.open(clickTag, "_blank");
	});
	
	
	ctabtn.hide();
	
	/*------------------------------------------------------------
	ANIMATION
	------------------------------------------------------------*/
	//NOTWORKING! txt1.alpha = 0;
	function Frame01()
	{
		console.trace( 'FRAME ONE' );
		
		//ENTER
		TweenLite.from( txt1a, 0.5, { scaleX:0.10, scaleY:0.10, alpha:0, ease:Back.easeOut, delay:0.5, overwrite:false })
		TweenLite.from( logo, 0.5, { scaleX:0.10, scaleY:0.10, alpha:0, ease:Back.easeOut, delay:0.75, overwrite:false })
		
		//DAISYCHAIN
		TweenLite.delayedCall( 2.5, Frame02 )
	};
	
	function Frame02()
	{
		console.trace( 'FRAME TWO' );
		txt2a.show();
		txt2b.show();
		
		//EXIT
		TweenLite.to( txt1a, 0.5, { scaleX:1.10, scaleY:1.10, alpha:0, ease:Back.easeOut, delay:0.00, overwrite:false })
		TweenLite.to( logo, 0.5, { scaleX:1.10, scaleY:1.10, alpha:0, ease:Back.easeOut, delay:0.10, overwrite:false })
		
		//ENTER
		TweenLite.from( txt2a, 0.5, { scaleX:0.10, scaleY:0.10, alpha:0, ease:Back.easeOut, delay:0.50, overwrite:false })
		TweenLite.from( txt2b, 0.5, { scaleX:0.10, scaleY:0.10, alpha:0, ease:Back.easeOut, delay:0.75, overwrite:false })
		TweenLite.to( txt2a, 2.5, { scaleX:0.95, scaleY:0.95, delay:1.0, overwrite:false })
		TweenLite.to( txt2b, 2.5, { scaleX:0.95, scaleY:0.95, delay:1.25, overwrite:false })
		
		//DAISYCHAIN
		TweenLite.delayedCall( 3.5, Frame03 )
	};
	
	function Frame03()
	{
		console.trace( 'FRAME THREE' );
		txt3a.show();
		txt3b.show();
		
		//EXIT
		TweenLite.to( txt2a, 0.5, { scaleX:1.10, scaleY:1.10, alpha:0, ease:Back.easeOut, delay:0.00, overwrite:false })
		TweenLite.to( txt2b, 0.5, { scaleX:1.10, scaleY:1.10, alpha:0, ease:Back.easeOut, delay:0.10, overwrite:false })
		
		//ENTER
		TweenLite.from( txt3a, 0.5, { scaleX:0.10, scaleY:0.10, alpha:0, ease:Back.easeOut, delay:0.50, overwrite:false })
		TweenLite.from( txt3b, 0.5, { scaleX:0.10, scaleY:0.10, alpha:0, ease:Back.easeOut, delay:0.75, overwrite:false })
		TweenLite.to( txt3a, 2.5, { scaleX:0.95, scaleY:0.95, delay:1.0, overwrite:false })
		TweenLite.to( txt3b, 2.5, { scaleX:0.95, scaleY:0.95, delay:1.25, overwrite:false })
		
		//DAISYCHAIN
		TweenLite.delayedCall( 3.0, Frame04 )
	};
	
	function Frame04()
	{
		console.trace( 'FRAME FOUR' );
		txt4a.show();
		
		//EXIT
		TweenLite.to( txt3a, 0.5, { scaleX:1.10, scaleY:1.10, alpha:0, ease:Back.easeOut, delay:0.00, overwrite:false })
		TweenLite.to( txt3b, 0.5, { scaleX:1.10, scaleY:1.10, alpha:0, ease:Back.easeOut, delay:0.10, overwrite:false })
		
		//ENTER
		TweenLite.from( txt4a, 0.5, { scaleX:0.10, scaleY:0.10, alpha:0, ease:Back.easeOut, delay:0.50, overwrite:false })
		TweenLite.to( txt4a, 2.5, { scaleX:0.95, scaleY:0.95, delay:1.0, overwrite:false })
		
		//DAISYCHAIN
		TweenLite.delayedCall( 3.5, EndFrame )
	};
	
	function EndFrame()
	{
		console.trace( 'FRAME END' );
		ctabtn.show();
		txt5a.show();
		txt5b.show();
		
		//EXIT
		TweenLite.to( txt4a, 0.5, { scaleX:1.10, scaleY:1.10, alpha:0, ease:Back.easeOut, delay:0.00, overwrite:false })
		
		//ENTER
		TweenLite.from( ctabtn, 0.5, { scaleX:0.10, scaleY:0.10, alpha:0, ease:Back.easeOut, delay:0.50, overwrite:false })
		TweenLite.from( txt5a, 0.5, { scaleX:0.10, scaleY:0.10, alpha:0, ease:Back.easeOut, delay:0.50, overwrite:false })
		TweenLite.from( txt5b, 0.5, { scaleX:0.10, scaleY:0.10, alpha:0, ease:Back.easeOut, delay:0.75, overwrite:false })
	}

	Frame01();
});