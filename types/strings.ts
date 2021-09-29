(() => {

  const batman: string ='Batman';
  const greenLantern = 'green lantern';
  const blackVolcano = `Héroe: Volcano negro`

  console.log(`I am ${ batman }`); 
  console.log(batman.toUpperCase());
  console.log(batman[10]?.toUpperCase() || 'No esta presente')
})()