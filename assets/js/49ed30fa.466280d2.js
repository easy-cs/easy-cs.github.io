"use strict";(self.webpackChunk_MSCS_=self.webpackChunk_MSCS_||[]).push([[7],{6024:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"tutorial-basics/stanford msee","title":"stanford msee","description":"Stanford \u662fCS\u56db\u5927\u2705\uff0c\u5e76\u4e14\u7efc\u6392top ,\u5730\u5904\u52a0\u5dde\uff0c\u8fd1\u6c34\u697c\u53f0\u5148\u5f97\u6708\uff0c\u627e\u5de5\u4f5c\u5f88\u65b9\u4fbf\u3002","source":"@site/docs/tutorial-basics/stanford msee.md","sourceDirName":"tutorial-basics","slug":"/tutorial-basics/stanford msee","permalink":"/docs/tutorial-basics/stanford msee","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/stanford msee.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"\u9879\u76ee\u4ecb\u7ecd","permalink":"/docs/category/\u9879\u76ee\u4ecb\u7ecd"},"next":{"title":"ut austin ece(ses)","permalink":"/docs/tutorial-basics/ut ece"}}');var r=n(4848),a=n(8453);const i={sidebar_position:1},o="stanford msee",c={},d=[];function l(e){const s={br:"br",code:"code",h1:"h1",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"stanford-msee",children:"stanford msee"})}),"\n",(0,r.jsx)(s.h1,{id:"\u9879\u76ee\u4ecb\u7ecd",children:"\u9879\u76ee\u4ecb\u7ecd"}),"\n",(0,r.jsxs)(s.p,{children:["Stanford \u662fCS\u56db\u5927",(0,r.jsx)(s.code,{children:"\u2705"}),"\uff0c\u5e76\u4e14\u7efc\u6392top ,\u5730\u5904\u52a0\u5dde\uff0c\u8fd1\u6c34\u697c\u53f0\u5148\u5f97\u6708\uff0c\u627e\u5de5\u4f5c\u5f88\u65b9\u4fbf\u3002",(0,r.jsx)(s.br,{}),"\n","\u5f53TA\u7684\u8bdd\u53ef\u4ee5\u514d\u5b66\u8d39\u5e76\u4e14\u6bcf\u4e2a\u6708\u7ed93k\u5200\u5de5\u8d44\uff0ctrack\u9009\u62e9\u5f88\u81ea\u7531\uff0c\u53ef\u4ee5\u9009\u6210\u5168\u8f6f\u7684\u8bfe\u8868\uff0c\u6bd4\u5982CS229\u6216\u8005CS 245 Database Systems Principles\uff0c\u7533\u8bf7\u7684\u65f6\u5019\u4f1a\u53d1\u4e00\u4e2a\u95ee\u5377\u586btrack\uff0c\u6709machine learning\u3001software system\uff0carchitecutre\u7b49\u7b49track\u3002",(0,r.jsx)(s.br,{}),"\n","\u5f55\u53d6\u4f53\u611f\uff0c\u9646\u672c\u6e05\u5317\u590d\u4ea4\u6d59\u6bcf\u4e2a\u5b66\u6821\u62db\u6536\u4eba\u6570\u6700\u591a\u4e24\u4eba\u3002\u7533\u8bf7stanford\u5fc5\u987b\u4ea4\u6258\u798f\uff0c\u6258\u798f\u4e0d\u5230109\u9700\u8981\u4e0a\u8bed\u8a00\u73ed\uff0c\u4e0d\u63a5\u53d7\u96c5\u601d",(0,r.jsx)(s.code,{children:"\ud83c\ude1a\ufe0f"}),"\u3002\u5982\u679c\u662f\u4e2d\u5916\u5408\u529e\u53ef\u4ee5\u7533\u8bf7\u8c41\u514d\u8bed\u8a00\u6210\u7ee9\u3002"]}),"\n",(0,r.jsx)(s.p,{children:"\u4e2d\u5916\u5408\u529e\u53ef\u4ee5waive\u8bed\u8a00\u8981\u6c42\u3002\u76f8\u6bd4mscs\u5f55\u53d6\u66f4\u53cb\u597d\u3002"}),"\n",(0,r.jsx)(s.h1,{id:"\u5f55\u53d6bar",children:"\u5f55\u53d6bar"}),"\n",(0,r.jsx)(s.p,{children:"\u8fd9\u4e2a\u9879\u76ee\u5e94\u8be5\u7b97\u662f\u9646\u672c\u7533\u8bf7\u7f8e\u56fdMSCS\u4e13\u4e1a\u7684\u4e0a\u9650\u4e86\uff0c\u57fa\u672c\u5c5e\u4e8e\u6bcf\u4e00\u4e2a\u7533\u8bf7\u8005\u7684\u62bd\u5956\u6821\u3002\u6bcf\u5e74\u7533\u8bf7\u8005\u4f17\u591a\uff0c\u5f55\u53d6\u8005\u6781\u5c11\uff0c\u5f55\u53d6Stanford\u8bb2\u7f18\u5206\u3002\u8ba4\u8bc6\u7684\u7533\u8bf7\u6210\u529f\u7684\u540c\u5b66\u5927\u4f53\u6ee1\u8db3\u5982\u4e0b\u7279\u5f81\uff08\u8d34\u4e00\u4e2a\u6211post\u5230Open cs\u4e0a\u7684\u63cf\u8ff0\uff09\uff1a"}),"\n",(0,r.jsx)(s.h1,{id:"\u4ee3\u8868\u6027dp",children:"\u4ee3\u8868\u6027dp"}),"\n",(0,r.jsx)(s.p,{children:"\u5317\u5927\u672c\u79d1\u5973\u751f\uff0cgpa 3.7+\u4e09\u5c01\u5f3a\u63a8"}),"\n",(0,r.jsx)(s.p,{children:"\u4ea4\u5927\u672c\u79d1\u5973\u751f\uff0cgpa 3.9+ n\u7bc7\u9876\u4f1a"}),"\n",(0,r.jsx)(s.p,{children:"\u9646\u672c985\u672c\u79d1\u5973\u751f\uff0cgpa 3.9+\u4e00\u7bc7\u8bba\u6587\u4ea7\u51fa"}),"\n",(0,r.jsx)(s.p,{children:"\u4e2d\u5916\u5408\u529e\u5973\u751f\uff0cgpa 3.9+ MITACS research \u5b9e\u4e60"}),"\n",(0,r.jsx)(s.h1,{id:"\u5f55\u53d6\u504f\u597d",children:"\u5f55\u53d6\u504f\u597d"}),"\n",(0,r.jsxs)(s.p,{children:["\u5973\u751f\uff0c\u9ad8gpa(\u5927\u4e8e90\u5373\u53ef\uff0c\u4e0d\u5f3a\u5236)\uff0cai pub(\u9700\u8981\u6709\u5b9e\u9645\u7684\u9876\u4f1a\u4ea7\u51fa)\uff0c\u6d77\u5916connection\u3002",(0,r.jsx)(s.br,{}),"\n","\u5982\u679c\u662f\u4e2d\u5916\u5408\u529e\u7684\u8bdd\uff0c\u4f1a\u6709\u5f88\u5927\u7684\u52a0\u5206\uff0c\u6bd4\u5982\u6210\u7535\u683c\u62c9\u65af\u54e5\u5b66\u9662\u6bcf\u5e74\u90fd\u6709\u4e0d\u5c11\u7684Stanford MSEE\u5f55\u53d6\uff0c\u7591\u4f3c\u6bcf\u5e74MSEE\u90fd\u5728\u683c\u9662\u5b9a\u5411\u62db\u4eba\u3002"]}),"\n",(0,r.jsx)(s.h1,{id:"\u627e\u5de5\u6570\u636e",children:"\u627e\u5de5\u6570\u636e"}),"\n",(0,r.jsx)(s.p,{children:"\u8ba4\u8bc6\u7684\u5728stanford msee\u7684\u540c\u5b66\u65e0\u8bba\u5728\u56fd\u5185\u6709\u6ca1\u6709\u5b9e\u4e60\u5728\u7f8e\u56fd\u627e\u5b9e\u4e60\u90fd\u627e\u7684\u4e0d\u9519\uff0c\u6709\u670b\u53cb\u4e4b\u524d\u901a\u8fc7\u7cfb\u91cc\u7684nvidia\u62db\u8058\u90ae\u4ef6\u6295\u9012\u4e86\u4e00\u6b21\uff0c\u7136\u540e\u534a\u4e2a\u5c0f\u65f6\u7ea6\u4e86\u9762\u8bd5\uff0c\u582a\u6bd4\u56fd\u5185\u7ea6\u9762\u6548\u7387\u3002\noracle\u3001nvidia\u975e\u5e38\u559c\u6b22\u62dbstanford\u7684\u3002"})]})}function p(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>o});var t=n(6540);const r={},a=t.createContext(r);function i(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);