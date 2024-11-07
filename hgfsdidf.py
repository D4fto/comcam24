import pandas as pd
from unidecode import unidecode
# Caminho do arquivo
file_path = 'C:\\Users\\Pedro\\Documents\\GitHub\\comcam24\\ibgemas10000.csv'

# Carregar o arquivo CSV e exibir as primeiras linhas
data = pd.read_csv(file_path)
nomes = []
for index, row in data.iterrows():
    consoantes=0
    vogais=0
    letras='AEIOU'
    nome = unidecode(row['nome'])
    for letra in nome:
        if(letra in letras):
            vogais+=1
        else:
            consoantes+=1
    if vogais == 1 and consoantes == 3:
        nomes.append(row['nome'])
print(nomes)