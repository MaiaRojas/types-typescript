(() => {
    class Avenger {
      //private name:string = 'No name';
      //public team: string = 'No team';
      //public realName?: string= 'No real name';
      static argAge: number = 35;
      static getAvgAge() {
        return this.name;
      }

      constructor(
        private name: string,
        public team: string,
        public realName?: string)
      {};

      bio() {
        return `${this.name} (${this.team})`;
      }
    };

   /*  const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scot Lang');
    console.log(antman);

    // console.log(Avenger.argAge) Las propiedas estaicas pueden ser llamadas de manera global

    console.log(antman.bio());
    console.log(Avenger.getAvgAge());
 */
})()