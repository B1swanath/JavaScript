function c1(){
    const cart1 = {
        Brand : "Acer",
        Model_Name : "Predator Helios Neo", 
        Screen_Size : "16 Inches",
        Colour : "Black",
        OS : "Windows 11 Home",
        CPU_Model : "Core i7",
        RAM_Memory : "16 GB",
        Storage : "1 TB SSD",
        Graphics : "NVIDIA GeForce RTX 4050",
        Price : "₹1,19,990"
      };
      
    let data1 = cart1.Brand + " " + cart1.Model_Name + " 16 Gaming Laptop 14th Gen Intel Core i7 Processor " + cart1.Price;
    localStorage.setItem("data1", data1);
}





// CART.HTML SCRIPT :

// let data1 = localStorage.getItem("data1");
// document.getElementById("nt1").innerHTML= data1;