import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Livro from "../../assets/Livro.jpg";
import {
  ContainerBook,
  ContainerInfosBook,
  ContainerImageBook,
  InputChangeImage,
  ContainerInputs,
  InputEditBook,
  ImageBook,
  ContainerButtonSave,
  ButtonSaveBook,
} from "./styles";

const ChangeBook = () => {
  return (
    <>
      <Header />
      <ContainerBook>
        <ContainerInfosBook>
          <ContainerImageBook>
            <ImageBook src={Livro} />
          </ContainerImageBook>
          <ContainerInputs>
            <label>
              Choose
              <InputChangeImage name="imageBook" type="text"></InputChangeImage>
            </label>
            <InputEditBook
              placeholder="Book title"
              name="titleBook"
              type="text"
            />
            <InputEditBook
              placeholder="Book description"
              name="descriptionBook"
              type="text"
            />
            <InputEditBook
              placeholder="Book year"
              name="yearBook"
              type="password"
            />
          </ContainerInputs>
        </ContainerInfosBook>
      </ContainerBook>
      <ContainerButtonSave>
        <ButtonSaveBook>Save</ButtonSaveBook>
      </ContainerButtonSave>
      <Footer />
    </>
  );
};

export default ChangeBook;
