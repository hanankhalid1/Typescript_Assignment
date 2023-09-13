// 45- Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any; 
  }
  
  function createCar(manufacturer: string, modelName: string, ...args: any[]): Car {
    const car: Car = {
      manufacturer,
      modelName,
    };
  
    for (let i = 0; i < args.length; i += 2) {
      if (i + 1 < args.length && typeof args[i] === "string") {
        car[args[i]] = args[i + 1];
      }
    }
  
    return car;
  }

  const myCar1 = createCar("Toyota", "Camry", "color", "blue", "year", 2022);
  console.log(myCar1);
 
  