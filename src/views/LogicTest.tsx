import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const FormSchema = yup
  .object({
    text: yup.string().required(),
  })
  .required();
type FormData = yup.InferType<typeof FormSchema>;
type LogicTestInput = { text: string };

const LogicTest = () => {
  const [result, setResult] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogicTestInput>({
    defaultValues: { text: '' },
    resolver: yupResolver(FormSchema),
  });

  function reverseString(str: string) {
    const letters = str.match(/[a-zA-Z]/g);
    const reversedLetters = letters.reverse();
    let reversedString = '';
    let letterIndex = 0;
    for (let i = 0; i < str.length; i++) {
      if (/[a-zA-Z]/.test(str[i])) {
        reversedString += reversedLetters[letterIndex];
        letterIndex++;
      } else {
        reversedString += str[i];
      }
    }
    return reversedString;
  }

  const onSubmit = (data: FormData) => {
    const reversedString = reverseString(data.text);
    setResult(reversedString);
  };

  return (
    <div className="pb-2 pt-1 container">
      <h1 className="mb-1">Test Lógico</h1>
      <form className="logic-test-container" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('text')}
          placeholder="Ingresa texto"
          className="custom-input"
          autoComplete="off"
        />
        {errors.text && <small>Campo requerido</small>}

        <button type="submit" className="btn btn--full mb-1 mt-1">
          Invertir cadena
        </button>
        {result && (
          <>
            <small>Resultado:</small>
            <h3>{result}</h3>
          </>
        )}
      </form>
    </div>
  );
};

export default LogicTest;
