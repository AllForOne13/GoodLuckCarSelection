// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
    // TODO: Declare properties of the Truck class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
  
    vin: string;               
    color: string;            
    make: string;             
    model: string;             
    year: number;              
    weight: number;           
    topSpeed: number;          
    wheels: Wheel[];           
    towingCapacity: number;
  
    constructor 
    ( vin: string,
      color: string,
      make: string,
      model: string,
      year: number,
      weight: number,
      topSpeed: number,
      wheels: Wheel[],
      towingCapacity: number
  ){

    super(); 
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    if(wheels.length!== 4){this.wheels=[new Wheel(), new Wheel(),new Wheel(), new Wheel()];
    }else{
      this.wheels = wheels;
    }
    this.towingCapacity = towingCapacity;
  }



  override printDetails(): void {
    super.printDetails();
    console.log(`VIN: ${this.vin}`); 
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`); 
    console.log(`Year: ${this.year}`); 
    console.log(`Weight: ${this.weight}`); 
    console.log(`Top Speed: ${this.topSpeed}`); 
    console.log(`Color: ${this.color}`); 
    console.log(`Towing Capacity: ${this.towingCapacity}`); 
    console.log(`Wheels: ${this.wheels.length} wheels`);

  }

    
  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // TODO: Get the make an model of the vehicle if it exists
     // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    // TODO: If it is, log that the vehicle is being towed
    // TODO: If it is not, log that the vehicle is too heavy to be towed
  
    if (vehicle) {
        const vehicleMake = vehicle.make;
        const vehicleModel = vehicle.model;

        console.log(`Attempting to tow vehicle: ${vehicleMake} ${vehicleModel}`);

     if (vehicle.weight <= this.towingCapacity) {
    
      console.log(`The truck with VIN ${this.vin} is towing the vehicle: ${vehicleMake} ${vehicleModel}`);
    } else {
        console.log(`The vehicle ${vehicleMake} ${vehicleModel} is too heavy to be towed`);
    }
  }
}
}

  // TODO: Override the printDetails method from the Vehicle class
    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the Truck
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels


// Export the Truck class as the default export
export default Truck;

