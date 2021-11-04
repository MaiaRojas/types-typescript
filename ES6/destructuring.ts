(() => {
    type Avengers = {
      nick: string,
      ironmam: string,
      vision: string,
      activos: boolean,
      poder: number
    };

    const avengers: Avengers = {
      nick: 'Samuel L. Jackson',
      ironmam: 'Robert Downey Jr.',
      vision: 'Paul Bettany,',
      activos: true,
      poder: 500
    };

    /* const { poder, vision } = avengers;

    console.log(poder.toFixed(2), vision.toUpperCase()) */

    const printAvenger = ( { ironmam, ...rest}: Avengers ) => {
      console.log(ironmam, rest);
    };

    //printAvenger(avengers);

    const avengersArr: [string, boolean, number] = ['Cap. América', true, 150.8];
    const [ , ironman] = avengersArr;

    //console.log({ ironman })
})()