(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"logo_atlas_", frames: [[264,1254,204,93],[513,551,111,111],[513,664,79,62],[607,820,57,42],[513,728,48,77],[513,807,45,77],[611,741,45,77],[0,0,540,549],[0,551,511,519],[560,820,45,76],[563,741,46,77],[513,886,25,19],[594,664,51,75],[446,1072,202,90],[0,1072,262,310],[264,1072,180,180]]}
];


// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["logo_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_10 = function() {
	this.initialize(ss["logo_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_11 = function() {
	this.initialize(ss["logo_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_12 = function() {
	this.initialize(ss["logo_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_13 = function() {
	this.initialize(ss["logo_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_14 = function() {
	this.initialize(ss["logo_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_15 = function() {
	this.initialize(ss["logo_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["logo_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["logo_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["logo_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_5 = function() {
	this.initialize(ss["logo_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_6 = function() {
	this.initialize(ss["logo_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_7 = function() {
	this.initialize(ss["logo_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_8 = function() {
	this.initialize(ss["logo_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_9 = function() {
	this.initialize(ss["logo_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.space = function() {
	this.initialize(ss["logo_atlas_"]);
	this.gotoAndStop(15);
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


(lib.T2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_15();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3482,0.3482);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.T2, new cjs.Rectangle(0,0,15.7,26.8), null);


(lib.T = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_14();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3484,0.3484);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.T, new cjs.Rectangle(0,0,15.7,26.9), null);


(lib.rocket = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.space();
	this.instance.parent = this;
	this.instance.setTransform(126.4,152.65,0.7172,0.7172,-168.2571);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rocket, new cjs.Rectangle(0,0,152.7,152.7), null);


(lib.P = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_13();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3507,0.3507);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.P, new cjs.Rectangle(0,0,16.9,27), null);


(lib.nose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_12();
	this.instance.parent = this;
	this.instance.setTransform(-0.45,-0.45,0.3362,0.3362);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nose, new cjs.Rectangle(-0.4,-0.4,19.099999999999998,14.1), null);


(lib.heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_11();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3439,0.3439);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.heart, new cjs.Rectangle(0,0,27.2,21.3), null);


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_9();
	this.instance.parent = this;
	this.instance.setTransform(-0.45,-0.45,0.3362,0.3362);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.head, new cjs.Rectangle(-0.4,-0.4,88,104.2), null);


(lib.hands = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_8();
	this.instance.parent = this;
	this.instance.setTransform(68,142.05,0.3362,0.3362);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hands, new cjs.Rectangle(68,142.1,67.9,30.200000000000017), null);


(lib.G = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_7();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.096,0.096);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.G, new cjs.Rectangle(0,0,4.9,7.2), null);


(lib.eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_6();
	this.instance.parent = this;
	this.instance.setTransform(-0.45,-0.45,0.3362,0.3362);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.eyes, new cjs.Rectangle(-0.4,-0.4,8.4,6.4), null);


(lib.E2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_5();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3474,0.3474);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.E2, new cjs.Rectangle(0,0,16,26.8), null);


(lib.E = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3536,0.3536);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.E, new cjs.Rectangle(0,0,15.9,26.9), null);


(lib.circle_w = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3362,0.3362);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.circle_w, new cjs.Rectangle(0,0,171.8,174.5), null);


(lib.circle_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_2();
	this.instance.parent = this;
	this.instance.setTransform(-4.95,-4.95,0.3362,0.3362);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.circle_b, new cjs.Rectangle(-4.9,-4.9,181.5,184.5), null);


(lib.headcheek = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_10();
	this.instance.parent = this;
	this.instance.setTransform(24.5,43.3,0.3362,0.3362);

	this.instance_1 = new lib.head();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.5,51.7,1,1,0,0,0,43.5,51.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.headcheek, new cjs.Rectangle(-0.4,-0.4,88,104.2), null);


// stage content:
(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// T
	this.instance = new lib.T2();
	this.instance.parent = this;
	this.instance.setTransform(1051.05,574.9,0.499,0.499,0,0,0,8.7,14.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94).to({_off:false},0).to({regX:8.4,regY:14,scaleX:1.436,scaleY:1.436,x:1050.5,y:579.75},15).wait(41));

	// E
	this.instance_1 = new lib.E2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1028.4,575.85,0.4368,0.4368,0,0,0,8.3,14.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80).to({_off:false},0).to({regX:8.4,regY:13.8,scaleX:1.439,scaleY:1.439,x:1029.85,y:579.3},14).wait(56));

	// P
	this.instance_2 = new lib.P();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1010.45,575.55,0.4428,0.4428,0,0,0,8.9,14.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(65).to({_off:false},0).to({regX:8.5,regY:13.8,scaleX:1.4257,scaleY:1.4257,x:1010.4,y:579.4},15).wait(70));

	// T
	this.instance_3 = new lib.T();
	this.instance_3.parent = this;
	this.instance_3.setTransform(890.65,575.85,0.3538,0.3538,0,0,0,8.5,14.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50).to({_off:false},0).to({regX:8.7,regY:14,scaleX:1.4351,scaleY:1.4351,x:893.65,y:579.75},15).wait(85));

	// E
	this.instance_4 = new lib.E();
	this.instance_4.parent = this;
	this.instance_4.setTransform(872.55,575.9,0.3648,0.3648,0,0,0,8.8,14.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35).to({_off:false},0).to({regX:8.3,regY:14,scaleX:1.4141,scaleY:1.4141,x:873.15,y:579.65},15).wait(100));

	// G
	this.instance_5 = new lib.G();
	this.instance_5.parent = this;
	this.instance_5.setTransform(851.95,575.85,1.4874,1.4874,0,0,0,2.6,3.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},0).to({regY:3.6,scaleX:5.2059,scaleY:5.2059,x:853.75,y:578.6},17).wait(115));

	// rocket
	this.instance_6 = new lib.rocket();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1210.45,512.95,1,1,0,0,0,76.3,76.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-100.7697,guide:{path:[1210.4,512.9,1219.2,590.8,1195.1,664.5,1172,735.3,1100.1,769.8,1085.9,776.6,1072.3,784.2,1065.3,784.2,1058.3,784.2,937.9,826.7,816.2,775.4,769.4,755.6,738.2,718,733.2,718,728.2,718,726.2,699.2,724.7,697.7,714.5,667,704.2,636.2,704.2,538.2,704.2,440.2,749,344.4,828.1,280,850.2,262.1,878.2,250.2,987.3,238.2,1096.3,226.2,1127.3,226.2,1158.3,226.2,1188.3,242.2,1218.3,258.2,1286.3,322.2,1354.3,386.2,1354.3,389.2,1354.3,392.2,1364.3,411.2,1374.3,430.2,1374.3,538.2,1374.3,646.2,1315.3,719.2,1256.3,792.2,1209.3,823.2,1162.3,854.2,1158.3,854.2,1154.3,854.2,1054.1,905.5,940.5,920.5,872.9,929.4,804.2,928.2,753.2,894.2,702.2,860.2,621.4,803.8,615.1,694.5,611.6,634.9,601.5,575.9,586.4,487.4,553.3,405.8,534.7,359.9,510.4,316.1,464.7,233.3,362.2,218.1,308.8,210.1,252.2,214.2,140.7,279.5,153.8,419.9,161.4,501.8,241.7,527.3,282.3,540.3,326.2,540.2,348.2,540.1,370.2,540.1,478.6,495.5,549.9,410,551.6,407.9,553.3,405.8,570.8,383.7,582.3,356.2,582.3,352.2,582.3,348.2,593.3,324.2,604.3,300.2,604.3,293.2,604.3,286.2,613.7,238.2,623.1,190.1]}},149).wait(1));

	// dog_eyes
	this.instance_7 = new lib.eyes();
	this.instance_7.parent = this;
	this.instance_7.setTransform(924.95,501.75,1.4874,1.4874,0,0,0,3.8,2.9);

	this.instance_8 = new lib.eyes();
	this.instance_8.parent = this;
	this.instance_8.setTransform(978.45,501.75,1.4874,1.4874,0,0,0,3.9,2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(150));

	// hands
	this.instance_9 = new lib.hands();
	this.instance_9.parent = this;
	this.instance_9.setTransform(950.5,534.1,1.4874,1.4874,0,0,0,101.7,100.2);

	this.instance_10 = new lib.CachedTexturedBitmap_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(900.2,596,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(150));

	// heart
	this.instance_11 = new lib.heart();
	this.instance_11.parent = this;
	this.instance_11.setTransform(952.9,603.1,1.454,1.454,0,0,0,14,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:13.8,scaleX:1.2773,scaleY:1.2773,x:952.95,y:603.15},14).to({regX:14,regY:11.1,scaleX:1.004,scaleY:1.004,x:953.15,y:603.2},15).to({regX:14.1,regY:11.2,scaleX:1.1495,scaleY:1.1495,x:953.1,y:603.25},15).to({regX:13.8,regY:10.8,scaleX:1.454,scaleY:1.454,x:952.9,y:603},15).to({regY:11,scaleX:1.2773,scaleY:1.2773,x:952.95,y:603.15},14).to({regX:14,regY:11.1,scaleX:1.004,scaleY:1.004,x:953.15,y:603.2},15).to({regX:14.1,regY:11.2,scaleX:1.1495,scaleY:1.1495,x:953.1,y:603.25},15).to({regX:14,regY:11,scaleX:1.454,scaleY:1.454,x:952.9,y:603.1},16).to({regX:13.8,scaleX:1.2773,scaleY:1.2773,x:952.95,y:603.15},15).wait(16));

	// dog_nose
	this.instance_12 = new lib.nose();
	this.instance_12.parent = this;
	this.instance_12.setTransform(950.75,524.25,1.4874,1.4874,0,0,0,9.2,6.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(3).to({regY:6.7,x:954.1,y:521.8},4).wait(9).to({regY:6.5,y:522.45},0).to({regY:6.7,y:524},2).to({x:953.05,y:527},4).to({regY:6.6,x:952.6,y:523.5},5).wait(25).to({x:953.05,y:520.9},6).to({regY:6.7,y:523.2},6).to({y:520.3},6).to({y:522.15},6).wait(74));

	// dog_head
	this.instance_13 = new lib.headcheek();
	this.instance_13.parent = this;
	this.instance_13.setTransform(952.5,512.5,1.4874,1.4874,0,0,0,43.6,51.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(150));

	// circle_black
	this.instance_14 = new lib.circle_b();
	this.instance_14.parent = this;
	this.instance_14.setTransform(950.95,535.55,1.4874,1.4874,0,0,0,85.9,87.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(150));

	// circle_white
	this.instance_15 = new lib.circle_w();
	this.instance_15.parent = this;
	this.instance_15.setTransform(950.5,532.15,1.4874,1.4874,0,0,0,85.9,87.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1021.9,637,441.19999999999993,382.29999999999995);
// library properties:
lib.properties = {
	id: '7681FDF927E7FE4699989958CC4B2CBF',
	width: 1900,
	height: 1071,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/logo_atlas_.png?1565549107631", id:"logo_atlas_"}
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
an.compositions['7681FDF927E7FE4699989958CC4B2CBF'] = {
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