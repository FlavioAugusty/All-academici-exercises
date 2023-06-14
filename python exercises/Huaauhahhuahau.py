risada = input()
nova_palavra = ''
new_word = ''

for letra in range(len(risada)):
    if risada[letra] == 'a' or risada[letra] == 'e' or risada[letra] == 'i' or risada[letra] == 'o' or risada[letra] == 'u':
        nova_palavra += risada[letra]
        new_word = nova_palavra[::-1]

if nova_palavra == new_word:
    print('S')
else:
    print('N')


    