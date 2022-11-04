
(() => {

    // const obtenerTorta = (estaEnferma: boolean) => {
    //     return new Promise((resolve, reject) => {
    //         if (estaEnferma) {
    //             reject("Kayo esta enferma, por lo que no tendremos torta en la fiesta");
    //         }
    //         resolve("Kayo puede hacer las tortas");
    //     });
    // };
    // obtenerTorta(false)
    //     .then((res) => console.log(res))
    //     .catch((error) => console.log(error))
    //     .finally(() => console.log("Si o si habra fiesta "));



    interface resultadoAleatorio {
        puntos: number;
        aleatorio: number;
    }

    const ingresaNumero = (ingreso?: number) => {
        return new Promise<resultadoAleatorio>((resolve, reject) => {
            const numeroNuevo = Number(ingreso);

            const numAleatorio = Math.floor(Math.random() * 5 + 1);
            let respuesta: resultadoAleatorio;
            if (isNaN(numeroNuevo)) {
                reject(new Error('Tipo de entrada incorrecta'))
            }
            if (numeroNuevo === numAleatorio) {
                respuesta = {
                    puntos: 5,
                    aleatorio: numAleatorio
                };
            } else if (numeroNuevo === numAleatorio + 1 || numeroNuevo === numAleatorio - 1) {
                respuesta = {
                    puntos: 2,
                    aleatorio: numAleatorio
                };
            } else {
                respuesta = {
                    puntos: 0,
                    aleatorio: numAleatorio
                };
            }
            resolve(respuesta);

        });
    }

    const continuarAdivinanza = (terminar = true) => {
        return new Promise<boolean>((resolve) => {
            if (terminar) {
                resolve(false);
            }
            setTimeout(() => {
                resolve(true)
            }, 2000);
        });
    };

    const interfaceUsuario = async (status?: boolean) => {
        try {
            const resultado = await ingresaNumero();
            const { puntos, aleatorio } = resultado;

            console.log(`El resultado del numero aleatorio es : ${aleatorio} y obtuvo el puntaje de ${puntos}`);

            const continuar = await continuarAdivinanza(status);

            if (continuar) {
                interfaceUsuario(continuar);
            } else {
                console.log("Fin del juego");
            }

        } catch (error) {
            console.error(error);
        }
    };

    interfaceUsuario(false);
}

)