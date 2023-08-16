export class Manual {
  public parts: string[] = [];
  listParts(): void {
    console.log(`Manual parts: ${this.parts.join(', ')}\n`);
  }
}
