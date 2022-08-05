import React from "react";
import { ContainerBooks } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Book from "../../components/Book";
import Livro from "../../assets/Livro.jpg";
import Livro2 from "../../assets/Livro2.jpg";
import Livro3 from "../../assets/Livro3.jpg";
import Livro4 from "../../assets/Livro4.jpg";
import Livro5 from "../../assets/Livro5.jpg";
import Livro6 from "../../assets/Livro6.jpg";
import Livro7 from "../../assets/Livro7.jpg";
import Livro8 from "../../assets/Livro8.jpg";
// import iconLikeEnabled from "../../assets/iconLikeEnabled.svg";
// import iconLikeDisabled from "../../assets/iconLikeDisabled.svg";

// const likes = {
//   likeEnabled: iconLikeEnabled,
//   likeDisabled: iconLikeDisabled,
// };

const Home = () => {
  // const [like, setLike] = useState(false);

  // const changeImage = () => {
  //   setLike((state) => !state);
  // };
  return (
    <>
      <Header />
      <ContainerBooks>
        {/* <ButtonLike onClick={changeImage}>
          <img src={like ? likes.likeEnabled : likes.likeDisabled} alt="like" />
        </ButtonLike> */}
        <Book image={Livro}></Book>
        <Book image={Livro2}></Book>
        <Book image={Livro3}></Book>
        <Book image={Livro4}></Book>
        <Book image={Livro5}></Book>
        <Book image={Livro6}></Book>
        <Book image={Livro7}></Book>
        <Book image={Livro8}></Book>
      </ContainerBooks>
      <Footer />
    </>
  );
};

export default Home;
