import { useState } from "react";
import { useAppDispatch } from "../../../../hooks/redux";
import { addItem } from "../../../../redux/cart/cartSlice";

export const AddItemToCart = () => {
  const [name, setName] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    dispatch(
      addItem({
        id: Math.random(),
        name,
        price: (Math.random() * 10).toFixed(2),
      })
    );
    setName("");
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Adicionar item</button>
    </div>
  );
};
