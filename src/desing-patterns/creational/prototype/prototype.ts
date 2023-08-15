import { ComponentWithBackReference } from './component-with-back-reference';

export class Prototype {
  public primitive: any;
  public component: object;
  public circularReference: ComponentWithBackReference;

  public clone(): this {
    const clone = Object.create(this);

    clone.component = Object.create(this.component);

    /* Clonando um objeto que tem um objeto aninhado com referência inversa
    requer tratamento especial. Após a conclusão da clonagem, o
    objeto aninhado deve apontar para o objeto clonado, em vez do
    objeto original. O operador Spread pode ser útil neste caso.*/
    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this },
    };

    return clone;
  }
}
