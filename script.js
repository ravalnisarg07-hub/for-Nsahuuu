/* ===== EDIT YOUR MESSAGES HERE ===== */
const DAYS=[
 {e:'🌸',col:'#FFD6E7',t:'Today, just breathe.',m:"Hey. First thing: you don't have to be okay today. You don't have to explain anything to anyone either. If all you do is get through the day, that counts.",a:'Breathe in for 4, out for 4. Five times. Shoulders down.',c:'Slow is allowed.'},
 {e:'🌷',col:'#FFC1D9',t:"You're allowed to miss someone.",m:"Missing someone doesn't mean you're going backwards. It just means it mattered. You don't have to wake up tomorrow and stop missing everything. Healing doesn't work like that.",a:'Write the feeling on paper, fold it up, and put it away for now.',c:'Your feelings are valid.'},
 {e:'☁️',col:'#F3D9FF',t:'Be gentle with yourself.',m:"Notice how you talk to yourself today. You would never say those things to a friend in your place. So please don't say them to you either.",a:'Drink a full glass of water and eat something warm.',c:"You're not behind on anything."},
 {e:'⭐',col:'#FFE1EC',t:"You're doing better than you think.",m:"Some days it won't feel like progress. But you've gotten through four days of something really hard. That is not nothing.",a:"Name three tiny things you handled this week. 'Showered' counts.",c:'Small things count.'},
 {e:'🎀',col:'#E9D5FF',t:"Let's distract your brain today.",m:"Today's job is to be a little silly. Not to run from feelings forever, just to give your heart a short break. Go play something.",a:'Play one game below, then text someone who makes you laugh.',c:'Smiling today is not a betrayal of anything.'},
 {e:'🌙',col:'#FFD0E4',t:'Look how far you\'ve come.',m:"Remember how Day 1 felt? Maybe today is still heavy in places, but it's a different kind of heavy. I notice things like that. Proud of you.",a:'Go outside for ten minutes. Sun, air, no destination.',c:"You've been braver than you realize."},
 {e:'🌸',col:'#FFC1D9',t:'One week. One step at a time.',m:"One week. You didn't have to do any of it perfectly. You got up, you kept going, you let yourself feel things. That's a lot.",a:'Pick one thing to do just for you this weekend. Then do it.',c:'Healing is not a finish line.'}
];
const FINAL="You don't need to have everything figured out right now.<br><br>You just need to keep choosing yourself, one little day at a time.<br><br>And whenever life feels a little too heavy...<br><br>you know where to find this little corner. 🫂🌸";
const OPEN=[
 ['💌','Open when you miss them',"Missing someone is just what caring looks like after something ends. It's allowed. Let it come, let it pass. Drink some water, then do one tiny thing for yourself."],
 ['🌧️',"Open when you're having a bad day","Bad day, not a bad life. You don't have to fix anything today. Just get through the next hour and be kind to yourself in it."],
 ['🥺','Open when you feel alone',"It can feel lonely, but you're not alone. A 'hey' to someone who cares is more than enough. You're always allowed to reach out."],
 ['😡','Open when you\'re angry',"Be angry. It's just a lot of feelings with nowhere to go. Walk fast, scribble hard on paper, squish a pillow. Then unclench your jaw."],
 ['😴',"Open when you can't sleep","Phone down, lights low. Thoughts get louder at night and they exaggerate. Nothing needs solving at 3 a.m. Breathe in 4, out 4. Rest is enough."],
 ['🫂','Open when you need a hug',"Consider this a very long, very tight hug. Wrap yourself in a blanket. Squeeze a pillow for ten seconds. It counts."],
 ['😂','Open when you need a distraction',"Go catch the panda. Or watch the funniest video you know. Silly is allowed, and so is laughing."]
];
const NOTES=["You've spent so much time taking care of everything around you. Please remember to take care of yourself too.","Even on the days when you don't feel like yourself, you're still someone worth caring for.","You don't have to be strong every minute."];
const FORTUNES=["Today's forecast: soft, slow and a little better.","Something small will make you smile today.","You're allowed to rest without earning it.","Future you is quietly proud of you.","A snack is the correct next step."];
const SECRETS=["You found a secret star. You're pretty great. ⭐","Fun fact: you're allowed to take up space. 🌸","Psst... drink some water. 👀"];
const BUBBLES=["Drink some water. 👀","You're doing okay.","One more day?","Posture check, then a deep breath. 🐼","Want to play something? 🎮"];
const MOODS={sad:['🥺','Sad',"Come here 🫂 Today doesn't need to be a productive day."],meh:['😐','Meh',"Meh is a real feeling too. We can just sit here for a bit. 🐼"],tired:['😴','Tired',"Water first, then a blanket. A nap is a valid plan. 💤"],angry:['😡','Angry',"Okay. Be as angry as you need to be. Squish a pillow. Your feelings make sense. 😤"],better:['😊','Better',"SEE?? 👀 One tiny smile detected."]};
const PANDA={happy:'🐼',tea:'🐼🍵',sleep:'🐼💤',heart:'🐼💗',cheer:'🐼🎉',wave:'🐼👋'};
const CATCH_SECONDS=15; /* game setting */

/* ===== Code ===== */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const store={get:(k,d)=>{try{const v=localStorage.getItem('nc_'+k);return v===null?d:JSON.parse(v)}catch(e){return d}},set:(k,v)=>{try{localStorage.setItem('nc_'+k,JSON.stringify(v))}catch(e){}}};
const calm=matchMedia('(prefers-reduced-motion:reduce)').matches;
const pick=a=>a[Math.floor(Math.random()*a.length)];
let done=store.get('done',[]),ptimer;

function fall(list,n,dur){if(calm)return;for(let i=0;i<n;i++){const s=document.createElement('span');s.className='p';s.textContent=pick(list);s.style.cssText=`left:${Math.random()*100}%;font-size:${14+Math.random()*14}px;animation-duration:${dur+Math.random()*4}s;animation-delay:${Math.random()*(n>5?1.5:0)}s`;$('#fx').appendChild(s);setTimeout(()=>s.remove(),(dur+6)*1000)}}
const confetti=()=>fall(['🎀','🌸','⭐','💗','✨'],40,3);
setInterval(()=>{if(!document.hidden)fall(['🌸','☁️','✨','💗'],1,9)},1400);

function pandaSay(t,s='happy'){$('#pp').textContent=PANDA[s]||'🐼';$('#pt').textContent=t;$('#pt').classList.add('show');clearTimeout(ptimer);ptimer=setTimeout(()=>{$('#pt').classList.remove('show');$('#pp').textContent='🐼'},4500)}
const modal=h=>{$('#mc').innerHTML=h;$('#modal').classList.remove('hide');$('#close').focus()};
$('#close').onclick=()=>$('#modal').classList.add('hide');
$('#modal').onclick=e=>{if(e.target.id==='modal')$('#close').click()};
document.onkeydown=e=>{if(e.key==='Escape')$('#close').click()};

$('#enter').onclick=()=>{$('#intro').style.opacity=0;setTimeout(()=>{$('#intro').classList.add('hide');$('#app').classList.remove('hide');$('#pb').classList.remove('hide');window.scrollTo(0,0);pandaSay("Hey you. Drink some water. 👀",'tea')},600)};

function render(){
 $('#days').innerHTML=DAYS.map((d,i)=>`<button class="day${done.includes(i)?' done':''}" style="--c:${d.col}" data-i="${i}"><span class="env">${d.e}</span><b>Day 0${i+1}</b><small>${d.t}</small></button>`).join('');
 $('#prog').innerHTML=DAYS.map((_,i)=>`<i class="dot${done.includes(i)?' on':''}" id="d${i}"></i>`).join('');
}
function mark(i){if(done.includes(i))return;done.push(i);store.set('done',done);render();$('#d'+i).classList.add('pop')}
function openDay(i){
 const d=DAYS[i];mark(i);
 const tail=i===6?`<p class="hand">Look at you.<br>You made it through the week. 🌸</p><button id="gbox" aria-label="Open your little surprise">🎁</button><p><b>Open your little surprise</b></p><div id="gres"></div>`:`<button class="btn" id="tmr">See you tomorrow? 🌙</button>`;
 modal(`<div class="big">${d.e}</div><h3>Day ${i+1}</h3><p class="hand">${d.m}</p><p><b>One tiny thing:</b> ${d.a}</p><p class="cl">${d.c}</p>${tail}`);
 if(i===6)$('#gbox').onclick=()=>{const g=$('#gbox');g.classList.add('shake');setTimeout(()=>{g.outerHTML='<div class="big">🎀</div>';$('#gres').innerHTML=`<p class="hand">${FINAL}</p><div class="panda wave">🐼👋</div>`;confetti();pandaSay('You did it!','cheer')},600)};
 else $('#tmr').onclick=()=>{$('#close').click();pandaSay(i<6?'One more day? No rush. 🌙':'','sleep')};
}
$('#days').onclick=e=>{const b=e.target.closest('.day');if(!b)return;const i=+b.dataset.i;b.classList.add('opening');setTimeout(()=>openDay(i),calm?0:450)};

let ni=0;$('#need').onclick=()=>{$('#note').textContent=NOTES[ni++%NOTES.length];pandaSay('Take your time.','heart')};

$('#ow').innerHTML=OPEN.map((o,i)=>`<button class="ow" data-i="${i}"><div style="font-size:1.8rem">${o[0]}</div>${o[1]}</button>`).join('');
$('#ow').onclick=e=>{const b=e.target.closest('.ow');if(!b)return;const o=OPEN[+b.dataset.i];modal(`<div class="big">${o[0]}</div><h3>${o[1]}</h3><p class="hand">${o[2]}</p>`)};

/* Game 1: Catch the Panda */
let sc=0,mv,tm;
const place=()=>{const a=$('#arena'),p=$('#cp');p.style.left=Math.random()*(a.clientWidth-60)+'px';p.style.top=Math.random()*(a.clientHeight-60)+'px'};
$('#cb').textContent=store.get('best',0);
$('#cstart').onclick=()=>{clearInterval(mv);clearInterval(tm);sc=0;let t=CATCH_SECONDS;$('#cs').textContent=0;$('#ct').textContent=t;$('#cp').classList.remove('hide');place();mv=setInterval(place,850);
 tm=setInterval(()=>{t--;$('#ct').textContent=t;if(t<=0){clearInterval(mv);clearInterval(tm);$('#cp').classList.add('hide');const b=Math.max(store.get('best',0),sc);store.set('best',b);$('#cb').textContent=b;pandaSay(sc>=10?'WOW. Professional panda catcher!':'Good try! Again?',sc>=10?'cheer':'happy');if(sc>=10)fall(['⭐','💗'],12,3)}},1000)};
$('#cp').onclick=()=>{sc++;$('#cs').textContent=sc;place()};

/* Game 2: Memory Match */
function memory(){
 let first=null,lock=false,m=0;$('#mm').textContent=0;
 const cards=['🐼','🐰','💗','🌸','⭐','☁️'];const deck=[...cards,...cards].sort(()=>Math.random()-.5);
 $('#mg').innerHTML=deck.map(c=>`<button class="mc" data-c="${c}" aria-label="card"><span>${c}</span></button>`).join('');
 $$('#mg .mc').forEach(b=>b.onclick=()=>{
  if(lock||b.classList.contains('up'))return;b.classList.add('up');
  if(!first){first=b;return}
  m++;$('#mm').textContent=m;
  if(first.dataset.c===b.dataset.c){first.classList.add('ok');b.classList.add('ok');first=null;if($$('#mg .ok').length===12){pandaSay('You matched them all! 🎉','cheer');fall(['🎀','🌸'],14,3)}}
  else{lock=true;const f=first;first=null;setTimeout(()=>{f.classList.remove('up');b.classList.remove('up');lock=false},700)}
 });
}
$('#mreset').onclick=memory;memory();

/* Game 3: Mood */
$('#moods').innerHTML=Object.keys(MOODS).map(k=>`<button class="btn" data-k="${k}">${MOODS[k][0]} ${MOODS[k][1]}</button>`).join('');
$('#moods').onclick=e=>{const b=e.target.closest('button');if(!b)return;$('#mres').textContent=MOODS[b.dataset.k][2];if(b.dataset.k==='better')fall(['😊','🌸','⭐'],10,3)};

/* Calm corner */
let bi=null;
$('#bstart').onclick=()=>{
 if(bi){clearInterval(bi);bi=null;$('#circle').classList.remove('go');$('#btxt').textContent='Well done. Come back anytime.';$('#bstart').textContent='Start breathing';return}
 $('#circle').classList.add('go');$('#bstart').textContent='Stop';let inn=true;
 const s=()=>{$('#btxt').textContent=inn?'Breathe in...':'Breathe out...';inn=!inn};s();bi=setInterval(s,4000)};

/* Little surprises */
$('#fortune').onclick=()=>{$('#fres').textContent=pick(FORTUNES)};
$('#star').onclick=()=>pandaSay(pick(SECRETS),'heart');
$('#heart').onclick=()=>modal('<div class="big">💗</div><p class="hand">Secret heart found. A tiny note: you matter a lot, exactly as you are right now.</p>');
$('#dont').onclick=()=>modal('<div class="big">🐰</div><h3>I said do not click...</h3><p class="hand">Okay fine. This bunny thinks you are wonderful and wants you to have a snack.</p>');
const bloom=['🌱','🌿','🌷','🌸'];let bl=0;
$('#flower').onclick=()=>{bl=(bl+1)%bloom.length;$('#flower').textContent=bloom[bl];if(bl===3)pandaSay('It bloomed! Like you will. 🌸','cheer')};

/* Panda widget, night mode */
$('#pp').onclick=()=>pandaSay(pick(BUBBLES));
setInterval(()=>{if(!document.hidden&&$('#modal').classList.contains('hide')&&!$('#app').classList.contains('hide'))pandaSay(pick(BUBBLES))},40000);
new IntersectionObserver((en,ob)=>{if(en[0].isIntersecting){pandaSay('Okay, now let\'s play something. 🎮');ob.disconnect()}},{threshold:.3}).observe($('#s-play'));
const nightOn=store.get('night',null),h=new Date().getHours();
if(nightOn===null?(h>=21||h<5):nightOn)document.body.classList.add('night');
$('#night').onclick=()=>{store.set('night',document.body.classList.toggle('night'))};
render();
