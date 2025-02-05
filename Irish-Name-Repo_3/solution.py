variable = "a'/**/or/**/'1'='1"
new_variable = "" 

        
for i in variable:
    if (ord(i) < 97 or ord(i) > 122):
        new_variable += i
    elif (ord(i) - 13) < 97:
        new_variable += chr(ord(i) + 13)
    else:
        new_variable += chr(ord(i) - 13)

print(new_variable)
