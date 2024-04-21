type Product = {
  name: string;
  city: string;
  price: number;
};

function cities(input: string[]) {
  const products: Product[] = [];

  input.forEach((currentProduct) => {
    let [city, name, productPrice] = currentProduct.split(" | ");
    const price = Number(productPrice);

    let result = products.find((el) => el.name === name);

    if (!!result) {
      if (result.price >= price) {
        result.city = city;
        result.price = price;
      }
    } else {
      products.push({ name, city, price });
    }
  });

  console.log(products);
}

cities([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
