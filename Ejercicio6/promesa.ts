

(() => {
    const retirarDinero = (retiro: number): Promise<string> =>
        new Promise((resolve, reject) => {
            const DEFAULT_CASH = 1000;
            DEFAULT_CASH >= retiro ? resolve(`Monto disponible a retirar; ${DEFAULT_CASH - retiro}`) : reject('Saldo insuficiente');
        })

        console.log(
            retirarDinero(370)
            .then((res=>console.log(res)))
            .catch((err)=> console.warn(err))
        )

        console.log(
            retirarDinero(1420)
            .then((res=>console.log(res)))
            .catch((err)=> console.warn(err))
        )

        console.log(
            retirarDinero(1000)
            .then((res=>console.log(res)))
            .catch((err)=> console.warn(err))
        )

})();