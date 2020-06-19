const translation = {
  common: {
    yes: 'Да',
    no: 'Нет',
    messages: {
      smthWrong: 'Упс! Что-то пошло не так!',
    },
    breadcrumbs: {
      home: 'Главная',
    },
  },
  product: {
    view: {
      availability: 'Наличие',
      available: 'Есть на складе',
      notAvailable: 'Нет в наличии',
      inCart: 'Уже в корзине',
      addToCart: 'Добавить в корзину',
      category: 'Категория',
      description: 'Описание',
      ingredients: 'Состав',
    },
  },
  checkout: {
    placeOrder: 'Заказать',
  },
  signIn: {
    messages: {
      wrongCred: 'Email или пароль неверны',
      hiUser: 'Привет, {{name}}',
    },
  },
  userMenu: {
    myProfile: 'Мой профиль',
    myOrders: 'Мои заказы',
    signIn: 'Ввойти',
    signUp: 'Зарегистрироваться',
    signOut: 'Выйти',
  },
  orders: {
    header: 'Мои заказы',
    headerAdmin: 'Заказы',
    title: 'Название',
    status: 'Статус',
    price: 'Цена',
    paymentMethod: 'Метод оплаты',
    createdDate: 'Дата',
    noOrders: 'Нет заказов',
  },
  order: {
    title: 'Заказ #{{id}}',
    titleShort: 'Заказ #{{id}}',
    status: {
      new: 'Новый',
      sent: 'Отправлен',
      retrieved: 'Получен',
    },
    paymentMethod: {
      cash: 'Наличные',
      oncard: 'На карту',
    },
  },
};

export default { translation };
