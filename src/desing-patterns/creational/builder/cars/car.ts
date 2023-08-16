export class Car {
  public parts: string[] = [];
  listParts(): void {
    console.log(`Car parts: ${this.parts.join(', ')}\n`);
  }
}
