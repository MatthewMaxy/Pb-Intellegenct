import MySQLdb

def connect_to_db(db_config):
	try:
		connection = MySQLdb.connect(**db_config)
		print("Connected to MySQL database")
		return connection
		# 在这里执行交互操作

	except MySQLdb.Error as e:
		print("Error while connecting to MySQL:", e)


def user_login(connection, userinfo):
	'''
	401： 账户不存在
	404：密码错误
	200：登录成功
	'''
	username = userinfo['username']
	password = userinfo['password']
	cursor = connection.cursor()
	query = f"SELECT password FROM user_t_account where username = '{username}'"
	cursor.execute(query)
	rows = cursor.fetchall()
	if len(rows) == 0:
		cursor.close()
		return 401
	for row in rows:
		if row[0] == password:
			cursor.close()
			return 200
		else:
			cursor.close()
			return 404

def user_register(connection, reginfo):
	'''
	404:授权码错误
	401:用户名存在
	200:注册成功
	'''
	username = reginfo['regID']
	password = reginfo['regPwd']
	licenseCode = reginfo['licenseCode']
	if licenseCode != 'abcde':
		return 404
	cursor = connection.cursor()
	query1 = f"SELECT * FROM user_t_account where username = '{username}'"
	cursor.execute(query1)
	rows = cursor.fetchall()
	if len(rows) != 0:
		cursor.close()
		return 401
	query2 = f"insert into user_t_account(username, password)values ('{username}','{password}')"
	cursor.execute(query2)
	connection.commit()
	cursor.close()
	return 200

