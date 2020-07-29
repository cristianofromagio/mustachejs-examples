# Dois arquivos com linha de comando

Utiliza a ferramenta mustache pela linha de comando para interpolar o template mustache com a view de dados (nestes exemplos representados pelos arquivos JSON).

## Requisitos

`npm install -g mustache`

## Utilização

*ATENÇÃO*: pastas no path do arquivo destino devem existir (comando não cria as pastas automaticamente).

- `mustache data.json mustache.mustache > output/variavel.html` => exemplo interpolação em HTML
- `mustache estrofes.json poesia.mustache > output/poesia.txt` => exemplo interpolação para qualquer formato #1
- `mustache estrofes.json poesia.mustache > output/poesia.md` => exemplo interpolação para qualquer formato #2


