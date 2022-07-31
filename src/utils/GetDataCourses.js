/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */



const URL = "https://liveeduapp-sad.herokuapp.com"

const GetTestData = async () => {
  let testData = await fetch(`${URL}/quiz`)
  return testData.json()

}

export default GetTestData;
