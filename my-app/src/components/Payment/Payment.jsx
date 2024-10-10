import React, { useEffect, useState } from "react";
import styles from "./Payment.module.css";
import axios from "axios";

export const Payment = ({
  serviceData,
  selected,
  setSelected,
  activeService,
  service,
  name,
  setName,
  email,
  setEmail,
  setService,
  setActiveService,
  totalPrice,
  setTotalPrice,
}) => {
  const [selectedVariants, setSelectedVariants] = useState([]);
  useEffect(() => {
    let service = serviceData.find((service) => service.id === activeService);
    if (!service) return;
    let total = service.price;
    let newSelectedVariants = [];
    for (let selectedVariant of selected) {
      let parameter = service.parameters.find(
        (p) => p.parameterId === selectedVariant.parentId
      );
      let variant = parameter.variants.find(
        (v) => v.id === selectedVariant.variantId
      );
      if (variant.price > 0) {
        newSelectedVariants.push(selectedVariant);
        total += variant.price;
      }
    }
    setSelectedVariants(newSelectedVariants);
    setTotalPrice(total);
  }, [serviceData, selected, activeService]);

  const sendOrder = async () => {
    setSelected([]);
    setService("");
    setActiveService("");
    const data = {
      name: name,
      email: email,
      price: totalPrice,
      selectedVariants: selectedVariants
    };
    setSelectedVariants([])
    setTotalPrice(0)
    setName("");
    setEmail("");
    await axios.post(`http://localhost:4000/order`, data);
  };

  return (
    <div className={styles.orderBlock}>
      <h2>Общая стоимость проекта</h2>
      <p className={styles.total}>{totalPrice.toLocaleString("ru-RU")} руб.</p>
      <div className={styles.variants}>
        <div className={styles.order}>
          <p className={styles.textVar}>{service[0] && service[0].title}</p>
          {service && (
            <p className={styles.varPrice}>
              {service[0] && service[0].price.toLocaleString("ru-RU")} руб.
            </p>
          )}
        </div>
        {selectedVariants.map((item) => (
          <div className={styles.order}>
            <p className={styles.textVar}>{item.text}</p>
            <p className={styles.varPrice}>
              {item.price.toLocaleString("ru-RU")} руб.
            </p>
          </div>
        ))}
      </div>
      <div className={styles.mail}>
        <span>Получить PDF-файл с детальной оценкой на email</span>
        <div className={styles.button} onClick={sendOrder}>
          <p>Отправить</p>
          <img src="/images/arrow.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
