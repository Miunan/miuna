import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as a,c,a as e,b as t,d as o}from"./app-e609d013.js";const s={},_=e("p",null,"国内访问为主的话，域名建议备案后托管在国内厂商。之前试过 Cloudflare，光域名解析就用了 500 ms，换回阿里云后速度稳定许多。",-1),i=e("li",null,"DNS 迁移是在域名管理商处修改。比如我的域名是在阿里云购买，试过 DNS 迁移到 Cloudflare，之后再次迁移 DNS，需要回到阿里云操作。",-1),d=e("li",null,"如果阿里云的安全验证一直被卡住，可以换个浏览器，比如 Firefox。",-1),u={href:"https://help.aliyun.com/document_detail/29725.html?#h2-ns-7",target:"_blank",rel:"noopener noreferrer"},h={href:"https://help.aliyun.com/document_detail/121648.html",target:"_blank",rel:"noopener noreferrer"};function m(p,f){const l=r("ExternalLinkIcon");return a(),c("div",null,[_,e("ul",null,[i,d,e("li",null,[t("子域名可以使用 "),e("a",u,[t("NS 记录"),o(l)]),t("，托管到其他域名服务商。但 Cloudflare 不支持单独子域名托管。")])]),e("p",null,[t("域名 DNS 服务器修改（阿里云）："),e("a",h,[t("https://help.aliyun.com/document_detail/121648.html"),o(l)])])])}const S=n(s,[["render",m],["__file","DNS.html.vue"]]);export{S as default};
