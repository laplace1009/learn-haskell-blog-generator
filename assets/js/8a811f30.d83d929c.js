"use strict";(self.webpackChunklearn_haskell_blog_generator=self.webpackChunklearn_haskell_blog_generator||[]).push([[669],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=p(t),u=l,m=k["".concat(d,".").concat(u)]||k[u]||s[u]||r;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=u;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[k]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1252:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=t(7462),l=(t(7294),t(3905));const r={},o="\ubb38\uc11c \uc0dd\uc131\ud558\uae30",i={unversionedId:"documentation",id:"documentation",title:"\ubb38\uc11c \uc0dd\uc131\ud558\uae30",description:"\uc0ac\uc6a9\uc790\uc5d0\uac8c \uc6b0\ub9ac\uc758 \ud504\ub85c\uc81d\ud2b8\uc640 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc27d\uac8c \ub3c4\uc785\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 \ub2e4\uc591\ud55c \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/docs/09-documentation.md",sourceDirName:".",slug:"/documentation",permalink:"/learn-haskell-blog-generator/documentation",draft:!1,editUrl:"https://github.com/jbl428/learn-haskell-blog-generator/tree/book/docs/09-documentation.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud14c\uc2a4\ud2b8",permalink:"/learn-haskell-blog-generator/testing"},next:{title:"\uc694\uc57d",permalink:"/learn-haskell-blog-generator/recap"}},d={},p=[{value:"Haddock \uc2e4\ud589\ud558\uae30",id:"haddock-\uc2e4\ud589\ud558\uae30",level:2},{value:"Cabal",id:"cabal",level:3},{value:"Stack",id:"stack",level:3},{value:"Haddock \ucee4\ubc84\ub9ac\uc9c0",id:"haddock-\ucee4\ubc84\ub9ac\uc9c0",level:3},{value:"Haddock \ub9c8\ud06c\uc5c5",id:"haddock-\ub9c8\ud06c\uc5c5",level:2},{value:"\uc815\uc758 \ubb38\uc11c\ud654\ud558\uae30",id:"\uc815\uc758-\ubb38\uc11c\ud654\ud558\uae30",level:3},{value:"\uc139\uc158 \uc81c\ubaa9",id:"\uc139\uc158-\uc81c\ubaa9",level:3},{value:"\uc11c\uc2dd \uc9c0\uc815",id:"\uc11c\uc2dd-\uc9c0\uc815",level:3},{value:"\ub354 \ub098\uc544\uac00",id:"\ub354-\ub098\uc544\uac00",level:3},{value:"\uc694\uc57d",id:"\uc694\uc57d",level:2}],c={toc:p},k="wrapper";function s(e){let{components:n,...t}=e;return(0,l.kt)(k,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\ubb38\uc11c-\uc0dd\uc131\ud558\uae30"},"\ubb38\uc11c \uc0dd\uc131\ud558\uae30"),(0,l.kt)("p",null,"\uc0ac\uc6a9\uc790\uc5d0\uac8c \uc6b0\ub9ac\uc758 \ud504\ub85c\uc81d\ud2b8\uc640 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc27d\uac8c \ub3c4\uc785\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 ",(0,l.kt)("a",{parentName:"p",href:"https://documentation.divio.com/"},"\ub2e4\uc591\ud55c \ubc29\ubc95"),"\uc774 \uc788\uc2b5\ub2c8\ub2e4.\n\uc608\ub97c \ub4e4\uc5b4, \ud29c\ud1a0\ub9ac\uc5bc\uc744 \uc791\uc131\ud558\uac70\ub098 \uc2e4\ud589 \uac00\ub2a5\ud55c \uc608\uc81c\ub97c \uc81c\uacf5\ud558\uac70\ub098 \uc2dc\uc2a4\ud15c\uc758 \ub0b4\ubd80\ub97c \uc124\uba85\ud558\uac70\ub098 API \ubb38\uc11c\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\ubc88 \uc7a5\uc5d0\uc11c\ub294 ",(0,l.kt)("a",{parentName:"p",href:"https://haskell-haddock.readthedocs.io/en/latest/"},"Haddock"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc8fc\uc11d\uc774 \ub2ec\ub9b0 Haskell \uc18c\uc2a4 \ucf54\ub4dc\ub97c \ud1b5\ud574 (Hackage\uc5d0\uc11c \ubcfc \uc218 \uc788\ub294) API \ubb38\uc11c\ub97c \uc0dd\uc131\ud558\ub294 \ubc29\ubc95\uc744 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"haddock-\uc2e4\ud589\ud558\uae30"},"Haddock \uc2e4\ud589\ud558\uae30"),(0,l.kt)("p",null,"\uc120\ud638\ud558\ub294 \ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790\ub97c \uc0ac\uc6a9\ud558\uc5ec (Haskell \uc138\uacc4\uc5d0\uc11c\ub294 haddock\ub85c \uc54c\ub824\uc9c4) \ud504\ub85c\uc81d\ud2b8\uc758 API \ubb38\uc11c \ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"cabal"},"Cabal"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cabal haddock"),"\uc744 \uc2e4\ud589\ud558\uc5ec haddock\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\u279c cabal haddock\nResolving dependencies...\nBuild profile: -w ghc-9.0.1 -O1\nIn order, the following will be built (use -v for more details):\n - hs-blog-0.1.0.0 (lib) (first run)\nConfiguring library for hs-blog-0.1.0.0..\nPreprocessing library for hs-blog-0.1.0.0..\nRunning Haddock on library for hs-blog-0.1.0.0..\nHaddock coverage:\n   0% (  0 /  3) in 'HsBlog.Env'\n  Missing documentation for:\n    Module header\n    Env (src/HsBlog/Env.hs:3)\n    defaultEnv (src/HsBlog/Env.hs:10)\n  21% (  7 / 33) in 'HsBlog.Html.Internal'\n  Missing documentation for:\n    Module header\n    Html (src/HsBlog/Html/Internal.hs:8)\n...\nDocumentation created:\n/tmp/learn-haskell-blog-generator/dist-newstyle/build/x86_64-linux/ghc-9.0.1/hs-blog-0.1.0.0/doc/html/hs-blog/index.html\n")),(0,l.kt)("p",null,"Cabal\uacfc Haddock\uc740 \ud504\ub85c\uc81d\ud2b8\ub97c \ube4c\ub4dc\ud558\uace0 HTML \ud398\uc774\uc9c0\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"./dist-newstyle/build/<platform\n  >/<compiler\n    >/<package\n      >-<version>/doc/html/<package>/</package></version></package\n    ></compiler\n  ></platform\n>\n")),(0,l.kt)("p",null,"\uc774\ud6c4 \uc6f9 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \ud574\ub2f9 \ub514\ub809\ud1a0\ub9ac\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html")," \ud30c\uc77c\uc744 \uc5f4\uc5b4 \ud328\ud0a4\uc9c0 \ubb38\uc11c\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"stack"},"Stack"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"stack haddock"),"\uc744 \uc2e4\ud589\ud558\uc5ec haddock\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\u279c stack haddock\n...\nhs-blog> build (lib + exe)\nPreprocessing library for hs-blog-0.1.0.0..\nBuilding library for hs-blog-0.1.0.0..\n[1 of 7] Compiling HsBlog.Env\n[2 of 7] Compiling HsBlog.Html.Internal\n...\nhs-blog> haddock\nPreprocessing library for hs-blog-0.1.0.0..\nRunning Haddock on library for hs-blog-0.1.0.0..\nHaddock coverage:\n   0% (  0 /  3) in 'HsBlog.Env'\n  Missing documentation for:\n    Module header\n    Env (src/HsBlog/Env.hs:3)\n    defaultEnv (src/HsBlog/Env.hs:10)\n  21% (  7 / 33) in 'HsBlog.Html.Internal'\n  Missing documentation for:\n    Module header\n    Html (src/HsBlog/Html/Internal.hs:8)\n...\nDocumentation created:\n.stack-work/dist/x86_64-linux-tinfo6/Cabal-3.2.1.0/doc/html/hs-blog/index.html,\n.stack-work/dist/x86_64-linux-tinfo6/Cabal-3.2.1.0/doc/html/hs-blog/hs-blog.txt\nPreprocessing executable 'hs-blog-gen' for hs-blog-0.1.0.0..\n...\n")),(0,l.kt)("p",null,"Stack\uacfc Haddock\uc740 \ud504\ub85c\uc81d\ud2b8\ub97c \ube4c\ub4dc\ud558\uace0 HTML \ud398\uc774\uc9c0\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"./.stack-work/dist/<platform\n  >/Cabal-<version>/doc/html/<package>/</package></version></platform\n>\n")),(0,l.kt)("p",null,"\uc774\ud6c4 \uc6f9 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \ud574\ub2f9 \ub514\ub809\ud1a0\ub9ac\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html")," \ud30c\uc77c\uc744 \uc5f4\uc5b4 \ud328\ud0a4\uc9c0 \ubb38\uc11c\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"haddock-\ucee4\ubc84\ub9ac\uc9c0"},"Haddock \ucee4\ubc84\ub9ac\uc9c0"),(0,l.kt)("p",null,"Haddock\uc740 \uc2e4\ud589\ud558\uba74 \ucee4\ubc84\ub9ac\uc9c0 \ubcf4\uace0\uc11c\ub97c \ucd9c\ub825\ud558\uace0 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uacf5\uac1c\ub418\uc5c8\uc9c0\ub9cc \ubb38\uc11c\uac00 \uc5c6\ub294 \ud56d\ubaa9\ub4e4\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.\n\uc774\ub7ec\ud55c \ud56d\ubaa9\ub4e4\uc740 \ubaa8\ub4c8 \ud5e4\ub354, \ud0c0\uc785, \ub370\uc774\ud130 \uc0dd\uc131\uc790, \ud0c0\uc785 \ud074\ub798\uc2a4, \ud568\uc218, \uac12 \ub4f1\uc774 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Haddock coverage:\n...\n   0% (  0 /  3) in 'HsBlog.Convert'\n  Missing documentation for:\n    Module header\n    convert (src/HsBlog/Convert.hs:8)\n    convertStructure (src/HsBlog/Convert.hs:23)\n  67% (  2 /  3) in 'HsBlog.Directory'\n  Missing documentation for:\n    buildIndex (src/HsBlog/Directory.hs:80)\n...\n")),(0,l.kt)("p",null,"\uc6b0\ub9ac\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"HsBlog.Convert"),"\ub97c \uc804\ud600 \ubb38\uc11c\ud654\ud558\uc9c0 \uc54a\uc558\uace0, \ubaa8\ub4c8 \ud5e4\ub354, ",(0,l.kt)("inlineCode",{parentName:"p"},"convert")," \ud568\uc218, ",(0,l.kt)("inlineCode",{parentName:"p"},"convertStructure")," \ud568\uc218\uc5d0 \ub300\ud55c \ubb38\uc11c\uac00 \uc5c6\ub2e4\ub294 \uc0ac\uc2e4\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ubc18\uba74\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"HsBlog.Directory")," \ubaa8\ub4c8\uc5d0\ub294 \uc77c\ubd80 \ubb38\uc11c\uac00 \uc788\ub2e4\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4!\n\uc65c \uadf8\ub7f0\uc9c0\ub294 \uc774\ud6c4\uc5d0 \ub2e4\ub8e8\uaca0\uc2b5\ub2c8\ub2e4.\n\uadf8\uc804\uc5d0 \uc6b0\uc120 haddock\uc744 \uc0dd\uc131\ud574\ubcf4\uace0 \ubaa8\ub4c8 \uacc4\uce35 \uad6c\uc870\ub97c \uc0b4\ud3b4\ubcf4\uace0, \ub2e4\ub978 \ubaa8\ub4c8\uc744 \ub458\ub7ec\ubcf4\uace0, \ud0c0\uc785\uc758 \ub9c1\ud06c\ub97c \ub530\ub77c\uac00\uace0, API \ubb38\uc11c\uc758 \ud615\ud0dc\ub97c \uc0c1\uc0c1\ud574\ubcf4\uace0, \uc5b4\ub5bb\uac8c \uac1c\uc120\ud560 \uc218 \uc788\ub294\uc9c0 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"haddock-\ub9c8\ud06c\uc5c5"},"Haddock \ub9c8\ud06c\uc5c5"),(0,l.kt)("p",null,"Haddock\uc740 \ud504\ub85c\uc81d\ud2b8\ub97c \ube4c\ub4dc\ud558\uace0, \ub0b4\ubcf4\ub0b8 \ubaa8\ub4c8\uacfc \ub0b4\ubcf4\ub0b8 \uc815\uc758\ub97c \ucd94\uc801\ud558\uace0, \ud2b9\ubcc4\ud55c \ub9c8\ud06c\uc5c5 \ud615\uc2dd\uc73c\ub85c \uc791\uc131\ub41c \uc18c\uc2a4 \ucf54\ub4dc \uc8fc\uc11d\uc744 \ud1b5\ud574 API \ubb38\uc11c\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub9c8\ud06c\uc5c5 \ud615\uc2dd\uc5d0 \ub300\ud574 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\n\uba87 \uac00\uc9c0 \uc911\uc694\ud55c \ubd80\ubd84\uc744 \ub2e4\ub8e8\uaca0\uc9c0\ub9cc, Haddock \ub9c8\ud06c\uc5c5\uc5d0 \ub300\ud55c \uc804\uccb4 \uac00\uc774\ub4dc\ub294 ",(0,l.kt)("a",{parentName:"p",href:"https://haskell-haddock.readthedocs.io/en/latest/markup.html"},"Haddock \ubb38\uc11c"),"\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"\uc815\uc758-\ubb38\uc11c\ud654\ud558\uae30"},"\uc815\uc758 \ubb38\uc11c\ud654\ud558\uae30"),(0,l.kt)("p",null,"\ubaa8\ub4e0 haddock \uc8fc\uc11d\uc740 \uc77c\ubc18\uc801\uc778 Haskell \uc8fc\uc11d\uc758 \uc77c\ubd80\ub85c \ud45c\ud604\ub429\ub2c8\ub2e4.\n\ub2e8\uc77c \ub77c\uc778 \ud615\uc2dd (",(0,l.kt)("inlineCode",{parentName:"p"},"--"),")\uacfc \ub2e4\uc911 \ub77c\uc778 \ud615\uc2dd (",(0,l.kt)("inlineCode",{parentName:"p"},"{-")," \ubc0f ",(0,l.kt)("inlineCode",{parentName:"p"},"-}"),") \ubaa8\ub450 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc8fc\uc11d \ube14\ub85d\uacfc haddock \ub9c8\ucee4\uc758 \ubc30\uce58\ub294 haddock \ubb38\uc790\uc5f4\uc774 \uc5b4\ub5a4 \ud558\uc2a4\ucf08 \uc815\uc758\uc5d0 \uc5f0\uacb0\ub418\ub294\uc9c0\ub97c \uacb0\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud558\uc2a4\ucf08 \uc815\uc758\uc5d0 \ub300\ud55c \uc8fc\uc11d\uc744 \uc791\uc131\ud558\ub824\uba74 ",(0,l.kt)("em",{parentName:"p"},"\uc815\uc758 \uc774\uc804"),"\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"|"),"\ub85c \uc2dc\uc791\ud558\ub294 \uc8fc\uc11d \ube14\ub85d\uc744 \uc791\uc131\ud558\uac70\ub098, ",(0,l.kt)("em",{parentName:"p"},"\uc815\uc758 \uc774\ud6c4"),"\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"^"),"\ub85c \uc2dc\uc791\ud558\ub294 \uc8fc\uc11d \ube14\ub85d\uc744 \uc791\uc131\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"-- | `Head`\uc640 `Structure`\ub97c \ud1b5\ud574\n--    HTML \ud398\uc774\uc9c0\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.\nhtml_\n  :: Head -- ^ HTML \ud30c\uc77c\uc758 @\\<head\\>@ \uc139\uc158\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4.\n  -> Structure -- ^ HTML \ud30c\uc77c\uc758 @\\<body\\>@ \uc139\uc158\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4.\n  -> Html\nhtml_ = ...\n...\n")),(0,l.kt)("p",null,"\ub610 \ub2e4\ub978 \uc608\uc81c\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"{- | \ub2e4\uc74c\uacfc \uac19\uc740 \ub2e8\uc77c \ub9c8\ud06c\uc5c5 \uad6c\uc870\ub97c \ud45c\ud604\ud569\ub2c8\ub2e4.\n\n- \ubb38\ub2e8\n- \uc21c\uc11c \uc5c6\ub294 \ubaa9\ub85d\n- \ucf54\ub4dc \ube14\ub85d\n-}\ndata Structure\n  = Heading Natural String\n  -- ^ A \ud06c\uae30\ub97c \uac00\uc9c0\ub294 \uc139\uc158 \uc81c\ubaa9\n  | Paragraph String\n  -- ^ \ubb38\ub2e8\n  | UnorderedList [String]\n  -- ^ \uc21c\uc11c \uc5c6\ub294 \ubb38\uc790\uc5f4 \ubaa9\ub85d\n  | OrderedList [String]\n  -- ^ \uc21c\uc11c \uc788\ub294 \ubb38\uc790\uc5f4 \ubaa9\ub85d\n  | CodeBlock [String]\n  -- ^ \ucf54\ub4dc \ube14\ub85d\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"{- | \ub9c8\ud06c\uc5c5\uc744 HTML\ub85c \ubcc0\ud658\ud558\ub294 \ubaa8\ub4c8\uc785\ub2c8\ub2e4.\n\n\uc774 \ubaa8\ub4c8\uc740 \uc6b0\ub9ac\uc758 \ucee4\uc2a4\ud140 \ub9c8\ud06c\uc5c5 \uc5b8\uc5b4\ub85c \uc791\uc131\ub41c \ubb38\uc11c\ub97c HTML \ud398\uc774\uc9c0\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4.\n-}\nmodule HsBlog.Convert where\n")),(0,l.kt)("p",null,"\ubcf4\uc2dc\ub2e4\uc2dc\ud53c, ",(0,l.kt)("inlineCode",{parentName:"p"},"|"),"\uc640 ",(0,l.kt)("inlineCode",{parentName:"p"},"^"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud568\uc218, \ud568\uc218 \uc778\uc790, \ud0c0\uc785, \ub370\uc774\ud130 \uc0dd\uc131\uc790, \ubaa8\ub4c8 \ub4f1\uc744 \ubb38\uc11c\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774\ub4e4\uc740 Haddock \uc8fc\uc11d\uc744 \uc791\uc131\ud558\uae30 \uc704\ud574 \uae30\uc5b5\ud574\uc57c \ud560 \uc911\uc694\ud55c \ud56d\ubaa9\uc774\ub77c\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4. (\uc0ac\uc2e4 ",(0,l.kt)("inlineCode",{parentName:"p"},"|"),"\ub9cc \uae30\uc5b5\ud574\ub3c4 \ucda9\ubd84\ud569\ub2c8\ub2e4)"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ub0b4\ubcf4\ub0b8 \ubaa8\ub4c8, \ud0c0\uc785 \ubc0f \ucd5c\uc0c1\ub2e8 \uc815\uc758\uc5d0 \uc0c1\uc138\ud55c \uc124\uba85\uc774\ub098 (\ucd5c\uc18c\ud55c) \uc5b4\ub5a4 \uc6a9\ub3c4\ub85c \uc0ac\uc6a9\ub418\ub294\uc9c0 \uc8fc\uc11d\uc73c\ub85c \uc791\uc131\ud558\uc138\uc694."),(0,l.kt)("p",{parentName:"admonition"},"\ubaa8\ub4c8 \uc0ac\uc6a9\uc790 \ubc0f \ucc38\uc5ec\uc790\ub4e4\uc774 \uac10\uc0ac\ud560 \uac83\uc785\ub2c8\ub2e4!")),(0,l.kt)("h3",{id:"\uc139\uc158-\uc81c\ubaa9"},"\uc139\uc158 \uc81c\ubaa9"),(0,l.kt)("p",null,"\uc81c\ubaa9\uc744 \ucd94\uac00\ud558\uc5ec \ubaa8\ub4c8\uc744 \uc139\uc158\uc73c\ub85c \ub098\ub20c \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc81c\ubaa9\uc740 (\ub2e4\ub978 \ub9c8\ud06c\uc5c5 \uc5b8\uc5b4\uc640 \uc720\uc0ac\ud558\uac8c) ",(0,l.kt)("inlineCode",{parentName:"p"},"*"),"\ub85c \uc2dc\uc791\ud558\ub294 \uc8fc\uc11d\uc73c\ub85c \ud45c\ud604\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"-- * HTML EDSL\n\nhtml_ :: Head -> Structure -> Html\nhtml_ = ...\n\n-- ** Structure\n\np_ :: Content -> Structure\np_ = ..\n\nh_ :: Content -> Structure\nh_ = ..\n\n...\n\n-- ** Content\n\ntxt_ :: String -> Content\ntxt_ = ...\n\nlink_ :: FilePath -> Content -> Content\nlink_ = ...\n")),(0,l.kt)("p",null,"\uc81c\ubaa9\uc744 \ub0b4\ubcf4\ub0b4\uae30 \ubaa9\ub85d\uc5d0 \ucd94\uac00\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"module HsBlog.Html\n  ( -- * HTML EDSL\n    Html\n  , html_\n\n    -- ** @\\<head\\>@ \uc139\uc158\uc744 \uad6c\uc131\ud558\uae30 \uc704\ud55c \uc870\ud569\uc790\n  , Head\n  , title_\n  , stylesheet_\n  , meta_\n\n    -- ** @\\<body\\>@ \uc139\uc158\uc744 \uad6c\uc131\ud558\uae30 \uc704\ud55c \uc870\ud569\uc790\n  , Structure\n  , p_\n  , h_\n  , ul_\n  , ol_\n  , code_\n\n    -- ** \uad6c\uc870 \uc548 \ubcf8\ubb38\uc744 \uad6c\uc131\ud558\uae30 \uc704\ud55c \uc870\ud569\uc790\n  , Content\n  , txt_\n  , img_\n  , link_\n  , b_\n  , i_\n\n    -- ** HTML\uc744 \ubb38\uc790\uc5f4\ub85c \ucd9c\ub825\n  , render\n  )\n  where\n")),(0,l.kt)("p",null,"\ubaa8\ub4c8\uc758 \uad6c\uc131 \uc694\uc18c\ub4e4\uc744 \uc139\uc158\uc73c\ub85c \ubd84\ub9ac\ud558\uba74 \uc911\uc694\ud55c \ubd80\ubd84\uc744 \ubaa8\uc544\ub450\uace0, haddock\uc774 \ubaa8\ub4c8 \ud398\uc774\uc9c0 \uc0c1\ub2e8\uc5d0 \ubaa9\ucc28\ub97c \uc0dd\uc131\ud558\ub3c4\ub85d \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc81c\ubaa9\uc744 \ud1b5\ud574 \uc139\uc158\uc744 \ubd84\ub9ac\ud55c \uc774\ud6c4, \ub54c\ub54c\ub85c \ud558\ub098\uc758 \ubaa8\ub4c8\uc744 \uc5ec\ub7ec \ubaa8\ub4c8\ub85c \ubd84\ub9ac\ud558\ub294 \uac83\uc774 \uc88b\uc744\uc9c0 \uc5ec\ubd80\ub97c \uc27d\uac8c \ud30c\uc545\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uc5f0\uc2b5\ubb38\uc81c"),": \ud504\ub85c\uc81d\ud2b8\uc758 \ubaa8\ub4c8\uc744 \uc6d0\ud558\ub294 \ub300\ub85c \uc7ac\ubc30\uc5f4\ud558\uace0 \uc139\uc158\uc5d0 \uc81c\ubaa9\uc744 \ucd94\uac00\ud574 \ubcf4\uc138\uc694."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\uc11c\uc2dd-\uc9c0\uc815"},"\uc11c\uc2dd \uc9c0\uc815"),(0,l.kt)("p",null,"\uc55e\uc11c \uc0b4\ud3b4\ubcf8 \uac83\ucc98\ub7fc \ub313\uae00 \ubcf8\ubb38\uc5d0 \uc11c\uc2dd\uc744 \ucd94\uac00\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ub2e4\uc74c\uacfc \uac19\uc774 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"`"),"\ub85c \ub458\ub7ec\uc2f8\uc11c \ud558\uc774\ud37c\ub9c1\ud06c \uc2dd\ubcc4\uc790\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,l.kt)("p",{parentName:"li"},"\uc608\ub97c \ub4e4\uc5b4: ",(0,l.kt)("inlineCode",{parentName:"p"},"`Heading`"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"@"),"\ub85c \ub458\ub7ec\uc2f8\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"\uace0\uc815\ud3ed \ud14d\uc2a4\ud2b8"),"\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,l.kt)("p",{parentName:"li"},"\uc608\ub97c \ub4e4\uc5b4: ",(0,l.kt)("inlineCode",{parentName:"p"},'@Paragraph "Hello"@'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"/"),"\ub85c \ub458\ub7ec\uc2f8\uc11c ",(0,l.kt)("em",{parentName:"p"},"\uac15\uc870 \ud14d\uc2a4\ud2b8"),"\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,l.kt)("p",{parentName:"li"},"\uc608\ub97c \ub4e4\uc5b4: ",(0,l.kt)("inlineCode",{parentName:"p"},"/this is emphasised/"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"__"),"\ub85c \ub458\ub7ec\uc2f8\uc11c ",(0,l.kt)("strong",{parentName:"p"},"\uad75\uc740 \ud14d\uc2a4\ud2b8"),"\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,l.kt)("p",{parentName:"li"},"\uc608\ub97c \ub4e4\uc5b4: ",(0,l.kt)("inlineCode",{parentName:"p"},"__this is bold__")))),(0,l.kt)("h3",{id:"\ub354-\ub098\uc544\uac00"},"\ub354 \ub098\uc544\uac00"),(0,l.kt)("p",null,"\uc774\ubc88 \uc7a5\uc5d0\uc11c\ub294 haddock \ub9c8\ud06c\uc5c5 \uc5b8\uc5b4\uc758 \uae30\ubcf8 \uc0ac\ud56d\uc744 \ub2e4\ub8e8\uc5c8\uc2b5\ub2c8\ub2e4.\n\ub354 \uc54c\uace0 \uc2f6\ub2e4\uba74 ",(0,l.kt)("a",{parentName:"p",href:"https://haskell-haddock.readthedocs.io/en/latest/markup.html"},"Haddock \ub9c8\ud06c\uc5c5 \uac00\uc774\ub4dc"),"\ub97c \ucc38\uace0\ud558\uc138\uc694.\n\ucf54\ub4dc \ube14\ub85d, \uadf8\ub9ac\ub4dc \ud14c\uc774\ube14, \uc774\ubbf8\uc9c0 \ubc0f \uc608\uc81c\uc640 \uac19\uc740 \ub354 \ud765\ubbf8\ub85c\uc6b4 \ubb38\uc11c \uad6c\uc870\ub97c \uc0dd\uc131\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc815\ubcf4\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uc694\uc57d"},"\uc694\uc57d"),(0,l.kt)("p",null,"\uc9c0\uae08\uae4c\uc9c0 \ud558\uc2a4\ucf08 \ud504\ub85c\uadf8\ub7a8\uc744 \ubb38\uc11c\ud654\ud558\ub294 \ud55c \uac00\uc9c0 \ubc29\ubc95\uc744 \uac04\ub2e8\ud788 \uc0b4\ud3b4\ubcf4\uc558\uc2b5\ub2c8\ub2e4:\nhaddock \ub9c8\ud06c\uc5c5\uc73c\ub85c \uc0ac\uc6a9\ud574 \uc18c\uc2a4 \ucf54\ub4dc \uc8fc\uc11d\uc744 \uc791\uc131\ud558\uace0 \uc774\ub97c \ud1b5\ud574 API \ubb38\uc11c\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"API \ubb38\uc11c\ub3c4 \ub9e4\uc6b0 \uc720\uc6a9\ud558\uc9c0\ub9cc, \uc608\uc81c\uc640 \ud29c\ud1a0\ub9ac\uc5bc\uacfc \uac19\uc740 \ub2e4\ub978 \ud615\ud0dc\uc758 \ubb38\uc11c\ub97c \ud1b5\ud574\uc11c\ub3c4 \uc0ac\uc6a9\uc790\uac00 \ube60\ub974\uac8c \uc2dc\uc791\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\uc5f0\uc2b5\ubb38\uc81c"),": \uc6b0\ub9ac\uc758 \ud504\ub85c\uc81d\uc758 \ucd5c\uc0c1\ub2e8 \uc815\uc758\uc5d0 hadddock \uc8fc\uc11d\uc744 \ucd94\uac00\ud574 \ubcf4\uc138\uc694.\n\uadf8\ub9ac\uace0 \ud504\ub85c\uadf8\ub7a8\uacfc \ub2e4\uc591\ud55c \ubd80\ubd84\uc744 \uc798 \uc774\ud574\ud558\uace0 \uc788\ub294\uc9c0 \ud14c\uc2a4\ud2b8\ud574 \ubcf4\uc138\uc694.\n\ub54c\ub85c\ub294 \ubb34\uc5b8\uac00\ub97c \uc124\uba85\ud558\ub824\uace0 \ud558\uba74 \ub354 \uc798 \uc774\ud574\ud558\uac8c \ub429\ub2c8\ub2e4!"),(0,l.kt)("hr",null))}s.isMDXComponent=!0}}]);