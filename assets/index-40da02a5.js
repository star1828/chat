import{aW as u}from"./index-00aefa61.js";function P({url:n,data:o,method:c,headers:r,onDownloadProgress:a,signal:p,beforeRequest:s,afterRequest:i}){const g=t=>t.data.status==="Success"||typeof t.data=="string"?t.data:Promise.reject(t.data),f=t=>{throw i==null||i(),new Error((t==null?void 0:t.message)||"Error")};s==null||s(),c=c||"GET";const h=Object.assign(typeof o=="function"?o():o??{},{});return c==="GET"?u.get(n,{params:h,signal:p,onDownloadProgress:a}).then(g,f):u.post(n,h,{headers:r,signal:p,onDownloadProgress:a}).then(g,f)}function l({url:n,data:o,method:c="POST",headers:r,onDownloadProgress:a,signal:p,beforeRequest:s,afterRequest:i}){return P({url:n,method:c,data:o,headers:r,onDownloadProgress:a,signal:p,beforeRequest:s,afterRequest:i})}function E(){return l({url:"/config"})}function w(n){return l({url:"/chat-process",data:{prompt:n.prompt,options:n.options},signal:n.signal,onDownloadProgress:n.onDownloadProgress})}export{E as a,w as f};