(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{183:function(t,e,r){var content=r(199);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("1c93b39a",content,!0,{sourceMap:!1})},184:function(t,e,r){var content=r(201);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("7cc6941b",content,!0,{sourceMap:!1})},185:function(t,e,r){var content=r(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("1efbdd97",content,!0,{sourceMap:!1})},186:function(t,e,r){var content=r(205);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("69992b32",content,!0,{sourceMap:!1})},198:function(t,e,r){"use strict";var o=r(183);r.n(o).a},199:function(t,e,r){(t.exports=r(52)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""])},200:function(t,e,r){"use strict";var o=r(184);r.n(o).a},201:function(t,e,r){(t.exports=r(52)(!1)).push([t.i,'.card{min-height:100%;background-size:content;cursor:pointer;grid-column:span 2;transition:.1s cubic-bezier(1,.02,0,.98)}.card,.card a{text-align:center;vertical-align:middle;position:relative}.card a{font-size:1.5rem;text-transform:capitalize;top:50%;transition:.25s cubic-bezier(1,.02,0,.98);z-index:2;color:#fff;opacity:1;display:inline-block}.card figure,.card figure img{position:absolute;top:0;left:0;height:100%;width:100%}.card figure img{-o-object-fit:cover;object-fit:cover;-o-object-position:center center;-o-object-position:var(--object-position,center center);object-position:center center;object-position:var(--object-position,center center);font-family:"object-fit: cover;";vertical-align:middle;max-width:100%;z-index:1}.open{grid-column:span var(--card-wide-width)}.open a{-webkit-transform:rotate(0deg);transform:rotate(0deg)}.close{grid-column:span 1}',""])},202:function(t,e,r){"use strict";var o=r(185);r.n(o).a},203:function(t,e,r){(t.exports=r(52)(!1)).push([t.i,".cards{text-align:center;height:100vh;overflow:hidden;display:grid;width:100%;grid-template-columns:repeat(var(--card-amount-double),1fr)}",""])},204:function(t,e,r){"use strict";var o=r(186);r.n(o).a},205:function(t,e,r){(t.exports=r(52)(!1)).push([t.i,".container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""])},215:function(t,e,r){"use strict";r.r(e);r(198);var o=r(14),n=(Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null).exports,r(180)),l=r.n(n),c={props:{name:{default:"",type:String,required:!1},image:{default:"",type:String,required:!1}},methods:{toggleOpen:function(t){var element=t.target.parentElement,e=document.querySelectorAll(".card");l.a.forEach(e,function(t){t!==element&&t.classList.toggle("close")}),element.classList.toggle("open")}}},d=(r(200),{components:{Card:Object(o.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"card"},[r("a",{domProps:{textContent:t._s(t.name)},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.toggleOpen(e)}}}),t._v(" "),r("figure",[r("img",{attrs:{src:t.image,alt:""}})])])},[],!1,null,null,null).exports},data:function(){return{cards:[{name:"Nature",image:"https://source.unsplash.com/1600x900/?nature"},{name:"Water",image:"https://source.unsplash.com/1600x900/?water"},{name:"technology",image:"https://source.unsplash.com/1600x900/?technology"},{name:"Trains",image:"https://source.unsplash.com/1600x900/?train"}]}},computed:{cardWidths:function(){return{"--card-width":100/this.cards.length+"%","--card-amount":this.cards.length,"--card-amount-double":2*this.cards.length,"--card-wide-width":2*this.cards.length-(this.cards.length-1)}}}}),f=(r(202),{components:{CardList:Object(o.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"cards",style:this.cardWidths},this._l(this.cards,function(t,r){return e("card",{key:t.name+"_"+r,attrs:{name:t.name,image:t.image}})}),1)},[],!1,null,null,null).exports},head:function(){return{link:[{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.8.2/css/fontawesome.css",integrity:"sha384-sri+NftO+0hcisDKgr287Y/1LVnInHJ1l+XC7+FOabmTTIK0HnE2ID+xxvJ21c5J",crossorigin:"anonymous"}]}}}),h=(r(204),Object(o.a)(f,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("section",{staticClass:"container"},[e("card-list")],1)])},[],!1,null,null,null));e.default=h.exports}}]);