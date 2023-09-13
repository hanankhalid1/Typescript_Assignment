// 41- Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.



// 42- Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


// 43- Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function show_magicians(magicianList: string[]) {
    for (let i = 0; i < magicianList.length; i++) {
      console.log(magicianList[i]);
    }
  }
  
  function make_great(magicianList: string[]) {
    const modifiedMagicians: string[] = [];
  
    for (let i = 0; i < magicianList.length; i++) {
      modifiedMagicians.push("the Great " + magicianList[i]);
    }
  
    return modifiedMagicians;
  }
  
  let magicians: string[] = ["Khubaib", "Ahmar", "Affan", "Hammad"];
  
  // Create a copy of the original array and modify it
  const greatMagicians = make_great([...magicians]);
  
  // Display the original array
  console.log("Original Magician Names:");
  show_magicians(magicians);
  
  // Display the modified copy
  console.log("\nModified Magician Names:");
  show_magicians(greatMagicians);
  
  // Display the original array to confirm it remains unchanged
  console.log("\nOriginal Magician Names (Unchanged):");
  show_magicians(magicians);
  







