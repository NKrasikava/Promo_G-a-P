(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"steam_atlas_", frames: [[348,0,86,185],[0,0,346,202],[0,204,184,169],[354,187,94,99],[186,204,166,166]]}
];


// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["steam_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["steam_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["steam_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["steam_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_5 = function() {
	this.initialize(ss["steam_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.s5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3193,0.3193);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.s5, new cjs.Rectangle(0,0,53,53), null);


(lib.s3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_4();
	this.instance.parent = this;
	this.instance.setTransform(108.25,0,0.1766,0.1766);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.s3, new cjs.Rectangle(108.3,0,16.60000000000001,17.5), null);


(lib.s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.2747,0.2747);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.s2, new cjs.Rectangle(0,0,50.6,46.4), null);


(lib.s1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.2626,0.2626);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.s1, new cjs.Rectangle(0,0,90.9,53.1), null);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.main, new cjs.Rectangle(0,0,43,92.5), null);


// stage content:
(lib.steam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// main
	this.instance = new lib.main();
	this.instance.parent = this;
	this.instance.setTransform(121.45,38.55,1,0.7941,0,0,0,21.4,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(137));

	// c1
	this.instance_1 = new lib.s1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(117.6,64,1,1,0,0,0,45.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:45.6,regY:26.6,scaleX:1.1429,scaleY:1.1429,x:117.75,y:64.15},9).to({scaleX:1.2749,scaleY:1.2749,x:117.8},10).to({scaleX:1.1616,scaleY:1.1616,x:117.75,y:64.2},10).to({regY:26.7,scaleX:0.975,scaleY:0.975,y:64.3},10).to({regY:26.8,scaleX:1.1177,scaleY:1.1177,y:64.4},10).to({scaleX:1.4155,scaleY:1.4155},10).to({regX:45.8,regY:26.9,scaleX:1.5702,scaleY:1.5702,x:118.05,y:64.55},10).to({scaleY:1.2002,y:64.6},10).to({x:118.55,y:71.1},10).to({regX:45.9,scaleX:1.9037,scaleY:1.4551,x:118.8,y:74.1},11).to({regY:27,scaleX:1.4685,scaleY:1.1224,x:118.85,y:74.25},10).to({regX:46,regY:27.1,scaleX:1.7455,scaleY:1.3342,x:119,y:74.35},9).to({scaleX:1.2841,scaleY:0.9815,x:118.95,y:74.4},10).wait(8));

	// c2
	this.instance_2 = new lib.s2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(91.1,67.8,1,1,0,0,0,25.3,23.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({x:74.85,y:80.3},10).to({scaleX:1.4158},10).to({regX:25.4,scaleX:1.7326,x:75.05},10).to({x:53.05,y:78.25},10).to({x:46.55,y:90.25},10).to({regX:25.5,scaleX:1.8204,x:57.35,y:94.75},10).to({x:54.5,y:102.25},10).to({_off:true},1).wait(47));

	// c3
	this.instance_3 = new lib.s3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(66.6,70.6,1,1,0,0,0,62.5,48.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({x:56.6},10).to({x:47.6},10).to({x:36.6,y:66.1},10).to({x:31.1,y:54.6},10).to({x:27.6,y:53.1},10).to({_off:true},31).wait(37));

	// c4
	this.instance_4 = new lib.s3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(157.5,74.05,0.759,0.759,0,0,0,116.6,8.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({_off:false},0).to({x:172.5,y:78.05},10).to({regX:116.8,regY:8.8,scaleX:1.4832,scaleY:1.4832,x:177,y:80},10).to({regX:116.9,scaleX:2.3966,scaleY:2.3966,x:197.75,y:80.6},8).to({regX:116.6,regY:9,scaleX:2.8306,scaleY:2.8306,x:189.25,y:79.3},8).to({regX:116.7,scaleX:1.5404,scaleY:1.5404,x:239.35,y:81.25},10).to({regY:9.1,scaleX:0.8252,scaleY:0.8252,y:81.35},9).to({scaleX:0.3805,scaleY:0.3805,y:81.3},6).to({scaleX:1.9258,scaleY:1.9258,x:176.9,y:81},4).to({_off:true},1).wait(22));

	// c5
	this.instance_5 = new lib.s5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(133.5,64.75,1,1,0,0,0,26.5,26.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({_off:false},0).to({x:142,y:74.25},4).to({x:151.95,y:83.5},6).to({x:164.95,y:86},10).to({scaleX:1.566},10).wait(49).to({_off:true},1).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(130.1,53,121.80000000000001,72.4);
// library properties:
lib.properties = {
	id: '3CA946E9450C7F4B8628D1A20EB74088',
	width: 255,
	height: 102,
	fps: 30,
	color: "#535353",
	opacity: 0.00,
	manifest: [
		{src:"images/steam_atlas_.png?1566922140994", id:"steam_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3CA946E9450C7F4B8628D1A20EB74088'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;