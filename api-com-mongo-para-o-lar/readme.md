# Trabalho entegrável

vamos fazer um API dos cantores das musicas?

O entregável obrigatório consiste em um getAll, getById e um Post. Caso queira e se sinta confortável pode fazer um CRUD completo.




### Sugestão de Rotas
[GET]  "artistas/all"   - retorna todos os autores de <br> ok
[GET] "artistas/{id}" - retorna um unico autor por id <br> ok
[POST] "artistas/create" - cria um novo autor <br> ok


### Sugestão de Schema

```javascript
    {
        artista : string,
        likes: number,
        deslikes: number,
        musicas: array, // ["musica1", "musica2", ...]

    }
```

### Anotações

[] rotas para add discografia
[] alterar um artista
[] deletar um artista
[] like e deslike