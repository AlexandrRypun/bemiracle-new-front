const translation = {
  common: {
    yes: 'Yes',
    no: 'No',
    messages: {
      smthWrong: 'Oops! Something went wrong!',
    },
    breadcrumbs: {
      home: 'Home',
    },
  },
  product: {
    view: {
      availability: 'Availability',
      available: 'In stock',
      notAvailable: 'Not available',
      inCart: 'Already in cart',
      addToCart: 'Add to cart',
      category: 'Category',
      description: 'Description',
      ingredients: 'Ingredients',
    },
  },
  checkout: {
    placeOrder: 'Place order',
  },
  signIn: {
    messages: {
      wrongCred: 'Email or password is wrong',
      hiUser: 'Hi, {{name}}',
    },
  },
  signUp: {
    messages: {
      success: 'Congratulates! Now you can sign in with your credentials',
    },
  },
  userMenu: {
    myProfile: 'My Profile',
    myOrders: 'My Orders',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    signOut: 'Sign Out',
  },
  orders: {
    header: 'My orders',
    headerAdmin: 'Orders',
    title: 'Title',
    status: 'Status',
    price: 'Price',
    paymentMethod: 'Payment method',
    createdDate: 'Date',
    noOrders: 'There is no orders',
  },
  order: {
    title: 'Order #{{id}}',
    titleShort: 'Order #{{id}}',
    status: {
      new: 'New',
      sent: 'Sent',
      retrieved: 'Retrieved',
    },
    paymentMethod: {
      cash: 'Cash',
      oncard: 'Card',
    },
  },
};

export default { translation };
