from PIL import Image

with Image.open("imagem_base.jpg") as imagem:
    imagem.show()
    print(f"Formato da imagem: {imagem.format}")
    print(f"Altura: {imagem.height}px")
    print(f"Largura: {imagem.width}px")
    print(f"Modo da imagem: {imagem.mode}")

"""
    Para alterarmos a altura e largura de uma imagem, utilizamos o método resize, 
    que recebe uma tupla com a nova largura e altura, respectivamente, e retorna uma nova imagem:

print(f"Antes: {imagem.size}")
imagem = imagem.resize((200, 200))
print(f"Depois: {imagem.size}")
"""

#Para cortarmos uma imagem, utilizamos o método crop, que recebe uma tupla de 4 elementos, 
# definindo a borda esquerda, superior, direita e inferior, respectivamente:

imagem_cortada = imagem.crop((3300, 1000, 5200, 3000))
#imagem_cortada.show()

# Para rotacionar uma imagem, utilizamos o método rotate, que recebe o número de graus 
# da rotação no sentido anti-horário:

imagem_rotacionada = imagem.rotate(90)
#imagem_rotacionada.show()

# Perceba que a imagem ficou limitada baseada nas dimensões anteriores. 
# Para resolvermos isso, podemos passar o parâmetro expand=True:

imagem_rotacionada = imagem.rotate(90, expand=True)
#imagem_rotacionada.show()

# Para alterar o modo de uma imagem, utilizamos o método convert, que recebe o novo modo. 
# Nesse exemplo, alterarmos o modo para L, que armazena apenas a luminosidade, deixando a imagem cinza:

imagem_cinza = imagem.convert("L")
#imagem_cinza.show()

#Para aplicar um filtro, utilizamos o método filter. Como exemplo, vamos aplicar o BoxBlur, que deixa a imagem borrada:
from PIL import Image, ImageFilter

imagem_borrada = imagem.filter(ImageFilter.BoxBlur(15))
imagem_borrada.show()

