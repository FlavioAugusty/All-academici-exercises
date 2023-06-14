from PIL import Image, ImageDraw, ImageFont

# No exemplo abaixo, vamos escrever a mensagem "Hello World" na imagem:

with Image.open("background.png") as imagem:
    draw = ImageDraw.Draw(imagem) # Cria objeto Draw
    fonte = ImageFont.truetype("arial", 80) # Define fonte 

    largura_imagem, altura_imagem = imagem.size # Dimensões da imagem
    mensagem = "Hello World!" # Mensagem para ser escrita

    draw.text((largura_imagem / 2, altura_imagem / 2), mensagem, font=fonte) # Escreve texto
    imagem.show()
    '''
        Na linha 1, é criado uma instância de Draw. Diferente dos exemplos anteriores, seus métodos 
        não irão criar uma nova imagem, e sim modificar a imagem enviada por parâmetro.

        Na linha 2, definimos a fonte que será utilizada. A função truetype é usada para carregar fontes 
        do formato TTF (True Type Font) ou OTF (Open Type Fonts), e recebe como parâmetros a fonte e o tamanho. 
        Estaremos utilizando uma fonte já padrão, a arial, mas podemos baixar uma e enviar seu caminho nesse parâmetro.

        Nas linhas 4 e 5 armazenamos as dimensões da imagem e a mensagem a ser exibida.

        Em seguida, utilizamos o método text para adicionar um texto na imagem. Como parâmetros, 
        ele recebe uma tupla indicando a largura e a altura que a mensagem deve ser escrita (colocamos tais dados 
        divididos por 2 para centralizarmos o texto), a mensagem, e a fonte.
    '''

#Podemos obter as dimensões do texto com o método textsize, que recebe como parâmetros a mensagem e a fonte,
#  e calcula a largura e altura do campo de texto. Com isso, só precisamos realizar algumas operações matemáticas:

with Image.open("background.png") as imagem:
    draw = ImageDraw.Draw(imagem) # Cria objeto Draw
    fonte = ImageFont.truetype("arial", 80) # Define fonte

    mensagem = "Hello World!" # Mensagem que será exibida

    largura_imagem, altura_imagem = imagem.size # Dimensões da imagem
    # Dimensões do texto que será escrito
    largura_texto, altura_texto = draw.textsize(mensagem, font=fonte) 

    # Define onde será escrito o texto
    largura_escrita = (largura_imagem - largura_texto) / 2
    altura_escrita = (altura_imagem - altura_texto) / 2

    # Escreve o texto
    draw.text((largura_escrita, altura_escrita), mensagem, font=fonte)
    imagem.show()

# Para salvarmos uma imagem, utilizamos o método save, enviando o caminho do arquivo:

'''imagem.save("nova_imagem.png")'''