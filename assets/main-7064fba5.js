import{G as f,j as e,B as b,a as N,R as j,r as n,F as y,b as q,c as _,M as w,S,N as D,d as k,e as T}from"./NewNavbar-fd5e458e.js";function L(i){return f({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M96.9 270.3V363c0 2.9 1.5 5.5 4 7l132 75.9c5.3 3.1 12-.8 12-7v-93.8c0-2.9-1.5-5.5-4-7l-132-74.9c-5.4-2.9-12 1-12 7.1zM280.9 445.9L413 370c2.5-1.4 4-4.1 4-7v-93.7c0-6.2-6.6-10-12-7l-132 75.9c-2.5 1.4-4 4.1-4 7V439c-.1 6.1 6.6 10 11.9 6.9z"}},{tag:"path",attr:{d:"M249 65.1L37 188.9c-5.4 3.1-5.4 10.8 0 13.9l212 117.8c4.9 2.8 11 2.8 15.9 0L453 212.9c5.3-3.1 7 .8 7 7v153.4c0 6.8 3.9 10 11 10 4.4 0 10-3.2 10-10V201.5c0-2.9-1.5-5.5-4-7L264.9 65.1c-4.9-2.8-11-2.8-15.9 0z"}}]})(i)}function $(i){return f({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M3 12h4.5l1.5 -6l4 12l2 -9l1.5 3h4.5"}}]})(i)}const I=({title:i,des:o,logoKey:c,hrefbtn:d})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"vlog",children:[e.jsxs("div",{className:"logo-content",children:[e.jsxs("div",{className:"vlog-logo",children:[e.jsx(b,{className:c==0?"vlog-icon show":"hidden"}),e.jsx(L,{className:c==1?"vlog-icon show":"hidden"}),e.jsx(N,{className:c==2?"vlog-icon show":"hidden"}),e.jsx($,{className:c==3?"vlog-icon show":"hidden"})]}),e.jsx("div",{className:"title",children:e.jsx("h2",{children:i})})]}),e.jsxs("div",{className:"vlog-content",children:[e.jsx("p",{className:"description",children:o}),e.jsx("a",{href:d,children:e.jsx("button",{className:"button",children:"View More"})})]})]})}),A=({data:i})=>e.jsx("div",{className:"main-body",children:e.jsx("div",{className:"vlog-container",children:e.jsx("div",{className:"vlog-wrapper",children:i.map((o,c)=>e.jsx(I,{title:o.title,des:o.description,logoKey:o.key,hrefbtn:o.hrefbtn},c))})})});const C=()=>e.jsx(e.Fragment,{children:e.jsx("section",{className:"alumni-info",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row1",children:e.jsx("div",{className:"testimonial_heading",children:" What our Toppers say "})})})})}),E="_para_50s4q_47",B="_subText_50s4q_52",F="_myDot_50s4q_58",M="_image_50s4q_87",R="_subDeg_50s4q_97",s={"section-three-main-div":"_section-three-main-div_50s4q_1","quotes-img-right":"_quotes-img-right_50s4q_10","quotes-img-left":"_quotes-img-left_50s4q_17","section-three-sub-div-one":"_section-three-sub-div-one_50s4q_23","main-quotes-div":"_main-quotes-div_50s4q_31","quotes-img":"_quotes-img_50s4q_10",para:E,subText:B,myDot:F,"myDot--active":"_myDot--active_50s4q_69","not-visible":"_not-visible_50s4q_73",image:M,subDeg:R},V="/testvite/assets/khushi-69ed1787.jpg",z="/testvite/assets/preity-3e25df52.jpg",P="/testvite/assets/ayush-b012f7e5.jpg",W="/testvite/assets/aryan-2fbafcc8.jpg",K="/testvite/assets/anjali-5a103dcb.jpg",O="/testvite/assets/pawan-d1e1082a.jpg",Q=[V,z,P,W,K,O],H=5e3,U=i=>{const{testimonialData:o}=i,c=n.useRef(null),d=n.useRef(null),g=n.useRef(null),[l,u]=n.useState(100),[m,v]=n.useState(0);n.useEffect(()=>u(H),[]),n.useEffect(()=>(g.current=setTimeout(()=>v(t=>t===i.testimonialData.length-1?0:t+1),l),()=>clearTimeout(g.current)),[i.testimonialData.length,m,l]);const p=t=>{if(d.current!==null&&m===t){const a=[...c.current.children];return a.forEach((x,h)=>{document.querySelector(`.feedbackText--${h}`)&&document.querySelector(`.feedbackText--${h}`).classList.add(s["not-visible"])}),a[m+1].classList.remove(s["not-visible"]),s["myDot--active"]}},r=(t,a)=>{v(a),t.forEach((x,h)=>{document.querySelector(`.feedbackText--${h}`).classList.add(s["not-visible"]),document.querySelector(`.buttonDot${h}`).classList.remove(s["myDot--active"])}),document.querySelector(`.feedbackText--${a}`).classList.remove(s["not-visible"]),document.querySelector(`.buttonDot${a}`).classList.add(s["myDot--active"])};return e.jsxs("div",{className:`${s["section-three-main-div"]} testimonial`,children:[e.jsxs("div",{ref:c,className:s["section-three-sub-div-one"],children:[e.jsx("div",{className:`${s["quotes-img"]} ${s["quotes-img-right"]}`}),o.map((t,a)=>e.jsxs("div",{className:`feedbackText--${a} ${s["main-quotes-div"]} ${s["not-visible"]}`,children:[e.jsx("div",{className:s.para,children:t.testimonial}),e.jsx("div",{className:s.image_container,children:e.jsx("img",{src:Q[a],alt:"default",className:s.image})}),e.jsx("div",{className:s.subText,children:t.author}),e.jsx("div",{className:s.subDeg,children:t.deg})]},a)),e.jsx("div",{className:`${s["quotes-img"]} ${s["quotes-img-left"]}`})]}),e.jsx("div",{ref:d,children:o.map((t,a,x)=>e.jsx("div",{name:"change testimonial",className:`buttonDot${a} ${s.myDot} ${m===a?p(a):""}`,onClick:()=>r(x,a)},a))})]})},Y=j.memo(U);function G(i){return f({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{tag:"polyline",attr:{points:"22,6 12,13 2,6"}}]})(i)}const J=()=>e.jsx("div",{className:"section_contct_info",children:e.jsx("div",{className:"contect-container",children:e.jsxs("div",{className:"cn-row-main",children:[e.jsx("div",{className:"contect-row",children:e.jsx("div",{className:"cn-detail-title",children:"For More Details"})}),e.jsxs("div",{className:"cn-row",children:[e.jsxs("div",{className:"cn-logo",children:[" ",e.jsx(y,{})]}),e.jsxs("div",{className:"cn-info",children:[e.jsx("div",{className:"cn-no",children:"0123456789 "}),e.jsx("div",{className:"contect-comments",children:"Contect for Enquiry"})]})]}),e.jsxs("div",{className:"cn-row",children:[e.jsxs("div",{className:"cn-logo",children:[" ",e.jsx(G,{style:{fontSize:"3.7rem"}})]}),e.jsxs("div",{className:"cn-info",children:[e.jsx("div",{className:"cn-no",children:" dps@gmail.com "}),e.jsx("div",{className:"contect-comments",children:" Mail us"})]})]})]})})}),X=[{testimonial:"ipsum dolor sit  oo ss  fdefd dfde",author:"Khushi Kumari",deg:"2K23 passout (00.00%)",imgSrc:"src/assets/khushi.jpg"},{testimonial:"I read in this school nearly a decade and I have only great thing to say about my experience that the teachers are amazing they are very helpful. I learn many things from school . The time I spent in this school was much valuable . I like to say thanks to the management of the school for its endless efforts for our future. I miss the school very much.",author:"Preity Singh",deg:"2K18 passout (00.00%)",imgSrc:"src/assets/preity.jpg"},{testimonial:"ipsum dolor sit oo ss  fdefd dfds ",author:"Ayush Singh",deg:"2K18 passout (00.00%)",imgSrc:"src/assets/ayush.jpg"},{testimonial:"ipsum dolor sit oo ss  fdefd dfds ",author:"Aryan Kumar",deg:"2K23 passout (00.00%)",imgSrc:"src/assets/aryan.jpg"},{testimonial:"Illo delectus similique cupiditate enim facilis juth hgh fsdfewd fdfef",author:"Sandhya Kumari",deg:"2K23 passout (00.00%)",imgSrc:"src/assets/anjali.jpg"},{testimonial:"ipsum dolor d ",author:"Pawan Singh",deg:"2K18 passout (00.00%)",imgSrc:"src/assets/pawan.jpg"}],Z=[{title:"Our Strength ",description:"Our school encourages students participating in extracurricular activities and it is a great way to widen and broaden students’ social circle, expand their interests, and build leadership skills. Our school promotes students’ involvement in school extracurricular activities which leads to positive long-term outcomes.",key:0,hrefbtn:"/testvite/ourstrength/"},{title:"Why DPS",description:"Divine Public School ensures acedemic excellence, character building and leadership skills which help allround development of a student.  Easily accessible location for families to come the well trained and professional staffs.  ",key:1,hrefbtn:"/testvite/about/"},{title:"Academic",description:" Our School is renowned for its outstanding academic offerings, acknowledged teachers, and supportive environment, cultivates a desire to study in students, enabling them to succeed both academically and personally.",key:2,hrefbtn:"/testvite/about/"},{title:"Activity",description:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facere error vitae nam exercitationem tenetur at quisquam minima. Quis consequuntur quas perferendis ipsum animi molestiae mollitia sit! Voluptatem praesentium iusto quas, aperiam rem id quos, similique aliquam reprehenderit optio iure.",key:3,hrefbtn:"/testvite/about/"}],ee={articals:Z},se=[{src:"http://drive.google.com/uc?export=view&id=1TaDmqO9i5qj-DUEbRUoJ5iW4QjfdTzbD",alt:"image 1 class-room",comment:"dolorum sint eaque dolore? Tenetur eveniet, repellendus, quisquam libero alias temporibus et harum fugiat porro dolor voluptatum qui minus iste. Accusantium animi minus suscipit voluptatem."},{src:"http://drive.google.com/uc?export=view&id=1MWYBZ6P9jJs-o8gAwUBmBLqVlY1jyxed",alt:"image 2 for enterence",comment:"classroom"},{src:"http://drive.google.com/uc?export=view&id=1TWwpk9Ql7c3QrRBwhbgL2xi6t4TX58O5",alt:"image 3 office",comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ipsam soluta! At animi ducimus natus, itaque pariatur facilis, illo corrupti neque maiores dolore ab, veritatis reprehenderit. Nisi perferendis repudiandae id eum, natus error neque ipsum assumenda voluptates tempore. Fugiat, aliquid."},{src:"http://drive.google.com/uc?export=view&id=1TaD5s4QB_a6lwsliZYtC1dgIt-WQVtBt",alt:"image 4 infra",comment:"building1+ nesciunt  deserunt aspernatur beataemodi laborum autem eius praesentium repudiandae? Quaerat consectetur quae quis."},{src:"http://drive.google.com/uc?export=view&id=1VuvR0xxTRWIFzM1cSUXykSdwfgEilS5F",alt:"image 5 cca",comment:"co-curricular-activity winner '🙌🏽🙌🏽"}],te={slides:se};const ie=3e3,ae=i=>{const{carouselData:o}=i,c=n.useRef(null),[d,g]=n.useState(100),[l,u]=n.useState(0),m=()=>{u(l===o.length-1?0:l+1)},v=()=>{u(l===0?o.length-1:l-1)},p=r=>{u(r)};return n.useEffect(()=>g(ie),[]),n.useEffect(()=>(c.current=setTimeout(()=>u(r=>r===i.carouselData.length-1?0:r+1),d),()=>clearTimeout(c.current)),[i.carouselData.length,l,d]),e.jsx("div",{id:"section-carousel",className:"section-carousel-main",children:e.jsxs("div",{className:"carousel-sub-div",children:[o.map((r,t)=>e.jsx(e.Fragment,{children:e.jsx("div",{className:l===t?"image-div":"image-div not-visible-carousel",style:{background:"#aaaaaf"},children:e.jsx("img",{src:r.src,alt:r.alt,className:"image",loading:"eager"})},t)})),e.jsx(q,{className:"arrow leftArrow",onClick:v}),e.jsx(_,{className:"arrow rightArrow",onClick:m}),e.jsx("div",{className:"indicator-btn-parent",children:e.jsx("span",{className:"indicators",children:o.map((r,t)=>e.jsx("button",{onClick:()=>p(t),className:l===t?"indicator":"indicator indicator-inactive"},t))})}),e.jsx("div",{className:"desc-bar-parent",children:e.jsx("div",{className:"description-bar",children:o.map((r,t)=>e.jsx("div",{className:l===t?"carousel-description":"carousel-description inactive",children:r.comment}))})})]})})};function oe(){return e.jsxs(e.Fragment,{children:[e.jsx(w,{}),e.jsx(S,{}),e.jsx(D,{}),e.jsx(ae,{carouselData:te.slides}),e.jsx(A,{data:ee.articals}),e.jsx(C,{}),e.jsx(Y,{testimonialData:X}),e.jsx(J,{}),e.jsx(k,{})]})}T.createRoot(document.getElementById("root")).render(e.jsx(j.StrictMode,{children:e.jsx(oe,{})}));
