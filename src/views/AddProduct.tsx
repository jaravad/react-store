import { NumberFormatValues, NumericFormat } from 'react-number-format';
import { ChangeEvent, useState } from 'react';

const AddProduct = () => {
  const [inputValues, setInputValues] = useState({
    name: '',
    price: null,
    quantity: null,
  });

  const { name, price, quantity } = inputValues;

  const handleInputChange = (inputName: string) => (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setInputValues((prevValues) => ({
      ...prevValues,
      [inputName]: target.value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputValues);
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
            value={name}
            onChange={handleInputChange('name')}
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
            value={price}
            prefix="$"
            thousandSeparator
            onChange={handleInputChange('price')}
          />
        </div>
        <div className="mb-1">
          <label className="custom-label" htmlFor="quantity">
            Cantidad
          </label>
          <NumericFormat
            type="text"
            id="quantity"
            name="quantity"
            autoComplete="off"
            placeholder="Ingrese cantidad"
            className="custom-input"
            value={quantity}
            onChange={handleInputChange('quantity')}
          />
        </div>
        <button type="submit" className="btn">
          Añadir
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
