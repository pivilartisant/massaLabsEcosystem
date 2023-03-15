import{j as A,r as n,a as w}from"./react-04e5617c.js";import{c as y}from"./react-dom-fd668070.js";import{L as m,B as x}from"./react-router-dom-e390a5aa.js";import{u as d,C as k,O as M}from"./@react-three-c8c30046.js";import{a as C,d as O,e as P,f as g}from"./react-router-26fde0af.js";import"./@chevrotain-7e5ab5c8.js";import"./lodash-4ed993c7.js";import"./scheduler-04ce0582.js";import"./@remix-run-e6e270e5.js";import"./@babel-34ca84e8.js";import"./three-7873497c.js";import"./react-use-measure-19de349e.js";import"./debounce-ae8cc837.js";import"./its-fine-873af5a6.js";import"./react-reconciler-9b4c502a.js";import"./maath-4ed993c7.js";import"./@react-spring-dc6bc5fd.js";import"./lodash.pick-4ed993c7.js";import"./three-stdlib-61ce261d.js";import"./mmd-parser-4ed993c7.js";import"./chevrotain-4921e3dd.js";import"./regexp-to-ast-4ed993c7.js";import"./opentype.js-4ed993c7.js";import"./zustand-bab0857b.js";import"./suspend-react-00b64780.js";import"./lodash.omit-4ed993c7.js";import"./stats.js-4ed993c7.js";import"./react-composer-dc6bc5fd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const i of c)if(i.type==="childList")for(const h of i.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function r(c){const i={};return c.integrity&&(i.integrity=c.integrity),c.referrerPolicy&&(i.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?i.credentials="include":c.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(c){if(c.ep)return;c.ep=!0;const i=r(c);fetch(c.href,i)}})();const B=A.Fragment,e=A.jsx,a=A.jsxs;function Q(){return a("div",{className:"ecosystem-header",children:[e("h2",{className:"ecosystem-header-title",children:"Ecosystem"}),e("h3",{className:"ecosystem-header-desc",children:"Explore the apps and integrations in the Massa ecosystem"})]})}function T(s){const{nodes:t,materials:r}=d("/public/models/massaNodes.gltf");n.useRef();const[l,c]=n.useState("#fff"),i=()=>{c(l==="#fff"?"#e74e4e":"#fff")};return a("group",{...s,dispose:null,children:[e("mesh",{"material-color":l,geometry:t.sphere5.geometry,position:[5.5,-1,-.01],scale:1.46}),e("mesh",{onPointerEnter:()=>i(),onPointerLeave:()=>i(),geometry:t.sphere5a.geometry,material:r["Material.006"],position:[5.49,-1,-.05],scale:-1.28})]})}d.preload("/massaNodes.gltf");function D(s){const{nodes:t,materials:r}=d("/public/models/massaNodes.gltf");n.useRef();const[l,c]=n.useState("#fff"),i=()=>{c(l==="#fff"?"#e74e4e":"#fff")};return a("group",{...s,dispose:null,children:[e("mesh",{"material-color":l,geometry:t.sphere4.geometry,position:[2.52,-.5,-4.18],scale:1.46}),e("mesh",{onPointerEnter:()=>i(),onPointerLeave:()=>i(),geometry:t.sphere4a.geometry,material:r["Material.006"],position:[2.52,-.53,-4.23],scale:-1.28})]})}d.preload("/massaNodes.gltf");function E(s){const{nodes:t,materials:r}=d("/public/models/massaNodes.gltf");n.useRef();const[l,c]=n.useState("#fff"),i=()=>{c(l==="#fff"?"#e74e4e":"#fff")};return a("group",{...s,dispose:null,children:[e("mesh",{"material-color":l,geometry:t.sphere1.geometry,position:[-2.5,1.5,4.3],scale:1.46}),e("mesh",{onPointerEnter:()=>i(),onPointerLeave:()=>i(),geometry:t.sphere1a.geometry,material:r["Material.006"],position:[-2.5,1.51,4.37],scale:-1.28})]})}d.preload("/massaNodes.gltf");function I(s){const{nodes:t,materials:r}=d("/public/models/massaNodes.gltf");n.useRef();const[l,c]=n.useState("#fff"),i=()=>{c(l==="#fff"?"#e74e4e":"#fff")};return a("group",{...s,dispose:null,children:[e("mesh",{"material-color":l,geometry:t.sphere6.geometry,position:[2.53,-1.5,4.31],scale:1.46}),e("mesh",{onPointerEnter:()=>i(),onPointerLeave:()=>i(),geometry:t.sphere6a.geometry,material:r["Material.006"],position:[2.56,-1.51,4.35],scale:-1.28})]})}d.preload("/massaNodes.gltf");function L(s){const{nodes:t,materials:r}=d("/public/models/massaNodes.gltf");n.useRef();const[l,c]=n.useState("#fff"),i=()=>{c(l==="#fff"?"#e74e4e":"#fff")};return a("group",{...s,dispose:null,children:[e("mesh",{"material-color":l,geometry:t.sphere3.geometry,position:[-2.66,.5,-4.01],scale:1.46}),e("mesh",{onPointerEnter:()=>i(),onPointerLeave:()=>i(),geometry:t.sphere3a.geometry,material:r["Material.006"],position:[-2.71,.47,-4.04],scale:-1.28})]})}d.preload("/massaNodes.gltf");function R(s){const{nodes:t,materials:r}=d("/public/models/massaNodes.gltf");n.useRef();const[l,c]=n.useState("#fff"),i=()=>{c(l==="#fff"?"#e74e4e":"#fff")};return a("group",{...s,dispose:null,children:[e("mesh",{"material-color":l,geometry:t.sphere2.geometry,position:[-5.49,1,-.13],scale:1.46}),e("mesh",{onPointerEnter:()=>i(),onPointerLeave:()=>i(),geometry:t.sphere2a.geometry,material:r["Material.006"],position:[-5.53,1,-.18],scale:-1.28})]})}d.preload("/massaNodes.gltf");function S(s){const{nodes:t,materials:r}=d("/public/models/massaTextNode.gltf");return a("group",{...s,dispose:null,children:[e("mesh",{geometry:t.Text.geometry,material:r["Material.002"],position:[-2.78,-.55,4.53],rotation:[Math.PI/2,0,.89]}),e("mesh",{geometry:t.Text001.geometry,material:r["Material.002"],position:[-5.9,-1.07,.35],rotation:[Math.PI/2,0,1.6]}),e("mesh",{geometry:t.Text002.geometry,material:r["Material.002"],position:[-2.97,-1.53,-4.42],rotation:[Math.PI/2,0,2.48]}),e("mesh",{geometry:t.Text003.geometry,material:r["Material.002"],position:[2.91,-2.57,-4.44],rotation:[Math.PI/2,0,-2.35]}),e("mesh",{geometry:t.Text004.geometry,material:r["Material.002"],position:[5.93,-3.06,-.24],rotation:[Math.PI/2,0,-1.59]}),e("mesh",{geometry:t.Text005.geometry,material:r["Material.002"],position:[2.96,-3.66,4.43],rotation:[Math.PI/2,0,-.62]}),e("mesh",{geometry:t.sphereCenter2.geometry,material:r["Material.002"],scale:.31}),e("mesh",{geometry:t.sphereCenter1.geometry,material:r["Material.006"],scale:.28})]})}d.preload("/massaTextNode.gltf");function G(){const s=C(),t=r=>{s(r)};return a(B,{children:[e(E,{onClick:()=>t("/defi")}),e(R,{onClick:()=>t("/games")}),e(L,{onClick:()=>t("/nft")}),e(D,{onClick:()=>t("/social")}),e(T,{onClick:()=>t("/tools")}),e(I,{onClick:()=>t("/wallet")}),e(S,{})]})}function j(){return e("div",{className:"overview-canvas-container",children:e(k,{className:"overview-canvas",camera:{fov:75,position:[0,0,15]},children:a(n.Suspense,{fallback:null,children:[e("pointLight",{position:[4,10,10],intensity:.7}),e("pointLight",{position:[-4,10,10],intensity:.3}),e(G,{}),e(M,{enableZoom:!1})]})})})}const U="/assets/massa_love-793e7bcd.png";function Y(){const[s,t]=n.useState("overview-img-none");return n.useState("help-container-display"),a("div",{className:"overview-scene",children:[e(j,{}),a("div",{className:"overview-tuto-containter",children:[e("img",{className:s,src:U,alt:""}),a("p",{className:s,children:["Use your mouse to explore our ecosystem ",e("br",{})," & click on the nodes to see who uses our blockchain "]}),e("div",{className:"help-container-display",onClick:()=>{t(s==="overview-img-none"?"overview-img-display":"overview-img-none")},children:e("p",{className:"help",children:"?"})})]})]})}function z(){const[s,t]=n.useState("overview"),r=l=>{t(l)};return a("div",{className:"navigator",children:[e(m,{className:s==="overview"?"button active-button":"button passive-button",onClick:()=>r("overview"),to:"/",children:"Overview"}),e(m,{className:s==="defi"?"button active-button":"button passive-button",onClick:()=>r("defi"),to:"/defi",children:"DeFI"}),e(m,{className:s==="games"?"button active-button":"button passive-button",onClick:()=>r("games"),to:"/games",children:"Games"}),e(m,{className:s==="nft"?"button active-button":"button passive-button",onClick:()=>r("nft"),to:"/nft",children:"NFTs"}),e(m,{className:s==="soc"?"button active-button":"button passive-button",onClick:()=>r("soc"),to:"/social",children:"Social"}),e(m,{className:s==="tools"?"button active-button":"button passive-button",onClick:()=>r("tools"),to:"/tools",children:"Tools"}),e(m,{className:s==="wallet"?"button active-button":"button passive-button",onClick:()=>r("wallet"),to:"/wallet",children:"Wallet"})]})}const J="/assets/dusa-6cd04d30.png",X="data:image/png;base64,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",o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACCSURBVHgBhY/NCYVADISTdQ+vi9eKwgrqyRK0AktwrcQ2PHiwBDsQtQx/YlZUBF0cGDIJXwhBONT5QeIQlvAieaUJmkWSd7YOYMYlNhnfNkcV5QSkOTZsV9gAdoFsMxM24F9X+pyLL+CCbMA8/9oFKd2BQYXUq0CDRXKF1Xz4OHHXBq3TQSYN53StAAAAAElFTkSuQmCC";function F(){return a("div",{className:"card",children:[a("div",{className:"card-container",children:[e("img",{className:"card-img",src:J,alt:"dusa"}),a("div",{className:"card-text-container",children:[e("h6",{className:"card-text-title",children:"Dusa"}),e("p",{className:"card-text-desc",children:"The Dusa Protocol is the first DEX with decentralized frontend and automatic orders."}),a("p",{className:"card-text-link-dec",children:["visit ",e("a",{className:"card-text-link",href:"https://dusa.io/",target:"_blank",children:"dusa.io "}),e("img",{className:"card-link-arrow",src:o,alt:"link arrow"})]})]})]}),a("div",{className:"card-container",children:[e("img",{className:"card-img",src:X,alt:"retreeb"}),a("div",{className:"card-text-container",children:[e("h6",{className:"card-text-title",children:"Retreeb"}),e("p",{className:"card-text-desc",children:"Retreeb is the 1st distributed payment solution that shares its network fees to funding social and solidarity projects."}),a("p",{className:"card-text-link-dec",children:[" visit ",e("a",{className:"card-text-link",href:"https://retreeb.io/",target:"_blank",children:"retreeb.io "}),e("img",{className:"card-link-arrow",src:o,alt:"link arrow"})]})]})]})]})}const u="/assets/starOrigins-c9f20d71.webp",f="/assets/massacar-7eca1e7e.png",N="/assets/mecham-13cf9f91.png",K="/assets/metarchy-93282d5b.png";function W(){return a("div",{className:"card",children:[a("div",{className:"card-container",children:[e("img",{className:"card-img",src:K,alt:"metarchy"}),a("div",{className:"card-text-container",children:[e("h6",{className:"card-text-title",children:"Metarchy"}),e("p",{className:"card-text-desc",children:"Metarchy is a Turn-based strategy game with micro-economy, where you must predict the actions of opponents."}),a("p",{className:"card-text-link-dec",children:["visit ",e("a",{className:"card-text-link",href:"https://metarchy.space/",target:"_blank",children:"matarchy.space "}),e("img",{className:"card-link-arrow",src:o,alt:"link arrow"})]})]})]}),a("div",{className:"card-container",children:[e("img",{className:"card-img",src:u,alt:"star origins"}),a("div",{className:"card-text-container",children:[e("h6",{className:"card-text-title",children:"Star Origins"}),e("p",{className:"card-text-desc",children:"Star Origins is a Play & Earn Game. Choose your planet and send your fleet to outer space."}),a("p",{className:"card-text-link-dec",children:[" visit ",e("a",{className:"card-text-link",href:"https://starorigins.com/",target:"_blank",children:"starorigins.com "}),e("img",{className:"card-link-arrow",src:o,alt:"link arrow"})]})]})]}),a("div",{className:"card-container",children:[e("img",{className:"card-img",src:f,alt:"masscar"}),a("div",{className:"card-text-container",children:[e("h6",{className:"card-text-title",children:"Massacar"}),e("p",{className:"card-text-desc",children:"Masscar is a car race game that allows to mint a car as a NFT and enhance it victory after victory."}),a("p",{className:"card-text-link-dec",children:[" visit ",e("a",{className:"card-text-link",href:"https://www.masscar.io/",target:"_blank",children:"masscar.io "}),e("img",{className:"card-link-arrow",src:o,alt:"link arrow"})]})]})]}),a("div",{className:"card-container",children:[e("img",{className:"card-img",src:N,alt:"mecha-m"}),a("div",{className:"card-text-container",children:[e("h6",{className:"card-text-title",children:"Mecha-M"}),e("p",{className:"card-text-desc",children:"The Mecha-M project combines a thrilling game, an immersive comic, and a window into the Massa ecosystem in a truly unique and innovative way."})]})]})]})}const v="/assets/joyler-489f4716.png",b="/assets/gummu-b8c6d4d7.png",q="/assets/collectors-2191086a.png";function V(){return a("div",{className:"card",children:[a("div",{className:"card-container",children:[e("img",{className:"card-img",src:q,alt:"nft collectors"}),a("div",{className:"card-text-container",children:[e("h6",{className:"card-text-title",children:"NFT Collectors"}),e("p",{className:"card-text-desc",children:"Get access to every Massa NFT projects, track data and launch your collections."}),a("p",{className:"card-text-link-dec",children:["visit ",e("a",{className:"card-text-link",href:"https://nftcollectors.com/",target:"_blank",children:"nftcollectors.com "}),e("img",{className:"card-link-arrow",src:o,alt:"link arrow"})]})]})]}),a("div",{className:"card-container",children:[e("img",{className:"card-img",src:v,alt:"joyler"}),a("div",{className:"card-text-container",children:[e("h6",{className:"card-text-title",children:"Joyler"}),e("p",{className:"card-text-desc",children:"Joyler strives to fix Web2 social problems with Web3 tech and a hint of IRC nostalgia."})]})]}),a("div",{className:"card-container",children:[e("img",{className:"card-img",src:b,alt:"gummu"}),a("div",{className:"card-text-container",children:[e("h6",{className:"card-text-title",children:"Gummu"}),e("p",{className:"card-text-desc",children:"Gummu is decentralized music streaming platform that is revolutionizing the way artists and fans interact."})]})]}),a("div",{className:"card-container",children:[e("img",{className:"card-img",src:u,alt:"star origins"}),a("div",{className:"card-text-container",children:[e("h6",{className:"card-text-title",children:"Star Origins"}),e("p",{className:"card-text-desc",children:"Star Origins is a Play & Earn Game. Choose your planet and send your fleet to outer space."}),a("p",{className:"card-text-link-dec",children:[" visit ",e("a",{className:"card-text-link",href:"https://starorigins.com/",target:"_blank",children:"starorigins.com "}),e("img",{className:"card-link-arrow",src:o,alt:"link arrow"})]})]})]}),a("div",{className:"card-container",children:[e("img",{className:"card-img",src:f,alt:"masscar"}),a("div",{className:"card-text-container",children:[e("h6",{className:"card-text-title",children:"Massacar"}),e("p",{className:"card-text-desc",children:"Masscar is a car race game that allows to mint a car as a NFT and enhance it victory after victory."}),a("p",{className:"card-text-link-dec",children:[" visit ",e("a",{className:"card-text-link",href:"https://www.masscar.io/",target:"_blank",children:"masscar.io "}),e("img",{className:"card-link-arrow",src:o,alt:"link arrow"})]})]})]}),a("div",{className:"card-container",children:[e("img",{className:"card-img",src:N,alt:"mecha-m"}),a("div",{className:"card-text-container",children:[e("h6",{className:"card-text-title",children:"Mecha-M"}),e("p",{className:"card-text-desc",children:"The Mecha-M project combines a thrilling game, an immersive comic, and a window into the Massa ecosystem in a truly unique and innovative way."})]})]})]})}const H="/assets/amb-c49f456a.png";function Z(){return a("div",{className:"card",children:[a("div",{className:"card-container",children:[e("img",{className:"card-img",src:v,alt:"joyler"}),a("div",{className:"card-text-container",children:[e("h6",{className:"card-text-title",children:"Joyler"}),e("p",{className:"card-text-desc",children:"Joyler strives to fix Web2 social problems with Web3 tech and a hint of IRC nostalgia."})]})]}),a("div",{className:"card-container",children:[e("img",{className:"card-img",src:H,alt:"amb"}),a("div",{className:"card-text-container",children:[e("h6",{className:"card-text-title",children:"Amb"}),e("p",{className:"card-text-desc",children:"Functional platform designed for crypto projects and successful implementation of their ambassador programs."}),a("p",{className:"card-text-link-dec",children:["visit ",e("a",{className:"card-text-link",href:"https://amb.place/",target:"_blank",children:"amb.place "}),e("img",{className:"card-link-arrow",src:o,alt:"link arrow"})]})]})]}),a("div",{className:"card-container",children:[e("img",{className:"card-img",src:b,alt:"gummu"}),a("div",{className:"card-text-container",children:[e("h6",{className:"card-text-title",children:"Gummu"}),e("p",{className:"card-text-desc",children:"Gummu is decentralized music streaming platform that is revolutionizing the way artists and fans interact."})]})]})]})}const _="/assets/tonana-eb2c9080.png",$="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAFrUExUReUfJeUfJeUfJeUeJOUgJucvNOcyOOcyN+cwNuUiKOcuNOYsMfe4ufvd3vvb3Pvc3fnIyeg5P+UdI+g7QPnJyve2uOYrMPrX2P////3q6+k/ROlBRv3s7PrV1uctM/zo6ek/Q+lBRf3q6vrT1OUcIuctMvrW1+k9QuUbIf3r7PrU1eYrMeg1Oug8QepHTPjExfzl5vzj5Pzk5frS0+tTV+g6P+tVWfjCxOpGS+c0OuYnLfa1t/zm5/va2+xaXug3POg5Pug4PepLUPnOz/zn5/nMzepKTuxcYPzm5vazteYmLOYoLvnKzP3y8upITeQbIfzh4vvf4OczOeQaIepLT/7z8/3w8OUdJOg2PPvg4fve3+pMUP3x8vjGyPnLzP7y8+pKT/zi4+pMUf709PnIyvWsrvvZ2fva2ulCR/i/wfe9v+cxNulESfnOzvvZ2vvc3PWqrOYlK+csMucvNeUhJ+cuM+UjKOcwNf///wTTWhUAAAACdFJOU/79P6CPqgAAAAFiS0dEeNbb5EYAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfnAhYQCjbhVATaAAAAAW9yTlQBz6J3mgAAAg1JREFUeNrt2ttbTGEYhvHRLKMmTbUKFRlqJJk02qA0pqgohEKyzab9Bin+fWeO3ufg65pretN9nz9r/WbmO5rrS1QdvRKJwxaAdhxo0KAdBBo0aAeBBg3aQaBBg3YQaNCgHQQaNGgHgQYN2kGgQYN2EGjQoB0EGjRoB4EGDdpBoEGXG52UlXdTTnR0MnXKLFVdozY11WqTjiqBTtaersuY1Tc0xvYmbmqutzd1Z84Gf9cHQafPtYha2xT6/AW1ab9YGXS7AmQvKfTlDrXpBA0aNGjQoEGDBg0aNGjQoEH/w8V2uStdCtBxtdvedLddU5ue6znxomQ4Osr3Ntnd6CvcNOsfGByyJ0O3OvvtTeH2HfGa3uEoGD1yN1swGy3eK42Zjd9/MGFvJianxu1N6WHmkb3JTs+EopOPn6gf9OnsM3Fw8s/V5sWcOATzL1+pTcNIOLpZPez1VM7eLLxZVJu3eXFCc+/eq80H0KBBgwYNGjRo0KBBgwYN+rihP6qHfVpS6NJntVmU6C9f1eZbMLpqZjmzYrY6uRaLD5paL9qb4samQMdb2zv25vuPn8HoaHdT9Eter9pLq83+ntr8/qM2u+F/i1XsIlv45vhcJjzsQIMG7SDQoEE7CDRo0A4CDRq0g0CDBu0g0KBBOwg0aNAOAg0atINAgwbtINCgQTsINGjQDgIN+v9DH8FO/AWXaOLqhzlwRQAAAFplWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAABIAAAAAQAAAEgAAAABH1L3NAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wMi0yMlQxNjoxMDoxMCswMDowMCICmRIAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDItMjJUMTY6MTA6MTArMDA6MDBTXyGuAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAyLTIyVDE2OjEwOjQ4KzAwOjAwf0VAcgAAABd0RVh0ZXhpZjpZQ2JDclBvc2l0aW9uaW5nADGsD4BjAAAAAElFTkSuQmCC",ee="/assets/kyve-13fc6ce8.png";function ae(){return a("div",{className:"card",children:[a("div",{className:"card-container",children:[e("img",{className:"card-img",src:$,alt:"massex"}),a("div",{className:"card-text-container",children:[e("h6",{className:"card-text-title",children:"Massexplo"}),e("p",{className:"card-text-desc",children:"Massexplo allows you to track and explore all the transactions taking place on the Massa blockchain."}),a("p",{className:"card-text-link-dec",children:["visit ",e("a",{className:"card-text-link",href:"https://massexplo.io/",target:"_blank",children:"massexplo.io "}),e("img",{className:"card-link-arrow",src:o,alt:"link arrow"})]})]})]}),a("div",{className:"card-container",children:[e("img",{className:"card-img",src:ee,alt:"kyve"}),a("div",{className:"card-text-container",children:[e("h6",{className:"card-text-title",children:"Kyve"}),e("p",{className:"card-text-desc",children:"KYVE allows developers and applications to store and retrieve any data stream."}),a("p",{className:"card-text-link-dec",children:["visit ",e("a",{className:"card-text-link",href:"https://www.kyve.network/",target:"_blank",children:"kyve.network "}),e("img",{className:"card-link-arrow",src:o,alt:"link arrow"})]})]})]}),a("div",{className:"card-container",children:[e("img",{className:"card-img",src:_,alt:"tonana"}),a("div",{className:"card-text-container",children:[e("h6",{className:"card-text-title",children:"Tonana"}),e("p",{className:"card-text-desc",children:"Tonana cross-chain bridge uses a lock-and-mint model for moving value between chains as well as wrapped assets."}),a("p",{className:"card-text-link-dec",children:["visit ",e("a",{className:"card-text-link",href:"https://tonana.org/",target:"_blank",children:"Tonana.org "}),e("img",{className:"card-link-arrow",src:o,alt:"link arrow"})]})]})]})]})}const te="/assets/bearby-c8d012ea.png",se="/assets/energy8-0d557a7c.png",re="/assets/space_wallet-16f1e66a.png";function ce(){return a("div",{className:"card",children:[a("div",{className:"card-container",children:[e("img",{className:"card-img",src:te,alt:""}),a("div",{className:"card-text-container",children:[e("h6",{className:"card-text-title",children:"Bearby"}),e("p",{className:"card-text-desc",children:"Bearby is a web 3 wallet dedicated to  Massa. It has extended network settings and it never collects users’ data."}),a("p",{className:"card-text-link-dec",children:["visit ",e("a",{className:"card-text-link",href:"https://bearby.io/",target:"_blank",children:"bearby.io "}),e("img",{className:"card-link-arrow",src:o,alt:"link arrow"})]})]})]}),a("div",{className:"card-container",children:[e("img",{className:"card-img",src:se,alt:""}),a("div",{className:"card-text-container",children:[e("h6",{className:"card-text-title",children:"Energy8 Wallet"}),e("p",{className:"card-text-desc",children:"A friendly crypto multichain wallet for web3 on Massa, Solana, Polygon and others in the future."}),a("p",{className:"card-text-link-dec",children:["visit ",e("a",{className:"card-text-link",href:"https://chrome.google.com/webstore/detail/energy8-wallet/mdnaglckomeedfbogeajfajofmfgpoae",target:"_blank",children:"energy8.io "}),e("img",{className:"card-link-arrow",src:o,alt:"link arrow"})]})]})]}),a("div",{className:"card-container",children:[e("img",{className:"card-img",src:re,alt:""}),a("div",{className:"card-text-container",children:[e("h6",{className:"card-text-title",children:"Space Wallet"}),e("p",{className:"card-text-desc",children:"The first mobile wallet that allows to send and receive tokens on Massa."}),a("p",{className:"card-text-link-dec",children:["visit ",e("a",{className:"card-text-link",href:"https://github.com/bacanlabs/spacewallet/releases/tag/Android",target:"_blank",children:"Github "}),e("img",{className:"card-link-arrow",src:o,alt:"link arrow"})]})]})]})]})}function ie(){let{id:s}=O();return a("div",{className:"ecosystem-apps",children:[e(z,{}),s==="defi"&&e(F,{}),s==="games"&&e(W,{}),s==="nft"&&e(V,{}),s==="social"&&e(Z,{}),s==="tools"&&e(ae,{}),s==="wallet"&&e(ce,{}),s==null&&e(Y,{})]})}function le(){return a("div",{className:"cta",children:[e("div",{className:"cta-header-container",children:e("h3",{className:"cta-header-title",children:"Build with Massa !"})}),a("div",{className:"cta-buttons",children:[e("a",{className:"cta-button cta-button-fill",href:"https://docs.massa.net/en/latest/web3-dev/smart-contracts.html#introduction",target:"_blank",children:"Build on Massa"}),e("a",{className:"cta-button cta-button-transparent",href:"https://docs.google.com/forms/d/1AelPGkMs_-6K_wWCG1G6bFFdt0hD6y9wq3mVOsT42f4/prefill",target:"_blank",children:"Add your App "}),e("a",{className:"cta-button cta-button-transparent",href:"https://massa.net/grants",target:"_blank",children:"Apply for a grant"})]})]})}function p(){return a("div",{className:"ecosystem",children:[e(Q,{}),e(ie,{}),e(le,{})]})}function ne(){return e("div",{className:"App",children:e(x,{children:a(P,{children:[e(g,{path:"/",element:e(p,{})}),e(g,{path:"/:id",element:e(p,{})})]})})})}y.createRoot(document.getElementById("root")).render(e(w.StrictMode,{children:e(ne,{})}));
