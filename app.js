const M=`Pizza|Margarita|400|Salcë domate, mozzarella, borzilok
Pizza|Funghi|450|Salcë domate, mozzarella, kërpudha
Pizza|Salami|500|Salcë domate, mozzarella, sallam viçi
Pizza|Proshute|500|Salcë domate, mozzarella, proshutë viçi
Pizza|Romana|550|Salcë domate, mozzarella, proshutë viçi, kërpudha
Pizza|4 Djathra|600|Salcë domate, gorgonzola, mozzarella, parmixhano, provolone
Pizza|4 Stinet|600|Salcë domate, mozzarella, sallam viçi, proshutë viçi, kërpudha, karcof, asparag
Pizza|Diavola|600|Salcë domate, mozzarella, gorgonzola, suxhuk pikant
Pizza|Vegjetriane|500|Salcë domate, mozzarella, kërpudha, speca, ullinj, karcof, asparag
Pizza|Capricoza|600|Salcë domate, mozzarella, sallam viçi, proshutë, kërpudha, speca, ullinj, karcof
Pizza|Ton|500|Salcë domate, mozzarella, ton, qepë e kuqe
Pizza|Kalabreze|550|Salcë domate, mozzarella, sallam pikant, speca, qepë
Pizza|Napolitana|650|Salcë domate, mozzarella, açuge, ullinj, kaperi, vaj hudhre
Pizza|Wudy|550|Salcë domate, mozzarella, wudi, patate
Pizza|Tartuf|600|Salcë domate, mozzarella, kërpudha, tartuf
Pizza|Pesto Chicken|550|Pesto, mozzarella, fileto pule, borzilok
Pizza|Salmon|800|Salcë domate, mozzarella, salmon, ullinj, kaperi, vaj hudhre
Pizza|Il Pescatore|650|Salcë domate, mozzarella, karkalec, kungull, pomodorini
Pizza|My Way|650|Salcë domate, mozzarella, bresaola, suxhuk pikant, proshutë gjeli
Pizza|Eddie's Pizza|800|Salcë domate, mozzarella, bresaola, parmixhan, rukola, pomodorini
Kalcone & Focaccia|Kalcone|400|Salcë domate, mozzarella, proshutë gjeli, sallam viçi, kërpudha
Kalcone & Focaccia|Focaccia|200|Vaj ulliri, rozmarinë, rigon, kripë maldon
Sanduiç|Sanduiç 4 Djathrat|250|Mozzarella, gorgonzola, provolone, parmixhano
Sanduiç|Sanduiç Ton|250|Mozzarella, ton, majonezë, ullinj, domate
Sanduiç|Sanduiç Proshute|250|Mozzarella, proshutë viçi, kërpudha, speca, ullinj
Sanduiç|Sanduiç Fshati|250|Salcë kosi, djath i bardhë, speca, ullinj, domate, kastravec
Sanduiç|Sanduiç Pikant|250|Mozzarella, majonezë, suxhuk pikant, domate, kastravec
Sanduiç|Sanduiç Wudy Patate|300|Mozzarella, majonezë, wudy, patate
Sanduiç|Sanduiç Fileto Pule|300|Mozzarella, majonezë, fileto pule, speca, domate, ullinj
Sanduiç|Sanduiç Deluxe|350|Mozzarella, bresaola, rukola, pomodorini, parmixhan
Frites|Patate të skuqura|200|
Frites|Onion Rings|200|
Frites|Kroketa Patate|250|
Frites|Chicken Finger|300|
Frites|Qofte Gaforre|400|
Antipasta|Antipaste e ftohtë Italiane|1000|Bresaola, proshutë, spianata pikante, djath pikant, parmixhano, gorgonzola, burrata
Burger|Classic Burger|550|Sallatë iceberg, qofte viçi, cedar, domate, kastravec turshi, qepë
Burger|Crispy Chicken Burger|500|Sallatë iceberg, fileto pule, cedar, domate, kastravec turshi
Sallata|Sallatë Greke|300|Domate, kastravec, speca, qepë, ullinj, djath feta, rigon
Sallata|Sallatë Rukola|350|Rukola, pomodorini, parmixhano, arra, balsamik
Sallata|Sallatë Çezar|400|Sallatë iceberg, fileto pule, pomodorini, misër
Pije të nxehta|Kafe|70|
Pije të nxehta|Çaj bustinë|70|
Pije të nxehta|Çaj bio|120|
Pije freskuese|Ujë|70|
Pije freskuese|Ujë me vitamina|100|
Pije freskuese|Dhallë|70|
Pije freskuese|Fanta|120|
Pije freskuese|Kola|120|
Pije freskuese|Bravo|120|
Pije freskuese|Çaj i ftohtë|120|
Pije freskuese|Orange Soda|120|
Pije freskuese|Lemon Soda|120|
Pije freskuese|Golden Eagle|120|
Pije freskuese|B-52|150|
Pije freskuese|Red Bull|250|
Pije freskuese|Bavaria|200|
Pije freskuese|Heineken|250|`;
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const ld=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}};
const P0=()=>M.split("\n").map((l,i)=>{const a=l.split("|");return{id:i+1,c:a[0],n:a[1],p:+a[2],d:a[3]||""}});
let P=ld("pz_p",null)||P0(),I=ld("pz_i",[]),C={name:"Eddie's Pizza",addr:"",tel:"",nipt:"",tvsh:0,user:"admin",pass:"1234",fmt:"80",next:1,foot:"Faleminderit!",...ld("pz_c",{})};
const sv=()=>{window.cloudCfg&&cloudCfg()};
const f=n=>Math.round(n).toLocaleString("sq-AL")+" L",esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const nowL=()=>{const d=new Date();d.setMinutes(d.getMinutes()-d.getTimezoneOffset());return d.toISOString().slice(0,16)};
const day=s=>s.slice(0,10),fmtD=s=>s.slice(8,10)+"/"+s.slice(5,7)+"/"+s.slice(0,4)+" "+s.slice(11,16);
const pad=n=>"F-"+String(n).padStart(6,"0");
/* login */
$("#lf").onsubmit=e=>{e.preventDefault();$("#le").textContent="";if(!window.auth){$("#le").textContent="Mungon konfigurimi i Firebase.";return}auth.signInWithEmailAndPassword($("#lu").value.trim(),$("#lp").value).catch(()=>$("#le").textContent="Email-i ose fjalëkalimi është gabim.")};
$("#out").onclick=()=>window.auth&&auth.signOut();
function start(){$("#login").hidden=true;$("#app").hidden=false;show("new");newInv();cfgFill();prodList();invList();}

function show(s){$$("section").forEach(x=>x.classList.toggle("on",x.id==s));$$("#nav button").forEach(b=>b.classList.toggle("on",b.dataset.s==s));if(s=="rep"&&!$("#ra").value){const d=nowL();$("#ra").value=d.slice(0,8)+"01";$("#rb").value=day(d);rep()}if(s=="inv")invList()}
$$("#nav button").forEach(b=>b.onclick=()=>show(b.dataset.s));
/* modal */
const mod=h=>{$("#mb").innerHTML=h;$("#m").style.display="flex"},cm=()=>$("#m").style.display="none";
$("#m").onclick=e=>{if(e.target.id=="m")cm()};
/* new invoice */
let cur,cat="Të gjitha";
function newInv(){cur={id:null,no:"",date:nowL(),client:"",pay:"Para në dorë",items:[],disc:0};$("#ffmt").value=C.fmt;draw()}
function draw(){$("#ntitle").textContent=cur.id?"Modifiko "+cur.no:"Faturë e re";$("#fd").value=cur.date;$("#fc").value=cur.client;$("#fp").value=cur.pay;$("#fdisc").value=cur.disc;
 const cs=["Të gjitha",...new Set(P.map(p=>p.c))];$("#cats").innerHTML=cs.map(c=>`<button class="${c==cat?"on":""}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
 $$("#cats button").forEach(b=>b.onclick=()=>{cat=b.dataset.c;draw()});grid();cart()}
function grid(){const q=$("#q").value.toLowerCase();$("#pg").innerHTML=P.filter(p=>(cat=="Të gjitha"||p.c==cat)&&(p.n+p.d).toLowerCase().includes(q)).map(p=>`<button data-i="${p.id}"><b>${esc(p.n)}</b><small>${esc(p.d)}</small><i>${f(p.p)}</i></button>`).join("");
 $$("#pg button").forEach(b=>b.onclick=()=>pick(+b.dataset.i))}
$("#q").oninput=grid;
function pick(id){const p=P.find(x=>x.id==id);mod(`<h3>${esc(p.n)}</h3><div class="row"><label>Çmimi (mund ta ndryshosh)<input id="mp" type="number" value="${p.p}"></label><label>Sasia<input id="mq" type="number" value="1" min="1" style="width:80px"></label></div><div class="row"><button id="mo">Shto</button><button class="o" onclick="cm()">Anulo</button></div>`);
 $("#mq").select();const ok=()=>{const pr=+$("#mp").value,q=+$("#mq").value||1;const ex=cur.items.find(i=>i.n==p.n&&i.p==pr);ex?ex.q+=q:cur.items.push({n:p.n,c:p.c,q,p:pr});cm();cart()};$("#mo").onclick=ok;$("#m input").onkeydown=e=>e.key=="Enter"&&ok()}
const sub=()=>cur.items.reduce((s,i)=>s+i.q*i.p,0),tot=()=>Math.max(0,sub()-(+cur.disc||0));
function cart(){$("#cart").innerHTML=cur.items.length?cur.items.map((i,k)=>`<tr><td>${esc(i.n)}</td><td><input type="number" min="1" value="${i.q}" data-k="${k}" data-f="q" style="width:60px"></td><td><input type="number" value="${i.p}" data-k="${k}" data-f="p"></td><td>${f(i.q*i.p)}</td><td><button class="o" data-x="${k}">✕</button></td></tr>`).join(""):`<tr><td colspan="5">Zgjidh produkte nga lista në të majtë.</td></tr>`;
 $$("#cart input").forEach(x=>x.onchange=()=>{cur.items[x.dataset.k][x.dataset.f]=+x.value||0;cart()});$$("#cart [data-x]").forEach(x=>x.onclick=()=>{cur.items.splice(x.dataset.x,1);cart()});$("#tt").textContent=f(tot())}
$("#fdisc").oninput=e=>{cur.disc=+e.target.value;$("#tt").textContent=f(tot())};
async function save(){cur.date=$("#fd").value||nowL();cur.client=$("#fc").value;cur.pay=$("#fp").value;cur.disc=+$("#fdisc").value||0;
 if(!cur.items.length){mod(`<h3>Fatura është bosh</h3><p>Shto të paktën një produkt.</p><button onclick="cm()">Në rregull</button>`);return null}
 cur.total=tot();if(!cur.id){cur.id=String(Date.now());cur.no=pad(await nextNo())}I=[cur,...I.filter(x=>x.id!=cur.id)];cloudInv(cur);invList();return cur}
$("#sv").onclick=async()=>{const x=await save();if(x){mod(`<h3>U ruajt ${x.no}</h3><button onclick="cm()">Mmbyll</button>`);newInv()}};
$("#svp").onclick=async()=>{const x=await save();if(x){prn(x,$("#ffmt").value);newInv()}};
$("#nw").onclick=newInv;
/* invoices */
function flt(a,b){a=a||"0000";b=b||"9999";return I.filter(x=>day(x.date)>=a&&day(x.date)<=b).sort((p,q)=>q.date.localeCompare(p.date))}
function invList(){const L=flt($("#ia").value,$("#ib").value);$("#il").innerHTML=L.length?L.map(x=>`<tr><td>${x.no}</td><td>${fmtD(x.date)}</td><td>${esc(x.client)}</td><td>${x.pay}</td><td>${f(x.total)}</td><td><button data-e="${x.id}">Modifiko</button> <button class="o" data-p="${x.id}">Printo</button> <button class="o" data-d="${x.id}">Fshi</button></td></tr>`).join(""):`<tr><td colspan="6">Nuk ka fatura për këtë periudhë.</td></tr>`;
 $$("#il [data-e]").forEach(b=>b.onclick=()=>{cur=JSON.parse(JSON.stringify(I.find(x=>x.id==b.dataset.e)));show("new");draw()});
 $$("#il [data-p]").forEach(b=>b.onclick=()=>prn(I.find(x=>x.id==b.dataset.p),C.fmt));
 $$("#il [data-d]").forEach(b=>b.onclick=()=>mod(`<h3>Fshi faturën?</h3><div class="row"><button id="yd">Po, fshi</button><button class="o" onclick="cm()">Jo</button></div>`)||($("#yd").onclick=()=>{I=I.filter(x=>x.id!=b.dataset.d);cloudDel(b.dataset.d);cm();invList()}))}
$("#ifl").onclick=invList;
function rows(L){const r=[];L.forEach(x=>x.items.forEach(i=>r.push({"Nr Fature":x.no,"Data":day(x.date),"Ora":x.date.slice(11,16),"Klienti":x.client,"Pagesa":x.pay,"Kategoria":i.c||"","Produkti":i.n,"Sasia":i.q,"Cmimi":i.p,"Totali rreshtit":i.q*i.p,"Zbritje fature":x.disc||0,"Total fature":x.total})));return r}
$("#iex").onclick=()=>{const w=XLSX.utils.book_new();XLSX.utils.book_append_sheet(w,XLSX.utils.json_to_sheet(rows(flt($("#ia").value,$("#ib").value))),"Faturat");XLSX.writeFile(w,"faturat_"+day(nowL())+".xlsx")};
$("#iim").onchange=e=>{const r=new FileReader();r.onload=ev=>{const w=XLSX.read(ev.target.result,{type:"array"}),R=XLSX.utils.sheet_to_json(w.Sheets[w.SheetNames[0]]),g={};
 R.forEach(o=>{const n=String(o["Nr Fature"]||"");if(!n)return;(g[n]=g[n]||{id:Date.now()+Math.random(),no:n,date:String(o["Data"]).slice(0,10)+"T"+String(o["Ora"]||"12:00").slice(0,5),client:o["Klienti"]||"",pay:o["Pagesa"]||"Para në dorë",disc:+o["Zbritje fature"]||0,items:[]}).items.push({n:o["Produkti"],c:o["Kategoria"]||"",q:+o["Sasia"]||1,p:+o["Cmimi"]||0})});
 let c=0;Object.values(g).forEach(x=>{x.total=Math.max(0,x.items.reduce((s,i)=>s+i.q*i.p,0)-x.disc);const o=I.find(y=>y.no==x.no);if(o)x.id=o.id;x.id=String(x.id).replace(".","");I=I.filter(y=>y.no!=x.no);I.push(x);cloudInv(x);c++;const m=+x.no.replace(/\D/g,"");if(m>=C.next)C.next=m+1});sv();invList();mod(`<h3>U importuan ${c} fatura</h3><button onclick="cm()">Mbyll</button>`)};r.readAsArrayBuffer(e.target.files[0]);e.target.value=""};
/* print */
function prn(x,fm){const sb=x.items.reduce((s,i)=>s+i.q*i.p,0),lg=new URL("logo.png",location.href).href,th=fm=="80"||fm=="58",w={80:"72mm",58:"50mm",n:"110mm",a4:"190mm"}[fm],fs=fm=="58"?"11px":th?"12px":"14px";
 const head=`<div style="text-align:center"><img src="${lg}" style="width:${th?"60%":"170px"}"><br><b>${esc(C.name)}</b><br>${esc(C.addr)} ${esc(C.tel)}<br>${C.nipt?"NIPT: "+esc(C.nipt):""}</div><hr><div>Fatura: <b>${x.no}</b><br>Data: ${fmtD(x.date)}<br>${x.client?"Klienti: "+esc(x.client)+"<br>":""}Pagesa: ${x.pay}</div><hr>`;
 const body=fm=="a4"?`<table border="1" cellspacing="0" cellpadding="6" width="100%" style="border-collapse:collapse"><tr style="background:#d6141f;color:#fff"><th>Produkti</th><th>Sasia</th><th>Çmimi</th><th>Total</th></tr>${x.items.map(i=>`<tr><td>${esc(i.n)}</td><td align=center>${i.q}</td><td align=right>${f(i.p)}</td><td align=right>${f(i.q*i.p)}</td></tr>`).join("")}</table>`:`<table width="100%">${x.items.map(i=>`<tr><td>${esc(i.n)}<br>${i.q} x ${f(i.p)}</td><td align=right valign=bottom>${f(i.q*i.p)}</td></tr>`).join("")}</table>`;
 const foot=`<hr><table width="100%"><tr><td>Nëntotali</td><td align=right>${f(sb)}</td></tr>${x.disc?`<tr><td>Zbritje</td><td align=right>-${f(x.disc)}</td></tr>`:""}${C.tvsh>0?`<tr><td>TVSH ${C.tvsh}% (e përfshirë)</td><td align=right>${f(x.total-x.total/(1+C.tvsh/100))}</td></tr>`:""}<tr style="font-size:1.3em"><td><b>TOTALI</b></td><td align=right><b>${f(x.total)}</b></td></tr></table><p style="text-align:center">${esc(C.foot)}</p>`;
 const h=`<html><head><meta charset="utf-8"><style>@page{size:${fm=="a4"||fm=="n"?"A4":w+" auto"};margin:${th?"3mm":"12mm"}}body{font:${fs} Arial,sans-serif;width:${w};margin:0 ${fm=="n"?"auto":"0"};color:#000}hr{border:0;border-top:1px dashed #000}</style></head><body>${head}${body}${foot}</body></html>`;
 const fr=document.createElement("iframe");fr.style.cssText="position:fixed;width:0;height:0;border:0";document.body.appendChild(fr);fr.srcdoc=h;fr.onload=()=>setTimeout(()=>{fr.contentWindow.focus();fr.contentWindow.print();setTimeout(()=>fr.remove(),4000)},300)}
/* reports */
function stats(){const L=flt($("#ra").value,$("#rb").value),S={t:0,n:L.length,d:{},p:{},c:{},m:{}};
 L.forEach(x=>{S.t+=x.total;S.d[day(x.date)]=(S.d[day(x.date)]||0)+x.total;S.m[x.pay]=(S.m[x.pay]||0)+x.total;x.items.forEach(i=>{const o=S.p[i.n]=S.p[i.n]||{n:i.n,q:0,v:0};o.q+=i.q;o.v+=i.q*i.p;const c=i.c||"Tjetër";S.c[c]=(S.c[c]||0)+i.q*i.p})});return S}
const bars=(o,fmt)=>{const e=Object.entries(o).sort((a,b)=>b[1]-a[1]),mx=e[0]?e[0][1]:1;return`<table>${e.map(([k,v])=>`<tr><td>${esc(k)}</td><td style="width:45%"><div class="bar"><span style="width:${v/mx*100}%"></span></div></td><td align=right>${fmt(v)}</td></tr>`).join("")||"<tr><td>Pa të dhëna</td></tr>"}</table>`};
function rep(){const S=stats(),pr=Object.values(S.p),tq=pr.sort((a,b)=>b.q-a.q).slice(0,10),tv=[...pr].sort((a,b)=>b.v-a.v).slice(0,10),nd=Object.keys(S.d).length||1;
 $("#ro").innerHTML=`<div class="k"><div>Shitjet totale<b>${f(S.t)}</b></div><div>Nr i faturave<b>${S.n}</b></div><div>Fatura mesatare<b>${f(S.n?S.t/S.n:0)}</b></div><div>Mesatarja ditore<b>${f(S.t/nd)}</b></div></div>
 <div class="g"><div class="card"><h3>Produktet më të shitura (sasi)</h3>${bars(Object.fromEntries(tq.map(x=>[x.n,x.q])),v=>v+" copë")}</div><div class="card"><h3>Produktet me më shumë të ardhura</h3>${bars(Object.fromEntries(tv.map(x=>[x.n,x.v])),f)}</div>
 <div class="card"><h3>Shitjet ditore</h3>${bars(S.d,f)}</div><div><div class="card"><h3>Sipas kategorisë</h3>${bars(S.c,f)}</div><div class="card"><h3>Sipas pagesës</h3>${bars(S.m,f)}</div></div></div>`}
$("#rg").onclick=rep;
$("#rex").onclick=()=>{const S=stats(),w=XLSX.utils.book_new(),pr=Object.values(S.p).sort((a,b)=>b.q-a.q).map(x=>({Produkti:x.n,Sasia:x.q,"Të ardhura":x.v}));
 XLSX.utils.book_append_sheet(w,XLSX.utils.json_to_sheet([{Totali:S.t,"Nr faturave":S.n,Nga:$("#ra").value,Deri:$("#rb").value}]),"Permbledhje");XLSX.utils.book_append_sheet(w,XLSX.utils.json_to_sheet(pr),"Produktet");
 XLSX.utils.book_append_sheet(w,XLSX.utils.json_to_sheet(Object.entries(S.d).sort().map(([d,v])=>({Data:d,Shitje:v}))),"Ditore");XLSX.writeFile(w,"raport_shitjesh.xlsx")};
/* products */
function prodList(){$("#cl").innerHTML=[...new Set(P.map(p=>p.c))].map(c=>`<option value="${esc(c)}">`).join("");
 $("#pl").innerHTML=P.map(p=>`<tr><td><input data-i="${p.id}" data-f="n" value="${esc(p.n)}"></td><td><input data-i="${p.id}" data-f="c" value="${esc(p.c)}"></td><td><input type="number" data-i="${p.id}" data-f="p" value="${p.p}"></td><td><button class="o" data-x="${p.id}">Fshi</button></td></tr>`).join("");
 $$("#pl input").forEach(x=>x.onchange=()=>{const p=P.find(y=>y.id==x.dataset.i);p[x.dataset.f]=x.dataset.f=="p"?+x.value:x.value;sv();draw()});
 $$("#pl [data-x]").forEach(b=>b.onclick=()=>{P=P.filter(p=>p.id!=b.dataset.x);sv();prodList();draw()})}
$("#pa").onclick=()=>{const n=$("#pn").value.trim();if(!n){mod(`<h3>Shkruaj emrin e produktit</h3><button onclick="cm()">Në rregull</button>`);return}P.push({id:Date.now(),c:$("#pc").value||"Tjetër",n,p:+$("#pp").value||0,d:""});$("#pn").value=$("#pp").value="";sv();prodList();draw();mod(`<h3>U shtua: ${esc(n)}</h3><button onclick="cm()">Në rregull</button>`)};
/* config */
function cfgFill(){["name","addr","tel","nipt","tvsh","fmt","foot"].forEach(k=>$("#c_"+k).value=C[k])}
$("#cs").onclick=()=>{["name","addr","tel","nipt","fmt","foot"].forEach(k=>C[k]=$("#c_"+k).value);C.tvsh=+$("#c_tvsh").value||0;sv();mod(`<h3>Konfigurimi u ruajt</h3><button onclick="cm()">Mbyll</button>`)};
$("#bk").onclick=()=>{const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([JSON.stringify({P,I,C})],{type:"application/json"}));a.download="kopje_eddies_"+day(nowL())+".json";a.click()};
$("#bki").onchange=e=>{const r=new FileReader();r.onload=ev=>{try{const d=JSON.parse(ev.target.result);P=d.P||P;C={...C,...d.C};sv();Promise.all((d.I||[]).map(x=>cloudInv({...x,id:String(x.id).replace(".","")}))).then(()=>location.reload())}catch(x){mod(`<h3>Skedari nuk është i vlefshëm</h3><button onclick="cm()">Mbyll</button>`)}};r.readAsText(e.target.files[0])};
$("#del").onclick=()=>{mod(`<h3>Fshi të gjitha faturat?</h3><p>Ky veprim nuk kthehet. Shkarko një kopje para se të vazhdosh.</p><div class="row"><button id="yy">Po, fshi</button><button class="o" onclick="cm()">Jo</button></div>`);$("#yy").onclick=()=>{I.forEach(x=>cloudDel(x.id));I=[];cm();invList()}};
$("#np").onclick=()=>{mod(`<h3>Produkt i ri</h3><div class="row"><label>Emri<input id="n1"></label><label>Kategoria<input id="n2" list="cl" value="Të tjera"></label><label>Çmimi<input id="n3" type="number"></label></div><label><input type="checkbox" id="n4" checked style="width:auto"> Ruaje në menu</label><div class="row"><button id="n5">Shto në faturë</button><button class="o" onclick="cm()">Anulo</button></div>`);
$("#n5").onclick=()=>{const n=$("#n1").value.trim();if(!n)return;const p=+$("#n3").value||0,c=$("#n2").value||"Të tjera";if($("#n4").checked){P.push({id:Date.now(),c,n,p,d:""});sv();prodList()}cur.items.push({n,c,q:1,p});cm();draw()}};
