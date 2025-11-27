const S=document.getElementById("loading-screen"),E=document.getElementById("main-content");window.addEventListener("load",()=>{setTimeout(()=>{S&&(S.style.opacity="0",setTimeout(()=>{S.style.display="none"},700)),E&&(E.style.opacity="1",E.style.transition="opacity 0.7s ease-out")},1500)});const m={1:{text:`나는 온라인(ZOOM)
수업을 선호한다`,yes:2,no:3,x:200,y:450,isQuestion:!0},2:{text:`나는 갈라디아서/로마서를
모두 수강했다`,textDesktop:`나는 갈라디아서/
로마서를 모두 수강했다`,yes:14,no:13,x:500,y:300,isQuestion:!0},3:{text:`나는 갈라디아서를
이미 수강했다`,yes:10,no:7,x:500,y:600,isQuestion:!0},4:{book:"고린도전서",time:"1/4-3/1",image:"/playground/wedding-chapel.webp",imagePng:"/playground/wedding-chapel.png",isResult:!0,x:1100,y:100},6:{book:"히브리서",time:"선교관202, 12/30-2/24",image:"/playground/crown.webp",isResult:!0,x:1100,y:530},7:{text:`올 겨울엔
신약 전체를
읽어보고 싶다`,yes:9,no:8,x:800,y:700,isQuestion:!0},8:{book:"하나님의 성품",time:"선교관202, 1/8-2/26",image:"/playground/heart.webp",isResult:!0,x:1100,y:650},9:{book:"성경을 펼쳐라(신약)",time:"아론홀, 1/3-2/21",image:"/playground/holy-bible.webp",isResult:!0,x:1100,y:800},10:{text:`나는 로마서도 수강완료해서
새로운 과목을
공부해보고 싶다`,textDesktop:`로마서도
수강완료해서
새로운 과목을
공부해보고 싶다`,yes:6,no:11,x:800,y:550,isQuestion:!0},11:{book:"로마서",time:"B102, 1/8-2/26",image:"/playground/romans-char.png",isResult:!0,x:1100,y:450},13:{book:"갈라디아서",time:`① 일 오후 12/28-2/22
② 월 오전 12/29-2/23`,image:"/playground/galatians-char.png",isResult:!0,largeCard:!0,x:1100,y:250},14:{text:"내가 좋아하는 사도는? 💌",textDesktop:`내가 좋아하는
사도는? 💌`,yes:4,no:15,yesLabel:"바울",noLabel:"요한",x:800,y:150,isQuestion:!0},15:{book:"요한복음",time:"1/2-2/20",image:"/playground/john.webp",isResult:!0,x:1100,y:120}},g=document.getElementById("flowchart"),p=document.getElementById("arrows-svg"),T=document.getElementById("cover-screen"),_=document.getElementById("start-btn"),v=document.getElementById("restart-widget"),J=document.getElementById("restart-btn");let l=[],$=new Set,O=!1;function K(a){const t=m[a],o=window.innerWidth,e=window.innerHeight,n=o<768,s=n?1:1.5;let i,r;a===1&&!n?(i=o*.35,r=e/2):n?(i=o/2,r=e*.4):(i=o/2,r=e/2);const c=i-t.x*s,u=r-t.y*s;g&&(g.style.transform=`translate(${c}px, ${u}px) scale(${s})`),p&&(p.style.transform=`translate(${c}px, ${u}px) scale(${s})`)}function H(a,t,o,e,n,s,i){const r=n==="yes"?"#42A5F5":"#F06292",c=n==="yes"?"url(#pencil-green)":"url(#pencil-pink)",u=80,b=o-a,x=e-t,d=Math.atan2(x,b),L=a+u*Math.cos(d),F=t+u*Math.sin(d),Q=Object.values(m).find(k=>k.x===o&&k.y===e)?.isResult||!1;let h,f;if(Q){const k=window.innerWidth<768,A=k?80:90,C=k?80:90,I=Math.abs(d),R=Math.atan2(C,A);I<R||I>Math.PI-R?(h=o-Math.sign(Math.cos(d))*A,f=e-A*Math.tan(d)*Math.sign(Math.cos(d))):(h=o-C/Math.tan(d)*Math.sign(Math.sin(d)),f=e-Math.sign(Math.sin(d))*C)}else h=o-u*Math.cos(d),f=e-u*Math.sin(d);const z=L+(h-L)*.5,N=F+(f-F)*.5,y=document.createElementNS("http://www.w3.org/2000/svg","path"),j=`M ${L} ${F} Q ${z} ${N}, ${h} ${f}`;y.setAttribute("d",j),y.setAttribute("stroke",r),y.setAttribute("stroke-width","5"),y.setAttribute("fill","none"),y.setAttribute("stroke-linecap","round"),y.setAttribute("filter",c),y.setAttribute("opacity","1"),y.setAttribute("class","arrow-path");const w=document.createElementNS("http://www.w3.org/2000/svg","polygon"),M=14,D=Math.atan2(f-N,h-z),W=h,P=f,Y=h-M*Math.cos(D-Math.PI/6),q=f-M*Math.sin(D-Math.PI/6),X=h-M*Math.cos(D+Math.PI/6),Z=f-M*Math.sin(D+Math.PI/6);w.setAttribute("points",`${W},${P} ${Y},${q} ${X},${Z}`),w.setAttribute("fill",r),w.setAttribute("filter",c),w.setAttribute("opacity","1"),w.setAttribute("class","arrow-head"),p?.appendChild(y),p?.appendChild(w)}function B(a){if($.has(a))return;$.add(a);const t=m[a],o=document.createElement("div");if(o.id=`node-${a}`,o.className="absolute",o.style.left=`${t.x}px`,o.style.top=`${t.y}px`,o.style.transform="translate(-50%, -50%)",o.style.opacity="0",o.style.transition="opacity 0.5s ease-out",t.isResult){const e=window.innerWidth<768,n=t.largeCard?"200px":"180px",s=t.largeCard?"220px":"185px";o.innerHTML=`
					<div class="relative" style="width: ${n}; height: ${s};">
						<!-- Background box with crayon effect and doodles -->
						<div class="bg-white rounded-xl shadow-lg border-4 absolute inset-0" style="border-color: #F8BBD0; filter: url(#crayon-texture); padding: 1rem; overflow: hidden;">
							<!-- Doodle pattern -->
							<svg style="position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.15; pointer-events: none;">
								<!-- Stars -->
								<path d="M30,20 L32,26 L38,26 L33,30 L35,36 L30,32 L25,36 L27,30 L22,26 L28,26 Z" fill="none" stroke="#FFD700" stroke-width="1.5"/>
								<path d="M250,40 L252,45 L257,45 L253,48 L255,53 L250,49 L245,53 L247,48 L243,45 L248,45 Z" fill="none" stroke="#6FA8DC" stroke-width="1.5"/>

								<!-- Hearts -->
								<path d="M80,25 Q75,20 70,25 Q65,20 60,25 Q60,32 70,40 Q80,32 80,25 Z" fill="none" stroke="#FF6B9D" stroke-width="1.5"/>
								<path d="M200,80 Q195,75 190,80 Q185,75 180,80 Q180,87 190,95 Q200,87 200,80 Z" fill="none" stroke="#FFD700" stroke-width="1.5"/>

								<!-- Circles -->
								<circle cx="100" cy="70" r="8" fill="none" stroke="#6FA8DC" stroke-width="1.5"/>
								<circle cx="270" cy="25" r="6" fill="none" stroke="#FF6B9D" stroke-width="1.5"/>
								<circle cx="50" cy="90" r="5" fill="none" stroke="#FFD700" stroke-width="1.5"/>

								<!-- Small dots -->
								<circle cx="150" cy="30" r="2" fill="#6FA8DC"/>
								<circle cx="120" cy="95" r="2" fill="#FF6B9D"/>
								<circle cx="230" cy="65" r="2" fill="#FFD700"/>
								<circle cx="180" cy="35" r="2" fill="#6FA8DC"/>

								<!-- Zigzag lines -->
								<path d="M40,60 L45,55 L50,60 L55,55" fill="none" stroke="#6FA8DC" stroke-width="1.5"/>
								<path d="M220,100 L225,95 L230,100 L235,95" fill="none" stroke="#FF6B9D" stroke-width="1.5"/>
							</svg>
						</div>
						<!-- Text layer on top without filter -->
						<div class="absolute inset-0 flex flex-col justify-between" style="padding: ${e?"0.75rem":"1rem"};">
							<div class="flex-1 flex flex-col items-center justify-center">
								${t.image?`
								<div class="mb-2">
									<picture>
										<source type="image/webp" srcset="${t.image}">
										<img src="${t.image.replace(".webp",".png")}" alt="${t.book}" loading="lazy"
											style="width: ${e?"3rem":"3.5rem"}; height: ${e?"3rem":"3.5rem"}; border-radius: 50%; object-fit: cover; border: 2px solid #D4C5B9;">
									</picture>
								</div>
								`:""}
								<div class="text-center mb-1">
									<a href="https://www.beekorea.org/lms/seminar/" target="_blank" rel="noopener noreferrer" class="font-bold" style="font-family: 'Ongeullip Cocoa'; color: #6B5B4F; font-size: ${e?"0.95rem":"1.1rem"}; cursor: pointer; text-decoration: none;">${t.book}</a>
								</div>
								<div class="text-center">
									<p style="font-family: 'Ongeullip Cocoa'; font-weight: 700; color: #8B7355; font-size: ${e?"0.75rem":"0.85rem"}; white-space: pre-line;">${t.time}</p>
								</div>
							</div>
							<!-- Action buttons at bottom -->
							<div class="flex gap-2 justify-center" style="margin-top: 0.5rem; align-items: stretch;">
								<a href="https://www.beekorea.org/lms/accounts/signup/" target="_blank" rel="noopener noreferrer"
									class="relative rounded-lg font-bold hover:scale-105 transition-all duration-200"
									style="font-family: 'Ongeullip Cocoa'; padding: ${e?"0.5rem 0.5rem":"0.5rem 0.75rem"}; font-size: ${e?"0.7rem":"0.75rem"}; display: flex; align-items: center; justify-content: center; min-height: ${e?"2rem":"auto"}; width: calc(50% - 0.25rem); min-width: 70px;">
									<span class="absolute inset-0 rounded-lg" style="background: linear-gradient(135deg, #6FA8DC 0%, #5B9BD5 100%); filter: url(#crayon-texture);"></span>
									<span class="relative text-white text-center" style="text-shadow: 0 1px 2px rgba(0,0,0,0.3);">회원가입</span>
								</a>
								<a href="https://www.beekorea.org/lms/seminar/" target="_blank" rel="noopener noreferrer"
									class="relative rounded-lg font-bold hover:scale-105 transition-all duration-200"
									style="font-family: 'Ongeullip Cocoa'; padding: ${e?"0.5rem 0.5rem":"0.5rem 0.75rem"}; font-size: ${e?"0.7rem":"0.75rem"}; display: flex; align-items: center; justify-content: center; min-height: ${e?"2rem":"auto"}; width: calc(50% - 0.25rem); min-width: 70px;">
									<span class="absolute inset-0 rounded-lg" style="background: linear-gradient(135deg, #FF6B9D 0%, #E85A8B 100%); filter: url(#crayon-texture);"></span>
									<span class="relative text-white text-center" style="text-shadow: 0 1px 2px rgba(0,0,0,0.3);">수강신청</span>
								</a>
							</div>
						</div>
					</div>
				`}else{const e=window.innerWidth<768,n=e?"9rem":"10rem",s=e?"0.8rem":"0.875rem",i=e?"75px":"80px",r=e?"44px":"46px",c=e?"0.85rem":"0.9rem",u=l.length>1,b=t.yesLabel||"YES",x=t.noLabel||"NO",d=!e&&t.textDesktop?t.textDesktop:t.text;o.innerHTML=`
					<div class="relative">
						<!-- Background circle with crayon effect -->
						<div class="rounded-full bg-white shadow-lg border-4 absolute" style="width: ${n}; height: ${n}; border-color: #FFD54F; filter: url(#crayon-circle);"></div>
						<!-- Text layer on top without filter -->
						<div class="rounded-full flex items-center justify-center relative" style="width: ${n}; height: ${n}; padding: ${e?"0.75rem":"1rem"};">
							<h3 class="text-center whitespace-pre-line leading-tight" style="font-family: 'Ongeullip Cocoa'; font-weight: 700; color: #5D4E37; font-size: ${s};">${d}</h3>
						</div>
						<div class="button-container absolute left-1/2 transform -translate-x-1/2 flex gap-2" style="bottom: -4rem; z-index: 100; align-items: center; justify-content: center; display: flex;">
							<button
								class="yes-btn rounded-lg font-bold hover:scale-105 transition-all duration-200 shadow-md"
								style="position: relative; pointer-events: auto; cursor: pointer; z-index: 100; width: ${i}; height: ${r}; padding: 0; display: flex; align-items: center; justify-content: center; box-sizing: border-box; flex-shrink: 0;"
								data-node="${a}"
								data-next="${t.yes}"
							>
								<span class="rounded-lg" style="position: absolute; inset: 0; background: linear-gradient(135deg, #6FA8DC 0%, #5B9BD5 100%); filter: url(#crayon-texture); z-index: 1;"></span>
								<span style="position: relative; z-index: 2; font-family: 'Ongeullip Cocoa'; font-weight: 900; color: white; font-size: ${c}; pointer-events: none; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">${b}</span>
							</button>
							<button
								class="no-btn rounded-lg font-bold hover:scale-105 transition-all duration-200 shadow-md"
								style="position: relative; pointer-events: auto; cursor: pointer; z-index: 100; width: ${i}; height: ${r}; padding: 0; display: flex; align-items: center; justify-content: center; box-sizing: border-box; flex-shrink: 0;"
								data-node="${a}"
								data-next="${t.no}"
							>
								<span class="rounded-lg" style="position: absolute; inset: 0; background: linear-gradient(135deg, #FF6B9D 0%, #E85A8B 100%); filter: url(#crayon-texture); z-index: 1;"></span>
								<span style="position: relative; z-index: 2; font-family: 'Ongeullip Cocoa'; font-weight: 900; color: white; font-size: ${c}; pointer-events: none; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">${x}</span>
							</button>
						</div>
						${u?`
						<div class="back-button-container absolute left-1/2 transform -translate-x-1/2" style="bottom: ${e?"-7.5rem":"-9rem"}; z-index: 100;">
							<button
								class="back-btn rounded-full hover:scale-110 shadow-md"
								style="background: #D0D0D0; font-family: 'Ongeullip Cocoa'; font-weight: 900; color: white; pointer-events: auto; cursor: pointer; padding: 0; display: flex; align-items: center; justify-content: center; width: ${e?"44px":"48px"}; height: ${e?"44px":"48px"}; font-size: ${e?"1.3rem":"1.5rem"}; transition: all 0.2s ease; line-height: 0; filter: url(#crayon-texture); -webkit-tap-highlight-color: transparent;"
								data-node="${a}"
							>
								<span style="pointer-events: none; display: block; margin-top: 3px;">←</span>
							</button>
						</div>
						`:""}
					</div>
				`}if(g?.appendChild(o),t.isResult){const e=window.innerWidth,n=window.innerHeight,s=e<768,i=s?.9:1.5,c=e*(s?.5:.65),u=s?n*.4:n/2,b=c-t.x*i,x=u-t.y*i;g&&(g.style.transform=`translate(${b}px, ${x}px) scale(${i})`),p&&(p.style.transform=`translate(${b}px, ${x}px) scale(${i})`)}else K(a);if(setTimeout(()=>{o.style.opacity="1"},100),t.isResult&&setTimeout(()=>{v&&(v.classList.remove("hidden"),setTimeout(()=>{v.style.opacity="1"},100))},500),!t.isResult){const e=o.querySelector(".yes-btn"),n=o.querySelector(".no-btn"),s=o.querySelector(".back-btn");e&&!e.hasAttribute("data-listener-attached")&&(e.setAttribute("data-listener-attached","true"),e.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation();const r=parseInt(e.getAttribute("data-node")||"0"),c=parseInt(e.getAttribute("data-next")||"0");G(r,c,"yes")},{once:!1})),n&&!n.hasAttribute("data-listener-attached")&&(n.setAttribute("data-listener-attached","true"),n.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation();const r=parseInt(n.getAttribute("data-node")||"0"),c=parseInt(n.getAttribute("data-next")||"0");G(r,c,"no")},{once:!1})),s&&!s.hasAttribute("data-listener-attached")&&(s.setAttribute("data-listener-attached","true"),s.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),U()},{once:!1}),s.addEventListener("mouseenter",()=>{s.style.filter="url(#crayon-texture)"}),s.addEventListener("mouseleave",()=>{s.style.filter="none"}))}}function U(){if(l.length<=1)return;const a=l[l.length-1],t=document.getElementById(`node-${a}`);t&&t.remove(),$.delete(a),l.pop();const o=l[l.length-1],e=document.getElementById(`node-${o}`);e&&e.remove(),$.delete(o),p&&p.querySelectorAll(".arrow-path, .arrow-head").forEach(s=>s.remove());for(let n=0;n<l.length-1;n++){const s=m[l[n]],i=m[l[n+1]],r=s.yes===l[n+1]?"yes":"no";H(s.x,s.y,i.x,i.y,r,!0,l[n])}B(o)}function G(a,t,o){if($.has(t))return;l.push(t);const n=document.getElementById(`node-${a}`)?.querySelectorAll("button");n?.forEach(r=>{r.disabled=!0,r.style.opacity="0",r.style.pointerEvents="none"});const s=m[a],i=m[t];H(s.x,s.y,i.x,i.y,o),setTimeout(()=>{n?.forEach(r=>r.remove())},300),setTimeout(()=>{B(t)},300)}_?.addEventListener("click",()=>{O||(O=!0,T&&(T.style.opacity="0",setTimeout(()=>{T.style.display="none"},700)),setTimeout(()=>{B(1),l=[1]},800))});l=[];J?.addEventListener("click",()=>{v&&(v.style.opacity="0",setTimeout(()=>{v.classList.add("hidden")},300)),l=[],$.clear(),g&&(g.innerHTML=""),p&&(p.innerHTML=`
				<defs>
					<filter id="pencil-green">
						<feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="5" result="noise" seed="2" />
						<feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
						<feGaussianBlur stdDeviation="0.5" />
					</filter>
					<filter id="pencil-pink">
						<feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="5" result="noise" seed="5" />
						<feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
						<feGaussianBlur stdDeviation="0.5" />
					</filter>
					<filter id="crayon-texture">
						<feTurbulence type="fractalNoise" baseFrequency="3" numOctaves="4" result="noise" seed="10" />
						<feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
						<feGaussianBlur stdDeviation="0.4" />
					</filter>
					<filter id="crayon-circle">
						<feTurbulence type="fractalNoise" baseFrequency="3.5" numOctaves="6" result="noise" seed="15" />
						<feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
						<feGaussianBlur stdDeviation="0.8" />
					</filter>
					<filter id="crayon-text">
						<feTurbulence type="fractalNoise" baseFrequency="4" numOctaves="3" result="noise" seed="20" />
						<feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
						<feGaussianBlur stdDeviation="0.2" />
					</filter>
				</defs>
			`),setTimeout(()=>{B(1),l=[1]},400)});
