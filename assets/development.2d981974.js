import{d}from"./windows.ba65c777.js";import{R as c,a as t,r as o,F as m}from"./vendor.66f8334e.js";import{S as u,U as g,P as p,M as f,u as h,b as w,d as v,R as E,e as y,f as I}from"./MarkerIcon.7c0fb94f.js";import{t as b,B as s}from"./globals.7bd5abb3.js";import"./hotkeys.841a8dfc.js";const a=e=>({addListener:n=>n(e),removeListener:n=>n(e)}),i={addListener:e=>e(),removeListener:e=>e()},R={getRunningGameInfo:e=>e({isInFocus:!1,isRunning:!0,allowsVideoCapture:!0,title:"GAME TEST",displayName:"Game test",shortTitle:"GT",id:1e4,classId:1e4,width:1280,height:768,logicalWidth:1280,logicalHeight:768,renderers:[],detectedRenderer:"mock",executionPath:"mock",sessionId:"mock",commandLine:"mock",type:0,typeAsString:"mock",windowHandle:{value:11},monitorHandle:{value:12},processId:5,overlayInfo:{inputFailure:!1,hadInGameRender:!1,isCursorVisible:!1,exclusiveModeDisabled:!1,oopOverlay:!1},success:!0}),onGameInfoUpdated:{addListener:e=>e({gameInfo:{isRunning:!0,id:9999,title:"test-game_Test_TITLE"},runningChanged:!0}),removeListener:e=>e({gameInfo:{isRunning:!0,id:9999,title:"test-game_Test_TITLE"},runningChanged:!0})},inputTracking:{onKeyDown:i,onKeyUp:i},events:{onInfoUpdates2:a({info:"info-test"}),onNewEvents:a({events:["event-test"]}),setRequiredFeatures:(e,n)=>n({success:!0})}},T={getCurrentWindow:()=>null,getMainWindow:()=>({window:{}}),obtainDeclaredWindow:(e,n)=>{const r={window:{name:`${e}_Test_Name`,id:`${e}_Test_ID`},success:!0};n(r)}},x={hotkeys:{get:e=>e({result:{games:[]}}),onChanged:{addListener:e=>e(),removeListener:e=>e()}}};Object.defineProperty(window,"overwolf",{writable:!0,value:{games:R,windows:T,settings:x}});function L(){const[e]=o.exports.useState(320),n=h(),{party:r,total:l}=w();return t.createElement(t.Fragment,null,t.createElement(s,{position:"relative",height:"100vh",maxHeight:"100vh",overflow:"hidden",display:"flex",flexDirection:"column",onMouseDown:d},t.createElement(s,{display:"flex",py:"spacing-4",alignItems:"center",justifyContent:"space-between",height:32},t.createElement(s,{display:"flex",alignItems:"center",color:"lins"},t.createElement(s,{color:"pog"},n||""),t.createElement(s,{px:"spacing-12",hidden:!r},t.createElement(s,{display:"flex",alignItems:"center",justifyContent:"space-between"},t.createElement(s,{width:21,height:21},t.createElement(v,null)),l))),t.createElement(E,{title:`${r}`,hidden:!r})),t.createElement(s,{position:"relative",overflow:"hidden",borderRadius:4,width:e,height:e},t.createElement(y,{initialZoom:5})),t.createElement(I,null)))}c.render(t.createElement(o.exports.StrictMode,null,t.createElement(u,null,t.createElement(g,null,t.createElement(p,null,t.createElement(f,null,t.createElement(m,{theme:b},t.createElement(L,null))))))),document.querySelector("#root"));
