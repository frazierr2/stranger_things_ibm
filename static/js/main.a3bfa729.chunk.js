(this.webpackJsonpstranger_things_ibm=this.webpackJsonpstranger_things_ibm||[]).push([[0],{101:function(e,a,t){},105:function(e,a,t){},106:function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"updateLanguage",(function(){return B}));var r=t(0),i=t.n(r),s=t(13),o=t.n(s),l=(t(72),t(14)),y=t(15),c=t(20),h=t(16),g=t(19),m=(t(73),t(24)),u={color:"#bdbdbd"},p=function(){return i.a.createElement(m.a,{defaultActiveKey:"/home",as:"ul"},i.a.createElement(m.a.Item,{as:"li"},i.a.createElement(m.a.Link,{style:u,href:"#inspiration-container"},"Inspiration")),i.a.createElement(m.a.Item,{as:"li"},i.a.createElement(m.a.Link,{style:u,href:"#gallery-container",eventKey:"link-1"},"Gallery")),i.a.createElement(m.a.Item,{as:"li"},i.a.createElement(m.a.Link,{style:u,href:"#episodes-container",eventKey:"link-2"},"Episodes")))},d=t(18),f=t(8),w=t(9),E=t(57),b=t(27),v=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(y.a)(a,[{key:"render",value:function(){var e=this.props,a=e.language,t=e.languageObject;return i.a.createElement(d.a,{fluid:!0,id:"header-container"},i.a.createElement(f.a,{id:"company-language-row"},i.a.createElement(w.a,{id:"company-title"},"Flix by IBM - An RTP Original"),i.a.createElement(w.a,{id:"language-container"},i.a.createElement(E.a,{id:"language-button",title:a},i.a.createElement(b.a.Item,{as:"button",onClick:this.props.updateLanguage.bind(null,"English")},"English"),i.a.createElement(b.a.Item,{as:"button",onClick:this.props.updateLanguage.bind(null,"Pig Latin")},"Pig Latin")))),i.a.createElement(f.a,{className:"justify-content-end navbar-row"},i.a.createElement(p,null)),i.a.createElement(f.a,{id:"show-title",className:"justify-content-center"},i.a.createElement("h1",null,t.heading)))}}]),a}(r.Component),_=t(23),k=t(37),O=(t(93),t(62)),T=t(63),j={margin:"0"},C=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(y.a)(a,[{key:"render",value:function(){var e=this.props.languageObject;return i.a.createElement(d.a,{id:"inspiration-container",fluid:!0},i.a.createElement("h2",null,"Inspiration"),i.a.createElement(f.a,{style:j},i.a.createElement(w.a,{md:4,id:"logo-container"},i.a.createElement(f.a,{style:j},i.a.createElement(O.a,{src:"./assets/stanger-things_raw.png",fluid:!0})),i.a.createElement(f.a,{className:"description-text",style:j},i.a.createElement("p",null,e.description))),i.a.createElement(w.a,{md:8,id:"description-container"},i.a.createElement(f.a,{style:j},i.a.createElement("p",null,e.snippets)),i.a.createElement(f.a,{style:j},i.a.createElement("div",{style:{width:550,height:"auto",margin:"auto",marginTop:"20px"}},i.a.createElement(T.a,{aspectRatio:"16by9"},i.a.createElement("embed",{type:"image/svg+xml",src:e["video-embed"]})))))))}}]),a}(r.Component),S=(t(94),t(38)),L={margin:"0"},D=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(y.a)(a,[{key:"render",value:function(){var e=this.props.languageObject;return i.a.createElement(d.a,{id:"gallery-container",fluid:!0},i.a.createElement("h2",null,"Gallery"),i.a.createElement(f.a,{style:L},i.a.createElement(w.a,{md:8},i.a.createElement(S.a,null,e.gallery.map((function(e,a){return i.a.createElement(S.a.Item,{key:a},i.a.createElement("img",{className:"d-block w-100",src:e.src,alt:" Stranger Things - ".concat(a),height:350}),i.a.createElement(S.a.Caption,null,i.a.createElement("p",null,e.text)))})))),i.a.createElement(w.a,{md:4,className:"location-column"},i.a.createElement("h4",null,"Locations:"),i.a.createElement("ul",null,e.locations.map((function(e,a){return i.a.createElement("li",{key:a},i.a.createElement("h5",null,e))}))))))}}]),a}(r.Component),x=t(34),I=(t(101),t(50)),N=t(52),M=t(36),A={margin:"0"},R=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(h.a)(a).call(this,e))).sortByRating=t.sortByRating.bind(Object(x.a)(t)),t.state={ratingsList:[]},t}return Object(g.a)(a,e),Object(y.a)(a,[{key:"sortByRating",value:function(e){var a=this.props.languageObject["episode-list"].reverse();this.setState({ratingsList:a.sort((function(e,a){return e.rating>a.rating}))})}},{key:"render",value:function(){var e=this.props.languageObject;return i.a.createElement(d.a,{id:"episodes-container",fluid:!0},i.a.createElement("h2",null,"Episodes",i.a.createElement(M.a,{variant:"outline-secondary",onClick:this.sortByRating},"Sort by rating")),i.a.createElement(f.a,{style:A},i.a.createElement(w.a,null,i.a.createElement("h5",null,"Season 1:"),i.a.createElement("ul",null,e["episode-list"].map((function(e,a){if(1===e.season)return i.a.createElement("li",{key:a},i.a.createElement(f.a,null,i.a.createElement(w.a,null,i.a.createElement("h5",null,e.name)),i.a.createElement(w.a,{className:"ratings"},e.rating,i.a.createElement(I.a,{icon:N.a}))))})))),i.a.createElement(w.a,null,i.a.createElement("h5",null,"Season 2:"),i.a.createElement("ul",null,e["episode-list"].map((function(e,a){if(2===e.season)return i.a.createElement("li",{key:a},i.a.createElement(f.a,null,i.a.createElement(w.a,null,i.a.createElement("h5",null,e.name)),i.a.createElement(w.a,{className:"ratings"},e.rating,i.a.createElement(I.a,{icon:N.a}))))}))))))}}]),a}(r.Component),P=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(y.a)(a,[{key:"render",value:function(){return i.a.createElement(d.a,{fluid:!0,id:"Test"},i.a.cloneElement(this.props.children,this.props),i.a.createElement(C,this.props),i.a.createElement(D,this.props),i.a.createElement(R,this.props))}}]),a}(r.Component);t(105);function B(e){return{type:"UPDATE_LANGUAGE",newLanguage:e}}var F=Object(k.b)((function(e){var a;return a="English"===e.language?e.english:e.pigLatin,{language:e.language,languageObject:a}}),(function(e){return Object(_.a)(n,e)}))(P);var G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"UPDATE_LANGUAGE":return a.newLanguage;default:return e}};var U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"UPDATE_ENGLISH":return a.index;default:return e}};var H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"UPDATE_PIGLATIN":return a;default:return e}},J=Object(_.b)({language:G,english:U,pigLatin:H}),K={language:"English",english:t(65),pigLatin:t(66)},W=Object(_.c)(J,K,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(i.a.createElement(k.a,{store:W},i.a.createElement(F,null,i.a.createElement(v,null))),document.getElementById("root"))},65:function(e){e.exports=JSON.parse('{"heading":"Stranger Things in RTP","description":"The Duffer Brothers, born and raised in Durham, drop quite a few Durham-area references in the Emmy-winning hit sci-fi series \'Stranger Things\' that they write, direct and produce.","snippets":["It\'s where Cornwallis and Kerley meet. - Hopper","Described as \'A love letter to the \u201980s classics that captivated a generation,\' \\"Stranger Things\\" is set in 1983 in Indiana, \\"where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.\\"","Despite the fact that none of the series was filmed in Durham or North Carolina (it was filmed in Georgia), a ton of references to the region are hidden in the show."],"locations":["Kerley Road, Durham","Loch Ora","Eno River","Forest Hills Park","Jordan Lake"],"video-embed":"https://www.newsobserver.com/news/local/article182498126.html/video-embed","quote":{"text":"We have Mirkwood which is, of course, at the intersection of Cornwallis and Kerley, which is really close to where we grew up","author":"Matt Duffer"},"gallery":[{"src":"https://vignette.wikia.nocookie.net/strangerthings8338/images/6/6b/The_Vanishing_of_Will_Byers_S01-E01_SS_005.png/revision/latest/scale-to-width-down/620","text":"Intersection of Cornwallis and Kerley"},{"src":"https://www.newsobserver.com/news/local/rjhbpb/picture182497786/alternates/FREE_768/IMG_DISPLAY-ST_201-202_U_2_1_C9CM2NMI_L350297312","text":"Trick-or-treating on Loch Nora"},{"src":"https://nationalpostcom.files.wordpress.com/2017/11/st5.jpg?quality=80&strip=all&w=780&zoom=1","reference":"https://nationalpost.com/entertainment/television/inside-the-upside-down-the-life-of-will-byers-continues-to-spiral-in-episode-5-of-stranger-things-2","text":"Drawings on the wall between Eno river and Jordan Lake"},{"src":"https://vignette.wikia.nocookie.net/strangerthings8338/images/1/1d/ST-Hawkins-Map.png","text":"Map of Hawkins"}],"episode-list":[{"season":2,"name":"Chapter Nine: The Gate","rating":9.4},{"season":2,"name":"Chapter Eight: The Mind Flayer","rating":9.3},{"season":1,"name":"Chapter Eight: The Upside Down","rating":9.3},{"season":2,"name":"Chapter Six: The Spy","rating":9.2},{"season":1,"name":"Chapter Seven: The Bathtub","rating":9.1},{"season":2,"name":"Chapter Five: Dig Dug","rating":8.9},{"season":1,"name":"Chapter Three: Holly, Jolly","rating":8.9},{"season":1,"name":"Chapter Four: The Body","rating":8.9},{"season":1,"name":"Chapter Six: The Monster","rating":8.8},{"season":2,"name":"Chapter Four: Will the Wise","rating":8.7},{"season":2,"name":"Chapter Three: The Pollywog","rating":8.7},{"season":1,"name":"Chapter Five: The Flea and the Acrobat","rating":8.7},{"season":1,"name":"Chapter One: The Vanishing of Will Byers","rating":8.6},{"season":2,"name":"Chapter Two: Trick or Treat, Freak","rating":8.5},{"season":1,"name":"Chapter Two: The Weirdo on Maple Street","rating":8.5},{"season":2,"name":"Chapter One: MADMAX","rating":8.4},{"season":2,"name":"Chapter Seven: The Lost Sister","rating":6.1}]}')},66:function(e){e.exports=JSON.parse('{"heading":"angerStray ingsThay inyay RTP","description":"ethay Duffer othersbray , ornbay andyay aisedray inyay Durham , opdray uiteqay ayay ewfay urham-areaday eferencesray inyay ethay emmy-winningyay ithay i-fiscay eriessay \'angerstray ings\'thay atthay eythay itewray , irectday andyay oducepray .","snippets":["it\'syay erewhay ornwalliscay andyay erleykay eetmay .  - Hopper","escribedday asyay \'a ovelay etterlay otay ethay \u201980s assicsclay atthay aptivatedcay ayay enerationgay , \' \\"stranger things\\" isyay etsay inyay 1983 inyay indianayay , \\"where ayay oungyay oybay anishesvay intoyay inthay airyay . asyay iendsfray , amilyfay andyay ocallay olicepay earchsay orfay answersyay , eythay areyay awndray intoyay anyay extraordinaryyay erymystay involvingyay op-secrettay overnmentgay experimentsyay , errifyingtay upernaturalsay orcesfay andyay oneyay eryvay angestray ittlelay irlgay . \\"","espiteday ethay actfay atthay onenay ofyay ethay eriessay asway ilmedfay inyay Durham oryay orthnay arolinacay (it asway ilmedfay inyay georgia) , ayay ontay ofyay eferencesray otay ethay egionray areyay iddenhay inyay ethay owshay ."],"locations":["Kerley Road, Durham","Loch Ora","Eno River","Forest Hills Park","Jordan Lake"],"video-embed":"https://www.newsobserver.com/news/local/article182498126.html/video-embed","quote":{"text":"eway avehay Mirkwood ichwhay isyay , ofyay oursecay , atyay ethay intersectionyay ofyay ornwalliscay andyay erleykay , ichwhay isyay eallyray oseclay otay erewhay eway ewgray upyay","author":"Matt Duffer"},"gallery":[{"src":"https://vignette.wikia.nocookie.net/strangerthings8338/images/6/6b/The_Vanishing_of_Will_Byers_S01-E01_SS_005.png/revision/latest/scale-to-width-down/620","text":"intersectionyay ofyay Cornwallis andyay Kerley"},{"src":"https://www.newsobserver.com/news/local/rjhbpb/picture182497786/alternates/FREE_768/IMG_DISPLAY-ST_201-202_U_2_1_C9CM2NMI_L350297312","text":"ick-or-treatingtray onyay Loch Nora"},{"src":"https://nationalpostcom.files.wordpress.com/2017/11/st5.jpg?quality=80&strip=all&w=780&zoom=1","reference":"https://nationalpost.com/entertainment/television/inside-the-upside-down-the-life-of-will-byers-continues-to-spiral-in-episode-5-of-stranger-things-2","text":"awingsdray onyay ethay allway etweenbay Eno iverray andyay Jordan akelay"},{"src":"https://vignette.wikia.nocookie.net/strangerthings8338/images/1/1d/ST-Hawkins-Map.png","text":"apmay ofyay Hawkins"}],"episode-list":[{"season":2,"name":"apterchay nine: ethay ategay","rating":9.4},{"season":2,"name":"apterchay eight: ethay indmay ayerflay","rating":9.3},{"season":1,"name":"apterchay eight: ethay upsideyay ownday","rating":9.3},{"season":2,"name":"apterchay six: ethay yspay","rating":9.2},{"season":1,"name":"apterchay seven: ethay athtubbay","rating":9.1},{"season":2,"name":"apterchay five: igday ugday","rating":8.9},{"season":1,"name":"apterchay three: ollyhay , ollyjay","rating":8.9},{"season":1,"name":"apterchay four: ethay odybay","rating":8.9},{"season":1,"name":"apterchay six: ethay onstermay","rating":8.8},{"season":2,"name":"apterchay four: Will ethay iseway","rating":8.7},{"season":2,"name":"apterchay three: ethay ollywogpay","rating":8.7},{"season":1,"name":"apterchay five: ethay eaflay andyay ethay acrobatyay","rating":8.7},{"season":1,"name":"apterchay one: ethay anishingvay ofyay Will Byers","rating":8.6},{"season":2,"name":"apterchay two: icktray oryay eattray , eakfray","rating":8.5},{"season":1,"name":"apterchay two: ethay eirdoway onyay aplemay eetstray","rating":8.5},{"season":2,"name":"apterchay one: MADMAX","rating":8.4},{"season":2,"name":"apterchay seven: ethay ostlay istersay","rating":6.1}]}')},67:function(e,a,t){e.exports=t(106)},73:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){}},[[67,1,2]]]);
//# sourceMappingURL=main.a3bfa729.chunk.js.map