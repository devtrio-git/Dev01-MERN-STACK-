import catImg from "./assets/footer-bg2.png";
import { Card } from "./components/Card";
import { MyName } from "./components/MyName";
import { Navbar } from "./components/Navbar";
import { FaFacebook } from "react-icons/fa";
function App() {

  let userData = [
    {
      name: "Ashar Ahmed",
      age: 21
    },
    {
      name: "Owais Ahmed",
      age: 23
    },
    {
      name: "Asim",
      age: 21
    },
    {
      name: "M.Ebaad",
      age: 20
    },
  ]

  let FruitNames = ["Apple", "Mango", "Banana", "PineApple"]

  let cardData = [
    {
      image: catImg,
      title: "My Cat",
      description: "lorem aasd asdasd asdasd"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS49pwuPgji8IHwxw3A5KsytmlgYhIEoOOyBHaiHNgRNg&s",
      title: "My Car",
      description: "loremasdasdasd asd asdasd asdasd"
    },
    {
      image: catImg,
      title: "My Freind Cat",
      description: "asdasd asdasd asdasd"
    },
  ]
  return (
    <div className="container-fluid">
      <Navbar />
      {/* <Card image={cardData[0].image} title={cardData[0].title} description={cardData[0].description} />
      <Card />
      <Card /> */}

      <div className="d-flex justify-content-around mt-5">
      {cardData.map((item, index)=> <Card key={index} image={item.image} title={item.title} description={item.description}  /> )}
      </div>

      {
        userData.map((item, index) => {
          return <MyName key={index} name={item.name} age={item.age} />
        })
      }

      {
        FruitNames.map((item, index) => <h1 className="heading" key={index}>{item}</h1>)
      }
      <FaFacebook  />
      <img src="./assets/footer-bg2.png" alt="" />
    </div>
  )
}

export default App
