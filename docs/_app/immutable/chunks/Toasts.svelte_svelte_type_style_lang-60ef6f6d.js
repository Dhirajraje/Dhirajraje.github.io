import{w as n}from"./index-6c61b173.js";const e=n([]);function l(t,o="info",a=5e3){const r=new Date().valueOf()+t;return e.update(s=>[{id:r,msg:t,type:o,removeAfter:a},...s]),setTimeout(()=>{i(r)},a),r}function i(t){e.update(o=>o.filter(a=>a.id!==t))}export{l as a,i as r,e as t};