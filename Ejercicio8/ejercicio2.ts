
const Exercise2 = async () => {

    interface Pizza {
        prepared: boolean;
        cooked: boolean;
    }

    interface Horno {
        heated: boolean;
        cooking: boolean;
    }
    const pizza: Pizza = { prepared: false, cooked: false };
    const Horno: Horno = { heated: false, cooking: false };

    const precalentandoHorno = () => {
        console.log("[Precalentando horno]");
        return new Promise<boolean>((resolve) => {
            setTimeout(() => {
                console.log("Bep Bep Beeep! Horno Calentado!");
                resolve(true);
            }, 5000);
        }).then((res) => {
            Horno.heated = res;
        });
    };
    const prepararPizza = async () => {
        console.log("[Preparando pizza]");
        pizza.prepared = await new Promise<boolean>((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, 3000);
        });
    };
    const cocinarPizza = () => {
        console.log("[Cocinando pizza]");
        Horno.cooking = true;
        return new Promise<boolean>((resolve) => {
            setTimeout(() => {
                console.log("Bep Bep Beeep! Pizza lista!");
                resolve(true);
            }, 10000);
        }).then((res) => {
            Horno.cooking = !res;
            pizza.cooked = res;
        });
    };

    /**Tiempos extra ***/
    const watchSomething = async (pizzaReady: Promise<void>) => {
        console.log("[Mirando la TV]");
        await pizzaReady.finally();
        console.log("[Dejaste de mirar la TV]");
    };
    const drinkSomething = async (HornoReady: Promise<void>) => {
        console.log("[Tomando refresco]");
        await HornoReady.finally();
        console.log("[Dejaste de tomar refresco]");
    };

    const HornoReady = precalentandoHorno();
    await prepararPizza();
    await drinkSomething(HornoReady);
    const pizzaReady = cocinarPizza();
    await watchSomething(pizzaReady);
}

Exercise2();