import { QueryClient } from "@tanstack/react-query";


export const queryClient = new QueryClient();


export const fetchFlowers = async () => {

const response = await fetch(`https://flowershop-backend-production.up.railway.app/flowers`);

if(!response.ok) {
    const error = new Error('An error occured while fetching the flowers');
    error.code = response.status;
    error.info = await response.json();
    throw error;
}

const { flowers } = await response.json();

return flowers;
};

export const fetchOrders = async () => {
    const response = await fetch(`https://flowershop-backend-production.up.railway.app/orders`);

    if(!response.ok) {
        const error = new Error('An error occured while fetching orders');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const { orders } = await response.json();

    return orders;
}

export const deleteFlower = async ({id}) => {

const response = await fetch(`https://flowershop-backend-production.up.railway.app/flowers/${id}`, {
    method: 'DELETE',
});

if(!response.ok) {
    const error = new Error('An error occured while deleting flower');
    error.code = response.status;
    error.info = await response.json();
    throw error;
}

return response.json();
}

export const addNewFlower = async (flowerData) => {
    const response = await fetch(`https://flowershop-backend-production.up.railway.app/flowers`, {
        method: 'POST',
        body: JSON.stringify(flowerData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if(!response.ok) {
        const error = new Error('An error occured while adding new flower');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const { flower } = await response.json();

    return flower;
}

export const addNewOrder = async (orderData, orderContent) => {
  const response = await fetch(`https://flowershop-backend-production.up.railway.app/orders`, {
    method: "POST",
    body: JSON.stringify(orderData, orderContent),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = new Error("An error occured while adding new order");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { orderLocation, orderItems } = await response.json();

  return {orderLocation, orderItems};
}

export const updateFlower = async ({id, flower}) => {
    const response = await fetch(`https://flowershop-backend-production.up.railway.app/flowers/${id}`, {
        method: 'PUT',
        body: JSON.stringify({flower}),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if(!response.ok) {
        const error = new Error('An error occured while updating the flower');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    return response.json();
}


