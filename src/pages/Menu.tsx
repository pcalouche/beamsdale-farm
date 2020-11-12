import React from 'react';
import {Container} from 'react-bootstrap';

const Menu = () => {
  return (
    <Container className="Menu p-3">
      <h3 className="text-center text-uppercase">Appetizers</h3>
      <ul className="menu-list text-center">
        <li>
          <p className="menu-item">Pimento Cheese</p>
          <p>
            Made with sharp or mild cheese, fresh jalapenos for a hot variety or regular/mild--<span className="menu-price">$3/8 oz</span>
          </p>
        </li>
        <li>
          <p className="menu-item">Hot Crab Dip</p>
          <p>
            Hot crab dip--<span className="menu-price">$10</span>
          </p>
        </li>
        <li>
          <p className="menu-item">Rotisserie Chicken Salad</p>
          <p>
            Made with fresh chicken, fresh onion, fresh basil (spicy basil)--<span className="menu-price">$4/8 oz</span>
          </p>
        </li>
        <li>
          <p className="menu-item">Broccoli and Cauliflower Salad</p>
          <p>
            Made with our farm grown broccoli and cauliflower, bacon, cheese--<span className="menu-price">$7</span>
          </p>
        </li>
        <li>
          <p className="menu-item">Egg Salad</p>
          <p>
            Made with our farm fresh eggs--<span className="menu-price">$7/container</span>
          </p>
        </li>
      </ul>
      <h3 className="text-center text-uppercase">Quiches</h3>
      <p className="text-center">
        All quiches are made from farm fresh eggs. We use as much fresh produce as we can, depending on the season.
      </p>
      <p className="text-center">
        All quiches are <span className="menu-price">$10</span>. Add a custom dish for <span className="menu-price">$10</span> extra.
      </p>
      <ul>
        <li>
          Baby Bella Mushrooms with sweet onions, sauteed in avocado oil. Add Basil and/or rosemary for a delicious quiche. Cheese options that are best: swiss, marinated mozzarella, white sharp
        </li>
        <li>
          Bacon with sharp or mild cheddar, add any herb to this quiche
        </li>
        <li>
          Turkey or regular sausage, green peppers, onion, sauteed in basil and avocado oil. Cheese options that are best: white sharp, marinated mozzarella
        </li>
        <li>
          Baby Bella Mushrooms with sweet onions, sautéed in avocado oil. Add Basil and/or rosemary for a delicious quiche. Cheese options that are best: swiss, marinated mozzarella, white sharp
        </li>
        <li>
          Fresh sausage from local hogs, gruyere cheese, fresh spinach
        </li>
        <li>
          Black forest ham, swiss or cheddar cheese—a good, hearty quiche
        </li>
        <li>
          Kale or spinach with any kind of cheese, sauteed in avocado oil with or without onion
        </li>
        <li>
          Other varieties of quiche available**
        </li>
      </ul>
      <h3 className="text-center text-uppercase">Breads</h3>
      <ul className="menu-list text-center">
        <li>
          <p className="menu-item">
            Honey Whole Wheat Bread
          </p>
          <p>
            Made with local honey, 100% whole wheat flour, no sugar
          </p>
        </li>
        <li>
          <p className="menu-item">
            White Sandwich Bread
          </p>
          <p>
            Made with unbleached flour
          </p>
        </li>
        <li>
          <p className="menu-item">
            Pumpkin Bread
          </p>
          <p>
            Made with farm fresh eggs, very moist bread, absolutely delicious--<span className="menu-price">$5/full loaf, $2.50/half loaf</span>.
          </p>
        </li>
        <li>
          <p className="menu-item">
            Banana Bread
          </p>
          <p>
            Made with farm fresh eggs, this is yummy--<span className="menu-price">$5/full loaf, $2.50/half loaf</span>
          </p>
        </li>
        <li>
          <p className="menu-item">
            Oat Bread
          </p>
          <p>
            Made with whole wheat flour or white, unbleached--<span className="menu-price">$5/full loaf, $2.50/half loaf</span>
          </p>
        </li>
      </ul>
      <ul className="menu-list text-center">
        <li>
          <p className="menu-item">Yeast Rolls</p>
          <p>
            Yeast rolls--<span className="menu-price">$5/dz</span>
          </p>
        </li>
        <li>
          <p className="menu-item">Whole Wheat Rolls</p>
          <p>
            Whole wheat rolls--<span className="menu-price">$5/dz</span>
          </p>
        </li>
      </ul>
      <h3 className="text-center text-uppercase">Desserts</h3>
      <ul className="menu-list text-center">
        <li>
          <p className="menu-item">Chocolate Mousse</p>
          <p>
            Chocolate crust, rich chocolate center, chocolate ganache if you choose--to die for. Enough said--<span className="menu-price">$20</span>
          </p>
        </li>
        <li>
          <p className="menu-item">Amaretto Vanilla Almond Cupcakes</p>
          <p>
            Moist cupcakes with an amaretto center, topped with almond icing and toasted almonds--<span className="menu-price">$20/dz</span>
          </p>
        </li>
        <li>
          <p className="menu-item">Chocolate Peanut Butter Cupcakes</p>
          <p>
            Chocolate peanut butter cupcakes--<span className="menu-price">$18/dz</span>
          </p>
        </li>
        <li>
          <p className="menu-item">Pound Cake</p>
          <p>
            Any variety, all made with 6-7 farm fresh eggs.--<span className="menu-price">$20/cake</span>
          </p>
        </li>
        <li>
          <p className="menu-item">Cobblers</p>
          <p>
            Peach, Cherry, Blackberry, Blueberry, or Strawberry.--<span className="menu-price">$12/cobbler</span>
          </p>
        </li>
        <li>
          <p className="menu-item">German Chocolate Pie</p>
          <p>
            Made with heavy cream and butter. The topping on this pie is very rich.--<span className="menu-price">$15/pie</span>
          </p>
        </li>
        <li>
          <p className="menu-item">Popcorn for the Kids</p>
          <p>
            Pumpkin spice popcorn, candy corn popcorn, peppermint bark popcorn, or butter toffee popcorn.--<span className="menu-price">$10/bucket</span>
          </p>
        </li>
        <li>
          <p className="menu-item">Pecan pie brownies</p>
          <p>
            Made with our farm fresh eggs. If you like brownies and pecan pie, this is for you!--<span className="menu-price">$10</span>
          </p>
        </li>
        <li>
          <p className="menu-item">Banana Pudding</p>
          <p>
            Secret recipe. The best you will ever taste!--<span className="menu-price">$15/9x13 container</span>
          </p>
        </li>
        <li>
          <p className="menu-item">Caroline's Famous Carrot Cake</p>
          <p>
            Freshly grated carrots from the garden, farm fresh eggs, freshly prepared cream cheese icing--<span className="menu-price">$25/cake</span>
          </p>
        </li>
        <li>
          <p className="menu-item">Pecan Cookies</p>
          <p>
            Mini cups with organic maple whipped cream--<span className="menu-price">$12/dz</span>
          </p>
        </li>
      </ul>
    </Container>
  );
};

export default Menu;