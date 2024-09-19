import{S as l,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u="https://pixabay.com/api/",f="46069437-f48122ef32c6bd1c27031b929";function m(s){const t=`${u}?key=${f}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(t).then(o=>{if(!o.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return o.json()})}const d=new l(".gallery a",{captionsData:"alt",captionDelay:200});function p({webformatURL:s,largeImageURL:t,tags:o,likes:n,views:e,comments:r,downloads:i}){return`
    <div class="card">
      <div class="card-image">
        <a href="${t}" class="gallery-item-link">
          <img src="${s}" alt="${o}" />
        </a>
      </div>
      <div class="card-body">
        <p class="card-text">Likes ${n}</p>
        <p class="card-text">Views ${e}</p>
        <p class="card-text">Comments ${r}</p>
        <p class="card-text">Downloads ${i}</p>
      </div>
    </div>`}function y(s,t){const o=s.map(p).join("");t.innerHTML=o,d.refresh()}const a={form:document.querySelector(".form"),gallery:document.querySelector(".gallery")};a.form.addEventListener("submit",g);function g(s){s.preventDefault();const t=s.currentTarget.elements.query.value.trim();if(t===""){c.show({title:"Oops",message:"Sorry, there are no images matching your search query. Please try again!",color:"#ef4040",position:"bottomCenter"});return}a.gallery.innerHTML="",m(t).then(o=>{o.hits.length===0?c.show({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",color:"#ef4040",position:"bottomCenter"}):y(o.hits,a.gallery)}).catch(o=>{c.show({title:"Error",message:"Something went wrong. Please try again later.",color:"#ef4040",position:"bottomCenter"})}).finally(()=>{a.form.reset()})}
//# sourceMappingURL=index.js.map
