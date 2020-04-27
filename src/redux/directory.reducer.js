const INITIAL_STATE = {
  sections: [
    {
      title: 'appetizers',
      imageUrl: '/images/categories/appetizers.jpg',
      id: 1,
      linkUrl: 'menu/appetizers',
    },
    {
      title: 'grill',
      imageUrl: '/images/categories/grill.jpg',
      id: 1,
      linkUrl: 'menu/grill',
    },
    {
      title: 'salads',
      imageUrl: '/images/categories/salads.jpg',
      id: 1,
      linkUrl: 'menu/salads',
    },
    {
      title: 'sides',
      imageUrl: '/images/categories/sides.jpg',
      id: 1,
      linkUrl: 'menu/sides',
    },
    {
      title: 'desserts',
      imageUrl: '/images/categories/desserts.jpg',
      id: 1,
      linkUrl: 'menu/desserts',
    },
    {
      title: 'drinks',
      imageUrl: '/images/categories/drinks.jpg',
      id: 1,
      linkUrl: 'menu/drinks',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
