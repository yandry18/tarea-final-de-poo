abstract class MenuBase {
  protected partes: string[] = [];

  agregarParte(parte: string) {
    this.partes.push(parte);
  }

  abstract mostrarMenu(): void;
}
