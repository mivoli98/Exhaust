import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();
const initialStateCartItems = [];
const initialStateTotalPrice = 0;
const initialStateTotalQuantities = 0;

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCarItems] = useState(initialStateCartItems);
    const [totalPrice, setTotalPrice] = useState(initialStateTotalPrice);
    const [totalQuantities, setTotalQuantities] = useState(initialStateTotalQuantities);
    const [qty, setQty] = useState(1);

    let foundProduct;
    let index;

    useEffect(() => {
        const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
        const priceFromLocalStorage = JSON.parse(localStorage.getItem("price"));
        const quantitesFromLocalStorage = JSON.parse(localStorage.getItem("quantities"));
        if (cartFromLocalStorage) {
            setCarItems(cartFromLocalStorage);
        }
        if (priceFromLocalStorage) {
            setTotalPrice(priceFromLocalStorage);
        }
        if (quantitesFromLocalStorage) {
            setTotalQuantities(quantitesFromLocalStorage);
        }
    }, []);

    useEffect(() => {
        if (cartItems !== initialStateCartItems && 
            totalPrice !== JSON.stringify(initialStateTotalPrice) &&
            totalQuantities !== JSON.stringify(initialStateTotalQuantities)) {
            localStorage.setItem("cart", JSON.stringify(cartItems));
            localStorage.setItem("price", JSON.stringify(totalPrice));
            localStorage.setItem("quantities", JSON.stringify(totalQuantities));
        }
    }, [cartItems, totalPrice, totalQuantities]);
    
    const onAdd = (product, quantity) => {
        const checkProductIncart = cartItems.find((item) => item._id === product._id);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuanities) => prevTotalQuanities + quantity);

        if(checkProductIncart) {
            const updatedCartItems = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })

            setCarItems(updatedCartItems);
            
        } else {
            product.quantity = quantity;
            setCarItems([...cartItems, {...product }]);
        }
        toast.success(`${qty} ${product.name} added to the cart.`);
    }

    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id == product._id);
        const newCartItems = cartItems.filter((item) => item._id !== product._id);
        const newTotalPrices = (prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity;
        const newTotalQuantites = prevTotalQuanities => prevTotalQuanities - foundProduct.quantity;
        setTotalPrice(newTotalPrices);
        setTotalQuantities(newTotalQuantites);
        setCarItems(newCartItems);
        localStorage.setItem("cart", JSON.stringify(newCartItems));
        localStorage.setItem("price", JSON.stringify(newTotalPrices));
        localStorage.setItem("quantities", JSON.stringify(newTotalQuantites));
    }

    const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item._id == id)
        index = cartItems.findIndex((product) => product._id === id);

        if(value === 'inc') {
            setCarItems(cartItems.map((item) => item._id === id ? { ...foundProduct, quantity: foundProduct.quantity + 1 } : item));
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
            setTotalQuantities(prevTotalQuanities => prevTotalQuanities + 1)
        } else if(value == 'dec') {
            if (foundProduct.quantity > 1) {
                setCarItems(cartItems.map((item) => item._id === id ? { ...foundProduct, quantity: foundProduct.quantity - 1 } : item));
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
                setTotalQuantities(prevTotalQuanities => prevTotalQuanities - 1)
            }
        }
    }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty - 1 < 1) return 1;
            return prevQty - 1;
        });
    }

    return (
        <Context.Provider
        value={{
            showCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            incQty,
            decQty,
            onAdd, 
            setShowCart,
            toggleCartItemQuantity,
            onRemove
        }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);