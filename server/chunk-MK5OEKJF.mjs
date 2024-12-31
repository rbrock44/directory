import './polyfills.server.mjs';
import{A as O,B as P,C as S,D as w,E as A,H as I,L as E,O as G,a as f,b as h,c as u,d as v,e as r,f as l,g as m,h as a,i as s,j as b,k as x,l as k,m as d,n as _,o as p,p as g,q as C,v as y,y as M}from"./chunk-DQNG5XR5.mjs";function H(e,n){e&1&&(a(0,"p",8),p(1,"Here are some links to my other websites and applications. Click on any of them to explore!"),s())}function U(e,n){if(e&1&&(a(0,"p",8),p(1),s()),e&2){let i=d().$implicit;r(),g(i.description)}}function j(e,n){if(e&1){let i=x();a(0,"li",9),k("click",function(t){let c=h(i).index,z=d();return u(z.toggleDescription(c,t))}),a(1,"a",10),p(2),s(),l(3,U,2,1,"p",4),s()}if(e&2){let i=n.$implicit,o=n.index,t=d();r(),_("href",i.link,v),r(),g(i.name),r(),m("ngIf",t.selectedApp===o&&i.description!="")}}var R=(()=>{let n=class n{constructor(){this.title="directory",this.baseGithub="https://rbrock44.github.io/",this.selectedApp=void 0,this.applications=[{name:"Home Page",link:`${this.baseGithub}home-page/`,description:"Quick access to information Ryan wants"},{name:"Drive Status",link:`${this.baseGithub}drive-status/`,description:"Quick access to drive connection statuses"},{name:"Family Recipes",link:`${this.baseGithub}family-recipes/`,description:"Quick access to the family's recipes"},{name:"Cleaning Schedule",link:`${this.baseGithub}cleaning-schedule/`,description:"Used to help keep track of people's cleaning schedule"},{name:"Scorekeeping By Rounds",link:`${this.baseGithub}scorekeeping-by-rounds/`,description:"Helps manage a game where teams/players keep score over multiple rounds"},{name:"1705 David",link:`${this.baseGithub}1705-David/`,description:"A place to showcase the first rent house"},{name:"Auction Advisor",link:`${this.baseGithub}auction-advisor/`,description:"Helps manage an in person silent auction"},{name:"Email Link Generator",link:`${this.baseGithub}email-link-generator/`,description:"Helps create email links with correct fields"}]}toggleDescription(o,t){t.target.tagName!=="A"&&(this.selectedApp===o?this.selectedApp=void 0:this.selectedApp=o)}};n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=f({type:n,selectors:[["app-root"]],standalone:!0,features:[C],decls:10,vars:2,consts:[[1,"main"],[1,"content"],[1,"container"],[1,"title"],["class","description",4,"ngIf"],[1,"links-section"],[1,"list-group"],["class","list-group-item",3,"click",4,"ngFor","ngForOf"],[1,"description"],[1,"list-group-item",3,"click"],["target","_blank",3,"href"]],template:function(t,c){t&1&&(a(0,"main",0)(1,"div",1)(2,"div",2)(3,"h1",3),p(4,"Ryan's Website Directory"),s(),l(5,H,2,0,"p",4),a(6,"div",5)(7,"ul",6),l(8,j,4,3,"li",7),s()()()()(),b(9,"router-outlet")),t&2&&(r(5),m("ngIf",!1),r(3),m("ngForOf",c.applications))},dependencies:[S,O,P,E],styles:[".container[_ngcontent-%COMP%]{max-width:400px;margin:0 auto;padding:20px;background-color:#f9f9f9;border-radius:10px;box-shadow:0 4px 12px #0000001a}.title[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:2.5rem;text-align:center;color:#333;margin-bottom:20px}.links-section[_ngcontent-%COMP%]{margin-top:30px}.list-group[_ngcontent-%COMP%]{list-style-type:none;padding:0}.list-group-item[_ngcontent-%COMP%]{margin-bottom:15px;font-size:1.2rem;padding:10px;background-color:#fff;border-radius:8px;transition:background-color .3s ease;box-shadow:0 2px 8px #0000001a}.list-group-item[_ngcontent-%COMP%]:hover{background-color:#e0e0e0}.list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#007bff;font-weight:700}.list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#0056b3}",`[_nghost-%COMP%] {
    --bright-blue: oklch(51.01% 0.274 263.83);
    --electric-violet: oklch(53.18% 0.28 296.97);
    --french-violet: oklch(47.66% 0.246 305.88);
    --vivid-pink: oklch(69.02% 0.277 332.77);
    --hot-red: oklch(61.42% 0.238 15.34);
    --orange-red: oklch(63.32% 0.24 31.68);

    --gray-900: oklch(19.37% 0.006 300.98);
    --gray-700: oklch(36.98% 0.014 302.71);
    --gray-400: oklch(70.9% 0.015 304.04);

    --red-to-pink-to-purple-vertical-gradient: linear-gradient(
      180deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --red-to-pink-to-purple-horizontal-gradient: linear-gradient(
      90deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --pill-accent: var(--bright-blue);

    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1[_ngcontent-%COMP%] {
    font-size: 3.125rem;
    color: var(--gray-900);
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.125rem;
    margin: 0;
    font-family: "Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }

  p[_ngcontent-%COMP%] {
    margin: 0;
    color: var(--gray-700);
  }

  main[_ngcontent-%COMP%] {
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-sizing: inherit;
    position: relative;
  }

  .content[_ngcontent-%COMP%] {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 700px;
    margin-bottom: 3rem;
  }

  .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
    margin-top: 1.75rem;
  }

  .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    margin-top: 1.5rem;
  }

  @media screen and (max-width: 650px) {
    .content[_ngcontent-%COMP%] {
      flex-direction: column;
      width: max-content;
    }
  }`]});let e=n;return e})();var $=[];var D={providers:[y({eventCoalescing:!0}),G($),A()]};var T={providers:[I()]},F=M(D,T);var B=()=>w(R,F),se=B;export{se as a};
