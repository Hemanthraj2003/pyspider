'''
python has 3 logical operators

# and
# or
# not
note: these are lowercase

these are used to compare two or more conditions and return True Or False based on the opearator used


note: we have precendence for these operators
refer this link: https://www.geeksforgeeks.org/python/precedence-and-associativity-of-operators-in-python/
'''

a,b,c = 10, 20,10 #unpacking
print(a==b and a==c) # output False
print(a==b or a==c) # output True
print(not a==c) # output False

print(a==b or not a<b and not a*2==b or b-10==c and not a**2==c)