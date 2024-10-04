import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const PRODUCT_DATA = [
  {
    id: 1,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 59.99,
    stock: 143,
    sales: 1200,
  },
  {
    id: 2,
    name: "Leather Wallet",
    category: "Accessories",
    price: 39.99,
    stock: 89,
    sales: 800,
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Electronics",
    price: 199.99,
    stock: 56,
    sales: 650,
  },
  {
    id: 4,
    name: "Yoga Mat",
    category: "Fitness",
    price: 29.99,
    stock: 210,
    sales: 950,
  },
  {
    id: 5,
    name: "Coffee Maker",
    category: "Home",
    price: 79.99,
    stock: 78,
    sales: 720,
  },
  {
    id: 6,
    name: "Toaster",
    category: "Home",
    price: 19.99,
    stock: 78,
    sales: 720,
  },
];

const ProductTableContainer = styled.div`
  padding: 1rem;
`;
const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  align-items: center;
`;

export default function ProductTable() {
  const [searchProduct, setSearchProduct] = useState("");
  const [filteredProducts, setFilteredProducts] =
    useState(PRODUCT_DATA);

  function handleSearch(e) {
    const term = e.target.value.toLowerCase();
    setSearchProduct(term);
    const filtered = PRODUCT_DATA.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );

    setFilteredProducts(filtered);
  }

  return (
    <ProductTableContainer>
      <Card
        sx={{ borderRadius: "10px", padding: "1.5rem" }}
      >
        <TableHeader>
          <h2>Products</h2>
          <TextField
            label="search.."
            variant="standard"
            value={searchProduct}
            onChange={handleSearch}
          />
        </TableHeader>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: "1.2rem" }}>
                  Product
                </TableCell>
                <TableCell sx={{ fontSize: "1.2rem" }}>
                  Category
                </TableCell>
                <TableCell sx={{ fontSize: "1.2rem" }}>
                  Price
                </TableCell>
                <TableCell sx={{ fontSize: "1.2rem" }}>
                  Stock
                </TableCell>
                <TableCell sx={{ fontSize: "1.2rem" }}>
                  Sales
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{product.sales}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </ProductTableContainer>
  );
}
