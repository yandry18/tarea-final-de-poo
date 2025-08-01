interface MenuBuilder {
  agregarEntrada(): void;
  agregarPlatoFuerte(): void;
  agregarPostre(): void;
  agregarBebida(): void;
  agregarAperitivo(): void;
  obtenerMenu(): MenuBase;
}
