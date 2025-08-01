class MenuFormal extends MenuBase {
  mostrarMenu(): void {
    console.log(" Menú Formal:");
    this.partes.forEach(p => console.log("- " + p));
  }
}
