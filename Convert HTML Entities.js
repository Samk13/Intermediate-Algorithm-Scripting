// 


function convertHTML(str) {
    // &colon;&rpar;
    const HTMLconverter = {
        "&":"&amp;",
        "<":"&lt;",
        ">":"&gt;",
        "\"":"&quot;",
        "'":"&apos;",
    }
    return str.split("").map(x=>{
        return [x.match(/[&<>"']/) ? HTMLconverter[x] : x]
    }).join("");
  }
  

  console.log(
  
  //convertHTML("Dolce & Gabbana")




//   convertHTML("Dolce & Gabbana") // should return Dolce &​amp; Gabbana.
// convertHTML("Hamburgers < Pizza < Tacos") // should return Hamburgers &​lt; Pizza &​lt; Tacos.
// convertHTML("Sixty > twelve") // should return Sixty &​gt; twelve.
 convertHTML('Stuff in "quotation marks"') // should return Stuff in &​quot;quotation marks&​quot;.
// convertHTML("Schindler's List") // should return Schindler&​apos;s List.
// convertHTML("<>") //should return &​lt;&​gt;.
// convertHTML("abc") // should return abc.

);