```ts
// Explicando Object.assign(this, props)
class MyClass {
  constructor(props) {
    Object.assign(this, props);
    // Funciona da mesma forma que
    // this.a = a
    // this.b = b
    // this.c = c
  }
}

const obj = new MyClass({ a: 1, b: 2 });
console.log(obj);  // MyClass { a: 1, b: 2 }
```
# Package By Feature

**Package By Feature** é uma estratégia de organização de código que agrupa classes e interfaces com base na funcionalidade que elas fornecem, ao invés de segregar classes com base em suas funções técnicas (como em uma estruturação por camadas).

Por exemplo, em uma estrutura de projeto típica, você pode ter pacotes como 'model', 'controller' e 'view'. Em contraste, utilizando o conceito de "Package by Feature", os pacotes seriam nomeados de acordo com as funcionalidades que eles implementam, como 'user', 'product', 'order', etc.


# Data Transfer Object
Eh um padrão de design usado para transferir dados entre partes de um sistema, como entre camadas de software ou entre sistemas via comunicação de rede.