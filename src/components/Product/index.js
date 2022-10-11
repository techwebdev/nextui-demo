import React from "react";
import { Grid, Container, Pagination } from "@nextui-org/react";
import { products } from "../../mock/product";
import ProductList from "../ProductList";

function Product() {
  return (
    <Container>
      <Grid.Container gap={2} justify="center">
        {products.map((product) => (
          <ProductList key={product?.id} product={product} />
        ))}
      </Grid.Container>
      <Pagination total={20} initialPage={1} />
    </Container>
  );
}

export default Product;
