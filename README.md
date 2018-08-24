# 切换用户

切换root用户：
`sudo -s`
退回普通用户：
`exit`

# 安装全局应用

由于EC2中path的问题，装完应用不一定能直接用，需要做一些映射：
`sudo ln -s /usr/local/bin/应用 /usr/bin/应用`

# scp远程连接

`ssh -i "awsKey.pem" ec2-user@ec2-54-149-56-106.us-west-2.compute.amazonaws.com`

# 数据库远程连接

` mysql -h54.149.56.106 -uroot -p`

# 重启数据库

`sudo systemctl restart mariadb`

# 传输文件

`scp -i awsKey.pem ohmygod/connectDB.js ec2-user@54.149.56.106:/home/ec2-user/node/ `