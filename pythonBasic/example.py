str=input()
wordCount = 1
res = ''

for ch in str:
    if ch == " ":
        wordCount += 1
        continue
        
    if wordCount % 2 != 0:
        res= ch + res

    else:
        res += ch
    


print(res)