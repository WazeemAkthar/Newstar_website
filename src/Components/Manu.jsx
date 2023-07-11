import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MenuPage = () => {
  const categories = [
    {
      name: "Appetizers",
      items: [
        {
          name: "Cheese Fries",
          description: "Crispy fries topped with melted cheddar cheese.",
          price: "$5.99",
          image: "https://source.unsplash.com/800x600/?fries",
        },
        {
          name: "Chicken Wings",
          description: "Juicy chicken wings with your choice of sauce.",
          price: "$8.99",
          image: "https://source.unsplash.com/800x600/?wings",
        },
      ],
    },
    {
      name: "Entrees",
      items: [
        {
          name: "Burger",
          description: "Our classic burger with lettuce, tomato, and onion.",
          price: "$10.99",
          image: "https://source.unsplash.com/800x600/?burger",
        },
        {
          name: "Pizza",
          description: "Freshly baked pizza with your choice of toppings.",
          price: "$12.99",
          image: "https://source.unsplash.com/800x600/?pizza",
        },
      ],
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Cheesecake",
          description: "Creamy cheesecake topped with fresh berries.",
          price: "$6.99",
          image: "https://source.unsplash.com/800x600/?cheesecake",
        },
        {
          name: "Chocolate Cake",
          description: "Decadent chocolate cake with a rich ganache.",
          price: "$7.99",
          image: "https://source.unsplash.com/800x600/?chocolatecake",
        },
      ],
    },
  ];

  return (
    <Container maxWidth="md">
      {categories.map((category) => (
        <Accordion key={category.name}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h4">{category.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Container maxWidth="sm">
              {category.items.map((item) => (
                <div key={item.name}>
                  <img src={item.image} alt={item.name} style={{ width: "100%" }} />
                  <Typography variant="h6" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {item.description}
                  </Typography>
                  <Typography variant="h6">{item.price}</Typography>
                </div>
              ))}
            </Container>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default MenuPage;
