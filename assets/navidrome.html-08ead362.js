import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as i,a as s,b as n,d as e,e as c}from"./app-e609d013.js";const p={},r=s("p",null,"Navidrome 为开源自托管音乐服务器，提供音频流媒体服务。",-1),u=s("p",null,"鉴于 Roon 的定价较高且 Emby 和 Plex 主要针对视频，Navidrome 成为了一个免费的选择。它支持广泛的音频格式，如 MP3、FLAC、AAC 和 OGG 等，并能有效地为多个用户管理其音乐库，确保每位用户的体验互不冲突。",-1),d={href:"https://www.navidrome.org/docs/installation/docker/",target:"_blank",rel:"noopener noreferrer"},m=c(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">navidrome</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> deluan/navidrome<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> navidrome
    <span class="token comment">#user: 1000:1000 # should be owner of volumes #群晖应该是 1026:100 # 使用 \`id 用户名\` 可以查看代码</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;4533:4533&quot;</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token comment"># Optional: put your config options customization here. Examples:</span>
      <span class="token key atrule">ND_SCANSCHEDULE</span><span class="token punctuation">:</span> 1h
      <span class="token key atrule">ND_LOGLEVEL</span><span class="token punctuation">:</span> info  
      <span class="token key atrule">ND_SESSIONTIMEOUT</span><span class="token punctuation">:</span> 24h
      <span class="token key atrule">ND_BASEURL</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/volume1/docker/navidrome/data:/data&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/volume4/Music/Audio:/music:ro&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v={href:"https://www.cnblogs.com/vinlxc/p/11347744.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://aqzscn.cn/archives/stream-music-versions",target:"_blank",rel:"noopener noreferrer"},_=s("p",null,"然而，Navidrome 也有其局限性：它不支持显示多行歌词，搜索功能以专辑为单位，这使得直接搜索特定歌曲可能不会总是准确。另外，Windows 客户端不支持显示歌词功能。因此，我转向使用 Emby 来管理 PC 端音乐。然而，Emby 流媒体播放时偶尔会断播，与之对比，Navidrome 在音乐流播放方面更稳定，并且更适合用于移动端 API。",-1);function b(h,y){const a=o("ExternalLinkIcon");return l(),i("div",null,[r,u,s("p",null,[n("想要了解其他安装方法，你可以查看 "),s("a",d,[n("Navidrome 的官方教程"),e(a)]),n("。")]),m,s("p",null,[n("不过，Navidrome 并不提供歌词下载功能。如果你需要下载内置的歌词，可以通过 "),s("a",v,[n("MusicTag"),e(a)]),n(" 实现。")]),s("p",null,[n("对于播放器的选择，推荐使用国产的 "),s("a",k,[n("音流"),e(a)]),n(" 播放器。它当前正处于内测阶段，支持 iOS 和 Android 平台，能够显示下载的内置歌词。")]),_])}const N=t(p,[["render",b],["__file","navidrome.html.vue"]]);export{N as default};
