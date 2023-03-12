"use strict";(self.webpackChunklearn_haskell_blog_generator=self.webpackChunklearn_haskell_blog_generator||[]).push([[499],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(t),c=r,h=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return t?a.createElement(h,l(l({ref:n},d),{},{components:t})):a.createElement(h,l({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8265:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const i={},l="Passing environment variables",o={unversionedId:"environment",id:"environment",title:"Passing environment variables",description:"We'd like to add some sort of an environment to keep general information on",source:"@site/docs/07-environment.md",sourceDirName:".",slug:"/environment",permalink:"/learn-haskell-blog-generator/environment",draft:!1,editUrl:"https://github.com/jbl428/learn-haskell-blog-generator/tree/book/docs/07-environment.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Summary",permalink:"/learn-haskell-blog-generator/errors_and_files/summary"},next:{title:"Testing",permalink:"/learn-haskell-blog-generator/testing"}},p={},s=[{value:"Environment",id:"environment",level:2},{value:"ReaderT",id:"readert",level:3},{value:"How to use Reader",id:"how-to-use-reader",level:3},{value:"Defining a function",id:"defining-a-function",level:4},{value:"Extracting <code>Env</code>",id:"extracting-env",level:3},{value:"Run a <code>Reader</code>",id:"run-a-reader",level:3},{value:"Extra: Transforming <code>Env</code> for a particular call",id:"extra-transforming-env-for-a-particular-call",level:3},{value:"Using <code>Env</code> in our logic code",id:"using-env-in-our-logic-code",level:3},{value:"Summary",id:"summary",level:3}],d={toc:s},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"passing-environment-variables"},"Passing environment variables"),(0,r.kt)("p",null,"We'd like to add some sort of an environment to keep general information on\nthe blog for various processings, such as the blog name, stylesheet\nlocation, and so on."),(0,r.kt)("h2",{id:"environment"},"Environment"),(0,r.kt)("p",null,"We can represent our environment as a record data type and build it from user input.\nThe user input can be from command-line arguments, a configuration file,\nor something else:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'module HsBlog.Env where\n\ndata Env\n  = Env\n    { eBlogName :: String\n    , eStylesheetPath :: FilePath\n    }\n  deriving Show\n\ndefaultEnv :: Env\ndefaultEnv = Env "My Blog" "style.css"\n')),(0,r.kt)("p",null,"After filling this record with the requested information, we can pass it as\ninput to any function that might need it. This is a simple approach that can definitely\nwork for small projects. But sometimes when the project gets bigger and many\nnested functions need the same information, threading the environment can get\ntedious."),(0,r.kt)("p",null,"There is an alternative solution to threading the environment as input to functions,\nand that is using the\n",(0,r.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/mtl-2.3.1/docs/Control-Monad-Reader.html#g:2"},(0,r.kt)("inlineCode",{parentName:"a"},"ReaderT")),"\ntype from the ",(0,r.kt)("inlineCode",{parentName:"p"},"mtl")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"transformers"),") package."),(0,r.kt)("h3",{id:"readert"},"ReaderT"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"newtype ReaderT r m a = ReaderT (r -> m a)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ReaderT")," is another ",(0,r.kt)("em",{parentName:"p"},"monad transformer")," like ",(0,r.kt)("inlineCode",{parentName:"p"},"ExceptT"),", which means\nthat it also has an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"Functor"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Applicative"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Monad")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MonadTrans"),"."),(0,r.kt)("p",null,"As we can see in the definition, ",(0,r.kt)("inlineCode",{parentName:"p"},"ReaderT")," is ",(0,r.kt)("em",{parentName:"p"},"a newtype")," over a function that takes\nsome value of type ",(0,r.kt)("inlineCode",{parentName:"p"},"r"),", and returns a value of type ",(0,r.kt)("inlineCode",{parentName:"p"},"m a"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"r")," usually\nrepresents the environment we want to share between functions that we want to compose,\nand the ",(0,r.kt)("inlineCode",{parentName:"p"},"m a")," represents the underlying result that we return.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," could be any type that implements ",(0,r.kt)("inlineCode",{parentName:"p"},"Monad")," that we are familiar with.\nUsually it goes well with ",(0,r.kt)("inlineCode",{parentName:"p"},"IO")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Identity"),", depending on if we want to share\nan environment between effectful or uneffectful computations."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ReaderT")," ",(0,r.kt)("em",{parentName:"p"},"carries")," a value of type ",(0,r.kt)("inlineCode",{parentName:"p"},"r")," and passes it around to\nother functions when we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Applicative")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Monad")," interfaces so that\nwe don't have to pass the value around manually. And when we want to grab\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"r")," and use it, all we have to do is ",(0,r.kt)("inlineCode",{parentName:"p"},"ask"),"."),(0,r.kt)("p",null,"For our case, this means that instead of passing around ",(0,r.kt)("inlineCode",{parentName:"p"},"Env"),", we can instead\nconvert our functions to use ",(0,r.kt)("inlineCode",{parentName:"p"},"ReaderT")," - those that are uneffectful and don't use\n",(0,r.kt)("inlineCode",{parentName:"p"},"IO"),", can return ",(0,r.kt)("inlineCode",{parentName:"p"},"ReaderT Env Identity a"),"  instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," (or the simplified version, ",(0,r.kt)("inlineCode",{parentName:"p"},"Reader Env a"),"),\nand those that are effectful can return ",(0,r.kt)("inlineCode",{parentName:"p"},"ReaderT Env IO a")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"IO a"),"."),(0,r.kt)("p",null,"Note, as we've said before, ",(0,r.kt)("inlineCode",{parentName:"p"},"Functor"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Applicative"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Monad")," all expect the type\nthat implements their interfaces to have the kind ",(0,r.kt)("inlineCode",{parentName:"p"},"* -> *"),".\nThis means that it is ",(0,r.kt)("inlineCode",{parentName:"p"},"ReaderT r m")," which implements these interfaces,\nand when we compose functions with ",(0,r.kt)("inlineCode",{parentName:"p"},"<*>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},">>=")," we replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"m"),"\nin their type signature with ",(0,r.kt)("inlineCode",{parentName:"p"},"ReaderT r m"),"."),(0,r.kt)("p",null,"This means that, as with ",(0,r.kt)("inlineCode",{parentName:"p"},"Either e")," when we had composed functions with the same error type,\nso it is with ",(0,r.kt)("inlineCode",{parentName:"p"},"ReaderT r m")," - we have to compose functions with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"r")," type and same\n",(0,r.kt)("inlineCode",{parentName:"p"},"m")," type, we can't mix different environment types or different underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," types."),(0,r.kt)("p",null,"We're going to use a specialized version of ",(0,r.kt)("inlineCode",{parentName:"p"},"ReaderT")," that uses a specific ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"Identity"),"\ncalled ",(0,r.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/mtl-2.3.1/docs/Control-Monad-Reader.html#g:2"},(0,r.kt)("inlineCode",{parentName:"a"},"Reader")),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"Control.Monad.Reader")," provides an alias: ",(0,r.kt)("inlineCode",{parentName:"p"},"Reader r a = ReaderT r Identity a"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the idea behind ",(0,r.kt)("inlineCode",{parentName:"p"},"ReaderT")," is still a bit fuzzy to you and you want\nto get a better understanding of how ",(0,r.kt)("inlineCode",{parentName:"p"},"ReaderT")," works,\ntry doing the following exercise:"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"Choose an ",(0,r.kt)("inlineCode",{parentName:"li"},"Applicative")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Monad")," interface function, I recommend ",(0,r.kt)("inlineCode",{parentName:"li"},"liftA2"),",\nand specialize its type signature by replacing ",(0,r.kt)("inlineCode",{parentName:"li"},"f")," (or ",(0,r.kt)("inlineCode",{parentName:"li"},"m"),") with a concrete ",(0,r.kt)("inlineCode",{parentName:"li"},"ReaderT")," type such as\n",(0,r.kt)("inlineCode",{parentName:"li"},"ReaderT Int IO")),(0,r.kt)("li",{parentName:"ol"},"Unpack the ",(0,r.kt)("inlineCode",{parentName:"li"},"ReaderT")," newtype, replacing ",(0,r.kt)("inlineCode",{parentName:"li"},"ReaderT Int IO t")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"Int -> IO t")),(0,r.kt)("li",{parentName:"ol"},"Implement this specialized version of the function you've chosen")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Solution for liftA2"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"liftA2 :: Applicative f => (a -> b -> c) -> f a -> f b -> f c\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Solution for (1)"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"-- Specialize: replace `f` with `ReaderT Env IO`\nliftA2 :: (a -> b -> c) -> ReaderT Env IO a -> ReaderT Env IO b -> ReaderT Env IO c\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Solution for (2)"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"-- Unpack the newtype, replacing `ReaderT Env IO a` with `Env -> IO a`\nliftA2 :: (a -> b -> c) -> (Env -> IO a) -> (Env -> IO b) -> (Env -> IO c)\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Solution for (3)"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"specialLiftA2 :: (a -> b -> c) -> (Env -> IO a) -> (Env -> IO b) -> (Env -> IO c)\nspecialLiftA2 combine funcA funcB env =\n  liftA2 combine (funcA env) (funcB env)\n")),(0,r.kt)("p",{parentName:"blockquote"},"Notice how the job of our special ",(0,r.kt)("inlineCode",{parentName:"p"},"liftA2")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"ReaderT")," is to supply the\ntwo functions with ",(0,r.kt)("inlineCode",{parentName:"p"},"env"),", and then use the ",(0,r.kt)("inlineCode",{parentName:"p"},"liftA2"),"\nimplementation of the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," type (in our case ",(0,r.kt)("inlineCode",{parentName:"p"},"IO"),") to do the rest of the work.\nDoes it look like we're adding a capability on top of a different ",(0,r.kt)("inlineCode",{parentName:"p"},"m"),"?\nThat's the idea behind monad transformers.")))),(0,r.kt)("h3",{id:"how-to-use-reader"},"How to use Reader"),(0,r.kt)("h4",{id:"defining-a-function"},"Defining a function"),(0,r.kt)("p",null,"Instead of defining a function like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"txtsToRenderedHtml :: Env -> [(FilePath, String)] -> [(FilePath, String)]\n")),(0,r.kt)("p",null,"We define it like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"txtsToRenderedHtml :: [(FilePath, String)] -> Reader Env [(FilePath, String)]\n")),(0,r.kt)("p",null,"Now that our code uses ",(0,r.kt)("inlineCode",{parentName:"p"},"Reader"),", we have to accommodate that in the way we write our functions."),(0,r.kt)("p",null,"Before:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'txtsToRenderedHtml :: Env -> [(FilePath, String)] -> [(FilePath, String)]\ntxtsToRenderedHtml env txtFiles =\n let\n   txtOutputFiles = map toOutputMarkupFile txtFiles\n   index = ("index.html", buildIndex env txtOutputFiles)\n   htmlPages = map (convertFile env) txtOutputFiles\n in\n   map (fmap Html.render) (index : htmlPages)\n')),(0,r.kt)("p",null,"Note how we needed to thread the ",(0,r.kt)("inlineCode",{parentName:"p"},"env")," to the other functions that use it."),(0,r.kt)("p",null,"After:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'txtsToRenderedHtml :: [(FilePath, String)] -> Reader Env [(FilePath, String)]\ntxtsToRenderedHtml txtFiles = do\n  let\n    txtOutputFiles = map toOutputMarkupFile txtFiles\n  index <- (,) "index.html" <$> buildIndex txtOutputFiles\n  htmlPages <- traverse convertFile txtOutputFiles\n  pure $ map (fmap Html.render) (index : htmlPages)\n')),(0,r.kt)("p",null,"Note how we use ",(0,r.kt)("em",{parentName:"p"},"do notation")," now, and ",(0,r.kt)("em",{parentName:"p"},"instead of threading")," ",(0,r.kt)("inlineCode",{parentName:"p"},"env")," around we ",(0,r.kt)("em",{parentName:"p"},"compose"),"\nthe relevant functions, ",(0,r.kt)("inlineCode",{parentName:"p"},"buildIndex")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"convertFile"),", we use the type classes\ninterfaces to compose the functions. Note how we needed to ",(0,r.kt)("inlineCode",{parentName:"p"},"fmap")," over ",(0,r.kt)("inlineCode",{parentName:"p"},"buildIndex"),"\nto add the output file we needed with the tuple, and how we needed to use ",(0,r.kt)("inlineCode",{parentName:"p"},"traverse")," instead\nof ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," to compose the various ",(0,r.kt)("inlineCode",{parentName:"p"},"Reader")," values ",(0,r.kt)("inlineCode",{parentName:"p"},"convertFile")," will produce."),(0,r.kt)("h3",{id:"extracting-env"},"Extracting ",(0,r.kt)("inlineCode",{parentName:"h3"},"Env")),(0,r.kt)("p",null,"When we want to use our ",(0,r.kt)("inlineCode",{parentName:"p"},"Env"),", we need to ",(0,r.kt)("em",{parentName:"p"},"extract")," it from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Reader"),".\nWe can do it with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"ask :: ReaderT r m r\n")),(0,r.kt)("p",null,"Which yanks the ",(0,r.kt)("inlineCode",{parentName:"p"},"r")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Reader")," - we can extract with ",(0,r.kt)("inlineCode",{parentName:"p"},">>=")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"<-")," in do notation.\nSee the comparison:"),(0,r.kt)("p",null,"Before:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"convertFile :: Env -> (FilePath, Markup.Document) -> (FilePath, Html.Html)\nconvertFile env (file, doc) =\n  (file, convert env (takeBaseName file) doc)\n")),(0,r.kt)("p",null,"After:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"convertFile :: (FilePath, Markup.Document) -> Reader Env (FilePath, Html.Html)\nconvertFile (file, doc) = do\n  env <- ask\n  pure (file, convert env (takeBaseName file) doc)\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: we didn't change ",(0,r.kt)("inlineCode",{parentName:"p"},"convert")," to use ",(0,r.kt)("inlineCode",{parentName:"p"},"Reader")," because it is a user facing API for our\nlibrary. By providing a simpler interface we allow more users to use our library -\neven those that aren't yet familiar with monad transformers."),(0,r.kt)("p",{parentName:"blockquote"},"Providing a simple function argument passing interface is preferred in this case.")),(0,r.kt)("h3",{id:"run-a-reader"},"Run a ",(0,r.kt)("inlineCode",{parentName:"h3"},"Reader")),(0,r.kt)("p",null,"Similar to handling the errors with ",(0,r.kt)("inlineCode",{parentName:"p"},"Either"),", at some point we need to supply the environment to\na computation that uses ",(0,r.kt)("inlineCode",{parentName:"p"},"Reader"),", and extract the result from the computation.\nWe can do that with the functions ",(0,r.kt)("inlineCode",{parentName:"p"},"runReader")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"runReaderT"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"runReader :: Reader r a -> (r -> a)\n\nrunReaderT :: ReaderT r m a -> (r -> m a)\n")),(0,r.kt)("p",null,"These functions convert a ",(0,r.kt)("inlineCode",{parentName:"p"},"Reader")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ReaderT")," to a function that takes ",(0,r.kt)("inlineCode",{parentName:"p"},"r"),".\nThen we can pass the initial environment to that function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'convertDirectory :: Env -> FilePath -> FilePath -> IO ()\nconvertDirectory env inputDir outputDir = do\n  DirContents filesToProcess filesToCopy <- getDirFilesAndContent inputDir\n  createOutputDirectoryOrExit outputDir\n  let\n    outputHtmls = runReader (txtsToRenderedHtml filesToProcess) env\n  copyFiles outputDir filesToCopy\n  writeFiles outputDir outputHtmls\n  putStrLn "Done."\n')),(0,r.kt)("p",null,"See the ",(0,r.kt)("inlineCode",{parentName:"p"},"let outputHtmls"),"part."),(0,r.kt)("h3",{id:"extra-transforming-env-for-a-particular-call"},"Extra: Transforming ",(0,r.kt)("inlineCode",{parentName:"h3"},"Env")," for a particular call"),(0,r.kt)("p",null,"Sometimes we may want to modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"Env")," we pass to a particular function call.\nFor example, we may have a general ",(0,r.kt)("inlineCode",{parentName:"p"},"Env")," type that contains a lot of information, and\nfunctions that only need a part of that information."),(0,r.kt)("p",null,"If the functions we are calling are like ",(0,r.kt)("inlineCode",{parentName:"p"},"convert")," and take the environment as an\nargument instead of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Reader"),", we can just extract the environment\nwith ",(0,r.kt)("inlineCode",{parentName:"p"},"ask"),", apply a function to the extracted environment,\nand pass the result to the function, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"outer :: Reader BigEnv MyResult\nouter = do\n  env <- ask\n  pure (inner (extractSmallEnv env))\n\ninner :: SmallEnv -> MyResult\ninner = ...\n\nextractSmallEnv :: BigEnv -> SmallEnv\nextractSmallEnv = ...\n")),(0,r.kt)("p",null,"But if ",(0,r.kt)("inlineCode",{parentName:"p"},"inner")," uses a ",(0,r.kt)("inlineCode",{parentName:"p"},"Reader SmallEnv")," instead of argument passing,\nwe can use ",(0,r.kt)("inlineCode",{parentName:"p"},"runReader")," to ",(0,r.kt)("em",{parentName:"p"},"convert ",(0,r.kt)("inlineCode",{parentName:"em"},"inner")," to a normal function"),",\nand use the same idea as above!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"outer :: Reader BigEnv MyResult\nouter = do\n  env <- ask\n  -- Here the type of `runReader inner` is `SmallEnv -> MyResult`\n  pure (runReader inner (extractSmallEnv env))\n\ninner :: Reader SmallEnv MyResult\ninner = ...\n\nextractSmallEnv :: BigEnv -> SmallEnv\nextractSmallEnv = ...\n")),(0,r.kt)("p",null,"This pattern is generalized and captured by a function called\n",(0,r.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/transformers-0.6.0.2/docs/Control-Monad-Trans-Reader.html#v:withReaderT"},"withReaderT"),",\nand works even for ",(0,r.kt)("inlineCode",{parentName:"p"},"ReaderT"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"withReaderT :: (env2 -> env1) -> ReaderT env1 m a -> ReaderT env2 m a\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"withReaderT")," takes a function that modifies the environment,\nand converts a ",(0,r.kt)("inlineCode",{parentName:"p"},"ReaderT env1 m a")," computation to a ",(0,r.kt)("inlineCode",{parentName:"p"},"ReaderT env2 m a")," computation\nusing this function."),(0,r.kt)("p",null,"Let's see it concretely with our example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"outer :: Reader BigEnv MyResult\nouter = withReaderT extractSmallEnv inner\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Question: what is the type of ",(0,r.kt)("inlineCode",{parentName:"p"},"withReaderT")," when specialized in our case?"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Answer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"withReaderT\n  :: (BigEnv -> SmallEnv)     -- This is the type of `extractSmallEnv`\n  -> Reader SmallEnv MyResult -- This is the type of `inner`\n  -> Reader BigEnv   MyResult -- This is the type of `outer`\n"))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Note the order of the environments! We use a function from a ",(0,r.kt)("inlineCode",{parentName:"p"},"BigEnv")," to a ",(0,r.kt)("inlineCode",{parentName:"p"},"SmallEnv"),",\nto convert a ",(0,r.kt)("inlineCode",{parentName:"p"},"Reader")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"SmallEnv")," to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Reader")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"BigEnv"),"!"),(0,r.kt)("p",null,"This is because we are mapping over the ",(0,r.kt)("em",{parentName:"p"},"input")," of a function rather than the ",(0,r.kt)("em",{parentName:"p"},"output"),",\nand is related to topics like variance and covariance, but isn't terribly important\nfor us at the moment."),(0,r.kt)("h3",{id:"using-env-in-our-logic-code"},"Using ",(0,r.kt)("inlineCode",{parentName:"h3"},"Env")," in our logic code"),(0,r.kt)("p",null,"One thing we haven't talked about yet is using our environment in the ",(0,r.kt)("inlineCode",{parentName:"p"},"convert"),"\nfunction to generate the pages we want. And actually, we don't even have the ability to add\nstylesheets to our HTML EDSL at the moment! We need to go back and extend it. Let's do all\nthat now:"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Since stylesheets go in the ",(0,r.kt)("inlineCode",{parentName:"p"},"head")," element, perhaps it's a good idea to create an additional\n",(0,r.kt)("inlineCode",{parentName:"p"},"newtype")," like ",(0,r.kt)("inlineCode",{parentName:"p"},"Structure")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"head")," information? Things like title, stylesheet,\nand even meta elements can be composed together just like we did for ",(0,r.kt)("inlineCode",{parentName:"p"},"Structure"),"\nto build the ",(0,r.kt)("inlineCode",{parentName:"p"},"head"),"!"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Do it now: extend our HTML library to include headings and add 3 functions:\n",(0,r.kt)("inlineCode",{parentName:"p"},"title_")," for titles, ",(0,r.kt)("inlineCode",{parentName:"p"},"stylesheet_")," for stylesheets, and ",(0,r.kt)("inlineCode",{parentName:"p"},"meta_")," for meta elements\nlike ",(0,r.kt)("a",{parentName:"p",href:"https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards"},"twitter cards"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Solution"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"src/HsBlog/Html.hs"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"-- Html.hs\n\nmodule HsBlog.Html\n  ( Html\n  , Head\n  , title_\n  , stylesheet_\n  , meta_\n  , Structure\n  , html_\n  , p_\n  , h_\n  , ul_\n  , ol_\n  , code_\n , Content\n  , txt_\n  , img_\n  , link_\n  , b_\n  , i_\n  , render\n  )\n  where\n\nimport Prelude hiding (head)\nimport HsBlog.Html.Internal\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"src/HsBlog/Html/Internal.hs"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'newtype Head\n  = Head String\n\n-- * EDSL\n\nhtml_ :: Head -> Structure -> Html\nhtml_ (Head head) content =\n  Html\n    ( el "html"\n      ( el "head" head\n        <> el "body" (getStructureString content)\n      )\n    )\n\n-- * Head\n\ntitle_ :: String -> Head\ntitle_ = Head . el "title" . escape\n\nstylesheet_ :: FilePath -> Head\nstylesheet_ path =\n  Head $ "<link rel=\\"stylesheet\\" type=\\"text/css\\" href=\\"" <> escape path <> "\\">"\n\nmeta_ :: String -> String -> Head\nmeta_ name content =\n  Head $ "<meta name=\\"" <> escape name <> "\\" content=\\"" <> escape content <> "\\">"\n\ninstance Semigroup Head where\n  (<>) (Head h1) (Head h2) =\n    Head (h1 <> h2)\n\ninstance Monoid Head where\n  mempty = Head ""\n'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fix ",(0,r.kt)("inlineCode",{parentName:"p"},"convert")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"buildIndex")," to use the new API. Note: ",(0,r.kt)("inlineCode",{parentName:"p"},"buildIndex")," should return\n",(0,r.kt)("inlineCode",{parentName:"p"},"Reader"),"!"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},' <details><summary>src/HsBlog/Convert.hs</summary>\n\n ```haskell\n import Prelude hiding (head)\n import HsBlog.Env (Env(..))\n\n convert :: Env -> String -> Markup.Document -> Html.Html\n convert env title doc =\n   let\n     head =\n       Html.title_ (eBlogName env <> " - " <> title)\n         <> Html.stylesheet_ (eStylesheetPath env)\n     article =\n       foldMap convertStructure doc\n     websiteTitle =\n       Html.h_ 1 (Html.link_ "index.html" $ Html.txt_ $ eBlogName env)\n     body =\n       websiteTitle <> article\n   in\n     Html.html_ head body\n ```\n\n </details>\n\n <details><summary>src/HsBlog/Directory.hs</summary>\n\n ```haskell\n buildIndex :: [(FilePath, Markup.Document)] -> Reader Env Html.Html\n buildIndex files = do\n   env <- ask\n   let\n     previews =\n       map\n         ( \\(file, doc) ->\n           case doc of\n             Markup.Head 1 head : article ->\n               Html.h_ 3 (Html.link_ file (Html.txt_ head))\n                 <> foldMap convertStructure (take 2 article)\n                 <> Html.p_ (Html.link_ file (Html.txt_ "..."))\n             _ ->\n               Html.h_ 3 (Html.link_ file (Html.txt_ file))\n         )\n         files\n   pure $ Html.html_\n       ( Html.title_ (eBlogName env)\n         <> Html.stylesheet_ (eStylesheetPath env)\n       )\n       ( Html.h_ 1 (Html.link_ "index.html" (Html.txt_ "Blog"))\n         <> Html.h_ 2 (Html.txt_ "Posts")\n         <> mconcat previews\n       )\n ```\n\n </details>\n'))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Create a command-line parser for ",(0,r.kt)("inlineCode",{parentName:"li"},"Env"),", attach it to the ",(0,r.kt)("inlineCode",{parentName:"li"},"convert-dir")," command,\nand pass the result it to the ",(0,r.kt)("inlineCode",{parentName:"li"},"convertDirectory")," function.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Solution"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"src/HsBlog.hs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"import HsBlog.Env (defaultEnv)\n\nconvertSingle :: String -> Handle -> Handle -> IO ()\n\nprocess :: String -> String -> String\nprocess title = Html.render . convert defaultEnv title . Markup.parse\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"app/OptParse.hs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'import HsBlog.Env\n\n------------------------------------------------\n-- * Our command-line options model\n\n-- | Model\ndata Options\n = ConvertSingle SingleInput SingleOutput\n | ConvertDir FilePath FilePath Env\n deriving Show\n\n------------------------------------------------\n-- * Directory conversion parser\n\npConvertDir :: Parser Options\npConvertDir =\n ConvertDir <$> pInputDir <*> pOutputDir <*> pEnv\n\n-- | Parser for blog environment\npEnv :: Parser Env\npEnv =\n Env <$> pBlogName <*> pStylesheet\n\n-- | Blog name parser\npBlogName :: Parser String\npBlogName =\n strOption\n   ( long "name"\n     <> short \'N\'\n     <> metavar "STRING"\n     <> help "Blog name"\n     <> value (eBlogName defaultEnv)\n     <> showDefault\n   )\n\n-- | Stylesheet parser\npStylesheet :: Parser String\npStylesheet =\n strOption\n   ( long "style"\n     <> short \'S\'\n     <> metavar "FILE"\n     <> help "Stylesheet filename"\n     <> value (eStylesheetPath defaultEnv)\n     <> showDefault\n   )\n\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"app/Main.hs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"main :: IO ()\nmain = do\n options <- parse\n case options of\n   ConvertDir input output env ->\n     HsBlog.convertDirectory env input output\n\n   ...\n")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Which version do you like better? Manually passing arguments, or using ",(0,r.kt)("inlineCode",{parentName:"p"},"Reader"),"?"),(0,r.kt)("p",null,"To me, it is not clear that the second version with ",(0,r.kt)("inlineCode",{parentName:"p"},"Reader")," is better than the first\nwith explicit argument passing in our particular case."),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"Reader")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ReaderT")," makes our code a little less friendly toward beginners\nthat are not yet familiar with these concepts and techniques, and we don't see\n(in this case) much benefit."),(0,r.kt)("p",null,"As programs grow larger, techniques like using ",(0,r.kt)("inlineCode",{parentName:"p"},"Reader")," become more attractive to use.\nFor our relatively small example, using ",(0,r.kt)("inlineCode",{parentName:"p"},"Reader")," might not be appropriate.\nI've included it in this book because it is an important technique to have in our\narsenal and I wanted to demonstrate it."),(0,r.kt)("p",null,"It is important to weigh the benefits and costs of using advanced techniques,\nand it's often better to try and get away with simpler techniques if we can."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can view the git commit of\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/soupi/learn-haskell-blog-generator/commit/f9fe7179fcf0e6c818f6caa860b52e991432dab2"},"the changes we've made"),"\nand the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/soupi/learn-haskell-blog-generator/tree/f9fe7179fcf0e6c818f6caa860b52e991432dab2"},"code up until now"),".")))}u.isMDXComponent=!0}}]);