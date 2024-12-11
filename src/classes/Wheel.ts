// Wheel class that defines the properties of a wheel
class Wheel {
  // Declare properties of the Wheel class using private access modifier
  private color: string;
  private tireSize: string;
  private diameter: number;
  private tireBrand: string;
  

  // Constructor for the Wheel class
  constructor(
    diameter: number = 18, 
    tireBrand: string = "BFG",
    color:string="black",
    tireSize: string = " P215/65R15, P275/60R15, 35/55R20, 37/48R22")
    
  {
    this.diameter = diameter;
    this.tireBrand = tireBrand;
    this.color = color;
    this.tireSize = tireSize;

  }

  // Getter methods for the properties of the Wheel class
  get getDiameter(): number {
    return this.diameter;
  }

  // Setter method for the diameter property
  get getTireBrand(): string {
    return this.tireBrand;
  }

  get getColor(): string {
    return this.color;
  }

  get getTireSize(): string {
    return this.tireSize;
  }

  set setColor(color: string) {
    this.color = color;
}

set setTireSize(tireSize: string) {
    this.tireSize = tireSize;
}
}

// Export the Wheel class
export default Wheel;
