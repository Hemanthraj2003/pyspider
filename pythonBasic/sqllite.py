import sqlite3

class Student:
    name = None
    age = None
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
class DbOperations:
    def __init__ (self, file= None):
        self.file = 'student.db' if file is None else file
        self.conn = sqlite3.connect(self.file)
        self.cur = self.conn.cursor()
        
    def create_table(self):
        sql_querry = "CREATE TABLE Student (name char, age int)"
        self.cur.execute(sql_querry)
        print("Table Created")
        
    def read_all_data(self):
        sql_query = "SELECT * FROM Student"
        q = self.cur.execute(sql_query)
        print(q.fetchall())
        
    def read_object(self, name):
        sql_query = f"SELECT * FROM Student WHERE name='{name}'"
        q = self.cur.execute(sql_query)
        print(q.fetchall())
        
    def insert_object(self, obj):
        sql_query = "INSERT INTO Student (name, age) VALUES (?,?)"
        
        self.cur.execute(sql_query, (obj.name, obj.age))
        self.conn.commit()
        print("Object Inserted")
        


    
    