"use strict";(self.webpackChunklearn_haskell_blog_generator=self.webpackChunklearn_haskell_blog_generator||[]).push([[739],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>u});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),h=l,u=d["".concat(s,".").concat(h)]||d[h]||m[h]||o;return t?n.createElement(u,r(r({ref:a},c),{},{components:t})):n.createElement(u,r({ref:a},c))}));function u(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=h;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[d]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},9015:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(7462),l=(t(7294),t(3905));const o={},r="Defining a project description",i={unversionedId:"glue/project",id:"glue/project",title:"Defining a project description",description:"Up until now we've only used base and the libraries",source:"@site/docs/05-glue/03-project.md",sourceDirName:"05-glue",slug:"/glue/project",permalink:"/learn-haskell-blog-generator/glue/project",draft:!1,editUrl:"https://github.com/jbl428/learn-haskell-blog-generator/tree/book/docs/05-glue/03-project.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Working with IO",permalink:"/learn-haskell-blog-generator/glue/io"},next:{title:"Fancy options parsing",permalink:"/learn-haskell-blog-generator/glue/optparse"}},s={},p=[{value:"Creating a project",id:"creating-a-project",level:2},{value:"Package metadata",id:"package-metadata",level:3},{value:"Common settings",id:"common-settings",level:3},{value:"Library",id:"library",level:3},{value:"Executable",id:"executable",level:3},{value:"Test-suites",id:"test-suites",level:3},{value:"Our complete .cabal file",id:"our-complete-cabal-file",level:2},{value:"<code>cabal.project</code> and <code>stack.yaml</code>",id:"cabalproject-and-stackyaml",level:2},{value:"Usage",id:"usage",level:2},{value:"For cabal:",id:"for-cabal",level:3},{value:"For stack:",id:"for-stack",level:3},{value:"Build artifacts",id:"build-artifacts",level:3},{value:"Finding packages",id:"finding-packages",level:2},{value:"Summary",id:"summary",level:2}],c={toc:p},d="wrapper";function m(e){let{components:a,...t}=e;return(0,l.kt)(d,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"defining-a-project-description"},"Defining a project description"),(0,l.kt)("p",null,"Up until now we've only used ",(0,l.kt)("inlineCode",{parentName:"p"},"base")," and the libraries\n",(0,l.kt)("a",{parentName:"p",href:"https://downloads.haskell.org/ghc/9.2.5/docs/html/users_guide/9.2.5-notes.html#included-libraries"},"included"),"\nwith GHC. Because of that we didn't really need to do anything fancier\nthan ",(0,l.kt)("inlineCode",{parentName:"p"},"runghc")," to run our program. However, we want to start using\nexternal libraries which are not included with GHC in our programs."),(0,l.kt)("p",null,"External packages can be downloaded from ",(0,l.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/"},"Hackage")," -\nHaskell's central package archive, ",(0,l.kt)("a",{parentName:"p",href:"https://www.stackage.org/"},"Stackage")," -\na subset of Hackage packages that are known to work together, or even\nfrom remote git repositories. Usually Haskellers use a ",(0,l.kt)("strong",{parentName:"p"},"package manager")," to\ndownload and manage packages for different projects. The most popular package\nmanagers for Haskell are ",(0,l.kt)("a",{parentName:"p",href:"https://cabal.readthedocs.io"},"cabal")," and\n",(0,l.kt)("a",{parentName:"p",href:"https://haskellstack.org"},"stack"),"."),(0,l.kt)("p",null,"A major difference between the two is their philosophy.\n",(0,l.kt)("inlineCode",{parentName:"p"},"cabal")," tries to be a more minimalist tool that handles building Haskell projects,\ndoing package management using the whole of Hackage, and uses complicated algorithms\nto make sure packages work together.\n",(0,l.kt)("inlineCode",{parentName:"p"},"stack")," tries to be a more maximalistic tool that handles installing the right GHC\nfor each project, provides integration with external tools like hoogle,\nand lets the user choose which 'set' of packages (including their versions) they want to use."),(0,l.kt)("p",null,"If you've installed Haskell using GHCup, you most likely have ",(0,l.kt)("inlineCode",{parentName:"p"},"cabal")," installed.\nIf you've installed Haskell using stack, well, you have ",(0,l.kt)("inlineCode",{parentName:"p"},"stack")," installed.\nCheck the ",(0,l.kt)("a",{parentName:"p",href:"https://www.haskell.org/downloads/"},"haskell.org downloads page")," if that's not the case."),(0,l.kt)("h2",{id:"creating-a-project"},"Creating a project"),(0,l.kt)("p",null,"Using external packages can be done in multiple ways.\nFor quick experimentation, we can just\n",(0,l.kt)("a",{parentName:"p",href:"https://gilmi.me/blog/post/2021/08/14/hs-core-tools#using-external-packages-in-ghci"},"ask stack or cabal"),"\nto build or even run our program with external packages.\nBut as programs get larger, use more dependencies, and require more functionality,\nit is better to ",(0,l.kt)("strong",{parentName:"p"},"create a project description")," for our programs and libraries."),(0,l.kt)("p",null,"Project description is done in a ",(0,l.kt)("strong",{parentName:"p"},"cabal file"),". We can ask cabal or stack\nto generate one for us using ",(0,l.kt)("inlineCode",{parentName:"p"},"cabal init --libandexe")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"stack new"),",\nalong with many other files, but we will likely need to edit the file by hand\nlater. For now let's just paste an initial example in ",(0,l.kt)("inlineCode",{parentName:"p"},"hs-blog.cabal")," and edit it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cabal"},"cabal-version:       2.4\n\nname:                name should match with <name>.cabal\nversion:             version should use PvP\nsynopsis:            Synopsis will appear in the hackage package listing and search\ndescription:         The description will appear at the top of a library\nhomepage:            Homepage url\nbug-reports:         issue-tracker url\nlicense:             License name\nlicense-file:        License file\nauthor:              Author name\nmaintainer:          Maintainer email\ncategory:            Hackage categories, separated by commas\nextra-doc-files:\n  README.md\n\ncommon common-settings\n  default-language: Haskell2010\n  ghc-options:\n    -Wall\n\nlibrary\n  import: common-settings\n  hs-source-dirs: src\n  build-depends:\n      base\n    , directory\n  exposed-modules:\n    HsBlog\n      HsBlog.Convert\n      HsBlog.Html\n        HsBlog.Html.Internal\n      HsBlog.Markup\n  -- other-modules:\n\nexecutable hs-blog-gen\n  import: common-settings\n  hs-source-dirs: app\n  main-is: Main.hs\n  build-depends:\n      base\n    , <package-name>\n  ghc-options:\n    -O\n")),(0,l.kt)("p",null,"Let's break it down to a few parts, the\n",(0,l.kt)("a",{parentName:"p",href:"#package-metadata"},"package metadata"),",\n",(0,l.kt)("a",{parentName:"p",href:"#common-settings"},"common settings"),",\n",(0,l.kt)("a",{parentName:"p",href:"#library"},"library")," and\n",(0,l.kt)("a",{parentName:"p",href:"#executable"},"executable"),"."),(0,l.kt)("h3",{id:"package-metadata"},"Package metadata"),(0,l.kt)("p",null,"The first part should be fairly straightforward from the comments, maybe except for:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cabal-version"),": Defines which cabal versions can build this project. We've specified 2.4 and above.\n",(0,l.kt)("a",{parentName:"li",href:"https://cabal.readthedocs.io/en/stable/file-format-changelog.html"},"More info on different versions"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name"),": The name of your library and package. Must match with the ",(0,l.kt)("inlineCode",{parentName:"li"},".cabal")," filename. Usually starts with a lowercase. ",(0,l.kt)("a",{parentName:"li",href:"https://hackage.haskell.org/packages/search?terms=name"},"Check if your package name is already taken on Hackage"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"version"),": Some Haskell packages use ",(0,l.kt)("a",{parentName:"li",href:"https://semver.org/"},"semver"),", most use ",(0,l.kt)("a",{parentName:"li",href:"https://pvp.haskell.org/"},"PvP"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"license"),": Most Haskell packages use ",(0,l.kt)("a",{parentName:"li",href:"https://choosealicense.com/licenses/bsd-3-clause/"},"BSD-3-Clause"),". ",(0,l.kt)("a",{parentName:"li",href:"https://neilmitchell.blogspot.com/2018/08/licensing-my-haskell-packages.html"},"Neil Mitchell blogged about this"),". You can find more licenses if you'd like at ",(0,l.kt)("a",{parentName:"li",href:"https://choosealicense.com"},"choosealicense.com"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"extra-doc-files"),": Include extra doc files here, such as ",(0,l.kt)("inlineCode",{parentName:"li"},"README")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"CHANGELOG"),".")),(0,l.kt)("p",null,"Let's fill this with the metadata of our project:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cabal"},"cabal-version:       2.4\n\nname:                hs-blog\nversion:             0.1.0.0\nsynopsis:            A custom blog generator from markup files\ndescription:         This package provides a static blog generator\n                     from a custom markup format to HTML.\n                     It defines a parser for this custom markup format\n                     as well as an html pretty printer EDSL.\n\n                     It is used as the example project in the online book\n                     'Learn Haskell Blog Generator'. See the README for\n                     more details.\nhomepage:            https://github.com/soupi/learn-haskell-blog-generator\nbug-reports:         https://github.com/soupi/learn-haskell-blog-generator/issues\nlicense:             BSD-3-Clause\nlicense-file:        LICENSE.txt\nauthor:              Gil Mizrahi\nmaintainer:          gilmi@posteo.net\ncategory:            Learning, Web\nextra-doc-files:\n  README.md\n")),(0,l.kt)("h3",{id:"common-settings"},"Common settings"),(0,l.kt)("p",null,'Cabal package descriptions can include multiple "targets": libraries, executables,\nand test suites. Since Cabal 2.2, we can use\n',(0,l.kt)("a",{parentName:"p",href:"https://cabal.readthedocs.io/en/stable/cabal-package.html#common-stanzas"},"common stanzas"),"\nto group settings to be shared between different targets, so we don't have to repeat them for each target."),(0,l.kt)("p",null,"In our case we've created a new common stanza (or block) called ",(0,l.kt)("inlineCode",{parentName:"p"},"common-settings")," and\ndefined the default language (Haskell has two standards, 98 and 2010),\nand instructed GHC to compile with ",(0,l.kt)("inlineCode",{parentName:"p"},"-Wall"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cabal"},"common common-settings\n  default-language: Haskell2010\n  ghc-options:\n    -Wall\n")),(0,l.kt)("p",null,"Later, in our targets' descriptions, we can add ",(0,l.kt)("inlineCode",{parentName:"p"},"import: common-settings")," ,\nand all of these settings will be automatically added."),(0,l.kt)("h3",{id:"library"},"Library"),(0,l.kt)("p",null,"In a ",(0,l.kt)("inlineCode",{parentName:"p"},"library")," target, we define:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The settings with which to build the library (in this case we just import ",(0,l.kt)("inlineCode",{parentName:"li"},"common-settings"),")"),(0,l.kt)("li",{parentName:"ul"},"The directory in which the source files can be found"),(0,l.kt)("li",{parentName:"ul"},"The packages we require to build the library"),(0,l.kt)("li",{parentName:"ul"},"The modules exposed from the library and can be used by others"),(0,l.kt)("li",{parentName:"ul"},"The modules ",(0,l.kt)("em",{parentName:"li"},"not")," exposed from the library and which ",(0,l.kt)("em",{parentName:"li"},"cannot")," be used by others;\nthese could be any module you don't wish to export, such as an internal utility\nfunctions module.\nIn our case we don't have anything like this, so we commented out the ",(0,l.kt)("inlineCode",{parentName:"li"},"other-modules"),"\nlabel.")),(0,l.kt)("p",null,"Note that it is common to specify ",(0,l.kt)("strong",{parentName:"p"},"version bounds")," for packages.\nVersion bounds specify ",(0,l.kt)("em",{parentName:"p"},"which package versions this library works with"),".\nThese can also be generated using cabal with the ",(0,l.kt)("inlineCode",{parentName:"p"},"cabal gen-bounds")," command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cabal"},"library\n  import: common-settings\n  hs-source-dirs: src\n  build-depends:\n      base\n    , directory\n  exposed-modules:\n    HsBlog\n      HsBlog.Convert\n      HsBlog.Html\n        HsBlog.Html.Internal\n      HsBlog.Markup\n  -- other-modules:\n")),(0,l.kt)("p",null,"Also note that we've added an additional ",(0,l.kt)("em",{parentName:"p"},"hierarchy")," for our modules and defined\na different source directory. This means we will need to move the files around\na bit and change the ",(0,l.kt)("inlineCode",{parentName:"p"},"module")," name in each file and the ",(0,l.kt)("inlineCode",{parentName:"p"},"import")," statements. This is to avoid\nconflict with other packages that a user might import."),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Do this now."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Solution"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Main.hs")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"src/HsBlog.hs")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"module HsBlog\n  ( main\n , process\n )\n  where\n\nimport qualified HsBlog.Markup as Markup\nimport qualified HsBlog.Html as Html\nimport HsBlog.Convert (convert)\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Convert.hs")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"src/HsBlog/Convert.hs")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"module HsBlog.Convert where\n\nimport qualified HsBlog.Markup as Markup\nimport qualified HsBlog.Html as Html\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Html.hs")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"src/HsBlog/Html.hs")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"module HsBlog.Html\n...\n\nimport HsBlog.Html.Internal\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Html/Internal.hs")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"src/HsBlog/Html/Internal.hs")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"module HsBlog.Html.Internal where\n")))),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Markup.hs")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"src/HsBlog/Markup.hs")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"module HsBlog.Markup\n"))))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"executable"},"Executable"),(0,l.kt)("p",null,"We have separated our code into two sections: a library and an executable, why?"),(0,l.kt)("p",null,"First, libraries can be used by others. If we publish our code and someone wants to\nuse it and build upon it, they can. Executables can't be imported by other projects.\nSecond, we can write unit tests for libraries. It is usually\nbeneficial to write most, if not all, of our logic as a library, and provide\na thin executable over it."),(0,l.kt)("p",null,"Executables' descriptions are very similar to libraries, here we define:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The name of the executable"),(0,l.kt)("li",{parentName:"ul"},"Where the source directory for this application is"),(0,l.kt)("li",{parentName:"ul"},"Which file is the 'Main' file"),(0,l.kt)("li",{parentName:"ul"},"Import our library, which is named ",(0,l.kt)("inlineCode",{parentName:"li"},"hs-blog")),(0,l.kt)("li",{parentName:"ul"},"Additional flags for GHC, e.g., ",(0,l.kt)("inlineCode",{parentName:"li"},"-O")," to compile with optimizations")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cabal"},"executable hs-blog-gen\n  import: common-settings\n  hs-source-dirs: app\n  main-is: Main.hs\n  build-depends:\n      base\n    , hs-blog\n  ghc-options:\n    -O\n")),(0,l.kt)("p",null,"We can write many executables descriptions. In this case we only have one."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Exercise"),": Add a new file: ",(0,l.kt)("inlineCode",{parentName:"p"},"app/Main.hs")," which imports ",(0,l.kt)("inlineCode",{parentName:"p"},"HsBlog")," and runs ",(0,l.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Solution"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"-- app/Main.hs\n\nmodule Main where\n\nimport qualified HsBlog\n\nmain :: IO ()\nmain = HsBlog.main\n"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"test-suites"},"Test-suites"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"test-suite")," defines a target for running package tests. We will get back to it\nin a later chapter."),(0,l.kt)("h2",{id:"our-complete-cabal-file"},"Our complete .cabal file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cabal"},"cabal-version:       2.4\n\nname:                hs-blog\nversion:             0.1.0.0\nsynopsis:            A custom blog generator from markup files\ndescription:         This package provides a static blog generator\n                     from a custom markup format to HTML.\n                     It defines a parser for this custom markup format\n                     as well as an html pretty printer EDSL.\n\n                     It is used as the example project in the online book\n                     'Learn Haskell Blog Generator'. See the README for\n                     more details.\nhomepage:            https://github.com/soupi/learn-haskell-blog-generator\nbug-reports:         https://github.com/soupi/learn-haskell-blog-generator/issues\nlicense:             BSD-3-Clause\nlicense-file:        LICENSE.txt\nauthor:              Gil Mizrahi\nmaintainer:          gilmi@posteo.net\ncategory:            Learning, Web\nextra-doc-files:\n  README.md\n\ncommon common-settings\n  default-language: Haskell2010\n  ghc-options:\n    -Wall\n\nlibrary\n  import: common-settings\n  hs-source-dirs: src\n  build-depends:\n      base\n    , directory\n  exposed-modules:\n    HsBlog\n      HsBlog.Convert\n      HsBlog.Html\n        HsBlog.Html.Internal\n      HsBlog.Markup\n  -- other-modules:\n\nexecutable hs-blog-gen\n  import: common-settings\n  hs-source-dirs: app\n  main-is: Main.hs\n  build-depends:\n      base\n    , hs-blog\n  ghc-options:\n    -O\n")),(0,l.kt)("p",null,"We'll also add a ",(0,l.kt)("inlineCode",{parentName:"p"},"README.md")," file and a ",(0,l.kt)("inlineCode",{parentName:"p"},"LICENSE.txt")," file:"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"README.md"),(0,l.kt)("p",null,"Just write whatever you want here:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},"# hs-blog\n\nOne day it will be a static blog generator.\n\n[Read the book](https://lhbg-book.link).\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"LICENSE.txt"),(0,l.kt)("p",null,"This is BSD-3-Clause with me as the author. Please write your own name for your projects :)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'BSD 3-Clause License\n\nCopyright (c) 2021-2022, Gil Mizrahi\nAll rights reserved.\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are met:\n\n1. Redistributions of source code must retain the above copyright notice, this\n   list of conditions and the following disclaimer.\n\n2. Redistributions in binary form must reproduce the above copyright notice,\n   this list of conditions and the following disclaimer in the documentation\n   and/or other materials provided with the distribution.\n\n3. Neither the name of the copyright holder nor the names of its\n   contributors may be used to endorse or promote products derived from\n   this software without specific prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"\nAND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE\nIMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE\nDISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE\nFOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL\nDAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR\nSERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER\nCAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,\nOR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n'))),(0,l.kt)("h2",{id:"cabalproject-and-stackyaml"},(0,l.kt)("inlineCode",{parentName:"h2"},"cabal.project")," and ",(0,l.kt)("inlineCode",{parentName:"h2"},"stack.yaml")),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://cabal.readthedocs.io/en/stable/cabal-project.html"},"cabal.project")," and\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.haskellstack.org/en/stable/yaml_configuration/#project-specific-config"},"stack.yaml"),"\nfiles are used by ",(0,l.kt)("inlineCode",{parentName:"p"},"cabal")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"stack")," respectively to add additional information on ",(0,l.kt)("em",{parentName:"p"},"how\nto build the package"),". While ",(0,l.kt)("inlineCode",{parentName:"p"},"cabal.project")," isn't necessary to use ",(0,l.kt)("inlineCode",{parentName:"p"},"cabal"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"stack.yaml"),"\nis necessary in order to use ",(0,l.kt)("inlineCode",{parentName:"p"},"stack"),", so we will cover it briefly."),(0,l.kt)("p",null,"There are two important fields a ",(0,l.kt)("inlineCode",{parentName:"p"},"stack.yaml")," file must have:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"resolver"),": Describes which snapshot to use for packages and ghc version.\nWe will choose the latest (at time of writing) on the ",(0,l.kt)("inlineCode",{parentName:"li"},"lts")," branch: ",(0,l.kt)("inlineCode",{parentName:"li"},"lts-18.22"),".\nVisit ",(0,l.kt)("a",{parentName:"li",href:"https://www.stackage.org/lts-18.22"},"this link")," to find out which packages this\nsnapshot includes, what their versions are, and which GHC version is used\nwith this snapshot"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"packages"),": Describes the location of packages we plan to build. In our case\nwe have only one and it can be found in the current directory")),(0,l.kt)("p",null,"We'll add ",(0,l.kt)("inlineCode",{parentName:"p"},"stack.yaml")," to our project directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"resolver: lts-18.22\n\npackages:\n- .\n")),(0,l.kt)("p",null,"For additional options and configurations, please consult the relevant user guides."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Now, instead of manually running ",(0,l.kt)("inlineCode",{parentName:"p"},"runghc Main.hs"),", we will use either ",(0,l.kt)("inlineCode",{parentName:"p"},"stack"),"\nor ",(0,l.kt)("inlineCode",{parentName:"p"},"cabal")," to build and run our program and package (I mostly use stack, but it's up to you)."),(0,l.kt)("h3",{id:"for-cabal"},"For cabal:"),(0,l.kt)("p",null,"Building the project - on the first run, cabal will download the package dependencies\nand use the GHC on PATH to build the project."),(0,l.kt)("p",null,"Cabal caches packages between projects, so if a new project uses the same packages\nwith the same versions (and the same flag settings) they will not need to be reinstalled."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"In older versions of cabal, packages could be installed either globally, or in sandboxes.\nIn each sandbox (and globally) there could only be one version of a package installed,\nand users would usually create different sandboxes for different projects, without caching\npackages between projects."),(0,l.kt)("p",{parentName:"blockquote"},"With the new build system implementation, multiple versions of the same package can be\ninstalled globally, and for each project cabal will (try to) choose a specific version for each\npackage dependency such that they all work together, without needing sandboxing.\nThis change helps us increase sharing of built packages while avoiding conflicts and manual\nhandling of sandboxes.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: The new build system implementation is now the default and Cabal commands do not need\nto be prefixed with ",(0,l.kt)("inlineCode",{parentName:"p"},"v2-"),", but the Cabal documentation will still mention the prefix to\nrefer to the new commands.")),(0,l.kt)("p",null,"A few important commands we should be familiar with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cabal update\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://cabal.readthedocs.io/en/stable/cabal-commands.html#cabal-update"},(0,l.kt)("inlineCode",{parentName:"a"},"update")),"\nfetches information from remote package repositories (specifically Hackage unless specified otherwise)\nand updates the local package index which includes various information about available packages such as\ntheir names, versions and dependencies."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cabal update")," is usually the first command to run before fetching package dependencies."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cabal build\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://cabal.readthedocs.io/en/stable/cabal-commands.html#cabal-build"},(0,l.kt)("inlineCode",{parentName:"a"},"build")),"\ncompiles the various targets (such as ",(0,l.kt)("inlineCode",{parentName:"p"},"library")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"executable"),"s).\nIt will also fetch and install the package dependencies when they're not already installed."),(0,l.kt)("p",null,"When building executables, ",(0,l.kt)("inlineCode",{parentName:"p"},"cabal build")," will report where the executable has been created,\nand it is also possible to find the path to the executable using ",(0,l.kt)("inlineCode",{parentName:"p"},"cabal exec -- which hs-blog-gen"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cabal run hs-blog-gen -- <program arguments>\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://cabal.readthedocs.io/en/stable/cabal-commands.html#cabal-run"},(0,l.kt)("inlineCode",{parentName:"a"},"run")),"\nCan be used to compile and then run a target (in our case our ",(0,l.kt)("inlineCode",{parentName:"p"},"executable")," which we named ",(0,l.kt)("inlineCode",{parentName:"p"},"hs-blog-gen"),").\nWe separate arguments passed to ",(0,l.kt)("inlineCode",{parentName:"p"},"cabal")," and arguments passed to our target program with ",(0,l.kt)("inlineCode",{parentName:"p"},"--"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cabal repl hs-blog\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://cabal.readthedocs.io/en/stable/cabal-commands.html#cabal-repl"},(0,l.kt)("inlineCode",{parentName:"a"},"repl")),"\nruns ",(0,l.kt)("inlineCode",{parentName:"p"},"ghci")," in the context of the target (in our case our ",(0,l.kt)("inlineCode",{parentName:"p"},"library")," which we named ",(0,l.kt)("inlineCode",{parentName:"p"},"hs-blog"),") -\nit will load the target's package dependencies and modules to be available in ",(0,l.kt)("inlineCode",{parentName:"p"},"ghci"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cabal clean\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://cabal.readthedocs.io/en/stable/cabal-commands.html#cabal-clean"},(0,l.kt)("inlineCode",{parentName:"a"},"clean")),"\nDeletes the build artifacts that we built."),(0,l.kt)("p",null,"There are more interesting commands we could use, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"cabal freeze")," to generate\na file which records the packages versions and flags we used to build this project,\nand ",(0,l.kt)("inlineCode",{parentName:"p"},"cabal sdist")," to bundle the project source to a package tarball which can be\nuploaded to Hackage. If you'd like to learn more visit the\n",(0,l.kt)("a",{parentName:"p",href:"https://cabal.readthedocs.io/en/stable/cabal-commands.html"},"Cabal user guide"),"."),(0,l.kt)("h3",{id:"for-stack"},"For stack:"),(0,l.kt)("p",null,"Building the project - on the first run, stack will install the right GHC for this project\nwhich is specified by the ",(0,l.kt)("inlineCode",{parentName:"p"},"resolver")," field in the ",(0,l.kt)("inlineCode",{parentName:"p"},"stack.yaml")," file,\ndownload the package dependencies, and compile the project."),(0,l.kt)("p",null,"Stack caches these installations between projects that use the same resolver,\nso future projects with the same resolver and future runs of this project won't\nrequire reinstallation. This approach is kind of a middle ground between full packages\nsharing and sandboxes."),(0,l.kt)("p",null,"Let's look at the (somewhat) equivalent commands for Stack:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"stack build\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.haskellstack.org/en/stable/build_command/#build-command"},(0,l.kt)("inlineCode",{parentName:"a"},"build")),"\nwill compile the project as described above - installing GHC and package dependencies if they are not\ninstalled."),(0,l.kt)("p",null,"When building executables, ",(0,l.kt)("inlineCode",{parentName:"p"},"stack build")," will report where the executable has been created,\nand it is also possible to find the path to the executable using ",(0,l.kt)("inlineCode",{parentName:"p"},"stack exec -- which hs-blog-gen"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"stack exec hs-blog-gen -- <program arguments>\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.haskellstack.org/en/stable/GUIDE/#stack-exec"},(0,l.kt)("inlineCode",{parentName:"a"},"exec")),"\nwill run the executable passing the program arguments to our executable."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"stack ghci hs-blog\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.haskellstack.org/en/stable/ghci/#ghci"},(0,l.kt)("inlineCode",{parentName:"a"},"ghci")),"\nruns ",(0,l.kt)("inlineCode",{parentName:"p"},"ghci")," in the context of our library ",(0,l.kt)("inlineCode",{parentName:"p"},"hs-blog")," - loading the library modules\nand packages."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"stack clean\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.haskellstack.org/en/stable/GUIDE/#cleaning-your-project"},(0,l.kt)("inlineCode",{parentName:"a"},"clean")),"\ncleans up build artifacts."),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://docs.haskellstack.org/en/stable/GUIDE/"},"Stack user guide")," contains more\ninformation about how stack works and how to use it effectively."),(0,l.kt)("h3",{id:"build-artifacts"},"Build artifacts"),(0,l.kt)("p",null,"Both stack and cabal create build artifacts that we will not want to track using\nour version control. These build artifacts are found in the ",(0,l.kt)("inlineCode",{parentName:"p"},"dist"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"dist-newstyle"),"\nand ",(0,l.kt)("inlineCode",{parentName:"p"},".stack-work")," directories. We can add these to a ",(0,l.kt)("inlineCode",{parentName:"p"},".gitignore")," file\n(or similar for other version control programs) to ignore them:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"dist\ndist-newstyle\n.stack-work\n")),(0,l.kt)("h2",{id:"finding-packages"},"Finding packages"),(0,l.kt)("p",null,"Finding packages isn't a very straightforward process at the moment.\nPeople have written on\n",(0,l.kt)("a",{parentName:"p",href:"https://www.haskellforall.com/2018/05/how-i-evaluate-haskell-packages.html"},"how they choose packages"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/soupi/haskell-study-plan#useful-packages"},"recommendation lists"),", ",(0,l.kt)("a",{parentName:"p",href:"https://leanpub.com/haskell-stdlibs"},"books"),", and more."),(0,l.kt)("p",null,"My suggestion is:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Search for a tutorial on something you'd like to do, and see which packages come up"),(0,l.kt)("li",{parentName:"ul"},"Use the download amount on Hackage as an indication of package popularity"),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("a",{parentName:"li",href:"https://www.stackage.org/lts"},"Stackage")," package synopses to locate a relevant package"),(0,l.kt)("li",{parentName:"ul"},"Check social network channels for recommendations, but know that sometimes people tend\nto recommend inappropriate solutions and packages that might be too complicated or\nstill experimental")),(0,l.kt)("p",null,"It's also important to note the amount of dependencies a package has. Adding many dependencies\nwill affect compilation time and code size. And it can sometimes be a good thing to consider\nwhen comparing packages, or considering whether a package is needed at all."),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("p",null,"We've created a package description for our library and used ",(0,l.kt)("inlineCode",{parentName:"p"},"stack")," and/or ",(0,l.kt)("inlineCode",{parentName:"p"},"cabal"),"\nto build our program. In future chapters we'll start adding external packages,\nwe'll only have to add them to the ",(0,l.kt)("inlineCode",{parentName:"p"},"build-depends")," section in the cabal file and\nour package manager will download and install the required package for us!"),(0,l.kt)("p",null,"We've made some change to our project directory, and it should now look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 app\n\u2502\xa0\xa0 \u2514\u2500\u2500 Main.hs\n\u251c\u2500\u2500 hs-blog.cabal\n\u251c\u2500\u2500 LICENSE.txt\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 HsBlog\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Convert.hs\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Html\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Internal.hs\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Html.hs\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Markup.hs\n\u2502\xa0\xa0 \u2514\u2500\u2500 HsBlog.hs\n\u2514\u2500\u2500 stack.yaml\n\n4 directories, 10 files\n")),(0,l.kt)("p",null,"Note that this package format could be released on ",(0,l.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/"},"Hackage"),"\nfor other Haskell developers to use!"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You can view the git commit of\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/soupi/learn-haskell-blog-generator/commit/8ca58aef80930db82cd20e85f44f5e34e1d74214"},"the changes we've made"),"\nand the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/soupi/learn-haskell-blog-generator/tree/8ca58aef80930db82cd20e85f44f5e34e1d74214"},"code up until now"),".")))}m.isMDXComponent=!0}}]);