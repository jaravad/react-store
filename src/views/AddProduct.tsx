import { NumericFormat } from 'react-number-format';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StoreDispatchContext } from '../utils/contexts';
import { AddProductType } from '../types';

const FormSchema = yup
  .object({
    name: yup.string().required(),
    price: yup.number().required().positive(),
    amount: yup.number().required().positive(),
  })
  .required();
type FormData = yup.InferType<typeof FormSchema>;

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<AddProductType>({
    resolver: yupResolver(FormSchema),
  });

  const dispatch = useContext(StoreDispatchContext);

  const onSubmit = (data: FormData) => {
    dispatch({ type: 'addProduct', payload: data });
    reset();
  };

  return (
    <div className="container pt-1 pb-2">
      <h1 className="mb-1">Añadir producto</h1>
      <form className="add-product__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-1">
          <label className="custom-label" htmlFor="name">
            Nombre del producto
          </label>
          <input
            {...register('name')}
            id="name"
            autoComplete="off"
            placeholder="Ingrese nombre"
            className="custom-input"
          />
          {errors.name && <small>Campo requerido</small>}
        </div>
        <div className="mb-1">
          <label className="custom-label" htmlFor="price">
            Precio
          </label>
          <NumericFormat
            {...register('price')}
            id="price"
            autoComplete="off"
            placeholder="Ingrese precio"
            className="custom-input"
            prefix="$"
            thousandSeparator
            valueIsNumericString
            allowLeadingZeros={false}
            onValueChange={(values) => {
              setValue('price', values.floatValue);
            }}
          />
          {errors.price && <small>Campo requerido</small>}
        </div>
        <div className="mb-1">
          <label className="custom-label" htmlFor="amount">
            Cantidad
          </label>
          <NumericFormat
            {...register('amount')}
            id="amount"
            autoComplete="off"
            placeholder="Ingrese cantidad"
            className="custom-input"
            valueIsNumericString
            allowNegative={false}
            allowLeadingZeros={false}
            onValueChange={(values) => {
              setValue('amount', values.floatValue);
            }}
          />
          {errors.amount && <small>Campo requerido</small>}
        </div>
        <button type="submit" className="btn btn--full">
          Añadir
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
