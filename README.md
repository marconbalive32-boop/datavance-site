# Datavance Biblioteca — Site de lançamento

Site estático pronto para hospedar gratuitamente no GitHub Pages e conectar aos checkouts da Hotmart.

## 1. Conectar a Hotmart

Crie duas ofertas na Hotmart: mensal e anual. Copie os links de checkout.

Abra `script.js` e substitua:

```js
checkout: 'COLE_AQUI_O_LINK_HOTMART_ANUAL'
checkout: 'COLE_AQUI_O_LINK_HOTMART_MENSAL'
```

pelos links completos fornecidos pela Hotmart.

## 2. Publicar no GitHub Pages

1. Crie um repositório público no GitHub, por exemplo `datavance-site`.
2. Envie todos os arquivos desta pasta para a raiz do repositório.
3. Abra `Settings` → `Pages`.
4. Em `Build and deployment`, selecione `Deploy from a branch`.
5. Selecione a branch `main` e a pasta `/root`.
6. Salve. O site ficará disponível em alguns minutos.

## 3. Domínio próprio

Depois de comprar o domínio, configure-o em `Settings` → `Pages` → `Custom domain`.

## Arquivos principais

- `index.html`: conteúdo da página.
- `styles.css`: visual.
- `alignment-fix.css`: ajustes de alinhamento.
- `script.js`: filtros, preços e links da Hotmart.
