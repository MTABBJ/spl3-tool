
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/about/about","pages/schedules/schedules","pages/shop/shop","pages/wear/wear","pages/setting/setting","pages/fes/fes","pages/schedules1/schedules1","pages/schedules2/schedules2","pages/schedules3/schedules3","pages/schedules4/schedules4"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"海产圈 3","navigationBarBackgroundColor":"#000000","backgroundColor":"#19232C"},"tabBar":{"position":"bottom","selectedColor":"#EAFF3D","color":"#e6e6e6","backgroundColor":"#000000","iconWidth":"24px","iconfontSrc":"static/fonts/iconfont.ttf","list":[{"text":"主页","pagePath":"pages/index/index","selectedIconPath":"static/ika.png","iconfont":{"text":"","selectedText":"","color":"#e6e6e6","selectedColor":"#eaff3d"}},{"text":"日程","pagePath":"pages/schedules/schedules","iconfont":{"text":"","selectedText":"","color":"#e6e6e6","selectedColor":"#eaff3d"}},{"text":"穿搭","pagePath":"pages/wear/wear","iconfont":{"text":"","selectedText":"","color":"#e6e6e6","selectedColor":"#eaff3d"}},{"text":"设置","pagePath":"pages/setting/setting","iconfont":{"text":"","selectedText":"","color":"#e6e6e6","selectedColor":"#eaff3d"}}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"spl3-tool","compilerVersion":"3.6.4","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/about/about","meta":{},"window":{}},{"path":"/pages/schedules/schedules","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/shop/shop","meta":{},"window":{}},{"path":"/pages/wear/wear","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/setting/setting","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/fes/fes","meta":{},"window":{}},{"path":"/pages/schedules1/schedules1","meta":{},"window":{}},{"path":"/pages/schedules2/schedules2","meta":{},"window":{}},{"path":"/pages/schedules3/schedules3","meta":{},"window":{}},{"path":"/pages/schedules4/schedules4","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
