import { renderElement } from "./utils.js";

async function getDataFromAPI() {
  const url = "https://swapi.py4e.com/api/people";

  const response = await fetch(url);
//   console.log(response);
  const data = await response.json();

  const dataResult = data.results;
  const result = dataResult.filter((filterdName) => {
            return filterdName.name == "R2-D2";
    });
    console.log("The eye Color: " + result[0].eye_color);
//   console.log(dataResult);
   dataResult.forEach((element) => {
         

    console.log(element);
  });
  //   const transformed = data.results.map((person) => ({
  //     name: person.name,
  //     birthYear: person.birth_year,
  //     gender: person.gender,
  //     height: person.height,
  //     mass: person.mass,
  //   }));
  //   renderElement(transformed);
  //   console.log(transformed);
  //   return transformed;
}

getDataFromAPI();
