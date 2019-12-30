(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{275:function(e,t,n){"use strict";n.r(t);var a=n(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),n("p",[e._v('Many people have heard of the container for a while or even use it every day. However, a question like "what is container" or "how container works" might still rise.')]),e._v(" "),n("p",[e._v("In this post, we will deep dive into the container.")]),e._v(" "),e._m(1),e._v(" "),n("p",[e._v("Before container era, we usually use visualization technology to limit and control system resources for the applications. However, it creates too much overhead on the physical machine. And thus, container as a lightweight solution emerged.")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),n("p",[e._v("A container is a set of processes just like other processes you launched from the shell, except that it's being isolated in its "),n("a",{attrs:{href:"http://man7.org/linux/man-pages/man7/namespaces.7.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("namespace"),n("OutboundLink")],1),e._v(", "),n("a",{attrs:{href:"http://man7.org/linux/man-pages/man7/cgroups.7.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("cgroups"),n("OutboundLink")],1),e._v(", and "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/UnionFS",target:"_blank",rel:"noopener noreferrer"}},[e._v("union filesystem"),n("OutboundLink")],1),e._v(". It has everything it needs in its isolation: code, runtime, system tools, system libraries, settings and so on.")]),e._v(" "),n("p",[e._v("Docker is the dominant container option. However, there're various competitors such as CoreOS rkt, Ubuntu LXD. People standardize the container into the "),n("a",{attrs:{href:"https://www.opencontainers.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OCI specs"),n("OutboundLink")],1),e._v(" and love to have various implementations.")]),e._v(" "),e._m(4),e._v(" "),n("p",[e._v("Almost everyone.")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),n("p",[e._v("Docker is the dominant container technology in the industry. Check "),n("a",{attrs:{href:"https://docs.docker.com/engine/docker-overview/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Overview"),n("OutboundLink")],1),e._v(" for more information.")]),e._v(" "),e._m(9),e._v(" "),n("p",[e._v("CoreOS rkt is yet another application container engine. The advantage of rkt is its cloud-native nature. Check "),n("a",{attrs:{href:"https://coreos.com/rkt/",target:"_blank",rel:"noopener noreferrer"}},[e._v("A security-minded, standards-based container engine: rkt"),n("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(10),e._v(" "),n("p",[e._v("LXC and LXD is system container engine.  It offers an environment as close as possible as the one you'd get from a VM but without the overhead that comes with running a separate kernel and simulating all the hardware. Check "),n("a",{attrs:{href:"https://linuxcontainers.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("linuxcontainer.org"),n("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(11),e._v(" "),n("p",[e._v("The Open Container Initiative or OCI develops specifications for standards on Operating System process and application containers. It defines two specs: the "),n("a",{attrs:{href:"https://github.com/opencontainers/runtime-spec",target:"_blank",rel:"noopener noreferrer"}},[e._v("Runtime Specification"),n("OutboundLink")],1),e._v(" and the "),n("a",{attrs:{href:"https://github.com/opencontainers/image-spec",target:"_blank",rel:"noopener noreferrer"}},[e._v("Image Specification"),n("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(12),e._v(" "),n("p",[e._v("Bocker is a container engine implemented in 100 lines of Bash code. It's mainly for education. Check "),n("a",{attrs:{href:"https://github.com/p8952/bocker",target:"_blank",rel:"noopener noreferrer"}},[e._v("p8952/bocker"),n("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(13),e._v(" "),n("p",[e._v("The way we start running a container can be explained in below bash code.")]),e._v(" "),e._m(14),n("p",[e._v("You don't necessarily need to remember all the commands above, since it's pointless if you aren't a container engine developer.")]),e._v(" "),n("p",[e._v("The container engine such as runC, rkt, lxc provides you a beautifully designed CLI that abstracts above process for you.")]),e._v(" "),n("p",[e._v("If you like reading Youtube video, Liz Rice just "),n("a",{attrs:{href:"https://www.youtube.com/watch?v=8fi7uSYlOdc",target:"_blank",rel:"noopener noreferrer"}},[e._v("implemented the container"),n("OutboundLink")],1),e._v(" from scratch in 40 minutes.")]),e._v(" "),e._m(15),e._v(" "),n("p",[e._v("The container technology is not shiny new thing. It provides so much values by simply combining several old technologies: namespace, cgroups, and union filesystem.")]),e._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"./container-and-cgroups.html"}},[e._v("Container and cgroups")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"./container-and-unshare.html"}},[e._v("Container and unshare")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"./container-and-nsenter.html"}},[e._v("Container and nsenter")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"./container-and-namespace.html"}},[e._v("Container and Namespace")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"./container-and-unionfs.html"}},[e._v("Container and UnionFS")])],1)]),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),n("p",[e._v("A container is one or more non-trivial Linux processes running on top of the Kernel. We isolate them via cgroups and namespace.")]),e._v(" "),n("p",[e._v("Virtual Machine is a set of processes with dependencies running on top of a guest OS kernel. The guest OS is pre-allocated with a fixed amount of CPU, memory on top of the hypervisor and host OS kernel.")]),e._v(" "),n("p",[e._v("So, with the container, you get less isolation but much lightweight. With the VM, you get more isolation but much heavier. (It's pretty straightforward, right? we need to spend extra memory for guest OS in the VM. Besides programs in different VMs don't share things at all and hence load more things into RAM.)")]),e._v(" "),n("p",[e._v("Some would even mix using VM and container.")]),e._v(" "),e._m(18),e._v(" "),n("p",[e._v("You shouldn't switch to the containers if you are managing virtual machines, as Vagrant is a virtual machine manager.")]),e._v(" "),n("p",[e._v("You should switch to the containers if you merely want to run applications.")]),e._v(" "),n("p",[e._v("For those OS that doesn't support the container, you might want to create a virtual machine via Vagrant first, and then run applications as containers in the virtual machine.")]),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),n("p",[e._v("Some solutions below are not recommended due to making things complicated.")]),e._v(" "),e._m(25),e._v(" "),n("p",[e._v("If you're intended to communicate from one container to another container, then you need sort of container orchestration tools. Check "),n("a",{attrs:{href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker-compose"),n("OutboundLink")],1),e._v(" if your case is in development mode. Check "),n("a",{attrs:{href:"https://kubernetes.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes"),n("OutboundLink")],1),e._v(" if your case is in production mode.")]),e._v(" "),e._m(26),e._v(" "),n("p",[e._v("The short answer is there is no such actual OS running but we provide files for the base OS.")]),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),n("p",[e._v("In the runtime, your process thinks itself running on a designated OS, however, it's an illusion. Your container really runs as one or more processes with a set of files from the filesystem generated by UnionFS.")]),e._v(" "),e._m(29),e._v(" "),n("p",[e._v("The image is a binary packaged with files and organized by layers.")]),e._v(" "),n("p",[e._v("The container is a runtime instance of the image. You can have various containers for one image.")]),e._v(" "),e._m(30),e._v(" "),n("p",[e._v("The image v/s container is pretty much like the program v/s process.")]),e._v(" "),e._m(31),e._v(" "),n("p",[e._v("Don't worry about that.")]),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),n("p",[e._v("Don’t start with a full OS as the base image if you don't need, instead, build the image from a small base OS such as alpine.")]),e._v(" "),e._m(34),e._v(" "),n("p",[e._v("Use "),n("a",{attrs:{href:"https://docs.docker.com/develop/develop-images/multistage-build/",target:"_blank",rel:"noopener noreferrer"}},[e._v("multistage builds"),n("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(35),n("p",[e._v("Use chaining commands to reduce image layers. And don't forget to do clean up works.")]),e._v(" "),e._m(36),n("p",[e._v("Check this topic in the awesome "),n("a",{attrs:{href:"http://docs.projectatomic.io/container-best-practices/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Container Best Practises"),n("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(37),e._v(" "),n("p",[e._v("It’s okay to read & write files in the container for temporarily data processing. However, you should aware that any data in the container would be lost when it gets killed.")]),e._v(" "),n("p",[e._v("Attach volumes into the container whenever you want to persist data.")]),e._v(" "),n("p",[e._v("If the transaction is required, please, connect the container to a SQL database container. In this case, the SQL database container should attach volumes for persisting data and expose a port.")]),e._v(" "),e._m(38),e._v(" "),n("p",[e._v("The safest bet is to use your homemade Docker images or by using verified images, whenever possible.")]),e._v(" "),n("p",[e._v("Otherwise, some malicious bots might hack into your container cluster. Check "),n("a",{attrs:{href:"https://www.bleepingcomputer.com/news/security/17-backdoored-docker-images-removed-from-docker-hub/",target:"_blank",rel:"noopener noreferrer"}},[e._v("such reports"),n("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(39),e._v(" "),n("ul",[n("li",[e._v("Linux Kernel knows nothing about the container currently. All it knows are cgroups, processes, namespaces and so on.")]),e._v(" "),n("li",[e._v("Docker is not a shiny new technology. All the fundamental tools have been developed and improved for years. Docker implements a high-level API and calls the abstraction as the CONTAINER.")]),e._v(" "),n("li",[e._v("Docker used LXC as container engine but shifted to containerd & runC & libcontainer later.")]),e._v(" "),n("li",[e._v("Docker, Inc. had "),n("a",{attrs:{href:"https://chrisshort.net/docker-inc-is-dead/",target:"_blank",rel:"noopener noreferrer"}},[e._v("a tough year"),n("OutboundLink")],1),e._v(" in 2017. Docker-swarm didn't win the battle of the best container orchestration tool. Plus, not everyone understood the rollout of Moby.")]),e._v(" "),e._m(40)]),e._v(" "),e._m(41),e._v(" "),n("p",[e._v("A container is merely an OS process, except that it's being isolated, secured, and limited. All values added to the process make the container the dominant technology in the cloud era.")]),e._v(" "),e._m(42),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://jvns.ca/blog/2016/10/10/what-even-is-a-container/",target:"_blank",rel:"noopener noreferrer"}},[e._v("What even is container"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"http://man7.org/linux/man-pages/man1/unshare.1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Manpage: unshare"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"http://man7.org/linux/man-pages/man1/nsenter.1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Manpage: nsenter"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"http://man7.org/linux/man-pages/man7/namespaces.7.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Manpage: namespaces"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"http://man7.org/linux/man-pages/man7/cgroups.7.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Manpage: cgroups"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://blog.docker.com/2014/06/why-you-dont-need-to-run-sshd-in-docker/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Why do you need to run sshd in container"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://medium.com/@teddyking/linux-namespaces-850489d3ccf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linux namespaces"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://en.wikipedia.org/wiki/UnionFS",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wikipedia: UnionFS"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://docs.docker.com/storage/storagedriver/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker: about storage driver"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://kjanshair.github.io/2017/07/04/Docker-Containers-vs-System-Processes/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Containers vs System Processes"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://terriblecode.com/blog/how-docker-images-work-union-file-systems-for-dummies/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How docker images work union file systems for dummies"),n("OutboundLink")],1)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#container"}},[this._v("#")]),this._v(" Container")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[this._v("#")]),this._v(" Context")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[this._v("#")]),this._v(" Overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"what-is-a-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-container"}},[this._v("#")]),this._v(" What is a container?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"who-needs-a-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#who-needs-a-container"}},[this._v("#")]),this._v(" Who needs a container?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"why-need-a-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-need-a-container"}},[this._v("#")]),this._v(" Why need a container?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Container isolates physical resources such as CPU, memory, disk I/O and network from other containers.")]),this._v(" "),t("li",[this._v("Container isolates OS kernel resources such process id, mount points, user and group IDs from other containers.")]),this._v(" "),t("li",[this._v("Containers eliminates differences between development and staging environments and help reduce conflicts between teams running different software on the same infrastructure.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"solutions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solutions"}},[this._v("#")]),this._v(" Solutions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[this._v("#")]),this._v(" Docker")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"coreos-rkt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coreos-rkt"}},[this._v("#")]),this._v(" CoreOS rkt")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"lxc-lxd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lxc-lxd"}},[this._v("#")]),this._v(" LXC, LXD")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"oci"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oci"}},[this._v("#")]),this._v(" OCI")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"bocker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bocker"}},[this._v("#")]),this._v(" Bocker")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"inside-the-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inside-the-container"}},[this._v("#")]),this._v(" Inside the container")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Prepare a hash. We need it to identify our container.")]),e._v("\n$ "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("uuid")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ps_'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("shuf")]),e._v(" -i "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("42002")]),e._v("-42254 -n "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Prepare a root dir for all the containers.")]),e._v("\n$ "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("btrfs_path")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/var/bocker'")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("cgroups")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'cpu,cpuacct,memory'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Prepare root filesystem based on the given `$image`.")]),e._v("\n$ btrfs subvolume snapshot "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$btrfs_path")]),e._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$image")]),e._v('"')]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$btrfs_path")]),e._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$uuid")]),e._v('"')]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /dev/null\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create a cgroup")]),e._v("\n$ cgcreate -g "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$cgroups")]),e._v(":/"),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$uuid")]),e._v('"')]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Control cgroup resource")]),e._v("\n$ cgset -r cpu.shares"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("512")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$uuid")]),e._v('"')]),e._v("\n$ cgset -r memory.limit_in_bytes"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("512000000")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$uuid")]),e._v('"')]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Execute a given `$cmd` in the cgroup.")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# We need to create a unique namespace for the command (unshare).")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# We also need to change the root directory (chroot).")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# We also need to mount the runtime (/proc).")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Logging is a bonus (tee).")]),e._v("\n$ cgexec -g "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$cgroups")]),e._v(":"),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$uuid")]),e._v('"')]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n                "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("ip")]),e._v(" netns "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" netns_"),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$uuid")]),e._v('"')]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n                unshare -fmuip --mount-proc "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n                "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("chroot")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$btrfs_path")]),e._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$uuid")]),e._v('"')]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n                /bin/sh -c "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/bin/mount -t proc proc /proc && '),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$cmd")]),e._v('"')]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n                "),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("2")]),e._v(">")]),n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("&1")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("tee")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$btrfs_path")]),e._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$uuid")]),e._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$uuid")]),e._v('.log"')]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Note: Above code is extracted from awesome "),t("a",{attrs:{href:"https://github.com/p8952/bocker/blob/b6653f6/bocker#L61-L90"}},[this._v("bocker")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"faq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[this._v("#")]),this._v(" FAQ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"how-is-the-container-different-from-virtual-machine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-is-the-container-different-from-virtual-machine"}},[this._v("#")]),this._v(" How is the container different from virtual machine?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"i-m-using-vagrant-should-i-switch-to-the-containers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-m-using-vagrant-should-i-switch-to-the-containers"}},[this._v("#")]),this._v(" I'm using Vagrant. Should I switch to the containers?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"how-does-the-container-communicate-to-the-outside-world"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-does-the-container-communicate-to-the-outside-world"}},[this._v("#")]),this._v(" How does the container communicate to the outside world?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can use "),t("code",[this._v("docker cp foo.txt my container:/foo.txt")]),this._v(" to send file "),t("code",[this._v("foo.txt")]),this._v(" from the host into the container.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can use "),t("code",[this._v("docker cp my container:/foo.txt foo.txt")]),this._v(" to send file "),t("code",[this._v("foo.txt")]),this._v(" from the container to the host. "),t("span",{staticStyle:{"font-size":"0.5em"}},[this._v("[Note 1]: This is supported in Docker 1.8.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can use "),t("code",[this._v("COPY ./foo.txt /app")]),this._v(" to package file "),t("code",[this._v("foo.txt")]),this._v(" into container image. However, this happens at the building stage.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can attach a volume for the container when start running it, pretty much like "),t("code",[this._v("docker run -v $(pwd):/app mycontainer")]),this._v(". It allows file syncing via a shared directory.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can expose a port for the container when start running it, pretty much like "),t("code",[this._v("docker run -p 8000:8000 mycontainer")]),this._v(". It allows other programs talking to "),t("code",[this._v("mycontainer")]),this._v(" by simply establishing a TCP connection.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Running "),t("code",[this._v("sshd")]),this._v(" in the container.")]),this._v(" "),t("li",[this._v("Running a static web server in the container.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"where-does-the-base-os-exist-for-the-container-defined-in-dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#where-does-the-base-os-exist-for-the-container-defined-in-dockerfile"}},[this._v("#")]),this._v(" Where does the base OS exist for the container defined in "),t("code",[this._v("Dockerfile")]),this._v("?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Each command in "),t("code",[this._v("Dockerfile")]),this._v(" creates a new layer for the image. Each layer includes merely some static files.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The base OS defined in "),t("code",[this._v("Dockerfile")]),this._v(" ends with the necessary files for the designated OS to be packaged into a layer.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"what’s-the-difference-between-image-and-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what’s-the-difference-between-image-and-container"}},[this._v("#")]),this._v(" What’s the difference between image and container?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can check image via "),t("code",[this._v("docker images")]),this._v(", and check containers via "),t("code",[this._v("docker ps")]),this._v(". The command "),t("code",[this._v("docker run")]),this._v(" turns an image into a container.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"does-the-container-slow-down-the-performance-of-my-program"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#does-the-container-slow-down-the-performance-of-my-program"}},[this._v("#")]),this._v(" Does the container slow down the performance of my program?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"best-practices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[this._v("#")]),this._v(" Best Practices")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"keep-the-image-small"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keep-the-image-small"}},[this._v("#")]),this._v(" Keep the image small")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Declare unnecessary files in "),t("code",[this._v(".dockerignore")]),this._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Start building from a base for building")]),e._v("\nFROM python:3.7 as base\nADD requirements.txt /requirements.txt\nRUN pip "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -r /requirements.txt\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Then, we start from a new base.")]),e._v("\nFROM python:3.7-alpine\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Finally, we copy things from previous stage into new base.")]),e._v("\nCOPY --from"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("base /usr/local /user/local\n\nCMD /usr/local/bin/myapp\n")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Not recommend.")]),e._v("\nRUN apk "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" packageA\nRUN apk "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" packageB\nRUN "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v("\nRUN makeinstall\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Recommend")]),e._v("\nRUN apk "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" --no-cache packageA packageB "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"persist-data-via-volumes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#persist-data-via-volumes"}},[this._v("#")]),this._v(" Persist data via volumes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"choose-the-trusted-image-as-source"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#choose-the-trusted-image-as-source"}},[this._v("#")]),this._v(" Choose the trusted image as source")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"fun-facts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fun-facts"}},[this._v("#")]),this._v(" Fun Facts")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("With the wide adoption of the container, another battle for a better container orchestration tool was going on. It seems that Kubernetes has won the game. Will there be a better orchestration tool like "),t("code",[this._v("Nginx")]),this._v(" over "),t("code",[this._v("Apache")]),this._v("?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"conclusions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusions"}},[this._v("#")]),this._v(" Conclusions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[this._v("#")]),this._v(" References")])}],!1,null,null,null);t.default=r.exports}}]);