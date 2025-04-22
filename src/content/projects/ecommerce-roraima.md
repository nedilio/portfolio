---
title: "Roraima Bike"
description: "Ecommerce for a bike store"
pubDate: "2022-06-15 00:00:00"
heroImage: "/projects/ecommerce-roraima.webp"
technologies:
  - "React"
  - "Firebase"
repoURL: "https://github.com/nedilio/roraimabike"
deployURL: "https://chimerical-belekoy-ae2a64.netlify.app"
---

This is the final project in the Coderhouse ReactJS course. An E-commerce for a cycling maitenance store.

- The products are in Firebase. All products are retrieved, or the products that belong to a selected category are retrieved.
- On the home page, there is a component that includes cards of loaded products. This same component displays products filtered by categories that are selected from the menu.
- Clicking on "view more" of a product loads the product detail view.
- Products can be added to the cart from the detail view, and the maximum quantity is determined by the available stock of the product.
- From the cart, you can return to a previously added product to modify the quantity.
- After completing the purchase, a component is redirected to display the summary of the order and its ID. The purchased products are also deducted from the stock in Firebase.
