var zd=0,jh=1,Gd=2;var _f=1,Hl=2,qn=3,Un=0,kt=1,sn=2,Nn=0,ys=1,As=2,Kh=3,Zh=4,Vd=5,Gi=100,Wd=101,Hd=102,Xd=103,qd=104,Yd=200,jd=201,Kd=202,Zd=203,Tc=204,Cc=205,Jd=206,Qd=207,$d=208,ep=209,tp=210,np=211,ip=212,sp=213,rp=214,Ec=0,Rc=1,Pc=2,Ts=3,Ic=4,Lc=5,Dc=6,Nc=7,yf=0,ap=1,op=2,_i=0,Xl=1,ql=2,Yl=3,Vr=4,cp=5,jl=6,Kl=7,Jh="attached",lp="detached",Mf=300,Cs=301,Es=302,Uc=303,Fc=304,Ao=306,Jn=1e3,jn=1001,Ar=1002,zt=1003,Zl=1004;var xs=1005;var Bt=1006,xr=1007;var pn=1008;var Qn=1009,Sf=1010,wf=1011,Tr=1012,Jl=1013,Wi=1014,Pn=1015,on=1016,Ql=1017,$l=1018,Rs=1020,Af=35902,Tf=1021,Cf=1022,Kt=1023,Ef=1024,Rf=1025,Ms=1026,Ps=1027,eh=1028,th=1029,Pf=1030,nh=1031;var ih=1033,Ua=33776,Fa=33777,Oa=33778,Ba=33779,Oc=35840,Bc=35841,kc=35842,zc=35843,Gc=36196,Vc=37492,Wc=37496,Hc=37808,Xc=37809,qc=37810,Yc=37811,jc=37812,Kc=37813,Zc=37814,Jc=37815,Qc=37816,$c=37817,el=37818,tl=37819,nl=37820,il=37821,ka=36492,sl=36494,rl=36495,If=36283,al=36284,ol=36285,cl=36286;var Is=2300,Ls=2301,Ho=2302,Qh=2400,$h=2401,eu=2402,hp=2500;var Lf=0,To=1,Wr=2,up=3200,fp=3201;var Df=0,dp=1,Dn="",Mt="srgb",Gt="srgb-linear",Co="linear",ct="srgb";var $i=7680;var tu=519,pp=512,mp=513,gp=514,Nf=515,bp=516,xp=517,vp=518,_p=519,ll=35044,Uf=35048;var nu="300 es",Kn=2e3,za=2001,yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],iu=1234567,vr=Math.PI/180,Ds=180/Math.PI;function gn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function At(i,e,t){return Math.max(e,Math.min(t,i))}function sh(i,e){return(i%e+e)%e}function yp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Mp(i,e,t){return i!==e?(t-i)/(e-i):0}function _r(i,e,t){return(1-t)*i+t*e}function Sp(i,e,t,n){return _r(i,e,1-Math.exp(-t*n))}function wp(i,e=1){return e-Math.abs(sh(i,e*2)-e)}function Ap(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Tp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Cp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ep(i,e){return i+Math.random()*(e-i)}function Rp(i){return i*(.5-Math.random())}function Pp(i){i!==void 0&&(iu=i);let e=iu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ip(i){return i*vr}function Lp(i){return i*Ds}function Dp(i){return(i&i-1)===0&&i!==0}function Np(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Up(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fp(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*f,o*l);break;case"YZY":i.set(c*f,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*f,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ff={DEG2RAD:vr,RAD2DEG:Ds,generateUUID:gn,clamp:At,euclideanModulo:sh,mapLinear:yp,inverseLerp:Mp,lerp:_r,damp:Sp,pingpong:wp,smoothstep:Ap,smootherstep:Tp,randInt:Cp,randFloat:Ep,randFloatSpread:Rp,seededRandom:Pp,degToRad:Ip,radToDeg:Lp,isPowerOfTwo:Dp,ceilPowerOfTwo:Np,floorPowerOfTwo:Up,setQuaternionFromProperEuler:Fp,normalize:ht,denormalize:Rn},Ne=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],b=s[0],m=s[3],d=s[6],_=s[1],v=s[4],x=s[7],A=s[2],S=s[5],T=s[8];return r[0]=a*b+o*_+c*A,r[3]=a*m+o*v+c*S,r[6]=a*d+o*x+c*T,r[1]=l*b+h*_+u*A,r[4]=l*m+h*v+u*S,r[7]=l*d+h*x+u*T,r[2]=f*b+p*_+g*A,r[5]=f*m+p*v+g*S,r[8]=f*d+p*x+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*r,p=l*r-a*c,g=t*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=u*b,e[1]=(s*l-h*n)*b,e[2]=(o*n-s*a)*b,e[3]=f*b,e[4]=(h*t-s*c)*b,e[5]=(s*r-o*t)*b,e[6]=p*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xo.makeScale(e,t)),this}rotate(e){return this.premultiply(Xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Xo=new Qe;function Of(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Op(){let i=Cr("canvas");return i.style.display="block",i}var su={};function gr(i){i in su||(su[i]=!0,console.warn(i))}function Bp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function kp(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zp(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var et={enabled:!0,workingColorSpace:Gt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ct&&(i.r=Zn(i.r),i.g=Zn(i.g),i.b=Zn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ct&&(i.r=Ss(i.r),i.g=Ss(i.g),i.b=Ss(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Dn?Co:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ru=[.64,.33,.3,.6,.15,.06],au=[.2126,.7152,.0722],ou=[.3127,.329],cu=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lu=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);et.define({[Gt]:{primaries:ru,whitePoint:ou,transfer:Co,toXYZ:cu,fromXYZ:lu,luminanceCoefficients:au,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:ru,whitePoint:ou,transfer:ct,toXYZ:cu,fromXYZ:lu,luminanceCoefficients:au,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}});var es,hl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{es===void 0&&(es=Cr("canvas")),es.width=e.width,es.height=e.height;let n=es.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Cr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Zn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gp=0,Ga=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=gn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(qo(s[a].image)):r.push(qo(s[a]))}else r=qo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function qo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vp=0,Dt=class i extends yi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=jn,s=jn,r=Bt,a=pn,o=Kt,c=Qn,l=i.DEFAULT_ANISOTROPY,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=gn(),this.name="",this.source=new Ga(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jn:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Ar:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jn:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Ar:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Mf;Dt.DEFAULT_ANISOTROPY=1;var rt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],b=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,x=(p+1)/2,A=(d+1)/2,S=(h+f)/4,T=(u+b)/4,C=(g+m)/4;return v>x&&v>A?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=S/n,r=T/n):x>A?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=C/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=T/r,s=C/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-b)/_,this.z=(f-h)/_,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ul=class extends yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Dt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ga(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nt=class extends ul{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Va=class extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var fl=class extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=b;return}if(u!==b||c!==f||l!==p||h!==g){let m=1-o,d=c*f+l*p+h*g+u*b,_=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){let A=Math.sqrt(v),S=Math.atan2(A,d*_);m=Math.sin(m*S)/A,o=Math.sin(o*S)/A}let x=o*_;if(c=c*m+f*x,l=l*m+p*x,h=h*m+g*x,u=u*m+b*x,m===1-o){let A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*p-l*f,e[t+1]=c*g+h*f+l*u-o*p,e[t+2]=l*g+h*p+o*f-c*u,e[t+3]=h*g-o*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yo.copy(this).projectOnVector(e),this.sub(Yo)}reflect(e){return this.sub(Yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yo=new W,hu=new rn,Zt=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),na.copy(n.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),ia.subVectors(this.max,rr),ts.subVectors(e.a,rr),ns.subVectors(e.b,rr),is.subVectors(e.c,rr),fi.subVectors(ns,ts),di.subVectors(is,ns),Ni.subVectors(ts,is);let t=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Ni.z,Ni.y,fi.z,0,-fi.x,di.z,0,-di.x,Ni.z,0,-Ni.x,-fi.y,fi.x,0,-di.y,di.x,0,-Ni.y,Ni.x,0];return!jo(t,ts,ns,is,ia)||(t=[1,0,0,0,1,0,0,0,1],!jo(t,ts,ns,is,ia))?!1:(sa.crossVectors(fi,di),t=[sa.x,sa.y,sa.z],jo(t,ts,ns,is,ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},zn=[new W,new W,new W,new W,new W,new W,new W,new W],Tn=new W,na=new Zt,ts=new W,ns=new W,is=new W,fi=new W,di=new W,Ni=new W,rr=new W,ia=new W,sa=new W,Ui=new W;function jo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ui.fromArray(i,r);let o=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),c=e.dot(Ui),l=t.dot(Ui),h=n.dot(Ui);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Wp=new Zt,ar=new W,Ko=new W,an=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Wp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);let t=ar.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ar,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(Ko)),this.expandByPoint(ar.copy(e.center).sub(Ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gn=new W,Zo=new W,ra=new W,pi=new W,Jo=new W,aa=new W,Qo=new W,Ns=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Zo.copy(e).add(t).multiplyScalar(.5),ra.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(Zo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ra),o=pi.dot(this.direction),c=-pi.dot(ra),l=pi.lengthSq(),h=Math.abs(1-a*a),u,f,p,g;if(h>0)if(u=a*c-o,f=a*o-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let b=1/h;u*=b,f*=b,p=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Zo).addScaledVector(ra,f),p}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);let n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,n,s,r){Jo.subVectors(t,e),aa.subVectors(n,e),Qo.crossVectors(Jo,aa);let a=this.direction.dot(Qo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pi.subVectors(this.origin,e);let c=o*this.direction.dot(aa.crossVectors(pi,aa));if(c<0)return null;let l=o*this.direction.dot(Jo.cross(pi));if(l<0||c+l>a)return null;let h=-o*pi.dot(Qo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ye=class i{constructor(e,t,n,s,r,a,o,c,l,h,u,f,p,g,b,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,f,p,g,b,m)}set(e,t,n,s,r,a,o,c,l,h,u,f,p,g,b,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=b,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ss.setFromMatrixColumn(e,0).length(),r=1/ss.setFromMatrixColumn(e,1).length(),a=1/ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,p=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=f-b*l,t[9]=-o*c,t[2]=b-f*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*h,p=c*u,g=l*h,b=l*u;t[0]=f+b*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=b+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*h,p=c*u,g=l*h,b=l*u;t[0]=f-b*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=b-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*h,p=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=g*l-p,t[8]=f*l+b,t[1]=c*u,t[5]=b*l+f,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,p=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=b-f*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+g,t[10]=f-b*u}else if(e.order==="XZY"){let f=a*c,p=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+b,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=b*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hp,e,Xp)}lookAt(e,t,n){let s=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),mi.crossVectors(n,tn),mi.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),mi.crossVectors(n,tn)),mi.normalize(),oa.crossVectors(tn,mi),s[0]=mi.x,s[4]=oa.x,s[8]=tn.x,s[1]=mi.y,s[5]=oa.y,s[9]=tn.y,s[2]=mi.z,s[6]=oa.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],b=n[6],m=n[10],d=n[14],_=n[3],v=n[7],x=n[11],A=n[15],S=s[0],T=s[4],C=s[8],M=s[12],y=s[1],N=s[5],I=s[9],E=s[13],U=s[2],V=s[6],G=s[10],$=s[14],Y=s[3],te=s[7],ee=s[11],Re=s[15];return r[0]=a*S+o*y+c*U+l*Y,r[4]=a*T+o*N+c*V+l*te,r[8]=a*C+o*I+c*G+l*ee,r[12]=a*M+o*E+c*$+l*Re,r[1]=h*S+u*y+f*U+p*Y,r[5]=h*T+u*N+f*V+p*te,r[9]=h*C+u*I+f*G+p*ee,r[13]=h*M+u*E+f*$+p*Re,r[2]=g*S+b*y+m*U+d*Y,r[6]=g*T+b*N+m*V+d*te,r[10]=g*C+b*I+m*G+d*ee,r[14]=g*M+b*E+m*$+d*Re,r[3]=_*S+v*y+x*U+A*Y,r[7]=_*T+v*N+x*V+A*te,r[11]=_*C+v*I+x*G+A*ee,r[15]=_*M+v*E+x*$+A*Re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],b=e[7],m=e[11],d=e[15];return g*(+r*c*u-s*l*u-r*o*f+n*l*f+s*o*p-n*c*p)+b*(+t*c*p-t*l*f+r*a*f-s*a*p+s*l*h-r*c*h)+m*(+t*l*u-t*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+d*(-s*o*h-t*c*u+t*o*f+s*a*u-n*a*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],b=e[13],m=e[14],d=e[15],_=u*m*l-b*f*l+b*c*p-o*m*p-u*c*d+o*f*d,v=g*f*l-h*m*l-g*c*p+a*m*p+h*c*d-a*f*d,x=h*b*l-g*u*l+g*o*p-a*b*p-h*o*d+a*u*d,A=g*u*c-h*b*c-g*o*f+a*b*f+h*o*m-a*u*m,S=t*_+n*v+s*x+r*A;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/S;return e[0]=_*T,e[1]=(b*f*r-u*m*r-b*s*p+n*m*p+u*s*d-n*f*d)*T,e[2]=(o*m*r-b*c*r+b*s*l-n*m*l-o*s*d+n*c*d)*T,e[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*p-n*c*p)*T,e[4]=v*T,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*d+t*f*d)*T,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*d-t*c*d)*T,e[7]=(a*f*r-h*c*r+h*s*l-t*f*l-a*s*p+t*c*p)*T,e[8]=x*T,e[9]=(g*u*r-h*b*r-g*n*p+t*b*p+h*n*d-t*u*d)*T,e[10]=(a*b*r-g*o*r+g*n*l-t*b*l-a*n*d+t*o*d)*T,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*p-t*o*p)*T,e[12]=A*T,e[13]=(h*b*s-g*u*s+g*n*f-t*b*f-h*n*m+t*u*m)*T,e[14]=(g*o*s-a*b*s-g*n*c+t*b*c+a*n*m-t*o*m)*T,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*f+t*o*f)*T,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,f=r*l,p=r*h,g=r*u,b=a*h,m=a*u,d=o*u,_=c*l,v=c*h,x=c*u,A=n.x,S=n.y,T=n.z;return s[0]=(1-(b+d))*A,s[1]=(p+x)*A,s[2]=(g-v)*A,s[3]=0,s[4]=(p-x)*S,s[5]=(1-(f+d))*S,s[6]=(m+_)*S,s[7]=0,s[8]=(g+v)*T,s[9]=(m-_)*T,s[10]=(1-(f+b))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ss.set(s[0],s[1],s[2]).length(),a=ss.set(s[4],s[5],s[6]).length(),o=ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Cn.copy(this);let l=1/r,h=1/a,u=1/o;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,t.setFromRotationMatrix(Cn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Kn){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,g;if(o===Kn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===za)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Kn){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(a-r),f=(t+e)*l,p=(n+s)*h,g,b;if(o===Kn)g=(a+r)*u,b=-2*u;else if(o===za)g=r*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ss=new W,Cn=new Ye,Hp=new W(0,0,0),Xp=new W(1,1,1),mi=new W,oa=new W,tn=new W,uu=new Ye,fu=new rn,bn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fu.setFromEuler(this),this.setFromQuaternion(fu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";var Wa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qp=0,du=new W,rs=new rn,Vn=new Ye,ca=new W,or=new W,Yp=new W,jp=new rn,pu=new W(1,0,0),mu=new W(0,1,0),gu=new W(0,0,1),bu={type:"added"},Kp={type:"removed"},as={type:"childadded",child:null},$o={type:"childremoved",child:null},gt=class i extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new W,t=new bn,n=new rn,s=new W(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Qe}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(pu,e)}rotateY(e){return this.rotateOnAxis(mu,e)}rotateZ(e){return this.rotateOnAxis(gu,e)}translateOnAxis(e,t){return du.copy(e).applyQuaternion(this.quaternion),this.position.add(du.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pu,e)}translateY(e){return this.translateOnAxis(mu,e)}translateZ(e){return this.translateOnAxis(gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ca.copy(e):ca.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(or,ca,this.up):Vn.lookAt(ca,or,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(Vn),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bu),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kp),$o.child=e,this.dispatchEvent($o),$o.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bu),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,Yp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,jp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};gt.DEFAULT_UP=new W(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=new W,Wn=new W,ec=new W,Hn=new W,os=new W,cs=new W,xu=new W,tc=new W,nc=new W,ic=new W,sc=new rt,rc=new rt,ac=new rt,xi=class i{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),En.subVectors(e,t),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){En.subVectors(s,t),Wn.subVectors(n,t),ec.subVectors(e,t);let a=En.dot(En),o=En.dot(Wn),c=En.dot(ec),l=Wn.dot(Wn),h=Wn.dot(ec),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Hn.x),c.addScaledVector(a,Hn.y),c.addScaledVector(o,Hn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return sc.setScalar(0),rc.setScalar(0),ac.setScalar(0),sc.fromBufferAttribute(e,t),rc.fromBufferAttribute(e,n),ac.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(sc,r.x),a.addScaledVector(rc,r.y),a.addScaledVector(ac,r.z),a}static isFrontFacing(e,t,n,s){return En.subVectors(n,t),Wn.subVectors(e,t),En.cross(Wn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),En.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;os.subVectors(s,n),cs.subVectors(r,n),tc.subVectors(e,n);let c=os.dot(tc),l=cs.dot(tc);if(c<=0&&l<=0)return t.copy(n);nc.subVectors(e,s);let h=os.dot(nc),u=cs.dot(nc);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(os,a);ic.subVectors(e,r);let p=os.dot(ic),g=cs.dot(ic);if(g>=0&&p<=g)return t.copy(r);let b=p*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(cs,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return xu.subVectors(r,s),o=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(xu,o);let d=1/(m+b+f);return a=b*d,o=f*d,t.copy(n).addScaledVector(os,a).addScaledVector(cs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},la={h:0,s:0,l:0};function oc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var He=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=sh(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=oc(a,r,e+1/3),this.g=oc(a,r,e),this.b=oc(a,r,e-1/3)}return et.toWorkingColorSpace(this,s),this}setStyle(e,t=Mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){let n=Bf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return et.fromWorkingColorSpace(Ot.copy(this),e),Math.round(At(Ot.r*255,0,255))*65536+Math.round(At(Ot.g*255,0,255))*256+Math.round(At(Ot.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Ot.copy(this),t);let n=Ot.r,s=Ot.g,r=Ot.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Mt){et.fromWorkingColorSpace(Ot.copy(this),e);let t=Ot.r,n=Ot.g,s=Ot.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(la);let n=_r(gi.h,la.h,t),s=_r(gi.s,la.s,t),r=_r(gi.l,la.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ot=new He;He.NAMES=Bf;var Zp=0,Jt=class extends yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=gn(),this.name="",this.blending=ys,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tc,this.blendDst=Cc,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tc&&(n.blendSrc=this.blendSrc),this.blendDst!==Cc&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Qt=class extends Jt{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var yt=new W,ha=new Ne,vt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ll,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ha.fromBufferAttribute(this,t),ha.applyMatrix3(e),this.setXY(t,ha.x,ha.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ll&&(e.usage=this.usage),e}};var Ha=class extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Xa=class extends vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nt=class extends vt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Jp=0,dn=new Ye,cc=new gt,ls=new W,nn=new Zt,cr=new Zt,Lt=new W,bt=class i extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Of(e)?Xa:Ha)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return cc.lookAt(e),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(nn.min,cr.min),nn.expandByPoint(Lt),Lt.addVectors(nn.max,cr.max),nn.expandByPoint(Lt)):(nn.expandByPoint(cr.min),nn.expandByPoint(cr.max))}nn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Lt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Lt.fromBufferAttribute(o,l),c&&(ls.fromBufferAttribute(e,l),Lt.add(ls)),s=Math.max(s,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new W,c[C]=new W;let l=new W,h=new W,u=new W,f=new Ne,p=new Ne,g=new Ne,b=new W,m=new W;function d(C,M,y){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),p.sub(f),g.sub(f);let N=1/(p.x*g.y-g.x*p.y);isFinite(N)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(N),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(N),o[C].add(b),o[M].add(b),o[y].add(b),c[C].add(m),c[M].add(m),c[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,M=_.length;C<M;++C){let y=_[C],N=y.start,I=y.count;for(let E=N,U=N+I;E<U;E+=3)d(e.getX(E+0),e.getX(E+1),e.getX(E+2))}let v=new W,x=new W,A=new W,S=new W;function T(C){A.fromBufferAttribute(s,C),S.copy(A);let M=o[C];v.copy(M),v.sub(A.multiplyScalar(A.dot(M))).normalize(),x.crossVectors(S,M);let N=x.dot(c[C])<0?-1:1;a.setXYZW(C,v.x,v.y,v.z,N)}for(let C=0,M=_.length;C<M;++C){let y=_[C],N=y.start,I=y.count;for(let E=N,U=N+I;E<U;E+=3)T(e.getX(E+0)),T(e.getX(E+1)),T(e.getX(E+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new W,r=new W,a=new W,o=new W,c=new W,l=new W,h=new W,u=new W;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),b=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),p=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?p=c[b]*o.data.stride+o.offset:p=c[b]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new vt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},vu=new Ye,Fi=new Ns,ua=new an,_u=new W,fa=new W,da=new W,pa=new W,lc=new W,ma=new W,yu=new W,ga=new W,St=class extends gt{constructor(e=new bt,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ma.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(lc.fromBufferAttribute(u,e),a?ma.addScaledVector(lc,h):ma.addScaledVector(lc.sub(t),h))}t.add(ma)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(r),Fi.copy(e.ray).recast(e.near),!(ua.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(ua,_u)===null||Fi.origin.distanceToSquared(_u)>(e.far-e.near)**2))&&(vu.copy(r).invert(),Fi.copy(e.ray).applyMatrix4(vu),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=f.length;g<b;g++){let m=f[g],d=a[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,A=v;x<A;x+=3){let S=o.getX(x),T=o.getX(x+1),C=o.getX(x+2);s=ba(this,d,e,n,l,h,u,S,T,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let m=g,d=b;m<d;m+=3){let _=o.getX(m),v=o.getX(m+1),x=o.getX(m+2);s=ba(this,a,e,n,l,h,u,_,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=f.length;g<b;g++){let m=f[g],d=a[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,A=v;x<A;x+=3){let S=x,T=x+1,C=x+2;s=ba(this,d,e,n,l,h,u,S,T,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),b=Math.min(c.count,p.start+p.count);for(let m=g,d=b;m<d;m+=3){let _=m,v=m+1,x=m+2;s=ba(this,a,e,n,l,h,u,_,v,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Qp(i,e,t,n,s,r,a,o){let c;if(e.side===kt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Un,o),c===null)return null;ga.copy(o),ga.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ga);return l<t.near||l>t.far?null:{distance:l,point:ga.clone(),object:i}}function ba(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,fa),i.getVertexPosition(c,da),i.getVertexPosition(l,pa);let h=Qp(i,e,t,n,fa,da,pa,yu);if(h){let u=new W;xi.getBarycoord(yu,fa,da,pa,u),s&&(h.uv=xi.getInterpolatedAttribute(s,o,c,l,u,new Ne)),r&&(h.uv1=xi.getInterpolatedAttribute(r,o,c,l,u,new Ne)),a&&(h.normal=xi.getInterpolatedAttribute(a,o,c,l,u,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new W,materialIndex:0};xi.getNormal(fa,da,pa,f.normal),h.face=f,h.barycoord=u}return h}var $n=class i extends bt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(u,2));function g(b,m,d,_,v,x,A,S,T,C,M){let y=x/T,N=A/C,I=x/2,E=A/2,U=S/2,V=T+1,G=C+1,$=0,Y=0,te=new W;for(let ee=0;ee<G;ee++){let Re=ee*N-E;for(let ue=0;ue<V;ue++){let ae=ue*y-I;te[b]=ae*_,te[m]=Re*v,te[d]=U,l.push(te.x,te.y,te.z),te[b]=0,te[m]=0,te[d]=S>0?1:-1,h.push(te.x,te.y,te.z),u.push(ue/T),u.push(1-ee/C),$+=1}}for(let ee=0;ee<C;ee++)for(let Re=0;Re<T;Re++){let ue=f+Re+V*ee,ae=f+Re+V*(ee+1),j=f+(Re+1)+V*(ee+1),J=f+(Re+1)+V*ee;c.push(ue,ae,J),c.push(ae,j,J),Y+=6}o.addGroup(p,Y,M),p+=Y,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Us(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Wt(i){let e={};for(let t=0;t<i.length;t++){let n=Us(i[t]);for(let s in n)e[s]=n[s]}return e}function $p(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function kf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var Ei={clone:Us,merge:Wt},em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_t=class extends Jt{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=em,this.fragmentShader=tm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=$p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},qa=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},bi=new W,Mu=new Ne,Su=new Ne,Tt=class extends qa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,Mu,Su),t.subVectors(Su,Mu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(vr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hs=-90,us=1,dl=class extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Tt(hs,us,e,t);s.layers=this.layers,this.add(s);let r=new Tt(hs,us,e,t);r.layers=this.layers,this.add(r);let a=new Tt(hs,us,e,t);a.layers=this.layers,this.add(a);let o=new Tt(hs,us,e,t);o.layers=this.layers,this.add(o);let c=new Tt(hs,us,e,t);c.layers=this.layers,this.add(c);let l=new Tt(hs,us,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===za)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ya=class extends Dt{constructor(e,t,n,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Cs,super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},pl=class extends Nt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ya(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $n(5,5,5),r=new _t({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:Nn});r.uniforms.tEquirect.value=t;let a=new St(s,r),o=t.minFilter;return t.minFilter===pn&&(t.minFilter=Bt),new dl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},hc=new W,nm=new W,im=new Qe,Yn=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=hc.subVectors(n,t).cross(nm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(hc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||im.getNormalMatrix(e),s=this.coplanarPoint(hc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Oi=new an,xa=new W,Er=class{constructor(e=new Yn,t=new Yn,n=new Yn,s=new Yn,r=new Yn,a=new Yn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],b=s[10],m=s[11],d=s[12],_=s[13],v=s[14],x=s[15];if(n[0].setComponents(c-r,f-l,m-p,x-d).normalize(),n[1].setComponents(c+r,f+l,m+p,x+d).normalize(),n[2].setComponents(c+a,f+h,m+g,x+_).normalize(),n[3].setComponents(c-a,f-h,m-g,x-_).normalize(),n[4].setComponents(c-o,f-u,m-b,x-v).normalize(),t===Kn)n[5].setComponents(c+o,f+u,m+b,x+v).normalize();else if(t===za)n[5].setComponents(o,u,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(e){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(xa.x=s.normal.x>0?e.max.x:e.min.x,xa.y=s.normal.y>0?e.max.y:e.min.y,xa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function zf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function sm(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],b=u[p];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++f,u[f]=b)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let b=u[p];i.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Fs=class i extends bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,f=t/c,p=[],g=[],b=[],m=[];for(let d=0;d<h;d++){let _=d*f-a;for(let v=0;v<l;v++){let x=v*u-r;g.push(x,-_,0),b.push(0,0,1),m.push(v/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let _=0;_<o;_++){let v=_+l*d,x=_+l*(d+1),A=_+1+l*(d+1),S=_+1+l*d;p.push(v,x,S),p.push(x,A,S)}this.setIndex(p),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(b,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},rm=`#ifdef USE_ALPHAHASH
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
}`,$e={alphahash_fragment:rm,alphahash_pars_fragment:am,alphamap_fragment:om,alphamap_pars_fragment:cm,alphatest_fragment:lm,alphatest_pars_fragment:hm,aomap_fragment:um,aomap_pars_fragment:fm,batching_pars_vertex:dm,batching_vertex:pm,begin_vertex:mm,beginnormal_vertex:gm,bsdfs:bm,iridescence_fragment:xm,bumpmap_pars_fragment:vm,clipping_planes_fragment:_m,clipping_planes_pars_fragment:ym,clipping_planes_pars_vertex:Mm,clipping_planes_vertex:Sm,color_fragment:wm,color_pars_fragment:Am,color_pars_vertex:Tm,color_vertex:Cm,common:Em,cube_uv_reflection_fragment:Rm,defaultnormal_vertex:Pm,displacementmap_pars_vertex:Im,displacementmap_vertex:Lm,emissivemap_fragment:Dm,emissivemap_pars_fragment:Nm,colorspace_fragment:Um,colorspace_pars_fragment:Fm,envmap_fragment:Om,envmap_common_pars_fragment:Bm,envmap_pars_fragment:km,envmap_pars_vertex:zm,envmap_physical_pars_fragment:Jm,envmap_vertex:Gm,fog_vertex:Vm,fog_pars_vertex:Wm,fog_fragment:Hm,fog_pars_fragment:Xm,gradientmap_pars_fragment:qm,lightmap_pars_fragment:Ym,lights_lambert_fragment:jm,lights_lambert_pars_fragment:Km,lights_pars_begin:Zm,lights_toon_fragment:Qm,lights_toon_pars_fragment:$m,lights_phong_fragment:e0,lights_phong_pars_fragment:t0,lights_physical_fragment:n0,lights_physical_pars_fragment:i0,lights_fragment_begin:s0,lights_fragment_maps:r0,lights_fragment_end:a0,logdepthbuf_fragment:o0,logdepthbuf_pars_fragment:c0,logdepthbuf_pars_vertex:l0,logdepthbuf_vertex:h0,map_fragment:u0,map_pars_fragment:f0,map_particle_fragment:d0,map_particle_pars_fragment:p0,metalnessmap_fragment:m0,metalnessmap_pars_fragment:g0,morphinstance_vertex:b0,morphcolor_vertex:x0,morphnormal_vertex:v0,morphtarget_pars_vertex:_0,morphtarget_vertex:y0,normal_fragment_begin:M0,normal_fragment_maps:S0,normal_pars_fragment:w0,normal_pars_vertex:A0,normal_vertex:T0,normalmap_pars_fragment:C0,clearcoat_normal_fragment_begin:E0,clearcoat_normal_fragment_maps:R0,clearcoat_pars_fragment:P0,iridescence_pars_fragment:I0,opaque_fragment:L0,packing:D0,premultiplied_alpha_fragment:N0,project_vertex:U0,dithering_fragment:F0,dithering_pars_fragment:O0,roughnessmap_fragment:B0,roughnessmap_pars_fragment:k0,shadowmap_pars_fragment:z0,shadowmap_pars_vertex:G0,shadowmap_vertex:V0,shadowmask_pars_fragment:W0,skinbase_vertex:H0,skinning_pars_vertex:X0,skinning_vertex:q0,skinnormal_vertex:Y0,specularmap_fragment:j0,specularmap_pars_fragment:K0,tonemapping_fragment:Z0,tonemapping_pars_fragment:J0,transmission_fragment:Q0,transmission_pars_fragment:$0,uv_pars_fragment:eg,uv_pars_vertex:tg,uv_vertex:ng,worldpos_vertex:ig,background_vert:sg,background_frag:rg,backgroundCube_vert:ag,backgroundCube_frag:og,cube_vert:cg,cube_frag:lg,depth_vert:hg,depth_frag:ug,distanceRGBA_vert:fg,distanceRGBA_frag:dg,equirect_vert:pg,equirect_frag:mg,linedashed_vert:gg,linedashed_frag:bg,meshbasic_vert:xg,meshbasic_frag:vg,meshlambert_vert:_g,meshlambert_frag:yg,meshmatcap_vert:Mg,meshmatcap_frag:Sg,meshnormal_vert:wg,meshnormal_frag:Ag,meshphong_vert:Tg,meshphong_frag:Cg,meshphysical_vert:Eg,meshphysical_frag:Rg,meshtoon_vert:Pg,meshtoon_frag:Ig,points_vert:Lg,points_frag:Dg,shadow_vert:Ng,shadow_frag:Ug,sprite_vert:Fg,sprite_frag:Og},Be={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Ln={basic:{uniforms:Wt([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Wt([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new He(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Wt([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Wt([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Wt([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new He(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Wt([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Wt([Be.points,Be.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Wt([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Wt([Be.common,Be.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Wt([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Wt([Be.sprite,Be.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Wt([Be.common,Be.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Wt([Be.lights,Be.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Ln.physical={uniforms:Wt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var va={r:0,b:0,g:0},Bi=new bn,Bg=new Ye;function kg(i,e,t,n,s,r,a){let o=new He(0),c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function b(_){let v=!1,x=g(_);x===null?d(o,c):x&&x.isColor&&(d(x,1),v=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,v){let x=g(v);x&&(x.isCubeTexture||x.mapping===Ao)?(h===void 0&&(h=new St(new $n(1,1,1),new _t({name:"BackgroundCubeMaterial",uniforms:Us(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Bi.copy(v.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Bg.makeRotationFromEuler(Bi)),h.material.toneMapped=et.getTransfer(x.colorSpace)!==ct,(u!==x||f!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,p=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new St(new Fs(2,2),new _t({name:"BackgroundMaterial",uniforms:Us(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=et.getTransfer(x.colorSpace)!==ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,p=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function d(_,v){_.getRGB(va,kf(i)),n.buffers.color.setClear(va.r,va.g,va.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),c=v,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,d(o,c)},render:b,addToRenderList:m}}function zg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(y,N,I,E,U){let V=!1,G=u(E,I,N);r!==G&&(r=G,l(r.object)),V=p(y,E,I,U),V&&g(y,E,I,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,x(y,N,I,E),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,N,I){let E=I.wireframe===!0,U=n[y.id];U===void 0&&(U={},n[y.id]=U);let V=U[N.id];V===void 0&&(V={},U[N.id]=V);let G=V[E];return G===void 0&&(G=f(c()),V[E]=G),G}function f(y){let N=[],I=[],E=[];for(let U=0;U<t;U++)N[U]=0,I[U]=0,E[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:I,attributeDivisors:E,object:y,attributes:{},index:null}}function p(y,N,I,E){let U=r.attributes,V=N.attributes,G=0,$=I.getAttributes();for(let Y in $)if($[Y].location>=0){let ee=U[Y],Re=V[Y];if(Re===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(Re=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(Re=y.instanceColor)),ee===void 0||ee.attribute!==Re||Re&&ee.data!==Re.data)return!0;G++}return r.attributesNum!==G||r.index!==E}function g(y,N,I,E){let U={},V=N.attributes,G=0,$=I.getAttributes();for(let Y in $)if($[Y].location>=0){let ee=V[Y];ee===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor));let Re={};Re.attribute=ee,ee&&ee.data&&(Re.data=ee.data),U[Y]=Re,G++}r.attributes=U,r.attributesNum=G,r.index=E}function b(){let y=r.newAttributes;for(let N=0,I=y.length;N<I;N++)y[N]=0}function m(y){d(y,0)}function d(y,N){let I=r.newAttributes,E=r.enabledAttributes,U=r.attributeDivisors;I[y]=1,E[y]===0&&(i.enableVertexAttribArray(y),E[y]=1),U[y]!==N&&(i.vertexAttribDivisor(y,N),U[y]=N)}function _(){let y=r.newAttributes,N=r.enabledAttributes;for(let I=0,E=N.length;I<E;I++)N[I]!==y[I]&&(i.disableVertexAttribArray(I),N[I]=0)}function v(y,N,I,E,U,V,G){G===!0?i.vertexAttribIPointer(y,N,I,U,V):i.vertexAttribPointer(y,N,I,E,U,V)}function x(y,N,I,E){b();let U=E.attributes,V=I.getAttributes(),G=N.defaultAttributeValues;for(let $ in V){let Y=V[$];if(Y.location>=0){let te=U[$];if(te===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(te=y.instanceColor)),te!==void 0){let ee=te.normalized,Re=te.itemSize,ue=e.get(te);if(ue===void 0)continue;let ae=ue.buffer,j=ue.type,J=ue.bytesPerElement,fe=j===i.INT||j===i.UNSIGNED_INT||te.gpuType===Jl;if(te.isInterleavedBufferAttribute){let q=te.data,ne=q.stride,ge=te.offset;if(q.isInstancedInterleavedBuffer){for(let Te=0;Te<Y.locationSize;Te++)d(Y.location+Te,q.meshPerAttribute);y.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Te=0;Te<Y.locationSize;Te++)m(Y.location+Te);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Te=0;Te<Y.locationSize;Te++)v(Y.location+Te,Re/Y.locationSize,j,ee,ne*J,(ge+Re/Y.locationSize*Te)*J,fe)}else{if(te.isInstancedBufferAttribute){for(let q=0;q<Y.locationSize;q++)d(Y.location+q,te.meshPerAttribute);y.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let q=0;q<Y.locationSize;q++)m(Y.location+q);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let q=0;q<Y.locationSize;q++)v(Y.location+q,Re/Y.locationSize,j,ee,Re*J,Re/Y.locationSize*q*J,fe)}}else if(G!==void 0){let ee=G[$];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(Y.location,ee);break;case 3:i.vertexAttrib3fv(Y.location,ee);break;case 4:i.vertexAttrib4fv(Y.location,ee);break;default:i.vertexAttrib1fv(Y.location,ee)}}}}_()}function A(){C();for(let y in n){let N=n[y];for(let I in N){let E=N[I];for(let U in E)h(E[U].object),delete E[U];delete N[I]}delete n[y]}}function S(y){if(n[y.id]===void 0)return;let N=n[y.id];for(let I in N){let E=N[I];for(let U in E)h(E[U].object),delete E[U];delete N[I]}delete n[y.id]}function T(y){for(let N in n){let I=n[N];if(I[y.id]===void 0)continue;let E=I[y.id];for(let U in E)h(E[U].object),delete E[U];delete I[y.id]}}function C(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:b,enableAttribute:m,disableUnusedAttributes:_}}function Gg(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function c(l,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let b=0;b<u;b++)g+=h[b]*f[b];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Vg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Kt&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let C=T===on&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Qn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Pn&&!C)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:A,maxSamples:S}}function Wg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Yn,o=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let _=r?0:n,v=_*4,x=d.clippingState||null;c.value=x,x=h(g,f,v,p);for(let A=0;A!==v;++A)x[A]=t[A];d.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=c.value,g!==!0||m===null){let d=p+b*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,x=p;v!==b;++v,x+=4)a.copy(u[v]).applyMatrix4(_,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function Hg(i){let e=new WeakMap;function t(a,o){return o===Uc?a.mapping=Cs:o===Fc&&(a.mapping=Es),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Uc||o===Fc)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new pl(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Mi=class extends qa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},vs=4,wu=[.125,.215,.35,.446,.526,.582],Vi=20,uc=new Mi,Au=new He,fc=null,dc=0,pc=0,mc=!1,zi=(1+Math.sqrt(5))/2,fs=1/zi,Tu=[new W(-zi,fs,0),new W(zi,fs,0),new W(-fs,0,zi),new W(fs,0,zi),new W(0,zi,-fs),new W(0,zi,fs),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],Os=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){fc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fc,dc,pc),this._renderer.xr.enabled=mc,e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:on,format:Kt,colorSpace:Gt,depthBuffer:!1},s=Cu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xg(r)),this._blurMaterial=qg(r,e,t)}return s}_compileMaterial(e){let t=new St(this._lodPlanes[0],e);this._renderer.compile(t,uc)}_sceneToCubeUV(e,t,n,s){let o=new Tt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Au),h.toneMapping=_i,h.autoClear=!1;let p=new Qt({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),g=new St(new $n,p),b=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,b=!0):(p.color.copy(Au),b=!0);for(let d=0;d<6;d++){let _=d%3;_===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):_===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));let v=this._cubeSize;_a(s,_*v,d>2?v:0,v,v),h.setRenderTarget(s),b&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Cs||e.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new St(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;_a(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,uc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Tu[(s-r-1)%Tu.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new St(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Vi-1),b=r/g,m=isFinite(r)?1+Math.floor(h*b):Vi;m>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);let d=[],_=0;for(let T=0;T<Vi;++T){let C=T/b,M=Math.exp(-C*C/2);d.push(M),T===0?_+=M:T<m&&(_+=2*M)}for(let T=0;T<d.length;T++)d[T]=d[T]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let x=this._sizeLods[s],A=3*x*(s>v-vs?s-v+vs:0),S=4*(this._cubeSize-x);_a(t,A,S,3*x,2*x),c.setRenderTarget(t),c.render(u,uc)}};function Xg(i){let e=[],t=[],n=[],s=i,r=i-vs+1+wu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-vs?c=wu[a-i+vs-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,b=3,m=2,d=1,_=new Float32Array(b*g*p),v=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let S=0;S<p;S++){let T=S%3*2/3-1,C=S>2?0:-1,M=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];_.set(M,b*g*S),v.set(f,m*g*S);let y=[S,S,S,S,S,S];x.set(y,d*g*S)}let A=new bt;A.setAttribute("position",new vt(_,b)),A.setAttribute("uv",new vt(v,m)),A.setAttribute("faceIndex",new vt(x,d)),e.push(A),s>vs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Cu(i,e,t){let n=new Nt(i,e,t);return n.texture.mapping=Ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _a(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function qg(i,e,t){let n=new Float32Array(Vi),s=new W(0,1,0);return new _t({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rh(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Eu(){return new _t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rh(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ru(){return new _t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function rh(){return`

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
	`}function Yg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Uc||c===Fc,h=c===Cs||c===Es;if(l||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Os(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Os(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function jg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&gr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Kg(i,e,t,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let b=f.morphAttributes[g];for(let m=0,d=b.length;m<d;m++)e.remove(b[m])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let b=p[g];for(let m=0,d=b.length;m<d;m++)e.update(b[m],i.ARRAY_BUFFER)}}function l(u){let f=[],p=u.index,g=u.attributes.position,b=0;if(p!==null){let _=p.array;b=p.version;for(let v=0,x=_.length;v<x;v+=3){let A=_[v+0],S=_[v+1],T=_[v+2];f.push(A,S,S,T,T,A)}}else if(g!==void 0){let _=g.array;b=g.version;for(let v=0,x=_.length/3-1;v<x;v+=3){let A=v+0,S=v+1,T=v+2;f.push(A,S,S,T,T,A)}}else return;let m=new(Of(f)?Xa:Ha)(f,1);m.version=b;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Zg(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),t.update(p,n,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function u(f,p,g,b){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/a,p[d],b[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,b,0,g);let d=0;for(let _=0;_<g;_++)d+=p[_]*b[_];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Jg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Qg(i,e,t){let n=new WeakMap,s=new rt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let M=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],v=0;p===!0&&(v=1),g===!0&&(v=2),b===!0&&(v=3);let x=o.attributes.position.count*v,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let S=new Float32Array(x*A*4*u),T=new Va(S,x,A,u);T.type=Pn,T.needsUpdate=!0;let C=v*4;for(let y=0;y<u;y++){let N=m[y],I=d[y],E=_[y],U=x*A*4*y;for(let V=0;V<N.count;V++){let G=V*C;p===!0&&(s.fromBufferAttribute(N,V),S[U+G+0]=s.x,S[U+G+1]=s.y,S[U+G+2]=s.z,S[U+G+3]=0),g===!0&&(s.fromBufferAttribute(I,V),S[U+G+4]=s.x,S[U+G+5]=s.y,S[U+G+6]=s.z,S[U+G+7]=0),b===!0&&(s.fromBufferAttribute(E,V),S[U+G+8]=s.x,S[U+G+9]=s.y,S[U+G+10]=s.z,S[U+G+11]=E.itemSize===4?s.w:1)}}f={count:u,texture:T,size:new Ne(x,A)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let b=0;b<l.length;b++)p+=l[b];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function $g(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var ja=class extends Dt{constructor(e,t,n,s,r,a,o,c,l,h=Ms){if(h!==Ms&&h!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ms&&(n=Wi),n===void 0&&h===Ps&&(n=Rs),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:zt,this.minFilter=c!==void 0?c:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Gf=new Dt,Pu=new ja(1,1),Vf=new Va,Wf=new fl,Hf=new Ya,Iu=[],Lu=[],Du=new Float32Array(16),Nu=new Float32Array(9),Uu=new Float32Array(4);function js(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Iu[s];if(r===void 0&&(r=new Float32Array(s),Iu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Eo(i,e){let t=Lu[e];t===void 0&&(t=new Int32Array(e),Lu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function eb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function tb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Et(t,e)}}function nb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Et(t,e)}}function ib(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Et(t,e)}}function sb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Ct(t,n))return;Uu.set(n),i.uniformMatrix2fv(this.addr,!1,Uu),Et(t,n)}}function rb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Ct(t,n))return;Nu.set(n),i.uniformMatrix3fv(this.addr,!1,Nu),Et(t,n)}}function ab(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Ct(t,n))return;Du.set(n),i.uniformMatrix4fv(this.addr,!1,Du),Et(t,n)}}function ob(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function cb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Et(t,e)}}function lb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Et(t,e)}}function hb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Et(t,e)}}function ub(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function fb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Et(t,e)}}function db(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Et(t,e)}}function pb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Et(t,e)}}function mb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Pu.compareFunction=Nf,r=Pu):r=Gf,t.setTexture2D(e||r,s)}function gb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Wf,s)}function bb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Hf,s)}function xb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Vf,s)}function vb(i){switch(i){case 5126:return eb;case 35664:return tb;case 35665:return nb;case 35666:return ib;case 35674:return sb;case 35675:return rb;case 35676:return ab;case 5124:case 35670:return ob;case 35667:case 35671:return cb;case 35668:case 35672:return lb;case 35669:case 35673:return hb;case 5125:return ub;case 36294:return fb;case 36295:return db;case 36296:return pb;case 35678:case 36198:case 36298:case 36306:case 35682:return mb;case 35679:case 36299:case 36307:return gb;case 35680:case 36300:case 36308:case 36293:return bb;case 36289:case 36303:case 36311:case 36292:return xb}}function _b(i,e){i.uniform1fv(this.addr,e)}function yb(i,e){let t=js(e,this.size,2);i.uniform2fv(this.addr,t)}function Mb(i,e){let t=js(e,this.size,3);i.uniform3fv(this.addr,t)}function Sb(i,e){let t=js(e,this.size,4);i.uniform4fv(this.addr,t)}function wb(i,e){let t=js(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ab(i,e){let t=js(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Tb(i,e){let t=js(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Cb(i,e){i.uniform1iv(this.addr,e)}function Eb(i,e){i.uniform2iv(this.addr,e)}function Rb(i,e){i.uniform3iv(this.addr,e)}function Pb(i,e){i.uniform4iv(this.addr,e)}function Ib(i,e){i.uniform1uiv(this.addr,e)}function Lb(i,e){i.uniform2uiv(this.addr,e)}function Db(i,e){i.uniform3uiv(this.addr,e)}function Nb(i,e){i.uniform4uiv(this.addr,e)}function Ub(i,e,t){let n=this.cache,s=e.length,r=Eo(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Gf,r[a])}function Fb(i,e,t){let n=this.cache,s=e.length,r=Eo(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Wf,r[a])}function Ob(i,e,t){let n=this.cache,s=e.length,r=Eo(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Hf,r[a])}function Bb(i,e,t){let n=this.cache,s=e.length,r=Eo(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Vf,r[a])}function kb(i){switch(i){case 5126:return _b;case 35664:return yb;case 35665:return Mb;case 35666:return Sb;case 35674:return wb;case 35675:return Ab;case 35676:return Tb;case 5124:case 35670:return Cb;case 35667:case 35671:return Eb;case 35668:case 35672:return Rb;case 35669:case 35673:return Pb;case 5125:return Ib;case 36294:return Lb;case 36295:return Db;case 36296:return Nb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ub;case 35679:case 36299:case 36307:return Fb;case 35680:case 36300:case 36308:case 36293:return Ob;case 36289:case 36303:case 36311:case 36292:return Bb}}var ml=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vb(t.type)}},gl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kb(t.type)}},bl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},gc=/(\w+)(\])?(\[|\.)?/g;function Fu(i,e){i.seq.push(e),i.map[e.id]=e}function zb(i,e,t){let n=i.name,s=n.length;for(gc.lastIndex=0;;){let r=gc.exec(n),a=gc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Fu(t,l===void 0?new ml(o,i,e):new gl(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new bl(o),Fu(t,u)),t=u}}}var ws=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);zb(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ou(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Gb=37297,Vb=0;function Wb(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Bu=new Qe;function Hb(i){et._getMatrix(Bu,et.workingColorSpace,i);let e=`mat3( ${Bu.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case Co:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ku(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Wb(i.getShaderSource(e),a)}else return s}function Xb(i,e){let t=Hb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function qb(i,e){let t;switch(e){case Xl:t="Linear";break;case ql:t="Reinhard";break;case Yl:t="Cineon";break;case Vr:t="ACESFilmic";break;case jl:t="AgX";break;case Kl:t="Neutral";break;case cp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ya=new W;function Yb(){et.getLuminanceCoefficients(ya);let i=ya.x.toFixed(4),e=ya.y.toFixed(4),t=ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function Kb(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function br(i){return i!==""}function zu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Jb=/^[ \t]*#include +<([\w\d./]+)>/gm;function xl(i){return i.replace(Jb,$b)}var Qb=new Map;function $b(i,e){let t=$e[e];if(t===void 0){let n=Qb.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return xl(t)}var ex=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vu(i){return i.replace(ex,tx)}function tx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function nx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_f?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function ix(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Cs:case Es:e="ENVMAP_TYPE_CUBE";break;case Ao:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sx(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Es&&(e="ENVMAP_MODE_REFRACTION"),e}function rx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yf:e="ENVMAP_BLENDING_MULTIPLY";break;case ap:e="ENVMAP_BLENDING_MIX";break;case op:e="ENVMAP_BLENDING_ADD";break}return e}function ax(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ox(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=nx(t),l=ix(t),h=sx(t),u=rx(t),f=ax(t),p=jb(t),g=Kb(r),b=s.createProgram(),m,d,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(br).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(br).join(`
`),d.length>0&&(d+=`
`)):(m=[Wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),d=[Wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?$e.tonemapping_pars_fragment:"",t.toneMapping!==_i?qb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Xb("linearToOutputTexel",t.outputColorSpace),Yb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),a=xl(a),a=zu(a,t),a=Gu(a,t),o=xl(o),o=zu(o,t),o=Gu(o,t),a=Vu(a),o=Vu(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let v=_+m+a,x=_+d+o,A=Ou(s,s.VERTEX_SHADER,v),S=Ou(s,s.FRAGMENT_SHADER,x);s.attachShader(b,A),s.attachShader(b,S),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function T(N){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(b).trim(),E=s.getShaderInfoLog(A).trim(),U=s.getShaderInfoLog(S).trim(),V=!0,G=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,A,S);else{let $=ku(s,A,"vertex"),Y=ku(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+I+`
`+$+`
`+Y)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(E===""||U==="")&&(G=!1);G&&(N.diagnostics={runnable:V,programLog:I,vertexShader:{log:E,prefix:m},fragmentShader:{log:U,prefix:d}})}s.deleteShader(A),s.deleteShader(S),C=new ws(s,b),M=Zb(s,b)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(b,Gb)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vb++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=A,this.fragmentShader=S,this}var cx=0,vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _l(e),t.set(e,n)),n}},_l=class{constructor(e){this.id=cx++,this.code=e,this.usedTimes=0}};function lx(i,e,t,n,s,r,a){let o=new Wa,c=new vl,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,y,N,I,E){let U=I.fog,V=E.geometry,G=M.isMeshStandardMaterial?I.environment:null,$=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),Y=$&&$.mapping===Ao?$.image.height:null,te=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let ee=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Re=ee!==void 0?ee.length:0,ue=0;V.morphAttributes.position!==void 0&&(ue=1),V.morphAttributes.normal!==void 0&&(ue=2),V.morphAttributes.color!==void 0&&(ue=3);let ae,j,J,fe;if(te){let Ze=Ln[te];ae=Ze.vertexShader,j=Ze.fragmentShader}else ae=M.vertexShader,j=M.fragmentShader,c.update(M),J=c.getVertexShaderID(M),fe=c.getFragmentShaderID(M);let q=i.getRenderTarget(),ne=i.state.buffers.depth.getReversed(),ge=E.isInstancedMesh===!0,Te=E.isBatchedMesh===!0,xe=!!M.map,Z=!!M.matcap,K=!!$,R=!!M.aoMap,ye=!!M.lightMap,le=!!M.bumpMap,ie=!!M.normalMap,ce=!!M.displacementMap,we=!!M.emissiveMap,de=!!M.metalnessMap,P=!!M.roughnessMap,w=M.anisotropy>0,F=M.clearcoat>0,O=M.dispersion>0,X=M.iridescence>0,D=M.sheen>0,k=M.transmission>0,B=w&&!!M.anisotropyMap,H=F&&!!M.clearcoatMap,Me=F&&!!M.clearcoatNormalMap,oe=F&&!!M.clearcoatRoughnessMap,be=X&&!!M.iridescenceMap,Le=X&&!!M.iridescenceThicknessMap,Ce=D&&!!M.sheenColorMap,Ie=D&&!!M.sheenRoughnessMap,Ee=!!M.specularMap,Ae=!!M.specularColorMap,Ue=!!M.specularIntensityMap,z=k&&!!M.transmissionMap,Se=k&&!!M.thicknessMap,Q=!!M.gradientMap,me=!!M.alphaMap,De=M.alphaTest>0,he=!!M.alphaHash,Pe=!!M.extensions,ze=_i;M.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(ze=i.toneMapping);let Ke={shaderID:te,shaderType:M.type,shaderName:M.name,vertexShader:ae,fragmentShader:j,defines:M.defines,customVertexShaderID:J,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Te,batchingColor:Te&&E._colorsTexture!==null,instancing:ge,instancingColor:ge&&E.instanceColor!==null,instancingMorph:ge&&E.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Gt,alphaToCoverage:!!M.alphaToCoverage,map:xe,matcap:Z,envMap:K,envMapMode:K&&$.mapping,envMapCubeUVHeight:Y,aoMap:R,lightMap:ye,bumpMap:le,normalMap:ie,displacementMap:f&&ce,emissiveMap:we,normalMapObjectSpace:ie&&M.normalMapType===dp,normalMapTangentSpace:ie&&M.normalMapType===Df,metalnessMap:de,roughnessMap:P,anisotropy:w,anisotropyMap:B,clearcoat:F,clearcoatMap:H,clearcoatNormalMap:Me,clearcoatRoughnessMap:oe,dispersion:O,iridescence:X,iridescenceMap:be,iridescenceThicknessMap:Le,sheen:D,sheenColorMap:Ce,sheenRoughnessMap:Ie,specularMap:Ee,specularColorMap:Ae,specularIntensityMap:Ue,transmission:k,transmissionMap:z,thicknessMap:Se,gradientMap:Q,opaque:M.transparent===!1&&M.blending===ys&&M.alphaToCoverage===!1,alphaMap:me,alphaTest:De,alphaHash:he,combine:M.combine,mapUv:xe&&b(M.map.channel),aoMapUv:R&&b(M.aoMap.channel),lightMapUv:ye&&b(M.lightMap.channel),bumpMapUv:le&&b(M.bumpMap.channel),normalMapUv:ie&&b(M.normalMap.channel),displacementMapUv:ce&&b(M.displacementMap.channel),emissiveMapUv:we&&b(M.emissiveMap.channel),metalnessMapUv:de&&b(M.metalnessMap.channel),roughnessMapUv:P&&b(M.roughnessMap.channel),anisotropyMapUv:B&&b(M.anisotropyMap.channel),clearcoatMapUv:H&&b(M.clearcoatMap.channel),clearcoatNormalMapUv:Me&&b(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&b(M.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&b(M.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&b(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&b(M.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&b(M.sheenRoughnessMap.channel),specularMapUv:Ee&&b(M.specularMap.channel),specularColorMapUv:Ae&&b(M.specularColorMap.channel),specularIntensityMapUv:Ue&&b(M.specularIntensityMap.channel),transmissionMapUv:z&&b(M.transmissionMap.channel),thicknessMapUv:Se&&b(M.thicknessMap.channel),alphaMapUv:me&&b(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ie||w),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!V.attributes.uv&&(xe||me),fog:!!U,useFog:M.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ne,skinning:E.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:ue,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:xe&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===ct,decodeVideoTextureEmissive:we&&M.emissiveMap.isVideoTexture===!0&&et.getTransfer(M.emissiveMap.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===sn,flipSided:M.side===kt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Pe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&M.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ke.vertexUv1s=l.has(1),Ke.vertexUv2s=l.has(2),Ke.vertexUv3s=l.has(3),l.clear(),Ke}function d(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let N in M.defines)y.push(N),y.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(_(y,M),v(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function _(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function v(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){let y=g[M.type],N;if(y){let I=Ln[y];N=Ei.clone(I.uniforms)}else N=M.uniforms;return N}function A(M,y){let N;for(let I=0,E=h.length;I<E;I++){let U=h[I];if(U.cacheKey===y){N=U,++N.usedTimes;break}}return N===void 0&&(N=new ox(i,y,M,r),h.push(N)),N}function S(M){if(--M.usedTimes===0){let y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function T(M){c.remove(M)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:A,releaseProgram:S,releaseShaderCache:T,programs:h,dispose:C}}function hx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ux(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Hu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Xu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,p,g,b,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:b,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=b,d.group=m),e++,d}function o(u,f,p,g,b,m){let d=a(u,f,p,g,b,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(u,f,p,g,b,m){let d=a(u,f,p,g,b,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||ux),n.length>1&&n.sort(f||Hu),s.length>1&&s.sort(f||Hu)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function fx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Xu,i.set(n,[a])):s>=r.length?(a=new Xu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function dx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new He};break;case"SpotLight":t={position:new W,direction:new W,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function px(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var mx=0;function gx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bx(i){let e=new dx,t=px(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new W);let s=new W,r=new Ye,a=new Ye;function o(l){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,b=0,m=0,d=0,_=0,v=0,x=0,A=0,S=0,T=0;l.sort(gx);for(let M=0,y=l.length;M<y;M++){let N=l[M],I=N.color,E=N.intensity,U=N.distance,V=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=I.r*E,u+=I.g*E,f+=I.b*E;else if(N.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(N.sh.coefficients[G],E);T++}else if(N.isDirectionalLight){let G=e.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let $=N.shadow,Y=t.get(N);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=N.shadow.matrix,_++}n.directional[p]=G,p++}else if(N.isSpotLight){let G=e.get(N);G.position.setFromMatrixPosition(N.matrixWorld),G.color.copy(I).multiplyScalar(E),G.distance=U,G.coneCos=Math.cos(N.angle),G.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),G.decay=N.decay,n.spot[b]=G;let $=N.shadow;if(N.map&&(n.spotLightMap[A]=N.map,A++,$.updateMatrices(N),N.castShadow&&S++),n.spotLightMatrix[b]=$.matrix,N.castShadow){let Y=t.get(N);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,n.spotShadow[b]=Y,n.spotShadowMap[b]=V,x++}b++}else if(N.isRectAreaLight){let G=e.get(N);G.color.copy(I).multiplyScalar(E),G.halfWidth.set(N.width*.5,0,0),G.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=G,m++}else if(N.isPointLight){let G=e.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),G.distance=N.distance,G.decay=N.decay,N.castShadow){let $=N.shadow,Y=t.get(N);Y.shadowIntensity=$.intensity,Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,Y.shadowCameraNear=$.camera.near,Y.shadowCameraFar=$.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=N.shadow.matrix,v++}n.point[g]=G,g++}else if(N.isHemisphereLight){let G=e.get(N);G.skyColor.copy(N.color).multiplyScalar(E),G.groundColor.copy(N.groundColor).multiplyScalar(E),n.hemi[d]=G,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Be.LTC_FLOAT_1,n.rectAreaLTC2=Be.LTC_FLOAT_2):(n.rectAreaLTC1=Be.LTC_HALF_1,n.rectAreaLTC2=Be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==b||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==_||C.numPointShadows!==v||C.numSpotShadows!==x||C.numSpotMaps!==A||C.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+A-S,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,C.directionalLength=p,C.pointLength=g,C.spotLength=b,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=_,C.numPointShadows=v,C.numSpotShadows=x,C.numSpotMaps=A,C.numLightProbes=T,n.version=mx++)}function c(l,h){let u=0,f=0,p=0,g=0,b=0,m=h.matrixWorldInverse;for(let d=0,_=l.length;d<_;d++){let v=l[d];if(v.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(v.isSpotLight){let x=n.spot[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let x=n.hemi[b];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),b++}}}return{setup:o,setupView:c,state:n}}function qu(i){let e=new bx(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function xx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new qu(i),e.set(s,[o])):r>=a.length?(o=new qu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var yl=class extends Jt{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=up,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ml=class extends Jt{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},vx=`void main() {
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
}`;function yx(i,e,t){let n=new Er,s=new Ne,r=new Ne,a=new rt,o=new yl({depthPacking:fp}),c=new Ml,l={},h=t.maxTextureSize,u={[Un]:kt,[kt]:Un,[sn]:sn},f=new _t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:vx,fragmentShader:_x}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new bt;g.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new St(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_f;let d=this.type;this.render=function(S,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let M=i.getRenderTarget(),y=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Nn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let E=d!==qn&&this.type===qn,U=d===qn&&this.type!==qn;for(let V=0,G=S.length;V<G;V++){let $=S[V],Y=$.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let te=Y.getFrameExtents();if(s.multiply(te),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,Y.mapSize.y=r.y)),Y.map===null||E===!0||U===!0){let Re=this.type!==qn?{minFilter:zt,magFilter:zt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Nt(s.x,s.y,Re),Y.map.texture.name=$.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let ee=Y.getViewportCount();for(let Re=0;Re<ee;Re++){let ue=Y.getViewport(Re);a.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),I.viewport(a),Y.updateMatrices($,Re),n=Y.getFrustum(),x(T,C,Y.camera,$,this.type)}Y.isPointLightShadow!==!0&&this.type===qn&&_(Y,C),Y.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,y,N)};function _(S,T){let C=e.update(b);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Nt(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,C,f,b,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,C,p,b,null)}function v(S,T,C,M){let y=null,N=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)y=N;else if(y=C.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let I=y.uuid,E=T.uuid,U=l[I];U===void 0&&(U={},l[I]=U);let V=U[E];V===void 0&&(V=y.clone(),U[E]=V,T.addEventListener("dispose",A)),y=V}if(y.visible=T.visible,y.wireframe=T.wireframe,M===qn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let I=i.properties.get(y);I.light=C}return y}function x(S,T,C,M,y){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===qn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);let E=e.update(S),U=S.material;if(Array.isArray(U)){let V=E.groups;for(let G=0,$=V.length;G<$;G++){let Y=V[G],te=U[Y.materialIndex];if(te&&te.visible){let ee=v(S,te,M,y);S.onBeforeShadow(i,S,T,C,E,ee,Y),i.renderBufferDirect(C,null,E,ee,S,Y),S.onAfterShadow(i,S,T,C,E,ee,Y)}}}else if(U.visible){let V=v(S,U,M,y);S.onBeforeShadow(i,S,T,C,E,V,null),i.renderBufferDirect(C,null,E,V,S,null),S.onAfterShadow(i,S,T,C,E,V,null)}}let I=S.children;for(let E=0,U=I.length;E<U;E++)x(I[E],T,C,M,y)}function A(S){S.target.removeEventListener("dispose",A);for(let C in l){let M=l[C],y=S.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var Mx={[Ec]:Rc,[Pc]:Dc,[Ic]:Nc,[Ts]:Lc,[Rc]:Ec,[Dc]:Pc,[Nc]:Ic,[Lc]:Ts};function Sx(i,e){function t(){let z=!1,Se=new rt,Q=null,me=new rt(0,0,0,0);return{setMask:function(De){Q!==De&&!z&&(i.colorMask(De,De,De,De),Q=De)},setLocked:function(De){z=De},setClear:function(De,he,Pe,ze,Ke){Ke===!0&&(De*=ze,he*=ze,Pe*=ze),Se.set(De,he,Pe,ze),me.equals(Se)===!1&&(i.clearColor(De,he,Pe,ze),me.copy(Se))},reset:function(){z=!1,Q=null,me.set(-1,0,0,0)}}}function n(){let z=!1,Se=!1,Q=null,me=null,De=null;return{setReversed:function(he){if(Se!==he){let Pe=e.get("EXT_clip_control");Se?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT);let ze=De;De=null,this.setClear(ze)}Se=he},getReversed:function(){return Se},setTest:function(he){he?q(i.DEPTH_TEST):ne(i.DEPTH_TEST)},setMask:function(he){Q!==he&&!z&&(i.depthMask(he),Q=he)},setFunc:function(he){if(Se&&(he=Mx[he]),me!==he){switch(he){case Ec:i.depthFunc(i.NEVER);break;case Rc:i.depthFunc(i.ALWAYS);break;case Pc:i.depthFunc(i.LESS);break;case Ts:i.depthFunc(i.LEQUAL);break;case Ic:i.depthFunc(i.EQUAL);break;case Lc:i.depthFunc(i.GEQUAL);break;case Dc:i.depthFunc(i.GREATER);break;case Nc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=he}},setLocked:function(he){z=he},setClear:function(he){De!==he&&(Se&&(he=1-he),i.clearDepth(he),De=he)},reset:function(){z=!1,Q=null,me=null,De=null,Se=!1}}}function s(){let z=!1,Se=null,Q=null,me=null,De=null,he=null,Pe=null,ze=null,Ke=null;return{setTest:function(Ze){z||(Ze?q(i.STENCIL_TEST):ne(i.STENCIL_TEST))},setMask:function(Ze){Se!==Ze&&!z&&(i.stencilMask(Ze),Se=Ze)},setFunc:function(Ze,Rt,Yt){(Q!==Ze||me!==Rt||De!==Yt)&&(i.stencilFunc(Ze,Rt,Yt),Q=Ze,me=Rt,De=Yt)},setOp:function(Ze,Rt,Yt){(he!==Ze||Pe!==Rt||ze!==Yt)&&(i.stencilOp(Ze,Rt,Yt),he=Ze,Pe=Rt,ze=Yt)},setLocked:function(Ze){z=Ze},setClear:function(Ze){Ke!==Ze&&(i.clearStencil(Ze),Ke=Ze)},reset:function(){z=!1,Se=null,Q=null,me=null,De=null,he=null,Pe=null,ze=null,Ke=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,b=!1,m=null,d=null,_=null,v=null,x=null,A=null,S=null,T=new He(0,0,0),C=0,M=!1,y=null,N=null,I=null,E=null,U=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,$=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Y)[1]),G=$>=1):Y.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),G=$>=2);let te=null,ee={},Re=i.getParameter(i.SCISSOR_BOX),ue=i.getParameter(i.VIEWPORT),ae=new rt().fromArray(Re),j=new rt().fromArray(ue);function J(z,Se,Q,me){let De=new Uint8Array(4),he=i.createTexture();i.bindTexture(z,he),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<Q;Pe++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(Se+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return he}let fe={};fe[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),q(i.DEPTH_TEST),a.setFunc(Ts),le(!1),ie(jh),q(i.CULL_FACE),R(Nn);function q(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function ne(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function ge(z,Se){return u[z]!==Se?(i.bindFramebuffer(z,Se),u[z]=Se,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Se),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function Te(z,Se){let Q=p,me=!1;if(z){Q=f.get(Se),Q===void 0&&(Q=[],f.set(Se,Q));let De=z.textures;if(Q.length!==De.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let he=0,Pe=De.length;he<Pe;he++)Q[he]=i.COLOR_ATTACHMENT0+he;Q.length=De.length,me=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,me=!0);me&&i.drawBuffers(Q)}function xe(z){return g!==z?(i.useProgram(z),g=z,!0):!1}let Z={[Gi]:i.FUNC_ADD,[Wd]:i.FUNC_SUBTRACT,[Hd]:i.FUNC_REVERSE_SUBTRACT};Z[Xd]=i.MIN,Z[qd]=i.MAX;let K={[Yd]:i.ZERO,[jd]:i.ONE,[Kd]:i.SRC_COLOR,[Tc]:i.SRC_ALPHA,[tp]:i.SRC_ALPHA_SATURATE,[$d]:i.DST_COLOR,[Jd]:i.DST_ALPHA,[Zd]:i.ONE_MINUS_SRC_COLOR,[Cc]:i.ONE_MINUS_SRC_ALPHA,[ep]:i.ONE_MINUS_DST_COLOR,[Qd]:i.ONE_MINUS_DST_ALPHA,[np]:i.CONSTANT_COLOR,[ip]:i.ONE_MINUS_CONSTANT_COLOR,[sp]:i.CONSTANT_ALPHA,[rp]:i.ONE_MINUS_CONSTANT_ALPHA};function R(z,Se,Q,me,De,he,Pe,ze,Ke,Ze){if(z===Nn){b===!0&&(ne(i.BLEND),b=!1);return}if(b===!1&&(q(i.BLEND),b=!0),z!==Vd){if(z!==m||Ze!==M){if((d!==Gi||x!==Gi)&&(i.blendEquation(i.FUNC_ADD),d=Gi,x=Gi),Ze)switch(z){case ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case As:i.blendFunc(i.ONE,i.ONE);break;case Kh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case As:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Kh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}_=null,v=null,A=null,S=null,T.set(0,0,0),C=0,m=z,M=Ze}return}De=De||Se,he=he||Q,Pe=Pe||me,(Se!==d||De!==x)&&(i.blendEquationSeparate(Z[Se],Z[De]),d=Se,x=De),(Q!==_||me!==v||he!==A||Pe!==S)&&(i.blendFuncSeparate(K[Q],K[me],K[he],K[Pe]),_=Q,v=me,A=he,S=Pe),(ze.equals(T)===!1||Ke!==C)&&(i.blendColor(ze.r,ze.g,ze.b,Ke),T.copy(ze),C=Ke),m=z,M=!1}function ye(z,Se){z.side===sn?ne(i.CULL_FACE):q(i.CULL_FACE);let Q=z.side===kt;Se&&(Q=!Q),le(Q),z.blending===ys&&z.transparent===!1?R(Nn):R(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let me=z.stencilWrite;o.setTest(me),me&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),we(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function le(z){y!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),y=z)}function ie(z){z!==zd?(q(i.CULL_FACE),z!==N&&(z===jh?i.cullFace(i.BACK):z===Gd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ne(i.CULL_FACE),N=z}function ce(z){z!==I&&(G&&i.lineWidth(z),I=z)}function we(z,Se,Q){z?(q(i.POLYGON_OFFSET_FILL),(E!==Se||U!==Q)&&(i.polygonOffset(Se,Q),E=Se,U=Q)):ne(i.POLYGON_OFFSET_FILL)}function de(z){z?q(i.SCISSOR_TEST):ne(i.SCISSOR_TEST)}function P(z){z===void 0&&(z=i.TEXTURE0+V-1),te!==z&&(i.activeTexture(z),te=z)}function w(z,Se,Q){Q===void 0&&(te===null?Q=i.TEXTURE0+V-1:Q=te);let me=ee[Q];me===void 0&&(me={type:void 0,texture:void 0},ee[Q]=me),(me.type!==z||me.texture!==Se)&&(te!==Q&&(i.activeTexture(Q),te=Q),i.bindTexture(z,Se||fe[z]),me.type=z,me.texture=Se)}function F(){let z=ee[te];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function O(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function X(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function D(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function k(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function B(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function H(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function be(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Le(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ce(z){ae.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ae.copy(z))}function Ie(z){j.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),j.copy(z))}function Ee(z,Se){let Q=l.get(Se);Q===void 0&&(Q=new WeakMap,l.set(Se,Q));let me=Q.get(z);me===void 0&&(me=i.getUniformBlockIndex(Se,z.name),Q.set(z,me))}function Ae(z,Se){let me=l.get(Se).get(z);c.get(Se)!==me&&(i.uniformBlockBinding(Se,me,z.__bindingPointIndex),c.set(Se,me))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},te=null,ee={},u={},f=new WeakMap,p=[],g=null,b=!1,m=null,d=null,_=null,v=null,x=null,A=null,S=null,T=new He(0,0,0),C=0,M=!1,y=null,N=null,I=null,E=null,U=null,ae.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:q,disable:ne,bindFramebuffer:ge,drawBuffers:Te,useProgram:xe,setBlending:R,setMaterial:ye,setFlipSided:le,setCullFace:ie,setLineWidth:ce,setPolygonOffset:we,setScissorTest:de,activeTexture:P,bindTexture:w,unbindTexture:F,compressedTexImage2D:O,compressedTexImage3D:X,texImage2D:be,texImage3D:Le,updateUBOMapping:Ee,uniformBlockBinding:Ae,texStorage2D:Me,texStorage3D:oe,texSubImage2D:D,texSubImage3D:k,compressedTexSubImage2D:B,compressedTexSubImage3D:H,scissor:Ce,viewport:Ie,reset:Ue}}function Yu(i,e,t,n){let s=wx(n);switch(t){case Tf:return i*e;case Ef:return i*e;case Rf:return i*e*2;case eh:return i*e/s.components*s.byteLength;case th:return i*e/s.components*s.byteLength;case Pf:return i*e*2/s.components*s.byteLength;case nh:return i*e*2/s.components*s.byteLength;case Cf:return i*e*3/s.components*s.byteLength;case Kt:return i*e*4/s.components*s.byteLength;case ih:return i*e*4/s.components*s.byteLength;case Ua:case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bc:case zc:return Math.max(i,16)*Math.max(e,8)/4;case Oc:case kc:return Math.max(i,8)*Math.max(e,8)/2;case Gc:case Vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case qc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case jc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Jc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Qc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $c:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case el:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case tl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ka:case sl:case rl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case If:case al:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ol:case cl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wx(i){switch(i){case Qn:case Sf:return{byteLength:1,components:1};case Tr:case wf:case on:return{byteLength:2,components:1};case Ql:case $l:return{byteLength:2,components:4};case Wi:case Jl:case Pn:return{byteLength:4,components:1};case Af:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ax(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ne,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return p?new OffscreenCanvas(P,w):Cr("canvas")}function b(P,w,F){let O=1,X=de(P);if((X.width>F||X.height>F)&&(O=F/Math.max(X.width,X.height)),O<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let D=Math.floor(O*X.width),k=Math.floor(O*X.height);u===void 0&&(u=g(D,k));let B=w?g(D,k):u;return B.width=D,B.height=k,B.getContext("2d").drawImage(P,0,0,D,k),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+D+"x"+k+")."),B}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),P;return P}function m(P){return P.generateMipmaps}function d(P){i.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(P,w,F,O,X=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let D=w;if(w===i.RED&&(F===i.FLOAT&&(D=i.R32F),F===i.HALF_FLOAT&&(D=i.R16F),F===i.UNSIGNED_BYTE&&(D=i.R8)),w===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(D=i.R8UI),F===i.UNSIGNED_SHORT&&(D=i.R16UI),F===i.UNSIGNED_INT&&(D=i.R32UI),F===i.BYTE&&(D=i.R8I),F===i.SHORT&&(D=i.R16I),F===i.INT&&(D=i.R32I)),w===i.RG&&(F===i.FLOAT&&(D=i.RG32F),F===i.HALF_FLOAT&&(D=i.RG16F),F===i.UNSIGNED_BYTE&&(D=i.RG8)),w===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(D=i.RG8UI),F===i.UNSIGNED_SHORT&&(D=i.RG16UI),F===i.UNSIGNED_INT&&(D=i.RG32UI),F===i.BYTE&&(D=i.RG8I),F===i.SHORT&&(D=i.RG16I),F===i.INT&&(D=i.RG32I)),w===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(D=i.RGB8UI),F===i.UNSIGNED_SHORT&&(D=i.RGB16UI),F===i.UNSIGNED_INT&&(D=i.RGB32UI),F===i.BYTE&&(D=i.RGB8I),F===i.SHORT&&(D=i.RGB16I),F===i.INT&&(D=i.RGB32I)),w===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(D=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(D=i.RGBA16UI),F===i.UNSIGNED_INT&&(D=i.RGBA32UI),F===i.BYTE&&(D=i.RGBA8I),F===i.SHORT&&(D=i.RGBA16I),F===i.INT&&(D=i.RGBA32I)),w===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(D=i.RGB9_E5),w===i.RGBA){let k=X?Co:et.getTransfer(O);F===i.FLOAT&&(D=i.RGBA32F),F===i.HALF_FLOAT&&(D=i.RGBA16F),F===i.UNSIGNED_BYTE&&(D=k===ct?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(D=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(D=i.RGB5_A1)}return(D===i.R16F||D===i.R32F||D===i.RG16F||D===i.RG32F||D===i.RGBA16F||D===i.RGBA32F)&&e.get("EXT_color_buffer_float"),D}function x(P,w){let F;return P?w===null||w===Wi||w===Rs?F=i.DEPTH24_STENCIL8:w===Pn?F=i.DEPTH32F_STENCIL8:w===Tr&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Wi||w===Rs?F=i.DEPTH_COMPONENT24:w===Pn?F=i.DEPTH_COMPONENT32F:w===Tr&&(F=i.DEPTH_COMPONENT16),F}function A(P,w){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==zt&&P.minFilter!==Bt?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function S(P){let w=P.target;w.removeEventListener("dispose",S),C(w),w.isVideoTexture&&h.delete(w)}function T(P){let w=P.target;w.removeEventListener("dispose",T),y(w)}function C(P){let w=n.get(P);if(w.__webglInit===void 0)return;let F=P.source,O=f.get(F);if(O){let X=O[w.__cacheKey];X.usedTimes--,X.usedTimes===0&&M(P),Object.keys(O).length===0&&f.delete(F)}n.remove(P)}function M(P){let w=n.get(P);i.deleteTexture(w.__webglTexture);let F=P.source,O=f.get(F);delete O[w.__cacheKey],a.memory.textures--}function y(P){let w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(w.__webglFramebuffer[O]))for(let X=0;X<w.__webglFramebuffer[O].length;X++)i.deleteFramebuffer(w.__webglFramebuffer[O][X]);else i.deleteFramebuffer(w.__webglFramebuffer[O]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[O])}else{if(Array.isArray(w.__webglFramebuffer))for(let O=0;O<w.__webglFramebuffer.length;O++)i.deleteFramebuffer(w.__webglFramebuffer[O]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let O=0;O<w.__webglColorRenderbuffer.length;O++)w.__webglColorRenderbuffer[O]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[O]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let F=P.textures;for(let O=0,X=F.length;O<X;O++){let D=n.get(F[O]);D.__webglTexture&&(i.deleteTexture(D.__webglTexture),a.memory.textures--),n.remove(F[O])}n.remove(P)}let N=0;function I(){N=0}function E(){let P=N;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),N+=1,P}function U(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function V(P,w){let F=n.get(P);if(P.isVideoTexture&&ce(P),P.isRenderTargetTexture===!1&&P.version>0&&F.__version!==P.version){let O=P.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(F,P,w);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+w)}function G(P,w){let F=n.get(P);if(P.version>0&&F.__version!==P.version){j(F,P,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+w)}function $(P,w){let F=n.get(P);if(P.version>0&&F.__version!==P.version){j(F,P,w);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+w)}function Y(P,w){let F=n.get(P);if(P.version>0&&F.__version!==P.version){J(F,P,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+w)}let te={[Jn]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[Ar]:i.MIRRORED_REPEAT},ee={[zt]:i.NEAREST,[Zl]:i.NEAREST_MIPMAP_NEAREST,[xs]:i.NEAREST_MIPMAP_LINEAR,[Bt]:i.LINEAR,[xr]:i.LINEAR_MIPMAP_NEAREST,[pn]:i.LINEAR_MIPMAP_LINEAR},Re={[pp]:i.NEVER,[_p]:i.ALWAYS,[mp]:i.LESS,[Nf]:i.LEQUAL,[gp]:i.EQUAL,[vp]:i.GEQUAL,[bp]:i.GREATER,[xp]:i.NOTEQUAL};function ue(P,w){if(w.type===Pn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Bt||w.magFilter===xr||w.magFilter===xs||w.magFilter===pn||w.minFilter===Bt||w.minFilter===xr||w.minFilter===xs||w.minFilter===pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,te[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,te[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,te[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ee[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ee[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Re[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===zt||w.minFilter!==xs&&w.minFilter!==pn||w.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ae(P,w){let F=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",S));let O=w.source,X=f.get(O);X===void 0&&(X={},f.set(O,X));let D=U(w);if(D!==P.__cacheKey){X[D]===void 0&&(X[D]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),X[D].usedTimes++;let k=X[P.__cacheKey];k!==void 0&&(X[P.__cacheKey].usedTimes--,k.usedTimes===0&&M(w)),P.__cacheKey=D,P.__webglTexture=X[D].texture}return F}function j(P,w,F){let O=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(O=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(O=i.TEXTURE_3D);let X=ae(P,w),D=w.source;t.bindTexture(O,P.__webglTexture,i.TEXTURE0+F);let k=n.get(D);if(D.version!==k.__version||X===!0){t.activeTexture(i.TEXTURE0+F);let B=et.getPrimaries(et.workingColorSpace),H=w.colorSpace===Dn?null:et.getPrimaries(w.colorSpace),Me=w.colorSpace===Dn||B===H?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let oe=b(w.image,!1,s.maxTextureSize);oe=we(w,oe);let be=r.convert(w.format,w.colorSpace),Le=r.convert(w.type),Ce=v(w.internalFormat,be,Le,w.colorSpace,w.isVideoTexture);ue(O,w);let Ie,Ee=w.mipmaps,Ae=w.isVideoTexture!==!0,Ue=k.__version===void 0||X===!0,z=D.dataReady,Se=A(w,oe);if(w.isDepthTexture)Ce=x(w.format===Ps,w.type),Ue&&(Ae?t.texStorage2D(i.TEXTURE_2D,1,Ce,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Ce,oe.width,oe.height,0,be,Le,null));else if(w.isDataTexture)if(Ee.length>0){Ae&&Ue&&t.texStorage2D(i.TEXTURE_2D,Se,Ce,Ee[0].width,Ee[0].height);for(let Q=0,me=Ee.length;Q<me;Q++)Ie=Ee[Q],Ae?z&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Ie.width,Ie.height,be,Le,Ie.data):t.texImage2D(i.TEXTURE_2D,Q,Ce,Ie.width,Ie.height,0,be,Le,Ie.data);w.generateMipmaps=!1}else Ae?(Ue&&t.texStorage2D(i.TEXTURE_2D,Se,Ce,oe.width,oe.height),z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,be,Le,oe.data)):t.texImage2D(i.TEXTURE_2D,0,Ce,oe.width,oe.height,0,be,Le,oe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ae&&Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Ce,Ee[0].width,Ee[0].height,oe.depth);for(let Q=0,me=Ee.length;Q<me;Q++)if(Ie=Ee[Q],w.format!==Kt)if(be!==null)if(Ae){if(z)if(w.layerUpdates.size>0){let De=Yu(Ie.width,Ie.height,w.format,w.type);for(let he of w.layerUpdates){let Pe=Ie.data.subarray(he*De/Ie.data.BYTES_PER_ELEMENT,(he+1)*De/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,he,Ie.width,Ie.height,1,be,Pe)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Ie.width,Ie.height,oe.depth,be,Ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Ce,Ie.width,Ie.height,oe.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Ie.width,Ie.height,oe.depth,be,Le,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Ce,Ie.width,Ie.height,oe.depth,0,be,Le,Ie.data)}else{Ae&&Ue&&t.texStorage2D(i.TEXTURE_2D,Se,Ce,Ee[0].width,Ee[0].height);for(let Q=0,me=Ee.length;Q<me;Q++)Ie=Ee[Q],w.format!==Kt?be!==null?Ae?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,Ie.width,Ie.height,be,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Ce,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?z&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Ie.width,Ie.height,be,Le,Ie.data):t.texImage2D(i.TEXTURE_2D,Q,Ce,Ie.width,Ie.height,0,be,Le,Ie.data)}else if(w.isDataArrayTexture)if(Ae){if(Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Ce,oe.width,oe.height,oe.depth),z)if(w.layerUpdates.size>0){let Q=Yu(oe.width,oe.height,w.format,w.type);for(let me of w.layerUpdates){let De=oe.data.subarray(me*Q/oe.data.BYTES_PER_ELEMENT,(me+1)*Q/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,oe.width,oe.height,1,be,Le,De)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,be,Le,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,oe.width,oe.height,oe.depth,0,be,Le,oe.data);else if(w.isData3DTexture)Ae?(Ue&&t.texStorage3D(i.TEXTURE_3D,Se,Ce,oe.width,oe.height,oe.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,be,Le,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,oe.width,oe.height,oe.depth,0,be,Le,oe.data);else if(w.isFramebufferTexture){if(Ue)if(Ae)t.texStorage2D(i.TEXTURE_2D,Se,Ce,oe.width,oe.height);else{let Q=oe.width,me=oe.height;for(let De=0;De<Se;De++)t.texImage2D(i.TEXTURE_2D,De,Ce,Q,me,0,be,Le,null),Q>>=1,me>>=1}}else if(Ee.length>0){if(Ae&&Ue){let Q=de(Ee[0]);t.texStorage2D(i.TEXTURE_2D,Se,Ce,Q.width,Q.height)}for(let Q=0,me=Ee.length;Q<me;Q++)Ie=Ee[Q],Ae?z&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,be,Le,Ie):t.texImage2D(i.TEXTURE_2D,Q,Ce,be,Le,Ie);w.generateMipmaps=!1}else if(Ae){if(Ue){let Q=de(oe);t.texStorage2D(i.TEXTURE_2D,Se,Ce,Q.width,Q.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,Le,oe)}else t.texImage2D(i.TEXTURE_2D,0,Ce,be,Le,oe);m(w)&&d(O),k.__version=D.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function J(P,w,F){if(w.image.length!==6)return;let O=ae(P,w),X=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+F);let D=n.get(X);if(X.version!==D.__version||O===!0){t.activeTexture(i.TEXTURE0+F);let k=et.getPrimaries(et.workingColorSpace),B=w.colorSpace===Dn?null:et.getPrimaries(w.colorSpace),H=w.colorSpace===Dn||k===B?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,H);let Me=w.isCompressedTexture||w.image[0].isCompressedTexture,oe=w.image[0]&&w.image[0].isDataTexture,be=[];for(let me=0;me<6;me++)!Me&&!oe?be[me]=b(w.image[me],!0,s.maxCubemapSize):be[me]=oe?w.image[me].image:w.image[me],be[me]=we(w,be[me]);let Le=be[0],Ce=r.convert(w.format,w.colorSpace),Ie=r.convert(w.type),Ee=v(w.internalFormat,Ce,Ie,w.colorSpace),Ae=w.isVideoTexture!==!0,Ue=D.__version===void 0||O===!0,z=X.dataReady,Se=A(w,Le);ue(i.TEXTURE_CUBE_MAP,w);let Q;if(Me){Ae&&Ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Ee,Le.width,Le.height);for(let me=0;me<6;me++){Q=be[me].mipmaps;for(let De=0;De<Q.length;De++){let he=Q[De];w.format!==Kt?Ce!==null?Ae?z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,0,0,he.width,he.height,Ce,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,Ee,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,0,0,he.width,he.height,Ce,Ie,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,Ee,he.width,he.height,0,Ce,Ie,he.data)}}}else{if(Q=w.mipmaps,Ae&&Ue){Q.length>0&&Se++;let me=de(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Ee,me.width,me.height)}for(let me=0;me<6;me++)if(oe){Ae?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,be[me].width,be[me].height,Ce,Ie,be[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Ee,be[me].width,be[me].height,0,Ce,Ie,be[me].data);for(let De=0;De<Q.length;De++){let Pe=Q[De].image[me].image;Ae?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,0,0,Pe.width,Pe.height,Ce,Ie,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,Ee,Pe.width,Pe.height,0,Ce,Ie,Pe.data)}}else{Ae?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ce,Ie,be[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Ee,Ce,Ie,be[me]);for(let De=0;De<Q.length;De++){let he=Q[De];Ae?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,0,0,Ce,Ie,he.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,Ee,Ce,Ie,he.image[me])}}}m(w)&&d(i.TEXTURE_CUBE_MAP),D.__version=X.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function fe(P,w,F,O,X,D){let k=r.convert(F.format,F.colorSpace),B=r.convert(F.type),H=v(F.internalFormat,k,B,F.colorSpace),Me=n.get(w),oe=n.get(F);if(oe.__renderTarget=w,!Me.__hasExternalTextures){let be=Math.max(1,w.width>>D),Le=Math.max(1,w.height>>D);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?t.texImage3D(X,D,H,be,Le,w.depth,0,k,B,null):t.texImage2D(X,D,H,be,Le,0,k,B,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),ie(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,O,X,oe.__webglTexture,0,le(w)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,O,X,oe.__webglTexture,D),t.bindFramebuffer(i.FRAMEBUFFER,null)}function q(P,w,F){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){let O=w.depthTexture,X=O&&O.isDepthTexture?O.type:null,D=x(w.stencilBuffer,X),k=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=le(w);ie(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B,D,w.width,w.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,B,D,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,D,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,P)}else{let O=w.textures;for(let X=0;X<O.length;X++){let D=O[X],k=r.convert(D.format,D.colorSpace),B=r.convert(D.type),H=v(D.internalFormat,k,B,D.colorSpace),Me=le(w);F&&ie(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,H,w.width,w.height):ie(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,H,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,H,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ne(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let O=n.get(w.depthTexture);O.__renderTarget=w,(!O.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),V(w.depthTexture,0);let X=O.__webglTexture,D=le(w);if(w.depthTexture.format===Ms)ie(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0,D):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0);else if(w.depthTexture.format===Ps)ie(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0,D):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function ge(P){let w=n.get(P),F=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let O=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),O){let X=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,O.removeEventListener("dispose",X)};O.addEventListener("dispose",X),w.__depthDisposeCallback=X}w.__boundDepthTexture=O}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ne(w.__webglFramebuffer,P)}else if(F){w.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[O]),w.__webglDepthbuffer[O]===void 0)w.__webglDepthbuffer[O]=i.createRenderbuffer(),q(w.__webglDepthbuffer[O],P,!1);else{let X=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,D=w.__webglDepthbuffer[O];i.bindRenderbuffer(i.RENDERBUFFER,D),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,D)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),q(w.__webglDepthbuffer,P,!1);else{let O=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,O,i.RENDERBUFFER,X)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(P,w,F){let O=n.get(P);w!==void 0&&fe(O.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&ge(P)}function xe(P){let w=P.texture,F=n.get(P),O=n.get(w);P.addEventListener("dispose",T);let X=P.textures,D=P.isWebGLCubeRenderTarget===!0,k=X.length>1;if(k||(O.__webglTexture===void 0&&(O.__webglTexture=i.createTexture()),O.__version=w.version,a.memory.textures++),D){F.__webglFramebuffer=[];for(let B=0;B<6;B++)if(w.mipmaps&&w.mipmaps.length>0){F.__webglFramebuffer[B]=[];for(let H=0;H<w.mipmaps.length;H++)F.__webglFramebuffer[B][H]=i.createFramebuffer()}else F.__webglFramebuffer[B]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){F.__webglFramebuffer=[];for(let B=0;B<w.mipmaps.length;B++)F.__webglFramebuffer[B]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(k)for(let B=0,H=X.length;B<H;B++){let Me=n.get(X[B]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&ie(P)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let B=0;B<X.length;B++){let H=X[B];F.__webglColorRenderbuffer[B]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[B]);let Me=r.convert(H.format,H.colorSpace),oe=r.convert(H.type),be=v(H.internalFormat,Me,oe,H.colorSpace,P.isXRRenderTarget===!0),Le=le(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,be,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,F.__webglColorRenderbuffer[B])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),q(F.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(D){t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture),ue(i.TEXTURE_CUBE_MAP,w);for(let B=0;B<6;B++)if(w.mipmaps&&w.mipmaps.length>0)for(let H=0;H<w.mipmaps.length;H++)fe(F.__webglFramebuffer[B][H],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,H);else fe(F.__webglFramebuffer[B],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);m(w)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(k){for(let B=0,H=X.length;B<H;B++){let Me=X[B],oe=n.get(Me);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),ue(i.TEXTURE_2D,Me),fe(F.__webglFramebuffer,P,Me,i.COLOR_ATTACHMENT0+B,i.TEXTURE_2D,0),m(Me)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let B=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(B=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(B,O.__webglTexture),ue(B,w),w.mipmaps&&w.mipmaps.length>0)for(let H=0;H<w.mipmaps.length;H++)fe(F.__webglFramebuffer[H],P,w,i.COLOR_ATTACHMENT0,B,H);else fe(F.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,B,0);m(w)&&d(B),t.unbindTexture()}P.depthBuffer&&ge(P)}function Z(P){let w=P.textures;for(let F=0,O=w.length;F<O;F++){let X=w[F];if(m(X)){let D=_(P),k=n.get(X).__webglTexture;t.bindTexture(D,k),d(D),t.unbindTexture()}}}let K=[],R=[];function ye(P){if(P.samples>0){if(ie(P)===!1){let w=P.textures,F=P.width,O=P.height,X=i.COLOR_BUFFER_BIT,D=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=n.get(P),B=w.length>1;if(B)for(let H=0;H<w.length;H++)t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,k.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,k.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,k.__webglFramebuffer);for(let H=0;H<w.length;H++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),B){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,k.__webglColorRenderbuffer[H]);let Me=n.get(w[H]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Me,0)}i.blitFramebuffer(0,0,F,O,0,0,F,O,X,i.NEAREST),c===!0&&(K.length=0,R.length=0,K.push(i.COLOR_ATTACHMENT0+H),P.depthBuffer&&P.resolveDepthBuffer===!1&&(K.push(D),R.push(D),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),B)for(let H=0;H<w.length;H++){t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,k.__webglColorRenderbuffer[H]);let Me=n.get(w[H]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,k.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.TEXTURE_2D,Me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,k.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function le(P){return Math.min(s.maxSamples,P.samples)}function ie(P){let w=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ce(P){let w=a.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function we(P,w){let F=P.colorSpace,O=P.format,X=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||F!==Gt&&F!==Dn&&(et.getTransfer(F)===ct?(O!==Kt||X!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),w}function de(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=E,this.resetTextureUnits=I,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=Y,this.rebindTextures=Te,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ie}function Tx(i,e){function t(n,s=Dn){let r,a=et.getTransfer(s);if(n===Qn)return i.UNSIGNED_BYTE;if(n===Ql)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Af)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sf)return i.BYTE;if(n===wf)return i.SHORT;if(n===Tr)return i.UNSIGNED_SHORT;if(n===Jl)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===on)return i.HALF_FLOAT;if(n===Tf)return i.ALPHA;if(n===Cf)return i.RGB;if(n===Kt)return i.RGBA;if(n===Ef)return i.LUMINANCE;if(n===Rf)return i.LUMINANCE_ALPHA;if(n===Ms)return i.DEPTH_COMPONENT;if(n===Ps)return i.DEPTH_STENCIL;if(n===eh)return i.RED;if(n===th)return i.RED_INTEGER;if(n===Pf)return i.RG;if(n===nh)return i.RG_INTEGER;if(n===ih)return i.RGBA_INTEGER;if(n===Ua||n===Fa||n===Oa||n===Ba)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oc||n===Bc||n===kc||n===zc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gc||n===Vc||n===Wc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gc||n===Vc)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hc||n===Xc||n===qc||n===Yc||n===jc||n===Kc||n===Zc||n===Jc||n===Qc||n===$c||n===el||n===tl||n===nl||n===il)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qc)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$c)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===il)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ka||n===sl||n===rl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ka)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===If||n===al||n===ol||n===cl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ka)return r.COMPRESSED_RED_RGTC1_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Sl=class extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},mn=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cx={type:"move"},yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),d=this._getHandJoint(l,b);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cx)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ex=`
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

}`,wl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Dt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new _t({vertexShader:Ex,fragmentShader:Rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new Fs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Al=class extends yi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null,b=new wl,m=t.getContextAttributes(),d=null,_=null,v=[],x=[],A=new Ne,S=null,T=new Tt;T.viewport=new rt;let C=new Tt;C.viewport=new rt;let M=[T,C],y=new Sl,N=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let J=v[j];return J===void 0&&(J=new yr,v[j]=J),J.getTargetRaySpace()},this.getControllerGrip=function(j){let J=v[j];return J===void 0&&(J=new yr,v[j]=J),J.getGripSpace()},this.getHand=function(j){let J=v[j];return J===void 0&&(J=new yr,v[j]=J),J.getHandSpace()};function E(j){let J=x.indexOf(j.inputSource);if(J===-1)return;let fe=v[J];fe!==void 0&&(fe.update(j.inputSource,j.frame,l||a),fe.dispatchEvent({type:j.type,data:j.inputSource}))}function U(){s.removeEventListener("select",E),s.removeEventListener("selectstart",E),s.removeEventListener("selectend",E),s.removeEventListener("squeeze",E),s.removeEventListener("squeezestart",E),s.removeEventListener("squeezeend",E),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",V);for(let j=0;j<v.length;j++){let J=x[j];J!==null&&(x[j]=null,v[j].disconnect(J))}N=null,I=null,b.reset(),e.setRenderTarget(d),p=null,f=null,u=null,s=null,_=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",E),s.addEventListener("selectstart",E),s.addEventListener("selectend",E),s.addEventListener("squeeze",E),s.addEventListener("squeezestart",E),s.addEventListener("squeezeend",E),s.addEventListener("end",U),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0){let J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Nt(p.framebufferWidth,p.framebufferHeight,{format:Kt,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,fe=null,q=null;m.depth&&(q=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=m.stencil?Ps:Ms,fe=m.stencil?Rs:Wi);let ne={colorFormat:t.RGBA8,depthFormat:q,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(ne),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Nt(f.textureWidth,f.textureHeight,{format:Kt,type:Qn,depthTexture:new ja(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ae.setContext(s),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function V(j){for(let J=0;J<j.removed.length;J++){let fe=j.removed[J],q=x.indexOf(fe);q>=0&&(x[q]=null,v[q].disconnect(fe))}for(let J=0;J<j.added.length;J++){let fe=j.added[J],q=x.indexOf(fe);if(q===-1){for(let ge=0;ge<v.length;ge++)if(ge>=x.length){x.push(fe),q=ge;break}else if(x[ge]===null){x[ge]=fe,q=ge;break}if(q===-1)break}let ne=v[q];ne&&ne.connect(fe)}}let G=new W,$=new W;function Y(j,J,fe){G.setFromMatrixPosition(J.matrixWorld),$.setFromMatrixPosition(fe.matrixWorld);let q=G.distanceTo($),ne=J.projectionMatrix.elements,ge=fe.projectionMatrix.elements,Te=ne[14]/(ne[10]-1),xe=ne[14]/(ne[10]+1),Z=(ne[9]+1)/ne[5],K=(ne[9]-1)/ne[5],R=(ne[8]-1)/ne[0],ye=(ge[8]+1)/ge[0],le=Te*R,ie=Te*ye,ce=q/(-R+ye),we=ce*-R;if(J.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(we),j.translateZ(ce),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ne[10]===-1)j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let de=Te+ce,P=xe+ce,w=le-we,F=ie+(q-we),O=Z*xe/P*de,X=K*xe/P*de;j.projectionMatrix.makePerspective(w,F,O,X,de,P),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function te(j,J){J===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(J.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let J=j.near,fe=j.far;b.texture!==null&&(b.depthNear>0&&(J=b.depthNear),b.depthFar>0&&(fe=b.depthFar)),y.near=C.near=T.near=J,y.far=C.far=T.far=fe,(N!==y.near||I!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),N=y.near,I=y.far),T.layers.mask=j.layers.mask|2,C.layers.mask=j.layers.mask|4,y.layers.mask=T.layers.mask|C.layers.mask;let q=j.parent,ne=y.cameras;te(y,q);for(let ge=0;ge<ne.length;ge++)te(ne[ge],q);ne.length===2?Y(y,T,C):y.projectionMatrix.copy(T.projectionMatrix),ee(j,y,q)};function ee(j,J,fe){fe===null?j.matrix.copy(J.matrixWorld):(j.matrix.copy(fe.matrixWorld),j.matrix.invert(),j.matrix.multiply(J.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ds*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(y)};let Re=null;function ue(j,J){if(h=J.getViewerPose(l||a),g=J,h!==null){let fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let q=!1;fe.length!==y.cameras.length&&(y.cameras.length=0,q=!0);for(let ge=0;ge<fe.length;ge++){let Te=fe[ge],xe=null;if(p!==null)xe=p.getViewport(Te);else{let K=u.getViewSubImage(f,Te);xe=K.viewport,ge===0&&(e.setRenderTargetTextures(_,K.colorTexture,f.ignoreDepthValues?void 0:K.depthStencilTexture),e.setRenderTarget(_))}let Z=M[ge];Z===void 0&&(Z=new Tt,Z.layers.enable(ge),Z.viewport=new rt,M[ge]=Z),Z.matrix.fromArray(Te.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(Te.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(xe.x,xe.y,xe.width,xe.height),ge===0&&(y.matrix.copy(Z.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),q===!0&&y.cameras.push(Z)}let ne=s.enabledFeatures;if(ne&&ne.includes("depth-sensing")){let ge=u.getDepthInformation(fe[0]);ge&&ge.isValid&&ge.texture&&b.init(e,ge,s.renderState)}}for(let fe=0;fe<v.length;fe++){let q=x[fe],ne=v[fe];q!==null&&ne!==void 0&&ne.update(q,J,l||a)}Re&&Re(j,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}let ae=new zf;ae.setAnimationLoop(ue),this.setAnimationLoop=function(j){Re=j},this.dispose=function(){}}},ki=new bn,Px=new Ye;function Ix(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,kf(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,_,v,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),b(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,_,v):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===kt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===kt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _=e.get(d),v=_.envMap,x=_.envMapRotation;v&&(m.envMap.value=v,ki.copy(x),ki.x*=-1,ki.y*=-1,ki.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),m.envMapRotation.value.setFromMatrix4(Px.makeRotationFromEuler(ki)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,_,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===kt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function b(m,d){let _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Lx(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,v){let x=v.program;n.uniformBlockBinding(_,x)}function l(_,v){let x=s[_.id];x===void 0&&(g(_),x=h(_),s[_.id]=x,_.addEventListener("dispose",m));let A=v.program;n.updateUBOMapping(_,A);let S=e.render.frame;r[_.id]!==S&&(f(_),r[_.id]=S)}function h(_){let v=u();_.__bindingPointIndex=v;let x=i.createBuffer(),A=_.__size,S=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,A,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let v=s[_.id],x=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let S=0,T=x.length;S<T;S++){let C=Array.isArray(x[S])?x[S]:[x[S]];for(let M=0,y=C.length;M<y;M++){let N=C[M];if(p(N,S,M,A)===!0){let I=N.__offset,E=Array.isArray(N.value)?N.value:[N.value],U=0;for(let V=0;V<E.length;V++){let G=E[V],$=b(G);typeof G=="number"||typeof G=="boolean"?(N.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,I+U,N.__data)):G.isMatrix3?(N.__data[0]=G.elements[0],N.__data[1]=G.elements[1],N.__data[2]=G.elements[2],N.__data[3]=0,N.__data[4]=G.elements[3],N.__data[5]=G.elements[4],N.__data[6]=G.elements[5],N.__data[7]=0,N.__data[8]=G.elements[6],N.__data[9]=G.elements[7],N.__data[10]=G.elements[8],N.__data[11]=0):(G.toArray(N.__data,U),U+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,v,x,A){let S=_.value,T=v+"_"+x;if(A[T]===void 0)return typeof S=="number"||typeof S=="boolean"?A[T]=S:A[T]=S.clone(),!0;{let C=A[T];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return A[T]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function g(_){let v=_.uniforms,x=0,A=16;for(let T=0,C=v.length;T<C;T++){let M=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,N=M.length;y<N;y++){let I=M[y],E=Array.isArray(I.value)?I.value:[I.value];for(let U=0,V=E.length;U<V;U++){let G=E[U],$=b(G),Y=x%A,te=Y%$.boundary,ee=Y+te;x+=te,ee!==0&&A-ee<$.storage&&(x+=A-ee),I.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=$.storage}}}let S=x%A;return S>0&&(x+=A-S),_.__size=x,_.__cache={},this}function b(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){let v=_.target;v.removeEventListener("dispose",m);let x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}var Ka=class{constructor(e={}){let{canvas:t=Op(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),b=new Int32Array(4),m=null,d=null,_=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this.toneMapping=_i,this.toneMappingExposure=1;let x=this,A=!1,S=0,T=0,C=null,M=-1,y=null,N=new rt,I=new rt,E=null,U=new He(0),V=0,G=t.width,$=t.height,Y=1,te=null,ee=null,Re=new rt(0,0,G,$),ue=new rt(0,0,G,$),ae=!1,j=new Er,J=!1,fe=!1,q=new Ye,ne=new Ye,ge=new W,Te=new rt,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Z=!1;function K(){return C===null?Y:1}let R=n;function ye(L,se){return t.getContext(L,se)}try{let L={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",he,!1),R===null){let se="webgl2";if(R=ye(se,L),R===null)throw ye(se)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let le,ie,ce,we,de,P,w,F,O,X,D,k,B,H,Me,oe,be,Le,Ce,Ie,Ee,Ae,Ue,z;function Se(){le=new jg(R),le.init(),Ae=new Tx(R,le),ie=new Vg(R,le,e,Ae),ce=new Sx(R,le),ie.reverseDepthBuffer&&f&&ce.buffers.depth.setReversed(!0),we=new Jg(R),de=new hx,P=new Ax(R,le,ce,de,ie,Ae,we),w=new Hg(x),F=new Yg(x),O=new sm(R),Ue=new zg(R,O),X=new Kg(R,O,we,Ue),D=new $g(R,X,O,we),Ce=new Qg(R,ie,P),oe=new Wg(de),k=new lx(x,w,F,le,ie,Ue,oe),B=new Ix(x,de),H=new fx,Me=new xx(le),Le=new kg(x,w,F,ce,D,p,c),be=new yx(x,D,ie),z=new Lx(R,we,ie,ce),Ie=new Gg(R,le,we),Ee=new Zg(R,le,we),we.programs=k.programs,x.capabilities=ie,x.extensions=le,x.properties=de,x.renderLists=H,x.shadowMap=be,x.state=ce,x.info=we}Se();let Q=new Al(x,R);this.xr=Q,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let L=le.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=le.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(L){L!==void 0&&(Y=L,this.setSize(G,$,!1))},this.getSize=function(L){return L.set(G,$)},this.setSize=function(L,se,ve=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=L,$=se,t.width=Math.floor(L*Y),t.height=Math.floor(se*Y),ve===!0&&(t.style.width=L+"px",t.style.height=se+"px"),this.setViewport(0,0,L,se)},this.getDrawingBufferSize=function(L){return L.set(G*Y,$*Y).floor()},this.setDrawingBufferSize=function(L,se,ve){G=L,$=se,Y=ve,t.width=Math.floor(L*ve),t.height=Math.floor(se*ve),this.setViewport(0,0,L,se)},this.getCurrentViewport=function(L){return L.copy(N)},this.getViewport=function(L){return L.copy(Re)},this.setViewport=function(L,se,ve,_e){L.isVector4?Re.set(L.x,L.y,L.z,L.w):Re.set(L,se,ve,_e),ce.viewport(N.copy(Re).multiplyScalar(Y).round())},this.getScissor=function(L){return L.copy(ue)},this.setScissor=function(L,se,ve,_e){L.isVector4?ue.set(L.x,L.y,L.z,L.w):ue.set(L,se,ve,_e),ce.scissor(I.copy(ue).multiplyScalar(Y).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(L){ce.setScissorTest(ae=L)},this.setOpaqueSort=function(L){te=L},this.setTransparentSort=function(L){ee=L},this.getClearColor=function(L){return L.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(L=!0,se=!0,ve=!0){let _e=0;if(L){let re=!1;if(C!==null){let Oe=C.texture.format;re=Oe===ih||Oe===nh||Oe===th}if(re){let Oe=C.texture.type,ke=Oe===Qn||Oe===Wi||Oe===Tr||Oe===Rs||Oe===Ql||Oe===$l,Ge=Le.getClearColor(),Ve=Le.getClearAlpha(),je=Ge.r,Je=Ge.g,We=Ge.b;ke?(g[0]=je,g[1]=Je,g[2]=We,g[3]=Ve,R.clearBufferuiv(R.COLOR,0,g)):(b[0]=je,b[1]=Je,b[2]=We,b[3]=Ve,R.clearBufferiv(R.COLOR,0,b))}else _e|=R.COLOR_BUFFER_BIT}se&&(_e|=R.DEPTH_BUFFER_BIT),ve&&(_e|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(_e)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",he,!1),H.dispose(),Me.dispose(),de.dispose(),w.dispose(),F.dispose(),D.dispose(),Ue.dispose(),z.dispose(),k.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Pt),Q.removeEventListener("sessionend",wn),un.stop()};function me(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let L=we.autoReset,se=be.enabled,ve=be.autoUpdate,_e=be.needsUpdate,re=be.type;Se(),we.autoReset=L,be.enabled=se,be.autoUpdate=ve,be.needsUpdate=_e,be.type=re}function he(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Pe(L){let se=L.target;se.removeEventListener("dispose",Pe),ze(se)}function ze(L){Ke(L),de.remove(L)}function Ke(L){let se=de.get(L).programs;se!==void 0&&(se.forEach(function(ve){k.releaseProgram(ve)}),L.isShaderMaterial&&k.releaseShaderCache(L))}this.renderBufferDirect=function(L,se,ve,_e,re,Oe){se===null&&(se=xe);let ke=re.isMesh&&re.matrixWorld.determinant()<0,Ge=It(L,se,ve,_e,re);ce.setMaterial(_e,ke);let Ve=ve.index,je=1;if(_e.wireframe===!0){if(Ve=X.getWireframeAttribute(ve),Ve===void 0)return;je=2}let Je=ve.drawRange,We=ve.attributes.position,st=Je.start*je,ut=(Je.start+Je.count)*je;Oe!==null&&(st=Math.max(st,Oe.start*je),ut=Math.min(ut,(Oe.start+Oe.count)*je)),Ve!==null?(st=Math.max(st,0),ut=Math.min(ut,Ve.count)):We!=null&&(st=Math.max(st,0),ut=Math.min(ut,We.count));let dt=ut-st;if(dt<0||dt===1/0)return;Ue.setup(re,_e,Ge,ve,Ve);let jt,at=Ie;if(Ve!==null&&(jt=O.get(Ve),at=Ee,at.setIndex(jt)),re.isMesh)_e.wireframe===!0?(ce.setLineWidth(_e.wireframeLinewidth*K()),at.setMode(R.LINES)):at.setMode(R.TRIANGLES);else if(re.isLine){let qe=_e.linewidth;qe===void 0&&(qe=1),ce.setLineWidth(qe*K()),re.isLineSegments?at.setMode(R.LINES):re.isLineLoop?at.setMode(R.LINE_LOOP):at.setMode(R.LINE_STRIP)}else re.isPoints?at.setMode(R.POINTS):re.isSprite&&at.setMode(R.TRIANGLES);if(re.isBatchedMesh)if(re._multiDrawInstances!==null)at.renderMultiDrawInstances(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount,re._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))at.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{let qe=re._multiDrawStarts,kn=re._multiDrawCounts,ot=re._multiDrawCount,An=Ve?O.get(Ve).bytesPerElement:1,Qi=de.get(_e).currentProgram.getUniforms();for(let en=0;en<ot;en++)Qi.setValue(R,"_gl_DrawID",en),at.render(qe[en]/An,kn[en])}else if(re.isInstancedMesh)at.renderInstances(st,dt,re.count);else if(ve.isInstancedBufferGeometry){let qe=ve._maxInstanceCount!==void 0?ve._maxInstanceCount:1/0,kn=Math.min(ve.instanceCount,qe);at.renderInstances(st,dt,kn)}else at.render(st,dt)};function Ze(L,se,ve){L.transparent===!0&&L.side===sn&&L.forceSinglePass===!1?(L.side=kt,L.needsUpdate=!0,Xe(L,se,ve),L.side=Un,L.needsUpdate=!0,Xe(L,se,ve),L.side=sn):Xe(L,se,ve)}this.compile=function(L,se,ve=null){ve===null&&(ve=L),d=Me.get(ve),d.init(se),v.push(d),ve.traverseVisible(function(re){re.isLight&&re.layers.test(se.layers)&&(d.pushLight(re),re.castShadow&&d.pushShadow(re))}),L!==ve&&L.traverseVisible(function(re){re.isLight&&re.layers.test(se.layers)&&(d.pushLight(re),re.castShadow&&d.pushShadow(re))}),d.setupLights();let _e=new Set;return L.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;let Oe=re.material;if(Oe)if(Array.isArray(Oe))for(let ke=0;ke<Oe.length;ke++){let Ge=Oe[ke];Ze(Ge,ve,re),_e.add(Ge)}else Ze(Oe,ve,re),_e.add(Oe)}),v.pop(),d=null,_e},this.compileAsync=function(L,se,ve=null){let _e=this.compile(L,se,ve);return new Promise(re=>{function Oe(){if(_e.forEach(function(ke){de.get(ke).currentProgram.isReady()&&_e.delete(ke)}),_e.size===0){re(L);return}setTimeout(Oe,10)}le.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Rt=null;function Yt(L){Rt&&Rt(L)}function Pt(){un.stop()}function wn(){un.start()}let un=new zf;un.setAnimationLoop(Yt),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(L){Rt=L,Q.setAnimationLoop(L),L===null?un.stop():un.start()},Q.addEventListener("sessionstart",Pt),Q.addEventListener("sessionend",wn),this.render=function(L,se){if(se!==void 0&&se.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),se.parent===null&&se.matrixWorldAutoUpdate===!0&&se.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(se),se=Q.getCamera()),L.isScene===!0&&L.onBeforeRender(x,L,se,C),d=Me.get(L,v.length),d.init(se),v.push(d),ne.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),j.setFromProjectionMatrix(ne),fe=this.localClippingEnabled,J=oe.init(this.clippingPlanes,fe),m=H.get(L,_.length),m.init(),_.push(m),Q.enabled===!0&&Q.isPresenting===!0){let Oe=x.xr.getDepthSensingMesh();Oe!==null&&tr(Oe,se,-1/0,x.sortObjects)}tr(L,se,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(te,ee),Z=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Z&&Le.addToRenderList(m,L),this.info.render.frame++,J===!0&&oe.beginShadows();let ve=d.state.shadowsArray;be.render(ve,L,se),J===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();let _e=m.opaque,re=m.transmissive;if(d.setupLights(),se.isArrayCamera){let Oe=se.cameras;if(re.length>0)for(let ke=0,Ge=Oe.length;ke<Ge;ke++){let Ve=Oe[ke];nr(_e,re,L,Ve)}Z&&Le.render(L);for(let ke=0,Ge=Oe.length;ke<Ge;ke++){let Ve=Oe[ke];ta(m,L,Ve,Ve.viewport)}}else re.length>0&&nr(_e,re,L,se),Z&&Le.render(L),ta(m,L,se);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),L.isScene===!0&&L.onAfterRender(x,L,se),Ue.resetDefaultState(),M=-1,y=null,v.pop(),v.length>0?(d=v[v.length-1],J===!0&&oe.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function tr(L,se,ve,_e){if(L.visible===!1)return;if(L.layers.test(se.layers)){if(L.isGroup)ve=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(se);else if(L.isLight)d.pushLight(L),L.castShadow&&d.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||j.intersectsSprite(L)){_e&&Te.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ne);let ke=D.update(L),Ge=L.material;Ge.visible&&m.push(L,ke,Ge,ve,Te.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||j.intersectsObject(L))){let ke=D.update(L),Ge=L.material;if(_e&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Te.copy(L.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Te.copy(ke.boundingSphere.center)),Te.applyMatrix4(L.matrixWorld).applyMatrix4(ne)),Array.isArray(Ge)){let Ve=ke.groups;for(let je=0,Je=Ve.length;je<Je;je++){let We=Ve[je],st=Ge[We.materialIndex];st&&st.visible&&m.push(L,ke,st,ve,Te.z,We)}}else Ge.visible&&m.push(L,ke,Ge,ve,Te.z,null)}}let Oe=L.children;for(let ke=0,Ge=Oe.length;ke<Ge;ke++)tr(Oe[ke],se,ve,_e)}function ta(L,se,ve,_e){let re=L.opaque,Oe=L.transmissive,ke=L.transparent;d.setupLightsView(ve),J===!0&&oe.setGlobalState(x.clippingPlanes,ve),_e&&ce.viewport(N.copy(_e)),re.length>0&&ci(re,se,ve),Oe.length>0&&ci(Oe,se,ve),ke.length>0&&ci(ke,se,ve),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function nr(L,se,ve,_e){if((ve.isScene===!0?ve.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[_e.id]===void 0&&(d.state.transmissionRenderTarget[_e.id]=new Nt(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?on:Qn,minFilter:pn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let Oe=d.state.transmissionRenderTarget[_e.id],ke=_e.viewport||N;Oe.setSize(ke.z,ke.w);let Ge=x.getRenderTarget();x.setRenderTarget(Oe),x.getClearColor(U),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),Z&&Le.render(ve);let Ve=x.toneMapping;x.toneMapping=_i;let je=_e.viewport;if(_e.viewport!==void 0&&(_e.viewport=void 0),d.setupLightsView(_e),J===!0&&oe.setGlobalState(x.clippingPlanes,_e),ci(L,ve,_e),P.updateMultisampleRenderTarget(Oe),P.updateRenderTargetMipmap(Oe),le.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let We=0,st=se.length;We<st;We++){let ut=se[We],dt=ut.object,jt=ut.geometry,at=ut.material,qe=ut.group;if(at.side===sn&&dt.layers.test(_e.layers)){let kn=at.side;at.side=kt,at.needsUpdate=!0,Fe(dt,ve,_e,jt,at,qe),at.side=kn,at.needsUpdate=!0,Je=!0}}Je===!0&&(P.updateMultisampleRenderTarget(Oe),P.updateRenderTargetMipmap(Oe))}x.setRenderTarget(Ge),x.setClearColor(U,V),je!==void 0&&(_e.viewport=je),x.toneMapping=Ve}function ci(L,se,ve){let _e=se.isScene===!0?se.overrideMaterial:null;for(let re=0,Oe=L.length;re<Oe;re++){let ke=L[re],Ge=ke.object,Ve=ke.geometry,je=_e===null?ke.material:_e,Je=ke.group;Ge.layers.test(ve.layers)&&Fe(Ge,se,ve,Ve,je,Je)}}function Fe(L,se,ve,_e,re,Oe){L.onBeforeRender(x,se,ve,_e,re,Oe),L.modelViewMatrix.multiplyMatrices(ve.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),re.onBeforeRender(x,se,ve,_e,L,Oe),re.transparent===!0&&re.side===sn&&re.forceSinglePass===!1?(re.side=kt,re.needsUpdate=!0,x.renderBufferDirect(ve,se,_e,re,L,Oe),re.side=Un,re.needsUpdate=!0,x.renderBufferDirect(ve,se,_e,re,L,Oe),re.side=sn):x.renderBufferDirect(ve,se,_e,re,L,Oe),L.onAfterRender(x,se,ve,_e,re,Oe)}function Xe(L,se,ve){se.isScene!==!0&&(se=xe);let _e=de.get(L),re=d.state.lights,Oe=d.state.shadowsArray,ke=re.state.version,Ge=k.getParameters(L,re.state,Oe,se,ve),Ve=k.getProgramCacheKey(Ge),je=_e.programs;_e.environment=L.isMeshStandardMaterial?se.environment:null,_e.fog=se.fog,_e.envMap=(L.isMeshStandardMaterial?F:w).get(L.envMap||_e.environment),_e.envMapRotation=_e.environment!==null&&L.envMap===null?se.environmentRotation:L.envMapRotation,je===void 0&&(L.addEventListener("dispose",Pe),je=new Map,_e.programs=je);let Je=je.get(Ve);if(Je!==void 0){if(_e.currentProgram===Je&&_e.lightsStateVersion===ke)return mt(L,Ge),Je}else Ge.uniforms=k.getUniforms(L),L.onBeforeCompile(Ge,x),Je=k.acquireProgram(Ge,Ve),je.set(Ve,Je),_e.uniforms=Ge.uniforms;let We=_e.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(We.clippingPlanes=oe.uniform),mt(L,Ge),_e.needsLights=li(L),_e.lightsStateVersion=ke,_e.needsLights&&(We.ambientLightColor.value=re.state.ambient,We.lightProbe.value=re.state.probe,We.directionalLights.value=re.state.directional,We.directionalLightShadows.value=re.state.directionalShadow,We.spotLights.value=re.state.spot,We.spotLightShadows.value=re.state.spotShadow,We.rectAreaLights.value=re.state.rectArea,We.ltc_1.value=re.state.rectAreaLTC1,We.ltc_2.value=re.state.rectAreaLTC2,We.pointLights.value=re.state.point,We.pointLightShadows.value=re.state.pointShadow,We.hemisphereLights.value=re.state.hemi,We.directionalShadowMap.value=re.state.directionalShadowMap,We.directionalShadowMatrix.value=re.state.directionalShadowMatrix,We.spotShadowMap.value=re.state.spotShadowMap,We.spotLightMatrix.value=re.state.spotLightMatrix,We.spotLightMap.value=re.state.spotLightMap,We.pointShadowMap.value=re.state.pointShadowMap,We.pointShadowMatrix.value=re.state.pointShadowMatrix),_e.currentProgram=Je,_e.uniformsList=null,Je}function it(L){if(L.uniformsList===null){let se=L.currentProgram.getUniforms();L.uniformsList=ws.seqWithValue(se.seq,L.uniforms)}return L.uniformsList}function mt(L,se){let ve=de.get(L);ve.outputColorSpace=se.outputColorSpace,ve.batching=se.batching,ve.batchingColor=se.batchingColor,ve.instancing=se.instancing,ve.instancingColor=se.instancingColor,ve.instancingMorph=se.instancingMorph,ve.skinning=se.skinning,ve.morphTargets=se.morphTargets,ve.morphNormals=se.morphNormals,ve.morphColors=se.morphColors,ve.morphTargetsCount=se.morphTargetsCount,ve.numClippingPlanes=se.numClippingPlanes,ve.numIntersection=se.numClipIntersection,ve.vertexAlphas=se.vertexAlphas,ve.vertexTangents=se.vertexTangents,ve.toneMapping=se.toneMapping}function It(L,se,ve,_e,re){se.isScene!==!0&&(se=xe),P.resetTextureUnits();let Oe=se.fog,ke=_e.isMeshStandardMaterial?se.environment:null,Ge=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Gt,Ve=(_e.isMeshStandardMaterial?F:w).get(_e.envMap||ke),je=_e.vertexColors===!0&&!!ve.attributes.color&&ve.attributes.color.itemSize===4,Je=!!ve.attributes.tangent&&(!!_e.normalMap||_e.anisotropy>0),We=!!ve.morphAttributes.position,st=!!ve.morphAttributes.normal,ut=!!ve.morphAttributes.color,dt=_i;_e.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(dt=x.toneMapping);let jt=ve.morphAttributes.position||ve.morphAttributes.normal||ve.morphAttributes.color,at=jt!==void 0?jt.length:0,qe=de.get(_e),kn=d.state.lights;if(J===!0&&(fe===!0||L!==y)){let fn=L===y&&_e.id===M;oe.setState(_e,L,fn)}let ot=!1;_e.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==kn.state.version||qe.outputColorSpace!==Ge||re.isBatchedMesh&&qe.batching===!1||!re.isBatchedMesh&&qe.batching===!0||re.isBatchedMesh&&qe.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&qe.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&qe.instancing===!1||!re.isInstancedMesh&&qe.instancing===!0||re.isSkinnedMesh&&qe.skinning===!1||!re.isSkinnedMesh&&qe.skinning===!0||re.isInstancedMesh&&qe.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&qe.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&qe.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&qe.instancingMorph===!1&&re.morphTexture!==null||qe.envMap!==Ve||_e.fog===!0&&qe.fog!==Oe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==oe.numPlanes||qe.numIntersection!==oe.numIntersection)||qe.vertexAlphas!==je||qe.vertexTangents!==Je||qe.morphTargets!==We||qe.morphNormals!==st||qe.morphColors!==ut||qe.toneMapping!==dt||qe.morphTargetsCount!==at)&&(ot=!0):(ot=!0,qe.__version=_e.version);let An=qe.currentProgram;ot===!0&&(An=Xe(_e,se,re));let Qi=!1,en=!1,ir=!1,pt=An.getUniforms(),In=qe.uniforms;if(ce.useProgram(An.program)&&(Qi=!0,en=!0,ir=!0),_e.id!==M&&(M=_e.id,en=!0),Qi||y!==L){ce.buffers.depth.getReversed()?(q.copy(L.projectionMatrix),kp(q),zp(q),pt.setValue(R,"projectionMatrix",q)):pt.setValue(R,"projectionMatrix",L.projectionMatrix),pt.setValue(R,"viewMatrix",L.matrixWorldInverse);let hi=pt.map.cameraPosition;hi!==void 0&&hi.setValue(R,ge.setFromMatrixPosition(L.matrixWorld)),ie.logarithmicDepthBuffer&&pt.setValue(R,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(_e.isMeshPhongMaterial||_e.isMeshToonMaterial||_e.isMeshLambertMaterial||_e.isMeshBasicMaterial||_e.isMeshStandardMaterial||_e.isShaderMaterial)&&pt.setValue(R,"isOrthographic",L.isOrthographicCamera===!0),y!==L&&(y=L,en=!0,ir=!0)}if(re.isSkinnedMesh){pt.setOptional(R,re,"bindMatrix"),pt.setOptional(R,re,"bindMatrixInverse");let fn=re.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),pt.setValue(R,"boneTexture",fn.boneTexture,P))}re.isBatchedMesh&&(pt.setOptional(R,re,"batchingTexture"),pt.setValue(R,"batchingTexture",re._matricesTexture,P),pt.setOptional(R,re,"batchingIdTexture"),pt.setValue(R,"batchingIdTexture",re._indirectTexture,P),pt.setOptional(R,re,"batchingColorTexture"),re._colorsTexture!==null&&pt.setValue(R,"batchingColorTexture",re._colorsTexture,P));let sr=ve.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0)&&Ce.update(re,ve,An),(en||qe.receiveShadow!==re.receiveShadow)&&(qe.receiveShadow=re.receiveShadow,pt.setValue(R,"receiveShadow",re.receiveShadow)),_e.isMeshGouraudMaterial&&_e.envMap!==null&&(In.envMap.value=Ve,In.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),_e.isMeshStandardMaterial&&_e.envMap===null&&se.environment!==null&&(In.envMapIntensity.value=se.environmentIntensity),en&&(pt.setValue(R,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&Bn(In,ir),Oe&&_e.fog===!0&&B.refreshFogUniforms(In,Oe),B.refreshMaterialUniforms(In,_e,Y,$,d.state.transmissionRenderTarget[L.id]),ws.upload(R,it(qe),In,P)),_e.isShaderMaterial&&_e.uniformsNeedUpdate===!0&&(ws.upload(R,it(qe),In,P),_e.uniformsNeedUpdate=!1),_e.isSpriteMaterial&&pt.setValue(R,"center",re.center),pt.setValue(R,"modelViewMatrix",re.modelViewMatrix),pt.setValue(R,"normalMatrix",re.normalMatrix),pt.setValue(R,"modelMatrix",re.matrixWorld),_e.isShaderMaterial||_e.isRawShaderMaterial){let fn=_e.uniformsGroups;for(let hi=0,ui=fn.length;hi<ui;hi++){let Yh=fn[hi];z.update(Yh,An),z.bind(Yh,An)}}return An}function Bn(L,se){L.ambientLightColor.needsUpdate=se,L.lightProbe.needsUpdate=se,L.directionalLights.needsUpdate=se,L.directionalLightShadows.needsUpdate=se,L.pointLights.needsUpdate=se,L.pointLightShadows.needsUpdate=se,L.spotLights.needsUpdate=se,L.spotLightShadows.needsUpdate=se,L.rectAreaLights.needsUpdate=se,L.hemisphereLights.needsUpdate=se}function li(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(L,se,ve){de.get(L.texture).__webglTexture=se,de.get(L.depthTexture).__webglTexture=ve;let _e=de.get(L);_e.__hasExternalTextures=!0,_e.__autoAllocateDepthBuffer=ve===void 0,_e.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),_e.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,se){let ve=de.get(L);ve.__webglFramebuffer=se,ve.__useDefaultFramebuffer=se===void 0},this.setRenderTarget=function(L,se=0,ve=0){C=L,S=se,T=ve;let _e=!0,re=null,Oe=!1,ke=!1;if(L){let Ve=de.get(L);if(Ve.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(R.FRAMEBUFFER,null),_e=!1;else if(Ve.__webglFramebuffer===void 0)P.setupRenderTarget(L);else if(Ve.__hasExternalTextures)P.rebindTextures(L,de.get(L.texture).__webglTexture,de.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let We=L.depthTexture;if(Ve.__boundDepthTexture!==We){if(We!==null&&de.has(We)&&(L.width!==We.image.width||L.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(L)}}let je=L.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(ke=!0);let Je=de.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Je[se])?re=Je[se][ve]:re=Je[se],Oe=!0):L.samples>0&&P.useMultisampledRTT(L)===!1?re=de.get(L).__webglMultisampledFramebuffer:Array.isArray(Je)?re=Je[ve]:re=Je,N.copy(L.viewport),I.copy(L.scissor),E=L.scissorTest}else N.copy(Re).multiplyScalar(Y).floor(),I.copy(ue).multiplyScalar(Y).floor(),E=ae;if(ce.bindFramebuffer(R.FRAMEBUFFER,re)&&_e&&ce.drawBuffers(L,re),ce.viewport(N),ce.scissor(I),ce.setScissorTest(E),Oe){let Ve=de.get(L.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ve.__webglTexture,ve)}else if(ke){let Ve=de.get(L.texture),je=se||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ve.__webglTexture,ve||0,je)}M=-1},this.readRenderTargetPixels=function(L,se,ve,_e,re,Oe,ke){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=de.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke]),Ge){ce.bindFramebuffer(R.FRAMEBUFFER,Ge);try{let Ve=L.texture,je=Ve.format,Je=Ve.type;if(!ie.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}se>=0&&se<=L.width-_e&&ve>=0&&ve<=L.height-re&&R.readPixels(se,ve,_e,re,Ae.convert(je),Ae.convert(Je),Oe)}finally{let Ve=C!==null?de.get(C).__webglFramebuffer:null;ce.bindFramebuffer(R.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(L,se,ve,_e,re,Oe,ke){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=de.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke]),Ge){let Ve=L.texture,je=Ve.format,Je=Ve.type;if(!ie.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(se>=0&&se<=L.width-_e&&ve>=0&&ve<=L.height-re){ce.bindFramebuffer(R.FRAMEBUFFER,Ge);let We=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,We),R.bufferData(R.PIXEL_PACK_BUFFER,Oe.byteLength,R.STREAM_READ),R.readPixels(se,ve,_e,re,Ae.convert(je),Ae.convert(Je),0);let st=C!==null?de.get(C).__webglFramebuffer:null;ce.bindFramebuffer(R.FRAMEBUFFER,st);let ut=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Bp(R,ut,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,We),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Oe),R.deleteBuffer(We),R.deleteSync(ut),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,se=null,ve=0){L.isTexture!==!0&&(gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),se=arguments[0]||null,L=arguments[1]);let _e=Math.pow(2,-ve),re=Math.floor(L.image.width*_e),Oe=Math.floor(L.image.height*_e),ke=se!==null?se.x:0,Ge=se!==null?se.y:0;P.setTexture2D(L,0),R.copyTexSubImage2D(R.TEXTURE_2D,ve,0,0,ke,Ge,re,Oe),ce.unbindTexture()},this.copyTextureToTexture=function(L,se,ve=null,_e=null,re=0){L.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture function signature has changed."),_e=arguments[0]||null,L=arguments[1],se=arguments[2],re=arguments[3]||0,ve=null);let Oe,ke,Ge,Ve,je,Je,We,st,ut,dt=L.isCompressedTexture?L.mipmaps[re]:L.image;ve!==null?(Oe=ve.max.x-ve.min.x,ke=ve.max.y-ve.min.y,Ge=ve.isBox3?ve.max.z-ve.min.z:1,Ve=ve.min.x,je=ve.min.y,Je=ve.isBox3?ve.min.z:0):(Oe=dt.width,ke=dt.height,Ge=dt.depth||1,Ve=0,je=0,Je=0),_e!==null?(We=_e.x,st=_e.y,ut=_e.z):(We=0,st=0,ut=0);let jt=Ae.convert(se.format),at=Ae.convert(se.type),qe;se.isData3DTexture?(P.setTexture3D(se,0),qe=R.TEXTURE_3D):se.isDataArrayTexture||se.isCompressedArrayTexture?(P.setTexture2DArray(se,0),qe=R.TEXTURE_2D_ARRAY):(P.setTexture2D(se,0),qe=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,se.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,se.unpackAlignment);let kn=R.getParameter(R.UNPACK_ROW_LENGTH),ot=R.getParameter(R.UNPACK_IMAGE_HEIGHT),An=R.getParameter(R.UNPACK_SKIP_PIXELS),Qi=R.getParameter(R.UNPACK_SKIP_ROWS),en=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,dt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,dt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ve),R.pixelStorei(R.UNPACK_SKIP_ROWS,je),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Je);let ir=L.isDataArrayTexture||L.isData3DTexture,pt=se.isDataArrayTexture||se.isData3DTexture;if(L.isRenderTargetTexture||L.isDepthTexture){let In=de.get(L),sr=de.get(se),fn=de.get(In.__renderTarget),hi=de.get(sr.__renderTarget);ce.bindFramebuffer(R.READ_FRAMEBUFFER,fn.__webglFramebuffer),ce.bindFramebuffer(R.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let ui=0;ui<Ge;ui++)ir&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,de.get(L).__webglTexture,re,Je+ui),L.isDepthTexture?(pt&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,de.get(se).__webglTexture,re,ut+ui),R.blitFramebuffer(Ve,je,Oe,ke,We,st,Oe,ke,R.DEPTH_BUFFER_BIT,R.NEAREST)):pt?R.copyTexSubImage3D(qe,re,We,st,ut+ui,Ve,je,Oe,ke):R.copyTexSubImage2D(qe,re,We,st,ut+ui,Ve,je,Oe,ke);ce.bindFramebuffer(R.READ_FRAMEBUFFER,null),ce.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else pt?L.isDataTexture||L.isData3DTexture?R.texSubImage3D(qe,re,We,st,ut,Oe,ke,Ge,jt,at,dt.data):se.isCompressedArrayTexture?R.compressedTexSubImage3D(qe,re,We,st,ut,Oe,ke,Ge,jt,dt.data):R.texSubImage3D(qe,re,We,st,ut,Oe,ke,Ge,jt,at,dt):L.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,re,We,st,Oe,ke,jt,at,dt.data):L.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,re,We,st,dt.width,dt.height,jt,dt.data):R.texSubImage2D(R.TEXTURE_2D,re,We,st,Oe,ke,jt,at,dt);R.pixelStorei(R.UNPACK_ROW_LENGTH,kn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ot),R.pixelStorei(R.UNPACK_SKIP_PIXELS,An),R.pixelStorei(R.UNPACK_SKIP_ROWS,Qi),R.pixelStorei(R.UNPACK_SKIP_IMAGES,en),re===0&&se.generateMipmaps&&R.generateMipmap(qe),ce.unbindTexture()},this.copyTextureToTexture3D=function(L,se,ve=null,_e=null,re=0){return L.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ve=arguments[0]||null,_e=arguments[1]||null,L=arguments[2],se=arguments[3],re=arguments[4]||0),gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,se,ve,_e,re)},this.initRenderTarget=function(L){de.get(L).__webglFramebuffer===void 0&&P.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?P.setTextureCube(L,0):L.isData3DTexture?P.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?P.setTexture2DArray(L,0):P.setTexture2D(L,0),ce.unbindTexture()},this.resetState=function(){S=0,T=0,C=null,ce.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}},Za=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ja=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ll,this.updateRanges=[],this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Vt=new W,Hi=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Rr=class extends Jt{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ds,lr=new W,ps=new W,ms=new W,gs=new Ne,hr=new Ne,Xf=new Ye,Ma=new W,ur=new W,Sa=new W,ju=new Ne,bc=new Ne,Ku=new Ne,Qa=class extends gt{constructor(e=new Rr){if(super(),this.isSprite=!0,this.type="Sprite",ds===void 0){ds=new bt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Bs(t,5);ds.setIndex([0,1,2,0,2,3]),ds.setAttribute("position",new Hi(n,3,0,!1)),ds.setAttribute("uv",new Hi(n,2,3,!1))}this.geometry=ds,this.material=e,this.center=new Ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ps.setFromMatrixScale(this.matrixWorld),Xf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ms.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ps.multiplyScalar(-ms.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;wa(Ma.set(-.5,-.5,0),ms,a,ps,s,r),wa(ur.set(.5,-.5,0),ms,a,ps,s,r),wa(Sa.set(.5,.5,0),ms,a,ps,s,r),ju.set(0,0),bc.set(1,0),Ku.set(1,1);let o=e.ray.intersectTriangle(Ma,ur,Sa,!1,lr);if(o===null&&(wa(ur.set(-.5,.5,0),ms,a,ps,s,r),bc.set(0,1),o=e.ray.intersectTriangle(Ma,Sa,ur,!1,lr),o===null))return;let c=e.ray.origin.distanceTo(lr);c<e.near||c>e.far||t.push({distance:c,point:lr.clone(),uv:xi.getInterpolation(lr,Ma,ur,Sa,ju,bc,Ku,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function wa(i,e,t,n,s,r){gs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(hr.x=r*gs.x-s*gs.y,hr.y=s*gs.x+r*gs.y):hr.copy(gs),i.copy(e),i.x+=hr.x,i.y+=hr.y,i.applyMatrix4(Xf)}var Zu=new W,Ju=new rt,Qu=new rt,Dx=new W,$u=new Ye,Aa=new W,xc=new an,ef=new Ye,vc=new Ns,$a=class extends St{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Jh,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Aa),this.boundingBox.expandByPoint(Aa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new an),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Aa),this.boundingSphere.expandByPoint(Aa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xc.copy(this.boundingSphere),xc.applyMatrix4(s),e.ray.intersectsSphere(xc)!==!1&&(ef.copy(s).invert(),vc.copy(e.ray).applyMatrix4(ef),!(this.boundingBox!==null&&vc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,vc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Jh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Ju.fromBufferAttribute(s.attributes.skinIndex,e),Qu.fromBufferAttribute(s.attributes.skinWeight,e),Zu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Qu.getComponent(r);if(a!==0){let o=Ju.getComponent(r);$u.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Dx.copy(Zu).applyMatrix4($u),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Pr=class extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ks=class extends Dt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=zt,h=zt,u,f){super(null,a,o,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},tf=new Ye,Nx=new Ye,eo=class i{constructor(e=[],t=[]){this.uuid=gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Nx;tf.multiplyMatrices(o,t[r]),tf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ks(t,e,e,Kt,Pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Pr),this.bones.push(a),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Xi=class extends vt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},bs=new Ye,nf=new Ye,Ta=[],sf=new Zt,Ux=new Ye,fr=new St,dr=new an,to=class extends St{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ux)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),sf.copy(e.boundingBox).applyMatrix4(bs),this.boundingBox.union(sf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),dr.copy(e.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dr.copy(this.boundingSphere),dr.applyMatrix4(n),e.ray.intersectsSphere(dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,bs),nf.multiplyMatrices(n,bs),fr.matrixWorld=nf,fr.raycast(e,Ta);for(let a=0,o=Ta.length;a<o;a++){let c=Ta[a];c.instanceId=r,c.object=this,t.push(c)}Ta.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ks(new Float32Array(s*this.count),s,this.count,eh,Pn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ir=class extends Jt{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},no=new W,io=new W,rf=new Ye,pr=new Ns,Ca=new an,_c=new W,af=new W,zs=class extends gt{constructor(e=new bt,t=new Ir){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)no.fromBufferAttribute(t,s-1),io.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=no.distanceTo(io);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(s),Ca.radius+=r,e.ray.intersectsSphere(Ca)===!1)return;rf.copy(s).invert(),pr.copy(e.ray).applyMatrix4(rf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let b=p,m=g-1;b<m;b+=l){let d=h.getX(b),_=h.getX(b+1),v=Ea(this,e,pr,c,d,_);v&&t.push(v)}if(this.isLineLoop){let b=h.getX(g-1),m=h.getX(p),d=Ea(this,e,pr,c,b,m);d&&t.push(d)}}else{let p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let b=p,m=g-1;b<m;b+=l){let d=Ea(this,e,pr,c,b,b+1);d&&t.push(d)}if(this.isLineLoop){let b=Ea(this,e,pr,c,g-1,p);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ea(i,e,t,n,s,r){let a=i.geometry.attributes.position;if(no.fromBufferAttribute(a,s),io.fromBufferAttribute(a,r),t.distanceSqToSegment(no,io,_c,af)>n)return;_c.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(_c);if(!(c<e.near||c>e.far))return{distance:c,point:af.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var of=new W,cf=new W,so=class extends zs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)of.fromBufferAttribute(t,s),cf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+of.distanceTo(cf);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ro=class extends zs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},qi=class extends Jt{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},lf=new Ye,Tl=new Ns,Ra=new an,Pa=new W,Gs=class extends gt{constructor(e=new bt,t=new qi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(s),Ra.radius+=r,e.ray.intersectsSphere(Ra)===!1)return;lf.copy(s).invert(),Tl.copy(e.ray).applyMatrix4(lf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=f,b=p;g<b;g++){let m=l.getX(g);Pa.fromBufferAttribute(u,m),hf(Pa,m,c,s,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,b=p;g<b;g++)Pa.fromBufferAttribute(u,g),hf(Pa,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function hf(i,e,t,n,s,r,a){let o=Tl.distanceSqToPoint(i);if(o<t){let c=new W;Tl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ao=class extends Dt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Ne:new W);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new W,s=[],r=[],a=[],o=new W,c=new Ye;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new W)}r[0]=new W,a[0]=new W;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(At(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(At(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Lr=class extends xn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Ne){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Cl=class extends Lr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ah(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,p*=h,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Ia=new W,yc=new ah,Mc=new ah,Sc=new ah,Dr=class extends xn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new W){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Ia.subVectors(s[0],s[1]).add(s[0]),l=Ia);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ia.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ia),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),b=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),yc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,b,m),Mc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,b,m),Sc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,b,m)}else this.curveType==="catmullrom"&&(yc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Mc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Sc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(yc.calc(c),Mc.calc(c),Sc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new W().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function uf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Fx(i,e){let t=1-i;return t*t*e}function Ox(i,e){return 2*(1-i)*i*e}function Bx(i,e){return i*i*e}function Mr(i,e,t,n){return Fx(i,e)+Ox(i,t)+Bx(i,n)}function kx(i,e){let t=1-i;return t*t*t*e}function zx(i,e){let t=1-i;return 3*t*t*i*e}function Gx(i,e){return 3*(1-i)*i*i*e}function Vx(i,e){return i*i*i*e}function Sr(i,e,t,n,s){return kx(i,e)+zx(i,t)+Gx(i,n)+Vx(i,s)}var oo=class extends xn{constructor(e=new Ne,t=new Ne,n=new Ne,s=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ne){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Sr(e,s.x,r.x,a.x,o.x),Sr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},El=class extends xn{constructor(e=new W,t=new W,n=new W,s=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new W){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Sr(e,s.x,r.x,a.x,o.x),Sr(e,s.y,r.y,a.y,o.y),Sr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},co=class extends xn{constructor(e=new Ne,t=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ne){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rl=class extends xn{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new W){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lo=class extends xn{constructor(e=new Ne,t=new Ne,n=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ne){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Mr(e,s.x,r.x,a.x),Mr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ho=class extends xn{constructor(e=new W,t=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new W){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Mr(e,s.x,r.x,a.x),Mr(e,s.y,r.y,a.y),Mr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vs=class extends xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ne){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(uf(o,c.x,l.x,h.x,u.x),uf(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ne().fromArray(s))}return this}},uo=Object.freeze({__proto__:null,ArcCurve:Cl,CatmullRomCurve3:Dr,CubicBezierCurve:oo,CubicBezierCurve3:El,EllipseCurve:Lr,LineCurve:co,LineCurve3:Rl,QuadraticBezierCurve:lo,QuadraticBezierCurve3:ho,SplineCurve:Vs}),Pl=class extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new uo[s.type]().fromJSON(s))}return this}},Yi=class extends Pl{constructor(e){super(),this.type="Path",this.currentPoint=new Ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new co(this.currentPoint.clone(),new Ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new lo(this.currentPoint.clone(),new Ne(e,t),new Ne(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new oo(this.currentPoint.clone(),new Ne(e,t),new Ne(n,s),new Ne(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Vs(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new Lr(e,t,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Nr=class i extends bt{constructor(e=[new Ne(0,-.5),new Ne(.5,0),new Ne(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=At(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,u=new W,f=new Ne,p=new W,g=new W,b=new W,m=0,d=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,d=e[_+1].y-e[_].y,p.x=d*1,p.y=-m,p.z=d*0,b.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(b.x,b.y,b.z);break;default:m=e[_+1].x-e[_].x,d=e[_+1].y-e[_].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=b.x,p.y+=b.y,p.z+=b.z,p.normalize(),c.push(p.x,p.y,p.z),b.copy(g)}for(let _=0;_<=t;_++){let v=n+_*h*s,x=Math.sin(v),A=Math.cos(v);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*x,u.y=e[S].y,u.z=e[S].x*A,a.push(u.x,u.y,u.z),f.x=_/t,f.y=S/(e.length-1),o.push(f.x,f.y);let T=c[3*S+0]*x,C=c[3*S+1],M=c[3*S+0]*A;l.push(T,C,M)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){let x=v+_*e.length,A=x,S=x+e.length,T=x+e.length+1,C=x+1;r.push(A,S,C),r.push(T,C,S)}this.setIndex(r),this.setAttribute("position",new nt(a,3)),this.setAttribute("uv",new nt(o,2)),this.setAttribute("normal",new nt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},fo=class i extends Nr{constructor(e=1,t=1,n=4,s=8){let r=new Yi;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}};var Ur=class i extends bt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,b=[],m=n/2,d=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(p,2));function _(){let x=new W,A=new W,S=0,T=(t-e)/n;for(let C=0;C<=r;C++){let M=[],y=C/r,N=y*(t-e)+e;for(let I=0;I<=s;I++){let E=I/s,U=E*c+o,V=Math.sin(U),G=Math.cos(U);A.x=N*V,A.y=-y*n+m,A.z=N*G,u.push(A.x,A.y,A.z),x.set(V,T,G).normalize(),f.push(x.x,x.y,x.z),p.push(E,1-y),M.push(g++)}b.push(M)}for(let C=0;C<s;C++)for(let M=0;M<r;M++){let y=b[M][C],N=b[M+1][C],I=b[M+1][C+1],E=b[M][C+1];(e>0||M!==0)&&(h.push(y,N,E),S+=3),(t>0||M!==r-1)&&(h.push(N,I,E),S+=3)}l.addGroup(d,S,0),d+=S}function v(x){let A=g,S=new Ne,T=new W,C=0,M=x===!0?e:t,y=x===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),g++;let N=g;for(let I=0;I<=s;I++){let U=I/s*c+o,V=Math.cos(U),G=Math.sin(U);T.x=M*G,T.y=m*y,T.z=M*V,u.push(T.x,T.y,T.z),f.push(0,y,0),S.x=V*.5+.5,S.y=G*.5*y+.5,p.push(S.x,S.y),g++}for(let I=0;I<s;I++){let E=A+I,U=N+I;x===!0?h.push(U,U+1,E):h.push(U+1,U,E),C+=3}l.addGroup(d,C,x===!0?1:2),d+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},po=class i extends Ur{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Fr=class extends Yi{constructor(e){super(e),this.uuid=gn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Yi().fromJSON(s))}return this}},Wx={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=qf(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,f,p;if(n&&(r=jx(i,e,r,t)),i.length>80*t){o=l=i[0],c=h=i[1];for(let g=t;g<s;g+=t)u=i[g],f=i[g+1],u<o&&(o=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);p=Math.max(l-o,h-c),p=p!==0?32767/p:0}return Or(r,a,t,o,c,p,0),a}};function qf(i,e,t,n,s){let r,a;if(s===rv(i,e,t,n)>0)for(r=e;r<t;r+=n)a=ff(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=ff(r,i[r],i[r+1],a);return a&&Ro(a,a.next)&&(kr(a),a=a.next),a}function ji(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ro(t,t.next)||xt(t.prev,t,t.next)===0)){if(kr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Or(i,e,t,n,s,r,a){if(!i)return;!a&&r&&$x(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Xx(i,n,s,r):Hx(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),kr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=qx(ji(i),e,t),Or(i,e,t,n,s,r,2)):a===2&&Yx(i,e,t,n,s,r):Or(ji(i),e,t,n,s,r,1);break}}}function Hx(i){let e=i.prev,t=i,n=i.next;if(xt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,f=s>r?s>a?s:a:r>a?r:a,p=o>c?o>l?o:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&_s(s,o,r,c,a,l,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Xx(i,e,t,n){let s=i.prev,r=i,a=i.next;if(xt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,f=a.y,p=o<c?o<l?o:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,b=o>c?o>l?o:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,d=Il(p,g,e,t,n),_=Il(b,m,e,t,n),v=i.prevZ,x=i.nextZ;for(;v&&v.z>=d&&x&&x.z<=_;){if(v.x>=p&&v.x<=b&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&_s(o,h,c,u,l,f,v.x,v.y)&&xt(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=p&&x.x<=b&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&_s(o,h,c,u,l,f,x.x,x.y)&&xt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=d;){if(v.x>=p&&v.x<=b&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&_s(o,h,c,u,l,f,v.x,v.y)&&xt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=_;){if(x.x>=p&&x.x<=b&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&_s(o,h,c,u,l,f,x.x,x.y)&&xt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function qx(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Ro(s,r)&&Yf(s,n,n.next,r)&&Br(s,r)&&Br(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),kr(n),kr(n.next),n=i=r),n=n.next}while(n!==i);return ji(n)}function Yx(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&nv(a,o)){let c=jf(a,o);a=ji(a,a.next),c=ji(c,c.next),Or(a,e,t,n,s,r,0),Or(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function jx(i,e,t,n){let s=[],r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=qf(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(tv(l));for(s.sort(Kx),r=0;r<s.length;r++)t=Zx(s[r],t);return t}function Kx(i,e){return i.x-e.x}function Zx(i,e){let t=Jx(i,e);if(!t)return e;let n=jf(t,i);return ji(n,n.next),ji(t,t.next)}function Jx(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&_s(a<l?r:n,a,c,l,a<l?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Br(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Qx(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function Qx(i,e){return xt(i.prev,i,e.prev)<0&&xt(e.next,i,i.next)<0}function $x(i,e,t,n){let s=i;do s.z===0&&(s.z=Il(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ev(s)}function ev(i){let e,t,n,s,r,a,o,c,l=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(a>1);return i}function Il(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function tv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function _s(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function nv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!iv(i,e)&&(Br(i,e)&&Br(e,i)&&sv(i,e)&&(xt(i.prev,i,e.prev)||xt(i,e.prev,e))||Ro(i,e)&&xt(i.prev,i,i.next)>0&&xt(e.prev,e,e.next)>0)}function xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ro(i,e){return i.x===e.x&&i.y===e.y}function Yf(i,e,t,n){let s=Da(xt(i,e,t)),r=Da(xt(i,e,n)),a=Da(xt(t,n,i)),o=Da(xt(t,n,e));return!!(s!==r&&a!==o||s===0&&La(i,t,e)||r===0&&La(i,n,e)||a===0&&La(t,i,n)||o===0&&La(t,e,n))}function La(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Da(i){return i>0?1:i<0?-1:0}function iv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Yf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Br(i,e){return xt(i.prev,i,i.next)<0?xt(i,e,i.next)>=0&&xt(i,i.prev,e)>=0:xt(i,e,i.prev)<0||xt(i,i.next,e)<0}function sv(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function jf(i,e){let t=new Ll(i.i,i.x,i.y),n=new Ll(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ff(i,e,t,n){let s=new Ll(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function kr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ll(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function rv(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var wr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];df(e),pf(n,e);let a=e.length;t.forEach(df);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,pf(n,t[c]);let o=Wx.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function df(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function pf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var mo=class i extends bt{constructor(e=new Fr([new Ne(.5,.5),new Ne(-.5,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new nt(s,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:av,v,x=!1,A,S,T,C;d&&(v=d.getSpacedPoints(h),x=!0,f=!1,A=d.computeFrenetFrames(h,!1),S=new W,T=new W,C=new W),f||(m=0,p=0,g=0,b=0);let M=o.extractPoints(l),y=M.shape,N=M.holes;if(!wr.isClockWise(y)){y=y.reverse();for(let Z=0,K=N.length;Z<K;Z++){let R=N[Z];wr.isClockWise(R)&&(N[Z]=R.reverse())}}let E=wr.triangulateShape(y,N),U=y;for(let Z=0,K=N.length;Z<K;Z++){let R=N[Z];y=y.concat(R)}function V(Z,K,R){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(K,R)}let G=y.length,$=E.length;function Y(Z,K,R){let ye,le,ie,ce=Z.x-K.x,we=Z.y-K.y,de=R.x-Z.x,P=R.y-Z.y,w=ce*ce+we*we,F=ce*P-we*de;if(Math.abs(F)>Number.EPSILON){let O=Math.sqrt(w),X=Math.sqrt(de*de+P*P),D=K.x-we/O,k=K.y+ce/O,B=R.x-P/X,H=R.y+de/X,Me=((B-D)*P-(H-k)*de)/(ce*P-we*de);ye=D+ce*Me-Z.x,le=k+we*Me-Z.y;let oe=ye*ye+le*le;if(oe<=2)return new Ne(ye,le);ie=Math.sqrt(oe/2)}else{let O=!1;ce>Number.EPSILON?de>Number.EPSILON&&(O=!0):ce<-Number.EPSILON?de<-Number.EPSILON&&(O=!0):Math.sign(we)===Math.sign(P)&&(O=!0),O?(ye=-we,le=ce,ie=Math.sqrt(w)):(ye=ce,le=we,ie=Math.sqrt(w/2))}return new Ne(ye/ie,le/ie)}let te=[];for(let Z=0,K=U.length,R=K-1,ye=Z+1;Z<K;Z++,R++,ye++)R===K&&(R=0),ye===K&&(ye=0),te[Z]=Y(U[Z],U[R],U[ye]);let ee=[],Re,ue=te.concat();for(let Z=0,K=N.length;Z<K;Z++){let R=N[Z];Re=[];for(let ye=0,le=R.length,ie=le-1,ce=ye+1;ye<le;ye++,ie++,ce++)ie===le&&(ie=0),ce===le&&(ce=0),Re[ye]=Y(R[ye],R[ie],R[ce]);ee.push(Re),ue=ue.concat(Re)}for(let Z=0;Z<m;Z++){let K=Z/m,R=p*Math.cos(K*Math.PI/2),ye=g*Math.sin(K*Math.PI/2)+b;for(let le=0,ie=U.length;le<ie;le++){let ce=V(U[le],te[le],ye);q(ce.x,ce.y,-R)}for(let le=0,ie=N.length;le<ie;le++){let ce=N[le];Re=ee[le];for(let we=0,de=ce.length;we<de;we++){let P=V(ce[we],Re[we],ye);q(P.x,P.y,-R)}}}let ae=g+b;for(let Z=0;Z<G;Z++){let K=f?V(y[Z],ue[Z],ae):y[Z];x?(T.copy(A.normals[0]).multiplyScalar(K.x),S.copy(A.binormals[0]).multiplyScalar(K.y),C.copy(v[0]).add(T).add(S),q(C.x,C.y,C.z)):q(K.x,K.y,0)}for(let Z=1;Z<=h;Z++)for(let K=0;K<G;K++){let R=f?V(y[K],ue[K],ae):y[K];x?(T.copy(A.normals[Z]).multiplyScalar(R.x),S.copy(A.binormals[Z]).multiplyScalar(R.y),C.copy(v[Z]).add(T).add(S),q(C.x,C.y,C.z)):q(R.x,R.y,u/h*Z)}for(let Z=m-1;Z>=0;Z--){let K=Z/m,R=p*Math.cos(K*Math.PI/2),ye=g*Math.sin(K*Math.PI/2)+b;for(let le=0,ie=U.length;le<ie;le++){let ce=V(U[le],te[le],ye);q(ce.x,ce.y,u+R)}for(let le=0,ie=N.length;le<ie;le++){let ce=N[le];Re=ee[le];for(let we=0,de=ce.length;we<de;we++){let P=V(ce[we],Re[we],ye);x?q(P.x,P.y+v[h-1].y,v[h-1].x+R):q(P.x,P.y,u+R)}}}j(),J();function j(){let Z=s.length/3;if(f){let K=0,R=G*K;for(let ye=0;ye<$;ye++){let le=E[ye];ne(le[2]+R,le[1]+R,le[0]+R)}K=h+m*2,R=G*K;for(let ye=0;ye<$;ye++){let le=E[ye];ne(le[0]+R,le[1]+R,le[2]+R)}}else{for(let K=0;K<$;K++){let R=E[K];ne(R[2],R[1],R[0])}for(let K=0;K<$;K++){let R=E[K];ne(R[0]+G*h,R[1]+G*h,R[2]+G*h)}}n.addGroup(Z,s.length/3-Z,0)}function J(){let Z=s.length/3,K=0;fe(U,K),K+=U.length;for(let R=0,ye=N.length;R<ye;R++){let le=N[R];fe(le,K),K+=le.length}n.addGroup(Z,s.length/3-Z,1)}function fe(Z,K){let R=Z.length;for(;--R>=0;){let ye=R,le=R-1;le<0&&(le=Z.length-1);for(let ie=0,ce=h+m*2;ie<ce;ie++){let we=G*ie,de=G*(ie+1),P=K+ye+we,w=K+le+we,F=K+le+de,O=K+ye+de;ge(P,w,F,O)}}}function q(Z,K,R){c.push(Z),c.push(K),c.push(R)}function ne(Z,K,R){Te(Z),Te(K),Te(R);let ye=s.length/3,le=_.generateTopUV(n,s,ye-3,ye-2,ye-1);xe(le[0]),xe(le[1]),xe(le[2])}function ge(Z,K,R,ye){Te(Z),Te(K),Te(ye),Te(K),Te(R),Te(ye);let le=s.length/3,ie=_.generateSideWallUV(n,s,le-6,le-3,le-2,le-1);xe(ie[0]),xe(ie[1]),xe(ie[3]),xe(ie[1]),xe(ie[2]),xe(ie[3])}function Te(Z){s.push(c[Z*3+0]),s.push(c[Z*3+1]),s.push(c[Z*3+2])}function xe(Z){r.push(Z.x),r.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ov(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new uo[s.type]().fromJSON(s)),new i(n,e.options)}},av={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new Ne(r,a),new Ne(o,c),new Ne(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],p=e[s*3+1],g=e[s*3+2],b=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new Ne(a,1-c),new Ne(l,1-u),new Ne(f,1-g),new Ne(b,1-d)]:[new Ne(o,1-c),new Ne(h,1-u),new Ne(p,1-g),new Ne(m,1-d)]}};function ov(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var go=class i extends bt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new W,f=new W,p=[],g=[],b=[],m=[];for(let d=0;d<=n;d++){let _=[],v=d/n,x=0;d===0&&a===0?x=.5/t:d===n&&c===Math.PI&&(x=-.5/t);for(let A=0;A<=t;A++){let S=A/t;u.x=-e*Math.cos(s+S*r)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(s+S*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),b.push(f.x,f.y,f.z),m.push(S+x,1-v),_.push(l++)}h.push(_)}for(let d=0;d<n;d++)for(let _=0;_<t;_++){let v=h[d][_+1],x=h[d][_],A=h[d+1][_],S=h[d+1][_+1];(d!==0||a>0)&&p.push(v,x,S),(d!==n-1||c<Math.PI)&&p.push(x,A,S)}this.setIndex(p),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(b,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var bo=class i extends bt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new W,u=new W,f=new W;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let b=g/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(b),u.y=(e+t*Math.cos(m))*Math.sin(b),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let b=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,_=(s+1)*p+g;a.push(b,m,_),a.push(m,d,_)}this.setIndex(a),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var xo=class i extends bt{constructor(e=new ho(new W(-1,-1,0),new W(-1,1,0),new W(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new W,c=new W,l=new Ne,h=new W,u=[],f=[],p=[],g=[];b(),this.setIndex(g),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(p,2));function b(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),_(),d()}function m(v){h=e.getPointAt(v/t,h);let x=a.normals[v],A=a.binormals[v];for(let S=0;S<=s;S++){let T=S/s*Math.PI*2,C=Math.sin(T),M=-Math.cos(T);c.x=M*x.x+C*A.x,c.y=M*x.y+C*A.y,c.z=M*x.z+C*A.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function d(){for(let v=1;v<=t;v++)for(let x=1;x<=s;x++){let A=(s+1)*(v-1)+(x-1),S=(s+1)*v+(x-1),T=(s+1)*v+x,C=(s+1)*(v-1)+x;g.push(A,S,C),g.push(S,T,C)}}function _(){for(let v=0;v<=t;v++)for(let x=0;x<=s;x++)l.x=v/t,l.y=x/s,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new uo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var vo=class extends _t{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Si=class extends Jt{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Df,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ht=class extends Si{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Na(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function cv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function lv(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function mf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Kf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var wi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Dl=class extends wi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qh,endingEnd:Qh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case $h:r=e,o=2*t-n;break;case eu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case $h:a=e,c=2*n-t;break;case eu:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),b=g*g,m=b*g,d=-f*m+2*f*b-f*g,_=(1+f)*m+(-1.5-2*f)*b+(-.5+f)*g+1,v=(-1-p)*m+(1.5+p)*b+.5*g,x=p*m-p*b;for(let A=0;A!==o;++A)r[A]=d*a[h+A]+_*a[l+A]+v*a[c+A]+x*a[u+A];return r}},Nl=class extends wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}},Ul=class extends wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},vn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Na(t,this.TimeBufferType),this.values=Na(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Na(e.times,Array),values:Na(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Is:t=this.InterpolantFactoryMethodDiscrete;break;case Ls:t=this.InterpolantFactoryMethodLinear;break;case Ho:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Is;case this.InterpolantFactoryMethodLinear:return Ls;case this.InterpolantFactoryMethodSmooth:return Ho}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&cv(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ho,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let b=t[u+g];if(b!==t[f+g]||b!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=Ls;var Ai=class extends vn{constructor(e,t,n){super(e,t,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Is;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var _o=class extends vn{};_o.prototype.ValueTypeName="color";var ei=class extends vn{};ei.prototype.ValueTypeName="number";var Fl=class extends wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)rn.slerpFlat(r,0,a,l-o,a,l,c);return r}},ti=class extends vn{InterpolantFactoryMethodLinear(e){return new Fl(this.times,this.values,this.getValueSize(),e)}};ti.prototype.ValueTypeName="quaternion";ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends vn{constructor(e,t,n){super(e,t,n)}};Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=Is;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var ni=class extends vn{};ni.prototype.ValueTypeName="vector";var yo=class{constructor(e="",t=-1,n=[],s=hp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=gn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(uv(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(vn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=lv(c);c=mf(c,1,h),l=mf(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new ei(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,p,g,b){if(p.length!==0){let m=[],d=[];Kf(p,m,d,g),m.length!==0&&b.push(new u(f,m,d))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let b=0;b<f[g].morphTargets.length;b++)p[f[g].morphTargets[b]]=-1;for(let b in p){let m=[],d=[];for(let _=0;_!==f[g].morphTargets.length;++_){let v=f[g];m.push(v.time),d.push(v.morphTarget===b?1:0)}s.push(new ei(".morphTargetInfluence["+b+"]",m,d))}c=p.length*a}else{let p=".bones["+t[u].name+"]";n(ni,p+".position",f,"pos",s),n(ti,p+".quaternion",f,"rot",s),n(ni,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function hv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ei;case"vector":case"vector2":case"vector3":case"vector4":return ni;case"color":return _o;case"quaternion":return ti;case"bool":case"boolean":return Ai;case"string":return Ti}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function uv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=hv(i.type);if(i.times===void 0){let t=[],n=[];Kf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var vi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Ol=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},fv=new Ol,ii=class{constructor(e){this.manager=e!==void 0?e:fv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ii.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xn={},Bl=class extends Error{constructor(e,t){super(e),this.response=t}},zr=class extends ii{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=vi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Xn[e]!==void 0){Xn[e].push({onLoad:t,onProgress:n,onError:s});return}Xn[e]=[],Xn[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Xn[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,b=0,m=new ReadableStream({start(d){_();function _(){u.read().then(({done:v,value:x})=>{if(v)d.close();else{b+=x.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:p});for(let S=0,T=h.length;S<T;S++){let C=h[S];C.onProgress&&C.onProgress(A)}d.enqueue(x),_()}},v=>{d.error(v)})}}});return new Response(m)}else throw new Bl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{vi.add(e,l);let h=Xn[e];delete Xn[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=Xn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Xn[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var kl=class extends ii{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=vi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Cr("img");function c(){h(),vi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Ws=class extends ii{constructor(e){super(e)}load(e,t,n,s){let r=new Dt,a=new kl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Hs=class extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Mo=class extends Hs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},wc=new Ye,gf=new W,bf=new W,Gr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;gf.setFromMatrixPosition(e.matrixWorld),t.position.copy(gf),bf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bf),t.updateMatrixWorld(),wc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},zl=class extends Gr{constructor(){super(new Tt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Ds*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Xs=class extends Hs{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new zl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},xf=new Ye,mr=new W,Ac=new W,Gl=class extends Gr{constructor(){super(new Tt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),mr.setFromMatrixPosition(e.matrixWorld),n.position.copy(mr),Ac.copy(n.position),Ac.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ac),n.updateMatrixWorld(),s.makeTranslation(-mr.x,-mr.y,-mr.z),xf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xf)}},qs=class extends Hs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Gl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Vl=class extends Gr{constructor(){super(new Mi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ys=class extends Hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Vl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ci=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var So=class extends ii{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=vi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return vi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),vi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});vi.add(e,c),r.manager.itemStart(e)}};var wo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=vf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function vf(){return performance.now()}var oh="\\[\\]\\.:\\/",dv=new RegExp("["+oh+"]","g"),ch="[^"+oh+"]",pv="[^"+oh.replace("\\.","")+"]",mv=/((?:WC+[\/:])*)/.source.replace("WC",ch),gv=/(WCOD+)?/.source.replace("WCOD",pv),bv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ch),xv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ch),vv=new RegExp("^"+mv+gv+bv+xv+"$"),_v=["material","materials","bones","map"],Wl=class{constructor(e,t,n){let s=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ft=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dv,"")}static parseTrackName(e){let t=vv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);_v.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=Wl;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var a_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var pe={ACESFilmicToneMapping:Vr,AdditiveBlending:As,BackSide:kt,Box3:Zt,BoxGeometry:$n,BufferAttribute:vt,BufferGeometry:bt,CanvasTexture:ao,CapsuleGeometry:fo,CatmullRomCurve3:Dr,Color:He,ConeGeometry:po,CylinderGeometry:Ur,DataTexture:ks,DirectionalLight:Ys,DoubleSide:sn,DynamicDrawUsage:Uf,Euler:bn,ExtrudeGeometry:mo,Float32BufferAttribute:nt,FogExp2:Za,Group:mn,HalfFloatType:on,HemisphereLight:Mo,LatheGeometry:Nr,LinearFilter:Bt,LinearMipmapLinearFilter:pn,Matrix4:Ye,Mesh:St,MeshBasicMaterial:Qt,MeshPhysicalMaterial:Ht,MeshStandardMaterial:Si,NoColorSpace:Dn,PCFSoftShadowMap:Hl,PMREMGenerator:Os,Path:Yi,PerspectiveCamera:Tt,PlaneGeometry:Fs,PointLight:qs,Points:Gs,PointsMaterial:qi,Quaternion:rn,RGBAFormat:Kt,RepeatWrapping:Jn,SRGBColorSpace:Mt,Scene:Ja,ShaderMaterial:_t,Shape:Fr,SphereGeometry:go,SplineCurve:Vs,SpotLight:Xs,Sprite:Qa,SpriteMaterial:Rr,TextureLoader:Ws,TorusGeometry:bo,TubeGeometry:xo,Vector2:Ne,Vector3:W,WebGLRenderTarget:Nt,WebGLRenderer:Ka};var Po={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var cn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},yv=new Mi(-1,1,1,-1,0,1),lh=class extends bt{constructor(){super(),this.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nt([0,2,0,0,2,0],2))}},Mv=new lh,Ri=class{constructor(e){this._mesh=new St(Mv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,yv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Io=class extends cn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof _t?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ei.clone(e.uniforms),this.material=new _t({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ri(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Hr=class extends cn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Lo=class extends cn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Do=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ne);this._width=n.width,this._height=n.height,t=new Nt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:on}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Io(Po),this.copyPass.material.blending=Nn,this.clock=new wo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Hr!==void 0&&(a instanceof Hr?n=!0:a instanceof Lo&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var No=class extends cn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new He}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Zf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new He(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ks=class i extends cn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ne(e.x,e.y):new Ne(256,256),this.clearColor=new He(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Nt(r,a,{type:on}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Nt(r,a,{type:on});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new Nt(r,a,{type:on});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}let o=Zf;this.highPassUniforms=Ei.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _t({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ne(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Po;this.copyUniforms=Ei.clone(h.uniforms),this.blendMaterial=new _t({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:As,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new He,this.oldClearAlpha=1,this.basic=new Qt,this.fsQuad=new Ri(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ne(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new _t({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ne(.5,.5)},direction:{value:new Ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new _t({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Ks.BlurDirectionX=new Ne(1,0);Ks.BlurDirectionY=new Ne(0,1);var Jf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Uo=class extends cn{constructor(){super();let e=Jf;this.uniforms=Ei.clone(e.uniforms),this.material=new vo({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ri(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},et.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Xl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ql?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Yl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===jl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Kl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};function lt(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new bt,l=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,u=[];for(let f=0;f<i.length;++f){let p=i[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Qf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let p=[];for(let b=0;b<a[h].length;++b)p.push(a[h][b][f]);let g=Qf(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Qf(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new vt(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let f=0,p=h.count;f<p;f++)for(let g=0;g<t;g++){let b=h.getComponent(f,g);o.setComponent(f+u,g,b)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function hh(i,e){if(e===Lf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Wr||e===To){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Wr)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Fo=class extends ii{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new bh(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new ph(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Ih(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Ci.extractUrlBase(e);a=Ci.resolveURL(l,this.path)}else a=Ci.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new zr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===id){try{a[tt.KHR_BINARY_GLTF]=new Lh(e)}catch(u){s&&s(u);return}r=JSON.parse(a[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new kh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case tt.KHR_MATERIALS_UNLIT:a[u]=new mh;break;case tt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Dh(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:a[u]=new Nh;break;case tt.KHR_MESH_QUANTIZATION:a[u]=new Uh;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Sv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ph=class{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new He(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Gt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ys(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new qs(h),l.distance=u;break;case"spot":l=new Xs(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,si(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},mh=class{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Qt}extendParams(e,t,n){let s=[];e.color=new He(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Gt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Mt))}return Promise.all(s)}},gh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},bh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(o,o)}return Promise.all(r)}},xh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},vh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},_h=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new He(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Gt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Mt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},yh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Mh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new He().setRGB(o[0],o[1],o[2],Gt),Promise.all(r)}},Sh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},wh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new He().setRGB(o[0],o[1],o[2],Gt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Mt)),Promise.all(r)}},Ah=class{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Th=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ht}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Ch=class{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Eh=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Rh=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ph=class{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,f,s.mode,s.filter),p})})}else return null}},Ih=class{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==_n.TRIANGLES&&l.mode!==_n.TRIANGLE_STRIP&&l.mode!==_n.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,p=[];for(let g of u){let b=new Ye,m=new W,d=new rn,_=new W(1,1,1),v=new to(g.geometry,g.material,f);for(let x=0;x<f;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,x),c.SCALE&&_.fromBufferAttribute(c.SCALE,x),v.setMatrixAt(x,b.compose(m,d,_));for(let x in c)if(x==="_COLOR_0"){let A=c[x];v.instanceColor=new Xi(A.array,A.itemSize,A.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);gt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),p.push(v)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},id="glTF",Xr=12,$f={JSON:1313821514,BIN:5130562},Lh=class{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Xr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==id)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Xr,r=new DataView(e,Xr),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===$f.JSON){let l=new Uint8Array(e,Xr+a,o);this.content=n.decode(l)}else if(c===$f.BIN){let l=Xr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Dh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Oh[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Oh[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],p=Zs[f.componentType];l[u]=p.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(p){for(let g in p.attributes){let b=p.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}u(p)},o,l,Gt,f)})})}},Nh=class{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Uh=class{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}},Oo=class extends wi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,f=u*u,p=f*u,g=e*l,b=g-l,m=-2*p+3*f,d=p-f,_=1-m,v=d-f+u;for(let x=0;x!==o;x++){let A=a[b+x+o],S=a[b+x+c]*h,T=a[g+x+o],C=a[g+x]*h;r[x]=_*A+v*S+m*T+d*C}return r}},wv=new rn,Fh=class extends Oo{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return wv.fromArray(r).normalize().toArray(r),r}},_n={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Zs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ed={9728:zt,9729:Bt,9984:Zl,9985:xr,9986:xs,9987:pn},td={33071:jn,33648:Ar,10497:Jn},uh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Oh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Pi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Av={CUBICSPLINE:void 0,LINEAR:Ls,STEP:Is},fh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Tv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Si({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Un})),i.DefaultMaterial}function Ki(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function si(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Cv(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Ev(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Rv(i){let e,t=i.extensions&&i.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+dh(t.attributes):e=i.indices+":"+dh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+dh(i.targets[n]);return e}function dh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Bh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Pv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Iv=new Ye,kh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Sv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Ws(this.options.manager):this.textureLoader=new So(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ki(r,o,s),si(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Ci.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=uh[s.type],o=Zs[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new vt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=uh[s.type],l=Zs[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,b,m;if(p&&p!==u){let d=Math.floor(f/p),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,v=t.cache.get(_);v||(b=new l(o,d*p,s.count*p/h),v=new Bs(b,p/h),t.cache.add(_,v)),m=new Hi(v,c,f%p/h,g)}else o===null?b=new l(s.count*c):b=new l(o,f,s.count*c),m=new vt(b,c,g);if(s.sparse!==void 0){let d=uh.SCALAR,_=Zs[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,A=new _(a[1],v,s.sparse.count*d),S=new l(a[2],x,s.sparse.count*c);o!==null&&(m=new vt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,C=A.length;T<C;T++){let M=A[T];if(m.setX(M,S[T*c]),c>=2&&m.setY(M,S[T*c+1]),c>=3&&m.setZ(M,S[T*c+2]),c>=4&&m.setW(M,S[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return h.magFilter=ed[f.magFilter]||Bt,h.minFilter=ed[f.minFilter]||pn,h.wrapS=td[f.wrapS]||Jn,h.wrapT=td[f.wrapT]||Jn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==zt&&h.minFilter!==Bt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(b){let m=new Dt(b);m.needsUpdate=!0,f(m)}),t.load(Ci.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),si(u,a),u.userData.mimeType=a.mimeType||Pv(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new qi,Jt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Ir,Jt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Si}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[tt.KHR_MATERIALS_UNLIT]){let u=s[tt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new He(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Gt),o.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Mt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=sn);let h=r.alphaMode||fh.OPAQUE;if(h===fh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===fh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Qt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ne(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Qt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Qt){let u=r.emissiveFactor;o.emissive=new He().setRGB(u[0],u[1],u[2],Gt)}return r.emissiveTexture!==void 0&&a!==Qt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Mt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),si(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ki(s,u,r),u})}createUniqueName(e){let t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return nd(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=Rv(l),u=s[h];if(u)a.push(u.promise);else{let f;l.extensions&&l.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=nd(new bt,l,t),s[h]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Tv(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,g=h.length;p<g;p++){let b=h[p],m=a[p],d,_=l[p];if(m.mode===_n.TRIANGLES||m.mode===_n.TRIANGLE_STRIP||m.mode===_n.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new $a(b,_):new St(b,_),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===_n.TRIANGLE_STRIP?d.geometry=hh(d.geometry,To):m.mode===_n.TRIANGLE_FAN&&(d.geometry=hh(d.geometry,Wr));else if(m.mode===_n.LINES)d=new so(b,_);else if(m.mode===_n.LINE_STRIP)d=new zs(b,_);else if(m.mode===_n.LINE_LOOP)d=new ro(b,_);else if(m.mode===_n.POINTS)d=new Gs(b,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&Ev(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),si(d,r),m.extensions&&Ki(s,d,m),t.assignFinalMaterial(d),u.push(d)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&Ki(s,u[0],r),u[0];let f=new mn;r.extensions&&Ki(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=u.length;p<g;p++)f.add(u[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Tt(Ff.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Mi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),si(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let f=new Ye;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new eo(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let p=s.channels[u],g=s.samplers[p.sampler],b=p.target,m=b.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",_)),l.push(g),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],p=u[1],g=u[2],b=u[3],m=u[4],d=[];for(let _=0,v=f.length;_<v;_++){let x=f[_],A=p[_],S=g[_],T=b[_],C=m[_];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let M=n._createAnimationTracks(x,A,S,T,C);if(M)for(let y=0;y<M.length;y++)d.push(M[y])}return new yo(r,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,Iv)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Pr:l.length>1?h=new mn:l.length===1?h=l[0]:h=new gt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),si(h,r),r.extensions&&Ki(n,h,r),r.matrix!==void 0){let u=new Ye;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new mn;n.name&&(r.name=s.createUniqueName(n.name)),si(r,n),n.extensions&&Ki(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,p]of s.associations)(f instanceof Jt||f instanceof Dt)&&u.set(f,p);return h.traverse(f=>{let p=s.associations.get(f);p!=null&&u.set(f,p)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];Pi[r.path]===Pi.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(Pi[r.path]){case Pi.weights:l=ei;break;case Pi.rotation:l=ti;break;case Pi.position:case Pi.scale:l=ni;break;default:n.itemSize===1?l=ei:l=ni;break}let h=s.interpolation!==void 0?Av[s.interpolation]:Ls,u=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let g=new l(c[f]+"."+Pi[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Bh(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ti?Fh:Oo;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Lv(i,e,t){let n=e.attributes,s=new Zt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new W(c[0],c[1],c[2]),new W(l[0],l[1],l[2])),o.normalized){let h=Bh(Zs[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new W,c=new W;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let b=Bh(Zs[f.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new an;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function nd(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Oh[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return et.workingColorSpace!==Gt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),si(i,e),Lv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Cv(i,e.targets,t):i})}var sd=(function(){"use strict";var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?e:i,r,a=WebAssembly.instantiate(o(s),{}).then(function(d){r=d.instance,r.exports.__wasm_call_ctors()});function o(d){for(var _=new Uint8Array(d.length),v=0;v<d.length;++v){var x=d.charCodeAt(v);_[v]=x>96?x-97:x>64?x-39:x+4}for(var A=0,v=0;v<d.length;++v)_[A++]=_[v]<60?n[_[v]]:(_[v]-60)*64+_[++v];return _.buffer.slice(0,A)}function c(d,_,v,x,A,S){var T=r.exports.sbrk,C=v+3&-4,M=T(C*x),y=T(A.length),N=new Uint8Array(r.exports.memory.buffer);N.set(A,y);var I=d(M,v,x,y,A.length);if(I==0&&S&&S(M,C,x),_.set(N.subarray(M,M+v*x)),T(M-T(0)),I!=0)throw new Error("Malformed buffer data: "+I)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function p(d){var _={object:new Worker(d),pending:0,requests:{}};return _.object.onmessage=function(v){var x=v.data;_.pending-=x.count,_.requests[x.id][x.action](x.value),delete _.requests[x.id]},_}function g(d){for(var _="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),v=new Blob([_],{type:"text/javascript"}),x=URL.createObjectURL(v),A=0;A<d;++A)u[A]=p(x);URL.revokeObjectURL(x)}function b(d,_,v,x,A){for(var S=u[0],T=1;T<u.length;++T)u[T].pending<S.pending&&(S=u[T]);return new Promise(function(C,M){var y=new Uint8Array(v),N=f++;S.pending+=d,S.requests[N]={resolve:C,reject:M},S.object.postMessage({id:N,count:d,size:_,source:y,mode:x,filter:A},[y.buffer])})}function m(d){a.then(function(){var _=d.data;try{var v=new Uint8Array(_.count*_.size);c(r.exports[_.mode],v,_.count,_.size,_.source,r.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:v},[v.buffer])}catch(x){self.postMessage({id:_.id,count:_.count,action:"reject",value:x})}})}return{ready:a,supported:!0,useWorkers:function(d){g(d)},decodeVertexBuffer:function(d,_,v,x,A){c(r.exports.meshopt_decodeVertexBuffer,d,_,v,x,r.exports[l[A]])},decodeIndexBuffer:function(d,_,v,x){c(r.exports.meshopt_decodeIndexBuffer,d,_,v,x)},decodeIndexSequence:function(d,_,v,x){c(r.exports.meshopt_decodeIndexSequence,d,_,v,x)},decodeGltfBuffer:function(d,_,v,x,A,S){c(r.exports[h[A]],d,_,v,x,r.exports[l[S]])},decodeGltfBufferAsync:function(d,_,v,x,A){return u.length>0?b(d,_,v,h[x],l[A]):a.then(function(){var S=new Uint8Array(d*_);return c(r.exports[h[x]],S,d,_,v,r.exports[l[A]]),S})}}})();var Dv={x0:39,x1:42.4,z0:2.6,z1:-7.6,h:3.1,door:{a:.5,b:1.9,h:2.25}};var Qs=(i,e)=>{let t=document.createElement("canvas");return t.width=i,t.height=e,t},$s=i=>{let e=new pe.CanvasTexture(i);return e.colorSpace=pe.SRGBColorSpace,e.anisotropy=8,e},Ii=()=>(getComputedStyle(document.documentElement).getPropertyValue("--fh")||"").trim()||"'Bebas Neue', Impact, sans-serif",zh="Archivo, Arial, sans-serif",Js=i=>i?i.textContent.replace(/\s+/g," ").trim():"";function rd(i,e,t){let n=[],s="";for(let r of e.split(" ")){let a=s?s+" "+r:r;i.measureText(a).width>t&&s?(n.push(s),s=r):s=a}return s&&n.push(s),n}function ad(i){let e=[...document.querySelectorAll("#reviews .rcard")].map(l=>({t:Js(l.querySelector(".rtext")),n:Js(l.querySelector(".rname"))})).filter(l=>l.t),t=e.find(l=>/aria familiare/i.test(l.t))||e.filter(l=>l.t.length<170)[0]||e[0]||{t:"Pi\xF9 che una palestra, una famiglia.",n:""},n=Qs(i,i),s=n.getContext("2d"),r=i/1024;s.textAlign="left",s.textBaseline="alphabetic",s.fillStyle="#39ff14",s.font=`${96*r}px ${zh}`,s.fillText("\u2605\u2605\u2605\u2605\u2605",60*r,150*r);let a=104;s.font=`${a*r}px ${Ii()}`;let o=rd(s,t.t.toUpperCase(),i-120*r);for(;o.length>7&&a>56;)a-=6,s.font=`${a*r}px ${Ii()}`,o=rd(s,t.t.toUpperCase(),i-120*r);s.fillStyle="#f4f4f2",o.forEach((l,h)=>s.fillText(l,60*r,(270+h*a*1.02)*r));let c=(270+o.length*a*1.02+30)*r;return s.fillStyle="#39ff14",s.fillRect(60*r,c,110*r,6*r),t.n&&(s.fillStyle="rgba(244,244,242,.78)",s.font=`500 ${40*r}px ${zh}`,s.fillText(t.n+"  \xB7  Recensione Google",60*r,c+64*r)),$s(n)}function od(i){let e=[...document.querySelectorAll("#orari table tbody tr")].map(g=>({name:Js(g.querySelector("th")),d:[...g.querySelectorAll("td")].map(b=>b.querySelectorAll(".sl").length)})).filter(g=>g.name&&g.d.length),t=[...document.querySelectorAll("#orari table thead th")].slice(1).map(Js),n=Qs(i,i),s=n.getContext("2d"),r=i/1024;s.fillStyle="#060807",s.fillRect(0,0,i,i),s.fillStyle="#f4f4f2",s.font=`${98*r}px ${Ii()}`,s.textBaseline="alphabetic",s.fillText("ORARIO ",56*r,128*r);let a=s.measureText("ORARIO ").width;s.fillStyle="#39ff14",s.fillText("DEI CORSI",56*r+a,128*r);let o=Math.max(1,e.length),c=Math.max(1,t.length||6),l=430*r,h=(i-l-50*r)/c,u=250*r,f=Math.min(86*r,(i-u-90*r)/o);s.font=`${46*r}px ${Ii()}`,s.fillStyle="rgba(244,244,242,.6)",s.textAlign="center",(t.length?t:["Lun","Mar","Mer","Gio","Ven","Sab"]).forEach((g,b)=>s.fillText(g.toUpperCase(),l+h*(b+.5),212*r)),e.forEach((g,b)=>{let m=u+f*b;s.fillStyle="rgba(255,255,255,.07)",s.fillRect(50*r,m,i-100*r,2*r),s.textAlign="left",s.fillStyle="#f4f4f2",s.font=`${Math.min(52,60*f/(86*r))*r}px ${Ii()}`,s.fillText(g.name.toUpperCase().slice(0,20),56*r,m+f*.68),g.d.forEach((d,_)=>{let v=l+h*(_+.5),x=m+f*.5;d?(s.fillStyle="#39ff14",s.roundRect?(s.beginPath(),s.roundRect(v-h*.3,x-f*.2,h*.6,f*.4,f*.2),s.fill()):s.fillRect(v-h*.3,x-f*.2,h*.6,f*.4)):(s.fillStyle="rgba(255,255,255,.13)",s.fillRect(v-h*.12,x-2*r,h*.24,4*r))})});let p=/Lun-Ven[^.]*/.exec(Js(document.querySelector("#orari")));return s.textAlign="left",s.fillStyle="rgba(244,244,242,.6)",s.font=`500 ${32*r}px ${zh}`,s.fillText(p?"Sala pesi  "+p[0].replace(/\s+/g," "):"",56*r,i-44*r),$s(n)}function Nv(i){let e=Qs(512,128),t=e.getContext("2d");return t.font=`92px ${Ii()}`,t.textAlign="center",t.textBaseline="middle",t.fillStyle="#eafde6",t.fillText(i,256,70),$s(e)}function Uv(i){let e=Qs(512,96),t=e.getContext("2d");return t.font=`62px ${Ii()}`,t.textAlign="center",t.textBaseline="middle",t.fillStyle="#f0f2ee",t.fillText(i.toUpperCase(),256,52,490),$s(e)}function cd({mobile:i,softTex:e}){let t=new pe.Group;t.name="storia";let{x0:n,x1:s,z0:r,z1:a,h:o,door:c}=Dv,l=.16,h=(n+s)/2,u=new pe.MeshStandardMaterial({color:1514008,roughness:.88,metalness:0}),f=[],p=[],g=(ie,ce,we,de,P,w,F)=>{let O=new pe.BoxGeometry(ce,we,de);O.translate(P,w,F),ie.push(O)};g(f,l,o,c.a+8.5,n,o/2,(c.a-8.5)/2),g(f,l,o,7-c.b,n,o/2,(7+c.b)/2),g(f,l,o-c.h,c.b-c.a,n,(o+c.h)/2,(c.a+c.b)/2),g(f,l,o,r-a,s,o/2,(r+a)/2),g(f,s-n,o,l,h,o/2,r);let b=.8,m=2.1,d=[n+.8,h,s-.8],_=[n,...d.flatMap(ie=>[ie-b/2,ie+b/2]),s];for(let ie=0;ie<_.length;ie+=2)g(f,_[ie+1]-_[ie],o,l,(_[ie]+_[ie+1])/2,o/2,a);for(let ie of d)g(f,b,o-m,l,ie,(o+m)/2,a);let v=new pe.Mesh(lt(f,!1),u);v.receiveShadow=!0,v.castShadow=!i,t.add(v);let x=new pe.MeshBasicMaterial({color:new pe.Color().setRGB(.3,1.25,.2)}),A=.022;for(let ie of[c.a-A,c.b+A])g(p,.03,c.h,.03,n-l/2-.016,c.h/2,ie);g(p,.03,.03,c.b-c.a+.09,n-l/2-.016,c.h+A,(c.a+c.b)/2);for(let ie of d){for(let ce of[-1,1])g(p,.03,m,.03,ie+ce*(b/2+A),m/2,a+l/2+.016);g(p,b+.09,.03,.03,ie,m+A,a+l/2+.016)}t.add(new pe.Mesh(lt(p,!1),x));let S=new pe.MeshBasicMaterial({color:new pe.Color().setRGB(1.5,1.9,1.45)}),T=[];for(let ie of[.9,-2.3,-5.4])g(T,.05,.05,1.5,h,o-.06,ie);t.add(new pe.Mesh(lt(T,!1),S));{let ie=new pe.Group;ie.position.set(n+l/2,0,c.b-.02),ie.rotation.y=1.42;let ce=new pe.MeshStandardMaterial({color:1711387,roughness:.55,metalness:.35}),we=new pe.MeshStandardMaterial({color:12172737,roughness:.3,metalness:1}),de=new pe.Mesh(new pe.BoxGeometry(.045,c.h-.04,c.b-c.a-.04),ce);de.position.set(0,(c.h-.04)/2+.01,-(c.b-c.a-.04)/2),de.castShadow=!i,ie.add(de);let P=new pe.Mesh(new pe.BoxGeometry(.05,.05,c.b-c.a-.3),we);P.position.set(-.06,1.02,-(c.b-c.a)/2),ie.add(P),t.add(ie);let w=Qs(256,96),F=w.getContext("2d");F.fillStyle="#1fa30f",F.fillRect(0,0,256,96),F.fillStyle="#ffffff",F.beginPath(),F.moveTo(196,48),F.lineTo(150,18),F.lineTo(150,36),F.lineTo(60,36),F.lineTo(60,60),F.lineTo(150,60),F.lineTo(150,78),F.closePath(),F.fill();let O=new pe.Mesh(new pe.BoxGeometry(.05,.17,.45),[0,1,2,3,4,5].map(X=>X===1?new pe.MeshBasicMaterial({map:$s(w),color:new pe.Color().setRGB(1.5,1.7,1.5)}):ce));O.position.set(n-l/2-.03,c.h+.2,(c.a+c.b)/2),t.add(O)}let C=(()=>{let ie=Qs(8,128),ce=ie.getContext("2d"),we=ce.createLinearGradient(0,0,0,128);return we.addColorStop(0,"#9dff8c"),we.addColorStop(.55,"#e9ffe4"),we.addColorStop(1,"#ffffff"),ce.fillStyle=we,ce.fillRect(0,0,8,128),$s(ie)})(),M=new pe.MeshBasicMaterial({map:C,color:new pe.Color().setRGB(.5,.6,.48),fog:!1}),y=e([[0,"rgba(190,255,175,.55)"],[.6,"rgba(120,255,95,.12)"],[1,"rgba(120,255,95,0)"]]),N=new pe.MeshBasicMaterial({map:y,transparent:!0,depthWrite:!1,blending:pe.AdditiveBlending,opacity:i?.45:.8}),I=new pe.PlaneGeometry(1,1),E=(ie,ce,we,de)=>{let P=new pe.Mesh(I,N);P.rotation.x=-Math.PI/2,P.position.set(ie,.012,ce),P.scale.set(we,de,1),P.renderOrder=3,t.add(P)},U=[["images/anima-fight-s.webp",.34],["images/corso-calisthenics.webp",.5],["images/corso-posturale.webp",.56]],V=[],G=new pe.MeshBasicMaterial({map:C,transparent:!0,depthWrite:!1,blending:pe.AdditiveBlending,opacity:.22,fog:!1});["FIGHT","FITNESS","BENESSERE"].forEach((ie,ce)=>{let we=M.clone();V.push({mat:we,src:U[ce][0],fx:U[ce][1]});let de=new pe.Mesh(I,we);de.position.set(d[ce],m/2,a-.02),de.scale.set(b,m,1),t.add(de);let P=new pe.Mesh(I,G);P.position.set(d[ce],m/2,a-.012),P.scale.set(b,m,1),P.renderOrder=2,t.add(P);let w=new pe.Mesh(I,new pe.MeshBasicMaterial({map:Nv(ie),transparent:!0,depthWrite:!1}));w.position.set(d[ce],m+.3,a+l/2+.012),w.scale.set(.92,.23,1),t.add(w),E(d[ce],a+1,1.5,2.6)});{let ie=(c.a+c.b)/2,ce=new pe.Mesh(new pe.BoxGeometry(.05,1.7,.05),S);ce.position.set(s-l/2-.05,1.45,ie),t.add(ce);let we=new pe.Mesh(I,new pe.MeshBasicMaterial({map:y,transparent:!0,depthWrite:!1,blending:pe.AdditiveBlending,opacity:1}));we.rotation.y=-Math.PI/2,we.position.set(s-l/2-.02,1.45,ie),we.scale.set(3.4,3,1),t.add(we)}E(n-1.1,(c.a+c.b)/2,3.2,2.4),E(n+1.2,(c.a+c.b)/2,2.6,2.6);let $=i?512:1024,Y=new pe.Mesh(I,new pe.MeshBasicMaterial({map:ad($),transparent:!0,depthWrite:!1}));Y.rotation.y=-Math.PI/2,Y.position.set(s-l/2-.012,1.72,-2.6),Y.scale.set(1.36,1.36,1),t.add(Y);let te=new pe.MeshStandardMaterial({color:329222,roughness:.5,metalness:.4}),ee=od($),Re=new pe.Group;Re.position.set(n+l/2,1.72,-4.6),Re.rotation.y=Math.PI/2,t.add(Re);let ue=new pe.Mesh(new pe.BoxGeometry(1.66,1.66,.06),te);ue.position.z=.03,Re.add(ue);let ae=new pe.Mesh(I,new pe.MeshStandardMaterial({map:ee,emissiveMap:ee,emissive:16777215,emissiveIntensity:.62,roughness:.6}));ae.position.z=.062,ae.scale.set(1.58,1.58,1),Re.add(ae);let j=[...document.querySelectorAll("#famiglia .tcard")].map(ie=>{let ce=ie.querySelector("img");return{name:Js(ie.querySelector(".tn")),src:ce?ce.getAttribute("src"):""}}).filter(ie=>ie.src).slice(0,10),J=[],fe=i?.29:.4,q=fe*1.5,ne=Math.max(1,Math.ceil(j.length/2)),ge=i?.335:.53,Te=-5.75,xe=[],Z=new pe.PlaneGeometry(fe,q),K=new pe.PlaneGeometry(fe,fe*96/512);if(j.forEach((ie,ce)=>{let we=ce<ne?0:1,de=we?ce-ne:ce,P=we?j.length-ne:ne,w=Te+(de-(P-1)/2)*ge,F=i?we?1.32:1.96:we?1.18:2.02,O=s-l/2;{let H=new pe.BoxGeometry(.035,q+.05,fe+.05);H.translate(O-.0175,F,w),xe.push(H)}let X=new pe.MeshStandardMaterial({color:1842204,emissive:16777215,emissiveIntensity:.05,roughness:.7}),D=new pe.Mesh(Z,X);D.rotation.y=-Math.PI/2,D.position.set(O-.037,F,w),t.add(D);let k=new pe.MeshBasicMaterial({map:Uv(ie.name.split(" ")[0]),transparent:!0,depthWrite:!1,opacity:.25}),B=new pe.Mesh(K,k);B.rotation.y=-Math.PI/2,B.position.set(O-.012,F-q/2-.085,w),t.add(B),J.push({mat:X,pm:k,src:ie.src})}),xe.length){let ie=new pe.Mesh(lt(xe,!1),te);ie.castShadow=!i,t.add(ie)}let R=!1,ye=()=>{if(R)return;R=!0;let ie=new pe.TextureLoader;for(let ce of V)ie.load(ce.src,we=>{we.colorSpace=pe.SRGBColorSpace,we.anisotropy=4;let de=we.image.width/we.image.height,P=.8/2.1;de>P?(we.repeat.x=P/de,we.offset.x=Math.min(1-we.repeat.x,Math.max(0,ce.fx-we.repeat.x/2))):(we.repeat.y=de/P,we.offset.y=(1-we.repeat.y)/2),ce.mat.map=we,ce.mat.color.setRGB(.92,1,.9),ce.mat.needsUpdate=!0},void 0,()=>{});for(let ce of J){let we=P=>{P.colorSpace=pe.SRGBColorSpace,P.anisotropy=4,ce.mat.map=P,ce.mat.emissiveMap=P,ce.mat.color.set(9079434),ce.mat.needsUpdate=!0},de=/-s\.webp$/.test(ce.src)?ce.src:ce.src.replace(/\.webp$/,"-s.webp");ie.load(de,we,void 0,()=>{de!==ce.src&&ie.load(ce.src,we,void 0,()=>{})})}},le=ie=>{let ce=J.length;J.forEach((we,de)=>{let P=Math.min(1,Math.max(0,ie*(ce+2)-de));we.mat.emissiveIntensity=.05+.8*P,we.pm.opacity=.25+.75*P})};return document.fonts&&document.fonts.ready&&!document.fonts.check("40px "+Ii())&&document.fonts.ready.then(()=>{Y.material.map=ad($),Y.material.needsUpdate=!0;let ie=od($);ae.material.map=ie,ae.material.emissiveMap=ie,ae.material.needsUpdate=!0}),{group:t,load:ye,setLit:le}}var Zi=3800852;function ld(i,{mobile:e=!1,strict:t=!1}={}){let n=new pe.WebGLRenderer({canvas:i,antialias:e,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:t});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1.5:2)),n.outputColorSpace=pe.SRGBColorSpace,n.toneMapping=pe.ACESFilmicToneMapping,n.toneMappingExposure=1.05,n.shadowMap.enabled=!e,n.shadowMap.type=pe.PCFSoftShadowMap,n}function Fv(i){let e=new pe.Scene,t=new pe.Mesh(new pe.BoxGeometry(20,10,20),new pe.MeshBasicMaterial({color:329223,side:pe.BackSide}));e.add(t);let n=(a,o,c,l,h,u)=>{let f=new pe.Mesh(new pe.PlaneGeometry(a,o),new pe.MeshBasicMaterial({color:new pe.Color(c).multiplyScalar(l),side:pe.DoubleSide}));f.position.set(...h),f.rotation.set(...u),e.add(f)};n(7,3.5,16777215,6,[0,4.9,1],[Math.PI/2,0,0]),n(4,2.2,16777215,3,[-6,2.5,6],[0,Math.PI*.75,0]),n(.35,7,Zi,9,[9.9,1.5,0],[0,-Math.PI/2,Math.PI/2]),n(.35,7,Zi,9,[-9.9,1.2,-2],[0,Math.PI/2,Math.PI/2]),n(6,.3,Zi,7,[0,.4,-9.9],[0,0,0]);let s=new pe.PMREMGenerator(i),r=s.fromScene(e,.03).texture;return s.dispose(),r}function hd(i,e,{mobile:t=!1,floor:n=!0}={}){i.environment=Fv(e),i.environmentIntensity=.9,i.fog=new pe.FogExp2(197892,.028);let s=new pe.DirectionalLight(16777215,2.2);s.position.set(4,9,6),s.castShadow=!t,s.shadow.mapSize.set(2048,2048),s.shadow.bias=-4e-4,s.shadow.normalBias=.02;let r=s.shadow.camera;r.left=-14,r.right=14,r.top=14,r.bottom=-14,r.near=.5,r.far=40,i.add(s);let a=new pe.DirectionalLight(Zi,1.6);a.position.set(-6,3,-7),i.add(a);let o=new pe.HemisphereLight(10485664,131842,.25);i.add(o);let c=null;return n&&(c=new pe.Mesh(new pe.PlaneGeometry(80,80),new pe.MeshStandardMaterial({color:724236,roughness:.42,metalness:0})),c.rotation.x=-Math.PI/2,c.receiveShadow=!0,i.add(c)),{key:s,rim:a,fill:o,floor:c}}var ri=Math.sqrt,ln=Math.abs,yn=Math.max,Di=Math.min;function qr(i,e,t){let n=yn(t-ln(i-e),0)/t;return Di(i,e)-n*n*t*.25}function Bo(i,e,t){let n=yn(t-ln(i-e),0)/t;return yn(i,e)+n*n*t*.25}function Ji(i,e,t){let n=(t-i)/(e-i);return n=n<0?0:n>1?1:n,n*n*(3-2*n)}function Hh(i,e,t,n,s,r){let a=i/n,o=e/s,c=t/r,l=ri(a*a+o*o+c*c),h=a/n,u=o/s,f=c/r,p=ri(h*h+u*u+f*f);return p<1e-9?-Di(n,s,r):l*(l-1)/p}function Gh(i,e,t,n){let s=i/t,r=e/n,a=ri(s*s+r*r),o=s/t,c=r/n,l=ri(o*o+c*c);return l<1e-9?-Di(t,n):a*(a-1)/l}function ko(i,e,t,n,s,r,a,o,c,l,h){let u=i-n,f=e-s,p=t-r,g=a-n,b=o-s,m=c-r,d=(u*g+f*b+p*m)/(g*g+b*b+m*m);d=d<0?0:d>1?1:d;let _=u-g*d,v=f-b*d,x=p-m*d;return ri(_*_+v*v+x*x)-(l+(h-l)*d)}function Vh(i,e,t,n,s){let r=ln(i)-t+s,a=ln(e)-n+s,o=yn(r,0),c=yn(a,0);return ri(o*o+c*c)+Di(yn(r,a),0)-s}var Mn=-.004,pd=-.165,Go=.15,jr=-.099,Li=.027,md=2.05;function Zr(i){let e=Ji(-.128,-.165,i);return[.055+.0055*e,.047+.005*e]}var Ov=1,gd=!1,Fn=[.004,.028,.03,.022];var ud=Math.cos(.16),fd=Math.sin(.16);function bd(i,e,t){if(i>-.025||t>.085||t<-.075)return Ov;let n=e+.011,s=t-0,r=s*ud+n*fd,a=1-.45*Ji(-.01,.045,r);return Hh((i+.059)/a,-s*fd+n*ud,r,.0172,.026,.05)*(.7+.3*a)}var Bv=[[-.058,.08,3,.004,.042,65e-5],[-.047,-.06,2,-.012,.03,45e-5],[-.037,.14,4,.014,.022,35e-5]];function Wh(i,e,t,n){let s=Hh(i-.005,e-.017,t-.045,.065,.066,.1),r=ko(i,e,t,-.016,.002,.108,.018,-.004,.106,.056,.054);if(s=qr(s,r,.03),s=qr(s,Hh(i,e-.047,t-.088,.052,.035,.046),.03),s=Bo(s,-.052-e,.02),t>.09&&(s=Bo(s,.26*e+.966*t-.1525,.03)),e<-.015&&t>.03&&t<.11){let l=ko(i,e,t,-.04,-.0558,.07,.045,-.0558,.068,.0085,.0085);l=Di(l,ko(i,e,t,.045,-.0558,.068,.062,-.043,.076,.0085,.006)),l=Di(l,ko(i,e,t,-.04,-.0558,.07,-.058,-.045,.077,.0085,.006)),s=Bo(s,-l,.008)}let a=.055,o=.047;if(t<.03){let l=t+Go*(e-Mn),h=Zr(l);a=h[0],o=h[1];let u=yn(Gh(i,e-Mn,a,o),yn((pd-l)*.99,t+.01));s=qr(s,u,.035)}if(n!==2){let l=bd(i,e,t);if(l<.05){let h=.022+-.015*Ji(-.025,.008,t)+.012*Ji(.025,.06,t);s=qr(s,l,h)}}if(gd)return yn(s,-.082-t);if(t>-.075&&t<-.02&&e>.012){let l=Ji(.012,.035,e);for(let h=0;h<3;h++){let u=Bv[h],f=u[0],p=u[1],g=u[2],b=u[3],m=u[4],d=u[5],_=i-b,v=1-Ji(m*.45,m,ln(_));if(v<=0)continue;let x=(t-(f+p*_+g*_*_))/.0042;ln(x)<3&&(s+=l*v*d*Math.exp(-x*x))}}if(s+=45e-5*Math.sin(i*61+t*23)*Math.sin(e*57-t*41+1.3),t<-.075&&(s=Bo(s,-yn(Gh(i,e-Mn,a-.0085,o-.0085),t+.09),.004)),n)return s;if(e>.04&&ln(i-Fn[0])<.05&&ln(t-Fn[1])<.05){let l=Vh(i-Fn[0],t-Fn[1],Fn[2],Fn[3],.011);s=qr(s,yn(l,s-.0014),.0012)}let c=t-jr;if(ln(c)<Li+.006){let l=Gh(i,e-Mn,.055,.047);if(l<.02){let h=Vh(l-.003,c,.0032,Li,.0016),u=Math.atan2((e-Mn)/.047,i/.055),f=.0031+.0016*Ji(-1.7,-.5,u),p=yn(Vh(l-f,c,f,Li-6e-4,.0016),(u-md)*.05);s=Di(s,Di(h,p))}}return s}function kv(i,e,t,n){let s=Math.ceil((t[0]-e[0])/n)+1,r=Math.ceil((t[1]-e[1])/n)+1,a=Math.ceil((t[2]-e[2])/n)+1,o=s*r*a,c=new Float32Array(o),l=n*4,h=Math.ceil((s-1)/4)+1,u=Math.ceil((r-1)/4)+1,f=Math.ceil((a-1)/4)+1,p=new Float32Array(h*u*f);for(let T=0;T<f;T++)for(let C=0;C<u;C++)for(let M=0;M<h;M++)p[M+h*(C+u*T)]=i(e[0]+M*l,e[1]+C*l,e[2]+T*l);let g=l*.9;for(let T=0;T<a;T++){let C=e[2]+T*n,M=Math.min(f-1,Math.round(T/4));for(let y=0;y<r;y++){let N=e[1]+y*n,I=Math.min(u-1,Math.round(y/4)),E=s*(y+r*T);for(let U=0;U<s;U++,E++){let V=p[Math.min(h-1,Math.round(U/4))+h*(I+u*M)];c[E]=ln(V)>g?V:i(e[0]+U*n,N,C)}}}let b=new Int32Array(o).fill(-1),m=[],d=[],_=[0,1,s,s+1,s*r,s*r+1,s*r+s,s*r+s+1],v=[0,1,2,3,4,5,6,7,0,2,1,3,4,6,5,7,0,4,1,5,2,6,3,7],x=new Float32Array(8),A=s,S=s*r;for(let T=0;T<a-1;T++)for(let C=0;C<r-1;C++)for(let M=0;M<s-1;M++){let y=M+s*(C+r*T),N=0;for(let Y=0;Y<8;Y++){let te=c[y+_[Y]];x[Y]=te,te<0&&(N|=1<<Y)}if(N===0||N===255)continue;let I=0,E=0,U=0,V=0;for(let Y=0;Y<24;Y+=2){let te=v[Y],ee=v[Y+1],Re=x[te],ue=x[ee];if(Re<0==ue<0)continue;let ae=Re/(Re-ue);I+=(te&1)+((ee&1)-(te&1))*ae,E+=(te>>1&1)+((ee>>1&1)-(te>>1&1))*ae,U+=(te>>2&1)+((ee>>2&1)-(te>>2&1))*ae,V++}let G=m.length/3;m.push(e[0]+(M+I/V)*n,e[1]+(C+E/V)*n,e[2]+(T+U/V)*n),b[y]=G;let $=x[0]<0;if(C>0&&T>0&&$!==x[1]<0){let Y=b[y],te=b[y-A],ee=b[y-A-S],Re=b[y-S];$?d.push(Y,te,ee,Y,ee,Re):d.push(Y,ee,te,Y,Re,ee)}if(M>0&&T>0&&$!==x[2]<0){let Y=b[y],te=b[y-S],ee=b[y-S-1],Re=b[y-1];$?d.push(Y,te,ee,Y,ee,Re):d.push(Y,ee,te,Y,Re,ee)}if(M>0&&C>0&&$!==x[4]<0){let Y=b[y],te=b[y-1],ee=b[y-1-A],Re=b[y-A];$?d.push(Y,te,ee,Y,ee,Re):d.push(Y,ee,te,Y,Re,ee)}}return{pos:new Float32Array(m),idx:d}}function Xh(i,e,t,n,s,r){let a=i(e+s,t-s,n-s),o=i(e-s,t-s,n+s),c=i(e-s,t+s,n-s),l=i(e+s,t+s,n+s);r[0]=a-o-c+l,r[1]=-a-o+c+l,r[2]=-a+o-c+l;let h=ri(r[0]*r[0]+r[1]*r[1]+r[2]*r[2])||1;r[0]/=h,r[1]/=h,r[2]/=h}function zv(i,e,t,n){let s=i(e[0],e[1],e[2]);Xh(i,e[0],e[1],e[2],n,t),e[0]-=s*t[0],e[1]-=s*t[1],e[2]-=s*t[2]}function Kr(i,e,t,n,s){for(let r=0;r<s;r++){let a=i(e[0],e[1],e[2]);Xh(i,e[0],e[1],e[2],n,t),e[0]-=a*t[0],e[1]-=a*t[1],e[2]-=a*t[2]}Xh(i,e[0],e[1],e[2],n,t)}function Gv(i,e,t,n,s,r){let a=Math.ceil((t-e)/r)+1,o=Math.ceil((s-n)/r)+1,c=new Float32Array(a*o);for(let b=0;b<o;b++)for(let m=0;m<a;m++)c[m+a*b]=i(e+m*r,n+b*r);let l=new Map,h=new Map,u=(b,m,d)=>{let _=(m*a+b)*2+d;if(!l.has(_)){let v=c[b+a*m],x=d?c[b+a*(m+1)]:c[b+1+a*m],A=v/(v-x);l.set(_,d?[e+b*r,n+(m+A)*r]:[e+(b+A)*r,n+m*r])}return _},f=(b,m)=>{(h.get(b)||h.set(b,[]).get(b)).push(m),(h.get(m)||h.set(m,[]).get(m)).push(b)};for(let b=0;b<o-1;b++)for(let m=0;m<a-1;m++){let d=c[m+a*b]<0,_=c[m+1+a*b]<0,v=c[m+1+a*(b+1)]<0,x=c[m+a*(b+1)]<0,A=[];d!==_&&A.push(u(m,b,0)),_!==v&&A.push(u(m+1,b,1)),x!==v&&A.push(u(m,b+1,0)),d!==x&&A.push(u(m,b,1)),A.length===2?f(A[0],A[1]):A.length===4&&(f(A[0],A[1]),f(A[2],A[3]))}let p=new Set,g=[];for(let b of h.keys()){if(p.has(b))continue;let m=b,d=-1,_=0;for(;_++<1e5;){let A=h.get(m).filter(T=>T!==d);if(h.get(m).length<2||A.length===0)break;let S=A[0];if(d=m,m=S,m===b)break}let v=[],x=m;for(d=-1;x!==void 0&&!p.has(x);){p.add(x),v.push(l.get(x));let A=h.get(x).filter(S=>S!==d&&!p.has(S));d=x,x=A[0]}v.length>4&&g.push(v)}return g}function Vv(i,e,t=2){for(let c=0;c<t;c++)for(let l=1;l<i.length-1;l++)for(let h=0;h<3;h++)i[l][h]=(i[l-1][h]+2*i[l][h]+i[l+1][h])/4;let n=[0];for(let c=1;c<i.length;c++)n.push(n[c-1]+Math.hypot(i[c][0]-i[c-1][0],i[c][1]-i[c-1][1],i[c][2]-i[c-1][2]));let s=n[n.length-1],r=Math.max(2,Math.round(s/e)),a=[],o=0;for(let c=0;c<=r;c++){let l=s*c/r;for(;o<n.length-2&&n[o+1]<l;)o++;let h=(l-n[o])/(n[o+1]-n[o]||1);a.push([0,1,2].map(u=>i[o][u]+(i[o+1][u]-i[o][u])*h))}return a}function xd(i,e={}){let t=performance.now(),n=e.lod==="low";gd=n;let s=new i.Group;s.name="guantone";let r=(ne,ge,Te)=>Wh(ne,ge,Te,0),a=(ne,ge,Te)=>Wh(ne,ge,Te,1),o=(ne,ge,Te)=>Wh(ne,ge,Te,2),c=n?.006:.0038,{pos:l,idx:h}=kv(r,[-.104,-.066,-.17],[.08,.096,.172],c),u=l.length/3,f=new Float32Array(u*3),p=[0,0,0],g=[0,0,0];for(let ne=0;ne<u;ne++)p[0]=l[ne*3],p[1]=l[ne*3+1],p[2]=l[ne*3+2],zv(r,p,g,c*.35),l[ne*3]=p[0],l[ne*3+1]=p[1],l[ne*3+2]=p[2],f[ne*3]=g[0],f[ne*3+1]=g[1],f[ne*3+2]=g[2];let b=[],m=[];for(let ne=0;ne<h.length;ne+=3){let ge=h[ne],Te=h[ne+1],xe=h[ne+2],Z=l[ge*3],K=l[ge*3+1],R=l[ge*3+2],ye=l[Te*3]-Z,le=l[Te*3+1]-K,ie=l[Te*3+2]-R,ce=l[xe*3]-Z,we=l[xe*3+1]-K,de=l[xe*3+2]-R,P=le*de-ie*we,w=ie*ce-ye*de,F=ye*we-le*ce,O=f[ge*3]+f[Te*3]+f[xe*3],X=f[ge*3+1]+f[Te*3+1]+f[xe*3+1],D=f[ge*3+2]+f[Te*3+2]+f[xe*3+2];if(P*O+w*X+F*D<0){let Le=Te;Te=xe,xe=Le}let k=(R+l[Te*3+2]+l[xe*3+2])/3,B=(Z+l[Te*3]+l[xe*3])/3,H=(K+l[Te*3+1]+l[xe*3+1])/3,[Me,oe]=Zr(k+Go*(H-Mn));(k<-.08&&(B/(Me-.004))**2+((H-Mn)/(oe-.004))**2<1?m:b).push(ge,Te,xe)}let d=new i.BufferGeometry;d.setAttribute("position",new i.BufferAttribute(l,3)),d.setAttribute("normal",new i.BufferAttribute(f,3)),d.setAttribute("uv",new i.BufferAttribute(new Float32Array(u*2),2)),d.setIndex([...b,...m]),d.addGroup(0,b.length,0),d.addGroup(b.length,m.length,1);let v=qv(i,256),x=new i.MeshPhysicalMaterial({color:789517,roughness:.46,metalness:0,clearcoat:.4,clearcoatRoughness:.28,sheen:.35,sheenColor:3815994,sheenRoughness:.5,specularIntensity:.6}),A=new i.MeshPhysicalMaterial({color:3800852,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.25});dd(x,v,140,12e-5,7e-4),dd(A,v,140,7e-5,4e-4);let S=new i.MeshStandardMaterial({color:329221,roughness:1,metalness:0,envMapIntensity:.35}),T=new i.MeshStandardMaterial({color:13619916,roughness:.75,metalness:0}),C=new i.Mesh(d,[x,S]);C.castShadow=C.receiveShadow=!0,s.add(C);let M=n?40:96,y=[[-5e-4,-.1435],[7e-4,-.1442],[.0011,-.1458],[.0012,-.149],[.0012,-.1615]],N=.0044,I=.0012-N,E=-.1628,U=n?6:10;for(let ne=1;ne<=U;ne++){let ge=Math.PI*ne/U;y.push([I+N*Math.cos(ge),E-N*Math.sin(ge)])}y.push([I-N+2e-4,-.1575],[I-N+.0012,-.155]);let V=[zo(i,y,M)];if(n){let ne=(xe,Z)=>{xe.setAttribute("uv",new i.BufferAttribute(new Float32Array(xe.attributes.position.count*2),2));let K=new i.Mesh(xe,Z);K.castShadow=K.receiveShadow=!0,s.add(K)},ge=zo(i,[[-4e-4,-.078],[0,-.1],[0,-.13],[0,-.159]],M);ne(lt([ge,zo(i,[[-6e-4,-.0722],[.0035,-.072],[.0058,-.0732],[.0066,-.0758],[.0066,-.1222],[.0058,-.1248],[.0035,-.126],[-6e-4,-.1258]],M,!1)]),x),ne(zo(i,[[-.0094,-.158],[-.0094,-.13],[-.0094,-.105],[-.02,-.1],[-.04,-.097]],M,!0,!0),S)}let G=.0023,$=n?4:8,Y=[],te=(ne,ge,Te=a)=>{let xe=Gv((Z,K)=>Te(ne,Z,K),-.068,.084,-.075,.175,n?.003:.0022);for(let Z of xe){let K=Z.map(([le,ie])=>[ne,le,ie]),R=[],ye=()=>{if(R.length>6){let le=Vv(R,n?.0045:.002,6);ee(le)}R=[]};for(let le of K){let ie=R[R.length-1];ie&&Math.hypot(le[0]-ie[0],le[1]-ie[1],le[2]-ie[2])>.008&&ye(),ge(le)?R.push(le):ye()}ye()}},ee=ne=>{let ge=[],Te=[];for(let xe of ne){let Z=xe.slice(),K=[0,0,0];Kr(a,Z,K,8e-4,2),ge.push(Z),Te.push(K)}V.push(Wv(i,ge,Te,G,G*.45,$)),Y.push({pts:ge,nn:Te,side:1})},Re=ne=>ne[2]>(n?-.052:jr+Li+.0015);te(.055,Re),te(-.053,ne=>Re(ne)&&bd(ne[0],ne[1],ne[2])>.008,o);let ue=[],ae={len:.0032,gap:.0021,w:9e-4,hgt:55e-5};for(let ne of Y){let ge=Xv(ne.pts,ne.nn,.0048,a);ge&&Yr(i,ge.pts,ge.nn,ae,ue,n)}let j=(ne,ge,Te,xe=-Math.PI,Z=Math.PI)=>{let K=[],R=[];for(let le=0;le<=220;le++){let ie=xe+(Z-xe)*le/220,[ce,we]=Zr(ne),de=[(ce+ge)*Math.cos(ie),Mn+(we+ge)*Math.sin(ie),ne],P=[0,0,0];Kr(Te,de,P,6e-4,3),K.push(de),R.push(P)}return{pts:K,nn:R}};for(let ne of[jr-Li+.0042,jr+Li-.0042]){let ge=j(ne,.01,r);Yr(i,ge.pts,ge.nn,ae,ue,n)}{let ne=[],ge=[];for(let xe=0;xe<=220;xe++){let Z=-Math.PI+2*Math.PI*xe/220,[K,R]=Zr(-.1525);ne.push([(K+.0014)*Math.cos(Z),Mn+(R+.0014)*Math.sin(Z),-.1535-Go*(R+.0014)*Math.sin(Z)]);let ye=Math.cos(Z)/K,le=Math.sin(Z)/R,ie=Math.hypot(ye,le);ge.push([ye/ie,le/ie,0])}Yr(i,ne,ge,ae,ue,n)}{let ne=[],ge=[];for(let Te=0;Te<=30;Te++){let xe=jr-Li+.004+(2*Li-.008)*Te/30,Z=md-.09,K=[.07*Math.cos(Z),Mn+.062*Math.sin(Z),xe],R=[0,0,0];Kr(r,K,R,6e-4,3),ne.push(K),ge.push(R)}Yr(i,ne,ge,ae,ue,n)}{let ne=[],ge=[];for(let Z=0;Z<=160;Z++){let K=2*Math.PI*Z/160,R=Math.cos(K),ye=Math.sin(K),le=Math.sign(R)*Math.pow(ln(R),.42)*(Fn[2]-.0045),ie=Math.sign(ye)*Math.pow(ln(ye),.42)*(Fn[3]-.0045),ce=[Fn[0]+le,.1,Fn[1]+ie],we=[0,0,0];for(let de=0;de<30;de++){let P=r(ce[0],ce[1],ce[2]);if(ce[1]-=P,ln(P)<1e-6)break}Kr(r,ce,we,6e-4,1),ne.push(ce),ge.push(we)}Yr(i,ne,ge,ae,ue,n)}let J=lt(V.map(ne=>(ne.setAttribute("uv",new i.BufferAttribute(new Float32Array(ne.attributes.position.count*2),2)),ne))),fe=new i.Mesh(J,A);if(fe.castShadow=fe.receiveShadow=!0,s.add(fe),ue.length){let ne=lt(ue),ge=new i.Mesh(ne,T);ge.castShadow=!1,ge.receiveShadow=!0,s.add(ge)}let q=0;return s.traverse(ne=>{ne.isMesh&&(q+=ne.geometry.index?ne.geometry.index.count/3:ne.geometry.attributes.position.count/3)}),s.userData.tris=Math.round(q),s.userData.buildMs=Math.round(performance.now()-t),typeof window<"u"&&(window.__guantone={tris:s.userData.tris,ms:s.userData.buildMs}),s}function zo(i,e,t,n=!0,s=!1){let r=e.length,a=new Float32Array(r*t*3),o=[];for(let u=0;u<t;u++){let f=2*Math.PI*u/t,p=Math.cos(f),g=Math.sin(f);for(let b=0;b<r;b++){let[m,d]=e[b],_=Math.max(d,pd),[v,x]=Zr(_),A=(u*r+b)*3;a[A]=(v+m)*p,a[A+1]=Mn+(x+m)*g,a[A+2]=n?d-Go*(x+m)*g:d}}for(let u=0;u<t;u++)for(let f=0;f<r-1;f++){let p=u*r+f,g=(u+1)%t*r+f;o.push(p,p+1,g,g,p+1,g+1)}let c=new i.BufferGeometry;c.setAttribute("position",new i.BufferAttribute(a,3)),c.setIndex(o),c.computeVertexNormals();let l=c.attributes.normal,h=0;for(let u=0;u<t;u++){let f=u*r+3;h+=l.getX(f)*a[f*3]+l.getY(f)*(a[f*3+1]-Mn)}if(h<0!==s){let u=c.index.array;for(let f=0;f<u.length;f+=3){let p=u[f+1];u[f+1]=u[f+2],u[f+2]=p}c.computeVertexNormals()}return c}function Wv(i,e,t,n,s,r){let a=e.length,o=new Float32Array(a*r*3),c=new Float32Array(a*r*3),l=[];for(let u=0;u<a;u++){let f=e[Math.max(0,u-1)],p=e[Math.min(a-1,u+1)],g=p[0]-f[0],b=p[1]-f[1],m=p[2]-f[2],d=Math.hypot(g,b,m)||1;g/=d,b/=d,m/=d;let[_,v,x]=t[u],A=_*g+v*b+x*m;_-=A*g,v-=A*b,x-=A*m;let S=Math.hypot(_,v,x)||1;_/=S,v/=S,x/=S;let T=b*x-m*v,C=m*_-g*x,M=g*v-b*_,y=e[u][0]+_*s,N=e[u][1]+v*s,I=e[u][2]+x*s;for(let E=0;E<r;E++){let U=2*Math.PI*E/r,V=Math.cos(U),G=Math.sin(U),$=_*V+T*G,Y=v*V+C*G,te=x*V+M*G,ee=(u*r+E)*3;o[ee]=y+$*n,o[ee+1]=N+Y*n,o[ee+2]=I+te*n,c[ee]=$,c[ee+1]=Y,c[ee+2]=te}}for(let u=0;u<a-1;u++)for(let f=0;f<r;f++){let p=u*r+f,g=u*r+(f+1)%r,b=p+r,m=g+r;l.push(p,b,g,g,b,m)}let h=new i.BufferGeometry;return h.setAttribute("position",new i.BufferAttribute(o,3)),h.setAttribute("normal",new i.BufferAttribute(c,3)),h.setIndex(l),Hv(h)}function Hv(i){let e=i.attributes.position.array,t=i.attributes.normal.array,n=i.index.array,s=n[0],r=n[1],a=n[2],o=[e[r*3]-e[s*3],e[r*3+1]-e[s*3+1],e[r*3+2]-e[s*3+2]],c=[e[a*3]-e[s*3],e[a*3+1]-e[s*3+1],e[a*3+2]-e[s*3+2]],l=[o[1]*c[2]-o[2]*c[1],o[2]*c[0]-o[0]*c[2],o[0]*c[1]-o[1]*c[0]];if(l[0]*t[s*3]+l[1]*t[s*3+1]+l[2]*t[s*3+2]<0)for(let h=0;h<n.length;h+=3){let u=n[h+1];n[h+1]=n[h+2],n[h+2]=u}return i}function Xv(i,e,t,n){let s=i.length;if(s<4)return null;let r=[0,0,0];for(let l of i)for(let h=0;h<3;h++)r[h]+=l[h]/s;let a=[],o=[];for(let l=0;l<s;l++){let h=i[Math.max(0,l-1)],u=i[Math.min(s-1,l+1)],f=[u[0]-h[0],u[1]-h[1],u[2]-h[2]],p=e[l],g=[f[1]*p[2]-f[2]*p[1],f[2]*p[0]-f[0]*p[2],f[0]*p[1]-f[1]*p[0]],b=Math.hypot(...g)||1;g=g.map(m=>m/b),a.push([i[l][0]+g[0]*t,i[l][1]+g[1]*t,i[l][2]+g[2]*t])}let c=0;for(let l=0;l<s;l++)c+=(a[l][0]-i[l][0])*(r[0]-i[l][0])+(a[l][1]-i[l][1])*(r[1]-i[l][1])+(a[l][2]-i[l][2])*(r[2]-i[l][2]);if(c<0)for(let l=0;l<s;l++)for(let h=0;h<3;h++)a[l][h]=2*i[l][h]-a[l][h];for(let l of a){let h=[0,0,0];Kr(n,l,h,6e-4,3),o.push(h)}return{pts:a,nn:o}}function Yr(i,e,t,n,s,r){if(r)return;let a=[0];for(let b=1;b<e.length;b++)a.push(a[b-1]+Math.hypot(e[b][0]-e[b-1][0],e[b][1]-e[b-1][1],e[b][2]-e[b-1][2]));let o=a[a.length-1],c=n.len+n.gap,l=[],h=[],u=[],f=b=>{let m=0;for(;m<a.length-2&&a[m+1]<b;)m++;let d=(b-a[m])/(a[m+1]-a[m]||1),_=[],v=[];for(let A=0;A<3;A++)_.push(e[m][A]+(e[m+1][A]-e[m][A])*d),v.push(t[m][A]+(t[m+1][A]-t[m][A])*d);let x=Math.hypot(...v)||1;return[_,v.map(A=>A/x)]};for(let b=c*.5;b+n.len<o;b+=c){let[m,d]=f(b),[_]=f(b+n.len),v=_[0]-m[0],x=_[1]-m[1],A=_[2]-m[2],S=Math.hypot(v,x,A)||1;v/=S,x/=S,A/=S;let[T,C,M]=d,y=x*M-A*C,N=A*T-v*M,I=v*C-x*T,E=l.length/3,U=n.w/2,V=n.hgt,G=(ae,j)=>{l.push(ae[0]-y*U*j-T*2e-4,ae[1]-N*U*j-C*2e-4,ae[2]-I*U*j-M*2e-4),h.push(-y*.6+T*.8,-N*.6+C*.8,-I*.6+M*.8),l.push(ae[0]+T*V*j,ae[1]+C*V*j,ae[2]+M*V*j),h.push(T,C,M),l.push(ae[0]+y*U*j-T*2e-4,ae[1]+N*U*j-C*2e-4,ae[2]+I*U*j-M*2e-4),h.push(y*.6+T*.8,N*.6+C*.8,I*.6+M*.8)},$=[m[0]+v*n.len*.2,m[1]+x*n.len*.2,m[2]+A*n.len*.2],Y=[m[0]+v*n.len*.8,m[1]+x*n.len*.8,m[2]+A*n.len*.8];l.push(m[0]-T*2e-4,m[1]-C*2e-4,m[2]-M*2e-4),h.push(-v*.5+T*.8,-x*.5+C*.8,-A*.5+M*.8),G($,1),G(Y,1),l.push(_[0]-T*2e-4,_[1]-C*2e-4,_[2]-M*2e-4),h.push(v*.5+T*.8,x*.5+C*.8,A*.5+M*.8);let te=E,ee=E+1,Re=E+4,ue=E+7;u.push(te,ee+1,ee,te,ee+2,ee+1);for(let ae=0;ae<2;ae++)u.push(ee+ae,ee+ae+1,Re+ae,Re+ae,ee+ae+1,Re+ae+1);u.push(ue,Re,Re+1,ue,Re+1,Re+2)}if(!l.length)return;let p=new i.BufferGeometry;if(p.setAttribute("position",new i.Float32BufferAttribute(l,3)),p.setAttribute("normal",new i.Float32BufferAttribute(h,3)),p.setIndex(u),(()=>{let b=u,m=b[0],d=b[1],_=b[2],v=[0,1,2].map(T=>l[d*3+T]-l[m*3+T]),x=[0,1,2].map(T=>l[_*3+T]-l[m*3+T]),A=[v[1]*x[2]-v[2]*x[1],v[2]*x[0]-v[0]*x[2],v[0]*x[1]-v[1]*x[0]],S=[0,1,2].map(T=>h[d*3+T]);return A[0]*S[0]+A[1]*S[1]+A[2]*S[2]<0})()){let b=p.index.array;for(let m=0;m<b.length;m+=3){let d=b[m+1];b[m+1]=b[m+2],b[m+2]=d}}p.setAttribute("uv",new i.BufferAttribute(new Float32Array(l.length/3*2),2)),s.push(p)}function qv(i,e){let t=new Uint8Array(e*e*4),n=1337,s=()=>(n=n*16807%2147483647)/2147483647,r=Math.round(e/22),a=e/r,o=r+2,c=new Float32Array(o*o),l=new Float32Array(o*o),h=new Float32Array(r*r),u=new Float32Array(r*r);for(let _=0;_<r*r;_++)h[_]=.12+s()*.76,u[_]=.12+s()*.76;for(let _=0;_<o;_++)for(let v=0;v<o;v++){let x=(v-1+r)%r+r*((_-1+r)%r);c[v+o*_]=v-1+h[x],l[v+o*_]=_-1+u[x]}let f=6,p=[],g=[],b=[],m=[];for(let _=0;_<f;_++){let v=1+Math.floor(s()*3),x=(1+Math.floor(s()*3))*(s()<.5?-1:1),A=s()*6.283,S=new Float32Array(e),T=new Float32Array(e),C=new Float32Array(e),M=new Float32Array(e);for(let y=0;y<e;y++)S[y]=Math.cos(2*Math.PI*v*y/e),T[y]=Math.sin(2*Math.PI*v*y/e),C[y]=Math.cos(2*Math.PI*x*y/e+A),M[y]=Math.sin(2*Math.PI*x*y/e+A);p.push(S),g.push(T),b.push(C),m.push(M)}for(let _=0;_<e;_++){let v=_/a,x=Math.floor(v);for(let A=0;A<e;A++){let S=A/a,T=Math.floor(S),C=9,M=9;for(let V=0;V<3;V++){let G=T+o*(x+V);for(let $=0;$<3;$++,G++){let Y=c[G]-S,te=l[G]-v,ee=Y*Y+te*te;ee<C?(M=C,C=ee):ee<M&&(M=ee)}}let y=ri(M)-ri(C),N=y*2.4>1?1:y*2.4,I=1-(1-N)*(1-N)*(1-N),E=0;for(let V=0;V<f;V++)E+=p[V][A]*b[V][_]-g[V][A]*m[V][_];let U=(A+_*e)*4;t[U]=I*255|0,t[U+1]=(.55+.45*(1-I))*255|0,t[U+2]=(.5+E/f*.5)*255|0,t[U+3]=255}}let d=new i.DataTexture(t,e,e,i.RGBAFormat);return d.wrapS=d.wrapT=i.RepeatWrapping,d.magFilter=i.LinearFilter,d.minFilter=i.LinearMipmapLinearFilter,d.generateMipmaps=!0,d.anisotropy=4,d.colorSpace=i.NoColorSpace,d.needsUpdate=!0,d}function dd(i,e,t,n,s){i.onBeforeCompile=r=>{r.uniforms.grainMap={value:e},r.uniforms.grainScale={value:t/3},r.uniforms.grainDepth={value:n},r.uniforms.waveDepth={value:s},r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
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
}`)},i.customProgramCacheKey=()=>"grain"+n+"_"+s}var Jr=new W;function Sn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Jr.copy(e),Jr[n]=0,Jr.normalize();let l=.5*a/(a+o),h=1-Jr.angleTo(i)/c;return Math.sign(Jr[t])===1?h*l:o/(a+o)+l+l*(1-h)}var ai=class extends $n{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new W,c=new W,l=new W(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,g=new W,b=.5/s;for(let m=0,d=0;m<h.length;m+=3,d+=2)switch(o.fromArray(h,m),c.copy(o),c.x-=Math.sign(c.x)*b,c.y-=Math.sign(c.y)*b,c.z-=Math.sign(c.z)*b,c.normalize(),h[m+0]=l.x*Math.sign(o.x)+c.x*r,h[m+1]=l.y*Math.sign(o.y)+c.y*r,h[m+2]=l.z*Math.sign(o.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:g.set(1,0,0),f[d+0]=Sn(g,c,"z","y",r,n),f[d+1]=1-Sn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),f[d+0]=1-Sn(g,c,"z","y",r,n),f[d+1]=1-Sn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),f[d+0]=1-Sn(g,c,"x","z",r,e),f[d+1]=Sn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),f[d+0]=1-Sn(g,c,"x","z",r,e),f[d+1]=1-Sn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),f[d+0]=1-Sn(g,c,"x","y",r,e),f[d+1]=1-Sn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),f[d+0]=Sn(g,c,"x","y",r,e),f[d+1]=1-Sn(g,c,"y","x",r,t);break}}};function vd(i,e={}){let t=(e.lod||"high")!=="low",n=new i.Group;n.name="ring";let s=3800852,r=6.1,a=r/2,o=.9,c=2.6,l=2.5,h=[.45,.727,1,1.27],u=.03,f=.055,p=2.26,g=1337,b=()=>(g=g*16807%2147483647)/2147483647,m=(O,X)=>{let D=document.createElement("canvas");return D.width=O,D.height=X,D},d=(O,X=!0,D)=>{let k=new i.CanvasTexture(O);return X&&(k.colorSpace=i.SRGBColorSpace),k.anisotropy=8,D&&(k.wrapS=k.wrapT=i.RepeatWrapping,k.repeat.set(D[0],D[1])),k},_=(O,X,D,k)=>{let B=m(256,256),H=B.getContext("2d"),Me=H.createImageData(256,256),oe=Me.data;for(let be=0;be<oe.length;be+=4){let Le=b()<.5?0:255;oe[be]=oe[be+1]=oe[be+2]=Le,oe[be+3]=Math.floor(b()*k)}H.putImageData(Me,0,0),O.fillStyle=O.createPattern(B,"repeat"),O.fillRect(0,0,X,D)};function v(){let X=m(1024,1024),D=X.getContext("2d");D.fillStyle="#17191c",D.fillRect(0,0,1024,1024);let k=D.createRadialGradient(1024/2,1024/2,1024*.05,1024/2,1024/2,1024*.75);k.addColorStop(0,"rgba(255,255,255,0.04)"),k.addColorStop(.55,"rgba(255,255,255,0.01)"),k.addColorStop(1,"rgba(0,0,0,0.25)"),D.fillStyle=k,D.fillRect(0,0,1024,1024),D.strokeStyle="rgba(0,0,0,0.35)",D.lineWidth=3,D.strokeRect(1024*.095,1024*.095,1024*.81,1024*.81),D.save(),D.translate(1024/2,1024/2),D.scale(1,1),D.font='900 190px Anton, Impact, "Arial Narrow", "Roboto Condensed", sans-serif',D.textAlign="center",D.textBaseline="middle",D.fillStyle="rgba(57,255,20,0.045)",D.fillText("MEDUSA",0,0),D.restore();for(let be=0;be<60;be++){D.fillStyle=`rgba(23,25,28,${.3+b()*.5})`;let Le=1024*.2+b()*1024*.6,Ce=1024*.4+b()*1024*.2;D.fillRect(Le,Ce,6+b()*40,2+b()*6)}D.globalAlpha=.07,D.fillStyle="#000";for(let be=0;be<1024;be+=2)D.fillRect(be,0,1,1024),D.fillRect(0,be,1024,1);D.globalAlpha=1;for(let be=0;be<160;be++){let Le=b()*6.283,Ce=Math.pow(b(),1.6)*1024*.38,Ie=1024/2+Math.cos(Le)*Ce,Ee=1024/2+Math.sin(Le)*Ce,Ae=15+b()*60,Ue=b()*3.14;D.strokeStyle=`rgba(210,215,210,${.02+b()*.045})`,D.lineWidth=1+b()*2.2,D.beginPath(),D.moveTo(Ie,Ee),D.lineTo(Ie+Math.cos(Ue)*Ae,Ee+Math.sin(Ue)*Ae),D.stroke()}for(let be=0;be<18;be++){let Le=b()*1024,Ce=b()*1024,Ie=40+b()*110,Ee=D.createRadialGradient(Le,Ce,0,Le,Ce,Ie);Ee.addColorStop(0,"rgba(0,0,0,0.10)"),Ee.addColorStop(1,"rgba(0,0,0,0)"),D.fillStyle=Ee,D.fillRect(Le-Ie,Ce-Ie,Ie*2,Ie*2)}_(D,1024,1024,22);let B=d(X),H=m(64,64),Me=H.getContext("2d");Me.fillStyle="#808080",Me.fillRect(0,0,64,64);for(let be=0;be<64;be+=4)Me.fillStyle="#b0b0b0",Me.fillRect(be,0,2,64),Me.fillStyle="#404040",Me.fillRect(0,be,64,2);let oe=d(H,!1,[64,64]);return{map:B,bump:oe}}function x(){let D=m(1024,256),k=D.getContext("2d");k.fillStyle="#111312",k.fillRect(0,0,1024,256);let B=k.createLinearGradient(0,0,0,256);B.addColorStop(0,"rgba(255,255,255,0.04)"),B.addColorStop(1,"rgba(0,0,0,0.25)"),k.fillStyle=B,k.fillRect(0,0,1024,256);for(let be=0;be<260;be++)k.fillStyle=`rgba(150,155,150,${.04+b()*.1})`,k.fillRect(b()*1024,b()*14,4+b()*30,1+b()*3);for(let be=0;be<60;be++)k.fillStyle=`rgba(0,0,0,${.1+b()*.2})`,k.fillRect(b()*1024,256-b()*40,10+b()*60,2+b()*6);k.save(),k.translate(1024/2,256*.47),k.scale(.5,1),k.font='900 150px Anton, Impact, "Arial Narrow", "Roboto Condensed", sans-serif',k.textBaseline="middle",k.textAlign="left",k.letterSpacing="8px";let H=k.measureText("MEDUSA ").width,Me=k.measureText("GYM").width,oe=H+Me;return k.fillStyle="#eef2ee",k.fillText("MEDUSA ",-oe/2,0),k.fillStyle="#39ff14",k.fillText("GYM",-oe/2+H,0),k.restore(),k.strokeStyle="rgba(255,255,255,0.12)",k.setLineDash([8,6]),k.lineWidth=1.5,k.beginPath(),k.moveTo(0,256*.86),k.lineTo(1024,256*.86),k.stroke(),k.setLineDash([]),_(k,1024,256,18),d(D)}function A(O,X,D){let k=m(64,64),B=k.getContext("2d");B.fillStyle=D,B.fillRect(0,0,64,64);for(let H=-1;H<=1;H++){B.save(),B.translate(H*64,0);let Me=B.createLinearGradient(0,0,64,0);B.beginPath(),B.moveTo(0,64),B.lineTo(64,0),B.lineTo(64,28),B.lineTo(0,92),B.closePath(),Me.addColorStop(0,O),Me.addColorStop(.5,X),Me.addColorStop(1,O),B.fillStyle=O,B.fill(),B.restore()}B.globalAlpha=.22,B.strokeStyle=X,B.lineWidth=5;for(let H=-1;H<=1;H++)B.beginPath(),B.moveTo(-5,76+H*64),B.lineTo(69,-12+H*64+0),B.stroke();return B.globalAlpha=1,k}let S=v(),T=new i.MeshStandardMaterial({map:S.map,bumpMap:S.bump,bumpScale:1.6,roughness:.95,metalness:0,color:12895428}),C=x(),M=new i.MeshPhysicalMaterial({map:C,roughness:.88,metalness:0,sheen:.6,sheenRoughness:.6,sheenColor:new i.Color(5593685)}),y=new i.MeshStandardMaterial({color:663302,emissive:new i.Color(s),emissiveIntensity:1.5,roughness:.4}),N=new i.MeshStandardMaterial({color:11975357,metalness:1,roughness:.28}),I=m(128,128),E=I.getContext("2d");E.fillStyle="#b4b4b4",E.fillRect(0,0,128,128);for(let O=0;O<70;O++){E.strokeStyle=b()<.5?`rgba(255,255,255,${.1+b()*.25})`:`rgba(60,60,60,${.1+b()*.3})`,E.lineWidth=1+b()*2;let X=b()*128,D=b()*128,k=b()*3.14;E.beginPath(),E.moveTo(X,D),E.lineTo(X+Math.cos(k)*(6+b()*24),D+Math.sin(k)*(6+b()*24)),E.stroke()}let U=d(I,!1),V=(O,X=.42)=>new i.MeshPhysicalMaterial({color:O,roughness:X,roughnessMap:U,metalness:0,clearcoat:.5,clearcoatRoughness:.28}),G=V(2369066,.3),$=V(2081291,.38),Y=V(15132900,.42);$.emissive=new i.Color(s),$.emissiveIntensity=.12;let te=A("#222223","#3d3e40","#0a0a0a"),ee=A("#33d818","#6bf252","#1a8a0b"),Re=d(te,!0,[t?70:40,1]),ue=d(ee,!0,[t?70:40,1]),ae=d(te,!1,[t?70:40,1]),j=new i.MeshStandardMaterial({map:Re,bumpMap:ae,bumpScale:1.5,roughness:.62,metalness:0}),J=new i.MeshStandardMaterial({map:ue,emissive:new i.Color(s),emissiveMap:ue,emissiveIntensity:.35,bumpMap:d(ee,!1,[t?70:40,1]),bumpScale:1.5,roughness:.55}),fe={canvas:[],apron:[],trim:[],steel:[],padBlack:[],padGreen:[],padWhite:[],ropeBlack:[],ropeGreen:[]},q=new i.Matrix4,ne=new i.Quaternion,ge=new i.Vector3,Te=new i.Vector3(1,1,1),xe=new i.Euler,Z=(O,X,D=0,k=0,B=0,H=0,Me=0,oe=0)=>(xe.set(Me,H,oe),ne.setFromEuler(xe),q.compose(ge.set(D,k,B),ne,Te),X.applyMatrix4(q),fe[O].push(X),X),K=(O,X,D,k,B)=>new ai(O,X,D,B,k);{let X=K(r,.12,r,.05,t?4:2);Z("canvas",X,0,o-.06,0)}{let O=o-.12+.01,X=.025,D=O-X,k=t?112:40,B=t?4:2;for(let be=0;be<4;be++){let Le=[],Ce=[],Ie=[];for(let Ae=0;Ae<=B;Ae++){let Ue=Ae/B;for(let z=0;z<=k;z++){let Se=z/k,Q=(Se-.5)*(r-.06),me=Math.sin(Se*Math.PI*2*34+.8*Math.sin(Se*9))*(.006+.01*Ue),De=Math.sin(Se*Math.PI*2*5+be)*.004*Ue;Le.push(Q,O-Ue*D-(Ue===1?Math.abs(Math.sin(Se*40))*.004:0),a-.04+me+De),Ce.push(Se,1-Ue)}}for(let Ae=0;Ae<B;Ae++)for(let Ue=0;Ue<k;Ue++){let z=Ae*(k+1)+Ue,Se=z+1,Q=z+k+1,me=Q+1;Ie.push(z,Q,Se,Se,Q,me)}let Ee=new i.BufferGeometry;Ee.setAttribute("position",new i.Float32BufferAttribute(Le,3)),Ee.setAttribute("uv",new i.Float32BufferAttribute(Ce,2)),Ee.setIndex(Ie),Ee.computeVertexNormals(),Z("apron",Ee,0,0,0,be*Math.PI/2)}let H=.05,Me=O-H/2-.004,oe=.03;for(let be=0;be<4;be++){let Le=K(r,H,oe,.008,1);Le.applyMatrix4(new i.Matrix4().makeRotationY(be*Math.PI/2).multiply(new i.Matrix4().makeTranslation(0,Me,a-.02))),fe.trim.push(Le)}}let R=e.model||null,ye=[[1,1,"padBlack"],[-1,1,"padGreen"],[-1,-1,"padBlack"],[1,-1,"padWhite"]],le=t?20:10;for(let[O,X,D]of R?[]:ye){let k=O*c,B=X*c;Z("steel",K(.2,.025,.2,.006,1),k,o+.0125,B,Math.PI/4),Z("steel",new i.CylinderGeometry(f,f*1.04,p-o,le,1),k,(p+o)/2,B),Z("steel",new i.CylinderGeometry(f*1.35,f*1.35,.05,le,1),k,o+.07,B),Z("steel",new i.CylinderGeometry(f*1.3,f*1.3,.035,le,1),k,p-.02,B),Z("steel",new i.SphereGeometry(f*1.15,le,t?8:4,0,Math.PI*2,0,Math.PI/2),k,p,B);for(let Ae=0;Ae<4;Ae++){let Ue=o+h[Ae],z=O*.075,Se=X*.075,Q=Math.atan2(O,X);Z("steel",new i.CylinderGeometry(.016,.016,.16,8,1),k+z,Ue,B+Se,Q,Math.PI/2,0),t&&Z("steel",new i.TorusGeometry(.03,.007,6,14),k+O*.16,Ue,B+X*.16,Q+Math.PI/2,0,0),Z("steel",new i.CylinderGeometry(.026,.026,.022,6,1),k+O*.05,Ue,B+X*.05,Q,Math.PI/2,0)}let H=Math.atan2(O,X),Me=o+.25,oe=p-.07,be=oe-Me,Le=O*(c-.06),Ce=X*(c-.06),Ie=3,Ee=be/Ie;for(let Ae=0;Ae<Ie;Ae++){let Ue=Me+Ee*(Ae+.5);Z(D,K(.34,Ee+.02,.25,.1,t?3:1),Le,Ue,Ce,H),Ae>0&&Z("trim",K(.335,.008,.24,.003,1),Le,Me+Ee*Ae,Ce,H)}for(let Ae of[Me+.006,oe-.006])Z("trim",K(.28,.007,.2,.003,1),Le,Ae,Ce,H)}let ie=(O,X)=>X*(1-Math.pow(2*O-1,2)),ce=t?40:14,we=t?8:5,de=R?[]:[{a:[-l,-l],b:[l,-l]},{a:[l,-l],b:[l,l]},{a:[l,l],b:[-l,l]},{a:[-l,l],b:[-l,-l]}],P=["ropeBlack","ropeBlack","ropeBlack","ropeGreen"],w={};for(let O of de)for(let X=0;X<4;X++){let D=o+h[X],k=.034-X*.006,B=[],H=14;for(let be=0;be<=H;be++){let Le=be/H;B.push(new i.Vector3(O.a[0]+(O.b[0]-O.a[0])*Le,D-ie(Le,k),O.a[1]+(O.b[1]-O.a[1])*Le))}let Me=new i.CatmullRomCurve3(B),oe=new i.TubeGeometry(Me,ce,u,we,!1);fe[P[X]].push(oe)}for(let O of de){let X=O.b[0]-O.a[0],D=O.b[1]-O.a[1],k=Math.hypot(X,D),B=X/k,H=D/k,Me=Math.atan2(B,H);for(let oe=0;oe<4;oe++){let be=o+h[oe],Le=(O===de[0],0);for(let Ce of[0,1]){let Ie=Ce?O.b[0]:O.a[0],Ee=Ce?O.b[1]:O.a[1],Ae=Ce?-1:1,Ue=.3,z=Ie+B*Ae*Ue/2,Se=Ee+H*Ae*Ue/2,Q=Math.sign(Ie),me=Math.sign(Ee),De=ye.find(Pe=>Pe[0]===Q&&Pe[1]===me)[2],he=t?new i.CapsuleGeometry(.05,Ue-.1,2,12):new i.CylinderGeometry(.05,.05,Ue,7,1);Z(De,he,z,be-.002,Se,Me,Math.PI/2,0)}}}for(let O of de){let X=O.b[0]-O.a[0],D=O.b[1]-O.a[1],k=Math.hypot(X,D),B=X/k,H=D/k,Me=Math.atan2(B,H);for(let oe of[1/3,2/3]){let be=O.a[0]+X*oe,Le=O.a[1]+D*oe,Ce=o+h[3]-ie(oe,.034-3*.006)+.045,Ie=o+h[0]-ie(oe,.034)-.045;Z("padBlack",K(.045,Ce-Ie,.014,.005,1),be,(Ce+Ie)/2,Le,Me);for(let Ee=0;Ee<4;Ee++){let Ae=o+h[Ee]-ie(oe,.034-Ee*.006);Z("padBlack",new i.CylinderGeometry(u*1.45,u*1.45,.05,t?10:6,1),be,Ae,Le,Me,Math.PI/2,0)}}}if(t)for(let[O,X]of[[1,-1],[-1,1]]){let D=O*(a+.3),k=X*1.95;Z("padBlack",K(.6,.45,.9,.02,1),D,.225,k,0),Z("padBlack",K(.34,.22,.9,.02,1),D+O*.47,.11,k,0),Z("trim",K(.02,.02,.9,.005,1),D-O*.3,.44,k,0),Z("trim",K(.02,.02,.9,.005,1),D+O*.3,.21,k,0)}let F={canvas:T,apron:M,trim:y,steel:N,padBlack:G,padGreen:$,padWhite:Y,ropeBlack:j,ropeGreen:J};for(let O of Object.keys(fe)){if(!fe[O].length)continue;let X=fe[O].map(B=>{for(let H of Object.keys(B.attributes))["position","normal","uv"].includes(H)||B.deleteAttribute(H);return B.index?B.toNonIndexed():B}),D=lt(X,!1),k=new i.Mesh(D,F[O]);k.name="ring_"+O,k.castShadow=O!=="canvas",k.receiveShadow=!0,O==="canvas"&&(k.castShadow=!0),n.add(k)}if(R){let O=(k,B,H=0,Me={})=>new i.MeshStandardMaterial({color:k,roughness:B,metalness:H,side:i.DoubleSide,...Me});for(let k of[G,$,Y])k.side=i.DoubleSide;y.emissiveIntensity=.9;let X=V(1661962,.75);X.side=i.DoubleSide;let D={palo:O(1513499,.42,.7),acciaio:O(11975357,.3,1),nastro:O(1381655,.72),cordaNera:O(1776413,.58),cordaVerde:O(1601036,.7),padNero:G,padVerde:X,padBianco:X};R.updateMatrixWorld(!0),R.traverse(k=>{if(!k.isMesh)return;let B=new i.Mesh(k.geometry,D[k.material.name]||D.nastro);B.applyMatrix4(k.matrixWorld),B.name="ring_"+k.material.name,B.castShadow=B.receiveShadow=!0,n.add(B)})}return n}var _d={};function yd(i,e={}){let t=(e.lod||"high")!=="low",n=3800852,s=e.model||null,r=1.206,a=.182,o=s?.83:.75,c=2.9,l=new i.Group;l.name="sacco";let h=new i.Group;h.position.set(0,c,0),l.add(h);let u=new i.Group;u.position.set(0,-c,0),h.add(u);let f=91,p=()=>(f=f*16807%2147483647)/2147483647,g=(D,k)=>{let B=document.createElement("canvas");return B.width=D,B.height=k,B},b=(D,k)=>{let B=new i.CanvasTexture(D);return k&&(B.colorSpace=i.SRGBColorSpace),B.anisotropy=8,B.wrapS=i.RepeatWrapping,B},m=(D,k,B,H)=>{let Me=g(256,256),oe=Me.getContext("2d"),be=oe.createImageData(256,256),Le=be.data;for(let Ce=0;Ce<Le.length;Ce+=4){let Ie=p()<.5?0:255;Le[Ce]=Le[Ce+1]=Le[Ce+2]=Ie,Le[Ce+3]=Math.floor(p()*H*2.2)}oe.putImageData(be,0,0),D.fillStyle=D.createPattern(Me,"repeat"),D.fillRect(0,0,k,B)},d=D=>(1-D/r)*1024,_='900 100px Anton, Impact, "Arial Narrow", "Roboto Condensed", sans-serif';function v(){let B=g(1024,1024),H=B.getContext("2d");H.fillStyle="#0d0d0e",H.fillRect(0,0,1024,1024);for(let he=0;he<2;he++){let Pe=H.createRadialGradient(1024*(.25+.5*he),d(.82),10,1024*(.25+.5*he),d(.82),240);Pe.addColorStop(0,"rgba(120,120,125,0.10)"),Pe.addColorStop(1,"rgba(120,120,125,0)"),H.fillStyle=Pe,H.fillRect(0,0,1024,1024)}let Me=d(.78),oe=d(.55),be=H.createLinearGradient(0,Me,0,oe);be.addColorStop(0,"#2c7c1b"),be.addColorStop(.5,"#34901f"),be.addColorStop(1,"#27701a"),H.fillStyle=be,H.fillRect(0,Me,1024,oe-Me);for(let he of[1024*.25,1024*.75])H.save(),H.translate(he,(Me+oe)/2+4),H.scale(s?.4:.46,1),H.font="900 "+(s?118:82)+'px Anton, Impact, "Arial Narrow", "Roboto Condensed", sans-serif',H.textAlign="center",H.textBaseline="middle",H.fillStyle="rgba(8,10,8,0.92)",H.letterSpacing="4px",H.fillText("MEDUSA GYM",0,0),H.restore();H.fillStyle="#2f8a1d",H.fillRect(0,d(.115),1024,14),H.fillRect(0,d(1.03),1024,14);let Le=(he,Pe,ze)=>{H.strokeStyle=Pe,H.lineWidth=3,H.setLineDash(ze),H.beginPath(),H.moveTo(0,he),H.lineTo(1024,he),H.stroke(),H.setLineDash([])};Le(Me-8,"rgba(10,10,10,0.9)",[9,7]),Le(oe+8,"rgba(10,10,10,0.9)",[9,7]);for(let he of[.135,.095,1.05,1.01])Le(d(he),"rgba(150,160,150,0.55)",[8,6]);Le(d(.5),"rgba(110,115,110,0.5)",[8,6]),Le(d(.83),"rgba(110,115,110,0.5)",[8,6]);for(let he of[0,1024*.5,1024]){H.fillStyle="#050505",H.fillRect(he-3,0,6,1024),H.strokeStyle="rgba(150,160,150,0.6)",H.lineWidth=3,H.setLineDash([9,7]);for(let Pe of[-14,14])H.beginPath(),H.moveTo(he+Pe,0),H.lineTo(he+Pe,1024),H.stroke();H.setLineDash([])}H.lineCap="round";for(let he=0;he<70;he++){let Pe=p()<.7?d(.95+p()*.22):d(0+p()*.3),ze=p()*1024,Ke=40+p()*220;H.strokeStyle=`rgba(0,0,0,${.35+p()*.3})`,H.lineWidth=1+p()*2,H.beginPath(),H.moveTo(ze,Pe),H.quadraticCurveTo(ze+Ke/2,Pe+(p()-.5)*12,ze+Ke,Pe+(p()-.5)*6),H.stroke(),H.strokeStyle=`rgba(200,205,205,${.04+p()*.05})`,H.beginPath(),H.moveTo(ze,Pe+2),H.lineTo(ze+Ke,Pe+2),H.stroke()}for(let he=0;he<90;he++){let Pe=p()*1024,ze=d(.35+p()*.65),Ke=8+p()*50,Ze=(p()-.5)*1.2+Math.PI/2;H.strokeStyle=`rgba(210,215,215,${.03+p()*.06})`,H.lineWidth=1+p()*1.5,H.beginPath(),H.moveTo(Pe,ze),H.lineTo(Pe+Math.cos(Ze)*Ke,ze+Math.sin(Ze)*Ke),H.stroke()}for(let he=0;he<220;he++)H.fillStyle=`rgba(10,14,10,${.25+p()*.5})`,H.fillRect(p()*1024,Me+p()*(oe-Me),1+p()*7,1+p()*3);for(let he=0;he<160;he++)H.fillStyle=`rgba(150,190,140,${.05+p()*.1})`,H.fillRect(p()*1024,Me+p()*(oe-Me),3+p()*25,1+p()*2);for(let he=0;he<900;he++){H.fillStyle=`rgba(0,30,0,${.05+p()*.14})`;let Pe=.6+p()*1.8;H.beginPath(),H.arc(p()*1024,Me+p()*(oe-Me),Pe,0,6.28),H.fill()}for(let he=0;he<40;he++){let Pe=p()*1024,ze=Me+p()*(oe-Me),Ke=10+p()*50;H.strokeStyle=`rgba(0,40,0,${.08+p()*.15})`,H.lineWidth=1+p()*2,H.beginPath(),H.moveTo(Pe,ze),H.lineTo(Pe+(p()-.5)*Ke,ze+(p()-.5)*Ke),H.stroke()}m(H,1024,1024,7);let Ce=b(B,!0),Ie=g(1024,1024),Ee=Ie.getContext("2d");Ee.fillStyle="#808080",Ee.fillRect(0,0,1024,1024);let Ae=g(256,256),Ue=Ae.getContext("2d"),z=Ue.createImageData(256,256);for(let he=0;he<z.data.length;he+=4){let Pe=90+p()*90;z.data[he]=z.data[he+1]=z.data[he+2]=Pe,z.data[he+3]=255}Ue.putImageData(z,0,0),Ee.globalAlpha=.85,Ee.imageSmoothingEnabled=!0,Ee.drawImage(Ae,0,0,1024,1024),Ee.globalAlpha=1,m(Ee,1024,1024,40),Ee.fillStyle="rgba(200,200,200,0.35)",Ee.fillRect(0,Me,1024,oe-Me),Ee.fillStyle="#404040",Ee.fillRect(0,Me-3,1024,5),Ee.fillRect(0,oe-2,1024,5);for(let he of[0,1024*.5,1024])Ee.fillStyle="#1c1c1c",Ee.fillRect(he-5,0,10,1024);Ee.strokeStyle="#303030",Ee.lineWidth=3,Ee.setLineDash([9,7]);for(let he of[0,1024*.5,1024])for(let Pe of[-14,14])Ee.beginPath(),Ee.moveTo(he+Pe,0),Ee.lineTo(he+Pe,1024),Ee.stroke();for(let he of[.135,.095,1.05,1.01])Ee.beginPath(),Ee.moveTo(0,d(he)),Ee.lineTo(1024,d(he)),Ee.stroke();Ee.setLineDash([]),Ee.lineCap="round";for(let he=0;he<80;he++){let Pe=p()<.7?d(.95+p()*.22):d(p()*.3),ze=p()*1024,Ke=40+p()*220;Ee.strokeStyle=`rgba(20,20,20,${.5+p()*.4})`,Ee.lineWidth=2+p()*3,Ee.beginPath(),Ee.moveTo(ze,Pe),Ee.quadraticCurveTo(ze+Ke/2,Pe+(p()-.5)*12,ze+Ke,Pe+(p()-.5)*6),Ee.stroke()}let Se=b(Ie,!1),Q=g(512,512),me=Q.getContext("2d");me.fillStyle="#9a9a9a",me.fillRect(0,0,512,512);for(let he=0;he<2;he++){let Pe=me.createRadialGradient(512*(.25+.5*he),512*(1-.82/r),5,512*(.25+.5*he),512*(1-.82/r),150);Pe.addColorStop(0,"#585858"),Pe.addColorStop(1,"rgba(154,154,154,0)"),me.fillStyle=Pe,me.fillRect(0,0,512,512)}me.fillStyle="rgba(205,205,205,0.9)",me.fillRect(0,512*(1-.78/r),512,512*.23/r),me.fillRect(0,512*(1-.1155/r)-3,512,5),me.fillRect(0,512*(1-1.03/r)-3,512,5),m(me,512,512,36);let De=b(Q,!1);return{map:Ce,bump:Se,rough:De}}function x(){let k=g(512,512),B=k.getContext("2d");B.fillStyle="#0c0c0d",B.fillRect(0,0,512,512),B.strokeStyle="rgba(160,170,160,0.65)",B.lineWidth=3,B.setLineDash([9,7]);for(let H of[.86,.74])B.beginPath(),B.arc(512/2,512/2,512/2*H,0,6.2832),B.stroke();return B.setLineDash([]),B.strokeStyle="rgba(0,0,0,0.9)",B.lineWidth=6,B.beginPath(),B.arc(512/2,512/2,512/2*.8,0,6.2832),B.stroke(),B.strokeStyle="#39ff14",B.lineWidth=6,B.beginPath(),B.arc(512/2,512/2,512/2*.64,0,6.2832),B.stroke(),m(B,512,512,7),b(k,!0)}let A=e.model?"modello":"codice",S=_d[A]||(_d[A]={...v(),cap:x()}),T=new i.MeshPhysicalMaterial({map:S.map,bumpMap:S.bump,bumpScale:2,roughnessMap:S.rough,roughness:.72,metalness:0,clearcoat:.28,clearcoatRoughness:.5,sheen:.4,sheenRoughness:.5,sheenColor:new i.Color(3159610)}),C=new i.MeshPhysicalMaterial({map:S.cap,bumpMap:S.bump,bumpScale:1.5,roughness:.6,metalness:0,clearcoat:.25,clearcoatRoughness:.5});C.bumpMap.repeat.set(.5,.5);let M=new i.MeshStandardMaterial({color:12172737,metalness:1,roughness:.32}),y=2.5;if(s){for(let Me of[S.map,S.bump,S.rough])Me.offset.x=-.25;let D=new i.MeshPhysicalMaterial({color:1052689,roughness:.62,metalness:0,clearcoat:.2,clearcoatRoughness:.5}),k=M.clone();k.side=i.DoubleSide;let B={corpo:T,cinghie:D,catene:k},H=0;s.updateMatrixWorld(!0),s.traverse(Me=>{if(!Me.isMesh)return;let oe=new i.Mesh(Me.geometry,B[Me.material.name]||D);oe.applyMatrix4(Me.matrixWorld),oe.position.y+=o,oe.castShadow=oe.receiveShadow=!0,u.add(oe);let be=new i.Box3().setFromObject(oe);H=Math.max(H,be.max.y)}),y=H-.03}let N=[],I=(D,k)=>N.push(new i.Vector2(D,k));I(0,0),I(.06,0),I(.12,0);let E=.062,U=t?6:3;for(let D=1;D<=U;D++){let k=D/U*Math.PI/2;I(.12+E*Math.sin(k),E-E*Math.cos(k))}I(.1815,.3),I(.1822,.6),I(.1815,.9);let V=.05,G=1.155;for(let D=0;D<=U;D++){let k=D/U*Math.PI/2;I(.132+V*Math.cos(k),G+V*Math.sin(k))}I(.066,1.205),I(0,1.205);let $=s?3:t?40:18,Y=new i.LatheGeometry(N,$);{let D=Y.attributes.position,k=Y.attributes.uv;for(let B=0;B<D.count;B++)k.setY(B,Math.min(1,Math.max(0,D.getY(B)/r)));for(let B=0;B<D.count;B++){let H=D.getY(B),Me=D.getX(B),oe=D.getZ(B),be=Math.atan2(oe,Me),Le=1+.004*Math.sin(be*2+H*5)+(H<.35?.006*Math.sin(H*9):0);D.setX(B,Me*Le),D.setZ(B,oe*Le)}Y.computeVertexNormals()}let te=new i.Mesh(Y,T);te.position.y=o,te.castShadow=te.receiveShadow=!0,s||u.add(te);let ee=[new i.Vector2(0,1.224),new i.Vector2(.09,1.224),new i.Vector2(.112,1.219),new i.Vector2(.125,1.209),new i.Vector2(.128,1.199),new i.Vector2(0,1.199)].reverse(),Re=new i.LatheGeometry(ee,t?40:12);{let D=Re.attributes.position,k=Re.attributes.uv;for(let B=0;B<D.count;B++)k.setXY(B,D.getX(B)/.256+.5,D.getZ(B)/.256+.5)}let ue=[Re],ae=[],j=[],J=(D,k)=>(D.applyMatrix4(k),D),fe=new i.Matrix4,q=new i.Quaternion,ne=new i.Vector3,ge=new i.Vector3(1,1,1),Te=new i.Euler,xe=(D,k,B,H=0,Me=0,oe=0,be=1,Le=1,Ce=1)=>(Te.set(H,Me,oe),q.setFromEuler(Te),new i.Matrix4().compose(ne.set(D,k,B),q,ge.set(be,Le,Ce))),Z=o+1.224,K=[.785398,2.356194,3.926991,5.497787],R=.108;for(let D of K){let k=Math.sin(D),B=Math.cos(D);t&&ue.push(J(new ai(.06,.012,.06,2,.005),xe(k*R,1.224+.006,B*R,0,D,0)))}let ye=new i.TorusGeometry(.0155,.0055,t?4:3,t?6:5),le=t?.037:.062,ie=(D,k,B,H=1.75)=>{let Me=ye.clone(),oe=new i.Quaternion().setFromUnitVectors(new i.Vector3(0,1,0),k),be=new i.Quaternion().setFromAxisAngle(new i.Vector3(0,1,0),B?Math.PI/2:0),Le=new i.Matrix4().compose(D,oe.multiply(be),new i.Vector3(1,H,1));Me.applyMatrix4(Le),j.push(Me)},ce=new i.Vector3(0,y-.01,0);for(let D of s?[]:K){let k=Math.sin(D),B=Math.cos(D),H=new i.Vector3(k*R,Z+.016,B*R),oe=new i.Vector3(k*.018,y-.012,B*.018).clone().sub(H),be=oe.length();oe.normalize();let Le=Math.round(be/le);for(let Ce=0;Ce<Le;Ce++)ie(H.clone().addScaledVector(oe,(Ce+.5)*(be/Le)),oe,Ce%2);t&&j.push(J(new i.TorusGeometry(.018,.0045,5,10),xe(k*R,Z+.012,B*R,0,D+Math.PI/2,0)))}s||j.push(J(new i.TorusGeometry(.036,.008,6,16),xe(0,y,0,Math.PI/2,0,0,1,1,1))),j.push(J(new i.CylinderGeometry(.019,.019,.07,t?12:6,1),xe(0,y+.062,0))),j.push(J(new i.CylinderGeometry(.03,.03,.012,t?14:7,1),xe(0,y+.045,0))),j.push(J(new i.CylinderGeometry(.03,.03,.012,t?14:7,1),xe(0,y+.08,0))),j.push(J(new i.SphereGeometry(.024,t?10:6,t?6:3),xe(0,y+.115,0))),j.push(J(new i.TorusGeometry(.03,.008,t?6:3,t?14:7),xe(0,y+.158,0,0,0,0,.8,1.15,1)));{let D=y+.19,k=c-.05,B=new i.Vector3(0,1,0),H=Math.round((k-D)/.038);for(let Me=0;Me<H;Me++)ie(new i.Vector3(0,D+(Me+.5)*((k-D)/H),0),B,Me%2,1.7)}let we=[];we.push(J(new i.CylinderGeometry(.095,.095,.02,t?20:8,1),xe(0,c-.01,0))),we.push(J(new i.TorusGeometry(.028,.0075,t?6:3,t?14:7),xe(0,c-.038,0,0,0,0)));for(let D=0;D<(t?4:0);D++){let k=D*Math.PI/2+Math.PI/4;we.push(J(new i.CylinderGeometry(.01,.01,.012,6,1),xe(Math.sin(k)*.065,c-.026,Math.cos(k)*.065)))}we.push(J(new ai(.22,.012,.22,2,.004),xe(0,c-.006+0,0)));let de=D=>D.map(k=>{for(let B of Object.keys(k.attributes))["position","normal","uv"].includes(B)||k.deleteAttribute(B);return k.index?k.toNonIndexed():k}),P=new i.Mesh(lt(de(ue),!1),C);P.position.y=o,P.castShadow=P.receiveShadow=!0,s||u.add(P);let w=new i.Mesh(lt(de(j),!1),M);w.castShadow=w.receiveShadow=!0,u.add(w);let F=new i.Mesh(lt(de(we),!1),M);F.castShadow=F.receiveShadow=!0,l.add(F);let O=1.5*Math.PI/180,X=2*Math.PI/Math.sqrt(9.81/2.2);return l.userData.update=D=>{let k=2*Math.PI/X;h.rotation.z=O*Math.sin(k*D),h.rotation.x=O*.35*Math.sin(k*D*1.03+1.2)},l.userData.update(0),l}function Md(i,e=512,t=7,n=!0){let s=document.createElement("canvas");s.width=s.height=e;let r=s.getContext("2d"),a=r.createImageData(e,e),o=t,c=()=>(o=o*16807%2147483647,o/2147483647);for(let h=0;h<e*e;h++){let u=128+(c()-.5)*70;c()>.985&&(u+=(c()-.5)*120),u=Math.max(0,Math.min(255,u)),a.data[h*4]=a.data[h*4+1]=a.data[h*4+2]=u,a.data[h*4+3]=255}r.putImageData(a,0,0),r.globalAlpha=.18;for(let h=0;n&&h<60;h++){let u=c()*e,f=c()*e,p=20+c()*70,g=r.createRadialGradient(u,f,0,u,f,p),b=c()>.5?255:0;g.addColorStop(0,`rgb(${b},${b},${b})`),g.addColorStop(1,"rgba(128,128,128,0)"),r.fillStyle=g,r.fillRect(u-p,f-p,p*2,p*2)}let l=new i.CanvasTexture(s);return l.wrapS=l.wrapT=i.RepeatWrapping,l.anisotropy=4,l}function Yv(i,e,t,n,s){let r=[],a=[],o=[],c=[],l=new i.Vector3(0,0,1);for(let u=0;u<=n;u++){let f=u/n,p=e.getPointAt(f),g=e.getTangentAt(f).normalize(),b=new i.Vector3().crossVectors(l,g).normalize(),m=t(f);for(let d=0;d<=s;d++){let _=d/s*Math.PI*2,v=Math.cos(_),x=Math.sin(_),A=new i.Vector3().addScaledVector(b,v).addScaledVector(l,x);r.push(p.x+A.x*m,p.y+A.y*m,p.z+A.z*m),a.push(A.x,A.y,A.z),o.push(d/s*2,f*4)}}for(let u=0;u<n;u++)for(let f=0;f<s;f++){let p=u*(s+1)+f,g=p+s+1;c.push(p,g,p+1,g,g+1,p+1)}let h=new i.BufferGeometry;return h.setAttribute("position",new i.Float32BufferAttribute(r,3)),h.setAttribute("normal",new i.Float32BufferAttribute(a,3)),h.setAttribute("uv",new i.Float32BufferAttribute(o,2)),h.setIndex(c),h}function Sd(i,e={}){let t=e.color??3800852,n=new i.Group,r=new i.SplineCurve([new i.Vector2(0,0),new i.Vector2(.066,0),new i.Vector2(.0775,.0026),new i.Vector2(.0895,.015),new i.Vector2(.0985,.04),new i.Vector2(.1035,.072),new i.Vector2(.1035,.1),new i.Vector2(.0955,.13),new i.Vector2(.0785,.153),new i.Vector2(.056,.165),new i.Vector2(.03,.169),new i.Vector2(0,.17)]).getSpacedPoints(30);r[0].set(0,0);let a=56,o=new i.LatheGeometry(r,a);{let E=o.attributes.uv,U=o.attributes.position;for(let V=0;V<E.count;V++)U.getY(V)>.125?E.setXY(V,U.getX(V)*9,U.getZ(V)*9):E.setXY(V,E.getX(V)*6,E.getY(V)*2)}let c=.0575,l=.2625,u=[[-.052,.135],[-.0555,.17],[-.0585,.21],[-.0555,.2405],[-.04,.2575],[-.02,.2615],[0,.2625]].map(([E,U])=>new i.Vector3(E,U,0)).slice(0,6).concat([new i.Vector3(0,l,0)]),f=u.slice(0,6).reverse().map(E=>new i.Vector3(-E.x,E.y,0)),p=new i.CatmullRomCurve3([...u,...f],!1,"centripetal"),g=.0172,b=(E,U,V)=>{let G=Math.max(0,Math.min(1,(V-E)/(U-E)));return G*G*(3-2*G)},d=Yv(i,p,E=>{let U=Math.min(E,1-E);return g+.0105*(1-b(0,.2,U))},44,14),_=lt([o,d],!1),v=Md(i),x=Md(i,512,11,!1);x.repeat.set(3,3);let A=new i.MeshStandardMaterial({color:1908256,metalness:.4,roughness:.85,roughnessMap:v,bumpMap:x,bumpScale:.12,envMapIntensity:.85}),S=new i.Mesh(_,A);S.castShadow=S.receiveShadow=!0,n.add(S);let T=r.filter(E=>E.y>.04&&E.y<.088).map(E=>new i.Vector2(E.x+7e-4,E.y)),C=document.createElement("canvas");C.width=1024,C.height=96;{let E=C.getContext("2d");E.fillStyle="#fff",E.fillRect(0,0,1024,96),E.fillStyle="#0a0a0a",E.font='800 70px Impact, "Arial Black", sans-serif',E.textAlign="center",E.textBaseline="middle",E.fillText("24 KG",512,52)}let M=new i.CanvasTexture(C);M.colorSpace=i.SRGBColorSpace,M.anisotropy=4;let y=new i.MeshStandardMaterial({color:t,map:M,roughness:.55,metalness:.05,emissive:t,emissiveMap:M,emissiveIntensity:.12}),N=new i.LatheGeometry(T,a),I=new i.Mesh(N,y);return I.rotation.y=Math.PI,I.castShadow=!1,I.receiveShadow=!0,n.add(I),n}function wd(i,e={}){let t=new i.Group,n=1.9,s=3,r=.5,a=.104,o=.016,c=document.createElement("canvas");c.width=1024,c.height=256;{let M=c.getContext("2d"),y=M.createImageData(1024,256),N=4242,I=()=>(N=N*16807%2147483647,N/2147483647),E=Array.from({length:12},()=>I()*6.283);for(let U=0;U<256;U++)for(let V=0;V<1024;V++){let G=V/1024,$=U/256,Y=Math.sin(G*6.283*2+E[0]+$*3)*.012+Math.sin(G*6.283*5+E[1]+$*7)*.004,te=Math.sin(($+Y)*6.283*38+E[2])*.5+.5,ee=Math.sin(($+Y*1.7)*6.283*97+E[3]+Math.sin(G*6.283*3)*2)*.5+.5,Re=(I()-.5)*.07,ue=Math.floor($*5),ae=$*5%1,j=Math.exp(-Math.pow((ae-0)*5*9,2))*.35+Math.exp(-Math.pow((1-ae)*5*9,2))*.35,J=(Math.sin(ue*12.9898)*.5+.5)*.08,fe=.8-te*.3-ee*.14*te+Re*1.4+J-j*.65,q=(U*1024+V)*4;y.data[q]=Math.min(255,232*fe+6),y.data[q+1]=Math.min(255,168*fe+4),y.data[q+2]=Math.min(255,104*fe+2),y.data[q+3]=255}M.putImageData(y,0,0)}let l=new i.CanvasTexture(c);l.colorSpace=i.SRGBColorSpace,l.wrapS=l.wrapT=i.RepeatWrapping,l.anisotropy=8;let h=new i.CanvasTexture(c);h.wrapS=h.wrapT=i.RepeatWrapping,h.anisotropy=4;let u=document.createElement("canvas");u.width=u.height=128;{let M=u.getContext("2d"),y=M.createImageData(128,128);for(let N=0;N<128;N++)for(let I=0;I<128;I++){let E=I/128,U=N/128,V=Math.abs(Math.sin(E*6.283*8)),G=Math.sin((U*16+Math.floor(E*8)%2*.5)*6.283)*.5+.5,$=.55+V*.3+G*.15,Y=Math.min(255,$*255),te=(N*128+I)*4;y.data[te]=y.data[te+1]=y.data[te+2]=Y,y.data[te+3]=255}M.putImageData(y,0,0)}let f=new i.CanvasTexture(u);f.colorSpace=i.SRGBColorSpace,f.wrapS=f.wrapT=i.RepeatWrapping,f.anisotropy=8,f.offset.set(0,0);let p=(M,y,N,I,E)=>{let U=M.index?M.toNonIndexed():M,V=U.attributes.position.count,G=new Float32Array(V*3),$=new Float32Array(V*2);for(let Y=0;Y<V;Y++)G[Y*3]=y[0],G[Y*3+1]=y[1],G[Y*3+2]=y[2],$[Y*2]=N,$[Y*2+1]=I;return U.setAttribute("color",new i.BufferAttribute(G,3)),U.setAttribute("aMR",new i.BufferAttribute($,2)),(E==="flat"||!U.attributes.uv)&&U.setAttribute("uv",new i.BufferAttribute(new Float32Array(V*2),2)),U};function g(M,y,N){let I=[],E=[],U=[],V=[],G=new i.Vector3(1,0,0),$=0;for(let ee=0;ee<M.length;ee++){ee&&($+=M[ee].distanceTo(M[ee-1]));let Re=M[Math.max(0,ee-1)],ue=M[Math.min(M.length-1,ee+1)],ae=new i.Vector3().subVectors(ue,Re).normalize(),j=new i.Vector3().crossVectors(G,ae).normalize(),J=M[ee],fe=y/2,q=N/2,ne=$/.004,ge=(K,R,ye,le)=>{let ie=J.clone().addScaledVector(G,K).addScaledVector(j,R);I.push(ie.x,ie.y,ie.z),E.push(ye.x,ye.y,ye.z),U.push(le,ne)},Te=j.clone().negate(),xe=G.clone(),Z=G.clone().negate();ge(-fe,q,j,0),ge(fe,q,j,y/.004),ge(-fe,-q,Te,0),ge(fe,-q,Te,y/.004),ge(-fe,q,Z,0),ge(-fe,-q,Z,0),ge(fe,q,xe,0),ge(fe,-q,xe,0)}let Y=[[0,1],[3,2],[4,5],[7,6]];for(let ee=0;ee<M.length-1;ee++){let Re=ee*8,ue=(ee+1)*8;for(let[ae,j]of Y)V.push(Re+ae,Re+j,ue+ae,Re+j,ue+j,ue+ae)}let te=new i.BufferGeometry;return te.setAttribute("position",new i.Float32BufferAttribute(I,3)),te.setAttribute("normal",new i.Float32BufferAttribute(E,3)),te.setAttribute("uv",new i.Float32BufferAttribute(U,2)),te.setIndex(V),te.computeBoundingBox(),b(te)}function b(M){let y=M.attributes.position,N=M.attributes.normal,I=M.index.array,E=new i.Vector3,U=new i.Vector3,V=new i.Vector3,G=new i.Vector3;for(let $=0;$<I.length;$+=3){E.fromBufferAttribute(y,I[$]),U.fromBufferAttribute(y,I[$+1]),V.fromBufferAttribute(y,I[$+2]),G.crossVectors(U.sub(E),V.sub(E));let Y=new i.Vector3().fromBufferAttribute(N,I[$]);if(G.dot(Y)<0){let te=I[$+1];I[$+1]=I[$+2],I[$+2]=te}}return M}let m=new i.MeshStandardMaterial({map:l,roughness:.58,roughnessMap:h,bumpMap:h,bumpScale:.35,metalness:0,envMapIntensity:.8}),d=new i.MeshStandardMaterial({color:16777215,vertexColors:!0,map:f,bumpMap:f,bumpScale:.8,roughness:.8,metalness:0,envMapIntensity:1.2});d.onBeforeCompile=M=>{M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aMR; varying vec2 vMR;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMR = aMR;`),M.fragmentShader=M.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vMR;`).replace("#include <roughnessmap_fragment>","float roughnessFactor = vMR.y;").replace("#include <metalnessmap_fragment>","float metalnessFactor = vMR.x;")},d.customProgramCacheKey=()=>"anelli_hw_v1";let _=[.045,.045,.05],v=[.86,.87,.9],x=[.55,.56,.6];function A(M,y){let N=new i.Group;N.position.set(M,s,0);let I=n-s,E=new i.TorusGeometry(a,o,12,48);E.translate(0,I,0);let U=new i.Mesh(E,m);U.castShadow=U.receiveShadow=!0,N.add(U);let V=[],G=I+a,$=.04/a,Y=new i.TorusGeometry(a,o+.0028,10,4,$);Y.rotateZ(Math.PI/2-$/2),Y.translate(0,I,0);{let R=Y.attributes.uv;for(let ye=0;ye<R.count;ye++)R.setXY(ye,R.getX(ye)*10,R.getY(ye)*6)}V.push(p(Y,_,0,.85,"uv"));let te=I+.46,ee=[.0172,.0168,.0148,.0098,.0056,.0038,.0034],Re=[0,.035,.085,.15,.25,.36,te-G];for(let R of[1,-1]){let ye=[];for(let le=0;le<ee.length;le++)ye.push(new i.Vector3(0,G+Re[le],R*ee[le]*1));ye.push(new i.Vector3(0,te+.25,R*.0034)),ye.push(new i.Vector3(0,-.02,R*.0034)),V.push(p(g(ye,.038,.0032),_,0,.85,"uv"))}let ue=new i.BoxGeometry(.04,.05,.011);ue.translate(0,-.03,0),V.push(p(ue,_,0,.9,"flat"));let ae=new i.CylinderGeometry(.0055,.0055,.056,14);ae.rotateZ(Math.PI/2),ae.translate(0,-.004,0),V.push(p(ae,v,1,.25,"flat"));let j=new i.TorusGeometry(.02,.0036,8,24);j.rotateY(Math.PI/2),j.translate(0,.016,0),V.push(p(j,v,1,.25,"flat"));{let R=g([new i.Vector3(0,te+.02,-.0105),new i.Vector3(0,te-.08,-.0105),new i.Vector3(0,te-.17,-.0098)],.036,.0028);V.push(p(R,_,0,.85,"uv"))}let J=new i.Shape,fe=.025,q=.04;J.moveTo(-fe+.006,-q),J.lineTo(fe-.006,-q),J.quadraticCurveTo(fe,-q,fe,-q+.006),J.lineTo(fe,q-.006),J.quadraticCurveTo(fe,q,fe-.006,q),J.lineTo(-fe+.006,q),J.quadraticCurveTo(-fe,q,-fe,q-.006),J.lineTo(-fe,-q+.006),J.quadraticCurveTo(-fe,-q,-fe+.006,-q);for(let R of[-.022,.012]){let ye=new i.Path;ye.moveTo(-.0185,R-.0045),ye.lineTo(.0185,R-.0045),ye.lineTo(.0185,R+.0045),ye.lineTo(-.0185,R+.0045),ye.closePath(),J.holes.push(ye)}let ne=new i.ExtrudeGeometry(J,{depth:.0022,bevelEnabled:!0,bevelThickness:8e-4,bevelSize:8e-4,bevelSegments:1});ne.translate(0,te,.0062),V.push(p(ne,v,1,.3,"flat"));let ge=new i.CylinderGeometry(.0042,.0042,.05,12);ge.rotateZ(Math.PI/2),ge.translate(0,te+.0375,.0105),V.push(p(ge,x,1,.35,"flat"));let Te=new i.CylinderGeometry(.0075,.0075,.04,16);Te.rotateZ(Math.PI/2),Te.translate(0,te-.004,.011),V.push(p(Te,x,1,.4,"flat"));let xe=new i.Shape;xe.moveTo(-.017,0),xe.lineTo(.017,0),xe.lineTo(.0145,.052),xe.quadraticCurveTo(0,.058,-.0145,.052),xe.closePath();let Z=new i.ExtrudeGeometry(xe,{depth:.0022,bevelEnabled:!0,bevelThickness:7e-4,bevelSize:7e-4,bevelSegments:1});Z.rotateX(-.28),Z.translate(0,te+.034,.0118),V.push(p(Z,v,1,.3,"flat"));let K=new i.Mesh(lt(V,!1),d);return K.castShadow=!0,K.receiveShadow=!0,N.add(K),N.userData.seed=y,N}let S=A(-r/2,0),T=A(r/2,2.3);t.add(S,T);let C=M=>{for(let y of[S,T]){let N=y.userData.seed;y.rotation.x=.01*Math.sin(M*.71+N)+.0035*Math.sin(M*1.63+N*2.1),y.rotation.z=.012*Math.sin(M*.53+N*1.7)+.003*Math.sin(M*1.21+N),y.rotation.y=.06*Math.sin(M*.37+N*.6)}};return t.userData.update=C,C(0),t}function Ad(i,e={}){let t=e.color??3800852,n=new i.Group,s=(C,M)=>{let y=document.createElement("canvas");y.width=y.height=C;let N=y.getContext("2d"),I=N.createImageData(C,C);for(let U=0;U<C;U++)for(let V=0;V<C;V++){let G=Math.max(0,Math.min(255,M(V/C,U/C))),$=(U*C+V)*4;I.data[$]=I.data[$+1]=I.data[$+2]=G,I.data[$+3]=255}N.putImageData(I,0,0);let E=new i.CanvasTexture(y);return E.wrapS=E.wrapT=i.RepeatWrapping,E.anisotropy=8,E},r=C=>1-Math.abs(2*(C-Math.floor(C))-1),a=s(128,(C,M)=>{let y=r(C+M),N=r(C-M);return 255*Math.pow(Math.min(y,N)*1,.8)*.9+12}),o=99,c=()=>(o=o*16807%2147483647,o/2147483647),l=s(256,()=>128+(c()-.5)*90+(c()>.992?60:0));l.repeat.set(14,14);let h=[],u=[],f=[],p=(C,M=!1)=>{let y=C.index?C.toNonIndexed():C;if(M){let N=y.attributes.position.count;y.setAttribute("uv",new i.Float32BufferAttribute(new Float32Array(N*2),2))}return y},g=.074,b=.074,m=.068,d=.0065;function _(C){let M=(E,U,V)=>{let G=p(U,V);G.applyMatrix4(C),E.push(G)},y=new i.Shape;for(let E=0;E<6;E++){let U=E*Math.PI/3,V=g*Math.cos(U),G=g*Math.sin(U);E?y.lineTo(V,G):y.moveTo(V,G)}y.closePath();let N=new i.ExtrudeGeometry(y,{depth:b-2*d,bevelEnabled:!0,bevelThickness:d,bevelSize:d,bevelSegments:3,steps:1});N.translate(0,0,d),N.rotateY(Math.PI/2);for(let E of[-1,1]){let U=N.clone();E<0&&(U.rotateY(Math.PI),U.translate(0,0,0)),U.translate(E>0?m:-m,0,0),M(u,U,!1);let V=E*(m+b),G=new i.TorusGeometry(.052,.0024,6,44);G.rotateY(Math.PI/2),G.translate(V+E*4e-4,0,0),M(f,G,!0);let $=new i.CylinderGeometry(.036,.036,.0048,28);$.rotateZ(Math.PI/2),$.translate(V+E*6e-4,0,0),M(h,$,!0);let Y=new i.CylinderGeometry(.029,.029,.007,24);Y.rotateZ(Math.PI/2),Y.translate(E*(m-5e-4),0,0),M(h,Y,!0);let te=new i.CylinderGeometry(.0215,.0215,.011,20);te.rotateZ(Math.PI/2),te.translate(E*(m-.0125),0,0),M(h,te,!0)}let I=new i.CylinderGeometry(.0165,.0165,2*m,28,1,!0);I.rotateZ(Math.PI/2);{let E=I.attributes.uv;for(let U=0;U<E.count;U++)E.setXY(U,E.getX(U)*35,E.getY(U)*46)}M(h,I,!1)}let v=g*Math.cos(Math.PI/6)+d*.87,x=(C,M,y)=>new i.Matrix4().compose(new i.Vector3(C,v,M),new i.Quaternion().setFromAxisAngle(new i.Vector3(0,1,0),y),new i.Vector3(1,1,1));_(x(-.02,-.165,.02)),_(x(.035,.175,.24));let A=(C,M,y=!0)=>{let N=lt(C,!1),I=new i.Mesh(N,M);return I.castShadow=y,I.receiveShadow=!0,n.add(I),I},S=A(h,new i.MeshStandardMaterial({color:15001320,metalness:1,roughness:.2,bumpMap:a,bumpScale:2.2,envMapIntensity:1.5}));A(u,new i.MeshStandardMaterial({color:855310,roughness:.86,metalness:0,bumpMap:l,bumpScale:.6,roughnessMap:l})),A(f,new i.MeshStandardMaterial({color:t,roughness:.45,metalness:0,emissive:t,emissiveIntensity:.15}),!1);let T=new i.Box3().setFromObject(n);return n.children.forEach(C=>C.position.y-=T.min.y),n}function Td(i,e={}){let t=e.gridOpacity??.35,n=new i.Color(e.color??3800852),s=new i.Group,r=512,a=document.createElement("canvas");a.width=a.height=r;let o=a.getContext("2d"),c=o.createImageData(r,r),l=12345,h=()=>(l=l*16807%2147483647,l/2147483647);for(let m=0;m<r*r;m++){let d=150+(h()-.5)*80;h()>.97&&(d=60+h()*40),c.data[m*4]=c.data[m*4+1]=c.data[m*4+2]=d,c.data[m*4+3]=255}o.putImageData(c,0,0);let u=new i.CanvasTexture(a);u.wrapS=u.wrapT=i.RepeatWrapping,u.anisotropy=8,u.repeat.set(60,60);let f=new i.MeshStandardMaterial({color:395015,roughness:.7,metalness:0,roughnessMap:u,envMapIntensity:.4}),p={uGridColor:{value:n},uGridOpacity:{value:t},uFadeNear:{value:7},uFadeFar:{value:30}};f.onBeforeCompile=m=>{Object.assign(m.uniforms,p),m.vertexShader=m.vertexShader.replace("#include <common>",`#include <common>
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
      }`,toneMapped:!1,fog:!1}),v=new i.Mesh(d,_);v.castShadow=!1,v.receiveShadow=!1,s.add(v);let x=r+1.4,A=1.3,S=new i.PlaneGeometry(x,A),T=new i.ShaderMaterial({uniforms:{uCol:{value:o},uInt:{value:n},uHalf:{value:r/2}},vertexShader:`varying vec2 vP;
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
        vec2 e = abs(vP) / vec2(${(x/2).toFixed(3)}, ${(A/2).toFixed(3)});
        g *= (1.0 - smoothstep(0.55, 1.0, e.x)) * (1.0 - smoothstep(0.45, 1.0, e.y));
        gl_FragColor = vec4(uCol * g * uInt * 0.55, g);
        #include <colorspace_fragment>
      }`,transparent:!0,blending:i.AdditiveBlending,depthWrite:!1,toneMapped:!1,fog:!1,side:i.DoubleSide}),C=new i.Mesh(S,T);return C.frustumCulled=!1,C.renderOrder=5,C.castShadow=!1,C.receiveShadow=!1,s.add(C),s.userData.setIntensity=M=>{_.uniforms.uInt.value=M,T.uniforms.uInt.value=M},s}var hn=512,jv="'Bebas Neue', Impact, sans-serif",wt={placca:[16,4,480,392],laterale:[4,410,100,88],med:[[110,412,82,82],[198,412,82,82],[286,412,82,82]],pelle:[376,406,72,100],nastro:[456,406,30,100],liscio:[493,410,14,36],nero:[493,460,14,40]},Ed={},Vo=(i,e)=>{i.save(),i.font="40px monospace";let t=i.measureText("MEDUSA 123").width;i.font=`40px ${e}, monospace`;let n=i.measureText("MEDUSA 123").width;return i.restore(),Math.abs(n-t)>.5};function Rd(i,e,t){let n=4711,s=()=>(n=n*16807%2147483647)/2147483647,r=m=>(m=Math.round(m),`rgb(${m},${m},${m})`),a=(m,d)=>r(e?m:d),o=Math.PI*2;i.setTransform(1,0,0,1,0,0),i.globalAlpha=1,i.fillStyle=e?"#000":r(128),i.fillRect(0,0,hn,hn);let c=Vo(i,"'Bebas Neue'")||Vo(i,"Impact"),l=(m,d,_,v,x,A,S=0)=>{i.save(),i.font=`${c?400:700} 100px ${jv}`,i.textAlign="center",i.textBaseline="alphabetic";try{i.letterSpacing=S+"px"}catch{}let T=i.measureText(m),C=T.actualBoundingBoxAscent||72,M=T.width||1,y=x/C,N=Math.min(v/M,y*1.12);i.translate(d+S*N/2,_+x/2),i.scale(N,y),i.fillStyle=A,i.fillText(m,0,0),i.restore()},h=(m,d,_,v,x,A=0,S=.4)=>{let T=[];for(let C=0;C<10;C++){let M=A-Math.PI/2+C*Math.PI/5,y=C%2?_*S:_;T.push([m+Math.cos(M)*y,d+Math.sin(M)*y])}for(let C=0;C<10;C++){let M=T[(C+1)%10];i.fillStyle=C%2?v:x,i.beginPath(),i.moveTo(m,d),i.lineTo(T[C][0],T[C][1]),i.lineTo(M[0],M[1]),i.closePath(),i.fill()}},u=(m,d,_,v)=>h(m,d,_,v,v),f=(m,d,_,v,x)=>{i.save(),i.translate(m,d),i.rotate(_),i.fillStyle=a(238,205),i.beginPath(),i.moveTo(0,0),i.quadraticCurveTo(v*.45,-x,v,0),i.quadraticCurveTo(v*.45,x,0,0),i.fill(),i.strokeStyle=a(120,150),i.lineWidth=1,i.beginPath(),i.moveTo(1,0),i.lineTo(v-2,0),i.stroke(),i.restore()},p=(m,d,_,v,x,A,S,T,C)=>{for(let M of[-1,1])for(let y=0;y<S;y++){let N=x+(A-x)*(y/(S-1)),I=m+M*_*Math.cos(N)*-1,E=d+v*Math.sin(N),U=M*_*Math.sin(N),V=v*Math.cos(N),G=Math.atan2(V,U);f(I,E,G-M*.55,T,C),f(I,E,G+M*.55,T*.92,C)}},g=(m,d,_,v,x,A,S,T,C,M=2)=>{for(let y=0;y<x;y++)i.fillStyle=a(A+s()*(S-A),T+s()*(C-T)),i.fillRect(m+s()*_,d+s()*v,M,M)},b=(m,d,_,v,x,A)=>{for(let S=0;S<x;S++){let T=S/x*o,C=m+_*Math.cos(T),M=d+v*Math.sin(T);if(e)i.fillStyle=r(60),i.beginPath(),i.arc(C,M,A+1.2,0,o),i.fill(),i.fillStyle=r(250),i.beginPath(),i.arc(C,M,A,0,o),i.fill();else{let y=i.createRadialGradient(C,M,0,C,M,A+1);y.addColorStop(0,r(250)),y.addColorStop(1,r(70)),i.fillStyle=y,i.beginPath(),i.arc(C,M,A+1,0,o),i.fill()}}};{let[m,d,_,v]=wt.placca,x=m+_/2,A=d+v/2,S=_/2,T=v/2,C=U=>{i.beginPath(),i.ellipse(x,A,S*U,T*U,0,0,o)};i.fillStyle=a(255,238),i.fillRect(m-8,0,_+16,d+v+4),i.save(),C(.905),i.clip(),i.fillStyle=a(104,78),i.fillRect(m,d,_,v),g(m,d,_,v,5200,70,140,48,112);let M=x,y=A-.475*T;i.save(),C(.8),i.clip();for(let U=0;U<40;U++){let V=U/40*o,G=V+o/80;i.fillStyle=a(168,132),i.beginPath(),i.moveTo(M,y),i.lineTo(M+Math.cos(V)*600,y+Math.sin(V)*600),i.lineTo(M+Math.cos(G)*600,y+Math.sin(G)*600),i.closePath(),i.fill()}i.restore(),C(.8),i.strokeStyle=a(240,205),i.lineWidth=3,i.stroke(),p(x,A,S*.665,T*.665,Math.PI*.53,Math.PI*1.2,13,30,9),u(M,y,.335*T,a(46,52)),h(M,y,.3*T,a(255,255),a(196,178)),b(x,A,S*.852,T*.852,70,4.4);let N=A-.165*T,I=A+.275*T,E=I-N;i.fillStyle=a(40,46),i.fillRect(m,N-4,_,E+8),i.fillStyle=a(252,226),i.fillRect(m,N,_,E),i.fillStyle=a(96,150),i.fillRect(m,N+6,_,2.5),i.fillRect(m,I-8.5,_,2.5),l(t,x,(N+I)/2,_*.82,E*.6,a(10,118),2),l("CAMPIONE",x,A+.455*T,_*.36,21,a(246,214),6),u(x,A+.655*T,11,a(246,220)),i.restore(),C(.905),i.strokeStyle=a(48,40),i.lineWidth=2.5,i.stroke()}{let[m,d,_,v]=wt.laterale,x=m+_/2,A=d+v/2,S=_/2,T=v/2;i.fillStyle=a(255,238),i.fillRect(m-3,d-3,_+6,v+6),i.save(),i.beginPath(),i.ellipse(x,A,S*.86,T*.86,0,0,o),i.clip(),i.fillStyle=a(104,78),i.fillRect(m,d,_,v),g(m,d,_,v,500,70,140,48,112),u(x,A+1,T*.6,a(46,52)),h(x,A+1,T*.52,a(255,255),a(196,178)),i.restore(),i.beginPath(),i.ellipse(x,A,S*.86,T*.86,0,0,o),i.strokeStyle=a(48,40),i.lineWidth=2,i.stroke(),b(x,A,S*.74,T*.74,22,2.6)}wt.med.forEach(([m,d,_,v],x)=>{let A=m+_/2,S=d+v/2,T=_/2;i.fillStyle=a(255,238),i.fillRect(m-3,d-3,_+6,v+6),i.save(),i.beginPath(),i.arc(A,S,T*.84,0,o),i.clip(),i.fillStyle=a(112,78),i.fillRect(m,d,_,v),g(m,d,_,v,420,78,146,48,112),p(A,S,T*.6,T*.6,Math.PI*.56,Math.PI*1.36,8,13,4.5),l(String(x+1),A,S+1,T*.7,T*.72,a(40,60)),l(String(x+1),A-1,S,T*.62,T*.66,a(255,245)),i.restore(),i.beginPath(),i.arc(A,S,T*.84,0,o),i.strokeStyle=a(48,40),i.lineWidth=2,i.stroke()});{let[m,d,_,v]=wt.pelle,x=20;if(i.fillStyle=a(15,128),i.fillRect(m-4,d-2,_+8,v+4),e){g(m-4,d-2,x+4,v+4,260,9,24,0,0,1.5),g(m+_-x,d-2,x+4,v+4,260,9,24,0,0,1.5);for(let A=0;A<260;A++)i.fillStyle=r(9+s()*15),i.fillRect(m+x+s()*(_-2*x),d-2+s()*(v+4),.7,4)}else{g(m-4,d-2,x+4,v+4,800,0,0,92,164,2),g(m+_-x,d-2,x+4,v+4,800,0,0,92,164,2);for(let A=0;A<900;A++)i.fillStyle=r(92+s()*72),i.fillRect(m+x+s()*(_-2*x),d-2+s()*(v+4),.8,5)}for(let A of[m+8,m+_-8]){i.fillStyle=a(7,86),i.fillRect(A-2.5,d-2,5,v+4);for(let S=0;S<10;S++)i.fillStyle=e?"#2c9c1a":r(205),i.fillRect(A-1.2,d+S*10+2,2.4,6)}}{let[m,d,_,v]=wt.nastro;if(i.fillStyle=a(12,128),i.fillRect(m-3,d-2,_+6,v+4),e)i.fillStyle="#35e616",i.fillRect(m+5,d-2,7,v+4),i.fillRect(m+_-12,d-2,7,v+4),i.fillStyle="#dfe6dc",i.fillRect(m+_/2-1,d-2,2,v+4);else for(let x=d-2;x<d+v+2;x+=3)i.fillStyle=r(150),i.fillRect(m-3,x,_+6,1.5),i.fillStyle=r(106),i.fillRect(m-3,x+1.5,_+6,1.5)}{let[m,d,_,v]=wt.liscio;i.fillStyle=a(255,128),i.fillRect(m-3,d-3,_+6,v+6)}{let[m,d,_,v]=wt.nero;i.fillStyle=a(9,128),i.fillRect(m-3,d-3,_+6,v+6)}}function Kv(i,e){let t=document.createElement("canvas"),n=document.createElement("canvas");t.width=t.height=n.width=n.height=hn;let s=new i.CanvasTexture(t);s.colorSpace=i.SRGBColorSpace,s.anisotropy=8;let r=new i.CanvasTexture(n);r.anisotropy=8;let a=t.getContext("2d"),o=n.getContext("2d"),c=!1,l=()=>{c=Vo(a,"'Bebas Neue'"),Rd(a,!0,e),Rd(o,!1,e),s.needsUpdate=r.needsUpdate=!0};l();try{if(!c&&document.fonts&&document.fonts.addEventListener){let h=()=>{!c&&Vo(a,"'Bebas Neue'")&&(l(),document.fonts.removeEventListener("loadingdone",h))};document.fonts.addEventListener("loadingdone",h)}}catch{}return{map:s,ril:r,ridisegna:l}}function Pd(i,e={}){let t=(e.lod||"high")!=="low",n=e.yCorda??1,s=e.yCordaBassa??.75,r=e.rCorda??.03,a=String(e.testo||"MEDUSA GYM"),o=!!e.placcaRuotata,c=new i.Group;c.name="trofei";let l=[1,.71,.29],h=[.9,.91,.93],u=[.78,.42,.2],f=Ed[a]||(Ed[a]=Kv(i,a)),p=new i.MeshStandardMaterial({map:f.map,bumpMap:f.ril,bumpScale:.9,roughness:.55,metalness:0}),g=new i.MeshStandardMaterial({map:f.map,bumpMap:f.ril,bumpScale:1.6,roughness:.34,metalness:1,vertexColors:!0}),b=new i.MeshStandardMaterial({map:f.map,bumpMap:f.ril,bumpScale:.5,roughness:.82,metalness:0,side:i.DoubleSide}),m=(ue,ae,j)=>{let J=new i.BufferGeometry;return J.setAttribute("position",new i.Float32BufferAttribute(ue,3)),J.setAttribute("uv",new i.Float32BufferAttribute(ae,2)),J.setIndex(j),J.computeVertexNormals(),J},d=(ue,ae,j,J=!1)=>{let fe=[],q=[],ne=[];for(let ge=0;ge<ue;ge++)for(let Te=0;Te<ae;Te++){let xe=j(ge,Te);fe.push(xe[0],xe[1],xe[2]),q.push(xe[3],xe[4])}for(let ge=0;ge<ue-1;ge++)for(let Te=0;Te<ae-1;Te++){let xe=ge*ae+Te,Z=xe+1,K=xe+ae,R=K+1;J?ne.push(xe,K,Z,Z,K,R):ne.push(xe,Z,K,Z,R,K)}return m(fe,q,ne)},_=(ue,ae,j,J,fe=!1)=>{let q=[],ne=[],ge=[];for(let xe=0;xe<ue;xe++)for(let Z=0;Z<ae;Z++){let K=j(xe,Z);q.push(K[0],K[1],K[2]),ne.push(K[3],K[4])}let Te=(xe,Z,K)=>{fe?ge.push(xe,K,Z):ge.push(xe,Z,K)};for(let xe=0;xe<ue-1;xe++)for(let Z=0;Z<ae;Z++){let K=xe*ae+Z,R=xe*ae+(Z+1)%ae,ye=K+ae,le=R+ae;Te(K,R,le),Te(K,le,ye)}if(J){let xe=ue*ae;q.push(J[0],J[1],J[2]),ne.push(J[3],J[4]);for(let Z=0;Z<ae;Z++)Te((ue-1)*ae+Z,(ue-1)*ae+(Z+1)%ae,xe)}return m(q,ne,ge)},v=(ue,ae,j,J,fe,q,ne,ge,Te=!1)=>{let xe=q[q.length-1][0]===0,Z=xe?q.length-1:q.length,K=xe?[...ue(ae,j,q[q.length-1][1]),...ge(0,0)]:null;return _(Z,ne,(R,ye)=>{let le=q[R][0],ie=ye/ne*Math.PI*2,ce=le*Math.cos(ie),we=le*Math.sin(ie);return[...ue(ae+we*J,j+ce*fe,q[R][1]),...ge(ce,we)]},K,Te)},x=(ue,ae=.985)=>(j,J)=>[(ue[0]+ue[2]/2+j*ue[2]/2*ae)/hn,1-(ue[1]+ue[3]/2-J*ue[3]/2*ae)/hn],A=ue=>{let ae=(ue[0]+ue[2]/2)/hn,j=1-(ue[1]+ue[3]/2)/hn;return()=>[ae,j]},S=(ue,ae)=>{let j=(ae[0]+ae[2]/2)/hn,J=1-(ae[1]+ae[3]/2)/hn,fe=ue.attributes.uv;for(let q=0;q<fe.count;q++)fe.setXY(q,j,J);return ue},T=(ue,ae)=>{let j=ue.attributes.position.count,J=new Float32Array(j*3);for(let fe=0;fe<j;fe++)J[fe*3]=ae[0],J[fe*3+1]=ae[1],J[fe*3+2]=ae[2];return ue.setAttribute("color",new i.BufferAttribute(J,3)),ue},C=(ue,ae)=>{for(let j of Object.keys(ue.attributes))["position","normal","uv","color"].includes(j)||ue.deleteAttribute(j);if(!ae&&ue.attributes.color&&ue.deleteAttribute("color"),!ue.index){let j=ue.attributes.position.count,J=[];for(let fe=0;fe<j;fe++)J.push(fe);ue.setIndex(J)}return ue},M=(ue,ae)=>lt(ue.map(j=>C(j,ae)),!1),y={pelle:[],metallo:[]};function N(ue){let ae=ue.scala,j=.005,J=.055,fe=ue.L,q=fe/2,ne=.055*ae,ge=(o?.09:.11)*ae,Te=(o?.11:.09)*ae,xe=Te+.06*ae,Z=.0425*ae,K=.0375*ae,R=q+xe+K+.012,ye=Math.PI*J,le=.3,ie=.14,ce=.26,we=Fe=>{if(Fe<R){let it=Math.max(0,(le-Fe)/le);return Math.PI/2-ce*it*it}if(Fe<R+ye)return Math.PI/2-(Fe-R)/J;let Xe=Math.max(0,(Fe-(fe-ie))/ie);return-Math.PI/2+ce*.7*Xe*Xe},de=.002,P=Math.ceil(fe/de),w=new Float32Array(P+1),F=new Float32Array(P+1);for(let Fe=0;Fe<P;Fe++){let Xe=we((Fe+.5)*de);w[Fe+1]=w[Fe]+Math.cos(Xe)*de,F[Fe+1]=F[Fe]+Math.sin(Xe)*de}let O=Math.round((R+ye/2)/de),X=-w[O],D=r+j/2-F[O],k=q-xe-K-.01,B=ue.torsione||0,H=(Fe,Xe,it)=>{let mt=Math.max(0,Math.min(P-1e-4,Fe/de)),It=Math.floor(mt),Bn=mt-It,li=we(Fe),L=Fe<k?(k-Fe)/k:0,se=B*L*L,ve=Math.cos(se),_e=Math.sin(se),re=it*ve+Xe*_e,Oe=Xe*ve-it*_e;return[w[It]+(w[It+1]-w[It])*Bn+X-Math.sin(li)*re,F[It]+(F[It+1]-F[It])*Bn+D+Math.cos(li)*re,Oe]},Me=(Fe,Xe,it)=>H(Fe,Xe,j/2+it),oe=ge+.017*ae,be=Te+.024*ae,Le=Fe=>{let Xe=(Fe-q)/be,it=Math.abs(Xe)<1?oe*Math.sqrt(1-Xe*Xe):0,mt=Math.min(1,Math.max(0,(Math.abs(Fe-q)-xe-K)/.25)),It=ne*(1-.14*mt),Bn=Math.pow(Math.pow(It,6)+Math.pow(it,6),1/6),li=Math.min(Fe,fe-Fe)/(.032*ae);return li<1&&(Bn*=Math.max(.12,Math.sqrt(1-(1-li)*(1-li)))),Bn},Ce=t?.05:.1,Ie=Fe=>{let Xe=Fe/Ce,it=Xe-2*Math.floor(Xe/2);return 1-Math.abs(it-1)},Ee=[];for(let Fe=0;Fe<fe-1e-6;Fe+=Ce)Ee.push(+Fe.toFixed(5));let Ae=[fe],Ue=t?10:5;for(let Fe=0;Fe<=Ue;Fe++)Ae.push(R+ye*Fe/Ue);for(let Fe of t?[0,.3,.52,.7,.82,.91,.98,1.05,1.13,1.24]:[0,.5,.85,1.05,1.2])Ae.push(q-Fe*be),Ae.push(q+Fe*be);for(let Fe of t?[.003,.009,.019,.032]:[.006,.02])Ae.push(Fe*ae),Ae.push(fe-Fe*ae);if(t)for(let Fe=1;Fe<6;Fe++)Ae.push(le*Fe/6);let z=Ee.slice();for(let Fe of Ae.sort((Xe,it)=>Xe-it))z.some(Xe=>Math.abs(Xe-Fe)<(t?.0045:.012))||z.push(Fe);z.sort((Fe,Xe)=>Fe-Xe);let Se={pelle:[],metallo:[]},Q=z.length,me=t?.0013:0,De=wt.pelle,he=(Fe,Xe)=>[(De[0]+De[2]*Fe)/hn,1-(De[1]+De[3]*(.02+.96*Ie(Xe)))/hn],Pe=Fe=>Math.max(Le(Fe),me+6e-4),ze=20/De[2],Ke=t?[j/2,j/2,j/2,j/2]:[0,j/2,j/2,0];if(Se.pelle.push(d(Q,4,(Fe,Xe)=>{let it=z[Fe],mt=Pe(it)-me,It=Math.min(.011*ae,mt*.45),Bn=[-mt,-mt+It,mt-It,mt][Xe];return[...H(it,Bn,Ke[Xe]),...he([0,ze,1-ze,1][Xe],it)]})),Se.pelle.push(d(Q,2,(Fe,Xe)=>{let it=z[Fe],mt=Pe(it)-me;return[...H(it,Xe?mt:-mt,t?-j/2:0),...he(Xe?1-ze:ze,it)]},!0)),t){let Fe=[[-me,j/2],[0,0],[-me,-j/2]];Se.pelle.push(d(Q,3,(Xe,it)=>{let mt=z[Xe],It=Pe(mt);return[...H(mt,It+Fe[it][0],Fe[it][1]),...he(.5,mt)]})),Se.pelle.push(d(Q,3,(Xe,it)=>{let mt=z[Xe],It=Pe(mt);return[...H(mt,-(It+Fe[2-it][0]),Fe[2-it][1]),...he(.5,mt)]}))}let Ze=x(wt.placca),Rt=x(wt.laterale),Yt=o?(Fe,Xe)=>Ze(Xe,-Fe):Ze,Pt=t?[[1,0],[1,.003],[.975,.0049],[.94,.0051],[.905,.0036],[.5,.0058],[0,.0068]]:[[1,0],[1,.003],[.94,.0051],[.905,.0036],[0,.0068]],wn=t?[[1,0],[1,.0024],[.95,.004],[.86,.003],[0,.0046]]:[[1,0],[.95,.004],[.86,.003],[0,.0046]],un=[];un.push(v(Me,q,0,Te,ge,Pt.map(([Fe,Xe])=>[Fe,Xe*ae]),t?40:18,Yt));for(let Fe of[-1,1])un.push(v(Me,q+Fe*xe,0,K,Z,wn.map(([Xe,it])=>[Xe,it*ae]),t?20:10,Rt));let tr=t?[[1,0],[.62,.0026],[0,.0031]]:[[1,0],[0,.003]],ta=A(wt.liscio),nr=.0068*ae,ci=[];for(let Fe=0;Fe<4;Fe++)for(let Xe of[-1,1])ci.push([(.05+.037*Fe)*ae,Xe*.022*ae]);for(let Fe=0;Fe<(t?3:2);Fe++)for(let Xe of[-1,1])ci.push([fe-(.045+.037*Fe)*ae,Xe*.022*ae]);for(let[Fe,Xe]of ci)un.push(v(Me,Fe,Xe,nr,nr,tr,t?7:5,ta));for(let Fe of un)Se.metallo.push(T(Fe,ue.metallo));for(let Fe of["pelle","metallo"])for(let Xe of Se[Fe])Xe.applyMatrix4(ue.matrice),y[Fe].push(Xe)}let I=(ue,ae,j,J)=>new i.Matrix4().makeRotationY(J).setPosition(ue,ae,j),E=[].concat(e.imbardata??[1.5,3]).map(ue=>ue*Math.PI/180);E.length<2&&E.push(E[0]),N({scala:1,L:1.2,metallo:l,torsione:.2,matrice:I(0,n,-.56,-E[0])}),N({scala:.88,L:1.06,metallo:h,torsione:-.14,matrice:I(-.56,n,0,-Math.PI/2+E[1])});{let j=Math.PI/4+.14,J=I(-.45,0,-.45,j),fe=.046,q=.066,ne=[],ge=(K,R,ye)=>{let le=t?new ai(K,R,K,1,.004):new i.BoxGeometry(K,R,K);return le.translate(0,ye+R/2,0),le};ne.push(ge(.112,fe,0)),ne.push(ge(.09,q-fe,fe));for(let K of ne)S(K,wt.nero),K.applyMatrix4(J),y.pelle.push(K);let Te=t?[[0,q],[.037,q],[.04,q+.003],[.039,q+.007],[.03,q+.011],[.017,q+.017],[.0105,q+.028],[.009,q+.042],[.012,q+.048],[.0185,q+.054],[.0185,q+.059],[.012,q+.065],[.0095,q+.073],[.012,q+.081],[.024,q+.089],[.038,q+.101],[.048,q+.12],[.0522,q+.14],[.0545,q+.1435],[.0545,q+.1475],[.0528,q+.151],[.0532,q+.19],[.0556,q+.1935],[.0556,q+.1975],[.0542,q+.201],[.058,q+.232],[.065,q+.25],[.0672,q+.254],[.0655,q+.2535],[.057,q+.232],[.051,q+.2],[.05,q+.16],[.045,q+.125],[.03,q+.104],[0,q+.098]]:[[0,q],[.04,q],[.038,q+.008],[.014,q+.02],[.009,q+.045],[.0185,q+.056],[.0095,q+.073],[.03,q+.093],[.05,q+.125],[.054,q+.2],[.0672,q+.254],[.052,q+.2],[.046,q+.125],[0,q+.098]],xe=[];xe.push(new i.LatheGeometry(Te.map(([K,R])=>new i.Vector2(K,R)),t?18:12));let Z=[[.045,q+.118],[.068,q+.124],[.09,q+.145],[.098,q+.18],[.09,q+.214],[.07,q+.228],[.054,q+.222]];for(let K of[0,Math.PI]){let R=new i.TubeGeometry(new i.CatmullRomCurve3(Z.map(([ye,le])=>new i.Vector3(ye,le,0))),t?14:7,.0048,t?6:4,!1);R.rotateY(K),xe.push(R)}{let K=new i.BoxGeometry(.062,.022,.002);K.translate(0,fe*.5,-.0565),xe.push(K)}for(let K of xe)S(K,wt.liscio),T(K,l),K.applyMatrix4(J),y.metallo.push(K)}let U=[],V=[],G=[];{let j=(ne,ge)=>[(wt.nastro[0]+wt.nastro[2]*(.03+.94*ne))/hn,1-(wt.nastro[1]+wt.nastro[3]*(.05+.9*ge))/hn],J=[[-1.41,.235,h,1],[-1.25,.3,l,0],[-1.09,.185,u,2]],fe=0,q=0;for(let[ne,ge,Te,xe]of J){let Z=s-ge,K=-(r+.0022),R=(Ce,Ie,Ee)=>[K-Ee,Z+Ce,ne+Ie],ye=t?[[1,0],[1,.004],[.965,.0052],[.9,.0052],[.85,.004],[.45,.0046],[0,.0049]]:[[1,0],[1,.004],[.9,.0052],[.85,.004],[0,.0049]],le=t?24:12,ie=[v(R,0,0,.036,.036,ye,le,x(wt.med[xe]))];ie.push(v(R,0,0,.036,.036,[[1,0],[0,0]],le,A(wt.liscio),!0));let ce=Z+.036+.0052,we=.0072;{let Ce=new i.TorusGeometry(we,.0013,t?4:3,t?9:6);Ce.rotateY(Math.PI/2),Ce.translate(K-.002,ce,ne),ie.push(S(Ce,wt.liscio))}for(let Ce of ie)T(Ce,Te);let de=[],P=t?12:6,w=r+.0012;de.push(d(P+1,3,(Ce,Ie)=>{let Ee=Ce/P*Math.PI*2;return[Math.cos(Ee)*w,s+Math.sin(Ee)*w,ne+(Ie-1)*.03*1.02,...j(Ie===1?1:0,.5)]}));let F=r+.0024,O=116*Math.PI/180,X=178*Math.PI/180,D=t?3:2;de.push(d(D+1,2,(Ce,Ie)=>{let Ee=O+(X-O)*Ce/D;return[Math.cos(Ee)*F,s+Math.sin(Ee)*F,ne+(Ie?1:-1)*.03*1.02,...j(Ce/D,Ie)]}));let k=de.reduce((Ce,Ie)=>Ce+Ie.attributes.position.count,0),B=s+.004,H=ce+we-.002,Me=t?5:3;for(let Ce of[-1,1])de.push(d(Me,2,(Ie,Ee)=>{let Ae=Ie/(Me-1),Ue=Ae*Ae*(3-2*Ae),z=.03+(.015-.03)*Ue,Se=ne+Ce*(.03*.46*(1-Ue)+.0015*Ue);return[-(r+.0018)+(K-.002+Ce*9e-4+(r+.0018))*Ue,B+(H-B)*Ae,Se+(Ee?.5:-.5)*z,...j(Ee,.1+.8*Ae)]}));let oe=de.reduce((Ce,Ie)=>Ce+Ie.attributes.position.count,0),be=ie.reduce((Ce,Ie)=>Ce+Ie.attributes.position.count,0),Le=ne*7.3;G.push({x:K-.002,z:ne,yP:s,yTop:B,yBot:H,n0:fe+k,n1:fe+oe,m0:q,m1:q+be,wS:Math.sqrt(9.81/(ge+.02)),fS:Le,aS:.016,wT:.9+.23*xe,fT:Le*1.7,aT:.11}),fe+=oe,q+=be,U.push(...de),V.push(...ie)}}let $=(ue,ae,j)=>{let J=new i.Mesh(ue,ae);return J.name=j,J.castShadow=J.receiveShadow=!0,c.add(J),J};$(M(y.pelle,!1),p,"pelle"),$(M(y.metallo,!0),g,"metallo");let Y=$(M(U,!1),b,"nastri"),te=$(M(V,!0),g,"medaglie"),ee=[Y,te].map(ue=>({p:ue.geometry.attributes.position,n:ue.geometry.attributes.normal,p0:ue.geometry.attributes.position.array.slice(),n0:ue.geometry.attributes.normal.array.slice()}));for(let ue of ee)ue.p.setUsage(i.DynamicDrawUsage),ue.n.setUsage(i.DynamicDrawUsage);let Re=(ue,ae,j,J,fe,q)=>{let ne=ue.p.array,ge=ue.n.array,Te=ue.p0,xe=ue.n0,Z=J.yTop-J.yBot;for(let K=ae;K<j;K++){let R=K*3,ye=Math.min(1,Math.max(0,(J.yTop-Te[R+1])/Z)),le=fe*ye,ie=Math.cos(le),ce=Math.sin(le),we=q*Math.min(1,ye*3),de=Math.cos(we),P=Math.sin(we),w=Te[R]-J.x,F=Te[R+2]-J.z,O=J.x+w*ie+F*ce,X=J.z-w*ce+F*ie,D=Te[R+1],k=xe[R]*ie+xe[R+2]*ce,B=-xe[R]*ce+xe[R+2]*ie,H=xe[R+1],Me=D-J.yP;F=X-J.z,D=J.yP+Me*de-F*P,X=J.z+Me*P+F*de;let oe=H*de-B*P;B=H*P+B*de,H=oe,ne[R]=O,ne[R+1]=D,ne[R+2]=X,ge[R]=k,ge[R+1]=H,ge[R+2]=B}};return c.userData.update=ue=>{for(let ae of G){let j=ae.aT*Math.sin(ae.wT*ue+ae.fT),J=ae.aS*Math.sin(ae.wS*ue+ae.fS);Re(ee[0],ae.n0,ae.n1,ae,j,J),Re(ee[1],ae.m0,ae.m1,ae,j,J)}for(let ae of ee)ae.p.needsUpdate=!0,ae.n.needsUpdate=!0},c.userData.update(0),c.userData.ridisegna=f.ridisegna,c}var Id=512,er=140,Xt={W:54,H:96,T:11,Y:22,SKEW:.09,X:[196,266,358,428],COLON_X:339},Zv={0:"abcdef",1:"bc",2:"abged"};function Ld(i,e,t,n,s,r){let a=r/2;i.beginPath(),t===s?(i.moveTo(e,t),i.lineTo(e+a,t-a),i.lineTo(n-a,t-a),i.lineTo(n,t),i.lineTo(n-a,t+a),i.lineTo(e+a,t+a)):(i.moveTo(e,t),i.lineTo(e+a,t+a),i.lineTo(e+a,s-a),i.lineTo(e,s),i.lineTo(e-a,s-a),i.lineTo(e-a,t+a)),i.closePath(),i.fill()}function Jv(i,e,t,n,s){let{W:r,H:a,T:o,Y:c}=Xt,l=o/2,h=1.6,u=e+l,f=e+r-l,p=c+l,g=c+a/2,b=c+a-l,m={a:[u+h,p,f-h,p],g:[u+h,g,f-h,g],d:[u+h,b,f-h,b],f:[u,p+h,u,g-h],b:[f,p+h,f,g-h],e:[u,g+h,u,b-h],c:[f,g+h,f,b-h]},d=Zv[t]||"";i.shadowBlur=0,i.fillStyle=s;for(let _ in m)d.includes(_)||Ld(i,...m[_],o);i.shadowColor=n,i.shadowBlur=9,i.fillStyle=n;for(let _ in m)d.includes(_)&&Ld(i,...m[_],o);i.shadowBlur=0}function Dd(i,e){i.setTransform(1,0,0,1,0,0),i.fillStyle="#020302",i.fillRect(0,0,512,256),i.setTransform(1,0,0,256/er,0,0),i.fillStyle="#b0352a",i.textAlign="center",i.textBaseline="middle",i.font='400 44px "Bebas Neue", Impact, sans-serif';try{i.letterSpacing="2px"}catch{}i.fillText("ROUND 1",96,er/2+2,150);try{i.letterSpacing="0px"}catch{}let t="#0b1c08";i.setTransform(1,0,-Xt.SKEW*256/er,256/er,Xt.SKEW*(Xt.Y+Xt.H/2)*256/er,0);let n=["0","0","2","0"];for(let s=0;s<4;s++)Jv(i,Xt.X[s],n[s],e,t);i.fillStyle=t;for(let s of[.3,.7])i.fillRect(Xt.COLON_X-6,Xt.Y+Xt.H*s-6,12,12);i.setTransform(1,0,0,1,0,0)}function Qv(i,e,t,n,s,r){let a=41,o=()=>(a=a*16807%2147483647,a/2147483647),c=r+12,l=[];for(let S=0;S<c;S++)l.push(.78+o()*.44-(o()>.82?.3:0));let h=S=>{let T=Math.max(1,Math.min(c-2,S));return l[T-1]*.22+l[T]*.56+l[T+1]*.22},u=new i.Color(4465679),f=[-n/2];for(let S=0;S<=r;S++)f.push(-n/2+s+(n-2*s)*S/r);f.push(n/2);let p=f.length,g=[-e/2,-e/2,-e/2+s,-e/6,e/6,e/2-s,e/2,e/2],b=g.length,m=[0,0,0,2,4,5,5,5],d=[],_=[],v=[];for(let S=0;S<p;S++){let T=S===0||S===p-1,C=[0,t-s,T?t-s:t,T?t-s:t,T?t-s:t,T?t-s:t,t-s,0];for(let M=0;M<b;M++){d.push(g[M],C[M],f[S]);let y=h(S+m[M])*(M===0||M===b-1?.8:1);_.push(u.r*y,u.g*y,u.b*y)}}for(let S=0;S<p-1;S++)for(let T=0;T<b-1;T++){let C=S*b+T,M=(S+1)*b+T,y=C+1,N=M+1;v.push(C,M,y,M,N,y)}let x=(S,T)=>{let C=d.length/3,M=.62;d.push(-e/2,0,S,e/2,0,S,e/2,t-s,S,-e/2,t-s,S);for(let y=0;y<4;y++)_.push(u.r*M,u.g*M,u.b*M);T?v.push(C,C+2,C+1,C,C+3,C+2):v.push(C,C+1,C+2,C,C+2,C+3)};x(n/2,!1),x(-n/2,!0);let A=new i.BufferGeometry;return A.setAttribute("position",new i.Float32BufferAttribute(d,3)),A.setAttribute("color",new i.Float32BufferAttribute(_,3)),A.setIndex(v),A=A.toNonIndexed(),A.computeVertexNormals(),A}function Nd(i,e={}){let t=e.lod==="low",n=e.color??3800852,s=new i.Group,r=[],a=[],o=[],c=new i.Color,l=(Ae,Ue,z,Se)=>{let Q=Ue.index?Ue.toNonIndexed():Ue;if(Q.attributes.uv&&Q.deleteAttribute("uv"),Se&&Q.applyMatrix4(Se),Q.attributes.normal||Q.computeVertexNormals(),!Q.attributes.color){c.set(z);let me=Q.attributes.position.count,De=new Float32Array(me*3);for(let he=0;he<me;he++)De[he*3]=c.r,De[he*3+1]=c.g,De[he*3+2]=c.b;Q.setAttribute("color",new i.Float32BufferAttribute(De,3))}return Ae.push(Q),Q},h=(Ae,Ue,z,Se,Q,me,De,he)=>{let Pe=new i.BoxGeometry(z,Se,Q);return Pe.translate(me,De,he),l(Ae,Pe,Ue)},u=(Ae,Ue,z,Se,Q,me,De,he,Pe,ze=!1)=>{let Ke=new i.CylinderGeometry(z,Se,Q,me,1,ze);return Ke.translate(De,he,Pe),l(Ae,Ke,Ue)},f=new i.Vector3(0,1,0),p=(Ae,Ue,z,Se,Q,me,De=!0)=>{let he=new i.Vector3(...z),Pe=new i.Vector3(...Se),ze=Pe.clone().sub(he),Ke=ze.length(),Ze=new i.CylinderGeometry(Q,Q,Ke,me,1,De),Rt=new i.Matrix4().compose(he.clone().add(Pe).multiplyScalar(.5),new i.Quaternion().setFromUnitVectors(f,ze.normalize()),new i.Vector3(1,1,1));return l(Ae,Ze,Ue,Rt)},g=1776928,b=1184790,m=394758,d=1316376,_=14857815,v=13488854,x=.6,A=.45,S=.75,T=.018;if(t)h(r,g,x,T,A,0,S-T/2,0);else{let z=x/2-.003,Se=A/2-.003,Q=new i.Shape;Q.moveTo(-z+.02,-Se),Q.lineTo(z-.02,-Se),Q.absarc(z-.02,-Se+.02,.02,-Math.PI/2,0,!1),Q.lineTo(z,Se-.02),Q.absarc(z-.02,Se-.02,.02,0,Math.PI/2,!1),Q.lineTo(-z+.02,Se),Q.absarc(-z+.02,Se-.02,.02,Math.PI/2,Math.PI,!1),Q.lineTo(-z,-Se+.02),Q.absarc(-z+.02,-Se+.02,.02,Math.PI,Math.PI*1.5,!1);let me=new i.ExtrudeGeometry(Q,{depth:T-2*.003,bevelEnabled:!0,bevelThickness:.003,bevelSize:.003,bevelSegments:1,curveSegments:4});me.rotateX(-Math.PI/2),me.translate(0,S-T+.003,0),l(r,me,g)}let C=x/2-.04,M=A/2-.04,y=.022,N=t?0:.008,I=.034;for(let Ae of[-1,1])for(let Ue of[-1,1])h(r,g,y,S-T-N,y,Ae*C,N+(S-T-N)/2,Ue*M),t||u(r,m,.015,.016,N,10,Ae*C,N/2,Ue*M);for(let Ae of[-1,1])h(r,g,2*C-y,I,.012,0,S-T-I/2,Ae*M),h(r,g,.012,I,2*M-y,Ae*C,S-T-I/2,0),h(r,g,.016,.016,2*M-y,Ae*C,.16,0);h(r,g,2*C-.016,.016,.016,0,.16,0);let E=.32,U=.03,V=.22,G=-.015,$=S+U,Y=Qv(i,E,U,V,.004,t?8:20);Y.translate(0,S,G),a.push(Y);let te=-.045,ee=.016,Re=.0685,ae=new i.SplineCurve([[.0925,.008],[.0958,.0022],[.0986,0],[.1004,.002],[.1,.0065],[.0986,.016],[.0962,.028],[.092,.04],[.084,.051],[.07,.0595],[.052,.0648],[.031,.0675],[.013,.0683],[0,Re]].map(([Ae,Ue])=>new i.Vector2(Ae,Ue))).getSpacedPoints(t?9:15);ae[ae.length-1].x=0;let j=new i.LatheGeometry(ae,t?22:40);j.translate(te,$+ee,G),l(o,j,_);let J=$+ee+Re;if(u(o,v,.011,.011,ee+.06,t?8:12,te,$+(ee+.06)/2,G,!0),u(o,v,.019,.019,.003,t?10:18,te,J+.0012,G),u(o,v,.0105,.0105,.008,6,te,J+.0067,G),!t){let Ae=new i.SphereGeometry(.0088,10,4,0,Math.PI*2,0,Math.PI/2);Ae.translate(te,J+.0105,G),l(o,Ae,v)}let fe=.114,q=$+.02,ne=te+.0968+.003+.0155,ge=$+ee+.0255,Te=.0155,xe=.203,Z=$+.05,K=new i.SphereGeometry(Te,t?8:14,t?6:10);K.translate(ne,ge,G),l(o,K,v),p(o,v,[fe,q,G],[ne+.004,ge-.002,G],.0038,t?5:8),p(o,v,[fe,q,G],[xe,Z,G],.0038,t?5:8);for(let Ae of[-1,1])h(o,v,.022,.03,.003,fe,$+.015,G+Ae*.0105);h(o,v,.034,.003,.034,fe,$+.0015,G);let R=new i.CylinderGeometry(.0048,.0048,.032,t?6:10);R.rotateX(Math.PI/2),R.translate(fe,q,G),l(o,R,v);{let Ae=new i.SphereGeometry(.0125,t?7:10,t?5:6);Ae.translate(xe+.004,Z+.0015,G),l(r,Ae,m)}{let Ue=$+.001,z=q+(Z-q)*(.146-fe)/(xe-fe)-.002,Se=t?3.5:5,Q=t?28:50,me=[];for(let he=0;he<=Q;he++){let Pe=he/Q,ze=Pe*Se*Math.PI*2;me.push(new i.Vector3(.146+Math.cos(ze)*.0068,Ue+(z-Ue)*Pe,G+Math.sin(ze)*.0068))}let De=new i.TubeGeometry(new i.CatmullRomCurve3(me),t?28:50,.0012,t?3:4,!1);l(o,De,v),u(o,v,.009,.009,.002,t?6:10,.146,$+.001,G)}if(!t)for(let Ae of[-1,1])for(let Ue of[-1,1])u(o,_,.0055,.0062,.0022,8,Ae*(E/2-.018),$+.0011,G+Ue*(V/2-.018));let ye=1.55,le=-.35,ie=.7,ce=.22,we=.06,de=.006,P=.64,w=.175,F=le+we/2-de;h(r,b,ie,ce,we-de,0,ye,le-de/2);let O=(ce-w)/2,X=(ie-P)/2;for(let Ae of[-1,1])h(r,b,ie,O,de,0,ye+Ae*(w/2+O/2),F+de/2),h(r,b,X,w,de,Ae*(P/2+X/2),ye,F+de/2);let D=le-we/2-.012-.016,k=.016;if(u(r,d,k,k,ye+.075,t?8:14,0,(ye+.075)/2,D,!0),u(r,d,k,k,.002,t?8:14,0,ye+.075,D),u(r,d,.165,.175,.012,t?16:28,0,.006,D),u(r,d,.026,.032,.05,t?8:14,0,.012+.025,D,!0),h(r,d,.11,.15,.012,0,ye,le-we/2-.006),!t)for(let Ae of[-1,1])h(r,d,.05,.014,.04,0,ye+Ae*.05,D+.004);if(!t){let Se=new i.Shape;Se.moveTo(.037,.0115),Se.lineTo(0,.0115),Se.absarc(0,0,.0115,Math.PI/2,Math.PI*2+.3,!1),Se.lineTo(.037,.0045),Se.closePath();let Q=new i.ExtrudeGeometry(Se,{depth:.016-2*.0012,bevelEnabled:!0,bevelThickness:.0012,bevelSize:.0012,bevelSegments:1,curveSegments:12});Q.translate(0,0,.0012),Q.rotateX(-Math.PI/2);let me=new i.Matrix4().compose(new i.Vector3(-.215,S+2e-4,.165),new i.Quaternion().setFromAxisAngle(f,.5),new i.Vector3(1,1,1));l(o,Q,v,me);let De=new i.BoxGeometry(.008,.016*.62,.002);De.translate(.012,.016/2,-.0115-.0012-2e-4),l(r,De,m,me);let he=new i.TorusGeometry(.0062,.0011,4,10);he.rotateX(Math.PI/2),he.translate(-.0115-.0012-.0045,.016/2,0),l(o,he,v,me);let Pe=new i.Vector3(-.0115-.0012-.008,.004,0).applyMatrix4(me),ze=new i.CatmullRomCurve3([Pe,new i.Vector3(Pe.x-.02,S+.0025,Pe.z+.012),new i.Vector3(Pe.x-.012,S+.0025,Pe.z-.05),new i.Vector3(Pe.x+.05,S+.0025,Pe.z-.085),new i.Vector3(Pe.x+.115,S+.0025,Pe.z-.05),new i.Vector3(Pe.x+.1,S+.0025,Pe.z-.005),new i.Vector3(Pe.x+.02,S+.0025,Pe.z+.03),new i.Vector3(Pe.x-.004,S+.005,Pe.z+.004)]);l(r,new i.TubeGeometry(ze,26,.0022,3,!1),m)}let B=(Ae,Ue)=>{let z=new i.Mesh(lt(Ae,!1),Ue);return z.castShadow=z.receiveShadow=!0,s.add(z),z};B(r,new i.MeshStandardMaterial({color:16777215,vertexColors:!0,metalness:.45,roughness:.5,envMapIntensity:.9})).name="gong_nero",B(a,new i.MeshStandardMaterial({color:16777215,vertexColors:!0,metalness:0,roughness:.58,envMapIntensity:.7})).name="gong_legno",B(o,new i.MeshStandardMaterial({color:16777215,vertexColors:!0,metalness:1,roughness:.2,envMapIntensity:1.35})).name="gong_metallo";let H=document.createElement("canvas");H.width=512,H.height=256;let Me=H.getContext("2d"),oe="#"+new i.Color(n).getHexString();Dd(Me,oe);let be=new i.CanvasTexture(H);be.colorSpace=i.SRGBColorSpace,be.anisotropy=4;let Le=new i.MeshStandardMaterial({color:16777215,map:be,emissive:16777215,emissiveMap:be,emissiveIntensity:1.2,roughness:.3,metalness:0,envMapIntensity:.6}),Ce=new i.Mesh(new i.PlaneGeometry(P,w),Le);Ce.position.set(0,ye,F+.0015),Ce.castShadow=!1,Ce.receiveShadow=!1,Ce.name="gong_display",s.add(Ce);let Ie=[];for(let Ae of[.3,.7]){let Ue=Xt.Y+Xt.H*Ae,z=Xt.COLON_X-Xt.SKEW*(Ue-(Xt.Y+Xt.H/2)),Se=12/Id*P,Q=new i.PlaneGeometry(Se,Se);Q.translate((z/Id-.5)*P,(.5-Ue/er)*w,0),Ie.push(Q)}let Ee=new i.Mesh(lt(Ie,!1),new i.MeshStandardMaterial({color:0,emissive:n,emissiveIntensity:1.2,roughness:.3,metalness:0}));return Ee.position.set(0,ye,F+.0032),Ee.castShadow=!1,Ee.receiveShadow=!1,Ee.name="gong_duepunti",s.add(Ee),s.userData.update=Ae=>{let Ue=Ae-Math.floor(Ae);Ee.visible=Ue<.5},s.userData.redrawDisplay=()=>{Dd(Me,oe),be.needsUpdate=!0},s}function Ud(i,e={}){let t=(e.lod||"high")!=="low",n=new i.Group;n.name="rack";let s=2.6,r=1.25,a=.9,o=.075,c=[],l=[],h=[],u=(b,m,d,_,v,x,A)=>{let S=new i.BoxGeometry(m,d,_);S.translate(v,x,A),b.push(S)},f=(b,m,d,_,v,x,A)=>{let S=new i.CylinderGeometry(m,m,d,t?14:7,1);A==="x"&&S.rotateZ(Math.PI/2),A==="z"&&S.rotateX(Math.PI/2),S.translate(_,v,x),b.push(S)};for(let b of[-1,0,1]){let m=b*r;if(u(c,o,s,o,m,s/2,0),u(c,o,.05,a,m,.025,0),u(h,o+.006,.09,o+.006,m,1.05,0),t)for(let d of[1.5,1.7,1.9,2.1])f(l,.011,o+.012,m,d,0,"z");u(c,.26,.012,.36,m,.056,0)}u(c,2*r+o,o,o,0,s-o/2,0),f(l,.016,r-o,-r/2,2.32,0,"x"),f(l,.016,r-o,r/2,2.08,0,"x");for(let b of[-1,1])f(l,.019,.62,r+.31+o/2-.02,1.18,b*.26,"x"),u(c,.05,.05,.3,r+o/2+.01,1.18,b*.14);let p=[];for(let[b,m]of[[-r/2-.28,2.32],[-r/2+.28,2.32],[r/2-.28,2.08],[r/2+.28,2.08]])f(p,.0185,.2,b,m,0,"x");let g=(b,m)=>{let d=new i.Mesh(lt(b.map(_=>_.index?_.toNonIndexed():_),!1),m);d.castShadow=d.receiveShadow=!0,n.add(d)};return g(c,new i.MeshStandardMaterial({color:1316119,roughness:.5,metalness:.6})),g(l,new i.MeshStandardMaterial({color:12106944,roughness:.28,metalness:1})),g(h,new i.MeshStandardMaterial({color:3127316,roughness:.6,metalness:0})),g(p,new i.MeshStandardMaterial({color:14277074,roughness:.9,metalness:0})),n}var Ut={guantone:xd,ring:vd,sacco:yd,kettlebell:Sd,anelli:wd,manubri:Ad,pavimento:Td,neon:Cd,trofei:Pd,gong:Nd,rack:Ud};var qh=(i,e,t)=>Math.min(t,Math.max(e,i)),oi=(i,e,t)=>i+(e-i)*t,qt=(i,e,t)=>{let n=qh((t-i)/(e-i),0,1);return n*n*(3-2*n)},Fd=[12,19.5,27],Od=[-1,-2.2,-1],Bd=new pe.Vector3(0,0,-.62),kd=2.9,Qr=[[27,-1.2,1.2],[27.34,-1.34,-.3]],ea=[{id:"hero",sel:null,pos:[.82,1.53,1.72],tgt:[0,1.45,.25],fov:30,sx:.72,sy:0,vis:1,p:{pos:[.75,1.55,1.75],fov:36,sx:0,sy:.1}},{id:"carica",sel:"#home",at:1,pos:[1.95,1.5,.45],tgt:[0,1.42,.1],fov:32,sx:.05,sy:0,vis:1,p:{pos:[1.5,1.57,-1.15],tgt:[-.05,1.42,.15],fov:48,sx:0,sy:-.12}},{id:"pugno",sel:'.fx-win[data-fx="pugno"]',at:.5,pos:[1.9,1.5,-.15],tgt:[0,1.42,-.05],fov:34,sx:0,sy:0,vis:1,p:{pos:[1.45,1.56,-1.5],tgt:[0,1.42,-.1],fov:51,sx:-.6,sy:-.12}},{id:"trailer",sel:"#trailer",at:.5,pos:[3.6,2.3,4.8],tgt:[4.2,1.25,-1.6],fov:36,sx:0,sy:0,vis:.55,p:{fov:50}},{id:"ring",sel:'.fx-win[data-fx="ring"]',at:.5,pos:[6.6,3.3,5.3],tgt:[20,.9,-1.7],fov:36,sx:0,sy:.1,vis:1,p:{pos:[5.6,3.9,5.8],fov:54,sy:.05}},{id:"about",sel:"#about",at:.5,pos:[13.5,2.3,5.3],tgt:[21,1.1,-1.6],fov:36,sx:.3,sy:0,vis:.25,p:{fov:52,sx:0}},{id:"fitness",sel:'.fx-win[data-fx="fitness"]',at:.5,pos:[33.5,.95,3.7],tgt:[35.3,1,-.8],fov:42,sx:0,sy:.12,vis:1,p:{pos:[33.6,1.05,4.7],tgt:[35,1.05,-.8],fov:62,sy:.1}},{id:"corsi",sel:"#corsi",at:.5,pos:[33.2,1.3,2],tgt:[34.6,1.3,-1.4],fov:36,sx:0,sy:0,vis:.28,p:{fov:50}},{id:"porta",sel:'.fx-win[data-fx="porta"]',at:.22,pos:[33.9,1.5,1.45],tgt:[39,1.3,1.18],fov:40,sx:0,sy:-.12,vis:1,p:{pos:[33.7,1.55,1.4],fov:58,sy:-.06}},{id:"ingressi",sel:'.fx-win[data-fx="porta"]',at:.8,pos:[40.7,1.6,.7],tgt:[40.7,1.45,-7.6],fov:40,sx:0,sy:0,vis:1,p:{fov:60}},{id:"quiz",sel:"#quiz",at:.5,pos:[40.7,1.6,-.5],tgt:[40.7,1.45,-7.6],fov:40,sx:0,sy:0,vis:.3,p:{fov:60}},{id:"recensione",sel:'.fx-win[data-fx="recensione"]',at:.5,pos:[40.2,1.68,-2],tgt:[42.4,1.72,-2.65],fov:44,sx:0,sy:-.03,vis:1,p:{pos:[39.55,1.7,-2.45],tgt:[42.4,1.72,-2.6],fov:60}},{id:"reviews",sel:"#reviews",at:.5,pos:[40.5,1.7,-3.2],tgt:[42.4,1.6,-4.4],fov:40,sx:0,sy:0,vis:.2,p:{fov:58}},{id:"tabellone",sel:'.fx-win[data-fx="tabellone"]',at:.5,pos:[41.95,1.7,-4.3],tgt:[39,1.72,-4.62],fov:46,sx:0,sy:-.03,vis:1,p:{pos:[41.95,1.72,-4.5],tgt:[39,1.72,-4.6],fov:62}},{id:"orari",sel:"#orari",at:.5,pos:[41.5,1.7,-4.9],tgt:[39,1.6,-5.6],fov:40,sx:0,sy:0,vis:.2,p:{fov:58}},{id:"cornici",sel:'.fx-win[data-fx="cornici"]',at:.5,pos:[39.6,1.62,-5.3],tgt:[42.4,1.6,-5.75],fov:56,sx:0,sy:-.02,vis:1,p:{pos:[39.45,1.62,-5.2],tgt:[42.4,1.6,-5.6],fov:64}},{id:"famiglia",sel:"#famiglia",at:.5,pos:[39.9,1.7,-6.2],tgt:[42.4,1.5,-6.4],fov:44,sx:0,sy:0,vis:.2,p:{fov:60}},{id:"sale",pos:[40.3,5.2,-3],tgt:[35,.8,-2.5],fov:40,sx:0,sy:0,vis:.3,p:{fov:54}},{id:"gallery",sel:"#gallery",at:.5,pos:[35.6,6,6.8],tgt:[24,.5,-1.5],fov:40,sx:0,sy:0,vis:.3,p:{fov:56}},{id:"campioni",sel:'.fx-win[data-fx="campioni"]',at:.5,pos:[27.45,1.72,-.5],tgt:[29.15,1.36,1.15],fov:42,sx:0,sy:0,vis:1,p:{pos:[27.3,1.78,-.65],fov:56}},{id:"risultati",sel:"#risultati",at:.5,pos:[27.4,1.95,-.5],tgt:[29.2,1.5,1.2],fov:40,sx:0,sy:0,vis:.2,p:{fov:54}},{id:"esce",pos:[29.2,2.7,2],tgt:[29.3,1.1,3.1],fov:40,sx:0,sy:0,vis:.6,p:{fov:54}},{id:"gong",sel:'.fx-win[data-fx="gong"]',at:.5,pos:[29.75,1.5,5.85],tgt:[29.3,1.15,3],fov:40,sx:0,sy:-.02,vis:1,p:{pos:[29.6,1.55,6.3],fov:56}},{id:"giochi",sel:"#giochi",at:.5,pos:[30.6,1.7,5.4],tgt:[29,1.2,2.6],fov:38,sx:0,sy:0,vis:.2,p:{fov:54}},{id:"faq",sel:"#faq",at:.5,pos:[29.8,3.1,4.9],tgt:[27,1.6,-1],fov:38,sx:0,sy:0,vis:.14,p:{fov:52}},{id:"scavalca",pos:[28.1,2.15,.7],tgt:[27.1,1.2,-1.1],fov:37,sx:0,sy:.08,vis:.6,p:{fov:50}},{id:"finale",sel:'.fx-win[data-fx="finale"]',at:.5,pos:[27.78,1.5,-.08],tgt:[27.14,.99,-1.26],fov:34,sx:0,sy:.2,vis:1,p:{pos:[27.98,1.72,.3],fov:48,sy:.1}},{id:"prova",sel:"#prova",at:.5,pos:[27.6,1.3,-.4],tgt:[27.14,1,-1.26],fov:36,sx:0,sy:0,vis:.1,p:{fov:50}},{id:"contatti",sel:"#contatti",at:.5,pos:[19.5,13,9.5],tgt:[19.5,0,-1.5],fov:42,sx:0,sy:0,vis:.28,p:{pos:[19.5,20,13],fov:58}}],$t=Object.fromEntries(ea.map((i,e)=>[i.id,e])),$v=-.3,e_=.3,$r=1.9,t_=[{fx:"pugno",before:"#trailer",cap:""},{fx:"ring",before:"#about",cap:"550 mq <b>e 3 ring</b>"},{fx:"fitness",before:"#corsi",cap:"Sala pesi, functional, <b>calisthenics</b>"},{fx:"porta",before:"#quiz",cap:""},{fx:"recensione",before:"#reviews",cap:"",short:1},{fx:"tabellone",before:"#orari",cap:"",short:1},{fx:"cornici",before:"#famiglia",cap:"",short:1},{fx:"campioni",before:"#risultati",cap:"",short:1},{fx:"gong",before:"#giochi",cap:"",short:1},{fx:"finale",before:"#prova",cap:"Il ring <b>ti aspetta</b>"}];function n_(){let i=null,e=0;for(let n of document.querySelectorAll("main > section")){let s=n.getBoundingClientRect();if(s.top<=1&&s.bottom>1){i=n,e=s.top;break}}let t=[];for(let n of t_){let s=document.querySelector(n.before);if(!s)continue;let r=document.createElement("div");r.className="fx-win"+(n.short?" fx-s":""),r.dataset.fx=n.fx,r.setAttribute("aria-hidden","true"),n.cap&&(r.innerHTML='<p class="fx-cap">'+n.cap+"</p>"),s.parentNode.insertBefore(r,s),t.push(r)}if(location.hash&&location.hash.length>1){let n=null;try{n=document.querySelector(location.hash)}catch{}n&&n.scrollIntoView()}else if(i){let n=i.getBoundingClientRect().top-e;Math.abs(n)>1&&window.scrollBy({top:n,behavior:"instant"})}return t}function Wo(i,e=128){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),s=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);i.forEach(([a,o])=>s.addColorStop(a,o)),n.fillStyle=s,n.fillRect(0,0,e,e);let r=new pe.CanvasTexture(t);return r.colorSpace=pe.SRGBColorSpace,r}async function i_(i){let e=new AbortController,t,n=async(h,u=i?"lo":"hi")=>{try{let p=new URL("../models/"+h+"_"+u+".glb",import.meta.url),g=await fetch(p,{signal:e.signal});if(!g.ok)throw new Error("modello non trovato");let b;return b=await g.arrayBuffer(),(await new Fo().setMeshoptDecoder(sd).parseAsync(b,"")).scene}catch{return null}},s=new Promise(h=>{t=setTimeout(()=>{e.abort(),h(null)},i?4e3:6e3)}),r=[n("guantone"),n("ring_top"),n("sacco"),i?null:n("sacco","lo")],[a,o,c,l]=await Promise.all(r.map(h=>Promise.race([h,s])));return clearTimeout(t),{glove:a,ring:o,bag:c,bagLow:l}}var On=()=>window.scheduler&&window.scheduler.yield?window.scheduler.yield():new Promise(i=>setTimeout(i,0));async function s_(i,e,t,n={}){let s={},r=[],a=(I,E)=>{i.environment&&(I.envMap=i.environment,I.envMapIntensity=E,I.needsUpdate=!0)},o={bags:new pe.Group,rings:new pe.Group,fit:new pe.Group};i.add(o.bags,o.rings,o.fit),s.Z=o;let c=(I,E,U,V,G,$=0)=>(E.position.set(U,V,G),E.rotation.y=$,I.add(E),E),l=I=>(I.userData&&I.userData.update&&r.push(I.userData.update),I),h=I=>I<8?o.bags:I<30.5?o.rings:o.fit;c(i,Ut.pavimento(pe,{lod:e,gridOpacity:.045}),20,0,0).traverse(I=>{I.isMesh&&I.material&&"envMapIntensity"in I.material&&(I.material.envMapIntensity=.08,I.material.roughnessMap=null,I.material.roughness=1,I.material.needsUpdate=!0)});let f=Wo([[0,"rgba(0,0,0,.9)"],[.55,"rgba(0,0,0,.35)"],[1,"rgba(0,0,0,0)"]]),p=new pe.PlaneGeometry(1,1),g=(I,E,U,V,G,$,Y=.8)=>{let te=new pe.Mesh(p,new pe.MeshBasicMaterial({map:f,transparent:!0,opacity:Y,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));return te.rotation.x=-Math.PI/2,te.position.set(E,U+.004,V),te.scale.set(G,$,1),te.renderOrder=2,I.add(te),te};await On();let b=new pe.Mesh(new pe.PlaneGeometry(90,9),new pe.MeshStandardMaterial({color:461064,roughness:.92}));b.position.set(20,4.5,-8.5),b.receiveShadow=!0,i.add(b);let m=Ut.neon(pe,{length:3.6}),d=Ut.neon(pe,{length:2.2});for(let I=-6;I<=46;I+=6.5)c(h(I),m.clone(),I,3.4,-8.42);for(let I of[-9.2,8.2,23.2,38.5]){let E=d.clone();E.rotation.z=Math.PI/2,c(h(I),E,I,1.9,-8.42)}await On(),s.bagPivot=new pe.Group,s.bagPivot.position.set(Bd.x,kd,Bd.z),o.bags.add(s.bagPivot);let _=l(Ut.sacco(pe,{lod:e,model:n.bag}));_.position.set(0,-kd,0),s.bagPivot.add(_),_.traverse(I=>{I.isMesh&&I.material.map&&I.material.clearcoat!==void 0&&a(I.material,1.4)});let v=n.bag&&t?_:Ut.sacco(pe,{lod:"low",model:n.bagLow||null});[[-4.6,-3.3],[-2.9,-2.9],[-1.4,-3.5],[1.7,-3.1],[3.3,-3.6],[4.9,-2.8],[-3.7,-5.6],[.4,-5.9],[3.9,-5.7]].forEach(([I,E],U)=>c(o.bags,v.clone(),I,0,E,U*1.3)),await On();let x;if(n.glove){let I=n.glove;I.quaternion.setFromRotationMatrix(new pe.Matrix4().makeBasis(new pe.Vector3(-1,0,0),new pe.Vector3(0,0,1),new pe.Vector3(0,1,0))),I.scale.setScalar(.082),I.traverse(E=>{E.isMesh&&(E.castShadow=!0,E.receiveShadow=!0,E.material.name==="parte_de_adentro"&&(E.material.color.set(263172),E.material.roughness=1))}),x=E=>{let U=new pe.Group;return U.add(I.clone()),E&&(U.scale.x=-1),U}}else{let I=Ut.guantone(pe,{lod:e});x=E=>{let U=I.clone();return E||(U.scale.x=-1),U}}s.glove=new pe.Group,s.glove.add(x(!0)),s.glove.scale.setScalar(1.2),o.bags.add(s.glove);let A=Wo([[0,"rgba(230,235,228,.55)"],[.5,"rgba(200,210,198,.18)"],[1,"rgba(200,210,198,0)"]],64);s.puff=Array.from({length:t?6:10},(I,E)=>{let U=new pe.Sprite(new pe.SpriteMaterial({map:A,transparent:!0,opacity:0,depthWrite:!1})),V=E*2.399;return U.userData.d=new pe.Vector3(Math.cos(V)*.9,Math.sin(V)*.9+.15,.25+E%3*.2),U.visible=!1,o.bags.add(U),U}),await On();let S=[];s.later=S,S.push(()=>{let I=Ut.ring(pe,{lod:e,model:n.ring});return s.rings=Fd.map((E,U)=>c(o.rings,U?I.clone():I,E,0,Od[U],U===1?Math.PI/2:0)),o.rings}),await On();let T=I=>(I.traverse(E=>{E.isMesh&&E.material&&E.material.emissiveIntensity&&(E.material.emissiveIntensity=0)}),I);[[3800852,33.75,.95,1],[14277081,34.2,.72,.9],[3800852,34.62,.9,1.08],[1710618,35,.6,.95]].forEach(([I,E,U,V],G)=>S.push(()=>(c(o.fit,T(Ut.kettlebell(pe,{color:I,lod:e})),E,0,U,G*.7+.3).scale.setScalar(V),g(o.fit,E,0,U,.42*V,.42*V),G===3?o.fit:null))),S.push(()=>{c(o.fit,T(Ut.manubri(pe,{lod:e})),35.3,0,.1,.5),g(o.fit,35.3,0,.1,.9,.6,.7)}),S.push(()=>{let I=l(Ut.anelli(pe,{lod:e}));c(o.fit,I,34.25,-.45,-1.2,-.2),c(o.fit,I.clone(),35.7,-.3,-2,.25)}),S.push(()=>{Ut.rack&&(c(o.fit,Ut.rack(pe,{lod:e}),37.2,0,-1.55,-.18),g(o.fit,37.2,0,-1.55,3.2,1.3,.6));let I=new pe.Mesh(new pe.BoxGeometry(8,3.4,.12),new pe.MeshStandardMaterial({color:790029,roughness:.75}));I.position.set(34.6,1.7,-3.3),I.receiveShadow=!0,o.fit.add(I),c(o.fit,m.clone(),34.9,2.75,-3.22);{let E=d.clone();E.rotation.z=Math.PI/2,c(o.fit,E,31.9,1.5,-3.22)}return o.fit}),await On(),s.story={load(){},setLit(){}},o.cor=new pe.Group,i.add(o.cor),S.push(()=>{let I=cd({mobile:t,softTex:Wo});return o.cor.add(I.group),s.story=I,o.cor}),await On(),Ut.trofei&&S.push(()=>{let I=Ut.trofei(pe,{lod:e});return c(o.rings,I,Fd[2]+2.42,.9,Od[2]+2.42),s.trofei=I,I.traverse(E=>{E.isMesh&&E.material.metalness>.5&&(a(E.material,t?.3:.55),t&&(E.material.roughness=Math.max(E.material.roughness,.5)))}),I.userData.update&&r.push(E=>{s.u>$t.sale&&s.u<$t.esce+1&&I.userData.update(E)}),I}),Ut.gong&&S.push(()=>{let I=l(Ut.gong(pe,{lod:e}));return c(o.rings,I,29.3,0,3),I.userData.redrawDisplay&&document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>I.userData.redrawDisplay()),g(o.rings,29.3,0,3,1.1,.9,.7),I}),t||(s.tspot=new pe.SpotLight(16774364,0,7,.36,.8,1.4),s.tspot.position.set(27.9,4.4,-.1),s.tspot.target.position.set(29,1.15,1),i.add(s.tspot,s.tspot.target)),await On();let C=.9;s.pair=Qr.map(([I,E,U],V)=>{let G=new pe.Group;return G.add(x(V===0)),G.position.set(I,C+.074,E),G.rotation.set(0,U,V?.06:-.04),o.rings.add(G),g(o.rings,I,C,E,.5,.42,.85),G});let M=[(Qr[0][0]+Qr[1][0])/2,(Qr[0][1]+Qr[1][1])/2];s.spot=new pe.SpotLight(15925232,22,14,.2,1,1.6),s.spot.position.set(M[0]-.1,6.4,M[1]+.3),s.spot.target.position.set(M[0],C,M[1]),i.add(s.spot,s.spot.target),t||(s.spot.castShadow=!0,s.spot.shadow.mapSize.set(1024,1024),s.spot.shadow.bias=-6e-4,s.spot.shadow.camera.near=2,s.spot.shadow.camera.far=9,s.spot.shadow.autoUpdate=!1);let y=(()=>{let I=document.createElement("canvas");I.width=4,I.height=128;let E=I.getContext("2d"),U=E.createLinearGradient(0,0,0,128);return U.addColorStop(0,"rgba(255,255,255,.75)"),U.addColorStop(1,"rgba(255,255,255,0)"),E.fillStyle=U,E.fillRect(0,0,4,128),new pe.CanvasTexture(I)})();if(s.cone=new pe.Mesh(new pe.ConeGeometry(1.25,5.5,40,1,!0),new pe.MeshBasicMaterial({map:y,color:12582832,transparent:!0,opacity:.1,depthWrite:!1,side:pe.DoubleSide,blending:pe.AdditiveBlending})),s.cone.position.set(M[0],C+2.75,M[1]),o.rings.add(s.cone),!t){let E=new Float32Array(420),U=7,V=()=>(U=U*16807%2147483647)/2147483647;for(let $=0;$<140;$++){let Y=V(),te=Math.sqrt(V())*1.15*(.12+.88*Y),ee=V()*6.2832;E[$*3]=Math.cos(ee)*te,E[$*3+1]=2.6-Y*2.55,E[$*3+2]=Math.sin(ee)*te}let G=new pe.BufferGeometry;G.setAttribute("position",new pe.BufferAttribute(E,3)),s.dust=new pe.Points(G,new pe.PointsMaterial({map:Wo([[0,"rgba(255,255,255,1)"],[1,"rgba(255,255,255,0)"]],32),color:14221264,size:.007,transparent:!0,opacity:0,depthWrite:!1,blending:pe.AdditiveBlending})),s.dust.position.set(M[0],C,M[1]),o.rings.add(s.dust)}if(await On(),!t){let I=new pe.PointLight(Zi,6,9,1.8);I.position.set(-1.6,2.4,-2.2),i.add(I);let E=new pe.PointLight(Zi,6,9,1.8);E.position.set(35.6,2.3,-2.4),i.add(E)}let N=new pe.SpotLight(16777215,14,2.45,.4,.9,1.2);return N.position.set(1,2.1,1.6),N.target.position.set(0,1.45,.15),i.add(N,N.target),s.tick=r,s}async function r_(){if(matchMedia("(prefers-reduced-motion: reduce)").matches||navigator.connection&&navigator.connection.saveData)return;let i=/[?&]fxforce/.test(location.search);try{if(!i&&sessionStorage.getItem("fxoff"))return}catch{}let e=matchMedia("(max-width: 900px), (hover: none)").matches,t=document.documentElement,n=document.createElement("canvas");n.className="fx-world",n.setAttribute("aria-hidden","true");let s,r=[],a=!1,o=()=>{a=!0;let F=null,O=0;try{for(let X of document.querySelectorAll("section,footer")){if(X.classList.contains("fx-win"))continue;let D=X.getBoundingClientRect();if(D.bottom>80){F=X,O=D.top;break}}}catch{}t.classList.remove("fx-on","fx-m","cv-all"),r.forEach(X=>X.remove()),n.remove();try{if(F){let X=F.getBoundingClientRect().top-O;Math.abs(X)>1&&window.scrollBy({top:X,behavior:"instant"})}}catch{}window.ScrollTrigger&&window.ScrollTrigger.refresh();try{s.dispose(),s.forceContextLoss()}catch{}};try{s=ld(n,{mobile:e,strict:!i}),s.info.autoReset=!1}catch{return}let c=await i_(e);window.__fxModels={guantone:!!c.glove,ring:!!c.ring,sacco:!!c.bag},window.__fxGlove=c.glove?"glb":"codice";let l,h,u,f,p=null,g=null,b=async F=>{try{s.setRenderTarget(p?p.readBuffer:null);let O=s.compileAsync(F,f,l);s.setRenderTarget(null),await Promise.race([O,new Promise(X=>setTimeout(X,2500))])}catch{try{s.setRenderTarget(null)}catch{}}};try{if(l=new pe.Scene,l.background=new pe.Color(197892),h=hd(l,s,{mobile:e,floor:!1}),h.key.intensity=1.7,l.environmentIntensity=.75,e?l.remove(h.rim):h.rim.intensity=.4,u=await s_(l,e?"low":"high",e,c),i&&(window.__fxKeys=ea.map(F=>[F.sel||null,F.at==null?.5:F.at,F.id])),i&&(window.__fxDbg=()=>{let F=O=>{let X=new pe.Box3().setFromObject(O);return[X.min.toArray().map(D=>+D.toFixed(3)),X.max.toArray().map(D=>+D.toFixed(3))]};return{glove:F(u.glove),gpos:u.glove.position.toArray(),bag:F(u.bagPivot.children[0].children[0]),rot:u.bagPivot.rotation.x}}),f=new pe.PerspectiveCamera(36,1,.1,140),!e){let F=new pe.WebGLRenderTarget(2,2,{type:pe.HalfFloatType,samples:4});p=new Do(s,F),p.addPass(new No(l,f)),g=new Ks(new pe.Vector2(256,256),.4,.5,1.6),p.addPass(g),p.addPass(new Uo)}await b(l)}catch(F){console.error(F);try{s.dispose(),s.forceContextLoss()}catch{}return}document.body.appendChild(n),t.classList.add("fx-on","cv-all"),e&&t.classList.add("fx-m"),r=n_(),window.ScrollTrigger&&window.ScrollTrigger.refresh&&requestAnimationFrame(()=>window.ScrollTrigger.refresh());let m=!1,d=0,_=!1;n.addEventListener("webglcontextlost",F=>{F.preventDefault(),m=!0,d=performance.now(),n.style.opacity="0"}),n.addEventListener("webglcontextrestored",()=>{m=!1,ue=0});let v=!1,x=0,A=0,S=!0;function T(){let F=n.clientWidth,O=n.clientHeight;F===x&&O===A||(x=F,A=O,v=x/A<.85,s.setSize(x,A,!1),f.aspect=x/A,S=!0,p&&(p.setPixelRatio(s.getPixelRatio()),p.setSize(x,A)))}let C,M,y;function N(){y=ea.map(F=>Object.assign({},F,v&&F.p?F.p:{})),C=new pe.CatmullRomCurve3(y.map(F=>new pe.Vector3(...F.pos)),!1,"centripetal"),M=new pe.CatmullRomCurve3(y.map(F=>new pe.Vector3(...F.tgt)),!1,"centripetal")}let I=document.getElementById("home"),E=[],U=null,V=1;function G(){S=!1,U!==v&&(U=v,N());let F=window.innerHeight,O=window.scrollY;V=I?I.offsetHeight:F;let X=ea.map(D=>{if(D.sel===null)return 0;if(!D.sel)return NaN;let k=document.querySelector(D.sel);if(!k)return NaN;let B=k.getBoundingClientRect();return Math.max(0,B.top+O+B.height*D.at-F/2)});for(let D=0;D<X.length;D++)if(isNaN(X[D])){let k=D-1,B=D+1;for(;B<X.length&&isNaN(X[B]);)B++;X[D]=B<X.length?oi(X[k],X[B],1/(B-k)):X[k]+1}for(let D=1;D<X.length;D++)X[D]<=X[D-1]&&(X[D]=X[D-1]+1);E=X}function $(F){if(F<=E[0])return 0;for(let O=1;O<E.length;O++)if(F<=E[O])return O-1+(F-E[O-1])/(E[O]-E[O-1]);return E.length-1}let Y=0;new ResizeObserver(()=>{clearTimeout(Y),Y=setTimeout(()=>{S=!0},150)}).observe(document.body),window.addEventListener("resize",T);let te={x:0,y:0,tx:0,ty:0};e||window.addEventListener("pointermove",F=>{te.tx=F.clientX/innerWidth*2-1,te.ty=F.clientY/innerHeight*2-1},{passive:!0}),document.addEventListener("visibilitychange",()=>{Re=performance.now()});let ee=0,Re=performance.now(),ue=0,ae=0,j=-1,J=0,fe=-1,q=-1,ne={a:0,v:0},ge=0,Te=0,xe=9,Z=0,K=new pe.Vector3,R=new pe.Vector3,ye=new pe.Vector3,le=ea.length-1,ie={u:0,vis:0,calls:0,tris:0};window.__fx=ie;let ce=(F,O,X)=>oi(y[X][F],y[Math.min(le,X+1)][F],O),we=$t.finale,de={n:0,s:0,lvl:0,bad:0,t0:0};function P(F){if(a)return;requestAnimationFrame(P);let O=F-Re,X=Math.max(0,Math.min(.05,O/1e3));Re=F;let D=F/1e3;if(ae++,document.hidden)return;if(m){F-d>4e3&&o();return}S&&G();let k=window.scrollY;if(J=k===j?J+X:0,k!==j&&I&&k<V*1.2){let Pt=+qt(.1,.45,k/V).toFixed(2);if(Pt!==fe&&(fe=Pt,I.style.setProperty("--fxo",Pt)),e){let wn=+qt(0,.3,k/V).toFixed(2);wn!==q&&(q=wn,I.style.setProperty("--fxh",wn))}}j=k;let B=window.FX_U!=null,H=B?window.FX_U:$(k);if(B&&(ue=1,n.style.opacity="1",window.__fxDone===H))return;ee+=(H-ee)*(1-Math.exp(-X*(B?60:5.5)));let Me=Math.max(0,Math.min(le-1,Math.floor(ee))),oe=qt(0,1,ee-Me),be=ce("vis",oe,Me);ue<1&&(ue=Math.min(1,ue+X*1.6),n.style.opacity=ue.toFixed(3));let Le=Math.abs(ee-H)<.002&&J>1.2;if(Le&&!B&&ae%(be<.35?4:e?2:1))return;if(s.info.reset(),!Le&&!B&&O<1e3){if(de.n++,O>(de.lvl?50:e?36:34)&&de.s++,de.lvl===0&&de.n>=40)de.s>de.n/2&&(de.lvl=1,de.t0=F,window.__fxGov=1,s.getPixelRatio()>1&&(s.setPixelRatio(1),s.setSize(x,A,!1),p&&(p.setPixelRatio(1),p.setSize(x,A))),_=!0),de.n=0,de.s=0;else if(de.lvl===1&&de.n>=60&&(window.__fxBuilt&&F-de.t0>3e3&&(de.bad=de.s>de.n/2?de.bad+1:0),de.n=0,de.s=0,de.bad>=2)){window.__fxGov=2;try{sessionStorage.setItem("fxoff","1")}catch{}o();return}}u.Z.bags.visible=ee<4.7,u.Z.rings.visible=ee>2.7,u.u=ee,u.Z.fit.visible=ee>4.7&&ee<we+.4&&!(ee>$t.campioni-.5&&ee<$t.esce),u.Z.cor.visible=ee>$t.fitness-.6&&ee<$t.campioni-.15,ee>$t.fitness-.6&&u.story.load(),u.story.setLit(qt($t.cornici-.45,$t.famiglia-.15,ee)),u.tspot&&(u.tspot.intensity=40*qt($t.gallery+.3,$t.campioni-.1,ee)*(1-qt($t.risultati+.2,$t.esce+.3,ee)));let Ce=qt(.35,1.25,ee),Ie=qt(.7,1.45,ee),Ee=qt(1.45,$r,ee),Ae=qt(2.05,2.7,ee),Ue=qt($r-.1,$r,ee)*(1-qt(2.05,2.55,ee));Te<$r&&ee>=$r&&(ne.v+=.8,ge=1,xe=0,Z=1),Te=ee,ne.v+=(-28*ne.a-3*ne.v)*X,ne.a+=ne.v*X;let z=.03*Ue,Se=Math.max(z+ne.a*.16,z-.05*(1-Ue));u.bagPivot.rotation.x=Se,Z*=Math.exp(-X*7),u.bagPivot.scale.set(1+.04*Z,1,1-.08*Z);let Q=u.glove,me=1-Ce;Q.position.set(oi(0,.02,Ce),1.45+Math.sin(D*1.1)*.012*me-.03*Ce,oi(.3,.58,Ie)-.88*Ee*Ee+.38*Ae-(Se-z)*1.45*Ue),Q.rotation.order="YXZ",Q.rotation.set(oi(-1.25,0,Ce)+.22*Ie*(1-Ee),oi(3+Math.sin(D*.5)*.16,Math.PI,Ce)+$v*Ee,oi(.12,0,Ce)+e_*Ee),Q.scale.setScalar(1.2*(1-qt(2.3,2.85,ee))),ge*=Math.exp(-X*9),xe+=X;let De=xe/.45;for(let Pt of u.puff){if(De>=1){Pt.visible=!1;continue}Pt.visible=!0,Pt.position.set(0,1.42,-.4).addScaledVector(Pt.userData.d,.03+De*.3);let wn=.03+De*.13;Pt.scale.set(wn,wn,1),Pt.material.opacity=(1-De)*(1-De)*.6}for(let Pt of u.tick)Pt(D);C.getPoint(qh(ee/le,0,1),K),M.getPoint(qh(ee/le,0,1),R),te.x+=(te.tx-te.x)*.05,te.y+=(te.ty-te.y)*.05;let he=K.distanceTo(R);ye.subVectors(K,R).cross(f.up).normalize(),K.addScaledVector(ye,te.x*he*.035),K.y-=te.y*he*.02,K.x+=Math.sin(D*.31)*he*.006,K.y+=Math.sin(D*.23+1)*he*.004,ge>.01&&(K.x+=Math.sin(D*90)*.014*ge,K.y+=Math.cos(D*70)*.012*ge,K.addScaledVector(ye.subVectors(R,K).normalize(),.06*ge)),f.position.copy(K),f.lookAt(R),f.fov=ce("fov",oe,Me),f.updateProjectionMatrix(),f.projectionMatrix.elements[8]=-ce("sx",oe,Me),f.projectionMatrix.elements[9]=-ce("sy",oe,Me),f.projectionMatrixInverse.copy(f.projectionMatrix).invert();let Pe=qt(we-1.6,we-.3,ee)*(1-qt(we+1,we+2,ee));h.key.intensity=oi(1.7,.3,Pe),u.cone.material.opacity=.34*Pe,u.dust&&(u.dust.material.opacity=.5*Pe,u.dust.rotation.y=D*.03);let ze=he<4?3:he<9?7:14,Ke=h.key.shadow.camera;Ke.right!==ze&&(Ke.left=-ze,Ke.right=ze,Ke.top=ze,Ke.bottom=-ze,Ke.updateProjectionMatrix());let Ze=2*ze/2048,Rt=Math.round(R.x/Ze)*Ze,Yt=Math.round(R.z/Ze)*Ze;h.key.target.position.set(Rt,0,Yt),h.key.target.updateMatrixWorld(),h.key.position.set(Rt+4,9,Yt+6),u.spot.castShadow&&(u.spot.shadow.needsUpdate=Pe>.01),g&&(g.strength=oi(.4,.5,Pe)),p&&!_?p.render():s.render(l,f),ie.u=+ee.toFixed(2),ie.vis=+be.toFixed(2),ie.calls=s.info.render.calls,ie.tris=s.info.render.triangles,window.__fxDone=B&&Math.abs(ee-H)<.001?H:null}T(),requestAnimationFrame(P);let w=()=>new Promise(F=>window.requestIdleCallback?requestIdleCallback(()=>F(),{timeout:500}):setTimeout(F,80));for(let F of u.later){if(await w(),a)return;let O=null;try{O=F()}catch(X){console.error(X)}await On(),O&&await b(O)}window.__fxBuilt=!0}r_();export{r_ as start};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
