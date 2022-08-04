import React, { useState } from "react";
import {
  ContainerBook,
  ContainerImage,
  ImageBook,
  ContainerButtonLike,
  ButtonLike,
} from "./styles";
import iconLikeEnabled from "../../assets/iconLikeEnabled.svg";
import iconLikeDisabled from "../../assets/iconLikeDisabled.svg";

const likes = {
  likeEnabled: iconLikeEnabled,
  likeDisabled: iconLikeDisabled,
};

const Book = ({ image }) => {
  const [like, setLike] = useState(false);

  const changeImage = () => {
    setLike((state) => !state);
  };

  return (
    <>
      <ContainerBook>
        <ContainerImage>
          <ImageBook src={image}></ImageBook>
        </ContainerImage>
        <ContainerButtonLike>
          <ButtonLike onClick={changeImage}>
            <img
              src={like ? likes.likeEnabled : likes.likeDisabled}
              alt="like"
            />
          </ButtonLike>
        </ContainerButtonLike>
      </ContainerBook>
    </>
  );
};

export default Book;
