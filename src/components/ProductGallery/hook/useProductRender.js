import { useEffect, useState } from 'react';


export const useProductRender = ( products ) => {

  const [productsRender, setProductsRender] = useState(products);

  const renderArticles = (products, isSmallScreen) => {
    const maxIndex = isSmallScreen ? 4 : 6;
    return products.slice(0, maxIndex);
  };

  useEffect(() => {
    const isSmallScreen = window.innerWidth < 768;
    setProductsRender(renderArticles( productsRender, isSmallScreen ));
  }, [ window.innerWidth ]);

  return productsRender;
}
