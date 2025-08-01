class MenuFormalBuilder implements MenuBuilder {
  private menu: MenuFormal = new MenuFormal();

  agregarEntrada(): void {
    this.menu.agregarParte("Entrada: Ensalada gourmet");
  }
  agregarPlatoFuerte(): void {
    this.menu.agregarParte("Plato fuerte: Filete mignon");
  }
  agregarPostre(): void {
    this.menu.agregarParte("Postre: Tiramisú");
  }
  agregarBebida(): void {
    this.menu.agregarParte("Bebida: Vino tinto");
  }
  agregarAperitivo(): void {
    this.menu.agregarParte("Aperitivo: Tabla de quesos");
  }
  obtenerMenu(): MenuBase {
    return this.menu;
  }
}

class MenuInfantilBuilder implements MenuBuilder {
  private menu: MenuInfantil = new MenuInfantil();

  agregarEntrada(): void {
    this.menu.agregarParte("Entrada: Palitos de queso");
  }
  agregarPlatoFuerte(): void {
    this.menu.agregarParte("Plato fuerte: Nuggets y papas");
  }
  agregarPostre(): void {
    this.menu.agregarParte("Postre: Helado de chocolate");
  }
  agregarBebida(): void {
    this.menu.agregarParte("Bebida: Jugo de frutas");
  }
  agregarAperitivo(): void {
    // No aplica
  }
  obtenerMenu(): MenuBase {
    return this.menu;
  }
}
