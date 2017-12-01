tjdft-public
============

### Links
- [O que é](#o-que-é)
- [Instalação](#instalação)
    - [NPM](#instalação-com-npm)
    - [Bower](#instalação-com-bower)
- [Como utilizar](#como-utilizar)
- [Contribuindo com o projeto](#contribuindo-com-o-projeto)
    - [Inserindo novos ícones](#inserindo-novos-ícones)
# O que é

**tjdft-public** é um repositório que disponibiliza ícones vetorizados escaláveis prontos para serem chamados em uma página HTML.

Os ícones podem ser personalizados. Cores, tamanho, sombreamento podem ser alterados por meio de CSS.

# Instalação

#### Instala&ccedil;&atilde;o com NPM
```sh
$ npm install tjdft-public
```

#### Instalação com Bower
```sh
$ bower install tjdft-public
```

# Como utilizar

Para utilizar, basta, em sua página HTML, apontar para o arquivo localizado em **dist/css/main.min.css**

*(Veja o arquivo [exemplo.html](examples/example.html))*


# Contribuindo com o projeto

#### Inserindo novos ícones

Para adicionar novos ícones ao projeto:

- Acesse o site do **[ICOMOON](https://icomoon.io/app)**
- Adicione seu novo ícone em formato vetorizado (svg) 
- Importe todos os arquivos do diretório [svg](svg)
- Adicione os ícones:
    - Set: IcoMoon - Free 
        - user-tie
    - Set: Hawcons
        - document-edit
        - document-edit2
- Gere as novas fontes / css