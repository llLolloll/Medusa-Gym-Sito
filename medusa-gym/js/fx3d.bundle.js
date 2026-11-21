var zd=0,jh=1,Gd=2;var _f=1,Hl=2,Hn=3,Dn=0,kt=1,nn=2,Ln=0,vs=1,Ss=2,Kh=3,Zh=4,Vd=5,ki=100,Wd=101,Hd=102,Xd=103,qd=104,Yd=200,jd=201,Kd=202,Zd=203,Tc=204,Cc=205,Jd=206,Qd=207,$d=208,ep=209,tp=210,np=211,ip=212,sp=213,rp=214,Ec=0,Rc=1,Pc=2,ws=3,Ic=4,Lc=5,Dc=6,Nc=7,yf=0,ap=1,op=2,xi=0,Xl=1,ql=2,Yl=3,zr=4,cp=5,jl=6,Kl=7,Jh="attached",lp="detached",Mf=300,As=301,Ts=302,Uc=303,Fc=304,Ao=306,Kn=1e3,qn=1001,Sr=1002,zt=1003,Zl=1004;var gs=1005;var Bt=1006,gr=1007;var dn=1008;var Zn=1009,Sf=1010,wf=1011,wr=1012,Jl=1013,Gi=1014,En=1015,an=1016,Ql=1017,$l=1018,Cs=1020,Af=35902,Tf=1021,Cf=1022,jt=1023,Ef=1024,Rf=1025,_s=1026,Es=1027,eh=1028,th=1029,Pf=1030,nh=1031;var ih=1033,Ua=33776,Fa=33777,Oa=33778,Ba=33779,Oc=35840,Bc=35841,kc=35842,zc=35843,Gc=36196,Vc=37492,Wc=37496,Hc=37808,Xc=37809,qc=37810,Yc=37811,jc=37812,Kc=37813,Zc=37814,Jc=37815,Qc=37816,$c=37817,el=37818,tl=37819,nl=37820,il=37821,ka=36492,sl=36494,rl=36495,If=36283,al=36284,ol=36285,cl=36286;var Rs=2300,Ps=2301,Ho=2302,Qh=2400,$h=2401,eu=2402,hp=2500;var Lf=0,To=1,Gr=2,up=3200,fp=3201;var Df=0,dp=1,In="",St="srgb",Gt="srgb-linear",Co="linear",ct="srgb";var Ji=7680;var tu=519,pp=512,mp=513,gp=514,Nf=515,bp=516,xp=517,vp=518,_p=519,ll=35044,Uf=35048;var nu="300 es",Yn=2e3,za=2001,vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],iu=1234567,br=Math.PI/180,Is=180/Math.PI;function mn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Tt(i,e,t){return Math.max(e,Math.min(t,i))}function sh(i,e){return(i%e+e)%e}function yp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Mp(i,e,t){return i!==e?(t-i)/(e-i):0}function xr(i,e,t){return(1-t)*i+t*e}function Sp(i,e,t,n){return xr(i,e,1-Math.exp(-t*n))}function wp(i,e=1){return e-Math.abs(sh(i,e*2)-e)}function Ap(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Tp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Cp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ep(i,e){return i+Math.random()*(e-i)}function Rp(i){return i*(.5-Math.random())}function Pp(i){i!==void 0&&(iu=i);let e=iu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ip(i){return i*br}function Lp(i){return i*Is}function Dp(i){return(i&i-1)===0&&i!==0}function Np(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Up(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fp(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*f,o*l);break;case"YZY":i.set(c*f,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*f,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ff={DEG2RAD:br,RAD2DEG:Is,generateUUID:mn,clamp:Tt,euclideanModulo:sh,mapLinear:yp,inverseLerp:Mp,lerp:xr,damp:Sp,pingpong:wp,smoothstep:Ap,smootherstep:Tp,randInt:Cp,randFloat:Ep,randFloatSpread:Rp,seededRandom:Pp,degToRad:Ip,radToDeg:Lp,isPowerOfTwo:Dp,ceilPowerOfTwo:Np,floorPowerOfTwo:Up,setQuaternionFromProperEuler:Fp,normalize:ht,denormalize:Cn},Ne=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ze=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],b=s[0],m=s[3],d=s[6],_=s[1],v=s[4],x=s[7],T=s[2],w=s[5],A=s[8];return r[0]=a*b+o*_+c*T,r[3]=a*m+o*v+c*w,r[6]=a*d+o*x+c*A,r[1]=l*b+h*_+u*T,r[4]=l*m+h*v+u*w,r[7]=l*d+h*x+u*A,r[2]=f*b+p*_+g*T,r[5]=f*m+p*v+g*w,r[8]=f*d+p*x+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*r,p=l*r-a*c,g=t*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=u*b,e[1]=(s*l-h*n)*b,e[2]=(o*n-s*a)*b,e[3]=f*b,e[4]=(h*t-s*c)*b,e[5]=(s*r-o*t)*b,e[6]=p*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xo.makeScale(e,t)),this}rotate(e){return this.premultiply(Xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Xo=new Ze;function Of(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Op(){let i=Ar("canvas");return i.style.display="block",i}var su={};function pr(i){i in su||(su[i]=!0,console.warn(i))}function Bp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function kp(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zp(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var et={enabled:!0,workingColorSpace:Gt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ct&&(i.r=jn(i.r),i.g=jn(i.g),i.b=jn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ct&&(i.r=ys(i.r),i.g=ys(i.g),i.b=ys(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===In?Co:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ru=[.64,.33,.3,.6,.15,.06],au=[.2126,.7152,.0722],ou=[.3127,.329],cu=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lu=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);et.define({[Gt]:{primaries:ru,whitePoint:ou,transfer:Co,toXYZ:cu,fromXYZ:lu,luminanceCoefficients:au,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:ru,whitePoint:ou,transfer:ct,toXYZ:cu,fromXYZ:lu,luminanceCoefficients:au,outputColorSpaceConfig:{drawingBufferColorSpace:St}}});var Qi,hl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=Ar("canvas")),Qi.width=e.width,Qi.height=e.height;let n=Qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ar("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=jn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gp=0,Ga=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=mn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(qo(s[a].image)):r.push(qo(s[a]))}else r=qo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function qo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vp=0,Dt=class i extends vi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=qn,s=qn,r=Bt,a=dn,o=jt,c=Zn,l=i.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=mn(),this.name="",this.source=new Ga(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kn:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case Sr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kn:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case Sr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Mf;Dt.DEFAULT_ANISOTROPY=1;var rt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],b=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,x=(p+1)/2,T=(d+1)/2,w=(h+f)/4,A=(u+b)/4,C=(g+m)/4;return v>x&&v>T?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=w/n,r=A/n):x>T?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=w/s,r=C/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=A/r,s=C/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-b)/_,this.z=(f-h)/_,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ul=class extends vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Dt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ga(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nt=class extends ul{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Va=class extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var fl=class extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=b;return}if(u!==b||c!==f||l!==p||h!==g){let m=1-o,d=c*f+l*p+h*g+u*b,_=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){let T=Math.sqrt(v),w=Math.atan2(T,d*_);m=Math.sin(m*w)/T,o=Math.sin(o*w)/T}let x=o*_;if(c=c*m+f*x,l=l*m+p*x,h=h*m+g*x,u=u*m+b*x,m===1-o){let T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*p-l*f,e[t+1]=c*g+h*f+l*u-o*p,e[t+2]=l*g+h*p+o*f-c*u,e[t+3]=h*g-o*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yo.copy(this).projectOnVector(e),this.sub(Yo)}reflect(e){return this.sub(Yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yo=new V,hu=new sn,Kt=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wn):wn.fromBufferAttribute(r,a),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),na.copy(n.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),ia.subVectors(this.max,ir),$i.subVectors(e.a,ir),es.subVectors(e.b,ir),ts.subVectors(e.c,ir),hi.subVectors(es,$i),ui.subVectors(ts,es),Li.subVectors($i,ts);let t=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Li.z,Li.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Li.z,0,-Li.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Li.y,Li.x,0];return!jo(t,$i,es,ts,ia)||(t=[1,0,0,0,1,0,0,0,1],!jo(t,$i,es,ts,ia))?!1:(sa.crossVectors(hi,ui),t=[sa.x,sa.y,sa.z],jo(t,$i,es,ts,ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Bn=[new V,new V,new V,new V,new V,new V,new V,new V],wn=new V,na=new Kt,$i=new V,es=new V,ts=new V,hi=new V,ui=new V,Li=new V,ir=new V,ia=new V,sa=new V,Di=new V;function jo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Di.fromArray(i,r);let o=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),c=e.dot(Di),l=t.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Wp=new Kt,sr=new V,Ko=new V,rn=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Wp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);let t=sr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(sr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(Ko)),this.expandByPoint(sr.copy(e.center).sub(Ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},kn=new V,Zo=new V,ra=new V,fi=new V,Jo=new V,aa=new V,Qo=new V,Ls=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Zo.copy(e).add(t).multiplyScalar(.5),ra.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(Zo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ra),o=fi.dot(this.direction),c=-fi.dot(ra),l=fi.lengthSq(),h=Math.abs(1-a*a),u,f,p,g;if(h>0)if(u=a*c-o,f=a*o-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let b=1/h;u*=b,f*=b,p=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Zo).addScaledVector(ra,f),p}intersectSphere(e,t){kn.subVectors(e.center,this.origin);let n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,s,r){Jo.subVectors(t,e),aa.subVectors(n,e),Qo.crossVectors(Jo,aa);let a=this.direction.dot(Qo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,e);let c=o*this.direction.dot(aa.crossVectors(fi,aa));if(c<0)return null;let l=o*this.direction.dot(Jo.cross(fi));if(l<0||c+l>a)return null;let h=-o*fi.dot(Qo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ye=class i{constructor(e,t,n,s,r,a,o,c,l,h,u,f,p,g,b,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,f,p,g,b,m)}set(e,t,n,s,r,a,o,c,l,h,u,f,p,g,b,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=b,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ns.setFromMatrixColumn(e,0).length(),r=1/ns.setFromMatrixColumn(e,1).length(),a=1/ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,p=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=f-b*l,t[9]=-o*c,t[2]=b-f*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,p=c*u,g=l*h,b=l*u;t[0]=f+b*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=b+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,p=c*u,g=l*h,b=l*u;t[0]=f-b*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=b-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,p=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=g*l-p,t[8]=f*l+b,t[1]=c*u,t[5]=b*l+f,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,p=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=b-f*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+g,t[10]=f-b*u}else if(e.order==="XZY"){let f=a*c,p=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+b,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=b*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hp,e,Xp)}lookAt(e,t,n){let s=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),di.crossVectors(n,en),di.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),di.crossVectors(n,en)),di.normalize(),oa.crossVectors(en,di),s[0]=di.x,s[4]=oa.x,s[8]=en.x,s[1]=di.y,s[5]=oa.y,s[9]=en.y,s[2]=di.z,s[6]=oa.z,s[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],b=n[6],m=n[10],d=n[14],_=n[3],v=n[7],x=n[11],T=n[15],w=s[0],A=s[4],C=s[8],M=s[12],y=s[1],D=s[5],I=s[9],R=s[13],U=s[2],W=s[6],z=s[10],ee=s[14],q=s[3],Z=s[7],fe=s[11],Ce=s[15];return r[0]=a*w+o*y+c*U+l*q,r[4]=a*A+o*D+c*W+l*Z,r[8]=a*C+o*I+c*z+l*fe,r[12]=a*M+o*R+c*ee+l*Ce,r[1]=h*w+u*y+f*U+p*q,r[5]=h*A+u*D+f*W+p*Z,r[9]=h*C+u*I+f*z+p*fe,r[13]=h*M+u*R+f*ee+p*Ce,r[2]=g*w+b*y+m*U+d*q,r[6]=g*A+b*D+m*W+d*Z,r[10]=g*C+b*I+m*z+d*fe,r[14]=g*M+b*R+m*ee+d*Ce,r[3]=_*w+v*y+x*U+T*q,r[7]=_*A+v*D+x*W+T*Z,r[11]=_*C+v*I+x*z+T*fe,r[15]=_*M+v*R+x*ee+T*Ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],b=e[7],m=e[11],d=e[15];return g*(+r*c*u-s*l*u-r*o*f+n*l*f+s*o*p-n*c*p)+b*(+t*c*p-t*l*f+r*a*f-s*a*p+s*l*h-r*c*h)+m*(+t*l*u-t*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+d*(-s*o*h-t*c*u+t*o*f+s*a*u-n*a*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],b=e[13],m=e[14],d=e[15],_=u*m*l-b*f*l+b*c*p-o*m*p-u*c*d+o*f*d,v=g*f*l-h*m*l-g*c*p+a*m*p+h*c*d-a*f*d,x=h*b*l-g*u*l+g*o*p-a*b*p-h*o*d+a*u*d,T=g*u*c-h*b*c-g*o*f+a*b*f+h*o*m-a*u*m,w=t*_+n*v+s*x+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return e[0]=_*A,e[1]=(b*f*r-u*m*r-b*s*p+n*m*p+u*s*d-n*f*d)*A,e[2]=(o*m*r-b*c*r+b*s*l-n*m*l-o*s*d+n*c*d)*A,e[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*p-n*c*p)*A,e[4]=v*A,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*d+t*f*d)*A,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*d-t*c*d)*A,e[7]=(a*f*r-h*c*r+h*s*l-t*f*l-a*s*p+t*c*p)*A,e[8]=x*A,e[9]=(g*u*r-h*b*r-g*n*p+t*b*p+h*n*d-t*u*d)*A,e[10]=(a*b*r-g*o*r+g*n*l-t*b*l-a*n*d+t*o*d)*A,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*p-t*o*p)*A,e[12]=T*A,e[13]=(h*b*s-g*u*s+g*n*f-t*b*f-h*n*m+t*u*m)*A,e[14]=(g*o*s-a*b*s-g*n*c+t*b*c+a*n*m-t*o*m)*A,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*f+t*o*f)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,f=r*l,p=r*h,g=r*u,b=a*h,m=a*u,d=o*u,_=c*l,v=c*h,x=c*u,T=n.x,w=n.y,A=n.z;return s[0]=(1-(b+d))*T,s[1]=(p+x)*T,s[2]=(g-v)*T,s[3]=0,s[4]=(p-x)*w,s[5]=(1-(f+d))*w,s[6]=(m+_)*w,s[7]=0,s[8]=(g+v)*A,s[9]=(m-_)*A,s[10]=(1-(f+b))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ns.set(s[0],s[1],s[2]).length(),a=ns.set(s[4],s[5],s[6]).length(),o=ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],An.copy(this);let l=1/r,h=1/a,u=1/o;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,t.setFromRotationMatrix(An),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Yn){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,g;if(o===Yn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===za)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Yn){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(a-r),f=(t+e)*l,p=(n+s)*h,g,b;if(o===Yn)g=(a+r)*u,b=-2*u;else if(o===za)g=r*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ns=new V,An=new Ye,Hp=new V(0,0,0),Xp=new V(1,1,1),di=new V,oa=new V,en=new V,uu=new Ye,fu=new sn,gn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fu.setFromEuler(this),this.setFromQuaternion(fu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gn.DEFAULT_ORDER="XYZ";var Wa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qp=0,du=new V,is=new sn,zn=new Ye,ca=new V,rr=new V,Yp=new V,jp=new sn,pu=new V(1,0,0),mu=new V(0,1,0),gu=new V(0,0,1),bu={type:"added"},Kp={type:"removed"},ss={type:"childadded",child:null},$o={type:"childremoved",child:null},bt=class i extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new V,t=new gn,n=new sn,s=new V(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Ze}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(pu,e)}rotateY(e){return this.rotateOnAxis(mu,e)}rotateZ(e){return this.rotateOnAxis(gu,e)}translateOnAxis(e,t){return du.copy(e).applyQuaternion(this.quaternion),this.position.add(du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pu,e)}translateY(e){return this.translateOnAxis(mu,e)}translateZ(e){return this.translateOnAxis(gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ca.copy(e):ca.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(rr,ca,this.up):zn.lookAt(ca,rr,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(zn),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bu),ss.child=e,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kp),$o.child=e,this.dispatchEvent($o),$o.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bu),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,Yp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,jp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};bt.DEFAULT_UP=new V(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=new V,Gn=new V,ec=new V,Vn=new V,rs=new V,as=new V,xu=new V,tc=new V,nc=new V,ic=new V,sc=new rt,rc=new rt,ac=new rt,gi=class i{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Tn.subVectors(e,t),s.cross(Tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Tn.subVectors(s,t),Gn.subVectors(n,t),ec.subVectors(e,t);let a=Tn.dot(Tn),o=Tn.dot(Gn),c=Tn.dot(ec),l=Gn.dot(Gn),h=Gn.dot(ec),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vn.x),c.addScaledVector(a,Vn.y),c.addScaledVector(o,Vn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return sc.setScalar(0),rc.setScalar(0),ac.setScalar(0),sc.fromBufferAttribute(e,t),rc.fromBufferAttribute(e,n),ac.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(sc,r.x),a.addScaledVector(rc,r.y),a.addScaledVector(ac,r.z),a}static isFrontFacing(e,t,n,s){return Tn.subVectors(n,t),Gn.subVectors(e,t),Tn.cross(Gn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),Tn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;rs.subVectors(s,n),as.subVectors(r,n),tc.subVectors(e,n);let c=rs.dot(tc),l=as.dot(tc);if(c<=0&&l<=0)return t.copy(n);nc.subVectors(e,s);let h=rs.dot(nc),u=as.dot(nc);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(rs,a);ic.subVectors(e,r);let p=rs.dot(ic),g=as.dot(ic);if(g>=0&&p<=g)return t.copy(r);let b=p*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(as,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return xu.subVectors(r,s),o=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(xu,o);let d=1/(m+b+f);return a=b*d,o=f*d,t.copy(n).addScaledVector(rs,a).addScaledVector(as,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},la={h:0,s:0,l:0};function oc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var He=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=sh(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=oc(a,r,e+1/3),this.g=oc(a,r,e),this.b=oc(a,r,e-1/3)}return et.toWorkingColorSpace(this,s),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let n=Bf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return et.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Tt(Ot.r*255,0,255))*65536+Math.round(Tt(Ot.g*255,0,255))*256+Math.round(Tt(Ot.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Ot.copy(this),t);let n=Ot.r,s=Ot.g,r=Ot.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=St){et.fromWorkingColorSpace(Ot.copy(this),e);let t=Ot.r,n=Ot.g,s=Ot.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(la);let n=xr(pi.h,la.h,t),s=xr(pi.s,la.s,t),r=xr(pi.l,la.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ot=new He;He.NAMES=Bf;var Zp=0,Zt=class extends vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=mn(),this.name="",this.blending=vs,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tc,this.blendDst=Cc,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tc&&(n.blendSrc=this.blendSrc),this.blendDst!==Cc&&(n.blendDst=this.blendDst),this.blendEquation!==ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Jt=class extends Zt{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Mt=new V,ha=new Ne,_t=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ll,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ha.fromBufferAttribute(this,t),ha.applyMatrix3(e),this.setXY(t,ha.x,ha.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ll&&(e.usage=this.usage),e}};var Ha=class extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Xa=class extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nt=class extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}},Jp=0,fn=new Ye,cc=new bt,os=new V,tn=new Kt,ar=new Kt,Lt=new V,xt=class i extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Of(e)?Xa:Ha)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return cc.lookAt(e),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ar.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(tn.min,ar.min),tn.expandByPoint(Lt),Lt.addVectors(tn.max,ar.max),tn.expandByPoint(Lt)):(tn.expandByPoint(ar.min),tn.expandByPoint(ar.max))}tn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Lt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Lt.fromBufferAttribute(o,l),c&&(os.fromBufferAttribute(e,l),Lt.add(os)),s=Math.max(s,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new V,c[C]=new V;let l=new V,h=new V,u=new V,f=new Ne,p=new Ne,g=new Ne,b=new V,m=new V;function d(C,M,y){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),p.sub(f),g.sub(f);let D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(D),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),o[C].add(b),o[M].add(b),o[y].add(b),c[C].add(m),c[M].add(m),c[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,M=_.length;C<M;++C){let y=_[C],D=y.start,I=y.count;for(let R=D,U=D+I;R<U;R+=3)d(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let v=new V,x=new V,T=new V,w=new V;function A(C){T.fromBufferAttribute(s,C),w.copy(T);let M=o[C];v.copy(M),v.sub(T.multiplyScalar(T.dot(M))).normalize(),x.crossVectors(w,M);let D=x.dot(c[C])<0?-1:1;a.setXYZW(C,v.x,v.y,v.z,D)}for(let C=0,M=_.length;C<M;++C){let y=_[C],D=y.start,I=y.count;for(let R=D,U=D+I;R<U;R+=3)A(e.getX(R+0)),A(e.getX(R+1)),A(e.getX(R+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new V,r=new V,a=new V,o=new V,c=new V,l=new V,h=new V,u=new V;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),b=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),p=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?p=c[b]*o.data.stride+o.offset:p=c[b]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new _t(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},vu=new Ye,Ni=new Ls,ua=new rn,_u=new V,fa=new V,da=new V,pa=new V,lc=new V,ma=new V,yu=new V,ga=new V,wt=class extends bt{constructor(e=new xt,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ma.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(lc.fromBufferAttribute(u,e),a?ma.addScaledVector(lc,h):ma.addScaledVector(lc.sub(t),h))}t.add(ma)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(r),Ni.copy(e.ray).recast(e.near),!(ua.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(ua,_u)===null||Ni.origin.distanceToSquared(_u)>(e.far-e.near)**2))&&(vu.copy(r).invert(),Ni.copy(e.ray).applyMatrix4(vu),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=f.length;g<b;g++){let m=f[g],d=a[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,T=v;x<T;x+=3){let w=o.getX(x),A=o.getX(x+1),C=o.getX(x+2);s=ba(this,d,e,n,l,h,u,w,A,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let m=g,d=b;m<d;m+=3){let _=o.getX(m),v=o.getX(m+1),x=o.getX(m+2);s=ba(this,a,e,n,l,h,u,_,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=f.length;g<b;g++){let m=f[g],d=a[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,T=v;x<T;x+=3){let w=x,A=x+1,C=x+2;s=ba(this,d,e,n,l,h,u,w,A,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),b=Math.min(c.count,p.start+p.count);for(let m=g,d=b;m<d;m+=3){let _=m,v=m+1,x=m+2;s=ba(this,a,e,n,l,h,u,_,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Qp(i,e,t,n,s,r,a,o){let c;if(e.side===kt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Dn,o),c===null)return null;ga.copy(o),ga.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ga);return l<t.near||l>t.far?null:{distance:l,point:ga.clone(),object:i}}function ba(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,fa),i.getVertexPosition(c,da),i.getVertexPosition(l,pa);let h=Qp(i,e,t,n,fa,da,pa,yu);if(h){let u=new V;gi.getBarycoord(yu,fa,da,pa,u),s&&(h.uv=gi.getInterpolatedAttribute(s,o,c,l,u,new Ne)),r&&(h.uv1=gi.getInterpolatedAttribute(r,o,c,l,u,new Ne)),a&&(h.normal=gi.getInterpolatedAttribute(a,o,c,l,u,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new V,materialIndex:0};gi.getNormal(fa,da,pa,f.normal),h.face=f,h.barycoord=u}return h}var Jn=class i extends xt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(u,2));function g(b,m,d,_,v,x,T,w,A,C,M){let y=x/A,D=T/C,I=x/2,R=T/2,U=w/2,W=A+1,z=C+1,ee=0,q=0,Z=new V;for(let fe=0;fe<z;fe++){let Ce=fe*D-R;for(let pe=0;pe<W;pe++){let re=pe*y-I;Z[b]=re*_,Z[m]=Ce*v,Z[d]=U,l.push(Z.x,Z.y,Z.z),Z[b]=0,Z[m]=0,Z[d]=w>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(pe/A),u.push(1-fe/C),ee+=1}}for(let fe=0;fe<C;fe++)for(let Ce=0;Ce<A;Ce++){let pe=f+Ce+W*fe,re=f+Ce+W*(fe+1),Y=f+(Ce+1)+W*(fe+1),$=f+(Ce+1)+W*fe;c.push(pe,re,$),c.push(re,Y,$),q+=6}o.addGroup(p,q,M),p+=q,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ds(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Wt(i){let e={};for(let t=0;t<i.length;t++){let n=Ds(i[t]);for(let s in n)e[s]=n[s]}return e}function $p(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function kf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var Ti={clone:Ds,merge:Wt},em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yt=class extends Zt{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=em,this.fragmentShader=tm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=$p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},qa=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},mi=new V,Mu=new Ne,Su=new Ne,Ct=class extends qa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,Mu,Su),t.subVectors(Su,Mu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(br*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},cs=-90,ls=1,dl=class extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ct(cs,ls,e,t);s.layers=this.layers,this.add(s);let r=new Ct(cs,ls,e,t);r.layers=this.layers,this.add(r);let a=new Ct(cs,ls,e,t);a.layers=this.layers,this.add(a);let o=new Ct(cs,ls,e,t);o.layers=this.layers,this.add(o);let c=new Ct(cs,ls,e,t);c.layers=this.layers,this.add(c);let l=new Ct(cs,ls,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===za)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ya=class extends Dt{constructor(e,t,n,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:As,super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},pl=class extends Nt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ya(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Jn(5,5,5),r=new yt({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:Ln});r.uniforms.tEquirect.value=t;let a=new wt(s,r),o=t.minFilter;return t.minFilter===dn&&(t.minFilter=Bt),new dl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},hc=new V,nm=new V,im=new Ze,Xn=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=hc.subVectors(n,t).cross(nm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(hc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||im.getNormalMatrix(e),s=this.coplanarPoint(hc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ui=new rn,xa=new V,Tr=class{constructor(e=new Xn,t=new Xn,n=new Xn,s=new Xn,r=new Xn,a=new Xn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],b=s[10],m=s[11],d=s[12],_=s[13],v=s[14],x=s[15];if(n[0].setComponents(c-r,f-l,m-p,x-d).normalize(),n[1].setComponents(c+r,f+l,m+p,x+d).normalize(),n[2].setComponents(c+a,f+h,m+g,x+_).normalize(),n[3].setComponents(c-a,f-h,m-g,x-_).normalize(),n[4].setComponents(c-o,f-u,m-b,x-v).normalize(),t===Yn)n[5].setComponents(c+o,f+u,m+b,x+v).normalize();else if(t===za)n[5].setComponents(o,u,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(xa.x=s.normal.x>0?e.max.x:e.min.x,xa.y=s.normal.y>0?e.max.y:e.min.y,xa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function zf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function sm(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],b=u[p];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++f,u[f]=b)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let b=u[p];i.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Ns=class i extends xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,f=t/c,p=[],g=[],b=[],m=[];for(let d=0;d<h;d++){let _=d*f-a;for(let v=0;v<l;v++){let x=v*u-r;g.push(x,-_,0),b.push(0,0,1),m.push(v/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let _=0;_<o;_++){let v=_+l*d,x=_+l*(d+1),T=_+1+l*(d+1),w=_+1+l*d;p.push(v,x,w),p.push(x,T,w)}this.setIndex(p),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(b,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},rm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,am=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,om=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,um=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Em=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Um="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Om=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,km=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ym=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Km=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$m=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,i0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,s0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,r0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,a0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,o0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,d0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,p0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,x0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,S0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,C0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,E0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,N0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,B0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,V0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,W0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,H0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,j0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ug=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ag=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ng=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:rm,alphahash_pars_fragment:am,alphamap_fragment:om,alphamap_pars_fragment:cm,alphatest_fragment:lm,alphatest_pars_fragment:hm,aomap_fragment:um,aomap_pars_fragment:fm,batching_pars_vertex:dm,batching_vertex:pm,begin_vertex:mm,beginnormal_vertex:gm,bsdfs:bm,iridescence_fragment:xm,bumpmap_pars_fragment:vm,clipping_planes_fragment:_m,clipping_planes_pars_fragment:ym,clipping_planes_pars_vertex:Mm,clipping_planes_vertex:Sm,color_fragment:wm,color_pars_fragment:Am,color_pars_vertex:Tm,color_vertex:Cm,common:Em,cube_uv_reflection_fragment:Rm,defaultnormal_vertex:Pm,displacementmap_pars_vertex:Im,displacementmap_vertex:Lm,emissivemap_fragment:Dm,emissivemap_pars_fragment:Nm,colorspace_fragment:Um,colorspace_pars_fragment:Fm,envmap_fragment:Om,envmap_common_pars_fragment:Bm,envmap_pars_fragment:km,envmap_pars_vertex:zm,envmap_physical_pars_fragment:Jm,envmap_vertex:Gm,fog_vertex:Vm,fog_pars_vertex:Wm,fog_fragment:Hm,fog_pars_fragment:Xm,gradientmap_pars_fragment:qm,lightmap_pars_fragment:Ym,lights_lambert_fragment:jm,lights_lambert_pars_fragment:Km,lights_pars_begin:Zm,lights_toon_fragment:Qm,lights_toon_pars_fragment:$m,lights_phong_fragment:e0,lights_phong_pars_fragment:t0,lights_physical_fragment:n0,lights_physical_pars_fragment:i0,lights_fragment_begin:s0,lights_fragment_maps:r0,lights_fragment_end:a0,logdepthbuf_fragment:o0,logdepthbuf_pars_fragment:c0,logdepthbuf_pars_vertex:l0,logdepthbuf_vertex:h0,map_fragment:u0,map_pars_fragment:f0,map_particle_fragment:d0,map_particle_pars_fragment:p0,metalnessmap_fragment:m0,metalnessmap_pars_fragment:g0,morphinstance_vertex:b0,morphcolor_vertex:x0,morphnormal_vertex:v0,morphtarget_pars_vertex:_0,morphtarget_vertex:y0,normal_fragment_begin:M0,normal_fragment_maps:S0,normal_pars_fragment:w0,normal_pars_vertex:A0,normal_vertex:T0,normalmap_pars_fragment:C0,clearcoat_normal_fragment_begin:E0,clearcoat_normal_fragment_maps:R0,clearcoat_pars_fragment:P0,iridescence_pars_fragment:I0,opaque_fragment:L0,packing:D0,premultiplied_alpha_fragment:N0,project_vertex:U0,dithering_fragment:F0,dithering_pars_fragment:O0,roughnessmap_fragment:B0,roughnessmap_pars_fragment:k0,shadowmap_pars_fragment:z0,shadowmap_pars_vertex:G0,shadowmap_vertex:V0,shadowmask_pars_fragment:W0,skinbase_vertex:H0,skinning_pars_vertex:X0,skinning_vertex:q0,skinnormal_vertex:Y0,specularmap_fragment:j0,specularmap_pars_fragment:K0,tonemapping_fragment:Z0,tonemapping_pars_fragment:J0,transmission_fragment:Q0,transmission_pars_fragment:$0,uv_pars_fragment:eg,uv_pars_vertex:tg,uv_vertex:ng,worldpos_vertex:ig,background_vert:sg,background_frag:rg,backgroundCube_vert:ag,backgroundCube_frag:og,cube_vert:cg,cube_frag:lg,depth_vert:hg,depth_frag:ug,distanceRGBA_vert:fg,distanceRGBA_frag:dg,equirect_vert:pg,equirect_frag:mg,linedashed_vert:gg,linedashed_frag:bg,meshbasic_vert:xg,meshbasic_frag:vg,meshlambert_vert:_g,meshlambert_frag:yg,meshmatcap_vert:Mg,meshmatcap_frag:Sg,meshnormal_vert:wg,meshnormal_frag:Ag,meshphong_vert:Tg,meshphong_frag:Cg,meshphysical_vert:Eg,meshphysical_frag:Rg,meshtoon_vert:Pg,meshtoon_frag:Ig,points_vert:Lg,points_frag:Dg,shadow_vert:Ng,shadow_frag:Ug,sprite_vert:Fg,sprite_frag:Og},Be={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Pn={basic:{uniforms:Wt([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Wt([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new He(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Wt([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Wt([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Wt([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new He(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Wt([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Wt([Be.points,Be.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Wt([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Wt([Be.common,Be.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Wt([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Wt([Be.sprite,Be.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Wt([Be.common,Be.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Wt([Be.lights,Be.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Pn.physical={uniforms:Wt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var va={r:0,b:0,g:0},Fi=new gn,Bg=new Ye;function kg(i,e,t,n,s,r,a){let o=new He(0),c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function b(_){let v=!1,x=g(_);x===null?d(o,c):x&&x.isColor&&(d(x,1),v=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,v){let x=g(v);x&&(x.isCubeTexture||x.mapping===Ao)?(h===void 0&&(h=new wt(new Jn(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:Ds(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Fi.copy(v.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Bg.makeRotationFromEuler(Fi)),h.material.toneMapped=et.getTransfer(x.colorSpace)!==ct,(u!==x||f!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,p=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new wt(new Ns(2,2),new yt({name:"BackgroundMaterial",uniforms:Ds(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=et.getTransfer(x.colorSpace)!==ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,p=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function d(_,v){_.getRGB(va,kf(i)),n.buffers.color.setClear(va.r,va.g,va.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),c=v,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,d(o,c)},render:b,addToRenderList:m}}function zg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(y,D,I,R,U){let W=!1,z=u(R,I,D);r!==z&&(r=z,l(r.object)),W=p(y,R,I,U),W&&g(y,R,I,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,x(y,D,I,R),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,D,I){let R=I.wireframe===!0,U=n[y.id];U===void 0&&(U={},n[y.id]=U);let W=U[D.id];W===void 0&&(W={},U[D.id]=W);let z=W[R];return z===void 0&&(z=f(c()),W[R]=z),z}function f(y){let D=[],I=[],R=[];for(let U=0;U<t;U++)D[U]=0,I[U]=0,R[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:R,object:y,attributes:{},index:null}}function p(y,D,I,R){let U=r.attributes,W=D.attributes,z=0,ee=I.getAttributes();for(let q in ee)if(ee[q].location>=0){let fe=U[q],Ce=W[q];if(Ce===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(Ce=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(Ce=y.instanceColor)),fe===void 0||fe.attribute!==Ce||Ce&&fe.data!==Ce.data)return!0;z++}return r.attributesNum!==z||r.index!==R}function g(y,D,I,R){let U={},W=D.attributes,z=0,ee=I.getAttributes();for(let q in ee)if(ee[q].location>=0){let fe=W[q];fe===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(fe=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(fe=y.instanceColor));let Ce={};Ce.attribute=fe,fe&&fe.data&&(Ce.data=fe.data),U[q]=Ce,z++}r.attributes=U,r.attributesNum=z,r.index=R}function b(){let y=r.newAttributes;for(let D=0,I=y.length;D<I;D++)y[D]=0}function m(y){d(y,0)}function d(y,D){let I=r.newAttributes,R=r.enabledAttributes,U=r.attributeDivisors;I[y]=1,R[y]===0&&(i.enableVertexAttribArray(y),R[y]=1),U[y]!==D&&(i.vertexAttribDivisor(y,D),U[y]=D)}function _(){let y=r.newAttributes,D=r.enabledAttributes;for(let I=0,R=D.length;I<R;I++)D[I]!==y[I]&&(i.disableVertexAttribArray(I),D[I]=0)}function v(y,D,I,R,U,W,z){z===!0?i.vertexAttribIPointer(y,D,I,U,W):i.vertexAttribPointer(y,D,I,R,U,W)}function x(y,D,I,R){b();let U=R.attributes,W=I.getAttributes(),z=D.defaultAttributeValues;for(let ee in W){let q=W[ee];if(q.location>=0){let Z=U[ee];if(Z===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){let fe=Z.normalized,Ce=Z.itemSize,pe=e.get(Z);if(pe===void 0)continue;let re=pe.buffer,Y=pe.type,$=pe.bytesPerElement,ue=Y===i.INT||Y===i.UNSIGNED_INT||Z.gpuType===Jl;if(Z.isInterleavedBufferAttribute){let X=Z.data,te=X.stride,be=Z.offset;if(X.isInstancedInterleavedBuffer){for(let Te=0;Te<q.locationSize;Te++)d(q.location+Te,X.meshPerAttribute);y.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Te=0;Te<q.locationSize;Te++)m(q.location+Te);i.bindBuffer(i.ARRAY_BUFFER,re);for(let Te=0;Te<q.locationSize;Te++)v(q.location+Te,Ce/q.locationSize,Y,fe,te*$,(be+Ce/q.locationSize*Te)*$,ue)}else{if(Z.isInstancedBufferAttribute){for(let X=0;X<q.locationSize;X++)d(q.location+X,Z.meshPerAttribute);y.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let X=0;X<q.locationSize;X++)m(q.location+X);i.bindBuffer(i.ARRAY_BUFFER,re);for(let X=0;X<q.locationSize;X++)v(q.location+X,Ce/q.locationSize,Y,fe,Ce*$,Ce/q.locationSize*X*$,ue)}}else if(z!==void 0){let fe=z[ee];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(q.location,fe);break;case 3:i.vertexAttrib3fv(q.location,fe);break;case 4:i.vertexAttrib4fv(q.location,fe);break;default:i.vertexAttrib1fv(q.location,fe)}}}}_()}function T(){C();for(let y in n){let D=n[y];for(let I in D){let R=D[I];for(let U in R)h(R[U].object),delete R[U];delete D[I]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;let D=n[y.id];for(let I in D){let R=D[I];for(let U in R)h(R[U].object),delete R[U];delete D[I]}delete n[y.id]}function A(y){for(let D in n){let I=n[D];if(I[y.id]===void 0)continue;let R=I[y.id];for(let U in R)h(R[U].object),delete R[U];delete I[y.id]}}function C(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:m,disableUnusedAttributes:_}}function Gg(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function c(l,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let b=0;b<u;b++)g+=h[b]*f[b];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Vg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==jt&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let C=A===an&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Zn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==En&&!C)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:T,maxSamples:w}}function Wg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Xn,o=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let _=r?0:n,v=_*4,x=d.clippingState||null;c.value=x,x=h(g,f,v,p);for(let T=0;T!==v;++T)x[T]=t[T];d.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=c.value,g!==!0||m===null){let d=p+b*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,x=p;v!==b;++v,x+=4)a.copy(u[v]).applyMatrix4(_,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function Hg(i){let e=new WeakMap;function t(a,o){return o===Uc?a.mapping=As:o===Fc&&(a.mapping=Ts),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Uc||o===Fc)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new pl(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var _i=class extends qa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bs=4,wu=[.125,.215,.35,.446,.526,.582],zi=20,uc=new _i,Au=new He,fc=null,dc=0,pc=0,mc=!1,Bi=(1+Math.sqrt(5))/2,hs=1/Bi,Tu=[new V(-Bi,hs,0),new V(Bi,hs,0),new V(-hs,0,Bi),new V(hs,0,Bi),new V(0,Bi,-hs),new V(0,Bi,hs),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],Us=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){fc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fc,dc,pc),this._renderer.xr.enabled=mc,e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:an,format:jt,colorSpace:Gt,depthBuffer:!1},s=Cu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xg(r)),this._blurMaterial=qg(r,e,t)}return s}_compileMaterial(e){let t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,uc)}_sceneToCubeUV(e,t,n,s){let o=new Ct(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Au),h.toneMapping=xi,h.autoClear=!1;let p=new Jt({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),g=new wt(new Jn,p),b=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,b=!0):(p.color.copy(Au),b=!0);for(let d=0;d<6;d++){let _=d%3;_===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):_===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));let v=this._cubeSize;_a(s,_*v,d>2?v:0,v,v),h.setRenderTarget(s),b&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===As||e.mapping===Ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new wt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;_a(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,uc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Tu[(s-r-1)%Tu.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new wt(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*zi-1),b=r/g,m=isFinite(r)?1+Math.floor(h*b):zi;m>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);let d=[],_=0;for(let A=0;A<zi;++A){let C=A/b,M=Math.exp(-C*C/2);d.push(M),A===0?_+=M:A<m&&(_+=2*M)}for(let A=0;A<d.length;A++)d[A]=d[A]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let x=this._sizeLods[s],T=3*x*(s>v-bs?s-v+bs:0),w=4*(this._cubeSize-x);_a(t,T,w,3*x,2*x),c.setRenderTarget(t),c.render(u,uc)}};function Xg(i){let e=[],t=[],n=[],s=i,r=i-bs+1+wu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-bs?c=wu[a-i+bs-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,b=3,m=2,d=1,_=new Float32Array(b*g*p),v=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let w=0;w<p;w++){let A=w%3*2/3-1,C=w>2?0:-1,M=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];_.set(M,b*g*w),v.set(f,m*g*w);let y=[w,w,w,w,w,w];x.set(y,d*g*w)}let T=new xt;T.setAttribute("position",new _t(_,b)),T.setAttribute("uv",new _t(v,m)),T.setAttribute("faceIndex",new _t(x,d)),e.push(T),s>bs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Cu(i,e,t){let n=new Nt(i,e,t);return n.texture.mapping=Ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _a(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function qg(i,e,t){let n=new Float32Array(zi),s=new V(0,1,0);return new yt({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Eu(){return new yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Ru(){return new yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function rh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Uc||c===Fc,h=c===As||c===Ts;if(l||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Us(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Us(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function jg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&pr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Kg(i,e,t,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let b=f.morphAttributes[g];for(let m=0,d=b.length;m<d;m++)e.remove(b[m])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let b=p[g];for(let m=0,d=b.length;m<d;m++)e.update(b[m],i.ARRAY_BUFFER)}}function l(u){let f=[],p=u.index,g=u.attributes.position,b=0;if(p!==null){let _=p.array;b=p.version;for(let v=0,x=_.length;v<x;v+=3){let T=_[v+0],w=_[v+1],A=_[v+2];f.push(T,w,w,A,A,T)}}else if(g!==void 0){let _=g.array;b=g.version;for(let v=0,x=_.length/3-1;v<x;v+=3){let T=v+0,w=v+1,A=v+2;f.push(T,w,w,A,A,T)}}else return;let m=new(Of(f)?Xa:Ha)(f,1);m.version=b;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Zg(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),t.update(p,n,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function u(f,p,g,b){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/a,p[d],b[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,b,0,g);let d=0;for(let _=0;_<g;_++)d+=p[_]*b[_];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Jg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Qg(i,e,t){let n=new WeakMap,s=new rt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let M=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],v=0;p===!0&&(v=1),g===!0&&(v=2),b===!0&&(v=3);let x=o.attributes.position.count*v,T=1;x>e.maxTextureSize&&(T=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let w=new Float32Array(x*T*4*u),A=new Va(w,x,T,u);A.type=En,A.needsUpdate=!0;let C=v*4;for(let y=0;y<u;y++){let D=m[y],I=d[y],R=_[y],U=x*T*4*y;for(let W=0;W<D.count;W++){let z=W*C;p===!0&&(s.fromBufferAttribute(D,W),w[U+z+0]=s.x,w[U+z+1]=s.y,w[U+z+2]=s.z,w[U+z+3]=0),g===!0&&(s.fromBufferAttribute(I,W),w[U+z+4]=s.x,w[U+z+5]=s.y,w[U+z+6]=s.z,w[U+z+7]=0),b===!0&&(s.fromBufferAttribute(R,W),w[U+z+8]=s.x,w[U+z+9]=s.y,w[U+z+10]=s.z,w[U+z+11]=R.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new Ne(x,T)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let b=0;b<l.length;b++)p+=l[b];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function $g(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var ja=class extends Dt{constructor(e,t,n,s,r,a,o,c,l,h=_s){if(h!==_s&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===_s&&(n=Gi),n===void 0&&h===Es&&(n=Cs),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:zt,this.minFilter=c!==void 0?c:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Gf=new Dt,Pu=new ja(1,1),Vf=new Va,Wf=new fl,Hf=new Ya,Iu=[],Lu=[],Du=new Float32Array(16),Nu=new Float32Array(9),Uu=new Float32Array(4);function qs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Iu[s];if(r===void 0&&(r=new Float32Array(s),Iu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Eo(i,e){let t=Lu[e];t===void 0&&(t=new Int32Array(e),Lu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function eb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function tb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),Rt(t,e)}}function nb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),Rt(t,e)}}function ib(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),Rt(t,e)}}function sb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Et(t,n))return;Uu.set(n),i.uniformMatrix2fv(this.addr,!1,Uu),Rt(t,n)}}function rb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Et(t,n))return;Nu.set(n),i.uniformMatrix3fv(this.addr,!1,Nu),Rt(t,n)}}function ab(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Et(t,n))return;Du.set(n),i.uniformMatrix4fv(this.addr,!1,Du),Rt(t,n)}}function ob(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function cb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),Rt(t,e)}}function lb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),Rt(t,e)}}function hb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),Rt(t,e)}}function ub(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function fb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),Rt(t,e)}}function db(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),Rt(t,e)}}function pb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),Rt(t,e)}}function mb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Pu.compareFunction=Nf,r=Pu):r=Gf,t.setTexture2D(e||r,s)}function gb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Wf,s)}function bb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Hf,s)}function xb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Vf,s)}function vb(i){switch(i){case 5126:return eb;case 35664:return tb;case 35665:return nb;case 35666:return ib;case 35674:return sb;case 35675:return rb;case 35676:return ab;case 5124:case 35670:return ob;case 35667:case 35671:return cb;case 35668:case 35672:return lb;case 35669:case 35673:return hb;case 5125:return ub;case 36294:return fb;case 36295:return db;case 36296:return pb;case 35678:case 36198:case 36298:case 36306:case 35682:return mb;case 35679:case 36299:case 36307:return gb;case 35680:case 36300:case 36308:case 36293:return bb;case 36289:case 36303:case 36311:case 36292:return xb}}function _b(i,e){i.uniform1fv(this.addr,e)}function yb(i,e){let t=qs(e,this.size,2);i.uniform2fv(this.addr,t)}function Mb(i,e){let t=qs(e,this.size,3);i.uniform3fv(this.addr,t)}function Sb(i,e){let t=qs(e,this.size,4);i.uniform4fv(this.addr,t)}function wb(i,e){let t=qs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ab(i,e){let t=qs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Tb(i,e){let t=qs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Cb(i,e){i.uniform1iv(this.addr,e)}function Eb(i,e){i.uniform2iv(this.addr,e)}function Rb(i,e){i.uniform3iv(this.addr,e)}function Pb(i,e){i.uniform4iv(this.addr,e)}function Ib(i,e){i.uniform1uiv(this.addr,e)}function Lb(i,e){i.uniform2uiv(this.addr,e)}function Db(i,e){i.uniform3uiv(this.addr,e)}function Nb(i,e){i.uniform4uiv(this.addr,e)}function Ub(i,e,t){let n=this.cache,s=e.length,r=Eo(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Gf,r[a])}function Fb(i,e,t){let n=this.cache,s=e.length,r=Eo(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Wf,r[a])}function Ob(i,e,t){let n=this.cache,s=e.length,r=Eo(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Hf,r[a])}function Bb(i,e,t){let n=this.cache,s=e.length,r=Eo(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Vf,r[a])}function kb(i){switch(i){case 5126:return _b;case 35664:return yb;case 35665:return Mb;case 35666:return Sb;case 35674:return wb;case 35675:return Ab;case 35676:return Tb;case 5124:case 35670:return Cb;case 35667:case 35671:return Eb;case 35668:case 35672:return Rb;case 35669:case 35673:return Pb;case 5125:return Ib;case 36294:return Lb;case 36295:return Db;case 36296:return Nb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ub;case 35679:case 36299:case 36307:return Fb;case 35680:case 36300:case 36308:case 36293:return Ob;case 36289:case 36303:case 36311:case 36292:return Bb}}var ml=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vb(t.type)}},gl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kb(t.type)}},bl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},gc=/(\w+)(\])?(\[|\.)?/g;function Fu(i,e){i.seq.push(e),i.map[e.id]=e}function zb(i,e,t){let n=i.name,s=n.length;for(gc.lastIndex=0;;){let r=gc.exec(n),a=gc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Fu(t,l===void 0?new ml(o,i,e):new gl(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new bl(o),Fu(t,u)),t=u}}}var Ms=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);zb(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ou(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Gb=37297,Vb=0;function Wb(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Bu=new Ze;function Hb(i){et._getMatrix(Bu,et.workingColorSpace,i);let e=`mat3( ${Bu.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case Co:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ku(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Wb(i.getShaderSource(e),a)}else return s}function Xb(i,e){let t=Hb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function qb(i,e){let t;switch(e){case Xl:t="Linear";break;case ql:t="Reinhard";break;case Yl:t="Cineon";break;case zr:t="ACESFilmic";break;case jl:t="AgX";break;case Kl:t="Neutral";break;case cp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ya=new V;function Yb(){et.getLuminanceCoefficients(ya);let i=ya.x.toFixed(4),e=ya.y.toFixed(4),t=ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function Kb(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function mr(i){return i!==""}function zu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Jb=/^[ \t]*#include +<([\w\d./]+)>/gm;function xl(i){return i.replace(Jb,$b)}var Qb=new Map;function $b(i,e){let t=Qe[e];if(t===void 0){let n=Qb.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return xl(t)}var ex=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vu(i){return i.replace(ex,tx)}function tx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_f?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function ix(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case As:case Ts:e="ENVMAP_TYPE_CUBE";break;case Ao:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sx(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ts&&(e="ENVMAP_MODE_REFRACTION"),e}function rx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yf:e="ENVMAP_BLENDING_MULTIPLY";break;case ap:e="ENVMAP_BLENDING_MIX";break;case op:e="ENVMAP_BLENDING_ADD";break}return e}function ax(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ox(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=nx(t),l=ix(t),h=sx(t),u=rx(t),f=ax(t),p=jb(t),g=Kb(r),b=s.createProgram(),m,d,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),d.length>0&&(d+=`
`)):(m=[Wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),d=[Wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==xi?qb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Xb("linearToOutputTexel",t.outputColorSpace),Yb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),a=xl(a),a=zu(a,t),a=Gu(a,t),o=xl(o),o=zu(o,t),o=Gu(o,t),a=Vu(a),o=Vu(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let v=_+m+a,x=_+d+o,T=Ou(s,s.VERTEX_SHADER,v),w=Ou(s,s.FRAGMENT_SHADER,x);s.attachShader(b,T),s.attachShader(b,w),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function A(D){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(b).trim(),R=s.getShaderInfoLog(T).trim(),U=s.getShaderInfoLog(w).trim(),W=!0,z=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,T,w);else{let ee=ku(s,T,"vertex"),q=ku(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+I+`
`+ee+`
`+q)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(R===""||U==="")&&(z=!1);z&&(D.diagnostics={runnable:W,programLog:I,vertexShader:{log:R,prefix:m},fragmentShader:{log:U,prefix:d}})}s.deleteShader(T),s.deleteShader(w),C=new Ms(s,b),M=Zb(s,b)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(b,Gb)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vb++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=w,this}var cx=0,vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _l(e),t.set(e,n)),n}},_l=class{constructor(e){this.id=cx++,this.code=e,this.usedTimes=0}};function lx(i,e,t,n,s,r,a){let o=new Wa,c=new vl,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,y,D,I,R){let U=I.fog,W=R.geometry,z=M.isMeshStandardMaterial?I.environment:null,ee=(M.isMeshStandardMaterial?t:e).get(M.envMap||z),q=ee&&ee.mapping===Ao?ee.image.height:null,Z=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let fe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ce=fe!==void 0?fe.length:0,pe=0;W.morphAttributes.position!==void 0&&(pe=1),W.morphAttributes.normal!==void 0&&(pe=2),W.morphAttributes.color!==void 0&&(pe=3);let re,Y,$,ue;if(Z){let Je=Pn[Z];re=Je.vertexShader,Y=Je.fragmentShader}else re=M.vertexShader,Y=M.fragmentShader,c.update(M),$=c.getVertexShaderID(M),ue=c.getFragmentShaderID(M);let X=i.getRenderTarget(),te=i.state.buffers.depth.getReversed(),be=R.isInstancedMesh===!0,Te=R.isBatchedMesh===!0,ge=!!M.map,j=!!M.matcap,J=!!ee,E=!!M.aoMap,ye=!!M.lightMap,ce=!!M.bumpMap,ie=!!M.normalMap,oe=!!M.displacementMap,Me=!!M.emissiveMap,_e=!!M.metalnessMap,P=!!M.roughnessMap,S=M.anisotropy>0,G=M.clearcoat>0,F=M.dispersion>0,K=M.iridescence>0,N=M.sheen>0,O=M.transmission>0,k=S&&!!M.anisotropyMap,H=G&&!!M.clearcoatMap,Ae=G&&!!M.clearcoatNormalMap,ae=G&&!!M.clearcoatRoughnessMap,de=K&&!!M.iridescenceMap,Le=K&&!!M.iridescenceThicknessMap,Ee=N&&!!M.sheenColorMap,Ie=N&&!!M.sheenRoughnessMap,Pe=!!M.specularMap,Se=!!M.specularColorMap,Ue=!!M.specularIntensityMap,B=O&&!!M.transmissionMap,we=O&&!!M.thicknessMap,Q=!!M.gradientMap,he=!!M.alphaMap,De=M.alphaTest>0,le=!!M.alphaHash,Re=!!M.extensions,ze=xi;M.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(ze=i.toneMapping);let $e={shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:re,fragmentShader:Y,defines:M.defines,customVertexShaderID:$,customFragmentShaderID:ue,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Te,batchingColor:Te&&R._colorsTexture!==null,instancing:be,instancingColor:be&&R.instanceColor!==null,instancingMorph:be&&R.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Gt,alphaToCoverage:!!M.alphaToCoverage,map:ge,matcap:j,envMap:J,envMapMode:J&&ee.mapping,envMapCubeUVHeight:q,aoMap:E,lightMap:ye,bumpMap:ce,normalMap:ie,displacementMap:f&&oe,emissiveMap:Me,normalMapObjectSpace:ie&&M.normalMapType===dp,normalMapTangentSpace:ie&&M.normalMapType===Df,metalnessMap:_e,roughnessMap:P,anisotropy:S,anisotropyMap:k,clearcoat:G,clearcoatMap:H,clearcoatNormalMap:Ae,clearcoatRoughnessMap:ae,dispersion:F,iridescence:K,iridescenceMap:de,iridescenceThicknessMap:Le,sheen:N,sheenColorMap:Ee,sheenRoughnessMap:Ie,specularMap:Pe,specularColorMap:Se,specularIntensityMap:Ue,transmission:O,transmissionMap:B,thicknessMap:we,gradientMap:Q,opaque:M.transparent===!1&&M.blending===vs&&M.alphaToCoverage===!1,alphaMap:he,alphaTest:De,alphaHash:le,combine:M.combine,mapUv:ge&&b(M.map.channel),aoMapUv:E&&b(M.aoMap.channel),lightMapUv:ye&&b(M.lightMap.channel),bumpMapUv:ce&&b(M.bumpMap.channel),normalMapUv:ie&&b(M.normalMap.channel),displacementMapUv:oe&&b(M.displacementMap.channel),emissiveMapUv:Me&&b(M.emissiveMap.channel),metalnessMapUv:_e&&b(M.metalnessMap.channel),roughnessMapUv:P&&b(M.roughnessMap.channel),anisotropyMapUv:k&&b(M.anisotropyMap.channel),clearcoatMapUv:H&&b(M.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&b(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&b(M.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&b(M.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&b(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&b(M.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&b(M.sheenRoughnessMap.channel),specularMapUv:Pe&&b(M.specularMap.channel),specularColorMapUv:Se&&b(M.specularColorMap.channel),specularIntensityMapUv:Ue&&b(M.specularIntensityMap.channel),transmissionMapUv:B&&b(M.transmissionMap.channel),thicknessMapUv:we&&b(M.thicknessMap.channel),alphaMapUv:he&&b(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ie||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!W.attributes.uv&&(ge||he),fog:!!U,useFog:M.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:te,skinning:R.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:pe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:ge&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===ct,decodeVideoTextureEmissive:Me&&M.emissiveMap.isVideoTexture===!0&&et.getTransfer(M.emissiveMap.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===nn,flipSided:M.side===kt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Re&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&M.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return $e.vertexUv1s=l.has(1),$e.vertexUv2s=l.has(2),$e.vertexUv3s=l.has(3),l.clear(),$e}function d(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)y.push(D),y.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(_(y,M),v(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function _(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function v(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){let y=g[M.type],D;if(y){let I=Pn[y];D=Ti.clone(I.uniforms)}else D=M.uniforms;return D}function T(M,y){let D;for(let I=0,R=h.length;I<R;I++){let U=h[I];if(U.cacheKey===y){D=U,++D.usedTimes;break}}return D===void 0&&(D=new ox(i,y,M,r),h.push(D)),D}function w(M){if(--M.usedTimes===0){let y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function A(M){c.remove(M)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:T,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:C}}function hx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ux(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Hu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Xu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,p,g,b,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:b,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=b,d.group=m),e++,d}function o(u,f,p,g,b,m){let d=a(u,f,p,g,b,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(u,f,p,g,b,m){let d=a(u,f,p,g,b,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||ux),n.length>1&&n.sort(f||Hu),s.length>1&&s.sort(f||Hu)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function fx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Xu,i.set(n,[a])):s>=r.length?(a=new Xu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function dx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new He};break;case"SpotLight":t={position:new V,direction:new V,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function px(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var mx=0;function gx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bx(i){let e=new dx,t=px(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new V);let s=new V,r=new Ye,a=new Ye;function o(l){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,b=0,m=0,d=0,_=0,v=0,x=0,T=0,w=0,A=0;l.sort(gx);for(let M=0,y=l.length;M<y;M++){let D=l[M],I=D.color,R=D.intensity,U=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=I.r*R,u+=I.g*R,f+=I.b*R;else if(D.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(D.sh.coefficients[z],R);A++}else if(D.isDirectionalLight){let z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ee=D.shadow,q=t.get(D);q.shadowIntensity=ee.intensity,q.shadowBias=ee.bias,q.shadowNormalBias=ee.normalBias,q.shadowRadius=ee.radius,q.shadowMapSize=ee.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=D.shadow.matrix,_++}n.directional[p]=z,p++}else if(D.isSpotLight){let z=e.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(I).multiplyScalar(R),z.distance=U,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,n.spot[b]=z;let ee=D.shadow;if(D.map&&(n.spotLightMap[T]=D.map,T++,ee.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[b]=ee.matrix,D.castShadow){let q=t.get(D);q.shadowIntensity=ee.intensity,q.shadowBias=ee.bias,q.shadowNormalBias=ee.normalBias,q.shadowRadius=ee.radius,q.shadowMapSize=ee.mapSize,n.spotShadow[b]=q,n.spotShadowMap[b]=W,x++}b++}else if(D.isRectAreaLight){let z=e.get(D);z.color.copy(I).multiplyScalar(R),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=z,m++}else if(D.isPointLight){let z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){let ee=D.shadow,q=t.get(D);q.shadowIntensity=ee.intensity,q.shadowBias=ee.bias,q.shadowNormalBias=ee.normalBias,q.shadowRadius=ee.radius,q.shadowMapSize=ee.mapSize,q.shadowCameraNear=ee.camera.near,q.shadowCameraFar=ee.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=D.shadow.matrix,v++}n.point[g]=z,g++}else if(D.isHemisphereLight){let z=e.get(D);z.skyColor.copy(D.color).multiplyScalar(R),z.groundColor.copy(D.groundColor).multiplyScalar(R),n.hemi[d]=z,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Be.LTC_FLOAT_1,n.rectAreaLTC2=Be.LTC_FLOAT_2):(n.rectAreaLTC1=Be.LTC_HALF_1,n.rectAreaLTC2=Be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==b||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==_||C.numPointShadows!==v||C.numSpotShadows!==x||C.numSpotMaps!==T||C.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,C.directionalLength=p,C.pointLength=g,C.spotLength=b,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=_,C.numPointShadows=v,C.numSpotShadows=x,C.numSpotMaps=T,C.numLightProbes=A,n.version=mx++)}function c(l,h){let u=0,f=0,p=0,g=0,b=0,m=h.matrixWorldInverse;for(let d=0,_=l.length;d<_;d++){let v=l[d];if(v.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(v.isSpotLight){let x=n.spot[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let x=n.hemi[b];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),b++}}}return{setup:o,setupView:c,state:n}}function qu(i){let e=new bx(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function xx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new qu(i),e.set(s,[o])):r>=a.length?(o=new qu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var yl=class extends Zt{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=up,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ml=class extends Zt{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_x=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yx(i,e,t){let n=new Tr,s=new Ne,r=new Ne,a=new rt,o=new yl({depthPacking:fp}),c=new Ml,l={},h=t.maxTextureSize,u={[Dn]:kt,[kt]:Dn,[nn]:nn},f=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:vx,fragmentShader:_x}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new xt;g.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new wt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_f;let d=this.type;this.render=function(w,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let M=i.getRenderTarget(),y=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Ln),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let R=d!==Hn&&this.type===Hn,U=d===Hn&&this.type!==Hn;for(let W=0,z=w.length;W<z;W++){let ee=w[W],q=ee.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let Z=q.getFrameExtents();if(s.multiply(Z),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,q.mapSize.y=r.y)),q.map===null||R===!0||U===!0){let Ce=this.type!==Hn?{minFilter:zt,magFilter:zt}:{};q.map!==null&&q.map.dispose(),q.map=new Nt(s.x,s.y,Ce),q.map.texture.name=ee.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let fe=q.getViewportCount();for(let Ce=0;Ce<fe;Ce++){let pe=q.getViewport(Ce);a.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),I.viewport(a),q.updateMatrices(ee,Ce),n=q.getFrustum(),x(A,C,q.camera,ee,this.type)}q.isPointLightShadow!==!0&&this.type===Hn&&_(q,C),q.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,y,D)};function _(w,A){let C=e.update(b);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Nt(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,C,f,b,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,C,p,b,null)}function v(w,A,C,M){let y=null,D=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)y=D;else if(y=C.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let I=y.uuid,R=A.uuid,U=l[I];U===void 0&&(U={},l[I]=U);let W=U[R];W===void 0&&(W=y.clone(),U[R]=W,A.addEventListener("dispose",T)),y=W}if(y.visible=A.visible,y.wireframe=A.wireframe,M===Hn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let I=i.properties.get(y);I.light=C}return y}function x(w,A,C,M,y){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Hn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);let R=e.update(w),U=w.material;if(Array.isArray(U)){let W=R.groups;for(let z=0,ee=W.length;z<ee;z++){let q=W[z],Z=U[q.materialIndex];if(Z&&Z.visible){let fe=v(w,Z,M,y);w.onBeforeShadow(i,w,A,C,R,fe,q),i.renderBufferDirect(C,null,R,fe,w,q),w.onAfterShadow(i,w,A,C,R,fe,q)}}}else if(U.visible){let W=v(w,U,M,y);w.onBeforeShadow(i,w,A,C,R,W,null),i.renderBufferDirect(C,null,R,W,w,null),w.onAfterShadow(i,w,A,C,R,W,null)}}let I=w.children;for(let R=0,U=I.length;R<U;R++)x(I[R],A,C,M,y)}function T(w){w.target.removeEventListener("dispose",T);for(let C in l){let M=l[C],y=w.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var Mx={[Ec]:Rc,[Pc]:Dc,[Ic]:Nc,[ws]:Lc,[Rc]:Ec,[Dc]:Pc,[Nc]:Ic,[Lc]:ws};function Sx(i,e){function t(){let B=!1,we=new rt,Q=null,he=new rt(0,0,0,0);return{setMask:function(De){Q!==De&&!B&&(i.colorMask(De,De,De,De),Q=De)},setLocked:function(De){B=De},setClear:function(De,le,Re,ze,$e){$e===!0&&(De*=ze,le*=ze,Re*=ze),we.set(De,le,Re,ze),he.equals(we)===!1&&(i.clearColor(De,le,Re,ze),he.copy(we))},reset:function(){B=!1,Q=null,he.set(-1,0,0,0)}}}function n(){let B=!1,we=!1,Q=null,he=null,De=null;return{setReversed:function(le){if(we!==le){let Re=e.get("EXT_clip_control");we?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT);let ze=De;De=null,this.setClear(ze)}we=le},getReversed:function(){return we},setTest:function(le){le?X(i.DEPTH_TEST):te(i.DEPTH_TEST)},setMask:function(le){Q!==le&&!B&&(i.depthMask(le),Q=le)},setFunc:function(le){if(we&&(le=Mx[le]),he!==le){switch(le){case Ec:i.depthFunc(i.NEVER);break;case Rc:i.depthFunc(i.ALWAYS);break;case Pc:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case Ic:i.depthFunc(i.EQUAL);break;case Lc:i.depthFunc(i.GEQUAL);break;case Dc:i.depthFunc(i.GREATER);break;case Nc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=le}},setLocked:function(le){B=le},setClear:function(le){De!==le&&(we&&(le=1-le),i.clearDepth(le),De=le)},reset:function(){B=!1,Q=null,he=null,De=null,we=!1}}}function s(){let B=!1,we=null,Q=null,he=null,De=null,le=null,Re=null,ze=null,$e=null;return{setTest:function(Je){B||(Je?X(i.STENCIL_TEST):te(i.STENCIL_TEST))},setMask:function(Je){we!==Je&&!B&&(i.stencilMask(Je),we=Je)},setFunc:function(Je,ut,Pt){(Q!==Je||he!==ut||De!==Pt)&&(i.stencilFunc(Je,ut,Pt),Q=Je,he=ut,De=Pt)},setOp:function(Je,ut,Pt){(le!==Je||Re!==ut||ze!==Pt)&&(i.stencilOp(Je,ut,Pt),le=Je,Re=ut,ze=Pt)},setLocked:function(Je){B=Je},setClear:function(Je){$e!==Je&&(i.clearStencil(Je),$e=Je)},reset:function(){B=!1,we=null,Q=null,he=null,De=null,le=null,Re=null,ze=null,$e=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,b=!1,m=null,d=null,_=null,v=null,x=null,T=null,w=null,A=new He(0,0,0),C=0,M=!1,y=null,D=null,I=null,R=null,U=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,ee=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=ee>=1):q.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=ee>=2);let Z=null,fe={},Ce=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),re=new rt().fromArray(Ce),Y=new rt().fromArray(pe);function $(B,we,Q,he){let De=new Uint8Array(4),le=i.createTexture();i.bindTexture(B,le),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<Q;Re++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(we+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return le}let ue={};ue[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),X(i.DEPTH_TEST),a.setFunc(ws),ce(!1),ie(jh),X(i.CULL_FACE),E(Ln);function X(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function te(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function be(B,we){return u[B]!==we?(i.bindFramebuffer(B,we),u[B]=we,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=we),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=we),!0):!1}function Te(B,we){let Q=p,he=!1;if(B){Q=f.get(we),Q===void 0&&(Q=[],f.set(we,Q));let De=B.textures;if(Q.length!==De.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Re=De.length;le<Re;le++)Q[le]=i.COLOR_ATTACHMENT0+le;Q.length=De.length,he=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,he=!0);he&&i.drawBuffers(Q)}function ge(B){return g!==B?(i.useProgram(B),g=B,!0):!1}let j={[ki]:i.FUNC_ADD,[Wd]:i.FUNC_SUBTRACT,[Hd]:i.FUNC_REVERSE_SUBTRACT};j[Xd]=i.MIN,j[qd]=i.MAX;let J={[Yd]:i.ZERO,[jd]:i.ONE,[Kd]:i.SRC_COLOR,[Tc]:i.SRC_ALPHA,[tp]:i.SRC_ALPHA_SATURATE,[$d]:i.DST_COLOR,[Jd]:i.DST_ALPHA,[Zd]:i.ONE_MINUS_SRC_COLOR,[Cc]:i.ONE_MINUS_SRC_ALPHA,[ep]:i.ONE_MINUS_DST_COLOR,[Qd]:i.ONE_MINUS_DST_ALPHA,[np]:i.CONSTANT_COLOR,[ip]:i.ONE_MINUS_CONSTANT_COLOR,[sp]:i.CONSTANT_ALPHA,[rp]:i.ONE_MINUS_CONSTANT_ALPHA};function E(B,we,Q,he,De,le,Re,ze,$e,Je){if(B===Ln){b===!0&&(te(i.BLEND),b=!1);return}if(b===!1&&(X(i.BLEND),b=!0),B!==Vd){if(B!==m||Je!==M){if((d!==ki||x!==ki)&&(i.blendEquation(i.FUNC_ADD),d=ki,x=ki),Je)switch(B){case vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ss:i.blendFunc(i.ONE,i.ONE);break;case Kh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ss:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Kh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}_=null,v=null,T=null,w=null,A.set(0,0,0),C=0,m=B,M=Je}return}De=De||we,le=le||Q,Re=Re||he,(we!==d||De!==x)&&(i.blendEquationSeparate(j[we],j[De]),d=we,x=De),(Q!==_||he!==v||le!==T||Re!==w)&&(i.blendFuncSeparate(J[Q],J[he],J[le],J[Re]),_=Q,v=he,T=le,w=Re),(ze.equals(A)===!1||$e!==C)&&(i.blendColor(ze.r,ze.g,ze.b,$e),A.copy(ze),C=$e),m=B,M=!1}function ye(B,we){B.side===nn?te(i.CULL_FACE):X(i.CULL_FACE);let Q=B.side===kt;we&&(Q=!Q),ce(Q),B.blending===vs&&B.transparent===!1?E(Ln):E(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let he=B.stencilWrite;o.setTest(he),he&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Me(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):te(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(B){y!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),y=B)}function ie(B){B!==zd?(X(i.CULL_FACE),B!==D&&(B===jh?i.cullFace(i.BACK):B===Gd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):te(i.CULL_FACE),D=B}function oe(B){B!==I&&(z&&i.lineWidth(B),I=B)}function Me(B,we,Q){B?(X(i.POLYGON_OFFSET_FILL),(R!==we||U!==Q)&&(i.polygonOffset(we,Q),R=we,U=Q)):te(i.POLYGON_OFFSET_FILL)}function _e(B){B?X(i.SCISSOR_TEST):te(i.SCISSOR_TEST)}function P(B){B===void 0&&(B=i.TEXTURE0+W-1),Z!==B&&(i.activeTexture(B),Z=B)}function S(B,we,Q){Q===void 0&&(Z===null?Q=i.TEXTURE0+W-1:Q=Z);let he=fe[Q];he===void 0&&(he={type:void 0,texture:void 0},fe[Q]=he),(he.type!==B||he.texture!==we)&&(Z!==Q&&(i.activeTexture(Q),Z=Q),i.bindTexture(B,we||ue[B]),he.type=B,he.texture=we)}function G(){let B=fe[Z];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function F(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function N(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function O(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function k(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function H(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(B){re.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),re.copy(B))}function Ie(B){Y.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Y.copy(B))}function Pe(B,we){let Q=l.get(we);Q===void 0&&(Q=new WeakMap,l.set(we,Q));let he=Q.get(B);he===void 0&&(he=i.getUniformBlockIndex(we,B.name),Q.set(B,he))}function Se(B,we){let he=l.get(we).get(B);c.get(we)!==he&&(i.uniformBlockBinding(we,he,B.__bindingPointIndex),c.set(we,he))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Z=null,fe={},u={},f=new WeakMap,p=[],g=null,b=!1,m=null,d=null,_=null,v=null,x=null,T=null,w=null,A=new He(0,0,0),C=0,M=!1,y=null,D=null,I=null,R=null,U=null,re.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:X,disable:te,bindFramebuffer:be,drawBuffers:Te,useProgram:ge,setBlending:E,setMaterial:ye,setFlipSided:ce,setCullFace:ie,setLineWidth:oe,setPolygonOffset:Me,setScissorTest:_e,activeTexture:P,bindTexture:S,unbindTexture:G,compressedTexImage2D:F,compressedTexImage3D:K,texImage2D:de,texImage3D:Le,updateUBOMapping:Pe,uniformBlockBinding:Se,texStorage2D:Ae,texStorage3D:ae,texSubImage2D:N,texSubImage3D:O,compressedTexSubImage2D:k,compressedTexSubImage3D:H,scissor:Ee,viewport:Ie,reset:Ue}}function Yu(i,e,t,n){let s=wx(n);switch(t){case Tf:return i*e;case Ef:return i*e;case Rf:return i*e*2;case eh:return i*e/s.components*s.byteLength;case th:return i*e/s.components*s.byteLength;case Pf:return i*e*2/s.components*s.byteLength;case nh:return i*e*2/s.components*s.byteLength;case Cf:return i*e*3/s.components*s.byteLength;case jt:return i*e*4/s.components*s.byteLength;case ih:return i*e*4/s.components*s.byteLength;case Ua:case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bc:case zc:return Math.max(i,16)*Math.max(e,8)/4;case Oc:case kc:return Math.max(i,8)*Math.max(e,8)/2;case Gc:case Vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case qc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case jc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Jc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Qc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $c:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case el:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case tl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ka:case sl:case rl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case If:case al:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ol:case cl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wx(i){switch(i){case Zn:case Sf:return{byteLength:1,components:1};case wr:case wf:case an:return{byteLength:2,components:1};case Ql:case $l:return{byteLength:2,components:4};case Gi:case Jl:case En:return{byteLength:4,components:1};case Af:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ax(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ne,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return p?new OffscreenCanvas(P,S):Ar("canvas")}function b(P,S,G){let F=1,K=_e(P);if((K.width>G||K.height>G)&&(F=G/Math.max(K.width,K.height)),F<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let N=Math.floor(F*K.width),O=Math.floor(F*K.height);u===void 0&&(u=g(N,O));let k=S?g(N,O):u;return k.width=N,k.height=O,k.getContext("2d").drawImage(P,0,0,N,O),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+N+"x"+O+")."),k}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),P;return P}function m(P){return P.generateMipmaps}function d(P){i.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(P,S,G,F,K=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let N=S;if(S===i.RED&&(G===i.FLOAT&&(N=i.R32F),G===i.HALF_FLOAT&&(N=i.R16F),G===i.UNSIGNED_BYTE&&(N=i.R8)),S===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(N=i.R8UI),G===i.UNSIGNED_SHORT&&(N=i.R16UI),G===i.UNSIGNED_INT&&(N=i.R32UI),G===i.BYTE&&(N=i.R8I),G===i.SHORT&&(N=i.R16I),G===i.INT&&(N=i.R32I)),S===i.RG&&(G===i.FLOAT&&(N=i.RG32F),G===i.HALF_FLOAT&&(N=i.RG16F),G===i.UNSIGNED_BYTE&&(N=i.RG8)),S===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(N=i.RG8UI),G===i.UNSIGNED_SHORT&&(N=i.RG16UI),G===i.UNSIGNED_INT&&(N=i.RG32UI),G===i.BYTE&&(N=i.RG8I),G===i.SHORT&&(N=i.RG16I),G===i.INT&&(N=i.RG32I)),S===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(N=i.RGB8UI),G===i.UNSIGNED_SHORT&&(N=i.RGB16UI),G===i.UNSIGNED_INT&&(N=i.RGB32UI),G===i.BYTE&&(N=i.RGB8I),G===i.SHORT&&(N=i.RGB16I),G===i.INT&&(N=i.RGB32I)),S===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(N=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(N=i.RGBA16UI),G===i.UNSIGNED_INT&&(N=i.RGBA32UI),G===i.BYTE&&(N=i.RGBA8I),G===i.SHORT&&(N=i.RGBA16I),G===i.INT&&(N=i.RGBA32I)),S===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(N=i.RGB9_E5),S===i.RGBA){let O=K?Co:et.getTransfer(F);G===i.FLOAT&&(N=i.RGBA32F),G===i.HALF_FLOAT&&(N=i.RGBA16F),G===i.UNSIGNED_BYTE&&(N=O===ct?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(N=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(N=i.RGB5_A1)}return(N===i.R16F||N===i.R32F||N===i.RG16F||N===i.RG32F||N===i.RGBA16F||N===i.RGBA32F)&&e.get("EXT_color_buffer_float"),N}function x(P,S){let G;return P?S===null||S===Gi||S===Cs?G=i.DEPTH24_STENCIL8:S===En?G=i.DEPTH32F_STENCIL8:S===wr&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Gi||S===Cs?G=i.DEPTH_COMPONENT24:S===En?G=i.DEPTH_COMPONENT32F:S===wr&&(G=i.DEPTH_COMPONENT16),G}function T(P,S){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==zt&&P.minFilter!==Bt?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function w(P){let S=P.target;S.removeEventListener("dispose",w),C(S),S.isVideoTexture&&h.delete(S)}function A(P){let S=P.target;S.removeEventListener("dispose",A),y(S)}function C(P){let S=n.get(P);if(S.__webglInit===void 0)return;let G=P.source,F=f.get(G);if(F){let K=F[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(P),Object.keys(F).length===0&&f.delete(G)}n.remove(P)}function M(P){let S=n.get(P);i.deleteTexture(S.__webglTexture);let G=P.source,F=f.get(G);delete F[S.__cacheKey],a.memory.textures--}function y(P){let S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(S.__webglFramebuffer[F]))for(let K=0;K<S.__webglFramebuffer[F].length;K++)i.deleteFramebuffer(S.__webglFramebuffer[F][K]);else i.deleteFramebuffer(S.__webglFramebuffer[F]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[F])}else{if(Array.isArray(S.__webglFramebuffer))for(let F=0;F<S.__webglFramebuffer.length;F++)i.deleteFramebuffer(S.__webglFramebuffer[F]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let F=0;F<S.__webglColorRenderbuffer.length;F++)S.__webglColorRenderbuffer[F]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[F]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let G=P.textures;for(let F=0,K=G.length;F<K;F++){let N=n.get(G[F]);N.__webglTexture&&(i.deleteTexture(N.__webglTexture),a.memory.textures--),n.remove(G[F])}n.remove(P)}let D=0;function I(){D=0}function R(){let P=D;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),D+=1,P}function U(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function W(P,S){let G=n.get(P);if(P.isVideoTexture&&oe(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){let F=P.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(G,P,S);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+S)}function z(P,S){let G=n.get(P);if(P.version>0&&G.__version!==P.version){Y(G,P,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+S)}function ee(P,S){let G=n.get(P);if(P.version>0&&G.__version!==P.version){Y(G,P,S);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+S)}function q(P,S){let G=n.get(P);if(P.version>0&&G.__version!==P.version){$(G,P,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+S)}let Z={[Kn]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[Sr]:i.MIRRORED_REPEAT},fe={[zt]:i.NEAREST,[Zl]:i.NEAREST_MIPMAP_NEAREST,[gs]:i.NEAREST_MIPMAP_LINEAR,[Bt]:i.LINEAR,[gr]:i.LINEAR_MIPMAP_NEAREST,[dn]:i.LINEAR_MIPMAP_LINEAR},Ce={[pp]:i.NEVER,[_p]:i.ALWAYS,[mp]:i.LESS,[Nf]:i.LEQUAL,[gp]:i.EQUAL,[vp]:i.GEQUAL,[bp]:i.GREATER,[xp]:i.NOTEQUAL};function pe(P,S){if(S.type===En&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Bt||S.magFilter===gr||S.magFilter===gs||S.magFilter===dn||S.minFilter===Bt||S.minFilter===gr||S.minFilter===gs||S.minFilter===dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Z[S.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Z[S.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Z[S.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,fe[S.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,fe[S.minFilter]),S.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Ce[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===zt||S.minFilter!==gs&&S.minFilter!==dn||S.type===En&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function re(P,S){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",w));let F=S.source,K=f.get(F);K===void 0&&(K={},f.set(F,K));let N=U(S);if(N!==P.__cacheKey){K[N]===void 0&&(K[N]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),K[N].usedTimes++;let O=K[P.__cacheKey];O!==void 0&&(K[P.__cacheKey].usedTimes--,O.usedTimes===0&&M(S)),P.__cacheKey=N,P.__webglTexture=K[N].texture}return G}function Y(P,S,G){let F=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(F=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(F=i.TEXTURE_3D);let K=re(P,S),N=S.source;t.bindTexture(F,P.__webglTexture,i.TEXTURE0+G);let O=n.get(N);if(N.version!==O.__version||K===!0){t.activeTexture(i.TEXTURE0+G);let k=et.getPrimaries(et.workingColorSpace),H=S.colorSpace===In?null:et.getPrimaries(S.colorSpace),Ae=S.colorSpace===In||k===H?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ae=b(S.image,!1,s.maxTextureSize);ae=Me(S,ae);let de=r.convert(S.format,S.colorSpace),Le=r.convert(S.type),Ee=v(S.internalFormat,de,Le,S.colorSpace,S.isVideoTexture);pe(F,S);let Ie,Pe=S.mipmaps,Se=S.isVideoTexture!==!0,Ue=O.__version===void 0||K===!0,B=N.dataReady,we=T(S,ae);if(S.isDepthTexture)Ee=x(S.format===Es,S.type),Ue&&(Se?t.texStorage2D(i.TEXTURE_2D,1,Ee,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Ee,ae.width,ae.height,0,de,Le,null));else if(S.isDataTexture)if(Pe.length>0){Se&&Ue&&t.texStorage2D(i.TEXTURE_2D,we,Ee,Pe[0].width,Pe[0].height);for(let Q=0,he=Pe.length;Q<he;Q++)Ie=Pe[Q],Se?B&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Ie.width,Ie.height,de,Le,Ie.data):t.texImage2D(i.TEXTURE_2D,Q,Ee,Ie.width,Ie.height,0,de,Le,Ie.data);S.generateMipmaps=!1}else Se?(Ue&&t.texStorage2D(i.TEXTURE_2D,we,Ee,ae.width,ae.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,de,Le,ae.data)):t.texImage2D(i.TEXTURE_2D,0,Ee,ae.width,ae.height,0,de,Le,ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Se&&Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Ee,Pe[0].width,Pe[0].height,ae.depth);for(let Q=0,he=Pe.length;Q<he;Q++)if(Ie=Pe[Q],S.format!==jt)if(de!==null)if(Se){if(B)if(S.layerUpdates.size>0){let De=Yu(Ie.width,Ie.height,S.format,S.type);for(let le of S.layerUpdates){let Re=Ie.data.subarray(le*De/Ie.data.BYTES_PER_ELEMENT,(le+1)*De/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,le,Ie.width,Ie.height,1,de,Re)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Ie.width,Ie.height,ae.depth,de,Ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Ee,Ie.width,Ie.height,ae.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Se?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Ie.width,Ie.height,ae.depth,de,Le,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Ee,Ie.width,Ie.height,ae.depth,0,de,Le,Ie.data)}else{Se&&Ue&&t.texStorage2D(i.TEXTURE_2D,we,Ee,Pe[0].width,Pe[0].height);for(let Q=0,he=Pe.length;Q<he;Q++)Ie=Pe[Q],S.format!==jt?de!==null?Se?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,Ie.width,Ie.height,de,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Ee,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?B&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Ie.width,Ie.height,de,Le,Ie.data):t.texImage2D(i.TEXTURE_2D,Q,Ee,Ie.width,Ie.height,0,de,Le,Ie.data)}else if(S.isDataArrayTexture)if(Se){if(Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Ee,ae.width,ae.height,ae.depth),B)if(S.layerUpdates.size>0){let Q=Yu(ae.width,ae.height,S.format,S.type);for(let he of S.layerUpdates){let De=ae.data.subarray(he*Q/ae.data.BYTES_PER_ELEMENT,(he+1)*Q/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,ae.width,ae.height,1,de,Le,De)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,de,Le,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,ae.width,ae.height,ae.depth,0,de,Le,ae.data);else if(S.isData3DTexture)Se?(Ue&&t.texStorage3D(i.TEXTURE_3D,we,Ee,ae.width,ae.height,ae.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,de,Le,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,ae.width,ae.height,ae.depth,0,de,Le,ae.data);else if(S.isFramebufferTexture){if(Ue)if(Se)t.texStorage2D(i.TEXTURE_2D,we,Ee,ae.width,ae.height);else{let Q=ae.width,he=ae.height;for(let De=0;De<we;De++)t.texImage2D(i.TEXTURE_2D,De,Ee,Q,he,0,de,Le,null),Q>>=1,he>>=1}}else if(Pe.length>0){if(Se&&Ue){let Q=_e(Pe[0]);t.texStorage2D(i.TEXTURE_2D,we,Ee,Q.width,Q.height)}for(let Q=0,he=Pe.length;Q<he;Q++)Ie=Pe[Q],Se?B&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,de,Le,Ie):t.texImage2D(i.TEXTURE_2D,Q,Ee,de,Le,Ie);S.generateMipmaps=!1}else if(Se){if(Ue){let Q=_e(ae);t.texStorage2D(i.TEXTURE_2D,we,Ee,Q.width,Q.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Le,ae)}else t.texImage2D(i.TEXTURE_2D,0,Ee,de,Le,ae);m(S)&&d(F),O.__version=N.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function $(P,S,G){if(S.image.length!==6)return;let F=re(P,S),K=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+G);let N=n.get(K);if(K.version!==N.__version||F===!0){t.activeTexture(i.TEXTURE0+G);let O=et.getPrimaries(et.workingColorSpace),k=S.colorSpace===In?null:et.getPrimaries(S.colorSpace),H=S.colorSpace===In||O===k?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,H);let Ae=S.isCompressedTexture||S.image[0].isCompressedTexture,ae=S.image[0]&&S.image[0].isDataTexture,de=[];for(let he=0;he<6;he++)!Ae&&!ae?de[he]=b(S.image[he],!0,s.maxCubemapSize):de[he]=ae?S.image[he].image:S.image[he],de[he]=Me(S,de[he]);let Le=de[0],Ee=r.convert(S.format,S.colorSpace),Ie=r.convert(S.type),Pe=v(S.internalFormat,Ee,Ie,S.colorSpace),Se=S.isVideoTexture!==!0,Ue=N.__version===void 0||F===!0,B=K.dataReady,we=T(S,Le);pe(i.TEXTURE_CUBE_MAP,S);let Q;if(Ae){Se&&Ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Pe,Le.width,Le.height);for(let he=0;he<6;he++){Q=de[he].mipmaps;for(let De=0;De<Q.length;De++){let le=Q[De];S.format!==jt?Ee!==null?Se?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,0,0,le.width,le.height,Ee,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,Pe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Se?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,0,0,le.width,le.height,Ee,Ie,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,Pe,le.width,le.height,0,Ee,Ie,le.data)}}}else{if(Q=S.mipmaps,Se&&Ue){Q.length>0&&we++;let he=_e(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Pe,he.width,he.height)}for(let he=0;he<6;he++)if(ae){Se?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,de[he].width,de[he].height,Ee,Ie,de[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Pe,de[he].width,de[he].height,0,Ee,Ie,de[he].data);for(let De=0;De<Q.length;De++){let Re=Q[De].image[he].image;Se?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,0,0,Re.width,Re.height,Ee,Ie,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,Pe,Re.width,Re.height,0,Ee,Ie,Re.data)}}else{Se?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ee,Ie,de[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Pe,Ee,Ie,de[he]);for(let De=0;De<Q.length;De++){let le=Q[De];Se?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,0,0,Ee,Ie,le.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,Pe,Ee,Ie,le.image[he])}}}m(S)&&d(i.TEXTURE_CUBE_MAP),N.__version=K.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ue(P,S,G,F,K,N){let O=r.convert(G.format,G.colorSpace),k=r.convert(G.type),H=v(G.internalFormat,O,k,G.colorSpace),Ae=n.get(S),ae=n.get(G);if(ae.__renderTarget=S,!Ae.__hasExternalTextures){let de=Math.max(1,S.width>>N),Le=Math.max(1,S.height>>N);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,N,H,de,Le,S.depth,0,O,k,null):t.texImage2D(K,N,H,de,Le,0,O,k,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),ie(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,F,K,ae.__webglTexture,0,ce(S)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,F,K,ae.__webglTexture,N),t.bindFramebuffer(i.FRAMEBUFFER,null)}function X(P,S,G){if(i.bindRenderbuffer(i.RENDERBUFFER,P),S.depthBuffer){let F=S.depthTexture,K=F&&F.isDepthTexture?F.type:null,N=x(S.stencilBuffer,K),O=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=ce(S);ie(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,k,N,S.width,S.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,k,N,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,N,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,O,i.RENDERBUFFER,P)}else{let F=S.textures;for(let K=0;K<F.length;K++){let N=F[K],O=r.convert(N.format,N.colorSpace),k=r.convert(N.type),H=v(N.internalFormat,O,k,N.colorSpace),Ae=ce(S);G&&ie(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,H,S.width,S.height):ie(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,H,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,H,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function te(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let F=n.get(S.depthTexture);F.__renderTarget=S,(!F.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);let K=F.__webglTexture,N=ce(S);if(S.depthTexture.format===_s)ie(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,N):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(S.depthTexture.format===Es)ie(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,N):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function be(P){let S=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){let F=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),F){let K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,F.removeEventListener("dispose",K)};F.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=F}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");te(S.__webglFramebuffer,P)}else if(G){S.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[F]),S.__webglDepthbuffer[F]===void 0)S.__webglDepthbuffer[F]=i.createRenderbuffer(),X(S.__webglDepthbuffer[F],P,!1);else{let K=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=S.__webglDepthbuffer[F];i.bindRenderbuffer(i.RENDERBUFFER,N),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,N)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),X(S.__webglDepthbuffer,P,!1);else{let F=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,K)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(P,S,G){let F=n.get(P);S!==void 0&&ue(F.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&be(P)}function ge(P){let S=P.texture,G=n.get(P),F=n.get(S);P.addEventListener("dispose",A);let K=P.textures,N=P.isWebGLCubeRenderTarget===!0,O=K.length>1;if(O||(F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture()),F.__version=S.version,a.memory.textures++),N){G.__webglFramebuffer=[];for(let k=0;k<6;k++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[k]=[];for(let H=0;H<S.mipmaps.length;H++)G.__webglFramebuffer[k][H]=i.createFramebuffer()}else G.__webglFramebuffer[k]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let k=0;k<S.mipmaps.length;k++)G.__webglFramebuffer[k]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(O)for(let k=0,H=K.length;k<H;k++){let Ae=n.get(K[k]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&ie(P)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let k=0;k<K.length;k++){let H=K[k];G.__webglColorRenderbuffer[k]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[k]);let Ae=r.convert(H.format,H.colorSpace),ae=r.convert(H.type),de=v(H.internalFormat,Ae,ae,H.colorSpace,P.isXRRenderTarget===!0),Le=ce(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,de,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+k,i.RENDERBUFFER,G.__webglColorRenderbuffer[k])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),X(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(N){t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture),pe(i.TEXTURE_CUBE_MAP,S);for(let k=0;k<6;k++)if(S.mipmaps&&S.mipmaps.length>0)for(let H=0;H<S.mipmaps.length;H++)ue(G.__webglFramebuffer[k][H],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+k,H);else ue(G.__webglFramebuffer[k],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);m(S)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(O){for(let k=0,H=K.length;k<H;k++){let Ae=K[k],ae=n.get(Ae);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),pe(i.TEXTURE_2D,Ae),ue(G.__webglFramebuffer,P,Ae,i.COLOR_ATTACHMENT0+k,i.TEXTURE_2D,0),m(Ae)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let k=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(k=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(k,F.__webglTexture),pe(k,S),S.mipmaps&&S.mipmaps.length>0)for(let H=0;H<S.mipmaps.length;H++)ue(G.__webglFramebuffer[H],P,S,i.COLOR_ATTACHMENT0,k,H);else ue(G.__webglFramebuffer,P,S,i.COLOR_ATTACHMENT0,k,0);m(S)&&d(k),t.unbindTexture()}P.depthBuffer&&be(P)}function j(P){let S=P.textures;for(let G=0,F=S.length;G<F;G++){let K=S[G];if(m(K)){let N=_(P),O=n.get(K).__webglTexture;t.bindTexture(N,O),d(N),t.unbindTexture()}}}let J=[],E=[];function ye(P){if(P.samples>0){if(ie(P)===!1){let S=P.textures,G=P.width,F=P.height,K=i.COLOR_BUFFER_BIT,N=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=n.get(P),k=S.length>1;if(k)for(let H=0;H<S.length;H++)t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,O.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,O.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,O.__webglFramebuffer);for(let H=0;H<S.length;H++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),k){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,O.__webglColorRenderbuffer[H]);let Ae=n.get(S[H]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ae,0)}i.blitFramebuffer(0,0,G,F,0,0,G,F,K,i.NEAREST),c===!0&&(J.length=0,E.length=0,J.push(i.COLOR_ATTACHMENT0+H),P.depthBuffer&&P.resolveDepthBuffer===!1&&(J.push(N),E.push(N),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,E)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),k)for(let H=0;H<S.length;H++){t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,O.__webglColorRenderbuffer[H]);let Ae=n.get(S[H]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,O.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.TEXTURE_2D,Ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,O.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let S=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ce(P){return Math.min(s.maxSamples,P.samples)}function ie(P){let S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function oe(P){let S=a.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function Me(P,S){let G=P.colorSpace,F=P.format,K=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Gt&&G!==In&&(et.getTransfer(G)===ct?(F!==jt||K!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function _e(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=R,this.resetTextureUnits=I,this.setTexture2D=W,this.setTexture2DArray=z,this.setTexture3D=ee,this.setTextureCube=q,this.rebindTextures=Te,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ie}function Tx(i,e){function t(n,s=In){let r,a=et.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===Ql)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Af)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sf)return i.BYTE;if(n===wf)return i.SHORT;if(n===wr)return i.UNSIGNED_SHORT;if(n===Jl)return i.INT;if(n===Gi)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===an)return i.HALF_FLOAT;if(n===Tf)return i.ALPHA;if(n===Cf)return i.RGB;if(n===jt)return i.RGBA;if(n===Ef)return i.LUMINANCE;if(n===Rf)return i.LUMINANCE_ALPHA;if(n===_s)return i.DEPTH_COMPONENT;if(n===Es)return i.DEPTH_STENCIL;if(n===eh)return i.RED;if(n===th)return i.RED_INTEGER;if(n===Pf)return i.RG;if(n===nh)return i.RG_INTEGER;if(n===ih)return i.RGBA_INTEGER;if(n===Ua||n===Fa||n===Oa||n===Ba)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oc||n===Bc||n===kc||n===zc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gc||n===Vc||n===Wc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gc||n===Vc)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hc||n===Xc||n===qc||n===Yc||n===jc||n===Kc||n===Zc||n===Jc||n===Qc||n===$c||n===el||n===tl||n===nl||n===il)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$c)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===il)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ka||n===sl||n===rl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ka)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===If||n===al||n===ol||n===cl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ka)return r.COMPRESSED_RED_RGTC1_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Sl=class extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},pn=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cx={type:"move"},vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),d=this._getHandJoint(l,b);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cx)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,wl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Dt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yt({vertexShader:Ex,fragmentShader:Rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new Ns(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Al=class extends vi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null,b=new wl,m=t.getContextAttributes(),d=null,_=null,v=[],x=[],T=new Ne,w=null,A=new Ct;A.viewport=new rt;let C=new Ct;C.viewport=new rt;let M=[A,C],y=new Sl,D=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let $=v[Y];return $===void 0&&($=new vr,v[Y]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Y){let $=v[Y];return $===void 0&&($=new vr,v[Y]=$),$.getGripSpace()},this.getHand=function(Y){let $=v[Y];return $===void 0&&($=new vr,v[Y]=$),$.getHandSpace()};function R(Y){let $=x.indexOf(Y.inputSource);if($===-1)return;let ue=v[$];ue!==void 0&&(ue.update(Y.inputSource,Y.frame,l||a),ue.dispatchEvent({type:Y.type,data:Y.inputSource}))}function U(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",W);for(let Y=0;Y<v.length;Y++){let $=x[Y];$!==null&&(x[Y]=null,v[Y].disconnect($))}D=null,I=null,b.reset(),e.setRenderTarget(d),p=null,f=null,u=null,s=null,_=null,re.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",U),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0){let $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Nt(p.framebufferWidth,p.framebufferHeight,{format:jt,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,ue=null,X=null;m.depth&&(X=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=m.stencil?Es:_s,ue=m.stencil?Cs:Gi);let te={colorFormat:t.RGBA8,depthFormat:X,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(te),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Nt(f.textureWidth,f.textureHeight,{format:jt,type:Zn,depthTexture:new ja(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),re.setContext(s),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function W(Y){for(let $=0;$<Y.removed.length;$++){let ue=Y.removed[$],X=x.indexOf(ue);X>=0&&(x[X]=null,v[X].disconnect(ue))}for(let $=0;$<Y.added.length;$++){let ue=Y.added[$],X=x.indexOf(ue);if(X===-1){for(let be=0;be<v.length;be++)if(be>=x.length){x.push(ue),X=be;break}else if(x[be]===null){x[be]=ue,X=be;break}if(X===-1)break}let te=v[X];te&&te.connect(ue)}}let z=new V,ee=new V;function q(Y,$,ue){z.setFromMatrixPosition($.matrixWorld),ee.setFromMatrixPosition(ue.matrixWorld);let X=z.distanceTo(ee),te=$.projectionMatrix.elements,be=ue.projectionMatrix.elements,Te=te[14]/(te[10]-1),ge=te[14]/(te[10]+1),j=(te[9]+1)/te[5],J=(te[9]-1)/te[5],E=(te[8]-1)/te[0],ye=(be[8]+1)/be[0],ce=Te*E,ie=Te*ye,oe=X/(-E+ye),Me=oe*-E;if($.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Me),Y.translateZ(oe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),te[10]===-1)Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let _e=Te+oe,P=ge+oe,S=ce-Me,G=ie+(X-Me),F=j*ge/P*_e,K=J*ge/P*_e;Y.projectionMatrix.makePerspective(S,G,F,K,_e,P),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Z(Y,$){$===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices($.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let $=Y.near,ue=Y.far;b.texture!==null&&(b.depthNear>0&&($=b.depthNear),b.depthFar>0&&(ue=b.depthFar)),y.near=C.near=A.near=$,y.far=C.far=A.far=ue,(D!==y.near||I!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,I=y.far),A.layers.mask=Y.layers.mask|2,C.layers.mask=Y.layers.mask|4,y.layers.mask=A.layers.mask|C.layers.mask;let X=Y.parent,te=y.cameras;Z(y,X);for(let be=0;be<te.length;be++)Z(te[be],X);te.length===2?q(y,A,C):y.projectionMatrix.copy(A.projectionMatrix),fe(Y,y,X)};function fe(Y,$,ue){ue===null?Y.matrix.copy($.matrixWorld):(Y.matrix.copy(ue.matrixWorld),Y.matrix.invert(),Y.matrix.multiply($.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Is*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(y)};let Ce=null;function pe(Y,$){if(h=$.getViewerPose(l||a),g=$,h!==null){let ue=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let X=!1;ue.length!==y.cameras.length&&(y.cameras.length=0,X=!0);for(let be=0;be<ue.length;be++){let Te=ue[be],ge=null;if(p!==null)ge=p.getViewport(Te);else{let J=u.getViewSubImage(f,Te);ge=J.viewport,be===0&&(e.setRenderTargetTextures(_,J.colorTexture,f.ignoreDepthValues?void 0:J.depthStencilTexture),e.setRenderTarget(_))}let j=M[be];j===void 0&&(j=new Ct,j.layers.enable(be),j.viewport=new rt,M[be]=j),j.matrix.fromArray(Te.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Te.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(ge.x,ge.y,ge.width,ge.height),be===0&&(y.matrix.copy(j.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),X===!0&&y.cameras.push(j)}let te=s.enabledFeatures;if(te&&te.includes("depth-sensing")){let be=u.getDepthInformation(ue[0]);be&&be.isValid&&be.texture&&b.init(e,be,s.renderState)}}for(let ue=0;ue<v.length;ue++){let X=x[ue],te=v[ue];X!==null&&te!==void 0&&te.update(X,$,l||a)}Ce&&Ce(Y,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let re=new zf;re.setAnimationLoop(pe),this.setAnimationLoop=function(Y){Ce=Y},this.dispose=function(){}}},Oi=new gn,Px=new Ye;function Ix(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,kf(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,_,v,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),b(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,_,v):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===kt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===kt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _=e.get(d),v=_.envMap,x=_.envMapRotation;v&&(m.envMap.value=v,Oi.copy(x),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(Px.makeRotationFromEuler(Oi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,_,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===kt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function b(m,d){let _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Lx(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,v){let x=v.program;n.uniformBlockBinding(_,x)}function l(_,v){let x=s[_.id];x===void 0&&(g(_),x=h(_),s[_.id]=x,_.addEventListener("dispose",m));let T=v.program;n.updateUBOMapping(_,T);let w=e.render.frame;r[_.id]!==w&&(f(_),r[_.id]=w)}function h(_){let v=u();_.__bindingPointIndex=v;let x=i.createBuffer(),T=_.__size,w=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let v=s[_.id],x=_.uniforms,T=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,A=x.length;w<A;w++){let C=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,y=C.length;M<y;M++){let D=C[M];if(p(D,w,M,T)===!0){let I=D.__offset,R=Array.isArray(D.value)?D.value:[D.value],U=0;for(let W=0;W<R.length;W++){let z=R[W],ee=b(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,I+U,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,U),U+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,v,x,T){let w=_.value,A=v+"_"+x;if(T[A]===void 0)return typeof w=="number"||typeof w=="boolean"?T[A]=w:T[A]=w.clone(),!0;{let C=T[A];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return T[A]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(_){let v=_.uniforms,x=0,T=16;for(let A=0,C=v.length;A<C;A++){let M=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,D=M.length;y<D;y++){let I=M[y],R=Array.isArray(I.value)?I.value:[I.value];for(let U=0,W=R.length;U<W;U++){let z=R[U],ee=b(z),q=x%T,Z=q%ee.boundary,fe=q+Z;x+=Z,fe!==0&&T-fe<ee.storage&&(x+=T-fe),I.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=ee.storage}}}let w=x%T;return w>0&&(x+=T-w),_.__size=x,_.__cache={},this}function b(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){let v=_.target;v.removeEventListener("dispose",m);let x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}var Ka=class{constructor(e={}){let{canvas:t=Op(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),b=new Int32Array(4),m=null,d=null,_=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this.toneMapping=xi,this.toneMappingExposure=1;let x=this,T=!1,w=0,A=0,C=null,M=-1,y=null,D=new rt,I=new rt,R=null,U=new He(0),W=0,z=t.width,ee=t.height,q=1,Z=null,fe=null,Ce=new rt(0,0,z,ee),pe=new rt(0,0,z,ee),re=!1,Y=new Tr,$=!1,ue=!1,X=new Ye,te=new Ye,be=new V,Te=new rt,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function J(){return C===null?q:1}let E=n;function ye(L,ne){return t.getContext(L,ne)}try{let L={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",le,!1),E===null){let ne="webgl2";if(E=ye(ne,L),E===null)throw ye(ne)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ce,ie,oe,Me,_e,P,S,G,F,K,N,O,k,H,Ae,ae,de,Le,Ee,Ie,Pe,Se,Ue,B;function we(){ce=new jg(E),ce.init(),Se=new Tx(E,ce),ie=new Vg(E,ce,e,Se),oe=new Sx(E,ce),ie.reverseDepthBuffer&&f&&oe.buffers.depth.setReversed(!0),Me=new Jg(E),_e=new hx,P=new Ax(E,ce,oe,_e,ie,Se,Me),S=new Hg(x),G=new Yg(x),F=new sm(E),Ue=new zg(E,F),K=new Kg(E,F,Me,Ue),N=new $g(E,K,F,Me),Ee=new Qg(E,ie,P),ae=new Wg(_e),O=new lx(x,S,G,ce,ie,Ue,ae),k=new Ix(x,_e),H=new fx,Ae=new xx(ce),Le=new kg(x,S,G,oe,N,p,c),de=new yx(x,N,ie),B=new Lx(E,Me,ie,oe),Ie=new Gg(E,ce,Me),Pe=new Zg(E,ce,Me),Me.programs=O.programs,x.capabilities=ie,x.extensions=ce,x.properties=_e,x.renderLists=H,x.shadowMap=de,x.state=oe,x.info=Me}we();let Q=new Al(x,E);this.xr=Q,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let L=ce.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=ce.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(L){L!==void 0&&(q=L,this.setSize(z,ee,!1))},this.getSize=function(L){return L.set(z,ee)},this.setSize=function(L,ne,xe=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=L,ee=ne,t.width=Math.floor(L*q),t.height=Math.floor(ne*q),xe===!0&&(t.style.width=L+"px",t.style.height=ne+"px"),this.setViewport(0,0,L,ne)},this.getDrawingBufferSize=function(L){return L.set(z*q,ee*q).floor()},this.setDrawingBufferSize=function(L,ne,xe){z=L,ee=ne,q=xe,t.width=Math.floor(L*xe),t.height=Math.floor(ne*xe),this.setViewport(0,0,L,ne)},this.getCurrentViewport=function(L){return L.copy(D)},this.getViewport=function(L){return L.copy(Ce)},this.setViewport=function(L,ne,xe,ve){L.isVector4?Ce.set(L.x,L.y,L.z,L.w):Ce.set(L,ne,xe,ve),oe.viewport(D.copy(Ce).multiplyScalar(q).round())},this.getScissor=function(L){return L.copy(pe)},this.setScissor=function(L,ne,xe,ve){L.isVector4?pe.set(L.x,L.y,L.z,L.w):pe.set(L,ne,xe,ve),oe.scissor(I.copy(pe).multiplyScalar(q).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(L){oe.setScissorTest(re=L)},this.setOpaqueSort=function(L){Z=L},this.setTransparentSort=function(L){fe=L},this.getClearColor=function(L){return L.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(L=!0,ne=!0,xe=!0){let ve=0;if(L){let se=!1;if(C!==null){let Oe=C.texture.format;se=Oe===ih||Oe===nh||Oe===th}if(se){let Oe=C.texture.type,ke=Oe===Zn||Oe===Gi||Oe===wr||Oe===Cs||Oe===Ql||Oe===$l,Ge=Le.getClearColor(),Ve=Le.getClearAlpha(),je=Ge.r,Ke=Ge.g,We=Ge.b;ke?(g[0]=je,g[1]=Ke,g[2]=We,g[3]=Ve,E.clearBufferuiv(E.COLOR,0,g)):(b[0]=je,b[1]=Ke,b[2]=We,b[3]=Ve,E.clearBufferiv(E.COLOR,0,b))}else ve|=E.COLOR_BUFFER_BIT}ne&&(ve|=E.DEPTH_BUFFER_BIT),xe&&(ve|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(ve)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",le,!1),H.dispose(),Ae.dispose(),_e.dispose(),S.dispose(),G.dispose(),N.dispose(),Ue.dispose(),B.dispose(),O.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",$r),Q.removeEventListener("sessionend",ea),hn.stop()};function he(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let L=Me.autoReset,ne=de.enabled,xe=de.autoUpdate,ve=de.needsUpdate,se=de.type;we(),Me.autoReset=L,de.enabled=ne,de.autoUpdate=xe,de.needsUpdate=ve,de.type=se}function le(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Re(L){let ne=L.target;ne.removeEventListener("dispose",Re),ze(ne)}function ze(L){$e(L),_e.remove(L)}function $e(L){let ne=_e.get(L).programs;ne!==void 0&&(ne.forEach(function(xe){O.releaseProgram(xe)}),L.isShaderMaterial&&O.releaseShaderCache(L))}this.renderBufferDirect=function(L,ne,xe,ve,se,Oe){ne===null&&(ne=ge);let ke=se.isMesh&&se.matrixWorld.determinant()<0,Ge=It(L,ne,xe,ve,se);oe.setMaterial(ve,ke);let Ve=xe.index,je=1;if(ve.wireframe===!0){if(Ve=K.getWireframeAttribute(xe),Ve===void 0)return;je=2}let Ke=xe.drawRange,We=xe.attributes.position,st=Ke.start*je,ft=(Ke.start+Ke.count)*je;Oe!==null&&(st=Math.max(st,Oe.start*je),ft=Math.min(ft,(Oe.start+Oe.count)*je)),Ve!==null?(st=Math.max(st,0),ft=Math.min(ft,Ve.count)):We!=null&&(st=Math.max(st,0),ft=Math.min(ft,We.count));let pt=ft-st;if(pt<0||pt===1/0)return;Ue.setup(se,ve,Ge,xe,Ve);let Yt,at=Ie;if(Ve!==null&&(Yt=F.get(Ve),at=Pe,at.setIndex(Yt)),se.isMesh)ve.wireframe===!0?(oe.setLineWidth(ve.wireframeLinewidth*J()),at.setMode(E.LINES)):at.setMode(E.TRIANGLES);else if(se.isLine){let qe=ve.linewidth;qe===void 0&&(qe=1),oe.setLineWidth(qe*J()),se.isLineSegments?at.setMode(E.LINES):se.isLineLoop?at.setMode(E.LINE_LOOP):at.setMode(E.LINE_STRIP)}else se.isPoints?at.setMode(E.POINTS):se.isSprite&&at.setMode(E.TRIANGLES);if(se.isBatchedMesh)if(se._multiDrawInstances!==null)at.renderMultiDrawInstances(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount,se._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))at.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{let qe=se._multiDrawStarts,On=se._multiDrawCounts,ot=se._multiDrawCount,Sn=Ve?F.get(Ve).bytesPerElement:1,Zi=_e.get(ve).currentProgram.getUniforms();for(let $t=0;$t<ot;$t++)Zi.setValue(E,"_gl_DrawID",$t),at.render(qe[$t]/Sn,On[$t])}else if(se.isInstancedMesh)at.renderInstances(st,pt,se.count);else if(xe.isInstancedBufferGeometry){let qe=xe._maxInstanceCount!==void 0?xe._maxInstanceCount:1/0,On=Math.min(xe.instanceCount,qe);at.renderInstances(st,pt,On)}else at.render(st,pt)};function Je(L,ne,xe){L.transparent===!0&&L.side===nn&&L.forceSinglePass===!1?(L.side=kt,L.needsUpdate=!0,Xe(L,ne,xe),L.side=Dn,L.needsUpdate=!0,Xe(L,ne,xe),L.side=nn):Xe(L,ne,xe)}this.compile=function(L,ne,xe=null){xe===null&&(xe=L),d=Ae.get(xe),d.init(ne),v.push(d),xe.traverseVisible(function(se){se.isLight&&se.layers.test(ne.layers)&&(d.pushLight(se),se.castShadow&&d.pushShadow(se))}),L!==xe&&L.traverseVisible(function(se){se.isLight&&se.layers.test(ne.layers)&&(d.pushLight(se),se.castShadow&&d.pushShadow(se))}),d.setupLights();let ve=new Set;return L.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;let Oe=se.material;if(Oe)if(Array.isArray(Oe))for(let ke=0;ke<Oe.length;ke++){let Ge=Oe[ke];Je(Ge,xe,se),ve.add(Ge)}else Je(Oe,xe,se),ve.add(Oe)}),v.pop(),d=null,ve},this.compileAsync=function(L,ne,xe=null){let ve=this.compile(L,ne,xe);return new Promise(se=>{function Oe(){if(ve.forEach(function(ke){_e.get(ke).currentProgram.isReady()&&ve.delete(ke)}),ve.size===0){se(L);return}setTimeout(Oe,10)}ce.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let ut=null;function Pt(L){ut&&ut(L)}function $r(){hn.stop()}function ea(){hn.start()}let hn=new zf;hn.setAnimationLoop(Pt),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(L){ut=L,Q.setAnimationLoop(L),L===null?hn.stop():hn.start()},Q.addEventListener("sessionstart",$r),Q.addEventListener("sessionend",ea),this.render=function(L,ne){if(ne!==void 0&&ne.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(ne),ne=Q.getCamera()),L.isScene===!0&&L.onBeforeRender(x,L,ne,C),d=Ae.get(L,v.length),d.init(ne),v.push(d),te.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),Y.setFromProjectionMatrix(te),ue=this.localClippingEnabled,$=ae.init(this.clippingPlanes,ue),m=H.get(L,_.length),m.init(),_.push(m),Q.enabled===!0&&Q.isPresenting===!0){let Oe=x.xr.getDepthSensingMesh();Oe!==null&&$s(Oe,ne,-1/0,x.sortObjects)}$s(L,ne,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Z,fe),j=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,j&&Le.addToRenderList(m,L),this.info.render.frame++,$===!0&&ae.beginShadows();let xe=d.state.shadowsArray;de.render(xe,L,ne),$===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let ve=m.opaque,se=m.transmissive;if(d.setupLights(),ne.isArrayCamera){let Oe=ne.cameras;if(se.length>0)for(let ke=0,Ge=Oe.length;ke<Ge;ke++){let Ve=Oe[ke];er(ve,se,L,Ve)}j&&Le.render(L);for(let ke=0,Ge=Oe.length;ke<Ge;ke++){let Ve=Oe[ke];ta(m,L,Ve,Ve.viewport)}}else se.length>0&&er(ve,se,L,ne),j&&Le.render(L),ta(m,L,ne);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),L.isScene===!0&&L.onAfterRender(x,L,ne),Ue.resetDefaultState(),M=-1,y=null,v.pop(),v.length>0?(d=v[v.length-1],$===!0&&ae.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function $s(L,ne,xe,ve){if(L.visible===!1)return;if(L.layers.test(ne.layers)){if(L.isGroup)xe=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(ne);else if(L.isLight)d.pushLight(L),L.castShadow&&d.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Y.intersectsSprite(L)){ve&&Te.setFromMatrixPosition(L.matrixWorld).applyMatrix4(te);let ke=N.update(L),Ge=L.material;Ge.visible&&m.push(L,ke,Ge,xe,Te.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Y.intersectsObject(L))){let ke=N.update(L),Ge=L.material;if(ve&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Te.copy(L.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Te.copy(ke.boundingSphere.center)),Te.applyMatrix4(L.matrixWorld).applyMatrix4(te)),Array.isArray(Ge)){let Ve=ke.groups;for(let je=0,Ke=Ve.length;je<Ke;je++){let We=Ve[je],st=Ge[We.materialIndex];st&&st.visible&&m.push(L,ke,st,xe,Te.z,We)}}else Ge.visible&&m.push(L,ke,Ge,xe,Te.z,null)}}let Oe=L.children;for(let ke=0,Ge=Oe.length;ke<Ge;ke++)$s(Oe[ke],ne,xe,ve)}function ta(L,ne,xe,ve){let se=L.opaque,Oe=L.transmissive,ke=L.transparent;d.setupLightsView(xe),$===!0&&ae.setGlobalState(x.clippingPlanes,xe),ve&&oe.viewport(D.copy(ve)),se.length>0&&ai(se,ne,xe),Oe.length>0&&ai(Oe,ne,xe),ke.length>0&&ai(ke,ne,xe),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function er(L,ne,xe,ve){if((xe.isScene===!0?xe.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ve.id]===void 0&&(d.state.transmissionRenderTarget[ve.id]=new Nt(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?an:Zn,minFilter:dn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let Oe=d.state.transmissionRenderTarget[ve.id],ke=ve.viewport||D;Oe.setSize(ke.z,ke.w);let Ge=x.getRenderTarget();x.setRenderTarget(Oe),x.getClearColor(U),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),j&&Le.render(xe);let Ve=x.toneMapping;x.toneMapping=xi;let je=ve.viewport;if(ve.viewport!==void 0&&(ve.viewport=void 0),d.setupLightsView(ve),$===!0&&ae.setGlobalState(x.clippingPlanes,ve),ai(L,xe,ve),P.updateMultisampleRenderTarget(Oe),P.updateRenderTargetMipmap(Oe),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let We=0,st=ne.length;We<st;We++){let ft=ne[We],pt=ft.object,Yt=ft.geometry,at=ft.material,qe=ft.group;if(at.side===nn&&pt.layers.test(ve.layers)){let On=at.side;at.side=kt,at.needsUpdate=!0,Fe(pt,xe,ve,Yt,at,qe),at.side=On,at.needsUpdate=!0,Ke=!0}}Ke===!0&&(P.updateMultisampleRenderTarget(Oe),P.updateRenderTargetMipmap(Oe))}x.setRenderTarget(Ge),x.setClearColor(U,W),je!==void 0&&(ve.viewport=je),x.toneMapping=Ve}function ai(L,ne,xe){let ve=ne.isScene===!0?ne.overrideMaterial:null;for(let se=0,Oe=L.length;se<Oe;se++){let ke=L[se],Ge=ke.object,Ve=ke.geometry,je=ve===null?ke.material:ve,Ke=ke.group;Ge.layers.test(xe.layers)&&Fe(Ge,ne,xe,Ve,je,Ke)}}function Fe(L,ne,xe,ve,se,Oe){L.onBeforeRender(x,ne,xe,ve,se,Oe),L.modelViewMatrix.multiplyMatrices(xe.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),se.onBeforeRender(x,ne,xe,ve,L,Oe),se.transparent===!0&&se.side===nn&&se.forceSinglePass===!1?(se.side=kt,se.needsUpdate=!0,x.renderBufferDirect(xe,ne,ve,se,L,Oe),se.side=Dn,se.needsUpdate=!0,x.renderBufferDirect(xe,ne,ve,se,L,Oe),se.side=nn):x.renderBufferDirect(xe,ne,ve,se,L,Oe),L.onAfterRender(x,ne,xe,ve,se,Oe)}function Xe(L,ne,xe){ne.isScene!==!0&&(ne=ge);let ve=_e.get(L),se=d.state.lights,Oe=d.state.shadowsArray,ke=se.state.version,Ge=O.getParameters(L,se.state,Oe,ne,xe),Ve=O.getProgramCacheKey(Ge),je=ve.programs;ve.environment=L.isMeshStandardMaterial?ne.environment:null,ve.fog=ne.fog,ve.envMap=(L.isMeshStandardMaterial?G:S).get(L.envMap||ve.environment),ve.envMapRotation=ve.environment!==null&&L.envMap===null?ne.environmentRotation:L.envMapRotation,je===void 0&&(L.addEventListener("dispose",Re),je=new Map,ve.programs=je);let Ke=je.get(Ve);if(Ke!==void 0){if(ve.currentProgram===Ke&&ve.lightsStateVersion===ke)return gt(L,Ge),Ke}else Ge.uniforms=O.getUniforms(L),L.onBeforeCompile(Ge,x),Ke=O.acquireProgram(Ge,Ve),je.set(Ve,Ke),ve.uniforms=Ge.uniforms;let We=ve.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(We.clippingPlanes=ae.uniform),gt(L,Ge),ve.needsLights=oi(L),ve.lightsStateVersion=ke,ve.needsLights&&(We.ambientLightColor.value=se.state.ambient,We.lightProbe.value=se.state.probe,We.directionalLights.value=se.state.directional,We.directionalLightShadows.value=se.state.directionalShadow,We.spotLights.value=se.state.spot,We.spotLightShadows.value=se.state.spotShadow,We.rectAreaLights.value=se.state.rectArea,We.ltc_1.value=se.state.rectAreaLTC1,We.ltc_2.value=se.state.rectAreaLTC2,We.pointLights.value=se.state.point,We.pointLightShadows.value=se.state.pointShadow,We.hemisphereLights.value=se.state.hemi,We.directionalShadowMap.value=se.state.directionalShadowMap,We.directionalShadowMatrix.value=se.state.directionalShadowMatrix,We.spotShadowMap.value=se.state.spotShadowMap,We.spotLightMatrix.value=se.state.spotLightMatrix,We.spotLightMap.value=se.state.spotLightMap,We.pointShadowMap.value=se.state.pointShadowMap,We.pointShadowMatrix.value=se.state.pointShadowMatrix),ve.currentProgram=Ke,ve.uniformsList=null,Ke}function it(L){if(L.uniformsList===null){let ne=L.currentProgram.getUniforms();L.uniformsList=Ms.seqWithValue(ne.seq,L.uniforms)}return L.uniformsList}function gt(L,ne){let xe=_e.get(L);xe.outputColorSpace=ne.outputColorSpace,xe.batching=ne.batching,xe.batchingColor=ne.batchingColor,xe.instancing=ne.instancing,xe.instancingColor=ne.instancingColor,xe.instancingMorph=ne.instancingMorph,xe.skinning=ne.skinning,xe.morphTargets=ne.morphTargets,xe.morphNormals=ne.morphNormals,xe.morphColors=ne.morphColors,xe.morphTargetsCount=ne.morphTargetsCount,xe.numClippingPlanes=ne.numClippingPlanes,xe.numIntersection=ne.numClipIntersection,xe.vertexAlphas=ne.vertexAlphas,xe.vertexTangents=ne.vertexTangents,xe.toneMapping=ne.toneMapping}function It(L,ne,xe,ve,se){ne.isScene!==!0&&(ne=ge),P.resetTextureUnits();let Oe=ne.fog,ke=ve.isMeshStandardMaterial?ne.environment:null,Ge=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Gt,Ve=(ve.isMeshStandardMaterial?G:S).get(ve.envMap||ke),je=ve.vertexColors===!0&&!!xe.attributes.color&&xe.attributes.color.itemSize===4,Ke=!!xe.attributes.tangent&&(!!ve.normalMap||ve.anisotropy>0),We=!!xe.morphAttributes.position,st=!!xe.morphAttributes.normal,ft=!!xe.morphAttributes.color,pt=xi;ve.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(pt=x.toneMapping);let Yt=xe.morphAttributes.position||xe.morphAttributes.normal||xe.morphAttributes.color,at=Yt!==void 0?Yt.length:0,qe=_e.get(ve),On=d.state.lights;if($===!0&&(ue===!0||L!==y)){let un=L===y&&ve.id===M;ae.setState(ve,L,un)}let ot=!1;ve.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==On.state.version||qe.outputColorSpace!==Ge||se.isBatchedMesh&&qe.batching===!1||!se.isBatchedMesh&&qe.batching===!0||se.isBatchedMesh&&qe.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&qe.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&qe.instancing===!1||!se.isInstancedMesh&&qe.instancing===!0||se.isSkinnedMesh&&qe.skinning===!1||!se.isSkinnedMesh&&qe.skinning===!0||se.isInstancedMesh&&qe.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&qe.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&qe.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&qe.instancingMorph===!1&&se.morphTexture!==null||qe.envMap!==Ve||ve.fog===!0&&qe.fog!==Oe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ae.numPlanes||qe.numIntersection!==ae.numIntersection)||qe.vertexAlphas!==je||qe.vertexTangents!==Ke||qe.morphTargets!==We||qe.morphNormals!==st||qe.morphColors!==ft||qe.toneMapping!==pt||qe.morphTargetsCount!==at)&&(ot=!0):(ot=!0,qe.__version=ve.version);let Sn=qe.currentProgram;ot===!0&&(Sn=Xe(ve,ne,se));let Zi=!1,$t=!1,tr=!1,mt=Sn.getUniforms(),Rn=qe.uniforms;if(oe.useProgram(Sn.program)&&(Zi=!0,$t=!0,tr=!0),ve.id!==M&&(M=ve.id,$t=!0),Zi||y!==L){oe.buffers.depth.getReversed()?(X.copy(L.projectionMatrix),kp(X),zp(X),mt.setValue(E,"projectionMatrix",X)):mt.setValue(E,"projectionMatrix",L.projectionMatrix),mt.setValue(E,"viewMatrix",L.matrixWorldInverse);let ci=mt.map.cameraPosition;ci!==void 0&&ci.setValue(E,be.setFromMatrixPosition(L.matrixWorld)),ie.logarithmicDepthBuffer&&mt.setValue(E,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ve.isMeshPhongMaterial||ve.isMeshToonMaterial||ve.isMeshLambertMaterial||ve.isMeshBasicMaterial||ve.isMeshStandardMaterial||ve.isShaderMaterial)&&mt.setValue(E,"isOrthographic",L.isOrthographicCamera===!0),y!==L&&(y=L,$t=!0,tr=!0)}if(se.isSkinnedMesh){mt.setOptional(E,se,"bindMatrix"),mt.setOptional(E,se,"bindMatrixInverse");let un=se.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),mt.setValue(E,"boneTexture",un.boneTexture,P))}se.isBatchedMesh&&(mt.setOptional(E,se,"batchingTexture"),mt.setValue(E,"batchingTexture",se._matricesTexture,P),mt.setOptional(E,se,"batchingIdTexture"),mt.setValue(E,"batchingIdTexture",se._indirectTexture,P),mt.setOptional(E,se,"batchingColorTexture"),se._colorsTexture!==null&&mt.setValue(E,"batchingColorTexture",se._colorsTexture,P));let nr=xe.morphAttributes;if((nr.position!==void 0||nr.normal!==void 0||nr.color!==void 0)&&Ee.update(se,xe,Sn),($t||qe.receiveShadow!==se.receiveShadow)&&(qe.receiveShadow=se.receiveShadow,mt.setValue(E,"receiveShadow",se.receiveShadow)),ve.isMeshGouraudMaterial&&ve.envMap!==null&&(Rn.envMap.value=Ve,Rn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ve.isMeshStandardMaterial&&ve.envMap===null&&ne.environment!==null&&(Rn.envMapIntensity.value=ne.environmentIntensity),$t&&(mt.setValue(E,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&Fn(Rn,tr),Oe&&ve.fog===!0&&k.refreshFogUniforms(Rn,Oe),k.refreshMaterialUniforms(Rn,ve,q,ee,d.state.transmissionRenderTarget[L.id]),Ms.upload(E,it(qe),Rn,P)),ve.isShaderMaterial&&ve.uniformsNeedUpdate===!0&&(Ms.upload(E,it(qe),Rn,P),ve.uniformsNeedUpdate=!1),ve.isSpriteMaterial&&mt.setValue(E,"center",se.center),mt.setValue(E,"modelViewMatrix",se.modelViewMatrix),mt.setValue(E,"normalMatrix",se.normalMatrix),mt.setValue(E,"modelMatrix",se.matrixWorld),ve.isShaderMaterial||ve.isRawShaderMaterial){let un=ve.uniformsGroups;for(let ci=0,li=un.length;ci<li;ci++){let Yh=un[ci];B.update(Yh,Sn),B.bind(Yh,Sn)}}return Sn}function Fn(L,ne){L.ambientLightColor.needsUpdate=ne,L.lightProbe.needsUpdate=ne,L.directionalLights.needsUpdate=ne,L.directionalLightShadows.needsUpdate=ne,L.pointLights.needsUpdate=ne,L.pointLightShadows.needsUpdate=ne,L.spotLights.needsUpdate=ne,L.spotLightShadows.needsUpdate=ne,L.rectAreaLights.needsUpdate=ne,L.hemisphereLights.needsUpdate=ne}function oi(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(L,ne,xe){_e.get(L.texture).__webglTexture=ne,_e.get(L.depthTexture).__webglTexture=xe;let ve=_e.get(L);ve.__hasExternalTextures=!0,ve.__autoAllocateDepthBuffer=xe===void 0,ve.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ve.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,ne){let xe=_e.get(L);xe.__webglFramebuffer=ne,xe.__useDefaultFramebuffer=ne===void 0},this.setRenderTarget=function(L,ne=0,xe=0){C=L,w=ne,A=xe;let ve=!0,se=null,Oe=!1,ke=!1;if(L){let Ve=_e.get(L);if(Ve.__useDefaultFramebuffer!==void 0)oe.bindFramebuffer(E.FRAMEBUFFER,null),ve=!1;else if(Ve.__webglFramebuffer===void 0)P.setupRenderTarget(L);else if(Ve.__hasExternalTextures)P.rebindTextures(L,_e.get(L.texture).__webglTexture,_e.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let We=L.depthTexture;if(Ve.__boundDepthTexture!==We){if(We!==null&&_e.has(We)&&(L.width!==We.image.width||L.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(L)}}let je=L.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(ke=!0);let Ke=_e.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ke[ne])?se=Ke[ne][xe]:se=Ke[ne],Oe=!0):L.samples>0&&P.useMultisampledRTT(L)===!1?se=_e.get(L).__webglMultisampledFramebuffer:Array.isArray(Ke)?se=Ke[xe]:se=Ke,D.copy(L.viewport),I.copy(L.scissor),R=L.scissorTest}else D.copy(Ce).multiplyScalar(q).floor(),I.copy(pe).multiplyScalar(q).floor(),R=re;if(oe.bindFramebuffer(E.FRAMEBUFFER,se)&&ve&&oe.drawBuffers(L,se),oe.viewport(D),oe.scissor(I),oe.setScissorTest(R),Oe){let Ve=_e.get(L.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ve.__webglTexture,xe)}else if(ke){let Ve=_e.get(L.texture),je=ne||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ve.__webglTexture,xe||0,je)}M=-1},this.readRenderTargetPixels=function(L,ne,xe,ve,se,Oe,ke){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=_e.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke]),Ge){oe.bindFramebuffer(E.FRAMEBUFFER,Ge);try{let Ve=L.texture,je=Ve.format,Ke=Ve.type;if(!ie.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne>=0&&ne<=L.width-ve&&xe>=0&&xe<=L.height-se&&E.readPixels(ne,xe,ve,se,Se.convert(je),Se.convert(Ke),Oe)}finally{let Ve=C!==null?_e.get(C).__webglFramebuffer:null;oe.bindFramebuffer(E.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(L,ne,xe,ve,se,Oe,ke){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=_e.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke]),Ge){let Ve=L.texture,je=Ve.format,Ke=Ve.type;if(!ie.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ne>=0&&ne<=L.width-ve&&xe>=0&&xe<=L.height-se){oe.bindFramebuffer(E.FRAMEBUFFER,Ge);let We=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,We),E.bufferData(E.PIXEL_PACK_BUFFER,Oe.byteLength,E.STREAM_READ),E.readPixels(ne,xe,ve,se,Se.convert(je),Se.convert(Ke),0);let st=C!==null?_e.get(C).__webglFramebuffer:null;oe.bindFramebuffer(E.FRAMEBUFFER,st);let ft=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Bp(E,ft,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,We),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,Oe),E.deleteBuffer(We),E.deleteSync(ft),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,ne=null,xe=0){L.isTexture!==!0&&(pr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ne=arguments[0]||null,L=arguments[1]);let ve=Math.pow(2,-xe),se=Math.floor(L.image.width*ve),Oe=Math.floor(L.image.height*ve),ke=ne!==null?ne.x:0,Ge=ne!==null?ne.y:0;P.setTexture2D(L,0),E.copyTexSubImage2D(E.TEXTURE_2D,xe,0,0,ke,Ge,se,Oe),oe.unbindTexture()},this.copyTextureToTexture=function(L,ne,xe=null,ve=null,se=0){L.isTexture!==!0&&(pr("WebGLRenderer: copyTextureToTexture function signature has changed."),ve=arguments[0]||null,L=arguments[1],ne=arguments[2],se=arguments[3]||0,xe=null);let Oe,ke,Ge,Ve,je,Ke,We,st,ft,pt=L.isCompressedTexture?L.mipmaps[se]:L.image;xe!==null?(Oe=xe.max.x-xe.min.x,ke=xe.max.y-xe.min.y,Ge=xe.isBox3?xe.max.z-xe.min.z:1,Ve=xe.min.x,je=xe.min.y,Ke=xe.isBox3?xe.min.z:0):(Oe=pt.width,ke=pt.height,Ge=pt.depth||1,Ve=0,je=0,Ke=0),ve!==null?(We=ve.x,st=ve.y,ft=ve.z):(We=0,st=0,ft=0);let Yt=Se.convert(ne.format),at=Se.convert(ne.type),qe;ne.isData3DTexture?(P.setTexture3D(ne,0),qe=E.TEXTURE_3D):ne.isDataArrayTexture||ne.isCompressedArrayTexture?(P.setTexture2DArray(ne,0),qe=E.TEXTURE_2D_ARRAY):(P.setTexture2D(ne,0),qe=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,ne.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,ne.unpackAlignment);let On=E.getParameter(E.UNPACK_ROW_LENGTH),ot=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Sn=E.getParameter(E.UNPACK_SKIP_PIXELS),Zi=E.getParameter(E.UNPACK_SKIP_ROWS),$t=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,pt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,pt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ve),E.pixelStorei(E.UNPACK_SKIP_ROWS,je),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ke);let tr=L.isDataArrayTexture||L.isData3DTexture,mt=ne.isDataArrayTexture||ne.isData3DTexture;if(L.isRenderTargetTexture||L.isDepthTexture){let Rn=_e.get(L),nr=_e.get(ne),un=_e.get(Rn.__renderTarget),ci=_e.get(nr.__renderTarget);oe.bindFramebuffer(E.READ_FRAMEBUFFER,un.__webglFramebuffer),oe.bindFramebuffer(E.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let li=0;li<Ge;li++)tr&&E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,_e.get(L).__webglTexture,se,Ke+li),L.isDepthTexture?(mt&&E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,_e.get(ne).__webglTexture,se,ft+li),E.blitFramebuffer(Ve,je,Oe,ke,We,st,Oe,ke,E.DEPTH_BUFFER_BIT,E.NEAREST)):mt?E.copyTexSubImage3D(qe,se,We,st,ft+li,Ve,je,Oe,ke):E.copyTexSubImage2D(qe,se,We,st,ft+li,Ve,je,Oe,ke);oe.bindFramebuffer(E.READ_FRAMEBUFFER,null),oe.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else mt?L.isDataTexture||L.isData3DTexture?E.texSubImage3D(qe,se,We,st,ft,Oe,ke,Ge,Yt,at,pt.data):ne.isCompressedArrayTexture?E.compressedTexSubImage3D(qe,se,We,st,ft,Oe,ke,Ge,Yt,pt.data):E.texSubImage3D(qe,se,We,st,ft,Oe,ke,Ge,Yt,at,pt):L.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,se,We,st,Oe,ke,Yt,at,pt.data):L.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,se,We,st,pt.width,pt.height,Yt,pt.data):E.texSubImage2D(E.TEXTURE_2D,se,We,st,Oe,ke,Yt,at,pt);E.pixelStorei(E.UNPACK_ROW_LENGTH,On),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ot),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Sn),E.pixelStorei(E.UNPACK_SKIP_ROWS,Zi),E.pixelStorei(E.UNPACK_SKIP_IMAGES,$t),se===0&&ne.generateMipmaps&&E.generateMipmap(qe),oe.unbindTexture()},this.copyTextureToTexture3D=function(L,ne,xe=null,ve=null,se=0){return L.isTexture!==!0&&(pr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),xe=arguments[0]||null,ve=arguments[1]||null,L=arguments[2],ne=arguments[3],se=arguments[4]||0),pr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,ne,xe,ve,se)},this.initRenderTarget=function(L){_e.get(L).__webglFramebuffer===void 0&&P.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?P.setTextureCube(L,0):L.isData3DTexture?P.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?P.setTexture2DArray(L,0):P.setTexture2D(L,0),oe.unbindTexture()},this.resetState=function(){w=0,A=0,C=null,oe.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}},Za=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ja=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ll,this.updateRanges=[],this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Vt=new V,Vi=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Cr=class extends Zt{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},us,or=new V,fs=new V,ds=new V,ps=new Ne,cr=new Ne,Xf=new Ye,Ma=new V,lr=new V,Sa=new V,ju=new Ne,bc=new Ne,Ku=new Ne,Qa=class extends bt{constructor(e=new Cr){if(super(),this.isSprite=!0,this.type="Sprite",us===void 0){us=new xt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fs(t,5);us.setIndex([0,1,2,0,2,3]),us.setAttribute("position",new Vi(n,3,0,!1)),us.setAttribute("uv",new Vi(n,2,3,!1))}this.geometry=us,this.material=e,this.center=new Ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fs.setFromMatrixScale(this.matrixWorld),Xf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ds.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fs.multiplyScalar(-ds.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;wa(Ma.set(-.5,-.5,0),ds,a,fs,s,r),wa(lr.set(.5,-.5,0),ds,a,fs,s,r),wa(Sa.set(.5,.5,0),ds,a,fs,s,r),ju.set(0,0),bc.set(1,0),Ku.set(1,1);let o=e.ray.intersectTriangle(Ma,lr,Sa,!1,or);if(o===null&&(wa(lr.set(-.5,.5,0),ds,a,fs,s,r),bc.set(0,1),o=e.ray.intersectTriangle(Ma,Sa,lr,!1,or),o===null))return;let c=e.ray.origin.distanceTo(or);c<e.near||c>e.far||t.push({distance:c,point:or.clone(),uv:gi.getInterpolation(or,Ma,lr,Sa,ju,bc,Ku,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function wa(i,e,t,n,s,r){ps.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(cr.x=r*ps.x-s*ps.y,cr.y=s*ps.x+r*ps.y):cr.copy(ps),i.copy(e),i.x+=cr.x,i.y+=cr.y,i.applyMatrix4(Xf)}var Zu=new V,Ju=new rt,Qu=new rt,Dx=new V,$u=new Ye,Aa=new V,xc=new rn,ef=new Ye,vc=new Ls,$a=class extends wt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Jh,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Kt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Aa),this.boundingBox.expandByPoint(Aa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new rn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Aa),this.boundingSphere.expandByPoint(Aa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xc.copy(this.boundingSphere),xc.applyMatrix4(s),e.ray.intersectsSphere(xc)!==!1&&(ef.copy(s).invert(),vc.copy(e.ray).applyMatrix4(ef),!(this.boundingBox!==null&&vc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,vc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Jh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Ju.fromBufferAttribute(s.attributes.skinIndex,e),Qu.fromBufferAttribute(s.attributes.skinWeight,e),Zu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Qu.getComponent(r);if(a!==0){let o=Ju.getComponent(r);$u.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Dx.copy(Zu).applyMatrix4($u),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Er=class extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Os=class extends Dt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=zt,h=zt,u,f){super(null,a,o,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},tf=new Ye,Nx=new Ye,eo=class i{constructor(e=[],t=[]){this.uuid=mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Nx;tf.multiplyMatrices(o,t[r]),tf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Os(t,e,e,jt,En);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Er),this.bones.push(a),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Wi=class extends _t{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ms=new Ye,nf=new Ye,Ta=[],sf=new Kt,Ux=new Ye,hr=new wt,ur=new rn,to=class extends wt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ux)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ms),sf.copy(e.boundingBox).applyMatrix4(ms),this.boundingBox.union(sf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ms),ur.copy(e.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),e.ray.intersectsSphere(ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ms),nf.multiplyMatrices(n,ms),hr.matrixWorld=nf,hr.raycast(e,Ta);for(let a=0,o=Ta.length;a<o;a++){let c=Ta[a];c.instanceId=r,c.object=this,t.push(c)}Ta.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Wi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Os(new Float32Array(s*this.count),s,this.count,eh,En));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Rr=class extends Zt{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},no=new V,io=new V,rf=new Ye,fr=new Ls,Ca=new rn,_c=new V,af=new V,Bs=class extends bt{constructor(e=new xt,t=new Rr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)no.fromBufferAttribute(t,s-1),io.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=no.distanceTo(io);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(s),Ca.radius+=r,e.ray.intersectsSphere(Ca)===!1)return;rf.copy(s).invert(),fr.copy(e.ray).applyMatrix4(rf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let b=p,m=g-1;b<m;b+=l){let d=h.getX(b),_=h.getX(b+1),v=Ea(this,e,fr,c,d,_);v&&t.push(v)}if(this.isLineLoop){let b=h.getX(g-1),m=h.getX(p),d=Ea(this,e,fr,c,b,m);d&&t.push(d)}}else{let p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let b=p,m=g-1;b<m;b+=l){let d=Ea(this,e,fr,c,b,b+1);d&&t.push(d)}if(this.isLineLoop){let b=Ea(this,e,fr,c,g-1,p);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ea(i,e,t,n,s,r){let a=i.geometry.attributes.position;if(no.fromBufferAttribute(a,s),io.fromBufferAttribute(a,r),t.distanceSqToSegment(no,io,_c,af)>n)return;_c.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(_c);if(!(c<e.near||c>e.far))return{distance:c,point:af.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var of=new V,cf=new V,so=class extends Bs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)of.fromBufferAttribute(t,s),cf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+of.distanceTo(cf);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ro=class extends Bs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Hi=class extends Zt{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},lf=new Ye,Tl=new Ls,Ra=new rn,Pa=new V,ks=class extends bt{constructor(e=new xt,t=new Hi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(s),Ra.radius+=r,e.ray.intersectsSphere(Ra)===!1)return;lf.copy(s).invert(),Tl.copy(e.ray).applyMatrix4(lf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=f,b=p;g<b;g++){let m=l.getX(g);Pa.fromBufferAttribute(u,m),hf(Pa,m,c,s,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,b=p;g<b;g++)Pa.fromBufferAttribute(u,g),hf(Pa,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function hf(i,e,t,n,s,r,a){let o=Tl.distanceSqToPoint(i);if(o<t){let c=new V;Tl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ao=class extends Dt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Ne:new V);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new V,s=[],r=[],a=[],o=new V,c=new Ye;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new V)}r[0]=new V,a[0]=new V;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Tt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Tt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Pr=class extends bn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Ne){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Cl=class extends Pr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ah(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,p*=h,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Ia=new V,yc=new ah,Mc=new ah,Sc=new ah,Ir=class extends bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new V){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Ia.subVectors(s[0],s[1]).add(s[0]),l=Ia);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ia.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ia),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),b=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),yc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,b,m),Mc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,b,m),Sc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,b,m)}else this.curveType==="catmullrom"&&(yc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Mc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Sc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(yc.calc(c),Mc.calc(c),Sc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new V().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function uf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Fx(i,e){let t=1-i;return t*t*e}function Ox(i,e){return 2*(1-i)*i*e}function Bx(i,e){return i*i*e}function _r(i,e,t,n){return Fx(i,e)+Ox(i,t)+Bx(i,n)}function kx(i,e){let t=1-i;return t*t*t*e}function zx(i,e){let t=1-i;return 3*t*t*i*e}function Gx(i,e){return 3*(1-i)*i*i*e}function Vx(i,e){return i*i*i*e}function yr(i,e,t,n,s){return kx(i,e)+zx(i,t)+Gx(i,n)+Vx(i,s)}var oo=class extends bn{constructor(e=new Ne,t=new Ne,n=new Ne,s=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ne){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(yr(e,s.x,r.x,a.x,o.x),yr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},El=class extends bn{constructor(e=new V,t=new V,n=new V,s=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new V){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(yr(e,s.x,r.x,a.x,o.x),yr(e,s.y,r.y,a.y,o.y),yr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},co=class extends bn{constructor(e=new Ne,t=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ne){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rl=class extends bn{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lo=class extends bn{constructor(e=new Ne,t=new Ne,n=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ne){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(_r(e,s.x,r.x,a.x),_r(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ho=class extends bn{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(_r(e,s.x,r.x,a.x),_r(e,s.y,r.y,a.y),_r(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zs=class extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ne){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(uf(o,c.x,l.x,h.x,u.x),uf(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ne().fromArray(s))}return this}},uo=Object.freeze({__proto__:null,ArcCurve:Cl,CatmullRomCurve3:Ir,CubicBezierCurve:oo,CubicBezierCurve3:El,EllipseCurve:Pr,LineCurve:co,LineCurve3:Rl,QuadraticBezierCurve:lo,QuadraticBezierCurve3:ho,SplineCurve:zs}),Pl=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new uo[s.type]().fromJSON(s))}return this}},Xi=class extends Pl{constructor(e){super(),this.type="Path",this.currentPoint=new Ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new co(this.currentPoint.clone(),new Ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new lo(this.currentPoint.clone(),new Ne(e,t),new Ne(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new oo(this.currentPoint.clone(),new Ne(e,t),new Ne(n,s),new Ne(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new zs(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new Pr(e,t,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Lr=class i extends xt{constructor(e=[new Ne(0,-.5),new Ne(.5,0),new Ne(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Tt(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,u=new V,f=new Ne,p=new V,g=new V,b=new V,m=0,d=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,d=e[_+1].y-e[_].y,p.x=d*1,p.y=-m,p.z=d*0,b.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(b.x,b.y,b.z);break;default:m=e[_+1].x-e[_].x,d=e[_+1].y-e[_].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=b.x,p.y+=b.y,p.z+=b.z,p.normalize(),c.push(p.x,p.y,p.z),b.copy(g)}for(let _=0;_<=t;_++){let v=n+_*h*s,x=Math.sin(v),T=Math.cos(v);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*x,u.y=e[w].y,u.z=e[w].x*T,a.push(u.x,u.y,u.z),f.x=_/t,f.y=w/(e.length-1),o.push(f.x,f.y);let A=c[3*w+0]*x,C=c[3*w+1],M=c[3*w+0]*T;l.push(A,C,M)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){let x=v+_*e.length,T=x,w=x+e.length,A=x+e.length+1,C=x+1;r.push(T,w,C),r.push(A,C,w)}this.setIndex(r),this.setAttribute("position",new nt(a,3)),this.setAttribute("uv",new nt(o,2)),this.setAttribute("normal",new nt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},fo=class i extends Lr{constructor(e=1,t=1,n=4,s=8){let r=new Xi;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}};var Dr=class i extends xt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,b=[],m=n/2,d=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(p,2));function _(){let x=new V,T=new V,w=0,A=(t-e)/n;for(let C=0;C<=r;C++){let M=[],y=C/r,D=y*(t-e)+e;for(let I=0;I<=s;I++){let R=I/s,U=R*c+o,W=Math.sin(U),z=Math.cos(U);T.x=D*W,T.y=-y*n+m,T.z=D*z,u.push(T.x,T.y,T.z),x.set(W,A,z).normalize(),f.push(x.x,x.y,x.z),p.push(R,1-y),M.push(g++)}b.push(M)}for(let C=0;C<s;C++)for(let M=0;M<r;M++){let y=b[M][C],D=b[M+1][C],I=b[M+1][C+1],R=b[M][C+1];(e>0||M!==0)&&(h.push(y,D,R),w+=3),(t>0||M!==r-1)&&(h.push(D,I,R),w+=3)}l.addGroup(d,w,0),d+=w}function v(x){let T=g,w=new Ne,A=new V,C=0,M=x===!0?e:t,y=x===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),g++;let D=g;for(let I=0;I<=s;I++){let U=I/s*c+o,W=Math.cos(U),z=Math.sin(U);A.x=M*z,A.y=m*y,A.z=M*W,u.push(A.x,A.y,A.z),f.push(0,y,0),w.x=W*.5+.5,w.y=z*.5*y+.5,p.push(w.x,w.y),g++}for(let I=0;I<s;I++){let R=T+I,U=D+I;x===!0?h.push(U,U+1,R):h.push(U+1,U,R),C+=3}l.addGroup(d,C,x===!0?1:2),d+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},po=class i extends Dr{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Nr=class extends Xi{constructor(e){super(e),this.uuid=mn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Xi().fromJSON(s))}return this}},Wx={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=qf(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,f,p;if(n&&(r=jx(i,e,r,t)),i.length>80*t){o=l=i[0],c=h=i[1];for(let g=t;g<s;g+=t)u=i[g],f=i[g+1],u<o&&(o=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);p=Math.max(l-o,h-c),p=p!==0?32767/p:0}return Ur(r,a,t,o,c,p,0),a}};function qf(i,e,t,n,s){let r,a;if(s===rv(i,e,t,n)>0)for(r=e;r<t;r+=n)a=ff(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=ff(r,i[r],i[r+1],a);return a&&Ro(a,a.next)&&(Or(a),a=a.next),a}function qi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ro(t,t.next)||vt(t.prev,t,t.next)===0)){if(Or(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ur(i,e,t,n,s,r,a){if(!i)return;!a&&r&&$x(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Xx(i,n,s,r):Hx(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Or(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=qx(qi(i),e,t),Ur(i,e,t,n,s,r,2)):a===2&&Yx(i,e,t,n,s,r):Ur(qi(i),e,t,n,s,r,1);break}}}function Hx(i){let e=i.prev,t=i,n=i.next;if(vt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,f=s>r?s>a?s:a:r>a?r:a,p=o>c?o>l?o:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&xs(s,o,r,c,a,l,g.x,g.y)&&vt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Xx(i,e,t,n){let s=i.prev,r=i,a=i.next;if(vt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,f=a.y,p=o<c?o<l?o:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,b=o>c?o>l?o:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,d=Il(p,g,e,t,n),_=Il(b,m,e,t,n),v=i.prevZ,x=i.nextZ;for(;v&&v.z>=d&&x&&x.z<=_;){if(v.x>=p&&v.x<=b&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&xs(o,h,c,u,l,f,v.x,v.y)&&vt(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=p&&x.x<=b&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&xs(o,h,c,u,l,f,x.x,x.y)&&vt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=d;){if(v.x>=p&&v.x<=b&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&xs(o,h,c,u,l,f,v.x,v.y)&&vt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=_;){if(x.x>=p&&x.x<=b&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&xs(o,h,c,u,l,f,x.x,x.y)&&vt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function qx(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Ro(s,r)&&Yf(s,n,n.next,r)&&Fr(s,r)&&Fr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Or(n),Or(n.next),n=i=r),n=n.next}while(n!==i);return qi(n)}function Yx(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&nv(a,o)){let c=jf(a,o);a=qi(a,a.next),c=qi(c,c.next),Ur(a,e,t,n,s,r,0),Ur(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function jx(i,e,t,n){let s=[],r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=qf(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(tv(l));for(s.sort(Kx),r=0;r<s.length;r++)t=Zx(s[r],t);return t}function Kx(i,e){return i.x-e.x}function Zx(i,e){let t=Jx(i,e);if(!t)return e;let n=jf(t,i);return qi(n,n.next),qi(t,t.next)}function Jx(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&xs(a<l?r:n,a,c,l,a<l?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Fr(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Qx(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function Qx(i,e){return vt(i.prev,i,e.prev)<0&&vt(e.next,i,i.next)<0}function $x(i,e,t,n){let s=i;do s.z===0&&(s.z=Il(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ev(s)}function ev(i){let e,t,n,s,r,a,o,c,l=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(a>1);return i}function Il(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function tv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function xs(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function nv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!iv(i,e)&&(Fr(i,e)&&Fr(e,i)&&sv(i,e)&&(vt(i.prev,i,e.prev)||vt(i,e.prev,e))||Ro(i,e)&&vt(i.prev,i,i.next)>0&&vt(e.prev,e,e.next)>0)}function vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ro(i,e){return i.x===e.x&&i.y===e.y}function Yf(i,e,t,n){let s=Da(vt(i,e,t)),r=Da(vt(i,e,n)),a=Da(vt(t,n,i)),o=Da(vt(t,n,e));return!!(s!==r&&a!==o||s===0&&La(i,t,e)||r===0&&La(i,n,e)||a===0&&La(t,i,n)||o===0&&La(t,e,n))}function La(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Da(i){return i>0?1:i<0?-1:0}function iv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Yf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Fr(i,e){return vt(i.prev,i,i.next)<0?vt(i,e,i.next)>=0&&vt(i,i.prev,e)>=0:vt(i,e,i.prev)<0||vt(i,i.next,e)<0}function sv(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function jf(i,e){let t=new Ll(i.i,i.x,i.y),n=new Ll(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ff(i,e,t,n){let s=new Ll(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Or(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ll(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function rv(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Mr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];df(e),pf(n,e);let a=e.length;t.forEach(df);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,pf(n,t[c]);let o=Wx.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function df(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function pf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var mo=class i extends xt{constructor(e=new Nr([new Ne(.5,.5),new Ne(-.5,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new nt(s,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:av,v,x=!1,T,w,A,C;d&&(v=d.getSpacedPoints(h),x=!0,f=!1,T=d.computeFrenetFrames(h,!1),w=new V,A=new V,C=new V),f||(m=0,p=0,g=0,b=0);let M=o.extractPoints(l),y=M.shape,D=M.holes;if(!Mr.isClockWise(y)){y=y.reverse();for(let j=0,J=D.length;j<J;j++){let E=D[j];Mr.isClockWise(E)&&(D[j]=E.reverse())}}let R=Mr.triangulateShape(y,D),U=y;for(let j=0,J=D.length;j<J;j++){let E=D[j];y=y.concat(E)}function W(j,J,E){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(J,E)}let z=y.length,ee=R.length;function q(j,J,E){let ye,ce,ie,oe=j.x-J.x,Me=j.y-J.y,_e=E.x-j.x,P=E.y-j.y,S=oe*oe+Me*Me,G=oe*P-Me*_e;if(Math.abs(G)>Number.EPSILON){let F=Math.sqrt(S),K=Math.sqrt(_e*_e+P*P),N=J.x-Me/F,O=J.y+oe/F,k=E.x-P/K,H=E.y+_e/K,Ae=((k-N)*P-(H-O)*_e)/(oe*P-Me*_e);ye=N+oe*Ae-j.x,ce=O+Me*Ae-j.y;let ae=ye*ye+ce*ce;if(ae<=2)return new Ne(ye,ce);ie=Math.sqrt(ae/2)}else{let F=!1;oe>Number.EPSILON?_e>Number.EPSILON&&(F=!0):oe<-Number.EPSILON?_e<-Number.EPSILON&&(F=!0):Math.sign(Me)===Math.sign(P)&&(F=!0),F?(ye=-Me,ce=oe,ie=Math.sqrt(S)):(ye=oe,ce=Me,ie=Math.sqrt(S/2))}return new Ne(ye/ie,ce/ie)}let Z=[];for(let j=0,J=U.length,E=J-1,ye=j+1;j<J;j++,E++,ye++)E===J&&(E=0),ye===J&&(ye=0),Z[j]=q(U[j],U[E],U[ye]);let fe=[],Ce,pe=Z.concat();for(let j=0,J=D.length;j<J;j++){let E=D[j];Ce=[];for(let ye=0,ce=E.length,ie=ce-1,oe=ye+1;ye<ce;ye++,ie++,oe++)ie===ce&&(ie=0),oe===ce&&(oe=0),Ce[ye]=q(E[ye],E[ie],E[oe]);fe.push(Ce),pe=pe.concat(Ce)}for(let j=0;j<m;j++){let J=j/m,E=p*Math.cos(J*Math.PI/2),ye=g*Math.sin(J*Math.PI/2)+b;for(let ce=0,ie=U.length;ce<ie;ce++){let oe=W(U[ce],Z[ce],ye);X(oe.x,oe.y,-E)}for(let ce=0,ie=D.length;ce<ie;ce++){let oe=D[ce];Ce=fe[ce];for(let Me=0,_e=oe.length;Me<_e;Me++){let P=W(oe[Me],Ce[Me],ye);X(P.x,P.y,-E)}}}let re=g+b;for(let j=0;j<z;j++){let J=f?W(y[j],pe[j],re):y[j];x?(A.copy(T.normals[0]).multiplyScalar(J.x),w.copy(T.binormals[0]).multiplyScalar(J.y),C.copy(v[0]).add(A).add(w),X(C.x,C.y,C.z)):X(J.x,J.y,0)}for(let j=1;j<=h;j++)for(let J=0;J<z;J++){let E=f?W(y[J],pe[J],re):y[J];x?(A.copy(T.normals[j]).multiplyScalar(E.x),w.copy(T.binormals[j]).multiplyScalar(E.y),C.copy(v[j]).add(A).add(w),X(C.x,C.y,C.z)):X(E.x,E.y,u/h*j)}for(let j=m-1;j>=0;j--){let J=j/m,E=p*Math.cos(J*Math.PI/2),ye=g*Math.sin(J*Math.PI/2)+b;for(let ce=0,ie=U.length;ce<ie;ce++){let oe=W(U[ce],Z[ce],ye);X(oe.x,oe.y,u+E)}for(let ce=0,ie=D.length;ce<ie;ce++){let oe=D[ce];Ce=fe[ce];for(let Me=0,_e=oe.length;Me<_e;Me++){let P=W(oe[Me],Ce[Me],ye);x?X(P.x,P.y+v[h-1].y,v[h-1].x+E):X(P.x,P.y,u+E)}}}Y(),$();function Y(){let j=s.length/3;if(f){let J=0,E=z*J;for(let ye=0;ye<ee;ye++){let ce=R[ye];te(ce[2]+E,ce[1]+E,ce[0]+E)}J=h+m*2,E=z*J;for(let ye=0;ye<ee;ye++){let ce=R[ye];te(ce[0]+E,ce[1]+E,ce[2]+E)}}else{for(let J=0;J<ee;J++){let E=R[J];te(E[2],E[1],E[0])}for(let J=0;J<ee;J++){let E=R[J];te(E[0]+z*h,E[1]+z*h,E[2]+z*h)}}n.addGroup(j,s.length/3-j,0)}function $(){let j=s.length/3,J=0;ue(U,J),J+=U.length;for(let E=0,ye=D.length;E<ye;E++){let ce=D[E];ue(ce,J),J+=ce.length}n.addGroup(j,s.length/3-j,1)}function ue(j,J){let E=j.length;for(;--E>=0;){let ye=E,ce=E-1;ce<0&&(ce=j.length-1);for(let ie=0,oe=h+m*2;ie<oe;ie++){let Me=z*ie,_e=z*(ie+1),P=J+ye+Me,S=J+ce+Me,G=J+ce+_e,F=J+ye+_e;be(P,S,G,F)}}}function X(j,J,E){c.push(j),c.push(J),c.push(E)}function te(j,J,E){Te(j),Te(J),Te(E);let ye=s.length/3,ce=_.generateTopUV(n,s,ye-3,ye-2,ye-1);ge(ce[0]),ge(ce[1]),ge(ce[2])}function be(j,J,E,ye){Te(j),Te(J),Te(ye),Te(J),Te(E),Te(ye);let ce=s.length/3,ie=_.generateSideWallUV(n,s,ce-6,ce-3,ce-2,ce-1);ge(ie[0]),ge(ie[1]),ge(ie[3]),ge(ie[1]),ge(ie[2]),ge(ie[3])}function Te(j){s.push(c[j*3+0]),s.push(c[j*3+1]),s.push(c[j*3+2])}function ge(j){r.push(j.x),r.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ov(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new uo[s.type]().fromJSON(s)),new i(n,e.options)}},av={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new Ne(r,a),new Ne(o,c),new Ne(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],p=e[s*3+1],g=e[s*3+2],b=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new Ne(a,1-c),new Ne(l,1-u),new Ne(f,1-g),new Ne(b,1-d)]:[new Ne(o,1-c),new Ne(h,1-u),new Ne(p,1-g),new Ne(m,1-d)]}};function ov(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var go=class i extends xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new V,f=new V,p=[],g=[],b=[],m=[];for(let d=0;d<=n;d++){let _=[],v=d/n,x=0;d===0&&a===0?x=.5/t:d===n&&c===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){let w=T/t;u.x=-e*Math.cos(s+w*r)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(s+w*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),b.push(f.x,f.y,f.z),m.push(w+x,1-v),_.push(l++)}h.push(_)}for(let d=0;d<n;d++)for(let _=0;_<t;_++){let v=h[d][_+1],x=h[d][_],T=h[d+1][_],w=h[d+1][_+1];(d!==0||a>0)&&p.push(v,x,w),(d!==n-1||c<Math.PI)&&p.push(x,T,w)}this.setIndex(p),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(b,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var bo=class i extends xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new V,u=new V,f=new V;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let b=g/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(b),u.y=(e+t*Math.cos(m))*Math.sin(b),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let b=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,_=(s+1)*p+g;a.push(b,m,_),a.push(m,d,_)}this.setIndex(a),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var xo=class i extends xt{constructor(e=new ho(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new V,c=new V,l=new Ne,h=new V,u=[],f=[],p=[],g=[];b(),this.setIndex(g),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(p,2));function b(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),_(),d()}function m(v){h=e.getPointAt(v/t,h);let x=a.normals[v],T=a.binormals[v];for(let w=0;w<=s;w++){let A=w/s*Math.PI*2,C=Math.sin(A),M=-Math.cos(A);c.x=M*x.x+C*T.x,c.y=M*x.y+C*T.y,c.z=M*x.z+C*T.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function d(){for(let v=1;v<=t;v++)for(let x=1;x<=s;x++){let T=(s+1)*(v-1)+(x-1),w=(s+1)*v+(x-1),A=(s+1)*v+x,C=(s+1)*(v-1)+x;g.push(T,w,C),g.push(w,A,C)}}function _(){for(let v=0;v<=t;v++)for(let x=0;x<=s;x++)l.x=v/t,l.y=x/s,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new uo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var vo=class extends yt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},yi=class extends Zt{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Df,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ht=class extends yi{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Na(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function cv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function lv(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function mf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Kf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Mi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Dl=class extends Mi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qh,endingEnd:Qh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case $h:r=e,o=2*t-n;break;case eu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case $h:a=e,c=2*n-t;break;case eu:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),b=g*g,m=b*g,d=-f*m+2*f*b-f*g,_=(1+f)*m+(-1.5-2*f)*b+(-.5+f)*g+1,v=(-1-p)*m+(1.5+p)*b+.5*g,x=p*m-p*b;for(let T=0;T!==o;++T)r[T]=d*a[h+T]+_*a[l+T]+v*a[c+T]+x*a[u+T];return r}},Nl=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}},Ul=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},xn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Na(t,this.TimeBufferType),this.values=Na(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Na(e.times,Array),values:Na(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Rs:t=this.InterpolantFactoryMethodDiscrete;break;case Ps:t=this.InterpolantFactoryMethodLinear;break;case Ho:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rs;case this.InterpolantFactoryMethodLinear:return Ps;case this.InterpolantFactoryMethodSmooth:return Ho}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&cv(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ho,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let b=t[u+g];if(b!==t[f+g]||b!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=Ps;var Si=class extends xn{constructor(e,t,n){super(e,t,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Rs;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var _o=class extends xn{};_o.prototype.ValueTypeName="color";var Qn=class extends xn{};Qn.prototype.ValueTypeName="number";var Fl=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)sn.slerpFlat(r,0,a,l-o,a,l,c);return r}},$n=class extends xn{InterpolantFactoryMethodLinear(e){return new Fl(this.times,this.values,this.getValueSize(),e)}};$n.prototype.ValueTypeName="quaternion";$n.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends xn{constructor(e,t,n){super(e,t,n)}};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Rs;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var ei=class extends xn{};ei.prototype.ValueTypeName="vector";var yo=class{constructor(e="",t=-1,n=[],s=hp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=mn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(uv(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(xn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=lv(c);c=mf(c,1,h),l=mf(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Qn(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,p,g,b){if(p.length!==0){let m=[],d=[];Kf(p,m,d,g),m.length!==0&&b.push(new u(f,m,d))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let b=0;b<f[g].morphTargets.length;b++)p[f[g].morphTargets[b]]=-1;for(let b in p){let m=[],d=[];for(let _=0;_!==f[g].morphTargets.length;++_){let v=f[g];m.push(v.time),d.push(v.morphTarget===b?1:0)}s.push(new Qn(".morphTargetInfluence["+b+"]",m,d))}c=p.length*a}else{let p=".bones["+t[u].name+"]";n(ei,p+".position",f,"pos",s),n($n,p+".quaternion",f,"rot",s),n(ei,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function hv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qn;case"vector":case"vector2":case"vector3":case"vector4":return ei;case"color":return _o;case"quaternion":return $n;case"bool":case"boolean":return Si;case"string":return wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function uv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=hv(i.type);if(i.times===void 0){let t=[],n=[];Kf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var bi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Ol=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},fv=new Ol,ti=class{constructor(e){this.manager=e!==void 0?e:fv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ti.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wn={},Bl=class extends Error{constructor(e,t){super(e),this.response=t}},Br=class extends ti{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=bi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Wn[e]!==void 0){Wn[e].push({onLoad:t,onProgress:n,onError:s});return}Wn[e]=[],Wn[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Wn[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,b=0,m=new ReadableStream({start(d){_();function _(){u.read().then(({done:v,value:x})=>{if(v)d.close();else{b+=x.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:p});for(let w=0,A=h.length;w<A;w++){let C=h[w];C.onProgress&&C.onProgress(T)}d.enqueue(x),_()}},v=>{d.error(v)})}}});return new Response(m)}else throw new Bl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{bi.add(e,l);let h=Wn[e];delete Wn[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=Wn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Wn[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var kl=class extends ti{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=bi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Ar("img");function c(){h(),bi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Gs=class extends ti{constructor(e){super(e)}load(e,t,n,s){let r=new Dt,a=new kl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Vs=class extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Mo=class extends Vs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},wc=new Ye,gf=new V,bf=new V,kr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;gf.setFromMatrixPosition(e.matrixWorld),t.position.copy(gf),bf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bf),t.updateMatrixWorld(),wc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},zl=class extends kr{constructor(){super(new Ct(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Is*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ws=class extends Vs{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new zl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},xf=new Ye,dr=new V,Ac=new V,Gl=class extends kr{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),dr.setFromMatrixPosition(e.matrixWorld),n.position.copy(dr),Ac.copy(n.position),Ac.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ac),n.updateMatrixWorld(),s.makeTranslation(-dr.x,-dr.y,-dr.z),xf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xf)}},Hs=class extends Vs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Gl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Vl=class extends kr{constructor(){super(new _i(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xs=class extends Vs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Vl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ai=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var So=class extends ti{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=bi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return bi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),bi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});bi.add(e,c),r.manager.itemStart(e)}};var wo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=vf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function vf(){return performance.now()}var oh="\\[\\]\\.:\\/",dv=new RegExp("["+oh+"]","g"),ch="[^"+oh+"]",pv="[^"+oh.replace("\\.","")+"]",mv=/((?:WC+[\/:])*)/.source.replace("WC",ch),gv=/(WCOD+)?/.source.replace("WCOD",pv),bv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ch),xv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ch),vv=new RegExp("^"+mv+gv+bv+xv+"$"),_v=["material","materials","bones","map"],Wl=class{constructor(e,t,n){let s=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dv,"")}static parseTrackName(e){let t=vv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);_v.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=Wl;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var a_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var me={ACESFilmicToneMapping:zr,AdditiveBlending:Ss,BackSide:kt,Box3:Kt,BoxGeometry:Jn,BufferAttribute:_t,BufferGeometry:xt,CanvasTexture:ao,CapsuleGeometry:fo,CatmullRomCurve3:Ir,Color:He,ConeGeometry:po,CylinderGeometry:Dr,DataTexture:Os,DirectionalLight:Xs,DoubleSide:nn,DynamicDrawUsage:Uf,Euler:gn,ExtrudeGeometry:mo,Float32BufferAttribute:nt,FogExp2:Za,Group:pn,HalfFloatType:an,HemisphereLight:Mo,LatheGeometry:Lr,LinearFilter:Bt,LinearMipmapLinearFilter:dn,Matrix4:Ye,Mesh:wt,MeshBasicMaterial:Jt,MeshPhysicalMaterial:Ht,MeshStandardMaterial:yi,NoColorSpace:In,PCFSoftShadowMap:Hl,PMREMGenerator:Us,Path:Xi,PerspectiveCamera:Ct,PlaneGeometry:Ns,PointLight:Hs,Points:ks,PointsMaterial:Hi,Quaternion:sn,RGBAFormat:jt,RepeatWrapping:Kn,SRGBColorSpace:St,Scene:Ja,ShaderMaterial:yt,Shape:Nr,SphereGeometry:go,SplineCurve:zs,SpotLight:Ws,Sprite:Qa,SpriteMaterial:Cr,TextureLoader:Gs,TorusGeometry:bo,TubeGeometry:xo,Vector2:Ne,Vector3:V,WebGLRenderTarget:Nt,WebGLRenderer:Ka};var Po={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var on=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},yv=new _i(-1,1,1,-1,0,1),lh=class extends xt{constructor(){super(),this.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nt([0,2,0,0,2,0],2))}},Mv=new lh,Ci=class{constructor(e){this._mesh=new wt(Mv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,yv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Io=class extends on{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ti.clone(e.uniforms),this.material=new yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ci(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Vr=class extends on{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Lo=class extends on{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Do=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ne);this._width=n.width,this._height=n.height,t=new Nt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:an}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Io(Po),this.copyPass.material.blending=Ln,this.clock=new wo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Vr!==void 0&&(a instanceof Vr?n=!0:a instanceof Lo&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var No=class extends on{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new He}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Zf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new He(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ys=class i extends on{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ne(e.x,e.y):new Ne(256,256),this.clearColor=new He(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Nt(r,a,{type:an}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Nt(r,a,{type:an});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new Nt(r,a,{type:an});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}let o=Zf;this.highPassUniforms=Ti.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ne(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Po;this.copyUniforms=Ti.clone(h.uniforms),this.blendMaterial=new yt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ss,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new He,this.oldClearAlpha=1,this.basic=new Jt,this.fsQuad=new Ci(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ne(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new yt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ne(.5,.5)},direction:{value:new Ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new yt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Ys.BlurDirectionX=new Ne(1,0);Ys.BlurDirectionY=new Ne(0,1);var Jf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Uo=class extends on{constructor(){super();let e=Jf;this.uniforms=Ti.clone(e.uniforms),this.material=new vo({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ci(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},et.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Xl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ql?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Yl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===jl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Kl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};function lt(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new xt,l=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,u=[];for(let f=0;f<i.length;++f){let p=i[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Qf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let p=[];for(let b=0;b<a[h].length;++b)p.push(a[h][b][f]);let g=Qf(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Qf(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new _t(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let f=0,p=h.count;f<p;f++)for(let g=0;g<t;g++){let b=h.getComponent(f,g);o.setComponent(f+u,g,b)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function hh(i,e){if(e===Lf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Gr||e===To){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Gr)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Fo=class extends ti{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new bh(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new ph(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Ih(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Ai.extractUrlBase(e);a=Ai.resolveURL(l,this.path)}else a=Ai.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Br(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===id){try{a[tt.KHR_BINARY_GLTF]=new Lh(e)}catch(u){s&&s(u);return}r=JSON.parse(a[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new kh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case tt.KHR_MATERIALS_UNLIT:a[u]=new mh;break;case tt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Dh(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:a[u]=new Nh;break;case tt.KHR_MESH_QUANTIZATION:a[u]=new Uh;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Sv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ph=class{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new He(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Gt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Xs(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Hs(h),l.distance=u;break;case"spot":l=new Ws(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ni(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},mh=class{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Jt}extendParams(e,t,n){let s=[];e.color=new He(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Gt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,St))}return Promise.all(s)}},gh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},bh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(o,o)}return Promise.all(r)}},xh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},vh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},_h=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new He(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Gt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,St)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},yh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Mh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new He().setRGB(o[0],o[1],o[2],Gt),Promise.all(r)}},Sh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},wh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new He().setRGB(o[0],o[1],o[2],Gt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,St)),Promise.all(r)}},Ah=class{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Th=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Ch=class{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Eh=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Rh=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ph=class{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,f,s.mode,s.filter),p})})}else return null}},Ih=class{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==vn.TRIANGLES&&l.mode!==vn.TRIANGLE_STRIP&&l.mode!==vn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,p=[];for(let g of u){let b=new Ye,m=new V,d=new sn,_=new V(1,1,1),v=new to(g.geometry,g.material,f);for(let x=0;x<f;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,x),c.SCALE&&_.fromBufferAttribute(c.SCALE,x),v.setMatrixAt(x,b.compose(m,d,_));for(let x in c)if(x==="_COLOR_0"){let T=c[x];v.instanceColor=new Wi(T.array,T.itemSize,T.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);bt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),p.push(v)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},id="glTF",Wr=12,$f={JSON:1313821514,BIN:5130562},Lh=class{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Wr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==id)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Wr,r=new DataView(e,Wr),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===$f.JSON){let l=new Uint8Array(e,Wr+a,o);this.content=n.decode(l)}else if(c===$f.BIN){let l=Wr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Dh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Oh[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Oh[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],p=js[f.componentType];l[u]=p.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(p){for(let g in p.attributes){let b=p.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}u(p)},o,l,Gt,f)})})}},Nh=class{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Uh=class{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}},Oo=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,f=u*u,p=f*u,g=e*l,b=g-l,m=-2*p+3*f,d=p-f,_=1-m,v=d-f+u;for(let x=0;x!==o;x++){let T=a[b+x+o],w=a[b+x+c]*h,A=a[g+x+o],C=a[g+x]*h;r[x]=_*T+v*w+m*A+d*C}return r}},wv=new sn,Fh=class extends Oo{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return wv.fromArray(r).normalize().toArray(r),r}},vn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},js={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ed={9728:zt,9729:Bt,9984:Zl,9985:gr,9986:gs,9987:dn},td={33071:qn,33648:Sr,10497:Kn},uh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Oh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Av={CUBICSPLINE:void 0,LINEAR:Ps,STEP:Rs},fh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Tv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new yi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Dn})),i.DefaultMaterial}function Yi(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ni(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Cv(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Ev(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Rv(i){let e,t=i.extensions&&i.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+dh(t.attributes):e=i.indices+":"+dh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+dh(i.targets[n]);return e}function dh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Bh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Pv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Iv=new Ye,kh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Sv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Gs(this.options.manager):this.textureLoader=new So(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Br(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Yi(r,o,s),ni(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Ai.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=uh[s.type],o=js[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new _t(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=uh[s.type],l=js[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,b,m;if(p&&p!==u){let d=Math.floor(f/p),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,v=t.cache.get(_);v||(b=new l(o,d*p,s.count*p/h),v=new Fs(b,p/h),t.cache.add(_,v)),m=new Vi(v,c,f%p/h,g)}else o===null?b=new l(s.count*c):b=new l(o,f,s.count*c),m=new _t(b,c,g);if(s.sparse!==void 0){let d=uh.SCALAR,_=js[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,T=new _(a[1],v,s.sparse.count*d),w=new l(a[2],x,s.sparse.count*c);o!==null&&(m=new _t(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,C=T.length;A<C;A++){let M=T[A];if(m.setX(M,w[A*c]),c>=2&&m.setY(M,w[A*c+1]),c>=3&&m.setZ(M,w[A*c+2]),c>=4&&m.setW(M,w[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return h.magFilter=ed[f.magFilter]||Bt,h.minFilter=ed[f.minFilter]||dn,h.wrapS=td[f.wrapS]||Kn,h.wrapT=td[f.wrapT]||Kn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==zt&&h.minFilter!==Bt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(b){let m=new Dt(b);m.needsUpdate=!0,f(m)}),t.load(Ai.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),ni(u,a),u.userData.mimeType=a.mimeType||Pv(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Hi,Zt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Rr,Zt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return yi}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[tt.KHR_MATERIALS_UNLIT]){let u=s[tt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new He(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Gt),o.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,St)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=nn);let h=r.alphaMode||fh.OPAQUE;if(h===fh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===fh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Jt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ne(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Jt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Jt){let u=r.emissiveFactor;o.emissive=new He().setRGB(u[0],u[1],u[2],Gt)}return r.emissiveTexture!==void 0&&a!==Jt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,St)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),ni(u,r),t.associations.set(u,{materials:e}),r.extensions&&Yi(s,u,r),u})}createUniqueName(e){let t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return nd(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=Rv(l),u=s[h];if(u)a.push(u.promise);else{let f;l.extensions&&l.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=nd(new xt,l,t),s[h]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Tv(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,g=h.length;p<g;p++){let b=h[p],m=a[p],d,_=l[p];if(m.mode===vn.TRIANGLES||m.mode===vn.TRIANGLE_STRIP||m.mode===vn.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new $a(b,_):new wt(b,_),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===vn.TRIANGLE_STRIP?d.geometry=hh(d.geometry,To):m.mode===vn.TRIANGLE_FAN&&(d.geometry=hh(d.geometry,Gr));else if(m.mode===vn.LINES)d=new so(b,_);else if(m.mode===vn.LINE_STRIP)d=new Bs(b,_);else if(m.mode===vn.LINE_LOOP)d=new ro(b,_);else if(m.mode===vn.POINTS)d=new ks(b,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&Ev(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),ni(d,r),m.extensions&&Yi(s,d,m),t.assignFinalMaterial(d),u.push(d)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&Yi(s,u[0],r),u[0];let f=new pn;r.extensions&&Yi(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=u.length;p<g;p++)f.add(u[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ct(Ff.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new _i(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ni(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let f=new Ye;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new eo(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let p=s.channels[u],g=s.samplers[p.sampler],b=p.target,m=b.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",_)),l.push(g),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],p=u[1],g=u[2],b=u[3],m=u[4],d=[];for(let _=0,v=f.length;_<v;_++){let x=f[_],T=p[_],w=g[_],A=b[_],C=m[_];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let M=n._createAnimationTracks(x,T,w,A,C);if(M)for(let y=0;y<M.length;y++)d.push(M[y])}return new yo(r,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,Iv)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Er:l.length>1?h=new pn:l.length===1?h=l[0]:h=new bt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),ni(h,r),r.extensions&&Yi(n,h,r),r.matrix!==void 0){let u=new Ye;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new pn;n.name&&(r.name=s.createUniqueName(n.name)),ni(r,n),n.extensions&&Yi(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,p]of s.associations)(f instanceof Zt||f instanceof Dt)&&u.set(f,p);return h.traverse(f=>{let p=s.associations.get(f);p!=null&&u.set(f,p)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];Ei[r.path]===Ei.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(Ei[r.path]){case Ei.weights:l=Qn;break;case Ei.rotation:l=$n;break;case Ei.position:case Ei.scale:l=ei;break;default:n.itemSize===1?l=Qn:l=ei;break}let h=s.interpolation!==void 0?Av[s.interpolation]:Ps,u=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let g=new l(c[f]+"."+Ei[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Bh(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof $n?Fh:Oo;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Lv(i,e,t){let n=e.attributes,s=new Kt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new V(c[0],c[1],c[2]),new V(l[0],l[1],l[2])),o.normalized){let h=Bh(js[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new V,c=new V;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let b=Bh(js[f.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new rn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function nd(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Oh[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return et.workingColorSpace!==Gt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),ni(i,e),Lv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Cv(i,e.targets,t):i})}var sd=(function(){"use strict";var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?e:i,r,a=WebAssembly.instantiate(o(s),{}).then(function(d){r=d.instance,r.exports.__wasm_call_ctors()});function o(d){for(var _=new Uint8Array(d.length),v=0;v<d.length;++v){var x=d.charCodeAt(v);_[v]=x>96?x-97:x>64?x-39:x+4}for(var T=0,v=0;v<d.length;++v)_[T++]=_[v]<60?n[_[v]]:(_[v]-60)*64+_[++v];return _.buffer.slice(0,T)}function c(d,_,v,x,T,w){var A=r.exports.sbrk,C=v+3&-4,M=A(C*x),y=A(T.length),D=new Uint8Array(r.exports.memory.buffer);D.set(T,y);var I=d(M,v,x,y,T.length);if(I==0&&w&&w(M,C,x),_.set(D.subarray(M,M+v*x)),A(M-A(0)),I!=0)throw new Error("Malformed buffer data: "+I)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function p(d){var _={object:new Worker(d),pending:0,requests:{}};return _.object.onmessage=function(v){var x=v.data;_.pending-=x.count,_.requests[x.id][x.action](x.value),delete _.requests[x.id]},_}function g(d){for(var _="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),v=new Blob([_],{type:"text/javascript"}),x=URL.createObjectURL(v),T=0;T<d;++T)u[T]=p(x);URL.revokeObjectURL(x)}function b(d,_,v,x,T){for(var w=u[0],A=1;A<u.length;++A)u[A].pending<w.pending&&(w=u[A]);return new Promise(function(C,M){var y=new Uint8Array(v),D=f++;w.pending+=d,w.requests[D]={resolve:C,reject:M},w.object.postMessage({id:D,count:d,size:_,source:y,mode:x,filter:T},[y.buffer])})}function m(d){a.then(function(){var _=d.data;try{var v=new Uint8Array(_.count*_.size);c(r.exports[_.mode],v,_.count,_.size,_.source,r.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:v},[v.buffer])}catch(x){self.postMessage({id:_.id,count:_.count,action:"reject",value:x})}})}return{ready:a,supported:!0,useWorkers:function(d){g(d)},decodeVertexBuffer:function(d,_,v,x,T){c(r.exports.meshopt_decodeVertexBuffer,d,_,v,x,r.exports[l[T]])},decodeIndexBuffer:function(d,_,v,x){c(r.exports.meshopt_decodeIndexBuffer,d,_,v,x)},decodeIndexSequence:function(d,_,v,x){c(r.exports.meshopt_decodeIndexSequence,d,_,v,x)},decodeGltfBuffer:function(d,_,v,x,T,w){c(r.exports[h[T]],d,_,v,x,r.exports[l[w]])},decodeGltfBufferAsync:function(d,_,v,x,T){return u.length>0?b(d,_,v,h[x],l[T]):a.then(function(){var w=new Uint8Array(d*_);return c(r.exports[h[x]],w,d,_,v,r.exports[l[T]]),w})}}})();var Dv={x0:39,x1:42.4,z0:2.6,z1:-7.6,h:3.1,door:{a:.5,b:1.9,h:2.25}};var Zs=(i,e)=>{let t=document.createElement("canvas");return t.width=i,t.height=e,t},Js=i=>{let e=new me.CanvasTexture(i);return e.colorSpace=me.SRGBColorSpace,e.anisotropy=8,e},Ri=()=>(getComputedStyle(document.documentElement).getPropertyValue("--fh")||"").trim()||"'Bebas Neue', Impact, sans-serif",zh="Archivo, Arial, sans-serif",Ks=i=>i?i.textContent.replace(/\s+/g," ").trim():"";function rd(i,e,t){let n=[],s="";for(let r of e.split(" ")){let a=s?s+" "+r:r;i.measureText(a).width>t&&s?(n.push(s),s=r):s=a}return s&&n.push(s),n}function ad(i){let e=[...document.querySelectorAll("#reviews .rcard")].map(l=>({t:Ks(l.querySelector(".rtext")),n:Ks(l.querySelector(".rname"))})).filter(l=>l.t),t=e.find(l=>/aria familiare/i.test(l.t))||e.filter(l=>l.t.length<170)[0]||e[0]||{t:"Pi\xF9 che una palestra, una famiglia.",n:""},n=Zs(i,i),s=n.getContext("2d"),r=i/1024;s.textAlign="left",s.textBaseline="alphabetic",s.fillStyle="#39ff14",s.font=`${96*r}px ${zh}`,s.fillText("\u2605\u2605\u2605\u2605\u2605",60*r,150*r);let a=104;s.font=`${a*r}px ${Ri()}`;let o=rd(s,t.t.toUpperCase(),i-120*r);for(;o.length>7&&a>56;)a-=6,s.font=`${a*r}px ${Ri()}`,o=rd(s,t.t.toUpperCase(),i-120*r);s.fillStyle="#f4f4f2",o.forEach((l,h)=>s.fillText(l,60*r,(270+h*a*1.02)*r));let c=(270+o.length*a*1.02+30)*r;return s.fillStyle="#39ff14",s.fillRect(60*r,c,110*r,6*r),t.n&&(s.fillStyle="rgba(244,244,242,.78)",s.font=`500 ${40*r}px ${zh}`,s.fillText(t.n+"  \xB7  Recensione Google",60*r,c+64*r)),Js(n)}function od(i){let e=[...document.querySelectorAll("#orari table tbody tr")].map(g=>({name:Ks(g.querySelector("th")),d:[...g.querySelectorAll("td")].map(b=>b.querySelectorAll(".sl").length)})).filter(g=>g.name&&g.d.length),t=[...document.querySelectorAll("#orari table thead th")].slice(1).map(Ks),n=Zs(i,i),s=n.getContext("2d"),r=i/1024;s.fillStyle="#060807",s.fillRect(0,0,i,i),s.fillStyle="#f4f4f2",s.font=`${98*r}px ${Ri()}`,s.textBaseline="alphabetic",s.fillText("ORARIO ",56*r,128*r);let a=s.measureText("ORARIO ").width;s.fillStyle="#39ff14",s.fillText("DEI CORSI",56*r+a,128*r);let o=Math.max(1,e.length),c=Math.max(1,t.length||6),l=430*r,h=(i-l-50*r)/c,u=250*r,f=Math.min(86*r,(i-u-90*r)/o);s.font=`${46*r}px ${Ri()}`,s.fillStyle="rgba(244,244,242,.6)",s.textAlign="center",(t.length?t:["Lun","Mar","Mer","Gio","Ven","Sab"]).forEach((g,b)=>s.fillText(g.toUpperCase(),l+h*(b+.5),212*r)),e.forEach((g,b)=>{let m=u+f*b;s.fillStyle="rgba(255,255,255,.07)",s.fillRect(50*r,m,i-100*r,2*r),s.textAlign="left",s.fillStyle="#f4f4f2",s.font=`${Math.min(52,60*f/(86*r))*r}px ${Ri()}`,s.fillText(g.name.toUpperCase().slice(0,20),56*r,m+f*.68),g.d.forEach((d,_)=>{let v=l+h*(_+.5),x=m+f*.5;d?(s.fillStyle="#39ff14",s.roundRect?(s.beginPath(),s.roundRect(v-h*.3,x-f*.2,h*.6,f*.4,f*.2),s.fill()):s.fillRect(v-h*.3,x-f*.2,h*.6,f*.4)):(s.fillStyle="rgba(255,255,255,.13)",s.fillRect(v-h*.12,x-2*r,h*.24,4*r))})});let p=/Lun-Ven[^.]*/.exec(Ks(document.querySelector("#orari")));return s.textAlign="left",s.fillStyle="rgba(244,244,242,.6)",s.font=`500 ${32*r}px ${zh}`,s.fillText(p?"Sala pesi  "+p[0].replace(/\s+/g," "):"",56*r,i-44*r),Js(n)}function Nv(i){let e=Zs(512,128),t=e.getContext("2d");return t.font=`92px ${Ri()}`,t.textAlign="center",t.textBaseline="middle",t.fillStyle="#eafde6",t.fillText(i,256,70),Js(e)}function Uv(i){let e=Zs(512,96),t=e.getContext("2d");return t.font=`62px ${Ri()}`,t.textAlign="center",t.textBaseline="middle",t.fillStyle="#f0f2ee",t.fillText(i.toUpperCase(),256,52,490),Js(e)}function cd({mobile:i,softTex:e}){let t=new me.Group;t.name="storia";let{x0:n,x1:s,z0:r,z1:a,h:o,door:c}=Dv,l=.16,h=(n+s)/2,u=new me.MeshStandardMaterial({color:1514008,roughness:.88,metalness:0}),f=[],p=[],g=(ie,oe,Me,_e,P,S,G)=>{let F=new me.BoxGeometry(oe,Me,_e);F.translate(P,S,G),ie.push(F)};g(f,l,o,c.a+8.5,n,o/2,(c.a-8.5)/2),g(f,l,o,7-c.b,n,o/2,(7+c.b)/2),g(f,l,o-c.h,c.b-c.a,n,(o+c.h)/2,(c.a+c.b)/2),g(f,l,o,r-a,s,o/2,(r+a)/2),g(f,s-n,o,l,h,o/2,r);let b=.8,m=2.1,d=[n+.8,h,s-.8],_=[n,...d.flatMap(ie=>[ie-b/2,ie+b/2]),s];for(let ie=0;ie<_.length;ie+=2)g(f,_[ie+1]-_[ie],o,l,(_[ie]+_[ie+1])/2,o/2,a);for(let ie of d)g(f,b,o-m,l,ie,(o+m)/2,a);let v=new me.Mesh(lt(f,!1),u);v.receiveShadow=!0,v.castShadow=!i,t.add(v);let x=new me.MeshBasicMaterial({color:new me.Color().setRGB(.3,1.25,.2)}),T=.022;for(let ie of[c.a-T,c.b+T])g(p,.03,c.h,.03,n-l/2-.016,c.h/2,ie);g(p,.03,.03,c.b-c.a+.09,n-l/2-.016,c.h+T,(c.a+c.b)/2);for(let ie of d){for(let oe of[-1,1])g(p,.03,m,.03,ie+oe*(b/2+T),m/2,a+l/2+.016);g(p,b+.09,.03,.03,ie,m+T,a+l/2+.016)}t.add(new me.Mesh(lt(p,!1),x));let w=new me.MeshBasicMaterial({color:new me.Color().setRGB(1.5,1.9,1.45)}),A=[];for(let ie of[.9,-2.3,-5.4])g(A,.05,.05,1.5,h,o-.06,ie);t.add(new me.Mesh(lt(A,!1),w));{let ie=new me.Group;ie.position.set(n+l/2,0,c.b-.02),ie.rotation.y=1.42;let oe=new me.MeshStandardMaterial({color:1711387,roughness:.55,metalness:.35}),Me=new me.MeshStandardMaterial({color:12172737,roughness:.3,metalness:1}),_e=new me.Mesh(new me.BoxGeometry(.045,c.h-.04,c.b-c.a-.04),oe);_e.position.set(0,(c.h-.04)/2+.01,-(c.b-c.a-.04)/2),_e.castShadow=!i,ie.add(_e);let P=new me.Mesh(new me.BoxGeometry(.05,.05,c.b-c.a-.3),Me);P.position.set(-.06,1.02,-(c.b-c.a)/2),ie.add(P),t.add(ie);let S=Zs(256,96),G=S.getContext("2d");G.fillStyle="#1fa30f",G.fillRect(0,0,256,96),G.fillStyle="#ffffff",G.beginPath(),G.moveTo(196,48),G.lineTo(150,18),G.lineTo(150,36),G.lineTo(60,36),G.lineTo(60,60),G.lineTo(150,60),G.lineTo(150,78),G.closePath(),G.fill();let F=new me.Mesh(new me.BoxGeometry(.05,.17,.45),[0,1,2,3,4,5].map(K=>K===1?new me.MeshBasicMaterial({map:Js(S),color:new me.Color().setRGB(1.5,1.7,1.5)}):oe));F.position.set(n-l/2-.03,c.h+.2,(c.a+c.b)/2),t.add(F)}let C=(()=>{let ie=Zs(8,128),oe=ie.getContext("2d"),Me=oe.createLinearGradient(0,0,0,128);return Me.addColorStop(0,"#9dff8c"),Me.addColorStop(.55,"#e9ffe4"),Me.addColorStop(1,"#ffffff"),oe.fillStyle=Me,oe.fillRect(0,0,8,128),Js(ie)})(),M=new me.MeshBasicMaterial({map:C,color:new me.Color().setRGB(.5,.6,.48),fog:!1}),y=e([[0,"rgba(190,255,175,.55)"],[.6,"rgba(120,255,95,.12)"],[1,"rgba(120,255,95,0)"]]),D=new me.MeshBasicMaterial({map:y,transparent:!0,depthWrite:!1,blending:me.AdditiveBlending,opacity:i?.45:.8}),I=new me.PlaneGeometry(1,1),R=(ie,oe,Me,_e)=>{let P=new me.Mesh(I,D);P.rotation.x=-Math.PI/2,P.position.set(ie,.012,oe),P.scale.set(Me,_e,1),P.renderOrder=3,t.add(P)},U=[["images/anima-fight-s.webp",.34],["images/corso-calisthenics.webp",.5],["images/corso-posturale.webp",.56]],W=[],z=new me.MeshBasicMaterial({map:C,transparent:!0,depthWrite:!1,blending:me.AdditiveBlending,opacity:.22,fog:!1});["FIGHT","FITNESS","BENESSERE"].forEach((ie,oe)=>{let Me=M.clone();W.push({mat:Me,src:U[oe][0],fx:U[oe][1]});let _e=new me.Mesh(I,Me);_e.position.set(d[oe],m/2,a-.02),_e.scale.set(b,m,1),t.add(_e);let P=new me.Mesh(I,z);P.position.set(d[oe],m/2,a-.012),P.scale.set(b,m,1),P.renderOrder=2,t.add(P);let S=new me.Mesh(I,new me.MeshBasicMaterial({map:Nv(ie),transparent:!0,depthWrite:!1}));S.position.set(d[oe],m+.3,a+l/2+.012),S.scale.set(.92,.23,1),t.add(S),R(d[oe],a+1,1.5,2.6)});{let ie=(c.a+c.b)/2,oe=new me.Mesh(new me.BoxGeometry(.05,1.7,.05),w);oe.position.set(s-l/2-.05,1.45,ie),t.add(oe);let Me=new me.Mesh(I,new me.MeshBasicMaterial({map:y,transparent:!0,depthWrite:!1,blending:me.AdditiveBlending,opacity:1}));Me.rotation.y=-Math.PI/2,Me.position.set(s-l/2-.02,1.45,ie),Me.scale.set(3.4,3,1),t.add(Me)}R(n-1.1,(c.a+c.b)/2,3.2,2.4),R(n+1.2,(c.a+c.b)/2,2.6,2.6);let ee=i?512:1024,q=new me.Mesh(I,new me.MeshBasicMaterial({map:ad(ee),transparent:!0,depthWrite:!1}));q.rotation.y=-Math.PI/2,q.position.set(s-l/2-.012,1.72,-2.6),q.scale.set(1.36,1.36,1),t.add(q);let Z=new me.MeshStandardMaterial({color:329222,roughness:.5,metalness:.4}),fe=od(ee),Ce=new me.Group;Ce.position.set(n+l/2,1.72,-4.6),Ce.rotation.y=Math.PI/2,t.add(Ce);let pe=new me.Mesh(new me.BoxGeometry(1.66,1.66,.06),Z);pe.position.z=.03,Ce.add(pe);let re=new me.Mesh(I,new me.MeshStandardMaterial({map:fe,emissiveMap:fe,emissive:16777215,emissiveIntensity:.62,roughness:.6}));re.position.z=.062,re.scale.set(1.58,1.58,1),Ce.add(re);let Y=[...document.querySelectorAll("#famiglia .tcard")].map(ie=>{let oe=ie.querySelector("img");return{name:Ks(ie.querySelector(".tn")),src:oe?oe.getAttribute("src"):""}}).filter(ie=>ie.src).slice(0,10),$=[],ue=i?.29:.4,X=ue*1.5,te=Math.max(1,Math.ceil(Y.length/2)),be=i?.335:.53,Te=-5.75,ge=[],j=new me.PlaneGeometry(ue,X),J=new me.PlaneGeometry(ue,ue*96/512);if(Y.forEach((ie,oe)=>{let Me=oe<te?0:1,_e=Me?oe-te:oe,P=Me?Y.length-te:te,S=Te+(_e-(P-1)/2)*be,G=i?Me?1.32:1.96:Me?1.18:2.02,F=s-l/2;{let H=new me.BoxGeometry(.035,X+.05,ue+.05);H.translate(F-.0175,G,S),ge.push(H)}let K=new me.MeshStandardMaterial({color:1842204,emissive:16777215,emissiveIntensity:.05,roughness:.7}),N=new me.Mesh(j,K);N.rotation.y=-Math.PI/2,N.position.set(F-.037,G,S),t.add(N);let O=new me.MeshBasicMaterial({map:Uv(ie.name.split(" ")[0]),transparent:!0,depthWrite:!1,opacity:.25}),k=new me.Mesh(J,O);k.rotation.y=-Math.PI/2,k.position.set(F-.012,G-X/2-.085,S),t.add(k),$.push({mat:K,pm:O,src:ie.src})}),ge.length){let ie=new me.Mesh(lt(ge,!1),Z);ie.castShadow=!i,t.add(ie)}let E=!1,ye=()=>{if(E)return;E=!0;let ie=new me.TextureLoader;for(let oe of W)ie.load(oe.src,Me=>{Me.colorSpace=me.SRGBColorSpace,Me.anisotropy=4;let _e=Me.image.width/Me.image.height,P=.8/2.1;_e>P?(Me.repeat.x=P/_e,Me.offset.x=Math.min(1-Me.repeat.x,Math.max(0,oe.fx-Me.repeat.x/2))):(Me.repeat.y=_e/P,Me.offset.y=(1-Me.repeat.y)/2),oe.mat.map=Me,oe.mat.color.setRGB(.92,1,.9),oe.mat.needsUpdate=!0},void 0,()=>{});for(let oe of $){let Me=P=>{P.colorSpace=me.SRGBColorSpace,P.anisotropy=4,oe.mat.map=P,oe.mat.emissiveMap=P,oe.mat.color.set(9079434),oe.mat.needsUpdate=!0},_e=/-s\.webp$/.test(oe.src)?oe.src:oe.src.replace(/\.webp$/,"-s.webp");ie.load(_e,Me,void 0,()=>{_e!==oe.src&&ie.load(oe.src,Me,void 0,()=>{})})}},ce=ie=>{let oe=$.length;$.forEach((Me,_e)=>{let P=Math.min(1,Math.max(0,ie*(oe+2)-_e));Me.mat.emissiveIntensity=.05+.8*P,Me.pm.opacity=.25+.75*P})};return document.fonts&&document.fonts.ready&&!document.fonts.check("40px "+Ri())&&document.fonts.ready.then(()=>{q.material.map=ad(ee),q.material.needsUpdate=!0;let ie=od(ee);re.material.map=ie,re.material.emissiveMap=ie,re.material.needsUpdate=!0}),{group:t,load:ye,setLit:ce}}var ji=3800852;function ld(i,{mobile:e=!1,strict:t=!1}={}){let n=new me.WebGLRenderer({canvas:i,antialias:e,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:t});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1.5:2)),n.outputColorSpace=me.SRGBColorSpace,n.toneMapping=me.ACESFilmicToneMapping,n.toneMappingExposure=1.05,n.shadowMap.enabled=!e,n.shadowMap.type=me.PCFSoftShadowMap,n}function Fv(i){let e=new me.Scene,t=new me.Mesh(new me.BoxGeometry(20,10,20),new me.MeshBasicMaterial({color:329223,side:me.BackSide}));e.add(t);let n=(a,o,c,l,h,u)=>{let f=new me.Mesh(new me.PlaneGeometry(a,o),new me.MeshBasicMaterial({color:new me.Color(c).multiplyScalar(l),side:me.DoubleSide}));f.position.set(...h),f.rotation.set(...u),e.add(f)};n(7,3.5,16777215,6,[0,4.9,1],[Math.PI/2,0,0]),n(4,2.2,16777215,3,[-6,2.5,6],[0,Math.PI*.75,0]),n(.35,7,ji,9,[9.9,1.5,0],[0,-Math.PI/2,Math.PI/2]),n(.35,7,ji,9,[-9.9,1.2,-2],[0,Math.PI/2,Math.PI/2]),n(6,.3,ji,7,[0,.4,-9.9],[0,0,0]);let s=new me.PMREMGenerator(i),r=s.fromScene(e,.03).texture;return s.dispose(),r}function hd(i,e,{mobile:t=!1,floor:n=!0}={}){i.environment=Fv(e),i.environmentIntensity=.9,i.fog=new me.FogExp2(197892,.028);let s=new me.DirectionalLight(16777215,2.2);s.position.set(4,9,6),s.castShadow=!t,s.shadow.mapSize.set(2048,2048),s.shadow.bias=-4e-4,s.shadow.normalBias=.02;let r=s.shadow.camera;r.left=-14,r.right=14,r.top=14,r.bottom=-14,r.near=.5,r.far=40,i.add(s);let a=new me.DirectionalLight(ji,1.6);a.position.set(-6,3,-7),i.add(a);let o=new me.HemisphereLight(10485664,131842,.25);i.add(o);let c=null;return n&&(c=new me.Mesh(new me.PlaneGeometry(80,80),new me.MeshStandardMaterial({color:724236,roughness:.42,metalness:0})),c.rotation.x=-Math.PI/2,c.receiveShadow=!0,i.add(c)),{key:s,rim:a,fill:o,floor:c}}var ii=Math.sqrt,cn=Math.abs,_n=Math.max,Ii=Math.min;function Hr(i,e,t){let n=_n(t-cn(i-e),0)/t;return Ii(i,e)-n*n*t*.25}function Bo(i,e,t){let n=_n(t-cn(i-e),0)/t;return _n(i,e)+n*n*t*.25}function Ki(i,e,t){let n=(t-i)/(e-i);return n=n<0?0:n>1?1:n,n*n*(3-2*n)}function Hh(i,e,t,n,s,r){let a=i/n,o=e/s,c=t/r,l=ii(a*a+o*o+c*c),h=a/n,u=o/s,f=c/r,p=ii(h*h+u*u+f*f);return p<1e-9?-Ii(n,s,r):l*(l-1)/p}function Gh(i,e,t,n){let s=i/t,r=e/n,a=ii(s*s+r*r),o=s/t,c=r/n,l=ii(o*o+c*c);return l<1e-9?-Ii(t,n):a*(a-1)/l}function ko(i,e,t,n,s,r,a,o,c,l,h){let u=i-n,f=e-s,p=t-r,g=a-n,b=o-s,m=c-r,d=(u*g+f*b+p*m)/(g*g+b*b+m*m);d=d<0?0:d>1?1:d;let _=u-g*d,v=f-b*d,x=p-m*d;return ii(_*_+v*v+x*x)-(l+(h-l)*d)}function Vh(i,e,t,n,s){let r=cn(i)-t+s,a=cn(e)-n+s,o=_n(r,0),c=_n(a,0);return ii(o*o+c*c)+Ii(_n(r,a),0)-s}var yn=-.004,pd=-.165,Go=.15,qr=-.099,Pi=.027,md=2.05;function jr(i){let e=Ki(-.128,-.165,i);return[.055+.0055*e,.047+.005*e]}var Ov=1,gd=!1,Nn=[.004,.028,.03,.022];var ud=Math.cos(.16),fd=Math.sin(.16);function bd(i,e,t){if(i>-.025||t>.085||t<-.075)return Ov;let n=e+.011,s=t-0,r=s*ud+n*fd,a=1-.45*Ki(-.01,.045,r);return Hh((i+.059)/a,-s*fd+n*ud,r,.0172,.026,.05)*(.7+.3*a)}var Bv=[[-.058,.08,3,.004,.042,65e-5],[-.047,-.06,2,-.012,.03,45e-5],[-.037,.14,4,.014,.022,35e-5]];function Wh(i,e,t,n){let s=Hh(i-.005,e-.017,t-.045,.065,.066,.1),r=ko(i,e,t,-.016,.002,.108,.018,-.004,.106,.056,.054);if(s=Hr(s,r,.03),s=Hr(s,Hh(i,e-.047,t-.088,.052,.035,.046),.03),s=Bo(s,-.052-e,.02),t>.09&&(s=Bo(s,.26*e+.966*t-.1525,.03)),e<-.015&&t>.03&&t<.11){let l=ko(i,e,t,-.04,-.0558,.07,.045,-.0558,.068,.0085,.0085);l=Ii(l,ko(i,e,t,.045,-.0558,.068,.062,-.043,.076,.0085,.006)),l=Ii(l,ko(i,e,t,-.04,-.0558,.07,-.058,-.045,.077,.0085,.006)),s=Bo(s,-l,.008)}let a=.055,o=.047;if(t<.03){let l=t+Go*(e-yn),h=jr(l);a=h[0],o=h[1];let u=_n(Gh(i,e-yn,a,o),_n((pd-l)*.99,t+.01));s=Hr(s,u,.035)}if(n!==2){let l=bd(i,e,t);if(l<.05){let h=.022+-.015*Ki(-.025,.008,t)+.012*Ki(.025,.06,t);s=Hr(s,l,h)}}if(gd)return _n(s,-.082-t);if(t>-.075&&t<-.02&&e>.012){let l=Ki(.012,.035,e);for(let h=0;h<3;h++){let u=Bv[h],f=u[0],p=u[1],g=u[2],b=u[3],m=u[4],d=u[5],_=i-b,v=1-Ki(m*.45,m,cn(_));if(v<=0)continue;let x=(t-(f+p*_+g*_*_))/.0042;cn(x)<3&&(s+=l*v*d*Math.exp(-x*x))}}if(s+=45e-5*Math.sin(i*61+t*23)*Math.sin(e*57-t*41+1.3),t<-.075&&(s=Bo(s,-_n(Gh(i,e-yn,a-.0085,o-.0085),t+.09),.004)),n)return s;if(e>.04&&cn(i-Nn[0])<.05&&cn(t-Nn[1])<.05){let l=Vh(i-Nn[0],t-Nn[1],Nn[2],Nn[3],.011);s=Hr(s,_n(l,s-.0014),.0012)}let c=t-qr;if(cn(c)<Pi+.006){let l=Gh(i,e-yn,.055,.047);if(l<.02){let h=Vh(l-.003,c,.0032,Pi,.0016),u=Math.atan2((e-yn)/.047,i/.055),f=.0031+.0016*Ki(-1.7,-.5,u),p=_n(Vh(l-f,c,f,Pi-6e-4,.0016),(u-md)*.05);s=Ii(s,Ii(h,p))}}return s}function kv(i,e,t,n){let s=Math.ceil((t[0]-e[0])/n)+1,r=Math.ceil((t[1]-e[1])/n)+1,a=Math.ceil((t[2]-e[2])/n)+1,o=s*r*a,c=new Float32Array(o),l=n*4,h=Math.ceil((s-1)/4)+1,u=Math.ceil((r-1)/4)+1,f=Math.ceil((a-1)/4)+1,p=new Float32Array(h*u*f);for(let A=0;A<f;A++)for(let C=0;C<u;C++)for(let M=0;M<h;M++)p[M+h*(C+u*A)]=i(e[0]+M*l,e[1]+C*l,e[2]+A*l);let g=l*.9;for(let A=0;A<a;A++){let C=e[2]+A*n,M=Math.min(f-1,Math.round(A/4));for(let y=0;y<r;y++){let D=e[1]+y*n,I=Math.min(u-1,Math.round(y/4)),R=s*(y+r*A);for(let U=0;U<s;U++,R++){let W=p[Math.min(h-1,Math.round(U/4))+h*(I+u*M)];c[R]=cn(W)>g?W:i(e[0]+U*n,D,C)}}}let b=new Int32Array(o).fill(-1),m=[],d=[],_=[0,1,s,s+1,s*r,s*r+1,s*r+s,s*r+s+1],v=[0,1,2,3,4,5,6,7,0,2,1,3,4,6,5,7,0,4,1,5,2,6,3,7],x=new Float32Array(8),T=s,w=s*r;for(let A=0;A<a-1;A++)for(let C=0;C<r-1;C++)for(let M=0;M<s-1;M++){let y=M+s*(C+r*A),D=0;for(let q=0;q<8;q++){let Z=c[y+_[q]];x[q]=Z,Z<0&&(D|=1<<q)}if(D===0||D===255)continue;let I=0,R=0,U=0,W=0;for(let q=0;q<24;q+=2){let Z=v[q],fe=v[q+1],Ce=x[Z],pe=x[fe];if(Ce<0==pe<0)continue;let re=Ce/(Ce-pe);I+=(Z&1)+((fe&1)-(Z&1))*re,R+=(Z>>1&1)+((fe>>1&1)-(Z>>1&1))*re,U+=(Z>>2&1)+((fe>>2&1)-(Z>>2&1))*re,W++}let z=m.length/3;m.push(e[0]+(M+I/W)*n,e[1]+(C+R/W)*n,e[2]+(A+U/W)*n),b[y]=z;let ee=x[0]<0;if(C>0&&A>0&&ee!==x[1]<0){let q=b[y],Z=b[y-T],fe=b[y-T-w],Ce=b[y-w];ee?d.push(q,Z,fe,q,fe,Ce):d.push(q,fe,Z,q,Ce,fe)}if(M>0&&A>0&&ee!==x[2]<0){let q=b[y],Z=b[y-w],fe=b[y-w-1],Ce=b[y-1];ee?d.push(q,Z,fe,q,fe,Ce):d.push(q,fe,Z,q,Ce,fe)}if(M>0&&C>0&&ee!==x[4]<0){let q=b[y],Z=b[y-1],fe=b[y-1-T],Ce=b[y-T];ee?d.push(q,Z,fe,q,fe,Ce):d.push(q,fe,Z,q,Ce,fe)}}return{pos:new Float32Array(m),idx:d}}function Xh(i,e,t,n,s,r){let a=i(e+s,t-s,n-s),o=i(e-s,t-s,n+s),c=i(e-s,t+s,n-s),l=i(e+s,t+s,n+s);r[0]=a-o-c+l,r[1]=-a-o+c+l,r[2]=-a+o-c+l;let h=ii(r[0]*r[0]+r[1]*r[1]+r[2]*r[2])||1;r[0]/=h,r[1]/=h,r[2]/=h}function zv(i,e,t,n){let s=i(e[0],e[1],e[2]);Xh(i,e[0],e[1],e[2],n,t),e[0]-=s*t[0],e[1]-=s*t[1],e[2]-=s*t[2]}function Yr(i,e,t,n,s){for(let r=0;r<s;r++){let a=i(e[0],e[1],e[2]);Xh(i,e[0],e[1],e[2],n,t),e[0]-=a*t[0],e[1]-=a*t[1],e[2]-=a*t[2]}Xh(i,e[0],e[1],e[2],n,t)}function Gv(i,e,t,n,s,r){let a=Math.ceil((t-e)/r)+1,o=Math.ceil((s-n)/r)+1,c=new Float32Array(a*o);for(let b=0;b<o;b++)for(let m=0;m<a;m++)c[m+a*b]=i(e+m*r,n+b*r);let l=new Map,h=new Map,u=(b,m,d)=>{let _=(m*a+b)*2+d;if(!l.has(_)){let v=c[b+a*m],x=d?c[b+a*(m+1)]:c[b+1+a*m],T=v/(v-x);l.set(_,d?[e+b*r,n+(m+T)*r]:[e+(b+T)*r,n+m*r])}return _},f=(b,m)=>{(h.get(b)||h.set(b,[]).get(b)).push(m),(h.get(m)||h.set(m,[]).get(m)).push(b)};for(let b=0;b<o-1;b++)for(let m=0;m<a-1;m++){let d=c[m+a*b]<0,_=c[m+1+a*b]<0,v=c[m+1+a*(b+1)]<0,x=c[m+a*(b+1)]<0,T=[];d!==_&&T.push(u(m,b,0)),_!==v&&T.push(u(m+1,b,1)),x!==v&&T.push(u(m,b+1,0)),d!==x&&T.push(u(m,b,1)),T.length===2?f(T[0],T[1]):T.length===4&&(f(T[0],T[1]),f(T[2],T[3]))}let p=new Set,g=[];for(let b of h.keys()){if(p.has(b))continue;let m=b,d=-1,_=0;for(;_++<1e5;){let T=h.get(m).filter(A=>A!==d);if(h.get(m).length<2||T.length===0)break;let w=T[0];if(d=m,m=w,m===b)break}let v=[],x=m;for(d=-1;x!==void 0&&!p.has(x);){p.add(x),v.push(l.get(x));let T=h.get(x).filter(w=>w!==d&&!p.has(w));d=x,x=T[0]}v.length>4&&g.push(v)}return g}function Vv(i,e,t=2){for(let c=0;c<t;c++)for(let l=1;l<i.length-1;l++)for(let h=0;h<3;h++)i[l][h]=(i[l-1][h]+2*i[l][h]+i[l+1][h])/4;let n=[0];for(let c=1;c<i.length;c++)n.push(n[c-1]+Math.hypot(i[c][0]-i[c-1][0],i[c][1]-i[c-1][1],i[c][2]-i[c-1][2]));let s=n[n.length-1],r=Math.max(2,Math.round(s/e)),a=[],o=0;for(let c=0;c<=r;c++){let l=s*c/r;for(;o<n.length-2&&n[o+1]<l;)o++;let h=(l-n[o])/(n[o+1]-n[o]||1);a.push([0,1,2].map(u=>i[o][u]+(i[o+1][u]-i[o][u])*h))}return a}function xd(i,e={}){let t=performance.now(),n=e.lod==="low";gd=n;let s=new i.Group;s.name="guantone";let r=(te,be,Te)=>Wh(te,be,Te,0),a=(te,be,Te)=>Wh(te,be,Te,1),o=(te,be,Te)=>Wh(te,be,Te,2),c=n?.006:.0038,{pos:l,idx:h}=kv(r,[-.104,-.066,-.17],[.08,.096,.172],c),u=l.length/3,f=new Float32Array(u*3),p=[0,0,0],g=[0,0,0];for(let te=0;te<u;te++)p[0]=l[te*3],p[1]=l[te*3+1],p[2]=l[te*3+2],zv(r,p,g,c*.35),l[te*3]=p[0],l[te*3+1]=p[1],l[te*3+2]=p[2],f[te*3]=g[0],f[te*3+1]=g[1],f[te*3+2]=g[2];let b=[],m=[];for(let te=0;te<h.length;te+=3){let be=h[te],Te=h[te+1],ge=h[te+2],j=l[be*3],J=l[be*3+1],E=l[be*3+2],ye=l[Te*3]-j,ce=l[Te*3+1]-J,ie=l[Te*3+2]-E,oe=l[ge*3]-j,Me=l[ge*3+1]-J,_e=l[ge*3+2]-E,P=ce*_e-ie*Me,S=ie*oe-ye*_e,G=ye*Me-ce*oe,F=f[be*3]+f[Te*3]+f[ge*3],K=f[be*3+1]+f[Te*3+1]+f[ge*3+1],N=f[be*3+2]+f[Te*3+2]+f[ge*3+2];if(P*F+S*K+G*N<0){let Le=Te;Te=ge,ge=Le}let O=(E+l[Te*3+2]+l[ge*3+2])/3,k=(j+l[Te*3]+l[ge*3])/3,H=(J+l[Te*3+1]+l[ge*3+1])/3,[Ae,ae]=jr(O+Go*(H-yn));(O<-.08&&(k/(Ae-.004))**2+((H-yn)/(ae-.004))**2<1?m:b).push(be,Te,ge)}let d=new i.BufferGeometry;d.setAttribute("position",new i.BufferAttribute(l,3)),d.setAttribute("normal",new i.BufferAttribute(f,3)),d.setAttribute("uv",new i.BufferAttribute(new Float32Array(u*2),2)),d.setIndex([...b,...m]),d.addGroup(0,b.length,0),d.addGroup(b.length,m.length,1);let v=qv(i,256),x=new i.MeshPhysicalMaterial({color:789517,roughness:.46,metalness:0,clearcoat:.4,clearcoatRoughness:.28,sheen:.35,sheenColor:3815994,sheenRoughness:.5,specularIntensity:.6}),T=new i.MeshPhysicalMaterial({color:3800852,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.25});dd(x,v,140,12e-5,7e-4),dd(T,v,140,7e-5,4e-4);let w=new i.MeshStandardMaterial({color:329221,roughness:1,metalness:0,envMapIntensity:.35}),A=new i.MeshStandardMaterial({color:13619916,roughness:.75,metalness:0}),C=new i.Mesh(d,[x,w]);C.castShadow=C.receiveShadow=!0,s.add(C);let M=n?40:96,y=[[-5e-4,-.1435],[7e-4,-.1442],[.0011,-.1458],[.0012,-.149],[.0012,-.1615]],D=.0044,I=.0012-D,R=-.1628,U=n?6:10;for(let te=1;te<=U;te++){let be=Math.PI*te/U;y.push([I+D*Math.cos(be),R-D*Math.sin(be)])}y.push([I-D+2e-4,-.1575],[I-D+.0012,-.155]);let W=[zo(i,y,M)];if(n){let te=(ge,j)=>{ge.setAttribute("uv",new i.BufferAttribute(new Float32Array(ge.attributes.position.count*2),2));let J=new i.Mesh(ge,j);J.castShadow=J.receiveShadow=!0,s.add(J)},be=zo(i,[[-4e-4,-.078],[0,-.1],[0,-.13],[0,-.159]],M);te(lt([be,zo(i,[[-6e-4,-.0722],[.0035,-.072],[.0058,-.0732],[.0066,-.0758],[.0066,-.1222],[.0058,-.1248],[.0035,-.126],[-6e-4,-.1258]],M,!1)]),x),te(zo(i,[[-.0094,-.158],[-.0094,-.13],[-.0094,-.105],[-.02,-.1],[-.04,-.097]],M,!0,!0),w)}let z=.0023,ee=n?4:8,q=[],Z=(te,be,Te=a)=>{let ge=Gv((j,J)=>Te(te,j,J),-.068,.084,-.075,.175,n?.003:.0022);for(let j of ge){let J=j.map(([ce,ie])=>[te,ce,ie]),E=[],ye=()=>{if(E.length>6){let ce=Vv(E,n?.0045:.002,6);fe(ce)}E=[]};for(let ce of J){let ie=E[E.length-1];ie&&Math.hypot(ce[0]-ie[0],ce[1]-ie[1],ce[2]-ie[2])>.008&&ye(),be(ce)?E.push(ce):ye()}ye()}},fe=te=>{let be=[],Te=[];for(let ge of te){let j=ge.slice(),J=[0,0,0];Yr(a,j,J,8e-4,2),be.push(j),Te.push(J)}W.push(Wv(i,be,Te,z,z*.45,ee)),q.push({pts:be,nn:Te,side:1})},Ce=te=>te[2]>(n?-.052:qr+Pi+.0015);Z(.055,Ce),Z(-.053,te=>Ce(te)&&bd(te[0],te[1],te[2])>.008,o);let pe=[],re={len:.0032,gap:.0021,w:9e-4,hgt:55e-5};for(let te of q){let be=Xv(te.pts,te.nn,.0048,a);be&&Xr(i,be.pts,be.nn,re,pe,n)}let Y=(te,be,Te,ge=-Math.PI,j=Math.PI)=>{let J=[],E=[];for(let ce=0;ce<=220;ce++){let ie=ge+(j-ge)*ce/220,[oe,Me]=jr(te),_e=[(oe+be)*Math.cos(ie),yn+(Me+be)*Math.sin(ie),te],P=[0,0,0];Yr(Te,_e,P,6e-4,3),J.push(_e),E.push(P)}return{pts:J,nn:E}};for(let te of[qr-Pi+.0042,qr+Pi-.0042]){let be=Y(te,.01,r);Xr(i,be.pts,be.nn,re,pe,n)}{let te=[],be=[];for(let ge=0;ge<=220;ge++){let j=-Math.PI+2*Math.PI*ge/220,[J,E]=jr(-.1525);te.push([(J+.0014)*Math.cos(j),yn+(E+.0014)*Math.sin(j),-.1535-Go*(E+.0014)*Math.sin(j)]);let ye=Math.cos(j)/J,ce=Math.sin(j)/E,ie=Math.hypot(ye,ce);be.push([ye/ie,ce/ie,0])}Xr(i,te,be,re,pe,n)}{let te=[],be=[];for(let Te=0;Te<=30;Te++){let ge=qr-Pi+.004+(2*Pi-.008)*Te/30,j=md-.09,J=[.07*Math.cos(j),yn+.062*Math.sin(j),ge],E=[0,0,0];Yr(r,J,E,6e-4,3),te.push(J),be.push(E)}Xr(i,te,be,re,pe,n)}{let te=[],be=[];for(let j=0;j<=160;j++){let J=2*Math.PI*j/160,E=Math.cos(J),ye=Math.sin(J),ce=Math.sign(E)*Math.pow(cn(E),.42)*(Nn[2]-.0045),ie=Math.sign(ye)*Math.pow(cn(ye),.42)*(Nn[3]-.0045),oe=[Nn[0]+ce,.1,Nn[1]+ie],Me=[0,0,0];for(let _e=0;_e<30;_e++){let P=r(oe[0],oe[1],oe[2]);if(oe[1]-=P,cn(P)<1e-6)break}Yr(r,oe,Me,6e-4,1),te.push(oe),be.push(Me)}Xr(i,te,be,re,pe,n)}let $=lt(W.map(te=>(te.setAttribute("uv",new i.BufferAttribute(new Float32Array(te.attributes.position.count*2),2)),te))),ue=new i.Mesh($,T);if(ue.castShadow=ue.receiveShadow=!0,s.add(ue),pe.length){let te=lt(pe),be=new i.Mesh(te,A);be.castShadow=!1,be.receiveShadow=!0,s.add(be)}let X=0;return s.traverse(te=>{te.isMesh&&(X+=te.geometry.index?te.geometry.index.count/3:te.geometry.attributes.position.count/3)}),s.userData.tris=Math.round(X),s.userData.buildMs=Math.round(performance.now()-t),typeof window<"u"&&(window.__guantone={tris:s.userData.tris,ms:s.userData.buildMs}),s}function zo(i,e,t,n=!0,s=!1){let r=e.length,a=new Float32Array(r*t*3),o=[];for(let u=0;u<t;u++){let f=2*Math.PI*u/t,p=Math.cos(f),g=Math.sin(f);for(let b=0;b<r;b++){let[m,d]=e[b],_=Math.max(d,pd),[v,x]=jr(_),T=(u*r+b)*3;a[T]=(v+m)*p,a[T+1]=yn+(x+m)*g,a[T+2]=n?d-Go*(x+m)*g:d}}for(let u=0;u<t;u++)for(let f=0;f<r-1;f++){let p=u*r+f,g=(u+1)%t*r+f;o.push(p,p+1,g,g,p+1,g+1)}let c=new i.BufferGeometry;c.setAttribute("position",new i.BufferAttribute(a,3)),c.setIndex(o),c.computeVertexNormals();let l=c.attributes.normal,h=0;for(let u=0;u<t;u++){let f=u*r+3;h+=l.getX(f)*a[f*3]+l.getY(f)*(a[f*3+1]-yn)}if(h<0!==s){let u=c.index.array;for(let f=0;f<u.length;f+=3){let p=u[f+1];u[f+1]=u[f+2],u[f+2]=p}c.computeVertexNormals()}return c}function Wv(i,e,t,n,s,r){let a=e.length,o=new Float32Array(a*r*3),c=new Float32Array(a*r*3),l=[];for(let u=0;u<a;u++){let f=e[Math.max(0,u-1)],p=e[Math.min(a-1,u+1)],g=p[0]-f[0],b=p[1]-f[1],m=p[2]-f[2],d=Math.hypot(g,b,m)||1;g/=d,b/=d,m/=d;let[_,v,x]=t[u],T=_*g+v*b+x*m;_-=T*g,v-=T*b,x-=T*m;let w=Math.hypot(_,v,x)||1;_/=w,v/=w,x/=w;let A=b*x-m*v,C=m*_-g*x,M=g*v-b*_,y=e[u][0]+_*s,D=e[u][1]+v*s,I=e[u][2]+x*s;for(let R=0;R<r;R++){let U=2*Math.PI*R/r,W=Math.cos(U),z=Math.sin(U),ee=_*W+A*z,q=v*W+C*z,Z=x*W+M*z,fe=(u*r+R)*3;o[fe]=y+ee*n,o[fe+1]=D+q*n,o[fe+2]=I+Z*n,c[fe]=ee,c[fe+1]=q,c[fe+2]=Z}}for(let u=0;u<a-1;u++)for(let f=0;f<r;f++){let p=u*r+f,g=u*r+(f+1)%r,b=p+r,m=g+r;l.push(p,b,g,g,b,m)}let h=new i.BufferGeometry;return h.setAttribute("position",new i.BufferAttribute(o,3)),h.setAttribute("normal",new i.BufferAttribute(c,3)),h.setIndex(l),Hv(h)}function Hv(i){let e=i.attributes.position.array,t=i.attributes.normal.array,n=i.index.array,s=n[0],r=n[1],a=n[2],o=[e[r*3]-e[s*3],e[r*3+1]-e[s*3+1],e[r*3+2]-e[s*3+2]],c=[e[a*3]-e[s*3],e[a*3+1]-e[s*3+1],e[a*3+2]-e[s*3+2]],l=[o[1]*c[2]-o[2]*c[1],o[2]*c[0]-o[0]*c[2],o[0]*c[1]-o[1]*c[0]];if(l[0]*t[s*3]+l[1]*t[s*3+1]+l[2]*t[s*3+2]<0)for(let h=0;h<n.length;h+=3){let u=n[h+1];n[h+1]=n[h+2],n[h+2]=u}return i}function Xv(i,e,t,n){let s=i.length;if(s<4)return null;let r=[0,0,0];for(let l of i)for(let h=0;h<3;h++)r[h]+=l[h]/s;let a=[],o=[];for(let l=0;l<s;l++){let h=i[Math.max(0,l-1)],u=i[Math.min(s-1,l+1)],f=[u[0]-h[0],u[1]-h[1],u[2]-h[2]],p=e[l],g=[f[1]*p[2]-f[2]*p[1],f[2]*p[0]-f[0]*p[2],f[0]*p[1]-f[1]*p[0]],b=Math.hypot(...g)||1;g=g.map(m=>m/b),a.push([i[l][0]+g[0]*t,i[l][1]+g[1]*t,i[l][2]+g[2]*t])}let c=0;for(let l=0;l<s;l++)c+=(a[l][0]-i[l][0])*(r[0]-i[l][0])+(a[l][1]-i[l][1])*(r[1]-i[l][1])+(a[l][2]-i[l][2])*(r[2]-i[l][2]);if(c<0)for(let l=0;l<s;l++)for(let h=0;h<3;h++)a[l][h]=2*i[l][h]-a[l][h];for(let l of a){let h=[0,0,0];Yr(n,l,h,6e-4,3),o.push(h)}return{pts:a,nn:o}}function Xr(i,e,t,n,s,r){if(r)return;let a=[0];for(let b=1;b<e.length;b++)a.push(a[b-1]+Math.hypot(e[b][0]-e[b-1][0],e[b][1]-e[b-1][1],e[b][2]-e[b-1][2]));let o=a[a.length-1],c=n.len+n.gap,l=[],h=[],u=[],f=b=>{let m=0;for(;m<a.length-2&&a[m+1]<b;)m++;let d=(b-a[m])/(a[m+1]-a[m]||1),_=[],v=[];for(let T=0;T<3;T++)_.push(e[m][T]+(e[m+1][T]-e[m][T])*d),v.push(t[m][T]+(t[m+1][T]-t[m][T])*d);let x=Math.hypot(...v)||1;return[_,v.map(T=>T/x)]};for(let b=c*.5;b+n.len<o;b+=c){let[m,d]=f(b),[_]=f(b+n.len),v=_[0]-m[0],x=_[1]-m[1],T=_[2]-m[2],w=Math.hypot(v,x,T)||1;v/=w,x/=w,T/=w;let[A,C,M]=d,y=x*M-T*C,D=T*A-v*M,I=v*C-x*A,R=l.length/3,U=n.w/2,W=n.hgt,z=(re,Y)=>{l.push(re[0]-y*U*Y-A*2e-4,re[1]-D*U*Y-C*2e-4,re[2]-I*U*Y-M*2e-4),h.push(-y*.6+A*.8,-D*.6+C*.8,-I*.6+M*.8),l.push(re[0]+A*W*Y,re[1]+C*W*Y,re[2]+M*W*Y),h.push(A,C,M),l.push(re[0]+y*U*Y-A*2e-4,re[1]+D*U*Y-C*2e-4,re[2]+I*U*Y-M*2e-4),h.push(y*.6+A*.8,D*.6+C*.8,I*.6+M*.8)},ee=[m[0]+v*n.len*.2,m[1]+x*n.len*.2,m[2]+T*n.len*.2],q=[m[0]+v*n.len*.8,m[1]+x*n.len*.8,m[2]+T*n.len*.8];l.push(m[0]-A*2e-4,m[1]-C*2e-4,m[2]-M*2e-4),h.push(-v*.5+A*.8,-x*.5+C*.8,-T*.5+M*.8),z(ee,1),z(q,1),l.push(_[0]-A*2e-4,_[1]-C*2e-4,_[2]-M*2e-4),h.push(v*.5+A*.8,x*.5+C*.8,T*.5+M*.8);let Z=R,fe=R+1,Ce=R+4,pe=R+7;u.push(Z,fe+1,fe,Z,fe+2,fe+1);for(let re=0;re<2;re++)u.push(fe+re,fe+re+1,Ce+re,Ce+re,fe+re+1,Ce+re+1);u.push(pe,Ce,Ce+1,pe,Ce+1,Ce+2)}if(!l.length)return;let p=new i.BufferGeometry;if(p.setAttribute("position",new i.Float32BufferAttribute(l,3)),p.setAttribute("normal",new i.Float32BufferAttribute(h,3)),p.setIndex(u),(()=>{let b=u,m=b[0],d=b[1],_=b[2],v=[0,1,2].map(A=>l[d*3+A]-l[m*3+A]),x=[0,1,2].map(A=>l[_*3+A]-l[m*3+A]),T=[v[1]*x[2]-v[2]*x[1],v[2]*x[0]-v[0]*x[2],v[0]*x[1]-v[1]*x[0]],w=[0,1,2].map(A=>h[d*3+A]);return T[0]*w[0]+T[1]*w[1]+T[2]*w[2]<0})()){let b=p.index.array;for(let m=0;m<b.length;m+=3){let d=b[m+1];b[m+1]=b[m+2],b[m+2]=d}}p.setAttribute("uv",new i.BufferAttribute(new Float32Array(l.length/3*2),2)),s.push(p)}function qv(i,e){let t=new Uint8Array(e*e*4),n=1337,s=()=>(n=n*16807%2147483647)/2147483647,r=Math.round(e/22),a=e/r,o=r+2,c=new Float32Array(o*o),l=new Float32Array(o*o),h=new Float32Array(r*r),u=new Float32Array(r*r);for(let _=0;_<r*r;_++)h[_]=.12+s()*.76,u[_]=.12+s()*.76;for(let _=0;_<o;_++)for(let v=0;v<o;v++){let x=(v-1+r)%r+r*((_-1+r)%r);c[v+o*_]=v-1+h[x],l[v+o*_]=_-1+u[x]}let f=6,p=[],g=[],b=[],m=[];for(let _=0;_<f;_++){let v=1+Math.floor(s()*3),x=(1+Math.floor(s()*3))*(s()<.5?-1:1),T=s()*6.283,w=new Float32Array(e),A=new Float32Array(e),C=new Float32Array(e),M=new Float32Array(e);for(let y=0;y<e;y++)w[y]=Math.cos(2*Math.PI*v*y/e),A[y]=Math.sin(2*Math.PI*v*y/e),C[y]=Math.cos(2*Math.PI*x*y/e+T),M[y]=Math.sin(2*Math.PI*x*y/e+T);p.push(w),g.push(A),b.push(C),m.push(M)}for(let _=0;_<e;_++){let v=_/a,x=Math.floor(v);for(let T=0;T<e;T++){let w=T/a,A=Math.floor(w),C=9,M=9;for(let W=0;W<3;W++){let z=A+o*(x+W);for(let ee=0;ee<3;ee++,z++){let q=c[z]-w,Z=l[z]-v,fe=q*q+Z*Z;fe<C?(M=C,C=fe):fe<M&&(M=fe)}}let y=ii(M)-ii(C),D=y*2.4>1?1:y*2.4,I=1-(1-D)*(1-D)*(1-D),R=0;for(let W=0;W<f;W++)R+=p[W][T]*b[W][_]-g[W][T]*m[W][_];let U=(T+_*e)*4;t[U]=I*255|0,t[U+1]=(.55+.45*(1-I))*255|0,t[U+2]=(.5+R/f*.5)*255|0,t[U+3]=255}}let d=new i.DataTexture(t,e,e,i.RGBAFormat);return d.wrapS=d.wrapT=i.RepeatWrapping,d.magFilter=i.LinearFilter,d.minFilter=i.LinearMipmapLinearFilter,d.generateMipmaps=!0,d.anisotropy=4,d.colorSpace=i.NoColorSpace,d.needsUpdate=!0,d}function dd(i,e,t,n,s){i.onBeforeCompile=r=>{r.uniforms.grainMap={value:e},r.uniforms.grainScale={value:t/3},r.uniforms.grainDepth={value:n},r.uniforms.waveDepth={value:s},r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vObjPos;
varying vec3 vObjNrm;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vObjPos = position;
vObjNrm = normal;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vObjPos; varying vec3 vObjNrm;
uniform sampler2D grainMap; uniform float grainScale; uniform float grainDepth; uniform float waveDepth;
vec4 triS(vec3 p, vec3 w, float sc){
  return w.x*texture2D(grainMap, p.yz*sc) + w.y*texture2D(grainMap, p.zx*sc + 0.37) + w.z*texture2D(grainMap, p.xy*sc + 0.71);
}
float triH(vec3 p, vec3 w){
  float a = triS(p, w, grainScale).r * grainDepth;
  float b = triS(p, w, grainScale*0.055).b * waveDepth;
  return a + b;
}`).replace("#include <roughnessmap_fragment>",`
vec3 gN = normalize(vObjNrm);
vec3 gW = pow(abs(gN), vec3(4.0)); gW /= (gW.x + gW.y + gW.z);
float gH0 = triH(vObjPos, gW);
float gHx = triH(vObjPos + dFdx(vObjPos), gW);
float gHy = triH(vObjPos + dFdy(vObjPos), gW);
float gR = triS(vObjPos, gW, grainScale).g;
float roughnessFactor = roughness * mix(0.78, 1.18, gR);`).replace("#include <normal_fragment_maps>",`
{
  vec3 vpx = dFdx(-vViewPosition), vpy = dFdy(-vViewPosition);
  float sc = (length(vpx) + length(vpy)) / max(length(dFdx(vObjPos)) + length(dFdy(vObjPos)), 1e-12);
  vec2 dB = vec2(gHx - gH0, gHy - gH0) * sc;
  vec3 R1 = cross(vpy, normal), R2 = cross(normal, vpx);
  float det = dot(vpx, R1) * faceDirection;
  vec3 gv = sign(det) * (dB.x * R1 + dB.y * R2);
  normal = normalize(abs(det) * normal - gv);
}`)},i.customProgramCacheKey=()=>"grain"+n+"_"+s}var Kr=new V;function Mn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Kr.copy(e),Kr[n]=0,Kr.normalize();let l=.5*a/(a+o),h=1-Kr.angleTo(i)/c;return Math.sign(Kr[t])===1?h*l:o/(a+o)+l+l*(1-h)}var si=class extends Jn{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new V,c=new V,l=new V(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,g=new V,b=.5/s;for(let m=0,d=0;m<h.length;m+=3,d+=2)switch(o.fromArray(h,m),c.copy(o),c.x-=Math.sign(c.x)*b,c.y-=Math.sign(c.y)*b,c.z-=Math.sign(c.z)*b,c.normalize(),h[m+0]=l.x*Math.sign(o.x)+c.x*r,h[m+1]=l.y*Math.sign(o.y)+c.y*r,h[m+2]=l.z*Math.sign(o.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:g.set(1,0,0),f[d+0]=Mn(g,c,"z","y",r,n),f[d+1]=1-Mn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),f[d+0]=1-Mn(g,c,"z","y",r,n),f[d+1]=1-Mn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),f[d+0]=1-Mn(g,c,"x","z",r,e),f[d+1]=Mn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),f[d+0]=1-Mn(g,c,"x","z",r,e),f[d+1]=1-Mn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),f[d+0]=1-Mn(g,c,"x","y",r,e),f[d+1]=1-Mn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),f[d+0]=Mn(g,c,"x","y",r,e),f[d+1]=1-Mn(g,c,"y","x",r,t);break}}};function vd(i,e={}){let t=(e.lod||"high")!=="low",n=new i.Group;n.name="ring";let s=3800852,r=6.1,a=r/2,o=.9,c=2.6,l=2.5,h=[.45,.727,1,1.27],u=.03,f=.055,p=2.26,g=1337,b=()=>(g=g*16807%2147483647)/2147483647,m=(F,K)=>{let N=document.createElement("canvas");return N.width=F,N.height=K,N},d=(F,K=!0,N)=>{let O=new i.CanvasTexture(F);return K&&(O.colorSpace=i.SRGBColorSpace),O.anisotropy=8,N&&(O.wrapS=O.wrapT=i.RepeatWrapping,O.repeat.set(N[0],N[1])),O},_=(F,K,N,O)=>{let k=m(256,256),H=k.getContext("2d"),Ae=H.createImageData(256,256),ae=Ae.data;for(let de=0;de<ae.length;de+=4){let Le=b()<.5?0:255;ae[de]=ae[de+1]=ae[de+2]=Le,ae[de+3]=Math.floor(b()*O)}H.putImageData(Ae,0,0),F.fillStyle=F.createPattern(k,"repeat"),F.fillRect(0,0,K,N)};function v(){let K=m(1024,1024),N=K.getContext("2d");N.fillStyle="#17191c",N.fillRect(0,0,1024,1024);let O=N.createRadialGradient(1024/2,1024/2,1024*.05,1024/2,1024/2,1024*.75);O.addColorStop(0,"rgba(255,255,255,0.04)"),O.addColorStop(.55,"rgba(255,255,255,0.01)"),O.addColorStop(1,"rgba(0,0,0,0.25)"),N.fillStyle=O,N.fillRect(0,0,1024,1024),N.strokeStyle="rgba(0,0,0,0.35)",N.lineWidth=3,N.strokeRect(1024*.095,1024*.095,1024*.81,1024*.81),N.save(),N.translate(1024/2,1024/2),N.scale(1,1),N.font='900 190px Anton, Impact, "Arial Narrow", "Roboto Condensed", sans-serif',N.textAlign="center",N.textBaseline="middle",N.fillStyle="rgba(57,255,20,0.045)",N.fillText("MEDUSA",0,0),N.restore();for(let de=0;de<60;de++){N.fillStyle=`rgba(23,25,28,${.3+b()*.5})`;let Le=1024*.2+b()*1024*.6,Ee=1024*.4+b()*1024*.2;N.fillRect(Le,Ee,6+b()*40,2+b()*6)}N.globalAlpha=.07,N.fillStyle="#000";for(let de=0;de<1024;de+=2)N.fillRect(de,0,1,1024),N.fillRect(0,de,1024,1);N.globalAlpha=1;for(let de=0;de<160;de++){let Le=b()*6.283,Ee=Math.pow(b(),1.6)*1024*.38,Ie=1024/2+Math.cos(Le)*Ee,Pe=1024/2+Math.sin(Le)*Ee,Se=15+b()*60,Ue=b()*3.14;N.strokeStyle=`rgba(210,215,210,${.02+b()*.045})`,N.lineWidth=1+b()*2.2,N.beginPath(),N.moveTo(Ie,Pe),N.lineTo(Ie+Math.cos(Ue)*Se,Pe+Math.sin(Ue)*Se),N.stroke()}for(let de=0;de<18;de++){let Le=b()*1024,Ee=b()*1024,Ie=40+b()*110,Pe=N.createRadialGradient(Le,Ee,0,Le,Ee,Ie);Pe.addColorStop(0,"rgba(0,0,0,0.10)"),Pe.addColorStop(1,"rgba(0,0,0,0)"),N.fillStyle=Pe,N.fillRect(Le-Ie,Ee-Ie,Ie*2,Ie*2)}_(N,1024,1024,22);let k=d(K),H=m(64,64),Ae=H.getContext("2d");Ae.fillStyle="#808080",Ae.fillRect(0,0,64,64);for(let de=0;de<64;de+=4)Ae.fillStyle="#b0b0b0",Ae.fillRect(de,0,2,64),Ae.fillStyle="#404040",Ae.fillRect(0,de,64,2);let ae=d(H,!1,[64,64]);return{map:k,bump:ae}}function x(){let N=m(1024,256),O=N.getContext("2d");O.fillStyle="#111312",O.fillRect(0,0,1024,256);let k=O.createLinearGradient(0,0,0,256);k.addColorStop(0,"rgba(255,255,255,0.04)"),k.addColorStop(1,"rgba(0,0,0,0.25)"),O.fillStyle=k,O.fillRect(0,0,1024,256);for(let de=0;de<260;de++)O.fillStyle=`rgba(150,155,150,${.04+b()*.1})`,O.fillRect(b()*1024,b()*14,4+b()*30,1+b()*3);for(let de=0;de<60;de++)O.fillStyle=`rgba(0,0,0,${.1+b()*.2})`,O.fillRect(b()*1024,256-b()*40,10+b()*60,2+b()*6);O.save(),O.translate(1024/2,256*.47),O.scale(.5,1),O.font='900 150px Anton, Impact, "Arial Narrow", "Roboto Condensed", sans-serif',O.textBaseline="middle",O.textAlign="left",O.letterSpacing="8px";let H=O.measureText("MEDUSA ").width,Ae=O.measureText("GYM").width,ae=H+Ae;return O.fillStyle="#eef2ee",O.fillText("MEDUSA ",-ae/2,0),O.fillStyle="#39ff14",O.fillText("GYM",-ae/2+H,0),O.restore(),O.strokeStyle="rgba(255,255,255,0.12)",O.setLineDash([8,6]),O.lineWidth=1.5,O.beginPath(),O.moveTo(0,256*.86),O.lineTo(1024,256*.86),O.stroke(),O.setLineDash([]),_(O,1024,256,18),d(N)}function T(F,K,N){let O=m(64,64),k=O.getContext("2d");k.fillStyle=N,k.fillRect(0,0,64,64);for(let H=-1;H<=1;H++){k.save(),k.translate(H*64,0);let Ae=k.createLinearGradient(0,0,64,0);k.beginPath(),k.moveTo(0,64),k.lineTo(64,0),k.lineTo(64,28),k.lineTo(0,92),k.closePath(),Ae.addColorStop(0,F),Ae.addColorStop(.5,K),Ae.addColorStop(1,F),k.fillStyle=F,k.fill(),k.restore()}k.globalAlpha=.22,k.strokeStyle=K,k.lineWidth=5;for(let H=-1;H<=1;H++)k.beginPath(),k.moveTo(-5,76+H*64),k.lineTo(69,-12+H*64+0),k.stroke();return k.globalAlpha=1,O}let w=v(),A=new i.MeshStandardMaterial({map:w.map,bumpMap:w.bump,bumpScale:1.6,roughness:.95,metalness:0,color:12895428}),C=x(),M=new i.MeshPhysicalMaterial({map:C,roughness:.88,metalness:0,sheen:.6,sheenRoughness:.6,sheenColor:new i.Color(5593685)}),y=new i.MeshStandardMaterial({color:663302,emissive:new i.Color(s),emissiveIntensity:1.5,roughness:.4}),D=new i.MeshStandardMaterial({color:11975357,metalness:1,roughness:.28}),I=m(128,128),R=I.getContext("2d");R.fillStyle="#b4b4b4",R.fillRect(0,0,128,128);for(let F=0;F<70;F++){R.strokeStyle=b()<.5?`rgba(255,255,255,${.1+b()*.25})`:`rgba(60,60,60,${.1+b()*.3})`,R.lineWidth=1+b()*2;let K=b()*128,N=b()*128,O=b()*3.14;R.beginPath(),R.moveTo(K,N),R.lineTo(K+Math.cos(O)*(6+b()*24),N+Math.sin(O)*(6+b()*24)),R.stroke()}let U=d(I,!1),W=(F,K=.42)=>new i.MeshPhysicalMaterial({color:F,roughness:K,roughnessMap:U,metalness:0,clearcoat:.5,clearcoatRoughness:.28}),z=W(2369066,.3),ee=W(2081291,.38),q=W(15132900,.42);ee.emissive=new i.Color(s),ee.emissiveIntensity=.12;let Z=T("#222223","#3d3e40","#0a0a0a"),fe=T("#33d818","#6bf252","#1a8a0b"),Ce=d(Z,!0,[t?70:40,1]),pe=d(fe,!0,[t?70:40,1]),re=d(Z,!1,[t?70:40,1]),Y=new i.MeshStandardMaterial({map:Ce,bumpMap:re,bumpScale:1.5,roughness:.62,metalness:0}),$=new i.MeshStandardMaterial({map:pe,emissive:new i.Color(s),emissiveMap:pe,emissiveIntensity:.35,bumpMap:d(fe,!1,[t?70:40,1]),bumpScale:1.5,roughness:.55}),ue={canvas:[],apron:[],trim:[],steel:[],padBlack:[],padGreen:[],padWhite:[],ropeBlack:[],ropeGreen:[]},X=new i.Matrix4,te=new i.Quaternion,be=new i.Vector3,Te=new i.Vector3(1,1,1),ge=new i.Euler,j=(F,K,N=0,O=0,k=0,H=0,Ae=0,ae=0)=>(ge.set(Ae,H,ae),te.setFromEuler(ge),X.compose(be.set(N,O,k),te,Te),K.applyMatrix4(X),ue[F].push(K),K),J=(F,K,N,O,k)=>new si(F,K,N,k,O);{let K=J(r,.12,r,.05,t?4:2);j("canvas",K,0,o-.06,0)}{let F=o-.12+.01,K=.025,N=F-K,O=t?112:40,k=t?4:2;for(let de=0;de<4;de++){let Le=[],Ee=[],Ie=[];for(let Se=0;Se<=k;Se++){let Ue=Se/k;for(let B=0;B<=O;B++){let we=B/O,Q=(we-.5)*(r-.06),he=Math.sin(we*Math.PI*2*34+.8*Math.sin(we*9))*(.006+.01*Ue),De=Math.sin(we*Math.PI*2*5+de)*.004*Ue;Le.push(Q,F-Ue*N-(Ue===1?Math.abs(Math.sin(we*40))*.004:0),a-.04+he+De),Ee.push(we,1-Ue)}}for(let Se=0;Se<k;Se++)for(let Ue=0;Ue<O;Ue++){let B=Se*(O+1)+Ue,we=B+1,Q=B+O+1,he=Q+1;Ie.push(B,Q,we,we,Q,he)}let Pe=new i.BufferGeometry;Pe.setAttribute("position",new i.Float32BufferAttribute(Le,3)),Pe.setAttribute("uv",new i.Float32BufferAttribute(Ee,2)),Pe.setIndex(Ie),Pe.computeVertexNormals(),j("apron",Pe,0,0,0,de*Math.PI/2)}let H=.05,Ae=F-H/2-.004,ae=.03;for(let de=0;de<4;de++){let Le=J(r,H,ae,.008,1);Le.applyMatrix4(new i.Matrix4().makeRotationY(de*Math.PI/2).multiply(new i.Matrix4().makeTranslation(0,Ae,a-.02))),ue.trim.push(Le)}}let E=e.model||null,ye=[[1,1,"padBlack"],[-1,1,"padGreen"],[-1,-1,"padBlack"],[1,-1,"padWhite"]],ce=t?20:10;for(let[F,K,N]of E?[]:ye){let O=F*c,k=K*c;j("steel",J(.2,.025,.2,.006,1),O,o+.0125,k,Math.PI/4),j("steel",new i.CylinderGeometry(f,f*1.04,p-o,ce,1),O,(p+o)/2,k),j("steel",new i.CylinderGeometry(f*1.35,f*1.35,.05,ce,1),O,o+.07,k),j("steel",new i.CylinderGeometry(f*1.3,f*1.3,.035,ce,1),O,p-.02,k),j("steel",new i.SphereGeometry(f*1.15,ce,t?8:4,0,Math.PI*2,0,Math.PI/2),O,p,k);for(let Se=0;Se<4;Se++){let Ue=o+h[Se],B=F*.075,we=K*.075,Q=Math.atan2(F,K);j("steel",new i.CylinderGeometry(.016,.016,.16,8,1),O+B,Ue,k+we,Q,Math.PI/2,0),t&&j("steel",new i.TorusGeometry(.03,.007,6,14),O+F*.16,Ue,k+K*.16,Q+Math.PI/2,0,0),j("steel",new i.CylinderGeometry(.026,.026,.022,6,1),O+F*.05,Ue,k+K*.05,Q,Math.PI/2,0)}let H=Math.atan2(F,K),Ae=o+.25,ae=p-.07,de=ae-Ae,Le=F*(c-.06),Ee=K*(c-.06),Ie=3,Pe=de/Ie;for(let Se=0;Se<Ie;Se++){let Ue=Ae+Pe*(Se+.5);j(N,J(.34,Pe+.02,.25,.1,t?3:1),Le,Ue,Ee,H),Se>0&&j("trim",J(.335,.008,.24,.003,1),Le,Ae+Pe*Se,Ee,H)}for(let Se of[Ae+.006,ae-.006])j("trim",J(.28,.007,.2,.003,1),Le,Se,Ee,H)}let ie=(F,K)=>K*(1-Math.pow(2*F-1,2)),oe=t?40:14,Me=t?8:5,_e=E?[]:[{a:[-l,-l],b:[l,-l]},{a:[l,-l],b:[l,l]},{a:[l,l],b:[-l,l]},{a:[-l,l],b:[-l,-l]}],P=["ropeBlack","ropeBlack","ropeBlack","ropeGreen"],S={};for(let F of _e)for(let K=0;K<4;K++){let N=o+h[K],O=.034-K*.006,k=[],H=14;for(let de=0;de<=H;de++){let Le=de/H;k.push(new i.Vector3(F.a[0]+(F.b[0]-F.a[0])*Le,N-ie(Le,O),F.a[1]+(F.b[1]-F.a[1])*Le))}let Ae=new i.CatmullRomCurve3(k),ae=new i.TubeGeometry(Ae,oe,u,Me,!1);ue[P[K]].push(ae)}for(let F of _e){let K=F.b[0]-F.a[0],N=F.b[1]-F.a[1],O=Math.hypot(K,N),k=K/O,H=N/O,Ae=Math.atan2(k,H);for(let ae=0;ae<4;ae++){let de=o+h[ae],Le=(F===_e[0],0);for(let Ee of[0,1]){let Ie=Ee?F.b[0]:F.a[0],Pe=Ee?F.b[1]:F.a[1],Se=Ee?-1:1,Ue=.3,B=Ie+k*Se*Ue/2,we=Pe+H*Se*Ue/2,Q=Math.sign(Ie),he=Math.sign(Pe),De=ye.find(Re=>Re[0]===Q&&Re[1]===he)[2],le=t?new i.CapsuleGeometry(.05,Ue-.1,2,12):new i.CylinderGeometry(.05,.05,Ue,7,1);j(De,le,B,de-.002,we,Ae,Math.PI/2,0)}}}for(let F of _e){let K=F.b[0]-F.a[0],N=F.b[1]-F.a[1],O=Math.hypot(K,N),k=K/O,H=N/O,Ae=Math.atan2(k,H);for(let ae of[1/3,2/3]){let de=F.a[0]+K*ae,Le=F.a[1]+N*ae,Ee=o+h[3]-ie(ae,.034-3*.006)+.045,Ie=o+h[0]-ie(ae,.034)-.045;j("padBlack",J(.045,Ee-Ie,.014,.005,1),de,(Ee+Ie)/2,Le,Ae);for(let Pe=0;Pe<4;Pe++){let Se=o+h[Pe]-ie(ae,.034-Pe*.006);j("padBlack",new i.CylinderGeometry(u*1.45,u*1.45,.05,t?10:6,1),de,Se,Le,Ae,Math.PI/2,0)}}}if(t)for(let[F,K]of[[1,-1],[-1,1]]){let N=F*(a+.3),O=K*1.95;j("padBlack",J(.6,.45,.9,.02,1),N,.225,O,0),j("padBlack",J(.34,.22,.9,.02,1),N+F*.47,.11,O,0),j("trim",J(.02,.02,.9,.005,1),N-F*.3,.44,O,0),j("trim",J(.02,.02,.9,.005,1),N+F*.3,.21,O,0)}let G={canvas:A,apron:M,trim:y,steel:D,padBlack:z,padGreen:ee,padWhite:q,ropeBlack:Y,ropeGreen:$};for(let F of Object.keys(ue)){if(!ue[F].length)continue;let K=ue[F].map(k=>{for(let H of Object.keys(k.attributes))["position","normal","uv"].includes(H)||k.deleteAttribute(H);return k.index?k.toNonIndexed():k}),N=lt(K,!1),O=new i.Mesh(N,G[F]);O.name="ring_"+F,O.castShadow=F!=="canvas",O.receiveShadow=!0,F==="canvas"&&(O.castShadow=!0),n.add(O)}if(E){let F=(O,k,H=0,Ae={})=>new i.MeshStandardMaterial({color:O,roughness:k,metalness:H,side:i.DoubleSide,...Ae});for(let O of[z,ee,q])O.side=i.DoubleSide;y.emissiveIntensity=.9;let K=W(1661962,.75);K.side=i.DoubleSide;let N={palo:F(1513499,.42,.7),acciaio:F(11975357,.3,1),nastro:F(1381655,.72),cordaNera:F(1776413,.58),cordaVerde:F(1601036,.7),padNero:z,padVerde:K,padBianco:K};E.updateMatrixWorld(!0),E.traverse(O=>{if(!O.isMesh)return;let k=new i.Mesh(O.geometry,N[O.material.name]||N.nastro);k.applyMatrix4(O.matrixWorld),k.name="ring_"+O.material.name,k.castShadow=k.receiveShadow=!0,n.add(k)})}return n}var _d={};function yd(i,e={}){let t=(e.lod||"high")!=="low",n=3800852,s=e.model||null,r=1.206,a=.182,o=s?.83:.75,c=2.9,l=new i.Group;l.name="sacco";let h=new i.Group;h.position.set(0,c,0),l.add(h);let u=new i.Group;u.position.set(0,-c,0),h.add(u);let f=91,p=()=>(f=f*16807%2147483647)/2147483647,g=(N,O)=>{let k=document.createElement("canvas");return k.width=N,k.height=O,k},b=(N,O)=>{let k=new i.CanvasTexture(N);return O&&(k.colorSpace=i.SRGBColorSpace),k.anisotropy=8,k.wrapS=i.RepeatWrapping,k},m=(N,O,k,H)=>{let Ae=g(256,256),ae=Ae.getContext("2d"),de=ae.createImageData(256,256),Le=de.data;for(let Ee=0;Ee<Le.length;Ee+=4){let Ie=p()<.5?0:255;Le[Ee]=Le[Ee+1]=Le[Ee+2]=Ie,Le[Ee+3]=Math.floor(p()*H*2.2)}ae.putImageData(de,0,0),N.fillStyle=N.createPattern(Ae,"repeat"),N.fillRect(0,0,O,k)},d=N=>(1-N/r)*1024,_='900 100px Anton, Impact, "Arial Narrow", "Roboto Condensed", sans-serif';function v(){let k=g(1024,1024),H=k.getContext("2d");H.fillStyle="#0d0d0e",H.fillRect(0,0,1024,1024);for(let le=0;le<2;le++){let Re=H.createRadialGradient(1024*(.25+.5*le),d(.82),10,1024*(.25+.5*le),d(.82),240);Re.addColorStop(0,"rgba(120,120,125,0.10)"),Re.addColorStop(1,"rgba(120,120,125,0)"),H.fillStyle=Re,H.fillRect(0,0,1024,1024)}let Ae=d(.78),ae=d(.55),de=H.createLinearGradient(0,Ae,0,ae);de.addColorStop(0,"#2c7c1b"),de.addColorStop(.5,"#34901f"),de.addColorStop(1,"#27701a"),H.fillStyle=de,H.fillRect(0,Ae,1024,ae-Ae);for(let le of[1024*.25,1024*.75])H.save(),H.translate(le,(Ae+ae)/2+4),H.scale(s?.4:.46,1),H.font="900 "+(s?118:82)+'px Anton, Impact, "Arial Narrow", "Roboto Condensed", sans-serif',H.textAlign="center",H.textBaseline="middle",H.fillStyle="rgba(8,10,8,0.92)",H.letterSpacing="4px",H.fillText("MEDUSA GYM",0,0),H.restore();H.fillStyle="#2f8a1d",H.fillRect(0,d(.115),1024,14),H.fillRect(0,d(1.03),1024,14);let Le=(le,Re,ze)=>{H.strokeStyle=Re,H.lineWidth=3,H.setLineDash(ze),H.beginPath(),H.moveTo(0,le),H.lineTo(1024,le),H.stroke(),H.setLineDash([])};Le(Ae-8,"rgba(10,10,10,0.9)",[9,7]),Le(ae+8,"rgba(10,10,10,0.9)",[9,7]);for(let le of[.135,.095,1.05,1.01])Le(d(le),"rgba(150,160,150,0.55)",[8,6]);Le(d(.5),"rgba(110,115,110,0.5)",[8,6]),Le(d(.83),"rgba(110,115,110,0.5)",[8,6]);for(let le of[0,1024*.5,1024]){H.fillStyle="#050505",H.fillRect(le-3,0,6,1024),H.strokeStyle="rgba(150,160,150,0.6)",H.lineWidth=3,H.setLineDash([9,7]);for(let Re of[-14,14])H.beginPath(),H.moveTo(le+Re,0),H.lineTo(le+Re,1024),H.stroke();H.setLineDash([])}H.lineCap="round";for(let le=0;le<70;le++){let Re=p()<.7?d(.95+p()*.22):d(0+p()*.3),ze=p()*1024,$e=40+p()*220;H.strokeStyle=`rgba(0,0,0,${.35+p()*.3})`,H.lineWidth=1+p()*2,H.beginPath(),H.moveTo(ze,Re),H.quadraticCurveTo(ze+$e/2,Re+(p()-.5)*12,ze+$e,Re+(p()-.5)*6),H.stroke(),H.strokeStyle=`rgba(200,205,205,${.04+p()*.05})`,H.beginPath(),H.moveTo(ze,Re+2),H.lineTo(ze+$e,Re+2),H.stroke()}for(let le=0;le<90;le++){let Re=p()*1024,ze=d(.35+p()*.65),$e=8+p()*50,Je=(p()-.5)*1.2+Math.PI/2;H.strokeStyle=`rgba(210,215,215,${.03+p()*.06})`,H.lineWidth=1+p()*1.5,H.beginPath(),H.moveTo(Re,ze),H.lineTo(Re+Math.cos(Je)*$e,ze+Math.sin(Je)*$e),H.stroke()}for(let le=0;le<220;le++)H.fillStyle=`rgba(10,14,10,${.25+p()*.5})`,H.fillRect(p()*1024,Ae+p()*(ae-Ae),1+p()*7,1+p()*3);for(let le=0;le<160;le++)H.fillStyle=`rgba(150,190,140,${.05+p()*.1})`,H.fillRect(p()*1024,Ae+p()*(ae-Ae),3+p()*25,1+p()*2);for(let le=0;le<900;le++){H.fillStyle=`rgba(0,30,0,${.05+p()*.14})`;let Re=.6+p()*1.8;H.beginPath(),H.arc(p()*1024,Ae+p()*(ae-Ae),Re,0,6.28),H.fill()}for(let le=0;le<40;le++){let Re=p()*1024,ze=Ae+p()*(ae-Ae),$e=10+p()*50;H.strokeStyle=`rgba(0,40,0,${.08+p()*.15})`,H.lineWidth=1+p()*2,H.beginPath(),H.moveTo(Re,ze),H.lineTo(Re+(p()-.5)*$e,ze+(p()-.5)*$e),H.stroke()}m(H,1024,1024,7);let Ee=b(k,!0),Ie=g(1024,1024),Pe=Ie.getContext("2d");Pe.fillStyle="#808080",Pe.fillRect(0,0,1024,1024);let Se=g(256,256),Ue=Se.getContext("2d"),B=Ue.createImageData(256,256);for(let le=0;le<B.data.length;le+=4){let Re=90+p()*90;B.data[le]=B.data[le+1]=B.data[le+2]=Re,B.data[le+3]=255}Ue.putImageData(B,0,0),Pe.globalAlpha=.85,Pe.imageSmoothingEnabled=!0,Pe.drawImage(Se,0,0,1024,1024),Pe.globalAlpha=1,m(Pe,1024,1024,40),Pe.fillStyle="rgba(200,200,200,0.35)",Pe.fillRect(0,Ae,1024,ae-Ae),Pe.fillStyle="#404040",Pe.fillRect(0,Ae-3,1024,5),Pe.fillRect(0,ae-2,1024,5);for(let le of[0,1024*.5,1024])Pe.fillStyle="#1c1c1c",Pe.fillRect(le-5,0,10,1024);Pe.strokeStyle="#303030",Pe.lineWidth=3,Pe.setLineDash([9,7]);for(let le of[0,1024*.5,1024])for(let Re of[-14,14])Pe.beginPath(),Pe.moveTo(le+Re,0),Pe.lineTo(le+Re,1024),Pe.stroke();for(let le of[.135,.095,1.05,1.01])Pe.beginPath(),Pe.moveTo(0,d(le)),Pe.lineTo(1024,d(le)),Pe.stroke();Pe.setLineDash([]),Pe.lineCap="round";for(let le=0;le<80;le++){let Re=p()<.7?d(.95+p()*.22):d(p()*.3),ze=p()*1024,$e=40+p()*220;Pe.strokeStyle=`rgba(20,20,20,${.5+p()*.4})`,Pe.lineWidth=2+p()*3,Pe.beginPath(),Pe.moveTo(ze,Re),Pe.quadraticCurveTo(ze+$e/2,Re+(p()-.5)*12,ze+$e,Re+(p()-.5)*6),Pe.stroke()}let we=b(Ie,!1),Q=g(512,512),he=Q.getContext("2d");he.fillStyle="#9a9a9a",he.fillRect(0,0,512,512);for(let le=0;le<2;le++){let Re=he.createRadialGradient(512*(.25+.5*le),512*(1-.82/r),5,512*(.25+.5*le),512*(1-.82/r),150);Re.addColorStop(0,"#585858"),Re.addColorStop(1,"rgba(154,154,154,0)"),he.fillStyle=Re,he.fillRect(0,0,512,512)}he.fillStyle="rgba(205,205,205,0.9)",he.fillRect(0,512*(1-.78/r),512,512*.23/r),he.fillRect(0,512*(1-.1155/r)-3,512,5),he.fillRect(0,512*(1-1.03/r)-3,512,5),m(he,512,512,36);let De=b(Q,!1);return{map:Ee,bump:we,rough:De}}function x(){let O=g(512,512),k=O.getContext("2d");k.fillStyle="#0c0c0d",k.fillRect(0,0,512,512),k.strokeStyle="rgba(160,170,160,0.65)",k.lineWidth=3,k.setLineDash([9,7]);for(let H of[.86,.74])k.beginPath(),k.arc(512/2,512/2,512/2*H,0,6.2832),k.stroke();return k.setLineDash([]),k.strokeStyle="rgba(0,0,0,0.9)",k.lineWidth=6,k.beginPath(),k.arc(512/2,512/2,512/2*.8,0,6.2832),k.stroke(),k.strokeStyle="#39ff14",k.lineWidth=6,k.beginPath(),k.arc(512/2,512/2,512/2*.64,0,6.2832),k.stroke(),m(k,512,512,7),b(O,!0)}let T=e.model?"modello":"codice",w=_d[T]||(_d[T]={...v(),cap:x()}),A=new i.MeshPhysicalMaterial({map:w.map,bumpMap:w.bump,bumpScale:2,roughnessMap:w.rough,roughness:.72,metalness:0,clearcoat:.28,clearcoatRoughness:.5,sheen:.4,sheenRoughness:.5,sheenColor:new i.Color(3159610)}),C=new i.MeshPhysicalMaterial({map:w.cap,bumpMap:w.bump,bumpScale:1.5,roughness:.6,metalness:0,clearcoat:.25,clearcoatRoughness:.5});C.bumpMap.repeat.set(.5,.5);let M=new i.MeshStandardMaterial({color:12172737,metalness:1,roughness:.32}),y=2.5;if(s){for(let Ae of[w.map,w.bump,w.rough])Ae.offset.x=-.25;let N=new i.MeshPhysicalMaterial({color:1052689,roughness:.62,metalness:0,clearcoat:.2,clearcoatRoughness:.5}),O=M.clone();O.side=i.DoubleSide;let k={corpo:A,cinghie:N,catene:O},H=0;s.updateMatrixWorld(!0),s.traverse(Ae=>{if(!Ae.isMesh)return;let ae=new i.Mesh(Ae.geometry,k[Ae.material.name]||N);ae.applyMatrix4(Ae.matrixWorld),ae.position.y+=o,ae.castShadow=ae.receiveShadow=!0,u.add(ae);let de=new i.Box3().setFromObject(ae);H=Math.max(H,de.max.y)}),y=H-.03}let D=[],I=(N,O)=>D.push(new i.Vector2(N,O));I(0,0),I(.06,0),I(.12,0);let R=.062,U=t?6:3;for(let N=1;N<=U;N++){let O=N/U*Math.PI/2;I(.12+R*Math.sin(O),R-R*Math.cos(O))}I(.1815,.3),I(.1822,.6),I(.1815,.9);let W=.05,z=1.155;for(let N=0;N<=U;N++){let O=N/U*Math.PI/2;I(.132+W*Math.cos(O),z+W*Math.sin(O))}I(.066,1.205),I(0,1.205);let ee=s?3:t?40:18,q=new i.LatheGeometry(D,ee);{let N=q.attributes.position,O=q.attributes.uv;for(let k=0;k<N.count;k++)O.setY(k,Math.min(1,Math.max(0,N.getY(k)/r)));for(let k=0;k<N.count;k++){let H=N.getY(k),Ae=N.getX(k),ae=N.getZ(k),de=Math.atan2(ae,Ae),Le=1+.004*Math.sin(de*2+H*5)+(H<.35?.006*Math.sin(H*9):0);N.setX(k,Ae*Le),N.setZ(k,ae*Le)}q.computeVertexNormals()}let Z=new i.Mesh(q,A);Z.position.y=o,Z.castShadow=Z.receiveShadow=!0,s||u.add(Z);let fe=[new i.Vector2(0,1.224),new i.Vector2(.09,1.224),new i.Vector2(.112,1.219),new i.Vector2(.125,1.209),new i.Vector2(.128,1.199),new i.Vector2(0,1.199)].reverse(),Ce=new i.LatheGeometry(fe,t?40:12);{let N=Ce.attributes.position,O=Ce.attributes.uv;for(let k=0;k<N.count;k++)O.setXY(k,N.getX(k)/.256+.5,N.getZ(k)/.256+.5)}let pe=[Ce],re=[],Y=[],$=(N,O)=>(N.applyMatrix4(O),N),ue=new i.Matrix4,X=new i.Quaternion,te=new i.Vector3,be=new i.Vector3(1,1,1),Te=new i.Euler,ge=(N,O,k,H=0,Ae=0,ae=0,de=1,Le=1,Ee=1)=>(Te.set(H,Ae,ae),X.setFromEuler(Te),new i.Matrix4().compose(te.set(N,O,k),X,be.set(de,Le,Ee))),j=o+1.224,J=[.785398,2.356194,3.926991,5.497787],E=.108;for(let N of J){let O=Math.sin(N),k=Math.cos(N);t&&pe.push($(new si(.06,.012,.06,2,.005),ge(O*E,1.224+.006,k*E,0,N,0)))}let ye=new i.TorusGeometry(.0155,.0055,t?4:3,t?6:5),ce=t?.037:.062,ie=(N,O,k,H=1.75)=>{let Ae=ye.clone(),ae=new i.Quaternion().setFromUnitVectors(new i.Vector3(0,1,0),O),de=new i.Quaternion().setFromAxisAngle(new i.Vector3(0,1,0),k?Math.PI/2:0),Le=new i.Matrix4().compose(N,ae.multiply(de),new i.Vector3(1,H,1));Ae.applyMatrix4(Le),Y.push(Ae)},oe=new i.Vector3(0,y-.01,0);for(let N of s?[]:J){let O=Math.sin(N),k=Math.cos(N),H=new i.Vector3(O*E,j+.016,k*E),ae=new i.Vector3(O*.018,y-.012,k*.018).clone().sub(H),de=ae.length();ae.normalize();let Le=Math.round(de/ce);for(let Ee=0;Ee<Le;Ee++)ie(H.clone().addScaledVector(ae,(Ee+.5)*(de/Le)),ae,Ee%2);t&&Y.push($(new i.TorusGeometry(.018,.0045,5,10),ge(O*E,j+.012,k*E,0,N+Math.PI/2,0)))}s||Y.push($(new i.TorusGeometry(.036,.008,6,16),ge(0,y,0,Math.PI/2,0,0,1,1,1))),Y.push($(new i.CylinderGeometry(.019,.019,.07,t?12:6,1),ge(0,y+.062,0))),Y.push($(new i.CylinderGeometry(.03,.03,.012,t?14:7,1),ge(0,y+.045,0))),Y.push($(new i.CylinderGeometry(.03,.03,.012,t?14:7,1),ge(0,y+.08,0))),Y.push($(new i.SphereGeometry(.024,t?10:6,t?6:3),ge(0,y+.115,0))),Y.push($(new i.TorusGeometry(.03,.008,t?6:3,t?14:7),ge(0,y+.158,0,0,0,0,.8,1.15,1)));{let N=y+.19,O=c-.05,k=new i.Vector3(0,1,0),H=Math.round((O-N)/.038);for(let Ae=0;Ae<H;Ae++)ie(new i.Vector3(0,N+(Ae+.5)*((O-N)/H),0),k,Ae%2,1.7)}let Me=[];Me.push($(new i.CylinderGeometry(.095,.095,.02,t?20:8,1),ge(0,c-.01,0))),Me.push($(new i.TorusGeometry(.028,.0075,t?6:3,t?14:7),ge(0,c-.038,0,0,0,0)));for(let N=0;N<(t?4:0);N++){let O=N*Math.PI/2+Math.PI/4;Me.push($(new i.CylinderGeometry(.01,.01,.012,6,1),ge(Math.sin(O)*.065,c-.026,Math.cos(O)*.065)))}Me.push($(new si(.22,.012,.22,2,.004),ge(0,c-.006+0,0)));let _e=N=>N.map(O=>{for(let k of Object.keys(O.attributes))["position","normal","uv"].includes(k)||O.deleteAttribute(k);return O.index?O.toNonIndexed():O}),P=new i.Mesh(lt(_e(pe),!1),C);P.position.y=o,P.castShadow=P.receiveShadow=!0,s||u.add(P);let S=new i.Mesh(lt(_e(Y),!1),M);S.castShadow=S.receiveShadow=!0,u.add(S);let G=new i.Mesh(lt(_e(Me),!1),M);G.castShadow=G.receiveShadow=!0,l.add(G);let F=1.5*Math.PI/180,K=2*Math.PI/Math.sqrt(9.81/2.2);return l.userData.update=N=>{let O=2*Math.PI/K;h.rotation.z=F*Math.sin(O*N),h.rotation.x=F*.35*Math.sin(O*N*1.03+1.2)},l.userData.update(0),l}function Md(i,e=512,t=7,n=!0){let s=document.createElement("canvas");s.width=s.height=e;let r=s.getContext("2d"),a=r.createImageData(e,e),o=t,c=()=>(o=o*16807%2147483647,o/2147483647);for(let h=0;h<e*e;h++){let u=128+(c()-.5)*70;c()>.985&&(u+=(c()-.5)*120),u=Math.max(0,Math.min(255,u)),a.data[h*4]=a.data[h*4+1]=a.data[h*4+2]=u,a.data[h*4+3]=255}r.putImageData(a,0,0),r.globalAlpha=.18;for(let h=0;n&&h<60;h++){let u=c()*e,f=c()*e,p=20+c()*70,g=r.createRadialGradient(u,f,0,u,f,p),b=c()>.5?255:0;g.addColorStop(0,`rgb(${b},${b},${b})`),g.addColorStop(1,"rgba(128,128,128,0)"),r.fillStyle=g,r.fillRect(u-p,f-p,p*2,p*2)}let l=new i.CanvasTexture(s);return l.wrapS=l.wrapT=i.RepeatWrapping,l.anisotropy=4,l}function Yv(i,e,t,n,s){let r=[],a=[],o=[],c=[],l=new i.Vector3(0,0,1);for(let u=0;u<=n;u++){let f=u/n,p=e.getPointAt(f),g=e.getTangentAt(f).normalize(),b=new i.Vector3().crossVectors(l,g).normalize(),m=t(f);for(let d=0;d<=s;d++){let _=d/s*Math.PI*2,v=Math.cos(_),x=Math.sin(_),T=new i.Vector3().addScaledVector(b,v).addScaledVector(l,x);r.push(p.x+T.x*m,p.y+T.y*m,p.z+T.z*m),a.push(T.x,T.y,T.z),o.push(d/s*2,f*4)}}for(let u=0;u<n;u++)for(let f=0;f<s;f++){let p=u*(s+1)+f,g=p+s+1;c.push(p,g,p+1,g,g+1,p+1)}let h=new i.BufferGeometry;return h.setAttribute("position",new i.Float32BufferAttribute(r,3)),h.setAttribute("normal",new i.Float32BufferAttribute(a,3)),h.setAttribute("uv",new i.Float32BufferAttribute(o,2)),h.setIndex(c),h}function Sd(i,e={}){let t=e.color??3800852,n=new i.Group,r=new i.SplineCurve([new i.Vector2(0,0),new i.Vector2(.066,0),new i.Vector2(.0775,.0026),new i.Vector2(.0895,.015),new i.Vector2(.0985,.04),new i.Vector2(.1035,.072),new i.Vector2(.1035,.1),new i.Vector2(.0955,.13),new i.Vector2(.0785,.153),new i.Vector2(.056,.165),new i.Vector2(.03,.169),new i.Vector2(0,.17)]).getSpacedPoints(30);r[0].set(0,0);let a=56,o=new i.LatheGeometry(r,a);{let R=o.attributes.uv,U=o.attributes.position;for(let W=0;W<R.count;W++)U.getY(W)>.125?R.setXY(W,U.getX(W)*9,U.getZ(W)*9):R.setXY(W,R.getX(W)*6,R.getY(W)*2)}let c=.0575,l=.2625,u=[[-.052,.135],[-.0555,.17],[-.0585,.21],[-.0555,.2405],[-.04,.2575],[-.02,.2615],[0,.2625]].map(([R,U])=>new i.Vector3(R,U,0)).slice(0,6).concat([new i.Vector3(0,l,0)]),f=u.slice(0,6).reverse().map(R=>new i.Vector3(-R.x,R.y,0)),p=new i.CatmullRomCurve3([...u,...f],!1,"centripetal"),g=.0172,b=(R,U,W)=>{let z=Math.max(0,Math.min(1,(W-R)/(U-R)));return z*z*(3-2*z)},d=Yv(i,p,R=>{let U=Math.min(R,1-R);return g+.0105*(1-b(0,.2,U))},44,14),_=lt([o,d],!1),v=Md(i),x=Md(i,512,11,!1);x.repeat.set(3,3);let T=new i.MeshStandardMaterial({color:1908256,metalness:.4,roughness:.85,roughnessMap:v,bumpMap:x,bumpScale:.12,envMapIntensity:.85}),w=new i.Mesh(_,T);w.castShadow=w.receiveShadow=!0,n.add(w);let A=r.filter(R=>R.y>.04&&R.y<.088).map(R=>new i.Vector2(R.x+7e-4,R.y)),C=document.createElement("canvas");C.width=1024,C.height=96;{let R=C.getContext("2d");R.fillStyle="#fff",R.fillRect(0,0,1024,96),R.fillStyle="#0a0a0a",R.font='800 70px Impact, "Arial Black", sans-serif',R.textAlign="center",R.textBaseline="middle",R.fillText("24 KG",512,52)}let M=new i.CanvasTexture(C);M.colorSpace=i.SRGBColorSpace,M.anisotropy=4;let y=new i.MeshStandardMaterial({color:t,map:M,roughness:.55,metalness:.05,emissive:t,emissiveMap:M,emissiveIntensity:.12}),D=new i.LatheGeometry(A,a),I=new i.Mesh(D,y);return I.rotation.y=Math.PI,I.castShadow=!1,I.receiveShadow=!0,n.add(I),n}function wd(i,e={}){let t=new i.Group,n=1.9,s=3,r=.5,a=.104,o=.016,c=document.createElement("canvas");c.width=1024,c.height=256;{let M=c.getContext("2d"),y=M.createImageData(1024,256),D=4242,I=()=>(D=D*16807%2147483647,D/2147483647),R=Array.from({length:12},()=>I()*6.283);for(let U=0;U<256;U++)for(let W=0;W<1024;W++){let z=W/1024,ee=U/256,q=Math.sin(z*6.283*2+R[0]+ee*3)*.012+Math.sin(z*6.283*5+R[1]+ee*7)*.004,Z=Math.sin((ee+q)*6.283*38+R[2])*.5+.5,fe=Math.sin((ee+q*1.7)*6.283*97+R[3]+Math.sin(z*6.283*3)*2)*.5+.5,Ce=(I()-.5)*.07,pe=Math.floor(ee*5),re=ee*5%1,Y=Math.exp(-Math.pow((re-0)*5*9,2))*.35+Math.exp(-Math.pow((1-re)*5*9,2))*.35,$=(Math.sin(pe*12.9898)*.5+.5)*.08,ue=.8-Z*.3-fe*.14*Z+Ce*1.4+$-Y*.65,X=(U*1024+W)*4;y.data[X]=Math.min(255,232*ue+6),y.data[X+1]=Math.min(255,168*ue+4),y.data[X+2]=Math.min(255,104*ue+2),y.data[X+3]=255}M.putImageData(y,0,0)}let l=new i.CanvasTexture(c);l.colorSpace=i.SRGBColorSpace,l.wrapS=l.wrapT=i.RepeatWrapping,l.anisotropy=8;let h=new i.CanvasTexture(c);h.wrapS=h.wrapT=i.RepeatWrapping,h.anisotropy=4;let u=document.createElement("canvas");u.width=u.height=128;{let M=u.getContext("2d"),y=M.createImageData(128,128);for(let D=0;D<128;D++)for(let I=0;I<128;I++){let R=I/128,U=D/128,W=Math.abs(Math.sin(R*6.283*8)),z=Math.sin((U*16+Math.floor(R*8)%2*.5)*6.283)*.5+.5,ee=.55+W*.3+z*.15,q=Math.min(255,ee*255),Z=(D*128+I)*4;y.data[Z]=y.data[Z+1]=y.data[Z+2]=q,y.data[Z+3]=255}M.putImageData(y,0,0)}let f=new i.CanvasTexture(u);f.colorSpace=i.SRGBColorSpace,f.wrapS=f.wrapT=i.RepeatWrapping,f.anisotropy=8,f.offset.set(0,0);let p=(M,y,D,I,R)=>{let U=M.index?M.toNonIndexed():M,W=U.attributes.position.count,z=new Float32Array(W*3),ee=new Float32Array(W*2);for(let q=0;q<W;q++)z[q*3]=y[0],z[q*3+1]=y[1],z[q*3+2]=y[2],ee[q*2]=D,ee[q*2+1]=I;return U.setAttribute("color",new i.BufferAttribute(z,3)),U.setAttribute("aMR",new i.BufferAttribute(ee,2)),(R==="flat"||!U.attributes.uv)&&U.setAttribute("uv",new i.BufferAttribute(new Float32Array(W*2),2)),U};function g(M,y,D){let I=[],R=[],U=[],W=[],z=new i.Vector3(1,0,0),ee=0;for(let fe=0;fe<M.length;fe++){fe&&(ee+=M[fe].distanceTo(M[fe-1]));let Ce=M[Math.max(0,fe-1)],pe=M[Math.min(M.length-1,fe+1)],re=new i.Vector3().subVectors(pe,Ce).normalize(),Y=new i.Vector3().crossVectors(z,re).normalize(),$=M[fe],ue=y/2,X=D/2,te=ee/.004,be=(J,E,ye,ce)=>{let ie=$.clone().addScaledVector(z,J).addScaledVector(Y,E);I.push(ie.x,ie.y,ie.z),R.push(ye.x,ye.y,ye.z),U.push(ce,te)},Te=Y.clone().negate(),ge=z.clone(),j=z.clone().negate();be(-ue,X,Y,0),be(ue,X,Y,y/.004),be(-ue,-X,Te,0),be(ue,-X,Te,y/.004),be(-ue,X,j,0),be(-ue,-X,j,0),be(ue,X,ge,0),be(ue,-X,ge,0)}let q=[[0,1],[3,2],[4,5],[7,6]];for(let fe=0;fe<M.length-1;fe++){let Ce=fe*8,pe=(fe+1)*8;for(let[re,Y]of q)W.push(Ce+re,Ce+Y,pe+re,Ce+Y,pe+Y,pe+re)}let Z=new i.BufferGeometry;return Z.setAttribute("position",new i.Float32BufferAttribute(I,3)),Z.setAttribute("normal",new i.Float32BufferAttribute(R,3)),Z.setAttribute("uv",new i.Float32BufferAttribute(U,2)),Z.setIndex(W),Z.computeBoundingBox(),b(Z)}function b(M){let y=M.attributes.position,D=M.attributes.normal,I=M.index.array,R=new i.Vector3,U=new i.Vector3,W=new i.Vector3,z=new i.Vector3;for(let ee=0;ee<I.length;ee+=3){R.fromBufferAttribute(y,I[ee]),U.fromBufferAttribute(y,I[ee+1]),W.fromBufferAttribute(y,I[ee+2]),z.crossVectors(U.sub(R),W.sub(R));let q=new i.Vector3().fromBufferAttribute(D,I[ee]);if(z.dot(q)<0){let Z=I[ee+1];I[ee+1]=I[ee+2],I[ee+2]=Z}}return M}let m=new i.MeshStandardMaterial({map:l,roughness:.58,roughnessMap:h,bumpMap:h,bumpScale:.35,metalness:0,envMapIntensity:.8}),d=new i.MeshStandardMaterial({color:16777215,vertexColors:!0,map:f,bumpMap:f,bumpScale:.8,roughness:.8,metalness:0,envMapIntensity:1.2});d.onBeforeCompile=M=>{M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aMR; varying vec2 vMR;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMR = aMR;`),M.fragmentShader=M.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vMR;`).replace("#include <roughnessmap_fragment>","float roughnessFactor = vMR.y;").replace("#include <metalnessmap_fragment>","float metalnessFactor = vMR.x;")},d.customProgramCacheKey=()=>"anelli_hw_v1";let _=[.045,.045,.05],v=[.86,.87,.9],x=[.55,.56,.6];function T(M,y){let D=new i.Group;D.position.set(M,s,0);let I=n-s,R=new i.TorusGeometry(a,o,12,48);R.translate(0,I,0);let U=new i.Mesh(R,m);U.castShadow=U.receiveShadow=!0,D.add(U);let W=[],z=I+a,ee=.04/a,q=new i.TorusGeometry(a,o+.0028,10,4,ee);q.rotateZ(Math.PI/2-ee/2),q.translate(0,I,0);{let E=q.attributes.uv;for(let ye=0;ye<E.count;ye++)E.setXY(ye,E.getX(ye)*10,E.getY(ye)*6)}W.push(p(q,_,0,.85,"uv"));let Z=I+.46,fe=[.0172,.0168,.0148,.0098,.0056,.0038,.0034],Ce=[0,.035,.085,.15,.25,.36,Z-z];for(let E of[1,-1]){let ye=[];for(let ce=0;ce<fe.length;ce++)ye.push(new i.Vector3(0,z+Ce[ce],E*fe[ce]*1));ye.push(new i.Vector3(0,Z+.25,E*.0034)),ye.push(new i.Vector3(0,-.02,E*.0034)),W.push(p(g(ye,.038,.0032),_,0,.85,"uv"))}let pe=new i.BoxGeometry(.04,.05,.011);pe.translate(0,-.03,0),W.push(p(pe,_,0,.9,"flat"));let re=new i.CylinderGeometry(.0055,.0055,.056,14);re.rotateZ(Math.PI/2),re.translate(0,-.004,0),W.push(p(re,v,1,.25,"flat"));let Y=new i.TorusGeometry(.02,.0036,8,24);Y.rotateY(Math.PI/2),Y.translate(0,.016,0),W.push(p(Y,v,1,.25,"flat"));{let E=g([new i.Vector3(0,Z+.02,-.0105),new i.Vector3(0,Z-.08,-.0105),new i.Vector3(0,Z-.17,-.0098)],.036,.0028);W.push(p(E,_,0,.85,"uv"))}let $=new i.Shape,ue=.025,X=.04;$.moveTo(-ue+.006,-X),$.lineTo(ue-.006,-X),$.quadraticCurveTo(ue,-X,ue,-X+.006),$.lineTo(ue,X-.006),$.quadraticCurveTo(ue,X,ue-.006,X),$.lineTo(-ue+.006,X),$.quadraticCurveTo(-ue,X,-ue,X-.006),$.lineTo(-ue,-X+.006),$.quadraticCurveTo(-ue,-X,-ue+.006,-X);for(let E of[-.022,.012]){let ye=new i.Path;ye.moveTo(-.0185,E-.0045),ye.lineTo(.0185,E-.0045),ye.lineTo(.0185,E+.0045),ye.lineTo(-.0185,E+.0045),ye.closePath(),$.holes.push(ye)}let te=new i.ExtrudeGeometry($,{depth:.0022,bevelEnabled:!0,bevelThickness:8e-4,bevelSize:8e-4,bevelSegments:1});te.translate(0,Z,.0062),W.push(p(te,v,1,.3,"flat"));let be=new i.CylinderGeometry(.0042,.0042,.05,12);be.rotateZ(Math.PI/2),be.translate(0,Z+.0375,.0105),W.push(p(be,x,1,.35,"flat"));let Te=new i.CylinderGeometry(.0075,.0075,.04,16);Te.rotateZ(Math.PI/2),Te.translate(0,Z-.004,.011),W.push(p(Te,x,1,.4,"flat"));let ge=new i.Shape;ge.moveTo(-.017,0),ge.lineTo(.017,0),ge.lineTo(.0145,.052),ge.quadraticCurveTo(0,.058,-.0145,.052),ge.closePath();let j=new i.ExtrudeGeometry(ge,{depth:.0022,bevelEnabled:!0,bevelThickness:7e-4,bevelSize:7e-4,bevelSegments:1});j.rotateX(-.28),j.translate(0,Z+.034,.0118),W.push(p(j,v,1,.3,"flat"));let J=new i.Mesh(lt(W,!1),d);return J.castShadow=!0,J.receiveShadow=!0,D.add(J),D.userData.seed=y,D}let w=T(-r/2,0),A=T(r/2,2.3);t.add(w,A);let C=M=>{for(let y of[w,A]){let D=y.userData.seed;y.rotation.x=.01*Math.sin(M*.71+D)+.0035*Math.sin(M*1.63+D*2.1),y.rotation.z=.012*Math.sin(M*.53+D*1.7)+.003*Math.sin(M*1.21+D),y.rotation.y=.06*Math.sin(M*.37+D*.6)}};return t.userData.update=C,C(0),t}function Ad(i,e={}){let t=e.color??3800852,n=new i.Group,s=(C,M)=>{let y=document.createElement("canvas");y.width=y.height=C;let D=y.getContext("2d"),I=D.createImageData(C,C);for(let U=0;U<C;U++)for(let W=0;W<C;W++){let z=Math.max(0,Math.min(255,M(W/C,U/C))),ee=(U*C+W)*4;I.data[ee]=I.data[ee+1]=I.data[ee+2]=z,I.data[ee+3]=255}D.putImageData(I,0,0);let R=new i.CanvasTexture(y);return R.wrapS=R.wrapT=i.RepeatWrapping,R.anisotropy=8,R},r=C=>1-Math.abs(2*(C-Math.floor(C))-1),a=s(128,(C,M)=>{let y=r(C+M),D=r(C-M);return 255*Math.pow(Math.min(y,D)*1,.8)*.9+12}),o=99,c=()=>(o=o*16807%2147483647,o/2147483647),l=s(256,()=>128+(c()-.5)*90+(c()>.992?60:0));l.repeat.set(14,14);let h=[],u=[],f=[],p=(C,M=!1)=>{let y=C.index?C.toNonIndexed():C;if(M){let D=y.attributes.position.count;y.setAttribute("uv",new i.Float32BufferAttribute(new Float32Array(D*2),2))}return y},g=.074,b=.074,m=.068,d=.0065;function _(C){let M=(R,U,W)=>{let z=p(U,W);z.applyMatrix4(C),R.push(z)},y=new i.Shape;for(let R=0;R<6;R++){let U=R*Math.PI/3,W=g*Math.cos(U),z=g*Math.sin(U);R?y.lineTo(W,z):y.moveTo(W,z)}y.closePath();let D=new i.ExtrudeGeometry(y,{depth:b-2*d,bevelEnabled:!0,bevelThickness:d,bevelSize:d,bevelSegments:3,steps:1});D.translate(0,0,d),D.rotateY(Math.PI/2);for(let R of[-1,1]){let U=D.clone();R<0&&(U.rotateY(Math.PI),U.translate(0,0,0)),U.translate(R>0?m:-m,0,0),M(u,U,!1);let W=R*(m+b),z=new i.TorusGeometry(.052,.0024,6,44);z.rotateY(Math.PI/2),z.translate(W+R*4e-4,0,0),M(f,z,!0);let ee=new i.CylinderGeometry(.036,.036,.0048,28);ee.rotateZ(Math.PI/2),ee.translate(W+R*6e-4,0,0),M(h,ee,!0);let q=new i.CylinderGeometry(.029,.029,.007,24);q.rotateZ(Math.PI/2),q.translate(R*(m-5e-4),0,0),M(h,q,!0);let Z=new i.CylinderGeometry(.0215,.0215,.011,20);Z.rotateZ(Math.PI/2),Z.translate(R*(m-.0125),0,0),M(h,Z,!0)}let I=new i.CylinderGeometry(.0165,.0165,2*m,28,1,!0);I.rotateZ(Math.PI/2);{let R=I.attributes.uv;for(let U=0;U<R.count;U++)R.setXY(U,R.getX(U)*35,R.getY(U)*46)}M(h,I,!1)}let v=g*Math.cos(Math.PI/6)+d*.87,x=(C,M,y)=>new i.Matrix4().compose(new i.Vector3(C,v,M),new i.Quaternion().setFromAxisAngle(new i.Vector3(0,1,0),y),new i.Vector3(1,1,1));_(x(-.02,-.165,.02)),_(x(.035,.175,.24));let T=(C,M,y=!0)=>{let D=lt(C,!1),I=new i.Mesh(D,M);return I.castShadow=y,I.receiveShadow=!0,n.add(I),I},w=T(h,new i.MeshStandardMaterial({color:15001320,metalness:1,roughness:.2,bumpMap:a,bumpScale:2.2,envMapIntensity:1.5}));T(u,new i.MeshStandardMaterial({color:855310,roughness:.86,metalness:0,bumpMap:l,bumpScale:.6,roughnessMap:l})),T(f,new i.MeshStandardMaterial({color:t,roughness:.45,metalness:0,emissive:t,emissiveIntensity:.15}),!1);let A=new i.Box3().setFromObject(n);return n.children.forEach(C=>C.position.y-=A.min.y),n}function Td(i,e={}){let t=e.gridOpacity??.35,n=new i.Color(e.color??3800852),s=new i.Group,r=512,a=document.createElement("canvas");a.width=a.height=r;let o=a.getContext("2d"),c=o.createImageData(r,r),l=12345,h=()=>(l=l*16807%2147483647,l/2147483647);for(let m=0;m<r*r;m++){let d=150+(h()-.5)*80;h()>.97&&(d=60+h()*40),c.data[m*4]=c.data[m*4+1]=c.data[m*4+2]=d,c.data[m*4+3]=255}o.putImageData(c,0,0);let u=new i.CanvasTexture(a);u.wrapS=u.wrapT=i.RepeatWrapping,u.anisotropy=8,u.repeat.set(60,60);let f=new i.MeshStandardMaterial({color:395015,roughness:.7,metalness:0,roughnessMap:u,envMapIntensity:.4}),p={uGridColor:{value:n},uGridOpacity:{value:t},uFadeNear:{value:7},uFadeFar:{value:30}};f.onBeforeCompile=m=>{Object.assign(m.uniforms,p),m.vertexShader=m.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vFloorPos;`).replace("#include <project_vertex>",`#include <project_vertex>
vFloorPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),m.fragmentShader=m.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vFloorPos;
uniform vec3 uGridColor; uniform float uGridOpacity; uniform float uFadeNear; uniform float uFadeFar;
// copertura anti-aliasata di una linea (larghezza W metri) su una griglia di passo 'step' metri.
// Filtro per-asse con fwidth: se la cella diventa < ~4 px la linea sfuma (niente moire' a incidenza radente).
vec2 gridCov(vec2 p, float step, float W) {
  vec2 x = p / step;
  vec2 fw = max(fwidth(x), vec2(1e-5));
  vec2 d = abs(fract(x - 0.5) - 0.5);                // distanza (in celle) dalla linea piu' vicina
  vec2 wc = vec2(W / step);
  vec2 hw = max(wc, fw) * 0.5;                        // larghezza minima = 1 pixel
  vec2 cov = clamp((hw + fw * 0.5 - d) / fw, 0.0, 1.0);
  vec2 fade = 1.0 - smoothstep(vec2(0.12), vec2(0.45), fw); // celle troppo piccole: via
  return cov * fade * clamp(wc / fw, vec2(0.35), vec2(1.0));
}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
{
  vec2 p = vFloorPos.xz;
  float r = length(p);
  float radial = 1.0 - smoothstep(uFadeNear, uFadeFar, r);
  radial *= radial;
  vec2 m5 = gridCov(p, 5.0, 0.026);
  vec2 m1 = gridCov(p, 1.0, 0.012);
  vec2 m25 = gridCov(p, 0.25, 0.005);
  float a = max(max(m25.x, m25.y) * 0.30, max(max(m1.x, m1.y) * 0.75, max(m5.x, m5.y) * 1.0));
  // piccolo alone attorno alle linee principali (glow di neon sul gomma)
  float glow = 0.0;
  { vec2 x = p; vec2 d = abs(fract(x - 0.5) - 0.5); vec2 fw = fwidth(x);
    vec2 gl = exp(-d * 38.0) * (1.0 - smoothstep(vec2(0.1), vec2(0.4), fw));
    glow = max(gl.x, gl.y) * 0.07; }
  float k = (a + glow) * radial * uGridOpacity;
  totalEmissiveRadiance += uGridColor * k * 0.85;
  diffuseColor.rgb = mix(diffuseColor.rgb, uGridColor * 0.15, clamp(k, 0.0, 1.0) * 0.5);
}`)},f.customProgramCacheKey=()=>"pavimento_grid_v1";let g=new i.PlaneGeometry(60,60,1,1);g.rotateX(-Math.PI/2);let b=new i.Mesh(g,f);return b.receiveShadow=!0,b.castShadow=!1,b.name="pavimento",s.add(b),s.userData.setGridOpacity=m=>{p.uGridOpacity.value=m},s}function Cd(i,{length:e=3,color:t=3800852,intensity:n=1}={}){let s=new i.Group,r=e,a=.0115,o=new i.Color(t),c=.062,l=.034,h=.004,u=new i.Shape;u.moveTo(-c/2,-l/2),u.lineTo(c/2,-l/2),u.lineTo(c/2,l/2),u.lineTo(c/2-h,l/2),u.lineTo(c/2-h,-l/2+h),u.lineTo(-c/2+h,-l/2+h),u.lineTo(-c/2+h,l/2),u.lineTo(-c/2,l/2),u.closePath();let f=new i.ExtrudeGeometry(u,{depth:r+.04,bevelEnabled:!1});f.translate(0,0,-(r+.04)/2),f.rotateY(Math.PI/2),f.rotateX(Math.PI/2);let p=[f],g=M=>{let y=new i.BoxGeometry(.012,c+.008,l+.004);return y.translate(M,0,0),y};p.push(g(-(r+.04)/2-.006),g((r+.04)/2+.006));for(let M of[-r*.32,r*.32]){let y=new i.BoxGeometry(.014,.02,.012);y.translate(M,0,-l/2+h+.006+0),p.push(y)}let b=lt(p.map(M=>{let y=M.index?M.toNonIndexed():M;return y.deleteAttribute("uv"),y}),!1),m=new i.Mesh(b,new i.MeshStandardMaterial({color:723981,roughness:.45,metalness:.6}));m.castShadow=!0,m.receiveShadow=!0,s.add(m);let d=new i.CapsuleGeometry(a,r-2*a,3,12);d.rotateZ(Math.PI/2),d.translate(0,0,.004);let _=new i.ShaderMaterial({uniforms:{uCol:{value:o},uInt:{value:n}},vertexShader:`varying vec3 vN; varying vec3 vV;
      void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 uCol; uniform float uInt; varying vec3 vN; varying vec3 vV;
      void main(){ float f = clamp(dot(normalize(vN), normalize(vV)), 0.0, 1.0);
        float core = pow(f, 2.2);
        vec3 c = mix(uCol * 1.15, mix(uCol, vec3(1.0), 0.78) * 1.5, core) * uInt;
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`,toneMapped:!1,fog:!1}),v=new i.Mesh(d,_);v.castShadow=!1,v.receiveShadow=!1,s.add(v);let x=r+1.4,T=1.3,w=new i.PlaneGeometry(x,T),A=new i.ShaderMaterial({uniforms:{uCol:{value:o},uInt:{value:n},uHalf:{value:r/2}},vertexShader:`varying vec2 vP;
      void main(){
        vec3 c = (modelMatrix * vec4(0.0,0.0,0.004,1.0)).xyz;
        vec3 ax = normalize((modelMatrix * vec4(1.0,0.0,0.0,0.0)).xyz);
        vec3 toCam = cameraPosition - c;
        vec3 side = cross(ax, toCam);
        float sl = length(side);
        side = sl < 1e-4 ? vec3(0.0,1.0,0.0) : side / sl;
        vec3 w = c + ax * position.x + side * position.y;
        vP = position.xy;
        gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
      }`,fragmentShader:`uniform vec3 uCol; uniform float uInt; uniform float uHalf; varying vec2 vP;
      void main(){
        float dx = max(abs(vP.x) - uHalf, 0.0);
        float d = length(vec2(dx, vP.y));
        float g = exp(-d * 7.5) * 0.55 + exp(-d * 2.6) * 0.28 + exp(-d * 18.0) * 0.5;
        // finestra: azzera ai bordi del piano
        vec2 e = abs(vP) / vec2(${(x/2).toFixed(3)}, ${(T/2).toFixed(3)});
        g *= (1.0 - smoothstep(0.55, 1.0, e.x)) * (1.0 - smoothstep(0.45, 1.0, e.y));
        gl_FragColor = vec4(uCol * g * uInt * 0.55, g);
        #include <colorspace_fragment>
      }`,transparent:!0,blending:i.AdditiveBlending,depthWrite:!1,toneMapped:!1,fog:!1,side:i.DoubleSide}),C=new i.Mesh(w,A);return C.frustumCulled=!1,C.renderOrder=5,C.castShadow=!1,C.receiveShadow=!1,s.add(C),s.userData.setIntensity=M=>{_.uniforms.uInt.value=M,A.uniforms.uInt.value=M},s}var ln=512,jv="'Bebas Neue', Impact, sans-serif",At={placca:[16,4,480,392],laterale:[4,410,100,88],med:[[110,412,82,82],[198,412,82,82],[286,412,82,82]],pelle:[376,406,72,100],nastro:[456,406,30,100],liscio:[493,410,14,36],nero:[493,460,14,40]},Ed={},Vo=(i,e)=>{i.save(),i.font="40px monospace";let t=i.measureText("MEDUSA 123").width;i.font=`40px ${e}, monospace`;let n=i.measureText("MEDUSA 123").width;return i.restore(),Math.abs(n-t)>.5};function Rd(i,e,t){let n=4711,s=()=>(n=n*16807%2147483647)/2147483647,r=m=>(m=Math.round(m),`rgb(${m},${m},${m})`),a=(m,d)=>r(e?m:d),o=Math.PI*2;i.setTransform(1,0,0,1,0,0),i.globalAlpha=1,i.fillStyle=e?"#000":r(128),i.fillRect(0,0,ln,ln);let c=Vo(i,"'Bebas Neue'")||Vo(i,"Impact"),l=(m,d,_,v,x,T,w=0)=>{i.save(),i.font=`${c?400:700} 100px ${jv}`,i.textAlign="center",i.textBaseline="alphabetic";try{i.letterSpacing=w+"px"}catch{}let A=i.measureText(m),C=A.actualBoundingBoxAscent||72,M=A.width||1,y=x/C,D=Math.min(v/M,y*1.12);i.translate(d+w*D/2,_+x/2),i.scale(D,y),i.fillStyle=T,i.fillText(m,0,0),i.restore()},h=(m,d,_,v,x,T=0,w=.4)=>{let A=[];for(let C=0;C<10;C++){let M=T-Math.PI/2+C*Math.PI/5,y=C%2?_*w:_;A.push([m+Math.cos(M)*y,d+Math.sin(M)*y])}for(let C=0;C<10;C++){let M=A[(C+1)%10];i.fillStyle=C%2?v:x,i.beginPath(),i.moveTo(m,d),i.lineTo(A[C][0],A[C][1]),i.lineTo(M[0],M[1]),i.closePath(),i.fill()}},u=(m,d,_,v)=>h(m,d,_,v,v),f=(m,d,_,v,x)=>{i.save(),i.translate(m,d),i.rotate(_),i.fillStyle=a(238,205),i.beginPath(),i.moveTo(0,0),i.quadraticCurveTo(v*.45,-x,v,0),i.quadraticCurveTo(v*.45,x,0,0),i.fill(),i.strokeStyle=a(120,150),i.lineWidth=1,i.beginPath(),i.moveTo(1,0),i.lineTo(v-2,0),i.stroke(),i.restore()},p=(m,d,_,v,x,T,w,A,C)=>{for(let M of[-1,1])for(let y=0;y<w;y++){let D=x+(T-x)*(y/(w-1)),I=m+M*_*Math.cos(D)*-1,R=d+v*Math.sin(D),U=M*_*Math.sin(D),W=v*Math.cos(D),z=Math.atan2(W,U);f(I,R,z-M*.55,A,C),f(I,R,z+M*.55,A*.92,C)}},g=(m,d,_,v,x,T,w,A,C,M=2)=>{for(let y=0;y<x;y++)i.fillStyle=a(T+s()*(w-T),A+s()*(C-A)),i.fillRect(m+s()*_,d+s()*v,M,M)},b=(m,d,_,v,x,T)=>{for(let w=0;w<x;w++){let A=w/x*o,C=m+_*Math.cos(A),M=d+v*Math.sin(A);if(e)i.fillStyle=r(60),i.beginPath(),i.arc(C,M,T+1.2,0,o),i.fill(),i.fillStyle=r(250),i.beginPath(),i.arc(C,M,T,0,o),i.fill();else{let y=i.createRadialGradient(C,M,0,C,M,T+1);y.addColorStop(0,r(250)),y.addColorStop(1,r(70)),i.fillStyle=y,i.beginPath(),i.arc(C,M,T+1,0,o),i.fill()}}};{let[m,d,_,v]=At.placca,x=m+_/2,T=d+v/2,w=_/2,A=v/2,C=U=>{i.beginPath(),i.ellipse(x,T,w*U,A*U,0,0,o)};i.fillStyle=a(255,238),i.fillRect(m-8,0,_+16,d+v+4),i.save(),C(.905),i.clip(),i.fillStyle=a(104,78),i.fillRect(m,d,_,v),g(m,d,_,v,5200,70,140,48,112);let M=x,y=T-.475*A;i.save(),C(.8),i.clip();for(let U=0;U<40;U++){let W=U/40*o,z=W+o/80;i.fillStyle=a(168,132),i.beginPath(),i.moveTo(M,y),i.lineTo(M+Math.cos(W)*600,y+Math.sin(W)*600),i.lineTo(M+Math.cos(z)*600,y+Math.sin(z)*600),i.closePath(),i.fill()}i.restore(),C(.8),i.strokeStyle=a(240,205),i.lineWidth=3,i.stroke(),p(x,T,w*.665,A*.665,Math.PI*.53,Math.PI*1.2,13,30,9),u(M,y,.335*A,a(46,52)),h(M,y,.3*A,a(255,255),a(196,178)),b(x,T,w*.852,A*.852,70,4.4);let D=T-.165*A,I=T+.275*A,R=I-D;i.fillStyle=a(40,46),i.fillRect(m,D-4,_,R+8),i.fillStyle=a(252,226),i.fillRect(m,D,_,R),i.fillStyle=a(96,150),i.fillRect(m,D+6,_,2.5),i.fillRect(m,I-8.5,_,2.5),l(t,x,(D+I)/2,_*.82,R*.6,a(10,118),2),l("CAMPIONE",x,T+.455*A,_*.36,21,a(246,214),6),u(x,T+.655*A,11,a(246,220)),i.restore(),C(.905),i.strokeStyle=a(48,40),i.lineWidth=2.5,i.stroke()}{let[m,d,_,v]=At.laterale,x=m+_/2,T=d+v/2,w=_/2,A=v/2;i.fillStyle=a(255,238),i.fillRect(m-3,d-3,_+6,v+6),i.save(),i.beginPath(),i.ellipse(x,T,w*.86,A*.86,0,0,o),i.clip(),i.fillStyle=a(104,78),i.fillRect(m,d,_,v),g(m,d,_,v,500,70,140,48,112),u(x,T+1,A*.6,a(46,52)),h(x,T+1,A*.52,a(255,255),a(196,178)),i.restore(),i.beginPath(),i.ellipse(x,T,w*.86,A*.86,0,0,o),i.strokeStyle=a(48,40),i.lineWidth=2,i.stroke(),b(x,T,w*.74,A*.74,22,2.6)}At.med.forEach(([m,d,_,v],x)=>{let T=m+_/2,w=d+v/2,A=_/2;i.fillStyle=a(255,238),i.fillRect(m-3,d-3,_+6,v+6),i.save(),i.beginPath(),i.arc(T,w,A*.84,0,o),i.clip(),i.fillStyle=a(112,78),i.fillRect(m,d,_,v),g(m,d,_,v,420,78,146,48,112),p(T,w,A*.6,A*.6,Math.PI*.56,Math.PI*1.36,8,13,4.5),l(String(x+1),T,w+1,A*.7,A*.72,a(40,60)),l(String(x+1),T-1,w,A*.62,A*.66,a(255,245)),i.restore(),i.beginPath(),i.arc(T,w,A*.84,0,o),i.strokeStyle=a(48,40),i.lineWidth=2,i.stroke()});{let[m,d,_,v]=At.pelle,x=20;if(i.fillStyle=a(15,128),i.fillRect(m-4,d-2,_+8,v+4),e){g(m-4,d-2,x+4,v+4,260,9,24,0,0,1.5),g(m+_-x,d-2,x+4,v+4,260,9,24,0,0,1.5);for(let T=0;T<260;T++)i.fillStyle=r(9+s()*15),i.fillRect(m+x+s()*(_-2*x),d-2+s()*(v+4),.7,4)}else{g(m-4,d-2,x+4,v+4,800,0,0,92,164,2),g(m+_-x,d-2,x+4,v+4,800,0,0,92,164,2);for(let T=0;T<900;T++)i.fillStyle=r(92+s()*72),i.fillRect(m+x+s()*(_-2*x),d-2+s()*(v+4),.8,5)}for(let T of[m+8,m+_-8]){i.fillStyle=a(7,86),i.fillRect(T-2.5,d-2,5,v+4);for(let w=0;w<10;w++)i.fillStyle=e?"#2c9c1a":r(205),i.fillRect(T-1.2,d+w*10+2,2.4,6)}}{let[m,d,_,v]=At.nastro;if(i.fillStyle=a(12,128),i.fillRect(m-3,d-2,_+6,v+4),e)i.fillStyle="#35e616",i.fillRect(m+5,d-2,7,v+4),i.fillRect(m+_-12,d-2,7,v+4),i.fillStyle="#dfe6dc",i.fillRect(m+_/2-1,d-2,2,v+4);else for(let x=d-2;x<d+v+2;x+=3)i.fillStyle=r(150),i.fillRect(m-3,x,_+6,1.5),i.fillStyle=r(106),i.fillRect(m-3,x+1.5,_+6,1.5)}{let[m,d,_,v]=At.liscio;i.fillStyle=a(255,128),i.fillRect(m-3,d-3,_+6,v+6)}{let[m,d,_,v]=At.nero;i.fillStyle=a(9,128),i.fillRect(m-3,d-3,_+6,v+6)}}function Kv(i,e){let t=document.createElement("canvas"),n=document.createElement("canvas");t.width=t.height=n.width=n.height=ln;let s=new i.CanvasTexture(t);s.colorSpace=i.SRGBColorSpace,s.anisotropy=8;let r=new i.CanvasTexture(n);r.anisotropy=8;let a=t.getContext("2d"),o=n.getContext("2d"),c=!1,l=()=>{c=Vo(a,"'Bebas Neue'"),Rd(a,!0,e),Rd(o,!1,e),s.needsUpdate=r.needsUpdate=!0};l();try{if(!c&&document.fonts&&document.fonts.addEventListener){let h=()=>{!c&&Vo(a,"'Bebas Neue'")&&(l(),document.fonts.removeEventListener("loadingdone",h))};document.fonts.addEventListener("loadingdone",h)}}catch{}return{map:s,ril:r,ridisegna:l}}function Pd(i,e={}){let t=(e.lod||"high")!=="low",n=e.yCorda??1,s=e.yCordaBassa??.75,r=e.rCorda??.03,a=String(e.testo||"MEDUSA GYM"),o=!!e.placcaRuotata,c=new i.Group;c.name="trofei";let l=[1,.71,.29],h=[.9,.91,.93],u=[.78,.42,.2],f=Ed[a]||(Ed[a]=Kv(i,a)),p=new i.MeshStandardMaterial({map:f.map,bumpMap:f.ril,bumpScale:.9,roughness:.55,metalness:0}),g=new i.MeshStandardMaterial({map:f.map,bumpMap:f.ril,bumpScale:1.6,roughness:.34,metalness:1,vertexColors:!0}),b=new i.MeshStandardMaterial({map:f.map,bumpMap:f.ril,bumpScale:.5,roughness:.82,metalness:0,side:i.DoubleSide}),m=(pe,re,Y)=>{let $=new i.BufferGeometry;return $.setAttribute("position",new i.Float32BufferAttribute(pe,3)),$.setAttribute("uv",new i.Float32BufferAttribute(re,2)),$.setIndex(Y),$.computeVertexNormals(),$},d=(pe,re,Y,$=!1)=>{let ue=[],X=[],te=[];for(let be=0;be<pe;be++)for(let Te=0;Te<re;Te++){let ge=Y(be,Te);ue.push(ge[0],ge[1],ge[2]),X.push(ge[3],ge[4])}for(let be=0;be<pe-1;be++)for(let Te=0;Te<re-1;Te++){let ge=be*re+Te,j=ge+1,J=ge+re,E=J+1;$?te.push(ge,J,j,j,J,E):te.push(ge,j,J,j,E,J)}return m(ue,X,te)},_=(pe,re,Y,$,ue=!1)=>{let X=[],te=[],be=[];for(let ge=0;ge<pe;ge++)for(let j=0;j<re;j++){let J=Y(ge,j);X.push(J[0],J[1],J[2]),te.push(J[3],J[4])}let Te=(ge,j,J)=>{ue?be.push(ge,J,j):be.push(ge,j,J)};for(let ge=0;ge<pe-1;ge++)for(let j=0;j<re;j++){let J=ge*re+j,E=ge*re+(j+1)%re,ye=J+re,ce=E+re;Te(J,E,ce),Te(J,ce,ye)}if($){let ge=pe*re;X.push($[0],$[1],$[2]),te.push($[3],$[4]);for(let j=0;j<re;j++)Te((pe-1)*re+j,(pe-1)*re+(j+1)%re,ge)}return m(X,te,be)},v=(pe,re,Y,$,ue,X,te,be,Te=!1)=>{let ge=X[X.length-1][0]===0,j=ge?X.length-1:X.length,J=ge?[...pe(re,Y,X[X.length-1][1]),...be(0,0)]:null;return _(j,te,(E,ye)=>{let ce=X[E][0],ie=ye/te*Math.PI*2,oe=ce*Math.cos(ie),Me=ce*Math.sin(ie);return[...pe(re+Me*$,Y+oe*ue,X[E][1]),...be(oe,Me)]},J,Te)},x=(pe,re=.985)=>(Y,$)=>[(pe[0]+pe[2]/2+Y*pe[2]/2*re)/ln,1-(pe[1]+pe[3]/2-$*pe[3]/2*re)/ln],T=pe=>{let re=(pe[0]+pe[2]/2)/ln,Y=1-(pe[1]+pe[3]/2)/ln;return()=>[re,Y]},w=(pe,re)=>{let Y=(re[0]+re[2]/2)/ln,$=1-(re[1]+re[3]/2)/ln,ue=pe.attributes.uv;for(let X=0;X<ue.count;X++)ue.setXY(X,Y,$);return pe},A=(pe,re)=>{let Y=pe.attributes.position.count,$=new Float32Array(Y*3);for(let ue=0;ue<Y;ue++)$[ue*3]=re[0],$[ue*3+1]=re[1],$[ue*3+2]=re[2];return pe.setAttribute("color",new i.BufferAttribute($,3)),pe},C=(pe,re)=>{for(let Y of Object.keys(pe.attributes))["position","normal","uv","color"].includes(Y)||pe.deleteAttribute(Y);if(!re&&pe.attributes.color&&pe.deleteAttribute("color"),!pe.index){let Y=pe.attributes.position.count,$=[];for(let ue=0;ue<Y;ue++)$.push(ue);pe.setIndex($)}return pe},M=(pe,re)=>lt(pe.map(Y=>C(Y,re)),!1),y={pelle:[],metallo:[]};function D(pe){let re=pe.scala,Y=.005,$=.055,ue=pe.L,X=ue/2,te=.055*re,be=(o?.09:.11)*re,Te=(o?.11:.09)*re,ge=Te+.06*re,j=.0425*re,J=.0375*re,E=X+ge+J+.012,ye=Math.PI*$,ce=.3,ie=.14,oe=.26,Me=Fe=>{if(Fe<E){let it=Math.max(0,(ce-Fe)/ce);return Math.PI/2-oe*it*it}if(Fe<E+ye)return Math.PI/2-(Fe-E)/$;let Xe=Math.max(0,(Fe-(ue-ie))/ie);return-Math.PI/2+oe*.7*Xe*Xe},_e=.002,P=Math.ceil(ue/_e),S=new Float32Array(P+1),G=new Float32Array(P+1);for(let Fe=0;Fe<P;Fe++){let Xe=Me((Fe+.5)*_e);S[Fe+1]=S[Fe]+Math.cos(Xe)*_e,G[Fe+1]=G[Fe]+Math.sin(Xe)*_e}let F=Math.round((E+ye/2)/_e),K=-S[F],N=r+Y/2-G[F],O=X-ge-J-.01,k=pe.torsione||0,H=(Fe,Xe,it)=>{let gt=Math.max(0,Math.min(P-1e-4,Fe/_e)),It=Math.floor(gt),Fn=gt-It,oi=Me(Fe),L=Fe<O?(O-Fe)/O:0,ne=k*L*L,xe=Math.cos(ne),ve=Math.sin(ne),se=it*xe+Xe*ve,Oe=Xe*xe-it*ve;return[S[It]+(S[It+1]-S[It])*Fn+K-Math.sin(oi)*se,G[It]+(G[It+1]-G[It])*Fn+N+Math.cos(oi)*se,Oe]},Ae=(Fe,Xe,it)=>H(Fe,Xe,Y/2+it),ae=be+.017*re,de=Te+.024*re,Le=Fe=>{let Xe=(Fe-X)/de,it=Math.abs(Xe)<1?ae*Math.sqrt(1-Xe*Xe):0,gt=Math.min(1,Math.max(0,(Math.abs(Fe-X)-ge-J)/.25)),It=te*(1-.14*gt),Fn=Math.pow(Math.pow(It,6)+Math.pow(it,6),1/6),oi=Math.min(Fe,ue-Fe)/(.032*re);return oi<1&&(Fn*=Math.max(.12,Math.sqrt(1-(1-oi)*(1-oi)))),Fn},Ee=t?.05:.1,Ie=Fe=>{let Xe=Fe/Ee,it=Xe-2*Math.floor(Xe/2);return 1-Math.abs(it-1)},Pe=[];for(let Fe=0;Fe<ue-1e-6;Fe+=Ee)Pe.push(+Fe.toFixed(5));let Se=[ue],Ue=t?10:5;for(let Fe=0;Fe<=Ue;Fe++)Se.push(E+ye*Fe/Ue);for(let Fe of t?[0,.3,.52,.7,.82,.91,.98,1.05,1.13,1.24]:[0,.5,.85,1.05,1.2])Se.push(X-Fe*de),Se.push(X+Fe*de);for(let Fe of t?[.003,.009,.019,.032]:[.006,.02])Se.push(Fe*re),Se.push(ue-Fe*re);if(t)for(let Fe=1;Fe<6;Fe++)Se.push(ce*Fe/6);let B=Pe.slice();for(let Fe of Se.sort((Xe,it)=>Xe-it))B.some(Xe=>Math.abs(Xe-Fe)<(t?.0045:.012))||B.push(Fe);B.sort((Fe,Xe)=>Fe-Xe);let we={pelle:[],metallo:[]},Q=B.length,he=t?.0013:0,De=At.pelle,le=(Fe,Xe)=>[(De[0]+De[2]*Fe)/ln,1-(De[1]+De[3]*(.02+.96*Ie(Xe)))/ln],Re=Fe=>Math.max(Le(Fe),he+6e-4),ze=20/De[2],$e=t?[Y/2,Y/2,Y/2,Y/2]:[0,Y/2,Y/2,0];if(we.pelle.push(d(Q,4,(Fe,Xe)=>{let it=B[Fe],gt=Re(it)-he,It=Math.min(.011*re,gt*.45),Fn=[-gt,-gt+It,gt-It,gt][Xe];return[...H(it,Fn,$e[Xe]),...le([0,ze,1-ze,1][Xe],it)]})),we.pelle.push(d(Q,2,(Fe,Xe)=>{let it=B[Fe],gt=Re(it)-he;return[...H(it,Xe?gt:-gt,t?-Y/2:0),...le(Xe?1-ze:ze,it)]},!0)),t){let Fe=[[-he,Y/2],[0,0],[-he,-Y/2]];we.pelle.push(d(Q,3,(Xe,it)=>{let gt=B[Xe],It=Re(gt);return[...H(gt,It+Fe[it][0],Fe[it][1]),...le(.5,gt)]})),we.pelle.push(d(Q,3,(Xe,it)=>{let gt=B[Xe],It=Re(gt);return[...H(gt,-(It+Fe[2-it][0]),Fe[2-it][1]),...le(.5,gt)]}))}let Je=x(At.placca),ut=x(At.laterale),Pt=o?(Fe,Xe)=>Je(Xe,-Fe):Je,$r=t?[[1,0],[1,.003],[.975,.0049],[.94,.0051],[.905,.0036],[.5,.0058],[0,.0068]]:[[1,0],[1,.003],[.94,.0051],[.905,.0036],[0,.0068]],ea=t?[[1,0],[1,.0024],[.95,.004],[.86,.003],[0,.0046]]:[[1,0],[.95,.004],[.86,.003],[0,.0046]],hn=[];hn.push(v(Ae,X,0,Te,be,$r.map(([Fe,Xe])=>[Fe,Xe*re]),t?40:18,Pt));for(let Fe of[-1,1])hn.push(v(Ae,X+Fe*ge,0,J,j,ea.map(([Xe,it])=>[Xe,it*re]),t?20:10,ut));let $s=t?[[1,0],[.62,.0026],[0,.0031]]:[[1,0],[0,.003]],ta=T(At.liscio),er=.0068*re,ai=[];for(let Fe=0;Fe<4;Fe++)for(let Xe of[-1,1])ai.push([(.05+.037*Fe)*re,Xe*.022*re]);for(let Fe=0;Fe<(t?3:2);Fe++)for(let Xe of[-1,1])ai.push([ue-(.045+.037*Fe)*re,Xe*.022*re]);for(let[Fe,Xe]of ai)hn.push(v(Ae,Fe,Xe,er,er,$s,t?7:5,ta));for(let Fe of hn)we.metallo.push(A(Fe,pe.metallo));for(let Fe of["pelle","metallo"])for(let Xe of we[Fe])Xe.applyMatrix4(pe.matrice),y[Fe].push(Xe)}let I=(pe,re,Y,$)=>new i.Matrix4().makeRotationY($).setPosition(pe,re,Y),R=[].concat(e.imbardata??[1.5,3]).map(pe=>pe*Math.PI/180);R.length<2&&R.push(R[0]),D({scala:1,L:1.2,metallo:l,torsione:.2,matrice:I(0,n,-.56,-R[0])}),D({scala:.88,L:1.06,metallo:h,torsione:-.14,matrice:I(-.56,n,0,-Math.PI/2+R[1])});{let Y=Math.PI/4+.14,$=I(-.45,0,-.45,Y),ue=.046,X=.066,te=[],be=(J,E,ye)=>{let ce=t?new si(J,E,J,1,.004):new i.BoxGeometry(J,E,J);return ce.translate(0,ye+E/2,0),ce};te.push(be(.112,ue,0)),te.push(be(.09,X-ue,ue));for(let J of te)w(J,At.nero),J.applyMatrix4($),y.pelle.push(J);let Te=t?[[0,X],[.037,X],[.04,X+.003],[.039,X+.007],[.03,X+.011],[.017,X+.017],[.0105,X+.028],[.009,X+.042],[.012,X+.048],[.0185,X+.054],[.0185,X+.059],[.012,X+.065],[.0095,X+.073],[.012,X+.081],[.024,X+.089],[.038,X+.101],[.048,X+.12],[.0522,X+.14],[.0545,X+.1435],[.0545,X+.1475],[.0528,X+.151],[.0532,X+.19],[.0556,X+.1935],[.0556,X+.1975],[.0542,X+.201],[.058,X+.232],[.065,X+.25],[.0672,X+.254],[.0655,X+.2535],[.057,X+.232],[.051,X+.2],[.05,X+.16],[.045,X+.125],[.03,X+.104],[0,X+.098]]:[[0,X],[.04,X],[.038,X+.008],[.014,X+.02],[.009,X+.045],[.0185,X+.056],[.0095,X+.073],[.03,X+.093],[.05,X+.125],[.054,X+.2],[.0672,X+.254],[.052,X+.2],[.046,X+.125],[0,X+.098]],ge=[];ge.push(new i.LatheGeometry(Te.map(([J,E])=>new i.Vector2(J,E)),t?18:12));let j=[[.045,X+.118],[.068,X+.124],[.09,X+.145],[.098,X+.18],[.09,X+.214],[.07,X+.228],[.054,X+.222]];for(let J of[0,Math.PI]){let E=new i.TubeGeometry(new i.CatmullRomCurve3(j.map(([ye,ce])=>new i.Vector3(ye,ce,0))),t?14:7,.0048,t?6:4,!1);E.rotateY(J),ge.push(E)}{let J=new i.BoxGeometry(.062,.022,.002);J.translate(0,ue*.5,-.0565),ge.push(J)}for(let J of ge)w(J,At.liscio),A(J,l),J.applyMatrix4($),y.metallo.push(J)}let U=[],W=[],z=[];{let Y=(te,be)=>[(At.nastro[0]+At.nastro[2]*(.03+.94*te))/ln,1-(At.nastro[1]+At.nastro[3]*(.05+.9*be))/ln],$=[[-1.41,.235,h,1],[-1.25,.3,l,0],[-1.09,.185,u,2]],ue=0,X=0;for(let[te,be,Te,ge]of $){let j=s-be,J=-(r+.0022),E=(Ee,Ie,Pe)=>[J-Pe,j+Ee,te+Ie],ye=t?[[1,0],[1,.004],[.965,.0052],[.9,.0052],[.85,.004],[.45,.0046],[0,.0049]]:[[1,0],[1,.004],[.9,.0052],[.85,.004],[0,.0049]],ce=t?24:12,ie=[v(E,0,0,.036,.036,ye,ce,x(At.med[ge]))];ie.push(v(E,0,0,.036,.036,[[1,0],[0,0]],ce,T(At.liscio),!0));let oe=j+.036+.0052,Me=.0072;{let Ee=new i.TorusGeometry(Me,.0013,t?4:3,t?9:6);Ee.rotateY(Math.PI/2),Ee.translate(J-.002,oe,te),ie.push(w(Ee,At.liscio))}for(let Ee of ie)A(Ee,Te);let _e=[],P=t?12:6,S=r+.0012;_e.push(d(P+1,3,(Ee,Ie)=>{let Pe=Ee/P*Math.PI*2;return[Math.cos(Pe)*S,s+Math.sin(Pe)*S,te+(Ie-1)*.03*1.02,...Y(Ie===1?1:0,.5)]}));let G=r+.0024,F=116*Math.PI/180,K=178*Math.PI/180,N=t?3:2;_e.push(d(N+1,2,(Ee,Ie)=>{let Pe=F+(K-F)*Ee/N;return[Math.cos(Pe)*G,s+Math.sin(Pe)*G,te+(Ie?1:-1)*.03*1.02,...Y(Ee/N,Ie)]}));let O=_e.reduce((Ee,Ie)=>Ee+Ie.attributes.position.count,0),k=s+.004,H=oe+Me-.002,Ae=t?5:3;for(let Ee of[-1,1])_e.push(d(Ae,2,(Ie,Pe)=>{let Se=Ie/(Ae-1),Ue=Se*Se*(3-2*Se),B=.03+(.015-.03)*Ue,we=te+Ee*(.03*.46*(1-Ue)+.0015*Ue);return[-(r+.0018)+(J-.002+Ee*9e-4+(r+.0018))*Ue,k+(H-k)*Se,we+(Pe?.5:-.5)*B,...Y(Pe,.1+.8*Se)]}));let ae=_e.reduce((Ee,Ie)=>Ee+Ie.attributes.position.count,0),de=ie.reduce((Ee,Ie)=>Ee+Ie.attributes.position.count,0),Le=te*7.3;z.push({x:J-.002,z:te,yP:s,yTop:k,yBot:H,n0:ue+O,n1:ue+ae,m0:X,m1:X+de,wS:Math.sqrt(9.81/(be+.02)),fS:Le,aS:.016,wT:.9+.23*ge,fT:Le*1.7,aT:.11}),ue+=ae,X+=de,U.push(..._e),W.push(...ie)}}let ee=(pe,re,Y)=>{let $=new i.Mesh(pe,re);return $.name=Y,$.castShadow=$.receiveShadow=!0,c.add($),$};ee(M(y.pelle,!1),p,"pelle"),ee(M(y.metallo,!0),g,"metallo");let q=ee(M(U,!1),b,"nastri"),Z=ee(M(W,!0),g,"medaglie"),fe=[q,Z].map(pe=>({p:pe.geometry.attributes.position,n:pe.geometry.attributes.normal,p0:pe.geometry.attributes.position.array.slice(),n0:pe.geometry.attributes.normal.array.slice()}));for(let pe of fe)pe.p.setUsage(i.DynamicDrawUsage),pe.n.setUsage(i.DynamicDrawUsage);let Ce=(pe,re,Y,$,ue,X)=>{let te=pe.p.array,be=pe.n.array,Te=pe.p0,ge=pe.n0,j=$.yTop-$.yBot;for(let J=re;J<Y;J++){let E=J*3,ye=Math.min(1,Math.max(0,($.yTop-Te[E+1])/j)),ce=ue*ye,ie=Math.cos(ce),oe=Math.sin(ce),Me=X*Math.min(1,ye*3),_e=Math.cos(Me),P=Math.sin(Me),S=Te[E]-$.x,G=Te[E+2]-$.z,F=$.x+S*ie+G*oe,K=$.z-S*oe+G*ie,N=Te[E+1],O=ge[E]*ie+ge[E+2]*oe,k=-ge[E]*oe+ge[E+2]*ie,H=ge[E+1],Ae=N-$.yP;G=K-$.z,N=$.yP+Ae*_e-G*P,K=$.z+Ae*P+G*_e;let ae=H*_e-k*P;k=H*P+k*_e,H=ae,te[E]=F,te[E+1]=N,te[E+2]=K,be[E]=O,be[E+1]=H,be[E+2]=k}};return c.userData.update=pe=>{for(let re of z){let Y=re.aT*Math.sin(re.wT*pe+re.fT),$=re.aS*Math.sin(re.wS*pe+re.fS);Ce(fe[0],re.n0,re.n1,re,Y,$),Ce(fe[1],re.m0,re.m1,re,Y,$)}for(let re of fe)re.p.needsUpdate=!0,re.n.needsUpdate=!0},c.userData.update(0),c.userData.ridisegna=f.ridisegna,c}var Id=512,Qs=140,Xt={W:54,H:96,T:11,Y:22,SKEW:.09,X:[196,266,358,428],COLON_X:339},Zv={0:"abcdef",1:"bc",2:"abged"};function Ld(i,e,t,n,s,r){let a=r/2;i.beginPath(),t===s?(i.moveTo(e,t),i.lineTo(e+a,t-a),i.lineTo(n-a,t-a),i.lineTo(n,t),i.lineTo(n-a,t+a),i.lineTo(e+a,t+a)):(i.moveTo(e,t),i.lineTo(e+a,t+a),i.lineTo(e+a,s-a),i.lineTo(e,s),i.lineTo(e-a,s-a),i.lineTo(e-a,t+a)),i.closePath(),i.fill()}function Jv(i,e,t,n,s){let{W:r,H:a,T:o,Y:c}=Xt,l=o/2,h=1.6,u=e+l,f=e+r-l,p=c+l,g=c+a/2,b=c+a-l,m={a:[u+h,p,f-h,p],g:[u+h,g,f-h,g],d:[u+h,b,f-h,b],f:[u,p+h,u,g-h],b:[f,p+h,f,g-h],e:[u,g+h,u,b-h],c:[f,g+h,f,b-h]},d=Zv[t]||"";i.shadowBlur=0,i.fillStyle=s;for(let _ in m)d.includes(_)||Ld(i,...m[_],o);i.shadowColor=n,i.shadowBlur=9,i.fillStyle=n;for(let _ in m)d.includes(_)&&Ld(i,...m[_],o);i.shadowBlur=0}function Dd(i,e){i.setTransform(1,0,0,1,0,0),i.fillStyle="#020302",i.fillRect(0,0,512,256),i.setTransform(1,0,0,256/Qs,0,0),i.fillStyle="#b0352a",i.textAlign="center",i.textBaseline="middle",i.font='400 44px "Bebas Neue", Impact, sans-serif';try{i.letterSpacing="2px"}catch{}i.fillText("ROUND 1",96,Qs/2+2,150);try{i.letterSpacing="0px"}catch{}let t="#0b1c08";i.setTransform(1,0,-Xt.SKEW*256/Qs,256/Qs,Xt.SKEW*(Xt.Y+Xt.H/2)*256/Qs,0);let n=["0","0","2","0"];for(let s=0;s<4;s++)Jv(i,Xt.X[s],n[s],e,t);i.fillStyle=t;for(let s of[.3,.7])i.fillRect(Xt.COLON_X-6,Xt.Y+Xt.H*s-6,12,12);i.setTransform(1,0,0,1,0,0)}function Qv(i,e,t,n,s,r){let a=41,o=()=>(a=a*16807%2147483647,a/2147483647),c=r+12,l=[];for(let w=0;w<c;w++)l.push(.78+o()*.44-(o()>.82?.3:0));let h=w=>{let A=Math.max(1,Math.min(c-2,w));return l[A-1]*.22+l[A]*.56+l[A+1]*.22},u=new i.Color(4465679),f=[-n/2];for(let w=0;w<=r;w++)f.push(-n/2+s+(n-2*s)*w/r);f.push(n/2);let p=f.length,g=[-e/2,-e/2,-e/2+s,-e/6,e/6,e/2-s,e/2,e/2],b=g.length,m=[0,0,0,2,4,5,5,5],d=[],_=[],v=[];for(let w=0;w<p;w++){let A=w===0||w===p-1,C=[0,t-s,A?t-s:t,A?t-s:t,A?t-s:t,A?t-s:t,t-s,0];for(let M=0;M<b;M++){d.push(g[M],C[M],f[w]);let y=h(w+m[M])*(M===0||M===b-1?.8:1);_.push(u.r*y,u.g*y,u.b*y)}}for(let w=0;w<p-1;w++)for(let A=0;A<b-1;A++){let C=w*b+A,M=(w+1)*b+A,y=C+1,D=M+1;v.push(C,M,y,M,D,y)}let x=(w,A)=>{let C=d.length/3,M=.62;d.push(-e/2,0,w,e/2,0,w,e/2,t-s,w,-e/2,t-s,w);for(let y=0;y<4;y++)_.push(u.r*M,u.g*M,u.b*M);A?v.push(C,C+2,C+1,C,C+3,C+2):v.push(C,C+1,C+2,C,C+2,C+3)};x(n/2,!1),x(-n/2,!0);let T=new i.BufferGeometry;return T.setAttribute("position",new i.Float32BufferAttribute(d,3)),T.setAttribute("color",new i.Float32BufferAttribute(_,3)),T.setIndex(v),T=T.toNonIndexed(),T.computeVertexNormals(),T}function Nd(i,e={}){let t=e.lod==="low",n=e.color??3800852,s=new i.Group,r=[],a=[],o=[],c=new i.Color,l=(Se,Ue,B,we)=>{let Q=Ue.index?Ue.toNonIndexed():Ue;if(Q.attributes.uv&&Q.deleteAttribute("uv"),we&&Q.applyMatrix4(we),Q.attributes.normal||Q.computeVertexNormals(),!Q.attributes.color){c.set(B);let he=Q.attributes.position.count,De=new Float32Array(he*3);for(let le=0;le<he;le++)De[le*3]=c.r,De[le*3+1]=c.g,De[le*3+2]=c.b;Q.setAttribute("color",new i.Float32BufferAttribute(De,3))}return Se.push(Q),Q},h=(Se,Ue,B,we,Q,he,De,le)=>{let Re=new i.BoxGeometry(B,we,Q);return Re.translate(he,De,le),l(Se,Re,Ue)},u=(Se,Ue,B,we,Q,he,De,le,Re,ze=!1)=>{let $e=new i.CylinderGeometry(B,we,Q,he,1,ze);return $e.translate(De,le,Re),l(Se,$e,Ue)},f=new i.Vector3(0,1,0),p=(Se,Ue,B,we,Q,he,De=!0)=>{let le=new i.Vector3(...B),Re=new i.Vector3(...we),ze=Re.clone().sub(le),$e=ze.length(),Je=new i.CylinderGeometry(Q,Q,$e,he,1,De),ut=new i.Matrix4().compose(le.clone().add(Re).multiplyScalar(.5),new i.Quaternion().setFromUnitVectors(f,ze.normalize()),new i.Vector3(1,1,1));return l(Se,Je,Ue,ut)},g=1776928,b=1184790,m=394758,d=1316376,_=14857815,v=13488854,x=.6,T=.45,w=.75,A=.018;if(t)h(r,g,x,A,T,0,w-A/2,0);else{let B=x/2-.003,we=T/2-.003,Q=new i.Shape;Q.moveTo(-B+.02,-we),Q.lineTo(B-.02,-we),Q.absarc(B-.02,-we+.02,.02,-Math.PI/2,0,!1),Q.lineTo(B,we-.02),Q.absarc(B-.02,we-.02,.02,0,Math.PI/2,!1),Q.lineTo(-B+.02,we),Q.absarc(-B+.02,we-.02,.02,Math.PI/2,Math.PI,!1),Q.lineTo(-B,-we+.02),Q.absarc(-B+.02,-we+.02,.02,Math.PI,Math.PI*1.5,!1);let he=new i.ExtrudeGeometry(Q,{depth:A-2*.003,bevelEnabled:!0,bevelThickness:.003,bevelSize:.003,bevelSegments:1,curveSegments:4});he.rotateX(-Math.PI/2),he.translate(0,w-A+.003,0),l(r,he,g)}let C=x/2-.04,M=T/2-.04,y=.022,D=t?0:.008,I=.034;for(let Se of[-1,1])for(let Ue of[-1,1])h(r,g,y,w-A-D,y,Se*C,D+(w-A-D)/2,Ue*M),t||u(r,m,.015,.016,D,10,Se*C,D/2,Ue*M);for(let Se of[-1,1])h(r,g,2*C-y,I,.012,0,w-A-I/2,Se*M),h(r,g,.012,I,2*M-y,Se*C,w-A-I/2,0),h(r,g,.016,.016,2*M-y,Se*C,.16,0);h(r,g,2*C-.016,.016,.016,0,.16,0);let R=.32,U=.03,W=.22,z=-.015,ee=w+U,q=Qv(i,R,U,W,.004,t?8:20);q.translate(0,w,z),a.push(q);let Z=-.045,fe=.016,Ce=.0685,re=new i.SplineCurve([[.0925,.008],[.0958,.0022],[.0986,0],[.1004,.002],[.1,.0065],[.0986,.016],[.0962,.028],[.092,.04],[.084,.051],[.07,.0595],[.052,.0648],[.031,.0675],[.013,.0683],[0,Ce]].map(([Se,Ue])=>new i.Vector2(Se,Ue))).getSpacedPoints(t?9:15);re[re.length-1].x=0;let Y=new i.LatheGeometry(re,t?22:40);Y.translate(Z,ee+fe,z),l(o,Y,_);let $=ee+fe+Ce;if(u(o,v,.011,.011,fe+.06,t?8:12,Z,ee+(fe+.06)/2,z,!0),u(o,v,.019,.019,.003,t?10:18,Z,$+.0012,z),u(o,v,.0105,.0105,.008,6,Z,$+.0067,z),!t){let Se=new i.SphereGeometry(.0088,10,4,0,Math.PI*2,0,Math.PI/2);Se.translate(Z,$+.0105,z),l(o,Se,v)}let ue=.114,X=ee+.02,te=Z+.0968+.003+.0155,be=ee+fe+.0255,Te=.0155,ge=.203,j=ee+.05,J=new i.SphereGeometry(Te,t?8:14,t?6:10);J.translate(te,be,z),l(o,J,v),p(o,v,[ue,X,z],[te+.004,be-.002,z],.0038,t?5:8),p(o,v,[ue,X,z],[ge,j,z],.0038,t?5:8);for(let Se of[-1,1])h(o,v,.022,.03,.003,ue,ee+.015,z+Se*.0105);h(o,v,.034,.003,.034,ue,ee+.0015,z);let E=new i.CylinderGeometry(.0048,.0048,.032,t?6:10);E.rotateX(Math.PI/2),E.translate(ue,X,z),l(o,E,v);{let Se=new i.SphereGeometry(.0125,t?7:10,t?5:6);Se.translate(ge+.004,j+.0015,z),l(r,Se,m)}{let Ue=ee+.001,B=X+(j-X)*(.146-ue)/(ge-ue)-.002,we=t?3.5:5,Q=t?28:50,he=[];for(let le=0;le<=Q;le++){let Re=le/Q,ze=Re*we*Math.PI*2;he.push(new i.Vector3(.146+Math.cos(ze)*.0068,Ue+(B-Ue)*Re,z+Math.sin(ze)*.0068))}let De=new i.TubeGeometry(new i.CatmullRomCurve3(he),t?28:50,.0012,t?3:4,!1);l(o,De,v),u(o,v,.009,.009,.002,t?6:10,.146,ee+.001,z)}if(!t)for(let Se of[-1,1])for(let Ue of[-1,1])u(o,_,.0055,.0062,.0022,8,Se*(R/2-.018),ee+.0011,z+Ue*(W/2-.018));let ye=1.55,ce=-.35,ie=.7,oe=.22,Me=.06,_e=.006,P=.64,S=.175,G=ce+Me/2-_e;h(r,b,ie,oe,Me-_e,0,ye,ce-_e/2);let F=(oe-S)/2,K=(ie-P)/2;for(let Se of[-1,1])h(r,b,ie,F,_e,0,ye+Se*(S/2+F/2),G+_e/2),h(r,b,K,S,_e,Se*(P/2+K/2),ye,G+_e/2);let N=ce-Me/2-.012-.016,O=.016;if(u(r,d,O,O,ye+.075,t?8:14,0,(ye+.075)/2,N,!0),u(r,d,O,O,.002,t?8:14,0,ye+.075,N),u(r,d,.165,.175,.012,t?16:28,0,.006,N),u(r,d,.026,.032,.05,t?8:14,0,.012+.025,N,!0),h(r,d,.11,.15,.012,0,ye,ce-Me/2-.006),!t)for(let Se of[-1,1])h(r,d,.05,.014,.04,0,ye+Se*.05,N+.004);if(!t){let we=new i.Shape;we.moveTo(.037,.0115),we.lineTo(0,.0115),we.absarc(0,0,.0115,Math.PI/2,Math.PI*2+.3,!1),we.lineTo(.037,.0045),we.closePath();let Q=new i.ExtrudeGeometry(we,{depth:.016-2*.0012,bevelEnabled:!0,bevelThickness:.0012,bevelSize:.0012,bevelSegments:1,curveSegments:12});Q.translate(0,0,.0012),Q.rotateX(-Math.PI/2);let he=new i.Matrix4().compose(new i.Vector3(-.215,w+2e-4,.165),new i.Quaternion().setFromAxisAngle(f,.5),new i.Vector3(1,1,1));l(o,Q,v,he);let De=new i.BoxGeometry(.008,.016*.62,.002);De.translate(.012,.016/2,-.0115-.0012-2e-4),l(r,De,m,he);let le=new i.TorusGeometry(.0062,.0011,4,10);le.rotateX(Math.PI/2),le.translate(-.0115-.0012-.0045,.016/2,0),l(o,le,v,he);let Re=new i.Vector3(-.0115-.0012-.008,.004,0).applyMatrix4(he),ze=new i.CatmullRomCurve3([Re,new i.Vector3(Re.x-.02,w+.0025,Re.z+.012),new i.Vector3(Re.x-.012,w+.0025,Re.z-.05),new i.Vector3(Re.x+.05,w+.0025,Re.z-.085),new i.Vector3(Re.x+.115,w+.0025,Re.z-.05),new i.Vector3(Re.x+.1,w+.0025,Re.z-.005),new i.Vector3(Re.x+.02,w+.0025,Re.z+.03),new i.Vector3(Re.x-.004,w+.005,Re.z+.004)]);l(r,new i.TubeGeometry(ze,26,.0022,3,!1),m)}let k=(Se,Ue)=>{let B=new i.Mesh(lt(Se,!1),Ue);return B.castShadow=B.receiveShadow=!0,s.add(B),B};k(r,new i.MeshStandardMaterial({color:16777215,vertexColors:!0,metalness:.45,roughness:.5,envMapIntensity:.9})).name="gong_nero",k(a,new i.MeshStandardMaterial({color:16777215,vertexColors:!0,metalness:0,roughness:.58,envMapIntensity:.7})).name="gong_legno",k(o,new i.MeshStandardMaterial({color:16777215,vertexColors:!0,metalness:1,roughness:.2,envMapIntensity:1.35})).name="gong_metallo";let H=document.createElement("canvas");H.width=512,H.height=256;let Ae=H.getContext("2d"),ae="#"+new i.Color(n).getHexString();Dd(Ae,ae);let de=new i.CanvasTexture(H);de.colorSpace=i.SRGBColorSpace,de.anisotropy=4;let Le=new i.MeshStandardMaterial({color:16777215,map:de,emissive:16777215,emissiveMap:de,emissiveIntensity:1.2,roughness:.3,metalness:0,envMapIntensity:.6}),Ee=new i.Mesh(new i.PlaneGeometry(P,S),Le);Ee.position.set(0,ye,G+.0015),Ee.castShadow=!1,Ee.receiveShadow=!1,Ee.name="gong_display",s.add(Ee);let Ie=[];for(let Se of[.3,.7]){let Ue=Xt.Y+Xt.H*Se,B=Xt.COLON_X-Xt.SKEW*(Ue-(Xt.Y+Xt.H/2)),we=12/Id*P,Q=new i.PlaneGeometry(we,we);Q.translate((B/Id-.5)*P,(.5-Ue/Qs)*S,0),Ie.push(Q)}let Pe=new i.Mesh(lt(Ie,!1),new i.MeshStandardMaterial({color:0,emissive:n,emissiveIntensity:1.2,roughness:.3,metalness:0}));return Pe.position.set(0,ye,G+.0032),Pe.castShadow=!1,Pe.receiveShadow=!1,Pe.name="gong_duepunti",s.add(Pe),s.userData.update=Se=>{let Ue=Se-Math.floor(Se);Pe.visible=Ue<.5},s.userData.redrawDisplay=()=>{Dd(Ae,ae),de.needsUpdate=!0},s}function Ud(i,e={}){let t=(e.lod||"high")!=="low",n=new i.Group;n.name="rack";let s=2.6,r=1.25,a=.9,o=.075,c=[],l=[],h=[],u=(b,m,d,_,v,x,T)=>{let w=new i.BoxGeometry(m,d,_);w.translate(v,x,T),b.push(w)},f=(b,m,d,_,v,x,T)=>{let w=new i.CylinderGeometry(m,m,d,t?14:7,1);T==="x"&&w.rotateZ(Math.PI/2),T==="z"&&w.rotateX(Math.PI/2),w.translate(_,v,x),b.push(w)};for(let b of[-1,0,1]){let m=b*r;if(u(c,o,s,o,m,s/2,0),u(c,o,.05,a,m,.025,0),u(h,o+.006,.09,o+.006,m,1.05,0),t)for(let d of[1.5,1.7,1.9,2.1])f(l,.011,o+.012,m,d,0,"z");u(c,.26,.012,.36,m,.056,0)}u(c,2*r+o,o,o,0,s-o/2,0),f(l,.016,r-o,-r/2,2.32,0,"x"),f(l,.016,r-o,r/2,2.08,0,"x");for(let b of[-1,1])f(l,.019,.62,r+.31+o/2-.02,1.18,b*.26,"x"),u(c,.05,.05,.3,r+o/2+.01,1.18,b*.14);let p=[];for(let[b,m]of[[-r/2-.28,2.32],[-r/2+.28,2.32],[r/2-.28,2.08],[r/2+.28,2.08]])f(p,.0185,.2,b,m,0,"x");let g=(b,m)=>{let d=new i.Mesh(lt(b.map(_=>_.index?_.toNonIndexed():_),!1),m);d.castShadow=d.receiveShadow=!0,n.add(d)};return g(c,new i.MeshStandardMaterial({color:1316119,roughness:.5,metalness:.6})),g(l,new i.MeshStandardMaterial({color:12106944,roughness:.28,metalness:1})),g(h,new i.MeshStandardMaterial({color:3127316,roughness:.6,metalness:0})),g(p,new i.MeshStandardMaterial({color:14277074,roughness:.9,metalness:0})),n}var Ut={guantone:xd,ring:vd,sacco:yd,kettlebell:Sd,anelli:wd,manubri:Ad,pavimento:Td,neon:Cd,trofei:Pd,gong:Nd,rack:Ud};var qh=(i,e,t)=>Math.min(t,Math.max(e,i)),ri=(i,e,t)=>i+(e-i)*t,qt=(i,e,t)=>{let n=qh((t-i)/(e-i),0,1);return n*n*(3-2*n)},Fd=[12,19.5,27],Od=[-1,-2.2,-1],Bd=new me.Vector3(0,0,-.62),kd=2.9,Zr=[[27,-1.2,1.2],[27.34,-1.34,-.3]],Qr=[{id:"hero",sel:null,pos:[.82,1.53,1.72],tgt:[0,1.45,.25],fov:30,sx:.72,sy:0,vis:1,p:{pos:[.75,1.55,1.75],fov:36,sx:0,sy:.1}},{id:"carica",sel:"#home",at:1,pos:[1.95,1.5,.45],tgt:[0,1.42,.1],fov:32,sx:.05,sy:0,vis:1,p:{pos:[1.5,1.57,-1.15],tgt:[-.05,1.42,.15],fov:48,sx:0,sy:-.12}},{id:"pugno",sel:'.fx-win[data-fx="pugno"]',at:.5,pos:[1.9,1.5,-.15],tgt:[0,1.42,-.05],fov:34,sx:0,sy:0,vis:1,p:{pos:[1.45,1.56,-1.5],tgt:[0,1.42,-.1],fov:51,sx:-.6,sy:-.12}},{id:"trailer",sel:"#trailer",at:.5,pos:[3.6,2.3,4.8],tgt:[4.2,1.25,-1.6],fov:36,sx:0,sy:0,vis:.55,p:{fov:50}},{id:"ring",sel:'.fx-win[data-fx="ring"]',at:.5,pos:[6.6,3.3,5.3],tgt:[20,.9,-1.7],fov:36,sx:0,sy:.1,vis:1,p:{pos:[5.6,3.9,5.8],fov:54,sy:.05}},{id:"about",sel:"#about",at:.5,pos:[13.5,2.3,5.3],tgt:[21,1.1,-1.6],fov:36,sx:.3,sy:0,vis:.25,p:{fov:52,sx:0}},{id:"fitness",sel:'.fx-win[data-fx="fitness"]',at:.5,pos:[33.5,.95,3.7],tgt:[35.3,1,-.8],fov:42,sx:0,sy:.12,vis:1,p:{pos:[33.6,1.05,4.7],tgt:[35,1.05,-.8],fov:62,sy:.1}},{id:"corsi",sel:"#corsi",at:.5,pos:[33.2,1.3,2],tgt:[34.6,1.3,-1.4],fov:36,sx:0,sy:0,vis:.28,p:{fov:50}},{id:"porta",sel:'.fx-win[data-fx="porta"]',at:.22,pos:[33.9,1.5,1.45],tgt:[39,1.3,1.18],fov:40,sx:0,sy:-.12,vis:1,p:{pos:[33.7,1.55,1.4],fov:58,sy:-.06}},{id:"ingressi",sel:'.fx-win[data-fx="porta"]',at:.8,pos:[40.7,1.6,.7],tgt:[40.7,1.45,-7.6],fov:40,sx:0,sy:0,vis:1,p:{fov:60}},{id:"quiz",sel:"#quiz",at:.5,pos:[40.7,1.6,-.5],tgt:[40.7,1.45,-7.6],fov:40,sx:0,sy:0,vis:.3,p:{fov:60}},{id:"recensione",sel:'.fx-win[data-fx="recensione"]',at:.5,pos:[40.2,1.68,-2],tgt:[42.4,1.72,-2.65],fov:44,sx:0,sy:-.03,vis:1,p:{pos:[39.55,1.7,-2.45],tgt:[42.4,1.72,-2.6],fov:60}},{id:"reviews",sel:"#reviews",at:.5,pos:[40.5,1.7,-3.2],tgt:[42.4,1.6,-4.4],fov:40,sx:0,sy:0,vis:.2,p:{fov:58}},{id:"tabellone",sel:'.fx-win[data-fx="tabellone"]',at:.5,pos:[41.95,1.7,-4.3],tgt:[39,1.72,-4.62],fov:46,sx:0,sy:-.03,vis:1,p:{pos:[41.95,1.72,-4.5],tgt:[39,1.72,-4.6],fov:62}},{id:"orari",sel:"#orari",at:.5,pos:[41.5,1.7,-4.9],tgt:[39,1.6,-5.6],fov:40,sx:0,sy:0,vis:.2,p:{fov:58}},{id:"cornici",sel:'.fx-win[data-fx="cornici"]',at:.5,pos:[39.6,1.62,-5.3],tgt:[42.4,1.6,-5.75],fov:56,sx:0,sy:-.02,vis:1,p:{pos:[39.45,1.62,-5.2],tgt:[42.4,1.6,-5.6],fov:64}},{id:"famiglia",sel:"#famiglia",at:.5,pos:[39.9,1.7,-6.2],tgt:[42.4,1.5,-6.4],fov:44,sx:0,sy:0,vis:.2,p:{fov:60}},{id:"sale",pos:[40.3,5.2,-3],tgt:[35,.8,-2.5],fov:40,sx:0,sy:0,vis:.3,p:{fov:54}},{id:"gallery",sel:"#gallery",at:.5,pos:[35.6,6,6.8],tgt:[24,.5,-1.5],fov:40,sx:0,sy:0,vis:.3,p:{fov:56}},{id:"campioni",sel:'.fx-win[data-fx="campioni"]',at:.5,pos:[27.45,1.72,-.5],tgt:[29.15,1.36,1.15],fov:42,sx:0,sy:0,vis:1,p:{pos:[27.3,1.78,-.65],fov:56}},{id:"risultati",sel:"#risultati",at:.5,pos:[27.4,1.95,-.5],tgt:[29.2,1.5,1.2],fov:40,sx:0,sy:0,vis:.2,p:{fov:54}},{id:"esce",pos:[29.2,2.7,2],tgt:[29.3,1.1,3.1],fov:40,sx:0,sy:0,vis:.6,p:{fov:54}},{id:"gong",sel:'.fx-win[data-fx="gong"]',at:.5,pos:[29.75,1.5,5.85],tgt:[29.3,1.15,3],fov:40,sx:0,sy:-.02,vis:1,p:{pos:[29.6,1.55,6.3],fov:56}},{id:"giochi",sel:"#giochi",at:.5,pos:[30.6,1.7,5.4],tgt:[29,1.2,2.6],fov:38,sx:0,sy:0,vis:.2,p:{fov:54}},{id:"faq",sel:"#faq",at:.5,pos:[29.8,3.1,4.9],tgt:[27,1.6,-1],fov:38,sx:0,sy:0,vis:.14,p:{fov:52}},{id:"scavalca",pos:[28.1,2.15,.7],tgt:[27.1,1.2,-1.1],fov:37,sx:0,sy:.08,vis:.6,p:{fov:50}},{id:"finale",sel:'.fx-win[data-fx="finale"]',at:.5,pos:[27.78,1.5,-.08],tgt:[27.14,.99,-1.26],fov:34,sx:0,sy:.2,vis:1,p:{pos:[27.98,1.72,.3],fov:48,sy:.1}},{id:"prova",sel:"#prova",at:.5,pos:[27.6,1.3,-.4],tgt:[27.14,1,-1.26],fov:36,sx:0,sy:0,vis:.1,p:{fov:50}},{id:"contatti",sel:"#contatti",at:.5,pos:[19.5,13,9.5],tgt:[19.5,0,-1.5],fov:42,sx:0,sy:0,vis:.28,p:{pos:[19.5,20,13],fov:58}}],Qt=Object.fromEntries(Qr.map((i,e)=>[i.id,e])),$v=-.3,e_=.3,Jr=1.9,t_=[{fx:"pugno",before:"#trailer",cap:""},{fx:"ring",before:"#about",cap:"550 mq <b>e 3 ring</b>"},{fx:"fitness",before:"#corsi",cap:"Sala pesi, functional, <b>calisthenics</b>"},{fx:"porta",before:"#quiz",cap:""},{fx:"recensione",before:"#reviews",cap:"",short:1},{fx:"tabellone",before:"#orari",cap:"",short:1},{fx:"cornici",before:"#famiglia",cap:"",short:1},{fx:"campioni",before:"#risultati",cap:"",short:1},{fx:"gong",before:"#giochi",cap:"",short:1},{fx:"finale",before:"#prova",cap:"Il ring <b>ti aspetta</b>"}];function n_(){let i=null,e=0;for(let n of document.querySelectorAll("main > section")){let s=n.getBoundingClientRect();if(s.top<=1&&s.bottom>1){i=n,e=s.top;break}}let t=[];for(let n of t_){let s=document.querySelector(n.before);if(!s)continue;let r=document.createElement("div");r.className="fx-win"+(n.short?" fx-s":""),r.dataset.fx=n.fx,r.setAttribute("aria-hidden","true"),n.cap&&(r.innerHTML='<p class="fx-cap">'+n.cap+"</p>"),s.parentNode.insertBefore(r,s),t.push(r)}if(location.hash&&location.hash.length>1){let n=null;try{n=document.querySelector(location.hash)}catch{}n&&n.scrollIntoView()}else if(i){let n=i.getBoundingClientRect().top-e;Math.abs(n)>1&&window.scrollBy({top:n,behavior:"instant"})}return t}function Wo(i,e=128){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),s=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);i.forEach(([a,o])=>s.addColorStop(a,o)),n.fillStyle=s,n.fillRect(0,0,e,e);let r=new me.CanvasTexture(t);return r.colorSpace=me.SRGBColorSpace,r}async function i_(i){let e=new AbortController,t,n=async(h,u=i?"lo":"hi")=>{try{let p=new URL("../models/"+h+"_"+u+".glb",import.meta.url),g=await fetch(p,{signal:e.signal});if(!g.ok)throw new Error("modello non trovato");let b;return b=await g.arrayBuffer(),(await new Fo().setMeshoptDecoder(sd).parseAsync(b,"")).scene}catch{return null}},s=new Promise(h=>{t=setTimeout(()=>{e.abort(),h(null)},i?4e3:6e3)}),r=[n("guantone"),n("ring_top"),n("sacco"),i?null:n("sacco","lo")],[a,o,c,l]=await Promise.all(r.map(h=>Promise.race([h,s])));return clearTimeout(t),{glove:a,ring:o,bag:c,bagLow:l}}var Un=()=>window.scheduler&&window.scheduler.yield?window.scheduler.yield():new Promise(i=>setTimeout(i,0));async function s_(i,e,t,n={}){let s={},r=[],a=(I,R)=>{i.environment&&(I.envMap=i.environment,I.envMapIntensity=R,I.needsUpdate=!0)},o={bags:new me.Group,rings:new me.Group,fit:new me.Group};i.add(o.bags,o.rings,o.fit),s.Z=o;let c=(I,R,U,W,z,ee=0)=>(R.position.set(U,W,z),R.rotation.y=ee,I.add(R),R),l=I=>(I.userData&&I.userData.update&&r.push(I.userData.update),I),h=I=>I<8?o.bags:I<30.5?o.rings:o.fit;c(i,Ut.pavimento(me,{lod:e,gridOpacity:.045}),20,0,0).traverse(I=>{I.isMesh&&I.material&&"envMapIntensity"in I.material&&(I.material.envMapIntensity=.08,I.material.roughnessMap=null,I.material.roughness=1,I.material.needsUpdate=!0)});let f=Wo([[0,"rgba(0,0,0,.9)"],[.55,"rgba(0,0,0,.35)"],[1,"rgba(0,0,0,0)"]]),p=new me.PlaneGeometry(1,1),g=(I,R,U,W,z,ee,q=.8)=>{let Z=new me.Mesh(p,new me.MeshBasicMaterial({map:f,transparent:!0,opacity:q,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));return Z.rotation.x=-Math.PI/2,Z.position.set(R,U+.004,W),Z.scale.set(z,ee,1),Z.renderOrder=2,I.add(Z),Z};await Un();let b=new me.Mesh(new me.PlaneGeometry(90,9),new me.MeshStandardMaterial({color:461064,roughness:.92}));b.position.set(20,4.5,-8.5),b.receiveShadow=!0,i.add(b);let m=Ut.neon(me,{length:3.6}),d=Ut.neon(me,{length:2.2});for(let I=-6;I<=46;I+=6.5)c(h(I),m.clone(),I,3.4,-8.42);for(let I of[-9.2,8.2,23.2,38.5]){let R=d.clone();R.rotation.z=Math.PI/2,c(h(I),R,I,1.9,-8.42)}await Un(),s.bagPivot=new me.Group,s.bagPivot.position.set(Bd.x,kd,Bd.z),o.bags.add(s.bagPivot);let _=l(Ut.sacco(me,{lod:e,model:n.bag}));_.position.set(0,-kd,0),s.bagPivot.add(_),_.traverse(I=>{I.isMesh&&I.material.map&&I.material.clearcoat!==void 0&&a(I.material,1.4)});let v=n.bag&&t?_:Ut.sacco(me,{lod:"low",model:n.bagLow||null});[[-4.6,-3.3],[-2.9,-2.9],[-1.4,-3.5],[1.7,-3.1],[3.3,-3.6],[4.9,-2.8],[-3.7,-5.6],[.4,-5.9],[3.9,-5.7]].forEach(([I,R],U)=>c(o.bags,v.clone(),I,0,R,U*1.3)),await Un();let x;if(n.glove){let I=n.glove;I.quaternion.setFromRotationMatrix(new me.Matrix4().makeBasis(new me.Vector3(-1,0,0),new me.Vector3(0,0,1),new me.Vector3(0,1,0))),I.scale.setScalar(.082),I.traverse(R=>{R.isMesh&&(R.castShadow=!0,R.receiveShadow=!0,R.material.name==="parte_de_adentro"&&(R.material.color.set(263172),R.material.roughness=1))}),x=R=>{let U=new me.Group;return U.add(I.clone()),R&&(U.scale.x=-1),U}}else{let I=Ut.guantone(me,{lod:e});x=R=>{let U=I.clone();return R||(U.scale.x=-1),U}}s.glove=new me.Group,s.glove.add(x(!0)),s.glove.scale.setScalar(1.2),o.bags.add(s.glove);let T=Wo([[0,"rgba(230,235,228,.55)"],[.5,"rgba(200,210,198,.18)"],[1,"rgba(200,210,198,0)"]],64);s.puff=Array.from({length:t?6:10},(I,R)=>{let U=new me.Sprite(new me.SpriteMaterial({map:T,transparent:!0,opacity:0,depthWrite:!1})),W=R*2.399;return U.userData.d=new me.Vector3(Math.cos(W)*.9,Math.sin(W)*.9+.15,.25+R%3*.2),U.visible=!1,o.bags.add(U),U}),await Un();let w=[];s.later=w,w.push(()=>{let I=Ut.ring(me,{lod:e,model:n.ring});return s.rings=Fd.map((R,U)=>c(o.rings,U?I.clone():I,R,0,Od[U],U===1?Math.PI/2:0)),o.rings}),await Un();let A=I=>(I.traverse(R=>{R.isMesh&&R.material&&R.material.emissiveIntensity&&(R.material.emissiveIntensity=0)}),I);[[3800852,33.75,.95,1],[14277081,34.2,.72,.9],[3800852,34.62,.9,1.08],[1710618,35,.6,.95]].forEach(([I,R,U,W],z)=>w.push(()=>(c(o.fit,A(Ut.kettlebell(me,{color:I,lod:e})),R,0,U,z*.7+.3).scale.setScalar(W),g(o.fit,R,0,U,.42*W,.42*W),z===3?o.fit:null))),w.push(()=>{c(o.fit,A(Ut.manubri(me,{lod:e})),35.3,0,.1,.5),g(o.fit,35.3,0,.1,.9,.6,.7)}),w.push(()=>{let I=l(Ut.anelli(me,{lod:e}));c(o.fit,I,34.25,-.45,-1.2,-.2),c(o.fit,I.clone(),35.7,-.3,-2,.25)}),w.push(()=>{Ut.rack&&(c(o.fit,Ut.rack(me,{lod:e}),37.2,0,-1.55,-.18),g(o.fit,37.2,0,-1.55,3.2,1.3,.6));let I=new me.Mesh(new me.BoxGeometry(8,3.4,.12),new me.MeshStandardMaterial({color:790029,roughness:.75}));I.position.set(34.6,1.7,-3.3),I.receiveShadow=!0,o.fit.add(I),c(o.fit,m.clone(),34.9,2.75,-3.22);{let R=d.clone();R.rotation.z=Math.PI/2,c(o.fit,R,31.9,1.5,-3.22)}return o.fit}),await Un(),s.story={load(){},setLit(){}},o.cor=new me.Group,i.add(o.cor),w.push(()=>{let I=cd({mobile:t,softTex:Wo});return o.cor.add(I.group),s.story=I,o.cor}),await Un(),Ut.trofei&&w.push(()=>{let I=Ut.trofei(me,{lod:e});return c(o.rings,I,Fd[2]+2.42,.9,Od[2]+2.42),s.trofei=I,I.traverse(R=>{R.isMesh&&R.material.metalness>.5&&(a(R.material,t?.3:.55),t&&(R.material.roughness=Math.max(R.material.roughness,.5)))}),I.userData.update&&r.push(R=>{s.u>Qt.sale&&s.u<Qt.esce+1&&I.userData.update(R)}),I}),Ut.gong&&w.push(()=>{let I=l(Ut.gong(me,{lod:e}));return c(o.rings,I,29.3,0,3),I.userData.redrawDisplay&&document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>I.userData.redrawDisplay()),g(o.rings,29.3,0,3,1.1,.9,.7),I}),t||(s.tspot=new me.SpotLight(16774364,0,7,.36,.8,1.4),s.tspot.position.set(27.9,4.4,-.1),s.tspot.target.position.set(29,1.15,1),i.add(s.tspot,s.tspot.target)),await Un();let C=.9;s.pair=Zr.map(([I,R,U],W)=>{let z=new me.Group;return z.add(x(W===0)),z.position.set(I,C+.074,R),z.rotation.set(0,U,W?.06:-.04),o.rings.add(z),g(o.rings,I,C,R,.5,.42,.85),z});let M=[(Zr[0][0]+Zr[1][0])/2,(Zr[0][1]+Zr[1][1])/2];s.spot=new me.SpotLight(15925232,22,14,.2,1,1.6),s.spot.position.set(M[0]-.1,6.4,M[1]+.3),s.spot.target.position.set(M[0],C,M[1]),i.add(s.spot,s.spot.target),t||(s.spot.castShadow=!0,s.spot.shadow.mapSize.set(1024,1024),s.spot.shadow.bias=-6e-4,s.spot.shadow.camera.near=2,s.spot.shadow.camera.far=9,s.spot.shadow.autoUpdate=!1);let y=(()=>{let I=document.createElement("canvas");I.width=4,I.height=128;let R=I.getContext("2d"),U=R.createLinearGradient(0,0,0,128);return U.addColorStop(0,"rgba(255,255,255,.75)"),U.addColorStop(1,"rgba(255,255,255,0)"),R.fillStyle=U,R.fillRect(0,0,4,128),new me.CanvasTexture(I)})();if(s.cone=new me.Mesh(new me.ConeGeometry(1.25,5.5,40,1,!0),new me.MeshBasicMaterial({map:y,color:12582832,transparent:!0,opacity:.1,depthWrite:!1,side:me.DoubleSide,blending:me.AdditiveBlending})),s.cone.position.set(M[0],C+2.75,M[1]),o.rings.add(s.cone),!t){let R=new Float32Array(420),U=7,W=()=>(U=U*16807%2147483647)/2147483647;for(let ee=0;ee<140;ee++){let q=W(),Z=Math.sqrt(W())*1.15*(.12+.88*q),fe=W()*6.2832;R[ee*3]=Math.cos(fe)*Z,R[ee*3+1]=2.6-q*2.55,R[ee*3+2]=Math.sin(fe)*Z}let z=new me.BufferGeometry;z.setAttribute("position",new me.BufferAttribute(R,3)),s.dust=new me.Points(z,new me.PointsMaterial({map:Wo([[0,"rgba(255,255,255,1)"],[1,"rgba(255,255,255,0)"]],32),color:14221264,size:.007,transparent:!0,opacity:0,depthWrite:!1,blending:me.AdditiveBlending})),s.dust.position.set(M[0],C,M[1]),o.rings.add(s.dust)}if(await Un(),!t){let I=new me.PointLight(ji,6,9,1.8);I.position.set(-1.6,2.4,-2.2),i.add(I);let R=new me.PointLight(ji,6,9,1.8);R.position.set(35.6,2.3,-2.4),i.add(R)}let D=new me.SpotLight(16777215,14,2.45,.4,.9,1.2);return D.position.set(1,2.1,1.6),D.target.position.set(0,1.45,.15),i.add(D,D.target),s.tick=r,s}async function r_(){if(matchMedia("(prefers-reduced-motion: reduce)").matches||navigator.connection&&navigator.connection.saveData)return;let i=/[?&]fxforce/.test(location.search),e=matchMedia("(max-width: 900px), (hover: none)").matches,t=document.documentElement,n=document.createElement("canvas");n.className="fx-world",n.setAttribute("aria-hidden","true");let s,r=[],a=!1,o=()=>{a=!0,t.classList.remove("fx-on","fx-m","cv-all"),r.forEach(S=>S.remove()),n.remove(),window.ScrollTrigger&&window.ScrollTrigger.refresh()};try{s=ld(n,{mobile:e,strict:!i}),s.info.autoReset=!1}catch{return}let c=await i_(e);window.__fxModels={guantone:!!c.glove,ring:!!c.ring,sacco:!!c.bag},window.__fxGlove=c.glove?"glb":"codice";let l,h,u,f,p=null,g=null,b=async S=>{try{s.setRenderTarget(p?p.readBuffer:null);let G=s.compileAsync(S,f,l);s.setRenderTarget(null),await Promise.race([G,new Promise(F=>setTimeout(F,2500))])}catch{try{s.setRenderTarget(null)}catch{}}};try{if(l=new me.Scene,l.background=new me.Color(197892),h=hd(l,s,{mobile:e,floor:!1}),h.key.intensity=1.7,l.environmentIntensity=.75,e?l.remove(h.rim):h.rim.intensity=.4,u=await s_(l,e?"low":"high",e,c),i&&(window.__fxKeys=Qr.map(S=>[S.sel||null,S.at==null?.5:S.at,S.id])),i&&(window.__fxDbg=()=>{let S=G=>{let F=new me.Box3().setFromObject(G);return[F.min.toArray().map(K=>+K.toFixed(3)),F.max.toArray().map(K=>+K.toFixed(3))]};return{glove:S(u.glove),gpos:u.glove.position.toArray(),bag:S(u.bagPivot.children[0].children[0]),rot:u.bagPivot.rotation.x}}),f=new me.PerspectiveCamera(36,1,.1,140),!e){let S=new me.WebGLRenderTarget(2,2,{type:me.HalfFloatType,samples:4});p=new Do(s,S),p.addPass(new No(l,f)),g=new Ys(new me.Vector2(256,256),.4,.5,1.6),p.addPass(g),p.addPass(new Uo)}await b(l)}catch(S){console.error(S);try{s.dispose(),s.forceContextLoss()}catch{}return}document.body.appendChild(n),t.classList.add("fx-on","cv-all"),e&&t.classList.add("fx-m"),r=n_(),window.ScrollTrigger&&window.ScrollTrigger.refresh&&requestAnimationFrame(()=>window.ScrollTrigger.refresh());let m=!1,d=0;n.addEventListener("webglcontextlost",S=>{S.preventDefault(),m=!0,d=performance.now(),n.style.opacity="0"}),n.addEventListener("webglcontextrestored",()=>{m=!1,Ce=0});let _=!1,v=0,x=0,T=!0;function w(){let S=n.clientWidth,G=n.clientHeight;S===v&&G===x||(v=S,x=G,_=v/x<.85,s.setSize(v,x,!1),f.aspect=v/x,T=!0,p&&(p.setPixelRatio(s.getPixelRatio()),p.setSize(v,x)))}let A,C,M;function y(){M=Qr.map(S=>Object.assign({},S,_&&S.p?S.p:{})),A=new me.CatmullRomCurve3(M.map(S=>new me.Vector3(...S.pos)),!1,"centripetal"),C=new me.CatmullRomCurve3(M.map(S=>new me.Vector3(...S.tgt)),!1,"centripetal")}let D=document.getElementById("home"),I=[],R=null,U=1;function W(){T=!1,R!==_&&(R=_,y());let S=window.innerHeight,G=window.scrollY;U=D?D.offsetHeight:S;let F=Qr.map(K=>{if(K.sel===null)return 0;if(!K.sel)return NaN;let N=document.querySelector(K.sel);if(!N)return NaN;let O=N.getBoundingClientRect();return Math.max(0,O.top+G+O.height*K.at-S/2)});for(let K=0;K<F.length;K++)if(isNaN(F[K])){let N=K-1,O=K+1;for(;O<F.length&&isNaN(F[O]);)O++;F[K]=O<F.length?ri(F[N],F[O],1/(O-N)):F[N]+1}for(let K=1;K<F.length;K++)F[K]<=F[K-1]&&(F[K]=F[K-1]+1);I=F}function z(S){if(S<=I[0])return 0;for(let G=1;G<I.length;G++)if(S<=I[G])return G-1+(S-I[G-1])/(I[G]-I[G-1]);return I.length-1}let ee=0;new ResizeObserver(()=>{clearTimeout(ee),ee=setTimeout(()=>{T=!0},150)}).observe(document.body),window.addEventListener("resize",w);let q={x:0,y:0,tx:0,ty:0};e||window.addEventListener("pointermove",S=>{q.tx=S.clientX/innerWidth*2-1,q.ty=S.clientY/innerHeight*2-1},{passive:!0}),document.addEventListener("visibilitychange",()=>{fe=performance.now()});let Z=0,fe=performance.now(),Ce=0,pe=0,re=-1,Y=0,$=-1,ue=-1,X={a:0,v:0},te=0,be=0,Te=9,ge=0,j=new me.Vector3,J=new me.Vector3,E=new me.Vector3,ye=Qr.length-1,ce={u:0,vis:0,calls:0,tris:0};window.__fx=ce;let ie=(S,G,F)=>ri(M[F][S],M[Math.min(ye,F+1)][S],G),oe=Qt.finale,Me={n:0,s:0};function _e(S){if(a)return;requestAnimationFrame(_e);let G=Math.min(.05,(S-fe)/1e3);fe=S;let F=S/1e3;if(pe++,document.hidden)return;if(m){S-d>4e3&&o();return}T&&W();let K=window.scrollY;if(Y=K===re?Y+G:0,K!==re&&D&&K<U*1.2){let ut=+qt(.1,.45,K/U).toFixed(2);if(ut!==$&&($=ut,D.style.setProperty("--fxo",ut)),e){let Pt=+qt(0,.3,K/U).toFixed(2);Pt!==ue&&(ue=Pt,D.style.setProperty("--fxh",Pt))}}re=K;let N=window.FX_U!=null,O=N?window.FX_U:z(K);if(N&&(Ce=1,n.style.opacity="1",window.__fxDone===O))return;Z+=(O-Z)*(1-Math.exp(-G*(N?60:5.5)));let k=Math.min(ye-1,Math.floor(Z)),H=qt(0,1,Z-k),Ae=ie("vis",H,k);Ce<1&&(Ce=Math.min(1,Ce+G*1.6),n.style.opacity=Ce.toFixed(3));let ae=Math.abs(Z-O)<.002&&Y>1.2;if(ae&&!N&&pe%(Ae<.35?4:e?2:1))return;s.info.reset(),e&&!ae&&Me.n>=0&&(Me.s+=G,++Me.n>=40&&(Me.s/Me.n>.026&&s.getPixelRatio()>1&&(s.setPixelRatio(1),s.setSize(v,x,!1)),Me.n=-1)),u.Z.bags.visible=Z<4.7,u.Z.rings.visible=Z>2.7,u.u=Z,u.Z.fit.visible=Z>4.7&&Z<oe+.4&&!(Z>Qt.campioni-.5&&Z<Qt.esce),u.Z.cor.visible=Z>Qt.fitness-.6&&Z<Qt.campioni-.15,Z>Qt.fitness-.6&&u.story.load(),u.story.setLit(qt(Qt.cornici-.45,Qt.famiglia-.15,Z)),u.tspot&&(u.tspot.intensity=40*qt(Qt.gallery+.3,Qt.campioni-.1,Z)*(1-qt(Qt.risultati+.2,Qt.esce+.3,Z)));let de=qt(.35,1.25,Z),Le=qt(.7,1.45,Z),Ee=qt(1.45,Jr,Z),Ie=qt(2.05,2.7,Z),Pe=qt(Jr-.1,Jr,Z)*(1-qt(2.05,2.55,Z));be<Jr&&Z>=Jr&&(X.v+=.8,te=1,Te=0,ge=1),be=Z,X.v+=(-28*X.a-3*X.v)*G,X.a+=X.v*G;let Se=.03*Pe,Ue=Math.max(Se+X.a*.16,Se-.05*(1-Pe));u.bagPivot.rotation.x=Ue,ge*=Math.exp(-G*7),u.bagPivot.scale.set(1+.04*ge,1,1-.08*ge);let B=u.glove,we=1-de;B.position.set(ri(0,.02,de),1.45+Math.sin(F*1.1)*.012*we-.03*de,ri(.3,.58,Le)-.88*Ee*Ee+.38*Ie-(Ue-Se)*1.45*Pe),B.rotation.order="YXZ",B.rotation.set(ri(-1.25,0,de)+.22*Le*(1-Ee),ri(3+Math.sin(F*.5)*.16,Math.PI,de)+$v*Ee,ri(.12,0,de)+e_*Ee),B.scale.setScalar(1.2*(1-qt(2.3,2.85,Z))),te*=Math.exp(-G*9),Te+=G;let Q=Te/.45;for(let ut of u.puff){if(Q>=1){ut.visible=!1;continue}ut.visible=!0,ut.position.set(0,1.42,-.4).addScaledVector(ut.userData.d,.03+Q*.3);let Pt=.03+Q*.13;ut.scale.set(Pt,Pt,1),ut.material.opacity=(1-Q)*(1-Q)*.6}for(let ut of u.tick)ut(F);A.getPoint(qh(Z/ye,0,1),j),C.getPoint(qh(Z/ye,0,1),J),q.x+=(q.tx-q.x)*.05,q.y+=(q.ty-q.y)*.05;let he=j.distanceTo(J);E.subVectors(j,J).cross(f.up).normalize(),j.addScaledVector(E,q.x*he*.035),j.y-=q.y*he*.02,j.x+=Math.sin(F*.31)*he*.006,j.y+=Math.sin(F*.23+1)*he*.004,te>.01&&(j.x+=Math.sin(F*90)*.014*te,j.y+=Math.cos(F*70)*.012*te,j.addScaledVector(E.subVectors(J,j).normalize(),.06*te)),f.position.copy(j),f.lookAt(J),f.fov=ie("fov",H,k),f.updateProjectionMatrix(),f.projectionMatrix.elements[8]=-ie("sx",H,k),f.projectionMatrix.elements[9]=-ie("sy",H,k),f.projectionMatrixInverse.copy(f.projectionMatrix).invert();let De=qt(oe-1.6,oe-.3,Z)*(1-qt(oe+1,oe+2,Z));h.key.intensity=ri(1.7,.3,De),u.cone.material.opacity=.34*De,u.dust&&(u.dust.material.opacity=.5*De,u.dust.rotation.y=F*.03);let le=he<4?3:he<9?7:14,Re=h.key.shadow.camera;Re.right!==le&&(Re.left=-le,Re.right=le,Re.top=le,Re.bottom=-le,Re.updateProjectionMatrix());let ze=2*le/2048,$e=Math.round(J.x/ze)*ze,Je=Math.round(J.z/ze)*ze;h.key.target.position.set($e,0,Je),h.key.target.updateMatrixWorld(),h.key.position.set($e+4,9,Je+6),u.spot.castShadow&&(u.spot.shadow.needsUpdate=De>.01),g&&(g.strength=ri(.4,.5,De)),p?p.render():s.render(l,f),ce.u=+Z.toFixed(2),ce.vis=+Ae.toFixed(2),ce.calls=s.info.render.calls,ce.tris=s.info.render.triangles,window.__fxDone=N&&Math.abs(Z-O)<.001?O:null}w(),requestAnimationFrame(_e);let P=()=>new Promise(S=>window.requestIdleCallback?requestIdleCallback(()=>S(),{timeout:500}):setTimeout(S,80));for(let S of u.later){if(await P(),a)return;let G=null;try{G=S()}catch(F){console.error(F)}await Un(),G&&await b(G)}window.__fxBuilt=!0}r_();export{r_ as start};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
