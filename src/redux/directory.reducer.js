const INITIAL_STATE = {
  sections: [
    {
      title: 'appetizers',
      imageUrl: '/images/categories/appetizers.jpg',
      id: 1,
      linkUrl: 'appetizers',
    },
    {
      title: 'grill',
      imageUrl: '/images/categories/grill.jpg',
      id: 1,
      linkUrl: 'grill',
    },
    {
      title: 'salads',
      imageUrl: '/images/categories/salads.jpg',
      id: 1,
      linkUrl: 'salads',
    },
    {
      title: 'sides',
      imageUrl: '/images/categories/sides.jpg',
      id: 1,
      linkUrl: 'sides',
    },
    {
      title: 'desserts',
      imageUrl: '/images/categories/desserts.jpg',
      id: 1,
      linkUrl: 'desserts',
    },
    {
      title: 'drinks',
      imageUrl: '/images/categories/drinks.jpg',
      id: 1,
      linkUrl: 'drinks',
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
