import{j as s,M as d,S as o,N as l,d as m,e as j,R as x}from"./NewNavbar-2eb455e1.js";import{C as h,N as u,o as N}from"./AboutMainData-e337a08f.js";const g=({reqData:e})=>{const{subHeading:n,contentImage:a,paraList:i,ulItemList:c}=e;return s.jsx(s.Fragment,{children:s.jsx("div",{className:"content-start-column",children:s.jsx("div",{className:"rowa",children:s.jsx("div",{className:"column-second",children:s.jsxs("div",{className:"inner-right",children:[s.jsx("div",{className:"rowa",children:s.jsx("div",{className:"column-second",children:s.jsx("div",{className:"inner-heading",children:s.jsx("h2",{children:n})})})}),s.jsx("div",{className:"inner-body",children:s.jsx("div",{className:"rowa",children:s.jsxs("div",{className:"column-second",children:[s.jsx("img",{src:a,alt:"images",width:"100%"}),i.map((r,t)=>s.jsxs("p",{children:[r," "]},t)),s.jsx("div",{className:"last-column",children:s.jsx("ul",{children:c.map((r,t)=>s.jsxs("li",{children:[" ",r," "]},t))})})]})})})]})})})})})},v=({data:e})=>{const{bgimgsrc:n,heading:a,...i}=e,c={bgimgsrc:n,heading:a};return s.jsxs(s.Fragment,{children:[s.jsx(h,{obj:c}),s.jsx("div",{id:"section-content-inner",children:s.jsx("div",{className:"containera",children:s.jsxs("div",{className:"rowa  pmni",children:[s.jsx(u,{}),s.jsx(g,{reqData:i})]})})})]})};function b(){return s.jsxs(s.Fragment,{children:[s.jsx(d,{}),s.jsx(o,{}),s.jsx(l,{}),s.jsx(v,{data:N.about}),s.jsx(m,{})]})}j.createRoot(document.getElementById("root")).render(s.jsx(x.StrictMode,{children:s.jsx(b,{})}));
