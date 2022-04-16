import {
    LOADING_USER,
    ERROR_USER,
    USER_LOGIN_SUCCESS,
    FETCH_MENUS_SUCCESS,
    FETCH_MENUSID_SUCCESS,
    MENUSID_DELETE_SUCCESS,
    FETCH_ORDERS_SUCCESS ,
    FETCH_ORDERSID_SUCCESS,
    ORDERSID_DELETE_SUCCESS,
    LOADING_PRODUCTS,
    ERROR_PRODUCTS
} from '../actionTypes'
const baseUrl = 'http://localhost:10000';




// =========================== LOADING & ERROR USER ===========================

export const loadingUser = (payload) => {
    return {
      type: LOADING_USER,
      payload,
    };
  };
  
  export const errorUser = (payload) => {
    return {
      type: ERROR_USER,
      payload,
    };
  };
  
  // =========================== REGISTER NEW USER (ADMIN) ===========================
  
  export const setRegister = (payload) => {
    return (dispatch, getState) => {
      return new Promise((resolve, reject) => {
        dispatch(loadingUser(true));
        dispatch(errorUser(null));
        fetch(`${baseUrl}/cashierregister`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            access_token: localStorage.getItem('access_token'),
          },
          body: JSON.stringify(payload),
        })
          .then((data) => {
            if (data.ok) {
              return data.json();
            } else {
              // console.log(data.statusText);
              throw new Error(data.statusText);
            }
          })
          .then((data) => {
            // console.log(data, '<<<<<<<<<<<<<<<<<<<<<< INI DATA SETELAH REGISTER');
  
            if (!data.message) {
              resolve();
            }
            // console.log('OK ADD NEW PRODUCT');
          })
          .catch((err) => {
            dispatch(errorUser(err));
            reject(err);
          })
          .finally(() => {
            dispatch(loadingUser(false));
          });
      });
    };
  };

  export const setRegisterWaiter = (payload) => {
    return (dispatch, getState) => {
      return new Promise((resolve, reject) => {
        dispatch(loadingUser(true));
        dispatch(errorUser(null));
        fetch(`${baseUrl}/waiterregister`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            access_token: localStorage.getItem('access_token'),
          },
          body: JSON.stringify(payload),
        })
          .then((data) => {
            if (data.ok) {
              return data.json();
            } else {
              // console.log(data.statusText);
              throw new Error(data.statusText);
            }
          })
          .then((data) => {
            // console.log(data, '<<<<<<<<<<<<<<<<<<<<<< INI DATA SETELAH REGISTER');
  
            if (!data.message) {
              resolve();
            }
            // console.log('OK ADD NEW PRODUCT');
          })
          .catch((err) => {
            dispatch(errorUser(err));
            reject(err);
          })
          .finally(() => {
            dispatch(loadingUser(false));
          });
      });
    };
  };
  
  // =========================== LOGIN USER (ADMIN) ===========================
  
  export const afterLoginSuccess = () => {
    return {
      type: USER_LOGIN_SUCCESS,
    };
  };
  
  export const setLogin = (payload) => {
    return (dispatch, getState) => {
      return new Promise((resolve, reject) => {
        dispatch(loadingUser(true));
        dispatch(errorUser(null));
        fetch(`${baseUrl}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
          .then((data) => {
            if (data.ok) {
              return data.json();
            } else {
              // console.log(data.statusText);
              throw new Error(data.statusText);
            }
          })
          .then((data) => {
            // console.log(data.access_token);
            // console.log('SUCCESS LOGIN');
  
            if (data.access_token) {
              localStorage.setItem('access_token', data.access_token);
              resolve();
            }
          })
          .catch((err) => {
            dispatch(errorUser(err));
            reject(err);
          })
          .finally(() => {
            dispatch(loadingUser(false));
          });
      });
    };
  };


   // =========================== PRODUCTS ===========================

   export const loadingProducts = (payload) => {
    return {
      type: LOADING_PRODUCTS,
      payload,
    };
  };
  
  export const errorProducts = (payload) => {
    return {
      type: ERROR_PRODUCTS,
      payload,
    };
  };
  
  // =========================== FETCHING MENUS ===========================
  
  export const setMenus = (payload) => {
    return {
      type: FETCH_MENUS_SUCCESS,
      payload,
    };
  };
  
  export const fetchMenus = (payload) => {
    return (dispatch, getState) => {
      dispatch(loadingProducts(true));
      dispatch(errorProducts(null));
      fetch(`${baseUrl}/menu`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong');
          }
        })
        .then((data) => {
          // console.log(data);
          dispatch(setMenus(data));
        })
        .catch((err) => {
          dispatch(errorProducts(err));
        })
        .finally(() => {
          dispatch(loadingProducts(false));
        });
    };
  };

  export const addMenus= (payload) => {
    return (dispatch, getState) => {
      return new Promise((resolve, reject) => {
        dispatch(loadingUser(true));
        dispatch(errorUser(null));
        fetch(`${baseUrl}/menu`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            access_token: localStorage.getItem('access_token'),
          },
          body: JSON.stringify(payload),
        })
          .then((data) => {
            if (data.ok) {
              return data.json();
            } else {
              // console.log(data.statusText);
              throw new Error(data.statusText);
            }
          })
          .then((data) => {
            // console.log(data, '<<<<<<<<<<<<<<<<<<<<<< INI DATA SETELAH REGISTER');
  
            if (!data.message) {
              resolve();
            }
            // console.log('OK ADD NEW PRODUCT');
          })
          .catch((err) => {
            dispatch(errorProducts(err));
            reject(err);
          })
          .finally(() => {
            dispatch(loadingProducts(false));
          });
      });
    };
  };
  export const menuDeleteSucces = (payload) => {
    return {type : MENUSID_DELETE_SUCCESS, payload}
}

export const menuIdSucces = (payload) => {
  return {type : FETCH_MENUSID_SUCCESS, payload}
}

export const fetchMenutId = (id) => {
  return (dispatch,getState) => {
    dispatch(loadingProducts(true));
    dispatch(errorProducts(null));
      fetch(`${baseUrl}/menu/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then((data) => {
        // console.log(data);
        dispatch(menuIdSucces(data));
      })
      .catch((err) => {
        dispatch(errorProducts(err));
      })
      .finally(() => {
        dispatch(loadingProducts(false));
      });
      
  }
}

   // =========================== FETCHING ORDERSS===========================
 
   export const setOrders = (payload) => {
    return {
      type: FETCH_ORDERS_SUCCESS,
      payload,
    };
  };
  
  export const fetchOrders = (payload) => {
    return (dispatch, getState) => {
      dispatch(loadingProducts(true));
      dispatch(errorProducts(null));
      fetch(`${baseUrl}/order`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong');
          }
        })
        .then((data) => {
          // console.log(data);
          dispatch(setOrders(data));
        })
        .catch((err) => {
          dispatch(errorProducts(err));
        })
        .finally(() => {
          dispatch(loadingProducts(false));
        });
    };
  };

  export const addOrders = (payload) => {
    return (dispatch, getState) => {
      return new Promise((resolve, reject) => {
        dispatch(loadingUser(true));
        dispatch(errorUser(null));
        fetch(`${baseUrl}/order`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            access_token: localStorage.getItem('access_token'),
          },
          body: JSON.stringify(payload),
        })
          .then((data) => {
            if (data.ok) {
              return data.json();
            } else {
              // console.log(data.statusText);
              throw new Error(data.statusText);
            }
          })
          .then((data) => {
            // console.log(data, '<<<<<<<<<<<<<<<<<<<<<< INI DATA SETELAH REGISTER');
  
            if (!data.message) {
              resolve();
            }
            // console.log('OK ADD NEW PRODUCT');
          })
          .catch((err) => {
            dispatch(errorProducts(err));
            reject(err);
          })
          .finally(() => {
            dispatch(loadingProducts(false));
          });
      });
    };
  };
  export const OrderDeleteSucces = (payload) => {
    return {type : ORDERSID_DELETE_SUCCESS, payload}
}

export const OrderIdSucces = (payload) => {
  return {type : FETCH_ORDERSID_SUCCESS, payload}
}

export const fetchOrderId = (id) => {
  return (dispatch,getState) => {
    dispatch(loadingProducts(true));
    dispatch(errorProducts(null));
      fetch(`${baseUrl}/order/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then((data) => {
        // console.log(data);
        dispatch(OrderIdSucces(data));
      })
      .catch((err) => {
        dispatch(errorProducts(err));
      })
      .finally(() => {
        dispatch(loadingProducts(false));
      });
      
  }
}