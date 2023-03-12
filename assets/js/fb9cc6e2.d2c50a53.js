"use strict";(self.webpackChunklearn_haskell_blog_generator=self.webpackChunklearn_haskell_blog_generator||[]).push([[950],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||o;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},349:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={},i="Exceptions",l={unversionedId:"errors_and_files/exceptions",id:"errors_and_files/exceptions",title:"Exceptions",description:"The Control.Exception",source:"@site/docs/06-errors_and_files/03-exceptions.md",sourceDirName:"06-errors_and_files",slug:"/errors_and_files/exceptions",permalink:"/learn-haskell-blog-generator/errors_and_files/exceptions",draft:!1,editUrl:"https://github.com/jbl428/learn-haskell-blog-generator/tree/book/docs/06-errors_and_files/03-exceptions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Either with IO?",permalink:"/learn-haskell-blog-generator/errors_and_files/except"},next:{title:"Lets code already!",permalink:"/learn-haskell-blog-generator/errors_and_files/implementation"}},s={},p=[{value:"Summary",id:"summary",level:2}],c={toc:p},d="wrapper";function h(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"exceptions"},"Exceptions"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/base-4.16.4.0/docs/Control-Exception.html"},"Control.Exception"),"\nmodule provides us with the ability to\n",(0,r.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/base-4.16.4.0/docs/Control-Exception.html#v:throwIO"},"throw"),"\nexceptions from ",(0,r.kt)("inlineCode",{parentName:"p"},"IO")," code,\n",(0,r.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/base-4.16.4.0/docs/Control-Exception.html#g:5"},(0,r.kt)("inlineCode",{parentName:"a"},"catch")),"\nHaskell exceptions in ",(0,r.kt)("inlineCode",{parentName:"p"},"IO")," code, and even convert them to ",(0,r.kt)("inlineCode",{parentName:"p"},"IO (Either ...)"),"\nwith the function ",(0,r.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/base-4.16.4.0/docs/Control-Exception.html#g:7"},(0,r.kt)("inlineCode",{parentName:"a"},"try")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"throwIO :: Exception e => e -> IO a\n\ncatch\n  :: Exception e\n  => IO a         -- The computation to run\n  -> (e -> IO a)  -- Handler to invoke if an exception is raised\n  -> IO a\n\ntry :: Exception e => IO a -> IO (Either e a)\n")),(0,r.kt)("p",null,"The important part of these type signatures is the\n",(0,r.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/base-4.16.4.0/docs/Control-Exception.html#t:Exception"},(0,r.kt)("inlineCode",{parentName:"a"},"Exception")),"\ntype class. By making a type an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Exception")," type class, we can throw it\nand catch it in ",(0,r.kt)("inlineCode",{parentName:"p"},"IO")," code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'{-# language LambdaCase #-}\n\nimport Control.Exception\nimport System.IO\n\ndata MyException\n  = ErrZero\n  | ErrOdd Int\n  deriving Show\n\ninstance Exception MyException\n\nsayDiv2 :: Int -> IO ()\nsayDiv2 n\n  | n == 0 = throwIO ErrZero\n  | n `mod` 2 /= 0 = throwIO (ErrOdd n)\n  | otherwise = print (n `div` 2)\n\nmain :: IO ()\nmain =\n  catch\n    ( do\n      putStrLn "Going to print a number now."\n      sayDiv2 7\n      putStrLn "Did you like it?"\n    )\n    ( \\case\n      ErrZero ->\n        hPutStrLn stderr "Error: we don\'t support dividing zeroes for some reason"\n      ErrOdd n ->\n        hPutStrLn stderr ("Error: " <> show n <> " is odd and cannot be divided by 2")\n    )\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: we are using two new things here: guards, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"LambdaCase")," language extension."),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Guards as seen in ",(0,r.kt)("inlineCode",{parentName:"p"},"sayDiv2")," are just a nicer syntax around ",(0,r.kt)("inlineCode",{parentName:"p"},"if-then-else")," expressions.\nUsing guards we can have multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," branches and finally use the ",(0,r.kt)("inlineCode",{parentName:"p"},"else")," branch\nby using ",(0,r.kt)("inlineCode",{parentName:"p"},"otherwise"),". After each guard (",(0,r.kt)("inlineCode",{parentName:"p"},"|"),") there's a condition, after the condition there's\na ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," and then the expression (the part after ",(0,r.kt)("inlineCode",{parentName:"p"},"then")," in an ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," expression)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"LambdaCase as seen in ",(0,r.kt)("inlineCode",{parentName:"p"},"catch"),", is just a syntactic sugar to save a few characters,\ninstead of writing ",(0,r.kt)("inlineCode",{parentName:"p"},"\\e -> case e of"),", we can write ",(0,r.kt)("inlineCode",{parentName:"p"},"\\case"),". It requires enabling the\n",(0,r.kt)("inlineCode",{parentName:"p"},"LambdaCase")," extension"),(0,r.kt)("h4",{parentName:"li",id:"language-extensions"},"Language extensions"),(0,r.kt)("p",{parentName:"li"},"Haskell is a standardized language. However, GHC provides ",(0,r.kt)("em",{parentName:"p"},"extensions")," to the language -\nadditional features that aren't covered in the 98 or 2010 standards of Haskell.\nFeatures such as syntactic extensions (like LambdaCase above), extensions to the type checker,\nand more."),(0,r.kt)("p",{parentName:"li"},"These extensions can be added by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"{-# language <extension-name> #-}"),"\n(the ",(0,r.kt)("inlineCode",{parentName:"p"},"language")," part is case insensitive)\nto the top of a Haskell source file, or they can be set globally for an entire project by\nspecifying them in the\n",(0,r.kt)("a",{parentName:"p",href:"https://cabal.readthedocs.io/en/stable/cabal-package.html#pkg-field-default-extensions"},"default-extensions"),"\nsection in the ",(0,r.kt)("inlineCode",{parentName:"p"},".cabal file"),"."),(0,r.kt)("p",{parentName:"li"},"The list of language extensions can be found in the\n",(0,r.kt)("a",{parentName:"p",href:"https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts.html"},"GHC manual"),",\nfeel free to browse it, but don't worry about trying to memorize all the extensions.")))),(0,r.kt)("p",null,"This example, of course, is an example that would work much better using ",(0,r.kt)("inlineCode",{parentName:"p"},"Either")," and separating\nthe division and printing \xe0 la 'functional core, imperative shell'. But as an example it works.\nWe have created a custom exception and handled it specifically outside an ",(0,r.kt)("inlineCode",{parentName:"p"},"IO")," block.\nHowever, we have not handled exceptions that might be raised by ",(0,r.kt)("inlineCode",{parentName:"p"},"putStrLn"),".\nWhat if, for example, for some reason we close the ",(0,r.kt)("inlineCode",{parentName:"p"},"stdout")," handle before this block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'main :: IO ()\nmain = do\n  hClose stdout\n  catch\n    ( do\n      putStrLn "Going to print a number now."\n      sayDiv2 7\n      putStrLn "Did you like it?"\n    )\n    ( \\case\n      ErrZero ->\n        hPutStrLn stderr "Error: we don\'t support dividing zeroes for some reason"\n      ErrOdd n ->\n        hPutStrLn stderr ("Error: " <> show n <> " is odd and cannot be divided by 2")\n    )\n')),(0,r.kt)("p",null,"Our program will crash with an error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ghc: <stdout>: hFlush: illegal operation (handle is closed)\n")),(0,r.kt)("p",null,"First, how do we know which exception we should handle? Some functions' documentation\ninclude this, but unfortunately ",(0,r.kt)("inlineCode",{parentName:"p"},"putStrLn"),"'s does not. We could guess from the\n",(0,r.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/base-4.16.4.0/docs/Control-Exception.html#i:Exception"},"list of instances"),"\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"Exception")," type class has; I think\n",(0,r.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/base-4.16.4.0/docs/GHC-IO-Exception.html#t:IOException"},(0,r.kt)("inlineCode",{parentName:"a"},"IOException"))," fits. Now, how can we handle this case as well? We can chain catches:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'-- need to add these at the top\n\n{-# language ScopedTypeVariables #-}\n\nimport GHC.IO.Exception (IOException(..))\n\nmain :: IO ()\nmain = do\n  hClose stdout\n  catch\n    ( catch\n      ( do\n        putStrLn "Going to print a number now."\n        sayDiv2 7\n        putStrLn "Did you like it?"\n      )\n      ( \\case\n        ErrZero ->\n          hPutStrLn stderr "Error: we don\'t support dividing zeroes for some reason"\n        ErrOdd n ->\n          hPutStrLn stderr ("Error: " <> show n <> " is odd and cannot be divided by 2")\n      )\n    )\n    ( \\(e :: IOException) ->\n      -- we can check if the error was an illegal operation on the stderr handle\n      if ioe_handle e /= Just stderr && ioe_type e /= IllegalOperation\n        then pure () -- we can\'t write to stderr because it is closed\n        else hPutStrLn stderr (displayException e)\n    )\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ScopedTypeVariables")," to be able to specify types inside let expressions,\nlambdas, pattern matching and more.")),(0,r.kt)("p",null,"Or we could use the convenient function\n",(0,r.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/base-4.16.4.0/docs/Control-Exception.html#v:catches"},(0,r.kt)("inlineCode",{parentName:"a"},"catches")),"\nto pass a list of exception\n",(0,r.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/base-4.16.4.0/docs/Control-Exception.html#t:Handler"},"handlers"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'main :: IO ()\nmain = do\n  hClose stdout\n  catches\n    ( do\n      putStrLn "Going to print a number now."\n      sayDiv2 7\n      putStrLn "Did you like it?"\n    )\n    [ Handler $ \\case\n      ErrZero ->\n        hPutStrLn stderr "Error: we don\'t support dividing zeroes for some reason"\n      ErrOdd n ->\n        hPutStrLn stderr ("Error: " <> show n <> " is odd and cannot be divided by 2")\n\n    , Handler $ \\(e :: IOException) ->\n      -- we can check if the error was an illegal operation on the stderr handle\n      if ioe_handle e /= Just stderr && ioe_type e /= IllegalOperation\n        then pure () -- we can\'t write to stderr because it is closed\n        else hPutStrLn stderr (displayException e)\n    ]\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"As an aside, ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler")," uses a concept called\n",(0,r.kt)("a",{parentName:"p",href:"https://en.m.wikibooks.org/wiki/Haskell/Existentially_quantified_types"},"existentially quantified types"),"\nto hide inside it a function that takes an arbitrary type that implements ",(0,r.kt)("inlineCode",{parentName:"p"},"Exception"),".\nThis is why we can encode a seemingly heterogeneous list of functions that handle exceptions\nfor ",(0,r.kt)("inlineCode",{parentName:"p"},"catches")," to take as input.\nThis pattern is rarely useful, but I've included it here to avoid confusion.")),(0,r.kt)("p",null,"And if we wanted to catch any exception, we'd catch ",(0,r.kt)("inlineCode",{parentName:"p"},"SomeException"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'main :: IO ()\nmain = do\n  hClose stdout\n  catch\n    ( do\n      putStrLn "Going to print a number now."\n      sayDiv2 7\n      putStrLn "Did you like it?"\n    )\n    ( \\(SomeException e) ->\n      hPutStrLn stderr (show e)\n    )\n')),(0,r.kt)("p",null,"This could also go in ",(0,r.kt)("inlineCode",{parentName:"p"},"catches")," as the last element in the list if we wanted specialized\nhandling for other scenarios."),(0,r.kt)("p",null,"A couple more functions worth knowing are\n",(0,r.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/base-4.16.4.0/docs/Control-Exception.html#v:bracket"},(0,r.kt)("inlineCode",{parentName:"a"},"bracket")),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/base-4.16.4.0/docs/Control-Exception.html#v:finally"},(0,r.kt)("inlineCode",{parentName:"a"},"finally")),".\nThese functions can help us handle resource acquisition more safely when errors are present."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In our ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Main.hs")," file, we do a small ritual opening and closing handles.\nAre there scenarios where we would clean-up after ourselves (meaning, close handles we've\nopened)? Which parts of the code could throw an exception? Which handles won't get closed?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Try to use ",(0,r.kt)("inlineCode",{parentName:"li"},"bracket")," to make sure we always close a handle afterwards, even if an exception\nis thrown, and avoid closing the handle for the ",(0,r.kt)("inlineCode",{parentName:"li"},"stdin")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"stdout")," cases",(0,r.kt)("details",null,(0,r.kt)("summary",null,"Hint"),"We might need to use continuation-passing style, passing a function that takes a parameter to a function that produces a parameter and calls it with that parameter.")),(0,r.kt)("li",{parentName:"ul"},"How can we avoid duplicating the ",(0,r.kt)("inlineCode",{parentName:"li"},"outputHandle")," code, for the ",(0,r.kt)("inlineCode",{parentName:"li"},"Stdin")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"InputFile"),"\nbranches? ",(0,r.kt)("details",null,(0,r.kt)("summary",null,"Hint")," Use ",(0,r.kt)("inlineCode",{parentName:"li"},"let"),"."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Answer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'import Control.Exception (bracket)\n\nmain :: IO ()\nmain = do\n...\n\n    ConvertSingle input output ->\n      let\n        -- Here, action is the next steps we want to do.\n        -- It takes as input the values we produce,\n        -- uses it, and then returns control for us to clean-up\n        -- afterwards.\n        withInputHandle :: (String -> Handle -> IO a) -> IO a\n        withInputHandle action =\n          case input of\n            Stdin ->\n              action "" stdin\n            InputFile file ->\n              bracket\n                (openFile file ReadMode)\n                hClose\n                (action file)\n\n        -- Note that in both functions our action can return any `a`\n        -- it wants.\n        withOutputHandle :: (Handle -> IO a) -> IO a\n        withOutputHandle action =\n          case output of\n            Stdout ->\n              action stdout\n            OutputFile file -> do\n              exists <- doesFileExist file\n              shouldOpenFile <-\n                if exists\n                  then confirm\n                  else pure True\n              if shouldOpenFile\n                then\n                  bracket (openFile file WriteMode) hClose action\n                else\n                  exitFailure\n      in\n        withInputHandle (\\title -> withOutputHandle . HsBlog.convertSingle title)\n'))),(0,r.kt)("p",null,"There's action a custom function that does similar thing to\n",(0,r.kt)("inlineCode",{parentName:"p"},"bracket (openFile file <mode>) hClose"),", it's called\n",(0,r.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/base-4.17.0.0/docs/System-IO.html#v:withFile"},"withFile"),".\nKeep an eye out for functions that start with the prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"with"),", they are probably using the\nsame pattern of continuation-passing style."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Exceptions are useful and often necessary when we work with ",(0,r.kt)("inlineCode",{parentName:"p"},"IO")," and want to make sure\nour program is handling errors gracefully. They have an advantage over ",(0,r.kt)("inlineCode",{parentName:"p"},"Either")," in that\nwe can easily compose functions that may throw errors of different types, but also have\na disadvantage of not encoding types as return values, and therefore does not force us\nto handle them."),(0,r.kt)("p",null,"For Haskell, the language designers have made a choice for us by designing ",(0,r.kt)("inlineCode",{parentName:"p"},"IO")," to\nuse exceptions instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"Either"),". And this is what I would recommend for\nhandling your own effectful computations. However, I think that ",(0,r.kt)("inlineCode",{parentName:"p"},"Either")," is more\nappropriate for uneffectful code, because it forces us to acknowledge and handle errors\n(eventually) thus making our programs more robust. And also because we can only\ncatch exceptions in ",(0,r.kt)("inlineCode",{parentName:"p"},"IO")," code."))}h.isMDXComponent=!0}}]);