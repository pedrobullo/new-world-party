import{L as v,a as t,M as ae,g as ce,r as a,h as K,u as le,s as Z,i as pe,j as me,k as ye}from"./vendor.66f8334e.js";import{t as x,B as i,a as S,E as H}from"./globals.5dd00aca.js";import{u as A}from"./windows.ba65c777.js";import{u as ge,g as ue,N as be,c as $,a as de,S as ke,b as _e,Z as Ee}from"./hotkeys.841a8dfc.js";const he=v.extend({},v.CRS.Simple,{transformation:new v.Transformation(1/16,0,-1/16,0)}),fe=v.latLng(0,4e3),we=v.latLng(1e4,14336),ve=v.latLngBounds(fe,we);function Pe({initialZoom:r,setMap:o,children:n}){return t.createElement(ae,{maxBounds:v.latLngBounds([-1e4,-7e3],[2e4,25e3]),bounds:ve,center:[4200,8900],zoomControl:!1,doubleClickZoom:!1,attributionControl:!1,crs:he,minZoom:0,maxZoom:5,zoom:r,scrollWheelZoom:!1,preferCanvas:!0,whenCreated:o},n)}const{VITE_API_ENDPOINT:J}={VITE_API_ENDPOINT:"http://64.227.97.79:3001",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0};function Q(r){return r<10?`00${r}`:r<100?`0${r}`:`${r}`}class xe extends v.TileLayer{getTileUrl(o){const n=8-o.z-1,s=[1,2,4,8,16,32,64],c=o.x*s[n-1],p=(-o.y-1)*s[n-1];return c<0||p<0||p>=64||c>=64?`${J}/assets/map/empty.webp`:`${J}/assets/map/map_l${n}_y${Q(p)}_x${Q(c)}.webp`}}const Ue=(r,o)=>({instance:new xe("placeholder",{...r}),context:o}),Te=ce(Ue),Re=v.icon({iconUrl:"/player.webp",iconSize:[32,32],tooltipAnchor:[0,-20],className:"leaflet-player-marker"}),Ae=a.exports.forwardRef(({location:r,rotation:o,mapRef:n,centered:s},c)=>{a.exports.useEffect(()=>{n&&r&&s&&n.panTo(r,{animate:!0,easeLinearity:1,duration:.5,noMoveStart:!0})},[n,r,s]);const p=c?.current?.getElement?.();return a.exports.useEffect(()=>{if(p){const m=+(p.getAttribute("data-rotation")||"0")||o;let y=o-180,b=0;m>=180?b+=Math.floor(Math.abs(m+180)/360):m<=-180&&(b-=Math.floor(Math.abs(m-180)/360)),y+=360*b,m-y>=180?y+=360:y-m>=180&&(y-=360),p.setAttribute("data-rotation",y.toString()),p.style.transformOrigin="center",p.style.transform=`${p.style.transform.replace(/\srotate.+/g,"")} rotate(${-y-90}deg)`}},[p,o,r]),t.createElement(K,{ref:c,icon:Re,position:r})});var X=a.exports.memo(Ae);const Ce="test";var Se={test:Ce};const Me={en:Se};let Ie=localStorage?.getItem("locale")||"en";const Ne=Me[Ie]||{};function e(r){return Ne[r]||r}const Le=[{category:"locations",type:"expedition",title:e("Expedition"),iconUrl:"/markers/expedition.webp",hasName:!0},{category:"locations",type:"fort",title:e("Fort"),iconUrl:"/markers/fort.webp",hasName:!0},{category:"locations",type:"outpost",title:e("Outpost"),iconUrl:"/markers/outpost.webp",hasName:!0},{category:"locations",type:"settlement",title:e("Settlement"),iconUrl:"/markers/settlement.webp",hasName:!0},{category:"locations",type:"spiritShrine",title:e("Spirit Shrine"),iconUrl:"/markers/spiritShrine.webp",hasName:!0},{category:"chests",type:"chestsEliteAlchemy",title:e("Alchemy Elite"),iconUrl:"/markers/chest_elite1.webp"},{category:"chests",type:"chestsEliteAncient",title:e("Ancient Elite"),iconUrl:"/markers/chest_elite2.webp"},{category:"chests",type:"chestsEliteProvisions",title:e("Provisions Elite"),iconUrl:"/markers/chest_elite3.webp"},{category:"chests",type:"chestsEliteSupplies",title:e("Supplies Elite"),iconUrl:"/markers/chest_elite4.webp"},{category:"chests",type:"chestsLargeAlchemy",title:e("Alchemy Large"),iconUrl:"/markers/chest_large1.webp"},{category:"chests",type:"chestsLargeAncient",title:e("Ancient Large"),iconUrl:"/markers/chest_large2.webp"},{category:"chests",type:"chestsLargeProvisions",title:e("Provisions Large"),iconUrl:"/markers/chest_large3.webp"},{category:"chests",type:"chestsLargeSupplies",title:e("Supplies Large"),iconUrl:"/markers/chest_large4.webp"},{category:"chests",type:"chestsCommonAlchemy",title:e("Alchemy Common"),iconUrl:"/markers/chest_common1.webp"},{category:"chests",type:"chestsCommonAncient",title:e("Ancient Common"),iconUrl:"/markers/chest_common2.webp"},{category:"chests",type:"chestsCommonProvisions",title:e("Provisions Common"),iconUrl:"/markers/chest_common3.webp"},{category:"chests",type:"chestsCommonSupplies",title:e("Supplies Common"),iconUrl:"/markers/chest_common4.webp"},{category:"enemies",type:"boss",title:e("Boss"),iconUrl:"/markers/boss.webp",hasName:!0,hasLevel:!0},{category:"enemies",type:"bossElite",title:e("Elite Boss"),iconUrl:"/markers/boss.webp",hasName:!0,hasLevel:!0},{category:"skinning",type:"alligator",title:e("Alligator"),iconUrl:"/markers/alligator.webp"},{category:"skinning",type:"bear",title:e("Bear"),iconUrl:"/markers/bear.webp"},{category:"skinning",type:"bison",title:e("Bison"),iconUrl:"/markers/bison.webp"},{category:"skinning",type:"boar",title:e("Boar"),iconUrl:"/markers/boar.webp"},{category:"skinning",type:"cow",title:e("Cow"),iconUrl:"/markers/cow.webp"},{category:"skinning",type:"elk",title:e("Elk"),iconUrl:"/markers/elk.webp"},{category:"skinning",type:"elemential_forest",title:e("Elemential Forest"),iconUrl:"/markers/elk.webp"},{category:"skinning",type:"elemential_mountain",title:e("Elemential Mountain"),iconUrl:"/markers/bear.webp"},{category:"skinning",type:"elemential_tundra",title:e("Elemential Tundra"),iconUrl:"/markers/wolf.webp"},{category:"skinning",type:"goat",title:e("Goat"),iconUrl:"/markers/sheep.webp"},{category:"skinning",type:"lion",title:e("Lion"),iconUrl:"/markers/puma.webp"},{category:"skinning",type:"lynx",title:e("Lynx"),iconUrl:"/markers/lynx.webp"},{category:"skinning",type:"pig",title:e("Pig"),iconUrl:"/markers/pig.webp"},{category:"skinning",type:"rabbit",title:e("Rabbit"),iconUrl:"/markers/hare.webp"},{category:"skinning",type:"sheep",title:e("Sheep"),iconUrl:"/markers/sheep.webp"},{category:"skinning",type:"turkey",title:e("Turkey"),iconUrl:"/markers/turkey.webp"},{category:"skinning",type:"wolf",title:e("Wolf"),iconUrl:"/markers/wolf.webp"},{category:"mining",type:"crystal",title:e("Crystal"),iconUrl:"/markers/crystal.webp"},{category:"mining",type:"gold",title:e("Gold"),iconUrl:"/markers/gold.webp"},{category:"mining",type:"iron",title:e("Iron"),iconUrl:"/markers/iron.webp"},{category:"mining",type:"lodestone",title:e("Lodestone"),iconUrl:"/markers/lodestone.webp"},{category:"mining",type:"oil",title:e("Oil"),iconUrl:"/markers/oil.webp"},{category:"mining",type:"orichalcum",title:e("Orichalcum"),iconUrl:"/markers/orichalcum.webp"},{category:"mining",type:"platinum",title:e("Platinum"),iconUrl:"/markers/platinum.webp"},{category:"mining",type:"saltpeter",title:e("Saltpeter"),iconUrl:"/markers/saltpeter.webp"},{category:"mining",type:"silver",title:e("Silver"),iconUrl:"/markers/silver.webp"},{category:"mining",type:"starmetal",title:e("Starmetal"),iconUrl:"/markers/starmetal.webp"},{category:"fishing",type:"fish_hotspot1",title:e("Fish Broad"),iconUrl:"/markers/fish_hotspot1.webp"},{category:"fishing",type:"fish_hotspot2",title:e("Fish Rare"),iconUrl:"/markers/fish_hotspot2.webp"},{category:"fishing",type:"fish_hotspot3",title:e("Fish Secret"),iconUrl:"/markers/fish_hotspot3.webp"},{category:"logging",type:"ironwood",title:e("Ironwood Tree"),iconUrl:"/markers/ironwood_compass.webp"},{category:"logging",type:"wyrdwood",title:e("Wyrdwood Tree"),iconUrl:"/markers/wyrdwood_compass.webp"},{category:"farming",type:"azoth_spring",title:e("Azoth Spring"),iconUrl:"/markers/azoth_spring.webp"},{category:"farming",type:"fungus",title:e("Fungus"),iconUrl:"/markers/fungi.webp"},{category:"farming",type:"hemp",title:e("Hemp"),iconUrl:"/markers/hemp_compass.webp"},{category:"farming",type:"herb",title:e("Herb"),iconUrl:"/markers/herbs.webp"},{category:"farming",type:"silkweed",title:e("Silkweed"),iconUrl:"/markers/silkweed.webp"},{category:"farming",type:"wirefiber",title:e("Wirefiber"),iconUrl:"/markers/wirefiber.webp"},{category:"cooking_ingredients",type:"barley",title:e("Barley"),iconUrl:"/markers/barley.webp"},{category:"cooking_ingredients",type:"berry",title:e("Berry"),iconUrl:"/markers/berry.webp"},{category:"cooking_ingredients",type:"blueberry",title:e("Blueberry"),iconUrl:"/markers/blueberry.webp"},{category:"cooking_ingredients",type:"broccoli",title:e("Broccoli"),iconUrl:"/markers/broccoli.webp"},{category:"cooking_ingredients",type:"cabbage",title:e("Cabbage"),iconUrl:"/markers/cabbage.webp"},{category:"cooking_ingredients",type:"carrot",title:e("Carrot"),iconUrl:"/markers/carrot.webp"},{category:"cooking_ingredients",type:"corn",title:e("Corn"),iconUrl:"/markers/corn.webp"},{category:"cooking_ingredients",type:"cranberry",title:e("Cranberry"),iconUrl:"/markers/cranberry.webp"},{category:"cooking_ingredients",type:"honey",title:e("Honey"),iconUrl:"/markers/honey.webp"},{category:"cooking_ingredients",type:"milk",title:e("Milk"),iconUrl:"/markers/milk.webp"},{category:"cooking_ingredients",type:"nuts",title:e("Nuts"),iconUrl:"/markers/nuts.webp"},{category:"cooking_ingredients",type:"potato",title:e("Potato"),iconUrl:"/markers/potato.webp"},{category:"cooking_ingredients",type:"pumpkin",title:e("Pumpkin"),iconUrl:"/markers/pumpkin.webp"},{category:"cooking_ingredients",type:"squash",title:e("Squash"),iconUrl:"/markers/squash.webp"},{category:"cooking_ingredients",type:"strawberry",title:e("Strawberry"),iconUrl:"/markers/strawberry.webp"},{category:"cooking_ingredients",type:"turkey_nest",title:e("Turkey Nest"),iconUrl:"/markers/turkey_nest.webp"},{category:"npc",type:"npc_generic",title:e("Generic"),iconUrl:"/markers/npc_generic.webp",hasName:!0},{category:"npc",type:"npc_inn",title:e("Inn"),iconUrl:"/markers/npc_inn.webp",hasName:!0},{category:"npc",type:"npc_covenant",title:e("Covenant"),iconUrl:"/markers/npc_covenant.webp",hasName:!0},{category:"npc",type:"npc_marauder",title:e("Marauder"),iconUrl:"/markers/npc_marauder.webp",hasName:!0},{category:"npc",type:"npc_syndicate",title:e("Syndicate"),iconUrl:"/markers/npc_syndicate.webp",hasName:!0},{category:"lore",type:"lore_note",title:e("Lore Note"),iconUrl:"/markers/lore_note.webp",hasName:!0},{category:"essences",type:"essences_shockbulb",title:e("Shockbulb"),iconUrl:"/markers/wind_plant.webp"},{category:"essences",type:"essences_shockspire",title:e("Shockspire"),iconUrl:"/markers/wind_stone.webp"},{category:"essences",type:"essences_lightning_beetle",title:e("Ligthning Beetle"),iconUrl:"/markers/wind_boid.webp"},{category:"essences",type:"essences_blightroot",title:e("Blightroot"),iconUrl:"/markers/death_plant.webp"},{category:"essences",type:"essences_blightcrag",title:e("Blightcrag"),iconUrl:"/markers/death_stone.webp"},{category:"essences",type:"essences_blightmoth",title:e("Blightmoth"),iconUrl:"/markers/death_boid.webp"},{category:"essences",type:"essences_earthspine",title:e("Earthspine"),iconUrl:"/markers/earth_plant.webp"},{category:"essences",type:"essences_earthcrag",title:e("Earthcrag"),iconUrl:"/markers/earth_stone.webp"},{category:"essences",type:"essences_earthshell_turtle",title:e("Earthshell Turtle"),iconUrl:"/markers/earth_boid.webp"},{category:"essences",type:"essences_dragonglory",title:e("Dragonglory"),iconUrl:"/markers/fire_plant.webp"},{category:"essences",type:"essences_scorchstone",title:e("Scorchstone"),iconUrl:"/markers/fire_stone.webp"},{category:"essences",type:"essences_salamander_snail",title:e("Salamander Snail"),iconUrl:"/markers/fire_boid.webp"},{category:"essences",type:"essences_lifebloom",title:e("Lifebloom"),iconUrl:"/markers/life_plant.webp"},{category:"essences",type:"essences_lifejewel",title:e("Lifejewel"),iconUrl:"/markers/life_stone.webp"},{category:"essences",type:"essences_lifemoth",title:e("Lifemoth"),iconUrl:"/markers/life_boid.webp"},{category:"essences",type:"essences_soulsprout",title:e("Soulsprout"),iconUrl:"/markers/spirit_plant.webp"},{category:"essences",type:"essences_soulspire",title:e("Soulspire"),iconUrl:"/markers/spirit_stone.webp"},{category:"essences",type:"essences_soulwyrm",title:e("Soulwyrm"),iconUrl:"/markers/spirit_boid.webp"},{category:"essences",type:"essences_rivercress",title:e("Rivercress"),iconUrl:"/markers/water_plant.webp"},{category:"essences",type:"essences_springstone",title:e("Springstone"),iconUrl:"/markers/water_stone.webp"},{category:"essences",type:"essences_floating_spinefish",title:e("Floating Spinefish"),iconUrl:"/markers/water_boid.webp"},{category:"pigment",type:"pigment_black_primsabloom",title:e("Black Prismabloom"),iconUrl:"/markers/pigment_black.webp"},{category:"pigment",type:"pigment_blue_primsabloom",title:e("Blue Prismabloom"),iconUrl:"/markers/pigment_blue.webp"},{category:"pigment",type:"pigment_brown_primsabloom",title:e("Brown Prismabloom"),iconUrl:"/markers/pigment_brown.webp"},{category:"pigment",type:"pigment_cyan_primsabloom",title:e("Cyan Prismabloom"),iconUrl:"/markers/pigment_cyan.webp"},{category:"pigment",type:"pigment_green_primsabloom",title:e("Green Prismabloom"),iconUrl:"/markers/pigment_green.webp"},{category:"pigment",type:"pigment_magenta_primsabloom",title:e("Magenta Prismabloom"),iconUrl:"/markers/pigment_magenta.webp"},{category:"pigment",type:"pigment_orange_primsabloom",title:e("Orange Prismabloom"),iconUrl:"/markers/pigment_orange.webp"},{category:"pigment",type:"pigment_red_primsabloom",title:e("Red Prismabloom"),iconUrl:"/markers/pigment_red.webp"},{category:"pigment",type:"pigment_turquoise_primsabloom",title:e("Turquoise Prismabloom"),iconUrl:"/markers/pigment_turquoise.webp"},{category:"pigment",type:"pigment_violet_primsabloom",title:e("Violet Prismabloom"),iconUrl:"/markers/pigment_violet.webp"},{category:"pigment",type:"pigment_white_primsabloom",title:e("White Prismabloom"),iconUrl:"/markers/pigment_white.webp"},{category:"pigment",type:"pigment_yellow_primsabloom",title:e("Yellow Prismabloom"),iconUrl:"/markers/pigment_yellow.webp"},{category:"service",type:"service_arcane_repository",title:e("Arcane Repository"),iconUrl:"/markers/service_arcane_repository.webp"},{category:"service",type:"service_forge",title:e("Forge"),iconUrl:"/markers/service_forge.webp"},{category:"service",type:"service_kitchen",title:e("Kitchen"),iconUrl:"/markers/service_kitchen.webp"},{category:"service",type:"service_loom",title:e("Loom"),iconUrl:"/markers/service_loom.webp"},{category:"service",type:"service_outfitting",title:e("Outfitting"),iconUrl:"/markers/service_outfitting.webp"},{category:"service",type:"service_smelter",title:e("Smelter"),iconUrl:"/markers/service_smelter.webp"},{category:"service",type:"service_stonecutting",title:e("Stonecutting"),iconUrl:"/markers/service_stonecutting.webp"},{category:"service",type:"service_storage",title:e("Storage"),iconUrl:"/markers/service_storage.webp"},{category:"service",type:"service_tannery",title:e("Tannery"),iconUrl:"/markers/service_tannery.webp"},{category:"service",type:"service_territory_board",title:e("Territory Board"),iconUrl:"/markers/service_territory_board.webp"},{category:"service",type:"service_town_board",title:e("Town Board"),iconUrl:"/markers/service_town_board.webp"},{category:"service",type:"service_trading_post",title:e("Trading Post"),iconUrl:"/markers/service_trading_post.webp"},{category:"service",type:"service_war_board",title:e("War Board"),iconUrl:"/markers/service_warboard.webp"},{category:"service",type:"service_woodshop",title:e("Woodshop"),iconUrl:"/markers/service_woodshop.webp"},{category:"service",type:"service_workshop",title:e("Workshop"),iconUrl:"/markers/service_workshop.webp"},{category:"other",type:"miscellaneous",title:e("Miscellaneous"),iconUrl:"/markers/other.webp"}];function Oe({markers:r}){const o=le();return a.exports.useEffect(()=>{if(!o&&!r.length)return;const n=v.canvasIconLayer({}).addTo(o),s=[];for(let c=0;c<r.length;c++){const p=r[c],m=Le.find(w=>w.type===p.type);if(!m)continue;const y=[p?.position?.[1]||0,p?.position?.[0]||0],b=v.icon({iconUrl:`${m?.iconUrl}`,iconSize:[30,30],iconAnchor:[10,9]}),_=v.marker(y,{icon:b});s.push(_)}s.length&&n.addLayers(s)},[o,r]),null}const Ye=Z.div`
  @keyframes pulseAssist {
    0% {
      box-shadow: 0 0 0 0 ${x.colors.pingAssist};
    }
    70% {
      box-shadow: 0 0 0 12px ${x.colors.pingShadow};
    }
    100% {
      box-shadow: 0 0 0 0 ${x.colors.pingShadow};
    }
  }
  @keyframes pulseWarning {
    0% {
      box-shadow: 0 0 0 0 ${x.colors.pingWarning};
    }
    70% {
      box-shadow: 0 0 0 12px ${x.colors.pingShadow};
    }
    100% {
      box-shadow: 0 0 0 0 ${x.colors.pingShadow};
    }
  }
  display: flex;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${r=>x.colors?.["ping"+r.type]};
  cursor: pointer;
  box-shadow: 0 0 0 ${r=>x.colors?.["ping"+r.type]};
  animation: ${r=>"pulse"+r.type} 0.6s infinite;
  animation-fill-mode: forwards;
`,De=a.exports.forwardRef(({type:r,position:o},n)=>{const[s]=A("minimapEvent-volume",.3);a.exports.useEffect(()=>{const p=new Audio("/sounds/Bip.ogg");p.volume=.01,p.play()},[s]);const c=v.divIcon({className:"custom-icon",html:pe.renderToString(t.createElement(Ye,{type:r}))});return t.createElement(K,{ref:n,position:o,icon:c})});var Be=a.exports.memo(De);const j=a.exports.createContext({username:null,setUsername:()=>{}});function lt({children:r}){const[o,n]=A("minimap-username",null);return t.createElement(j.Provider,{value:{username:o,setUsername:n}},r)}function W(){return a.exports.useContext(j).username}function $e(){return a.exports.useContext(j).setUsername}const ee=a.exports.createContext({position:null,following:!0,toggleFollowing:()=>{}});function pt({children:r}){const[o,n]=a.exports.useState(null),[s,c]=A("following",!0),p=W(),m=$e(),{isRunning:y}=ge({gameId:be});a.exports.useEffect(()=>{if(!y)return;overwolf.games.events.setRequiredFeatures(["game_info"],()=>{});let _=setTimeout(k,50),w=!0,P=[0,0],l=!1;async function k(){try{const E=await ue(),{player_name:u,location:h}=E?.game_info||{};if(h){const U=[+h.match(/position.y,(\d+.\d+)/)[1],+h.match(/position.x,(\d+.\d+)/)[1]],R=+h.match(/rotation.z,(\d+)/)[1];(P[0]!==U[0]||P[1]!==U[1])&&(P=U,n({location:U,rotation:R}),l=!1)}u&&u!==p&&m(u)}catch(E){l||(console.error(E),l=!0)}finally{w&&(_=setTimeout(k,50))}}return()=>{w=!1,clearTimeout(_)}},[y]);function b(){c(!s)}return t.createElement(ee.Provider,{value:{position:o,following:s,toggleFollowing:b}},r)}function te(){return a.exports.useContext(ee)}const{VITE_API_ENDPOINT:re}={VITE_API_ENDPOINT:"http://64.227.97.79:3001",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0};if(!re)throw new Error("VITE_API_ENDPOINT is not set");async function Ve(r,o={}){const n=await fetch(`${re}${r}`,o);if(!n.ok){if(n.status===401){const c=new CustomEvent("session-expired");window.dispatchEvent(c)}if(n.headers.get("Content-Type")?.includes("application/json")){const c=await n.json();throw new Error(c)}else{const c=await n.text();throw new Error(c)}}return await n.json()}const ne=a.exports.createContext({markers:[],refresh:()=>{}});function mt({children:r}){const[o,n]=A("markers",[]),s=a.exports.useCallback(()=>{Ve("/api/markers").then(c=>{JSON.stringify(c)!==JSON.stringify(o)&&n(c)})},[]);return a.exports.useEffect(()=>{s()},[]),t.createElement(ne.Provider,{value:{markers:o,refresh:s}},r)}function ze(){return a.exports.useContext(ne)}const{VITE_API_ENDPOINT:oe}={VITE_API_ENDPOINT:"http://64.227.97.79:3001",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0};if(!oe)throw new Error("VITE_API_ENDPOINT is not set");let F;const He=()=>{const r=oe;return F||(F=me(r,{reconnection:!0,transports:["websocket"]}))},je="action",G=a.exports.createContext({event:null,socket:null});function yt({children:r}){const[o,n]=a.exports.useState(null),s=He();return a.exports.useEffect(()=>(s&&(s.on(je,n),s.disconnected&&(console.log("[WS] - Reconnecting..."),s.connect())),()=>{s&&s.disconnect()}),[s]),t.createElement(G.Provider,{value:{event:o,socket:s}},r)}function We(){return a.exports.useContext(G).event}function Fe(){return a.exports.useContext(G).socket}const q=3e4,d={PARTY_CREATE:"party/create",PARTY_LEAVE:"party/leave",PARTY_JOIN:"party/join",PARTY_MOVE:"party/move",PARTY_MOVE_MEMBER:"party/move/party",PARTY_JOIN_MEMBER:"party/join/member",PARTY_LEAVE_MEMBER:"party/leave/member",PARTY_READY_CHECK_REQUEST:"party/readycheck/request",PARTY_READY_CHECK_REPLY:"party/readycheck/reply",PARTY_PULL_REQUEST:"party/pull/request",PARTY_PING_REQUEST:"party/ping/request",PARTY_PING_REPLY:"party/ping/receive",PARTY_DISCONNECT_MEMBER:"party/disconnect/member",ERROR:"error"},se=a.exports.createContext({party:null,joinParty:()=>{},createParty:()=>{},leaveParty:()=>{},move:()=>{},ping:()=>{},pings:[],clearPings:()=>{},readyCheck:()=>{},pull:()=>{},members:{},total:0,status:"none"});function gt({children:r}){const[o,n]=A("latestMembers",{}),[s,c]=A("latestParty",null),[p,m]=A("minimapEvent",{type:"EMPTY"}),[y]=A("minimapEvent-eventResponse","EMPTY"),[b,_]=a.exports.useState([]),[w,P]=a.exports.useState("none"),l=We(),k=Fe(),E=W()||"Anonymous",u=({username:g,...f})=>{if(g)n({...o,[g]:{...o[g],...f,username:g}});else if(f.socketId){const T=Object.values(o).find(O=>O.socketId===f.socketId);T&&n({...o,[T.username]:{...o[T.username],...f}})}},h=g=>{const f=Object.values(o).reduce((T,O)=>g.members.includes(O.socketId)?{...T,[O.username]:O}:T,{});n(f)},U=g=>Object.values(o).find(T=>T.socketId===g)?.username;a.exports.useEffect(()=>{s&&(console.log("Reconnecting party:",s),R(s))},[]),a.exports.useEffect(()=>{switch(y){case"PARTY_READY_CHECK_READY":B(!0);break;case"PARTY_READY_CHECK_NOT_READY":B(!1);break}},[y]),a.exports.useEffect(()=>{if(l&&l.type)switch(l.type){case d.PARTY_CREATE:c(l.payload?.partyId),u(l.payload?.member);break;case d.PARTY_JOIN:c(l.payload?.partyId),n(l.payload?.members);break;case d.PARTY_LEAVE:c(null),n({});break;case d.PARTY_JOIN_MEMBER:u(l.payload),m({highlight:`${l?.payload?.username}`,title:"joined group",type:"PARTY_ALERT"});break;case d.PARTY_MOVE_MEMBER:u(l.payload);break;case d.PARTY_LEAVE_MEMBER:h(l.payload),m({highlight:l?.payload?.username||"Anonymous",title:"left group",type:"PARTY_ALERT"});break;case d.PARTY_DISCONNECT_MEMBER:u(l.payload),m({highlight:U(l?.payload?.socketId),title:"disconnected",type:"PARTY_ALERT"});break;case d.PARTY_PING_REPLY:_(g=>[...g,l.payload]);break;case d.PARTY_READY_CHECK_REQUEST:m({title:`${l?.payload?.username}`,time:q,type:"READY_CHECK"}),P("readyCheck"),setTimeout(()=>{P("none")},q);break;case d.PARTY_READY_CHECK_REPLY:u(l.payload),setTimeout(()=>{u({...l.payload,ready:void 0})},q);break;case d.PARTY_PULL_REQUEST:m({highlight:`${l?.payload?.username}`,title:"start pulling in",type:"PULL",time:1e4});break;case d.ERROR:l.payload==="Invalid Party"&&(c(null),n({}));break}},[l]);const R=g=>{k?.emit(d.PARTY_JOIN,{partyId:g,username:E})},Y=()=>{k?.emit(d.PARTY_CREATE,{username:E})},D=()=>{k?.emit(d.PARTY_LEAVE,{partyId:s})},V=(g,f)=>{s&&k?.emit(d.PARTY_MOVE,{username:E,position:g,rotation:f})},z=()=>{s&&k?.emit(d.PARTY_READY_CHECK_REQUEST,{username:E})},B=g=>{s&&k?.emit(d.PARTY_READY_CHECK_REPLY,{username:E,ready:g})},M=()=>{s&&k?.emit(d.PARTY_PULL_REQUEST,{username:E})},C=({position:g,type:f})=>{s&&k?.emit(d.PARTY_PING_REQUEST,{username:E,position:g,type:f})},L=g=>{_(f=>f.filter(T=>T.pingId&&!g.includes(T.pingId)))},I=+(Object.keys(o).length||0);return t.createElement(se.Provider,{value:{party:s,joinParty:R,createParty:Y,leaveParty:D,readyCheck:z,pull:M,ping:C,pings:b,clearPings:L,move:V,members:o,total:I,status:w}},r)}function ie(){return a.exports.useContext(se)}function Ge({map:r}){const o=a.exports.useRef(null),{position:n}=te(),{markers:s}=ze(),c=W(),{party:p,move:m,members:y,pings:b,ping:_,clearPings:w}=ie();ye({click:u=>{_({position:[u.latlng.lat,u.latlng.lng],type:"Warning"})}});const P=n?.location||[4200,8900],l=n?.rotation||0;a.exports.useEffect(()=>{p&&m(P,l)},[n]),a.exports.useEffect(()=>{if(b.length){const u=(b||[]).map(({pingId:h})=>`${h}`);setTimeout(()=>{w(u)},2e3)}},[b]);const k=a.exports.useMemo(()=>b.length?(b||[]).map(({type:h,position:U,pingId:R})=>R?t.createElement(Be,{key:`ping-${R}`,type:h,position:U}):null):null,[b]),E=a.exports.useMemo(()=>Object.keys(y).filter(u=>y[u].username!==c).map(u=>{const h=y[u];return t.createElement(X,{key:`member-${u}`,mapRef:r,location:h.position||[0,0],rotation:h.rotation||0})}),[y]);return t.createElement(t.Fragment,null,t.createElement(Te,{tileSize:1024}),t.createElement(X,{ref:o,mapRef:r,location:P,rotation:l,centered:!0}),E,k,s.length&&t.createElement(Oe,{markers:s}))}function ut({initialZoom:r}){const[o,n]=a.exports.useState(null);return a.exports.useEffect(()=>{o?.setZoom?.(r)},[r]),t.createElement(Pe,{initialZoom:r,setMap:n},t.createElement(Ge,{map:o}))}const qe="Missing Location",Ke="Offline",Ze={none:"",ready:"READY",notReady:"NOT READY",request:"????"},Je=({username:r,pings:o,mePoint:n,position:s,online:c,status:p="none"})=>{const m=o?.find(l=>l.username===r),y=m?`Point ${m.type}`:"",b=!s||!s[0]||!s[1],_=()=>p==="request"?"yellowOpacity":p==="ready"?"greenOpacity":p==="notReady"?"redOpacity":m?`pingLight${m.type}`:"blueOpacity",w=l=>l?.[0]&&l?.[1]?`(${n.distanceTo([l[1],l[0]]).toFixed(1)}m)`:"",P=()=>p==="none"?c?b?qe:"":Ke:Ze[p];return t.createElement(i,{display:"flex",flexDirection:"column",border:"solid 1px",borderColor:"blueOpacity",minWidth:"100px",m:"spacing-1",bg:_(),opacity:b?.8:1,style:{transition:"all ease 0.2s"}},t.createElement(i,{display:"flex",alignItems:"center",p:"spacing-2"},t.createElement(i,{mr:"spacing-4",height:21},t.createElement("img",{width:21,height:21,src:"/player.webp"})),t.createElement(i,{style:{fontSize:12,textShadow:"1px 1px #000"}},r," ",w(s))),t.createElement(i,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",p:"spacing-4",height:28,style:{fontSize:12,textShadow:"1px 1px 1px #000"}},t.createElement(i,null,y," ",w(m?.position)),t.createElement(i,{color:"pingAssist"},P())))};var Qe=a.exports.memo(Je);const Xe=Z.input`
  display: flex;
  flex: 1;
  background-color: ${x.colors.blackOpacity};
  color: ${x.colors.whiteOpacity};
  border: 1px solid ${x.colors.blackOpacity};
  /* padding-left: 8px; */
`,et=({onChange:r})=>t.createElement(Xe,{onChange:o=>r(o.target.value),role:"input",maxLength:6}),N=["Party","Party Actions","Settings"],tt=268,bt=()=>{const[r,o]=a.exports.useState(""),[n,s]=a.exports.useState(N[0]),c=$(de),p=$(ke),m=$(_e),y=$(Ee),[b]=A("minimapEvent-volume",.3),[_,w]=A("minimapEvent",{type:"EMPTY"}),{joinParty:P,createParty:l,leaveParty:k,readyCheck:E,pull:u,party:h,members:U,pings:R,status:Y}=ie(),{position:D}=te(),V=v.point(D?.location?.[1]||0,D?.location?.[0]||0),z=a.exports.useMemo(()=>{const M=N.map((C,L)=>{const I=L?"spacing-4":"none",g=n===C?"primaryActive":"primary";return t.createElement(i,{key:`party-control-${C}`,ml:I},t.createElement(S,{key:`party-control-button-${C}`,variant:g,onClick:()=>s(C)},C))});return t.createElement(i,{display:"flex",width:"100%",flexWrap:"nowrap"},M)},[n]),B=a.exports.useMemo(()=>n===N[0]?t.createElement(i,{key:"party-tab-0",display:"flex",style:{flexFlow:"column wrap"},maxHeight:tt},Object.values(U).map(({username:M,position:C,online:L,ready:I},g)=>{const f=()=>Y==="readyCheck"?I!==void 0?I?"ready":"notReady":"request":"none";return t.createElement(Qe,{key:`party-member-${M}-${g}`,username:M,pings:R,mePoint:V,position:C,online:L,status:f()})})):n===N[1]?t.createElement(i,{key:"party-tab-1",display:"flex",flexDirection:"column"},t.createElement(i,{display:"flex",flexDirection:"column"},t.createElement(i,{my:"spacing-6"},"Timers"),t.createElement(i,{display:"flex",flexDirection:"row"},t.createElement(i,{mr:"spacing-4"},t.createElement(S,{key:"party-pull",variant:"primary",disabled:_.type===H.COUNTDOWN,onClick:()=>w({title:"2min countdown",time:12e4,type:"COUNTDOWN"})},"Countdown 2min")),t.createElement(i,null,t.createElement(S,{key:"party-pull",variant:"primary",disabled:_.type===H.TIMER,onClick:()=>w({title:"Timer",type:"TIMER"})},"Timer")))),t.createElement(i,{display:"flex",flexDirection:"column",mt:"spacing-12"},t.createElement(i,{my:"spacing-6"},"Pull"),t.createElement(i,{display:"flex",flexDirection:"row"},t.createElement(i,{mr:"spacing-4"},t.createElement(S,{key:"party-readycheck",variant:"primary",onClick:E},"Ready Check")),t.createElement(i,{mr:"spacing-4"},t.createElement(S,{key:"party-pull",variant:"primary",disabled:_.type===H.PULL,onClick:u},"Pull"))))):n===N[2]?t.createElement(i,{key:"party-tab-2",display:"flex",flexDirection:"column"},t.createElement(i,{my:"spacing-6"},"Volume: ",t.createElement("b",null,b)),t.createElement(i,{mt:"spacing-8",mb:"spacing-4"},"Hotkeys"),t.createElement(i,{display:"flex",flexDirection:"row",color:"pingAssist"},t.createElement(i,{mr:"spacing-6"},"Self Ping Assist:"),t.createElement(i,null,t.createElement("a",{href:`overwolf://settings/games-overlay?hotkey=${c}&gameId=21816`},c))),t.createElement(i,{display:"flex",flexDirection:"row",color:"pingWarning"},t.createElement(i,{mr:"spacing-6"},"Self Ping Warning:"),t.createElement(i,null,t.createElement("a",{href:`overwolf://settings/games-overlay?hotkey=${p}&gameId=21816`},p))),t.createElement(i,{display:"flex",flexDirection:"row"},t.createElement(i,{mr:"spacing-6"},"Map Zoom In:"),t.createElement(i,null,t.createElement("a",{href:`overwolf://settings/games-overlay?hotkey=${m}&gameId=21816`},m))),t.createElement(i,{display:"flex",flexDirection:"row"},t.createElement(i,{mr:"spacing-6"},"Map Zoom Out:"),t.createElement(i,null,t.createElement("a",{href:`overwolf://settings/games-overlay?hotkey=${y}&gameId=21816`},y))),t.createElement(i,{mt:"spacing-12",mr:"spacing-4"},t.createElement(S,{key:"party-leave",variant:"warning",onClick:()=>{k(),setTimeout(()=>s(N[0]),100)}},"Leave Party"))):null,[n,U,R,Y]);return h?t.createElement(i,{display:"flex",flexDirection:"column",alignItems:"flex-end"},t.createElement(i,{display:"flex",pt:"spacing-8",flexWrap:"nowrap",justifyContent:"space-between",width:"100%"},t.createElement(i,null),t.createElement(i,null,z)),t.createElement(i,{p:"spacing-4",bg:"blueOpacity",width:"100%",style:{border:`solid 1px ${x.colors.blackOpacity}`,borderTop:"none"}},B)):t.createElement(i,{display:"flex",flexDirection:"column"},t.createElement(i,{display:"flex",py:"spacing-8"},t.createElement(i,{mr:"spacing-8"},t.createElement(S,{variant:"primary",onClick:()=>l()},"Create Party")),t.createElement(i,{display:"flex",flex:1},t.createElement(i,{mr:"spacing-2"},t.createElement(S,{variant:"primary",onClick:()=>P(r)},"Join Party")),t.createElement(et,{onChange:o}))))};function rt(){return t.createElement("svg",{height:"16px",viewBox:"0 0 24 24",width:"16px",fill:"currentColor"},t.createElement("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}))}function nt(){return t.createElement("svg",{height:"16px",viewBox:"0 0 24 24",width:"16px",fill:"currentColor"},t.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}))}function ot(){return t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 1000 1000",enableBackground:"new 0 0 1000 1000",height:"16px",width:"16px"},t.createElement("g",null,t.createElement("path",{d:"M710,10H360c-38.6,0-70,31.4-70,70v630c0,38.6,31.4,70,70,70h490c38.6,0,70-31.4,70-70V220L710,10z M710,109l111,111H710V109z M850,710H360V80h280v210h210V710z"}),t.createElement("path",{d:"M430,360h350v70H430V360z"}),t.createElement("path",{d:"M430,500h350v70H430V500z"}),t.createElement("path",{d:"M640,920H150V290h70v-70h-70c-38.6,0-70,31.4-70,70v630c0,38.6,31.4,70,70,70h490c38.6,0,70-31.4,70-70v-70h-70V920z"})))}const dt=({title:r,hidden:o})=>{const[n,s]=a.exports.useState(!0),c=()=>{s(m=>!m)},p=()=>{overwolf.utils.placeOnClipboard(r)};return t.createElement(i,{display:"flex",justifyContent:"center",alignItems:"center"},t.createElement(i,{height:18,style:{color:x.colors.lins,fontSize:"18px",fontFamily:"monospace",lineHeight:n?"16px":"22px"},hidden:o},n?r:"******"),t.createElement(i,{hidden:o},t.createElement("button",{onClick:c,style:{width:20,height:20},title:"Toggle Party Code"},n?t.createElement(nt,null):t.createElement(rt,null)),t.createElement("button",{onClick:p,style:{width:20,height:20},title:"Copy Party Code"},t.createElement(ot,null))))};function kt(){return t.createElement("svg",{viewBox:"0 0 24 24"},t.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}))}export{mt as M,gt as P,dt as R,yt as S,lt as U,pt as a,ie as b,te as c,kt as d,ut as e,bt as f,W as u};
