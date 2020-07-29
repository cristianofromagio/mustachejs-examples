# Dois arquivos com gulp

Utiliza o gulp para executar tarefas que interpolam arquivos mustache (template + view) usando o plugin `gulp-mustache-inverted`. Com essa plugin é possível interpolam tanto múltiplos arquivos template (mustache) para um view, como múltiplos arquivos view (JSON) para um template mustache (comportamento inverso ao `gulp-mustache` padrão). Também há um exemplo de renomeação do arquivo output mustache quando os arquivos de origem do `gulp.src()` (tanto template como view) estiverem localizados em subpastas.

*ATENÇÃO*: se renomear os arquivos durante o pipeline do `gulp.src()` sem os arquivos de origem estarem em subpastas um output irá sobrescrever ao outro (gerará apenas um arquivo, com o nome "renomeado"). 

*ATENÇÃO²*: se o selector wildcard (`*`) for utilizado no path do `gulp.src()` não é possível renomear o arquivo de saída (interpolado) do mustache (como dito no ATENÇÃO anterior), o nome do arquivo portanto será o mesmo nome do arquivo de origem + a extensão definida como parâmetro no plugin `.pipe(mustache())`.

## Requisitos

- `npm install -g gulp`
- `npm install` (executar nesta pasta, para instalar as dependências locais do projeto)

## Utilização

- `gulp json2html` => vários arquivos view (json) usando um só template mustache
- `gulp mustache2html` => vários templates mustache usando um só view (json)
- `gulp template-folder` => vários templates (em pastas diferentes) usando um só view em que os outputs conseguem ser renomeados e salvos em pastas de destino diferentes (possível por conta do parâmetro `base` na config do `gulp.src()`)

### Complementar

Por padrão o comando `gulp` procura a referência da task do comando no arquivo `gulpfile.js` que esteja dentro da pasta que o comando foi executado. Para sobrescrever esse comportamento padrão, basta adicionar o parâmetro `--gulpfile` com o path de um arquivo `gulp` válido.

- `gulp teste --gulpfile teste.js`
