# Sistema de Heróis e Tipos de Ataque

Este projeto define uma classe `heroi` que representa um herói com nome, idade e tipo (por exemplo, Mago, Guerreiro, Monge ou Ninja). O herói pode realizar ataques baseados em seu tipo específico, exibindo uma mensagem correspondente ao ataque.

## Como Funciona

A classe `heroi` possui as seguintes propriedades:

- `nome`: O nome do herói.
- `idade`: A idade do herói.
- `tipo`: O tipo do herói, que define a forma de ataque (ex: Mago, Guerreiro, Monge, Ninja).

### Método `Atacar`

O método `Atacar()` determina o tipo de ataque do herói com base no valor da propriedade `tipo`. A função verifica o tipo do herói e exibe uma mensagem correspondente:

- **Mago**: Ataca usando magia.
- **Guerreiro**: Ataca usando espada.
- **Monge**: Ataca usando artes marciais.
- **Ninja**: Ataca usando shuriken.

Caso o tipo seja desconhecido, uma mensagem de "Herói desconhecido" é exibida.

### Exemplo de Código

Abaixo está um exemplo de como instanciar heróis e chamar o método `Atacar()`:

```javascript
h1 = new heroi("Merlin", 1000, "Mago");
h2 = new heroi("Viking", 300, "Guerreiro");
h3 = new heroi("Mongk", 4000, "monge");
h4 = new heroi("Jackie Chan", 37, "Ninja");

h1.Atacar();  // O Mago atacou usando magia
h2.Atacar();  // O Guerreiro atacou usando espada
h3.Atacar();  // O monge atacou usando artes marciais
h4.Atacar();  // O Ninja atacou usando shuriken
```

### Como Usar

Copie o código da classe heroi e dos exemplos de instância.
Substitua os valores de nome, idade, e tipo de acordo com o herói desejado.

Execute o código em um ambiente JavaScript (navegador ou Node.js).

O método **Atacar()** exibirá o tipo de ataque conforme o tipo do herói.