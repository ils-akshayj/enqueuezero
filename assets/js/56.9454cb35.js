(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{277:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("Unshare is a utility running program with some namespaces unshared from a parent. We create a new PID namespace below.")]),e._v(" "),e._m(1),a("p",[e._v("Let's compare it with Docker. It also creates a new PID namespace.")]),e._v(" "),e._m(2),a("p",[e._v("Ignoring other things, we're doing a similar job here, that is to create a new namespace.")]),e._v(" "),a("p",[e._v("Check manpage of "),a("a",{attrs:{href:"http://man7.org/linux/man-pages/man1/unshare.1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("unshare.1"),a("OutboundLink")],1),e._v(".")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"container-and-unshare"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#container-and-unshare"}},[this._v("#")]),this._v(" Container and unshare")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("[user@julin1 ~]$ sudo unshare --fork --pid --mount-proc sh\n[sudo] password for user: \nsh-4.2# ps aux\nUSER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot         1  0.0  0.0 115432  1808 pts/0    S    10:25   0:00 sh\nroot         2  0.0  0.0 155324  1848 pts/0    R+   10:25   0:00 ps aux\nsh-4.2# exit\nexit\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("[user@julin1 ~]$ sudo docker run -it --rm busybox sh\n/ # ps aux\nPID   USER     TIME  COMMAND\n    1 root      0:00 sh\n    5 root      0:00 ps aux\n/ # exit\n")])])])}],!1,null,null,null);t.default=s.exports}}]);