MONGODB
	
#####	第一步安装	#####

	window安装：https://www.mongodb.com/dr/fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-ssl-3.4.4-signed.msi/download

创建环境变量：控制面板→系统→高级系统设置→环境变量→用户变量
	
	选择path，点击编辑，点击新建，粘贴：C:\Program Files\MongoDB\Server\3.4\bin

#####	第二步启动	#####

启动服务器端：mongod --dbpath=./data

启动数据库：mongo  

查看数据库：show dbs  

使用（切换）数据库：use  

查看当前使用的数据库：db 或 db.getName()  

删除数据库：db.dropDatabase()  

查看当前数据库下所有集合：show tables 或 show collections

创建或插入一条记录：db.users.insert({name:'liu'})

查找：db.users.find()

删除集合里的所有条数据：db.users.remove({})

修改数据：db.users.update({name:'liu'},{name:'en'})

save方法：db.users.save({"_id":ObjectId("592e72f34c0fa7626c684ee2"),name:'en'})



[参考文档]:http://www.runoob.com/mongodb/mongodb-tutorial.html