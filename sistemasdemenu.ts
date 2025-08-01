function main() {
  const chef = new Chef();

  const builderFormal = new MenuFormalBuilder();
  chef.setBuilder(builderFormal);
  chef.construirMenuCompleto();
  const menuFormal = chef.obtenerMenu();
  menuFormal.mostrarMenu();

  console.log("\n");

  const builderInfantil = new MenuInfantilBuilder();
  chef.setBuilder(builderInfantil);
  chef.construirMenuCompleto();
  const menuInfantil = chef.obtenerMenu();
  menuInfantil.mostrarMenu();
}

main(); 