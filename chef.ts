class Chef {
  private builder!: MenuBuilder;

  setBuilder(builder: MenuBuilder) {
    this.builder = builder;
  }

  construirMenuCompleto(): void {
    this.builder.agregarEntrada();
    this.builder.agregarAperitivo();
    this.builder.agregarPlatoFuerte();
    this.builder.agregarPostre();
    this.builder.agregarBebida();
  }

  obtenerMenu(): MenuBase {
    return this.builder.obtenerMenu();
  }
}
