REACT笔记  

配置环境：

#####  快速配置  #####

第一步安装git bash；

	https://git-scm.com/download/win  

第二步安装npm；
	
	npm install -g cnpm --registry=https://registry.npm.taobao.org

第三步安装node.js；  

	https://nodejs.org/dist/v6.10.3/node-v6.10.3-x64.msi  

第四步安装react；
	
	npm install -g create-react-app

第五步安装插件
		
		axios（ajax）：npm install axios --save  

		react-router-dom（路由库）：npm install react-router-dom --save  

		jquery（JS工具库）：npm install jquery --save  

		bootstrap（前端开发框架）：npm install bootstrap --save  

		moment（JS日期处理库）：npm install moment --save  

		prop-types（React组件属性类型校验）：npm install prop-types --save  

		react-addons-css-transition-group（react-router过渡动画）：

			npm install react-addons-css-transition-group --save

		Material-UI（react UI库）：

			npm install material-ui react-tap-event-plugin --save

#####  正常安装  #####		

1.Git安装及设置  

第一步 安装git  

	在 linux 下直接使用命令：sudo apt-get install git  

	windows 下百度 gitbash ，下载安装即可  

	在mac 下：brew install git

第二步 基本操作

	查看已有的配置信息：git config --list  

	创建 demo 文件夹：mkdir demo  

	初始化：git init 

	将 github 上的仓库克隆到本地：git clone [仓库地址]  

	查看做了哪些修改：git diff（按 q 退出）

	创建a.html：touch a.html  

	将文件添加到缓存获得 Git 的跟踪：git add（. -A *）

	查看当前版本库各个文件的状态：git status

	将缓存区内容添加到仓库中：git commit 

	'版本留言，尽量写的语义话'：git commit -m 
	
	查看提交记录：git log

	
	取消已经缓存的内容：git reset

	
	也可以通过版本号回滚：git reset --hard [版本号]

 	把一个文件删除，并把它从git的仓库中移除：git rm [文件名]

	取消对某个文件的修改：git checkout [文件名]

第三步 推送代码
	
	首次推送：git push -u origin master  

	之后可以省略参数：git push	

	如果没有通过 clone 现有仓库，而是直接在本地 git init 的仓库的话，需要先添加远程仓库地址。

	为这个仓库添加一个远程地址：git remote add origin [你的github上的仓库地址]


	设置 public key
		首先需要在本地机器上生成 key：ssh-keygen  

		这时，会在 ~/.ssh/ 文件夹之下生成一对 ssh key ，包括一个 public key 和一个 private key 。（如果是windows用户，这个文件一般会在这里：C:\Users\Administrator.ssh）

		复制 public key：cat ~/.ssh/id_rsa.pub  

		将拷贝的 public key 添加在github账户上：

		右上角点击头像-> 点击settings-> 点击SSH KEYS-> 点击ADD SSH KEYS-> 将获取的public key粘贴于此

2.Node安装及设置  

第一步 安装nvm

	linux：curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash  

	windows：node官网下载相应版本安装

	安装node  

		查看有哪些版本可以安装：nvm ls-remote  

		安装版本 v5.10.1：nvm install v5.10.1

第二步 设置nodo

	查看版本：node -v

	使用淘宝定制的 cnpm：npm install -g cnpm --registry=https://registry.npm.taobao.org

	检查淘宝定制：cnpm install gulp  

3.配置React环境  
	
第一步 安装React  

	安装 create-react-app：npm install -g create-react-app  

	安装淘宝的npm源：npm config set registry https://registry.npm.taobao.org  

第二步 配置  

	构建一个 react 的前端工程：create-react-app [工程名]  

	启动工程：npm start 

4.运行React 

	在项目文件夹下src文件夹中的index.js中写代码

5.用Yarn装包  

	1.安装yarn：npm install yarn -g  

	2.测试能否运行：yarn --version  

	3.初始化： yarn init  

	4.用yarn安装react：yarn add react  

	5.用yarn安装webpack在工具中：yarn add -D webpack  

	6.删除一个依赖包：yarn remove [package]  

	7.安装所有的依赖包：yarn或yarn install  
  
	8.运行package.json中的脚本：yarn run build  

	9.卸载包：yarn remove jquery 