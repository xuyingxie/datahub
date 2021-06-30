(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1667],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(g,a(a({ref:t},d),{},{components:n})):o.createElement(g,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3084:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var o=n(2122),r=n(9756),i=(n(7294),n(4137)),a=["components"],l={title:"Using Docker Images During Development",sidebar_label:"Using Docker Images During Development",slug:"/docker/development",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/docker/development.md"},s="Using Docker Images During Development",c={unversionedId:"docs/docker/development",id:"docs/docker/development",isDocsHomePage:!1,title:"Using Docker Images During Development",description:"We've created a special docker-compose.dev.yml override file that should configure docker images to be easier to use",source:"@site/genDocs/docs/docker/development.md",sourceDirName:"docs/docker",slug:"/docker/development",permalink:"/docs/docker/development",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/docker/development.md",version:"current",frontMatter:{title:"Using Docker Images During Development",sidebar_label:"Using Docker Images During Development",slug:"/docker/development",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/docker/development.md"},sidebar:"overviewSidebar",previous:{title:"Developer's Guide",permalink:"/docs/developers"},next:{title:"Adding a Metadata Ingestion Source",permalink:"/docs/metadata-ingestion/adding-source"}},d=[{value:"Debugging",id:"debugging",children:[]},{value:"Tips for People New To Docker",id:"tips-for-people-new-to-docker",children:[]},{value:"Accessing Logs",id:"accessing-logs",children:[{value:"Conflicting containers",id:"conflicting-containers",children:[]},{value:"Running a specific service",id:"running-a-specific-service",children:[]}]}],u={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-docker-images-during-development"},"Using Docker Images During Development"),(0,i.kt)("p",null,"We've created a special ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.dev.yml")," override file that should configure docker images to be easier to use\nduring development."),(0,i.kt)("p",null,"Normally, you'd rebuild your images from scratch with ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose build")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose up --build"),"). However,\nthis takes way too long for development. It has to copy the entire repo to each image and rebuild it there."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.dev.yml")," file bypasses this problem by mounting binaries, startup scripts, and other data to\nspecial, slimmed down images (of which the Dockerfile is usually defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"<service>/debug/Dockerfile"),"). "),(0,i.kt)("p",null,"These dev images will use your ",(0,i.kt)("em",{parentName:"p"},"locally built code"),", so you'll need to build locally with gradle first\n(and every time you want to update the instance). Building locally should be much faster than building on Docker."),(0,i.kt)("p",null,"We highly recommend you just invoke the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker/dev.sh")," script we've included. It is pretty small if you want to read it\nto see what it does, but it ends up using our ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.dev.yml")," file."),(0,i.kt)("h2",{id:"debugging"},"Debugging"),(0,i.kt)("p",null,"The default dev images, while set up to use your local code, do not enable debugging by default. To enable debugging,\nyou need to make two small edits (don't check these changes in!)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add the JVM debug flags to the environment file for the service."),(0,i.kt)("li",{parentName:"ul"},"Assign the port in the docker-compose file.")),(0,i.kt)("p",null,"For example, to debug ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub-gms"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Add this line to docker/datahub-gms/env/docker.env. You can change the port and/or change suspend=n to y.\nJAVA_TOOL_OPTIONS=-agentlib:jdwp=transport=dt_socket,address=5005,server=y,suspend=n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'# Change the definition in docker/docker-compose.dev.yml to this\n  datahub-gms:\n    image: linkedin/datahub-gms:debug\n    build:\n      context: datahub-gms/debug\n      dockerfile: Dockerfile\n    ports:             # <--- Add this line\n      - "5005:5005"    # <--- And this line. Must match port from environment file.\n    volumes:\n      - ./datahub-gms/start.sh:/datahub/datahub-gms/scripts/start.sh\n      - ../gms/war/build/libs/:/datahub/datahub-gms/bin\n')),(0,i.kt)("h2",{id:"tips-for-people-new-to-docker"},"Tips for People New To Docker"),(0,i.kt)("h2",{id:"accessing-logs"},"Accessing Logs"),(0,i.kt)("p",null,"It is highly recommended you use ",(0,i.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"Docker Desktop's dashboard")," to access service logs. If you double click an image it will pull up the logs for you."),(0,i.kt)("h3",{id:"conflicting-containers"},"Conflicting containers"),(0,i.kt)("p",null,"If you ran ",(0,i.kt)("inlineCode",{parentName:"p"},"docker/quickstart.sh")," before, your machine may already have a container for DataHub. If you want to run\n",(0,i.kt)("inlineCode",{parentName:"p"},"docker/dev.sh")," instead, ensure that the old container is removed by running ",(0,i.kt)("inlineCode",{parentName:"p"},"docker container prune"),". The opposite also\napplies."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note this only removes containers, not images. Should still be fast to switch between these once you've launched both\nat least once.")),(0,i.kt)("h3",{id:"running-a-specific-service"},"Running a specific service"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose up")," will launch all services in the configuration, including dependencies, unless they're already\nrunning. If you, for some reason, wish to change this behavior, check out these example commands."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker-compose -p datahub -f docker-compose.yml -f docker-compose.override.yml -f docker-compose.dev.yml up datahub-gms\n")),(0,i.kt)("p",null,"Will only start ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub-gms")," and its dependencies."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker-compose -p datahub -f docker-compose.yml -f docker-compose.override.yml -f docker-compose.dev.yml up --no-deps datahub-gms\n")),(0,i.kt)("p",null,"Will only start ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub-gms"),", without dependencies."))}p.isMDXComponent=!0}}]);