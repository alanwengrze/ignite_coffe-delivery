import { useState } from "react";
import { BannerContainer, Message, ItemsWrapper, Item, ContentLeft, ItemSeparator, BannerImage } from "./styles";
import { ShoppingCart, Clock, Coffee, Package } from "phosphor-react";
import banner from "../../../assets/banner.svg";
export function Banner () {
  return(
    <BannerContainer>
      <ContentLeft>
        <Message>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </Message>
        <ItemsWrapper>
        <ItemSeparator>
          <Item $itemColor="cart">
            <ShoppingCart  weight="fill"/>
            <p>Compra simples e segura</p>
          </Item>
          <Item $itemColor="clock">
            <Clock weight="fill"/>
            <p>Entrega rápida e rastreada</p>
          </Item>
        </ItemSeparator>
        <ItemSeparator>
          <Item $itemColor="package">
            <Package weight="fill"/>
            <p>Embalagem mantém o café intacto</p>
          </Item>
          <Item $itemColor="coffee">
            <Coffee weight="fill"/>
            <p>O café chega fresquinho até você</p>
          </Item>
        </ItemSeparator>
        </ItemsWrapper>
      </ContentLeft>
      <BannerImage src={banner} alt="Banner"/>
    </BannerContainer>
  )
}