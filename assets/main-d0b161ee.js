import{G as j,j as e,B as b,a as y,R as f,r,F as N,b as _,c as w,S as D,N as k,d as S,e as q}from"./NewNavbar-de6dc0b8.js";import{M as T}from"./MostImpInfo-c220e27b.js";function I(t){return j({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M96.9 270.3V363c0 2.9 1.5 5.5 4 7l132 75.9c5.3 3.1 12-.8 12-7v-93.8c0-2.9-1.5-5.5-4-7l-132-74.9c-5.4-2.9-12 1-12 7.1zM280.9 445.9L413 370c2.5-1.4 4-4.1 4-7v-93.7c0-6.2-6.6-10-12-7l-132 75.9c-2.5 1.4-4 4.1-4 7V439c-.1 6.1 6.6 10 11.9 6.9z"}},{tag:"path",attr:{d:"M249 65.1L37 188.9c-5.4 3.1-5.4 10.8 0 13.9l212 117.8c4.9 2.8 11 2.8 15.9 0L453 212.9c5.3-3.1 7 .8 7 7v153.4c0 6.8 3.9 10 11 10 4.4 0 10-3.2 10-10V201.5c0-2.9-1.5-5.5-4-7L264.9 65.1c-4.9-2.8-11-2.8-15.9 0z"}}]})(t)}function Z(t){return j({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M3 12h4.5l1.5 -6l4 12l2 -9l1.5 3h4.5"}}]})(t)}const B=({title:t,des:i,logoKey:a,hrefbtn:d})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"vlog",children:[e.jsxs("div",{className:"logo-content",children:[e.jsxs("div",{className:"vlog-logo",children:[e.jsx(b,{className:a==0?"vlog-icon show":"hidden"}),e.jsx(I,{className:a==1?"vlog-icon show":"hidden"}),e.jsx(y,{className:a==2?"vlog-icon show":"hidden"}),e.jsx(Z,{className:a==3?"vlog-icon show":"hidden"})]}),e.jsx("div",{className:"title",children:e.jsx("h2",{children:t})})]}),e.jsxs("div",{className:"vlog-content",children:[e.jsx("p",{className:"description",children:i}),e.jsx("a",{href:d,children:e.jsx("button",{className:"button",children:"View More"})})]})]})}),E=({data:t})=>e.jsx("div",{className:"main-body",children:e.jsx("div",{className:"vlog-container",children:e.jsx("div",{className:"vlog-wrapper",children:t.map((i,a)=>e.jsx(B,{title:i.title,des:i.description,logoKey:i.key,hrefbtn:i.hrefbtn},a))})})});const L=()=>e.jsx(e.Fragment,{children:e.jsx("section",{className:"alumni-info",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row1",children:e.jsx("div",{className:"testimonial_heading",children:" What our Toppers say "})})})})}),$="_para_50s4q_47",C="_subText_50s4q_52",F="_myDot_50s4q_58",M="_image_50s4q_87",A="_subDeg_50s4q_97",s={"section-three-main-div":"_section-three-main-div_50s4q_1","quotes-img-right":"_quotes-img-right_50s4q_10","quotes-img-left":"_quotes-img-left_50s4q_17","section-three-sub-div-one":"_section-three-sub-div-one_50s4q_23","main-quotes-div":"_main-quotes-div_50s4q_31","quotes-img":"_quotes-img_50s4q_10",para:$,subText:C,myDot:F,"myDot--active":"_myDot--active_50s4q_69","not-visible":"_not-visible_50s4q_73",image:M,subDeg:A},Q="/testvite/assets/khushi-69ed1787.jpg",R="/testvite/assets/preity-3e25df52.jpg",Y="/testvite/assets/ayush-b012f7e5.jpg",z="/testvite/assets/aryan-2fbafcc8.jpg",V="/testvite/assets/anjali-5a103dcb.jpg",K="/testvite/assets/pawan-d1e1082a.jpg",G=[Q,R,Y,z,V,K],P=5e3,W=t=>{const{testimonialData:i}=t,a=r.useRef(null),d=r.useRef(null),v=r.useRef(null),[l,m]=r.useState(100),[h,g]=r.useState(0);r.useEffect(()=>m(P),[]),r.useEffect(()=>(v.current=setTimeout(()=>g(n=>n===t.testimonialData.length-1?0:n+1),l),()=>clearTimeout(v.current)),[t.testimonialData.length,h,l]);const p=n=>{if(d.current!==null&&h===n){const o=[...a.current.children];return o.forEach((x,u)=>{document.querySelector(`.feedbackText--${u}`)&&document.querySelector(`.feedbackText--${u}`).classList.add(s["not-visible"])}),o[h+1].classList.remove(s["not-visible"]),s["myDot--active"]}},c=(n,o)=>{g(o),n.forEach((x,u)=>{document.querySelector(`.feedbackText--${u}`).classList.add(s["not-visible"]),document.querySelector(`.buttonDot${u}`).classList.remove(s["myDot--active"])}),document.querySelector(`.feedbackText--${o}`).classList.remove(s["not-visible"]),document.querySelector(`.buttonDot${o}`).classList.add(s["myDot--active"])};return e.jsxs("div",{className:`${s["section-three-main-div"]} testimonial`,children:[e.jsxs("div",{ref:a,className:s["section-three-sub-div-one"],children:[e.jsx("div",{className:`${s["quotes-img"]} ${s["quotes-img-right"]}`}),i.map((n,o)=>e.jsxs("div",{className:`feedbackText--${o} ${s["main-quotes-div"]} ${s["not-visible"]}`,children:[e.jsx("div",{className:s.para,children:n.testimonial}),e.jsx("div",{className:s.image_container,children:e.jsx("img",{src:G[o],alt:"default",className:s.image})}),e.jsx("div",{className:s.subText,children:n.author}),e.jsx("div",{className:s.subDeg,children:n.deg})]},o)),e.jsx("div",{className:`${s["quotes-img"]} ${s["quotes-img-left"]}`})]}),e.jsx("div",{ref:d,children:i.map((n,o,x)=>e.jsx("div",{name:"change testimonial",className:`buttonDot${o} ${s.myDot} ${h===o?p(o):""}`,onClick:()=>c(x,o)},o))})]})},O=f.memo(W);function H(t){return j({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{tag:"polyline",attr:{points:"22,6 12,13 2,6"}}]})(t)}const U=()=>e.jsx("div",{className:"section_contct_info",children:e.jsx("div",{className:"contect-container",children:e.jsxs("div",{className:"cn-row-main",children:[e.jsx("div",{className:"contect-row",children:e.jsx("div",{className:"cn-detail-title",children:"For More Details"})}),e.jsxs("div",{className:"cn-row",children:[e.jsxs("div",{className:"cn-logo",children:[" ",e.jsx(N,{})]}),e.jsxs("div",{className:"cn-info",children:[e.jsx("div",{className:"cn-no",children:"0123456789 "}),e.jsx("div",{className:"contect-comments",children:"Contect for Enquiry"})]})]}),e.jsxs("div",{className:"cn-row",children:[e.jsxs("div",{className:"cn-logo",children:[" ",e.jsx(H,{style:{fontSize:"3.7rem"}})]}),e.jsxs("div",{className:"cn-info",children:[e.jsx("div",{className:"cn-no",children:" dps@gmail.com "}),e.jsx("div",{className:"contect-comments",children:" Mail us"})]})]})]})})}),J=[{testimonial:"I have only great thing to say about my experience that the teachers are amazing they are very helpful. I learn many things from school . The time I spent in this school was much valuable . I like to say thanks to the management of the school for its endless efforts for our future. I miss the school very much.",author:"Khushi Kumari",deg:"2K23 passout (00.00%)",imgSrc:"src/assets/khushi.jpg"},{testimonial:"Mama Ka School tha par liye aar kya ... ",author:"Preity Singh",deg:"2K18 passout (00.00%)",imgSrc:"src/assets/preity.jpg"},{testimonial:"I read in this school nearly a decade and I have only great thing to say about my experience that the teachers are amazing they are very helpful. ",author:"Ayush Singh",deg:"2K18 passout (00.00%)",imgSrc:"src/assets/ayush.jpg"},{testimonial:" teachers are amazing they are very helpful. I learn many things from school . The time I spent in this school was much valuable . I like to say thanks to the management of the school for its endless efforts for our future. I miss the school very much. ",author:"Aryan Kumar",deg:"2K23 passout (00.00%)",imgSrc:"src/assets/aryan.jpg"},{testimonial:"I read in this school nearly a decade and I have only great thing to say about my experience that the teachers are amazing they are very helpful. I learn many things from school . The time I spent in this school was much valuable . I like to say thanks to the management of the school for its endless efforts for our future. I miss the school very much.",author:"Sandhya Kumari",deg:"2K23 passout (00.00%)",imgSrc:"src/assets/anjali.jpg"},{testimonial:"I read in this school nearly a decade and I have only great thing to say about my experience that the teachers are amazing they are very helpful. I learn many things from school . The time I spent in this school was much valuable . I like to say thanks to the management of the school for its endless efforts for our future. I miss the school very much. ",author:"Pawan Singh",deg:"2K18 passout (00.00%)",imgSrc:"src/assets/pawan.jpg"}],X=[{title:"Our Strength ",description:"Our school encourages students participating in extracurricular activities and it is a great way to widen and broaden students’ social circle, expand their interests, and build leadership skills. Our school promotes students’ involvement in school extracurricular activities which leads to positive long-term outcomes.",key:0,hrefbtn:"/testvite/ourstrength/"},{title:"Why DPS",description:"Divine Public School ensures acedemic excellence, character building and leadership skills which help allround development of a student.  Easily accessible location for families to come the well trained and professional staffs.  ",key:1,hrefbtn:"/testvite/about/"},{title:"Academic",description:" Our School is renowned for its outstanding academic offerings, acknowledged teachers, and supportive environment, cultivates a desire to study in students, enabling them to succeed both academically and personally.",key:2,hrefbtn:"/testvite/about/"},{title:"Activity",description:"   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facere error vitae nam exercitationem tenetur at quisquam minima. Quis consequuntur quas perferendis ipsum animi molestiae mollitia sit! Voluptatem praesentium iusto quas, aperiam rem id quos, similique aliquam reprehenderit optio iure.",key:3,hrefbtn:"/testvite/about/"}],ee={articals:X},te=[{src:"http://drive.google.com/uc?export=view&id=1TaDmqO9i5qj-DUEbRUoJ5iW4QjfdTzbD",alt:"gate",comment:"Welcome."},{src:"http://drive.google.com/uc?export=view&id=1MWYBZ6P9jJs-o8gAwUBmBLqVlY1jyxed",alt:"image 2 for enterence",comment:"classroom"},{src:"http://drive.google.com/uc?export=view&id=1TWwpk9Ql7c3QrRBwhbgL2xi6t4TX58O5",alt:"office",comment:"office"},{src:"http://drive.google.com/uc?export=view&id=1TaD5s4QB_a6lwsliZYtC1dgIt-WQVtBt",alt:"building",comment:"building "},{src:"http://drive.google.com/uc?export=view&id=1VuvR0xxTRWIFzM1cSUXykSdwfgEilS5F",alt:"assembly",comment:"Morning Assembly"}],se={slides:te};const ie=3e3,ae=t=>{const{carouselData:i}=t,a=r.useRef(null),[d,v]=r.useState(100),[l,m]=r.useState(0),h=()=>{m(l===i.length-1?0:l+1)},g=()=>{m(l===0?i.length-1:l-1)},p=c=>{m(c)};return r.useEffect(()=>v(ie),[]),r.useEffect(()=>(a.current=setTimeout(()=>m(c=>c===t.carouselData.length-1?0:c+1),d),()=>clearTimeout(a.current)),[t.carouselData.length,l,d]),e.jsx("div",{id:"section-carousel",className:"section-carousel-main",children:e.jsxs("div",{className:"carousel-sub-div",children:[i.map((c,n)=>e.jsx(e.Fragment,{children:e.jsx("div",{className:l===n?"image-div":"image-div not-visible-carousel",style:{background:"#aaaaaf"},children:e.jsx("img",{src:c.src,alt:c.alt,className:"image",loading:"eager"})},n)})),e.jsx(_,{className:"arrow leftArrow",onClick:g}),e.jsx(w,{className:"arrow rightArrow",onClick:h}),e.jsx("div",{className:"indicator-btn-parent",children:e.jsx("span",{className:"indicators",children:i.map((c,n)=>e.jsx("button",{onClick:()=>p(n),className:l===n?"indicator":"indicator indicator-inactive"},n))})}),e.jsx("div",{className:"desc-bar-parent",children:e.jsx("div",{className:"description-bar",children:i.map((c,n)=>e.jsx("div",{className:l===n?"carousel-description":"carousel-description inactive",children:c.comment}))})})]})})};const ne=({event:t})=>e.jsxs("div",{id:"event-section-container",children:[e.jsx("div",{className:"event-box-heading",children:"Event"}),e.jsx("div",{className:"event-section-main",children:t.map((i,a)=>e.jsxs("div",{className:"event-box",children:[e.jsx("div",{className:"event-title",children:i.eventTitle}),e.jsx("div",{className:"event-content",children:i.eventContent}),e.jsx("a",{className:"anc-btn",href:"http://drive.google.com/uc?export=view&id=1j4_lS72wGQbENBdjlb9a1Z_YZF8hZdnZ",target:"_blank",children:"Know More"})]},a))})]});const oe=t=>{const{notice:i}=t;return e.jsx(e.Fragment,{children:e.jsx("div",{id:"notice-section-container",children:e.jsxs("div",{className:"notice-content-section",children:[e.jsx("div",{className:"notice-board-heading",children:"Notice Board"}),e.jsx("span",{}),e.jsx("marquee",{direction:"up",scrollAmount:"2",scrollDelay:"2",children:i.map((a,d)=>e.jsxs("div",{className:"notice-tab",children:[e.jsx("div",{className:"notice-date",children:a.noticeDate}),e.jsx("div",{className:"notice-title",children:e.jsx("a",{href:a.link,target:"_blank",children:a.noticeTitle})}),e.jsx("div",{className:"notice-content",children:a.noticeDesc}),e.jsx("br",{}),e.jsx("div",{className:"authority",children:a.auther}),e.jsx("hr",{})]},d))})]})})})},ce=[{noticeDate:"12-aug-2023",noticeTitle:"PTM",noticeDesc:"हिंदी कहानियाँ  एक ऐसी विधा जो जीवन को, परिस्थितियों को अपने में लेकर उलझी हुई समझ को, सुलझा देती हैं. हिंदी कहानी हमारे व्यक्तित्व को एक दर्पण की भांति हमारे सामने प्रेषित करती हैं जिनसे हमें अपने कर्मो का बोध होता हैं. माना कि कहानियाँ काल्पनिक होती हैं पर कल्पना परिस्थिती के द्वारा ही निर्मित होती हैं",auther:"principle"},{noticeDate:"12-aug-2023",noticeTitle:"Exam Routine",noticeDesc:"परिस्थितियों को अपने में लेकर उलझी हुई समझ को, सुलझा देती हैं.",auther:"director",link:"http://drive.google.com/uc?export=view&id=1j4_lS72wGQbENBdjlb9a1Z_YZF8hZdnZ"},{noticeDate:"12-aug-2023",noticeTitle:"Celebration of Independent day",noticeDesc:"हिंदी कहानियाँ  एक ऐसी विधा जो जीवन को, ",auther:"principle",link:"http://drive.google.com/uc?export=view&id=1j4_lS72wGQbENBdjlb9a1Z_YZF8hZdnZ"},{noticeDate:"12-aug-2023",noticeTitle:"Teachers Day",noticeDesc:" हिंदी कहानी हमारे व्यक्तित्व को एक दर्पण की भांति हमारे सामने प्रेषित करती हैं जिनसे हमें अपने कर्मो का बोध होता हैं. माना कि कहानियाँ काल्पनिक होती हैं पर कल्पना परिस्थिती के द्वारा ही निर्मित होती हैं",auther:"principle",link:"http://drive.google.com/uc?export=view&id=1j4_lS72wGQbENBdjlb9a1Z_YZF8hZdnZ"}],re={noticeBoard:ce},le=[{eventTitle:"HolyDay",eventContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui neque at velit perferendis libero.",link:"http://drive.google.com/uc?export=view&id=1j4_lS72wGQbENBdjlb9a1Z_YZF8hZdnZ"},{eventTitle:"Environment Day",eventContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui neque at velit perferendis libero.",link:"http://drive.google.com/uc?export=view&id=1j4_lS72wGQbENBdjlb9a1Z_YZF8hZdnZ"},{eventTitle:"Yoga Day",eventContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui neque at velit perferendis libero.",link:"http://drive.google.com/uc?export=view&id=1j4_lS72wGQbENBdjlb9a1Z_YZF8hZdnZ"},{eventTitle:"Kya likhe Kuch Samajh Nahi hai",eventContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui neque at velit perferendis libero.",link:"http://drive.google.com/uc?export=view&id=1j4_lS72wGQbENBdjlb9a1Z_YZF8hZdnZ"}],de={eventData:le};function me(){return e.jsxs(e.Fragment,{children:[e.jsx(T,{}),e.jsx(D,{}),e.jsx(k,{}),e.jsx(ae,{carouselData:se.slides}),e.jsxs("div",{className:"notice-wrapper",children:[e.jsx(oe,{notice:re.noticeBoard}),e.jsx(ne,{event:de.eventData})]}),e.jsx(E,{data:ee.articals}),e.jsx(L,{}),e.jsx(O,{testimonialData:J}),e.jsx(U,{}),e.jsx(S,{})]})}q.createRoot(document.getElementById("root")).render(e.jsx(f.StrictMode,{children:e.jsx(me,{})}));
