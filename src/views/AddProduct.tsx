import { NumericFormat } from 'react-number-format';
import { ChangeEvent, useState, useContext } from 'react';
import { StoreDispatchContext } from '../utils/contexts';
import { AddProductType } from '../types';

const initialState: AddProductType = {
  name: '',
  price: '',
  amount: '',
};

const AddProduct = () => {
  const [inputValues, setInputValues] = useState(initialState);

  const dispatch = useContext(StoreDispatchContext);

  const handleNameChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setInputValues((prevValues) => ({ ...prevValues, name: target.value }));
  };

  const handlePriceChange = (value: number | string) => {
    setInputValues((prevValues) => ({ ...prevValues, price: value }));
  };

  const handleAmountChange = (value: number | string) => {
    setInputValues((prevValues) => ({ ...prevValues, amount: value }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'addProduct', payload: inputValues });
    setInputValues(initialState);
  };

  return (
    <div className="container pt-1">
      <h1 className="mb-1">Añadir producto</h1>
      <form action="" className="add-product__form" onSubmit={handleFormSubmit}>
        <div className="mb-1">
          <label className="custom-label" htmlFor="name">
            Nombre del producto
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Ingrese nombre"
            className="custom-input"
            value={inputValues.name}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-1">
          <label className="custom-label" htmlFor="price">
            Precio
          </label>
          <NumericFormat
            type="text"
            id="price"
            name="price"
            autoComplete="off"
            placeholder="Ingrese precio"
            className="custom-input"
            value={inputValues.price}
            prefix="$"
            thousandSeparator
            valueIsNumericString
            allowLeadingZeros={false}
            onValueChange={(values) => {
              handlePriceChange(values.floatValue);
            }}
          />
        </div>
        <div className="mb-1">
          <label className="custom-label" htmlFor="amount">
            Cantidad
          </label>
          <NumericFormat
            type="text"
            id="amount"
            name="amount"
            autoComplete="off"
            placeholder="Ingrese cantidad"
            className="custom-input"
            value={inputValues.amount}
            valueIsNumericString
            allowLeadingZeros={false}
            onValueChange={(values) => {
              handleAmountChange(values.floatValue);
            }}
          />
        </div>
        <button type="submit" className="btn btn--full">
          Añadir
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
