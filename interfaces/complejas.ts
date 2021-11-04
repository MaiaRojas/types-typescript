(() => {

  interface Client {
    name: string,
    age?: number,
    address: Address,
  };

  interface Address {
    id: number,
    zip: string,
    city: string,
  }

  let client: Client = {
    name: 'Barry Allen',
    age: 24,
    address: {
      id: 125,
      zip: 'KY2 SUD',
      city: 'Ottawa'
    }
  };

  const client2: Client = {
    name: 'Barry Allen',
    age: 24,
    address: {
      id: 14,
      zip: 'FOO',
      city: 'York'
    }
  }
})();