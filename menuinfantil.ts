class MenuInfantil extends MenuBase {
  mostrarMenu(): void {
    console.log("Menú Infantil:");
    this.partes.forEach(p => console.log("- " + p));
  }
}
