/* Sinkronizimi në cloud (Firebase). Faturat: koleksioni "invoices". Produktet+konfigurimi: biz/cfg. Numëruesi: biz/counter */
window.auth=null;let db=null,started=false,unsubs=[];
if(typeof firebaseConfig!=="undefined"&&!/PASTE/.test(firebaseConfig.apiKey)){
 firebase.initializeApp(firebaseConfig);window.auth=firebase.auth();db=firebase.firestore();
 db.enablePersistence({synchronizeTabs:true}).catch(()=>{});
 auth.onAuthStateChanged(u=>{
  unsubs.forEach(f=>f());unsubs=[];
  if(!u){started=false;document.getElementById("login").hidden=false;document.getElementById("app").hidden=true;return}
  unsubs.push(db.doc("biz/cfg").onSnapshot(s=>{
   if(s.exists){const d=s.data();if(d.P)P=d.P;C={...C,...d.C}}else if(!started){cloudCfg()}
   if(!started){started=true;start()}else{prodList();cfgFill();grid()}
  }));
  unsubs.push(db.collection("invoices").onSnapshot(s=>{I=s.docs.map(d=>d.data());if(started)invList()}));
 });
}else{document.addEventListener("DOMContentLoaded",()=>{document.getElementById("le").textContent="Mungon konfigurimi i Firebase (skedari firebase-config.js)."})}
function cloudCfg(){if(!db)return;const c={...C};delete c.pass;delete c.user;return db.doc("biz/cfg").set({P,C:c})}
function cloudInv(x){return db&&db.collection("invoices").doc(String(x.id)).set(JSON.parse(JSON.stringify(x)))}
function cloudDel(id){return db&&db.collection("invoices").doc(String(id)).delete()}
async function nextNo(){
 try{return await db.runTransaction(async t=>{const r=db.doc("biz/counter"),s=await t.get(r);const n=Math.max(s.exists?s.data().n:1,C.next||1);t.set(r,{n:n+1});C.next=n+1;return n})}
 catch(e){return Number(String(Date.now()).slice(-7))}
}
