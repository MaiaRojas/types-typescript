(() => {
  const fullName = ( firstName: string, lastName:string):string => {
    return `${firstName} ${lastName}`
  };

  let noName:any;
  
  //const name = fullName('Tony', 'Stark');
  const name = fullName(noName, 'Stark');

  console.log({ name });
})()