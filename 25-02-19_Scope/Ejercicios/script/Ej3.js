/**3️⃣ Banco de Saldo 💰

Implementa una función crearCuentaBancaria que devuelva un objeto con métodos para depositar, retirar y consultarSaldo sin exponer directamente la variable del saldo. */

const crearCuentaBancaria = () => {
  let saldo = 0;
  return {
    depositar: (cantidad) => {
      saldo += cantidad;
    },
    retirar: (cantidad) => {
      saldo -= cantidad;
    },
    consultar: () => {
      return saldo;
    }
  };
};

const cuenta = crearCuentaBancaria();

cuenta.depositar(5000);
cuenta.retirar(1000);
console.log(cuenta.consultar());
