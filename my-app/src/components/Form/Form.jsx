import React, { useState } from "react";
import styles from "./Form.module.css";
import { IoIosCheckboxOutline } from "react-icons/io";
import { IoIosCheckbox } from "react-icons/io";
import { ImRadioUnchecked } from "react-icons/im";
import { ImRadioChecked2 } from "react-icons/im";

export const Form = ({
  serviceData,
  selected,
  setSelected,
  activeService,
  setActiveService,
  service,
  setService,
  name,
  setName, 
  email,
  setEmail
}) => {

  const toggleCheck = (index) => {
    setSelected([]);
    setActiveService(index);
    setService(serviceData.filter((service) => service.id === index));
  };

  const toggleParametrs = (parameterId, id, type) => {
    const parameter = service[0].parameters.find(
      (p) => p.parameterId === parameterId
    );
    const variant = parameter.variants.find((v) => v.id === id);

    if (type === "checkbox") {
      setSelected((prev) => {
        const prevSelected = prev.filter(
          (item) => item.parentId !== parameterId || item.variantId !== id
        );
        if (prev.length === prevSelected.length) {
          return [
            ...prev,
            {
              parentId: parameterId,
              variantId: id,
              text: variant.ans,
              price: variant.price,
            },
          ];
        } else {
          return prevSelected;
        }
      });
    } else {
      setSelected((prev) => {
        const otherItems = prev.filter((item) => item.parentId !== parameterId);
        return [
          ...otherItems,
          {
            parentId: parameterId,
            variantId: id,
            text: parameter.variants.length > 2 ? variant.ans : parameter.text,
            price: variant.price,
          },
        ];
      });
    }
  };

  return (
    <div className={styles.inform}>
      <form className={styles.form} action="">
        <div>
          <input type="text" value={name} placeholder="Имя и фамилия*" onChange={(e) => setName(e.target.value)}/>
          <input type="text" value={email} placeholder="Email*" onChange={(e) => setEmail(e.target.value)}/>
        </div>
      </form>
      <h2>Выберите услугу</h2>
      <div className={styles.services}>
        {serviceData.map((item, index) => (
          <div key={index}>
            {activeService === index ? (
              <IoIosCheckbox
                color="#B3CC19"
                fontSize={24}
                onClick={() => toggleCheck(index)}
              />
            ) : (
              <IoIosCheckboxOutline
                color="#898892"
                fontSize={24}
                onClick={() => toggleCheck(index)}
              />
            )}
            <p className={styles.optionsText}>{item.title}</p>
          </div>
        ))}
      </div>
      <div className={styles.parameters}>
        {service[0] &&
          service[0].parameters.map((param, index) => (
            <div key={index}>
              <h2>{param.text}</h2>
              <div className={styles.variants}>
                {param.variants.map((variant, id) => (
                  <div className={styles.variantBlock}>
                    {param.type === "checkbox" ? (
                      selected.find(
                        (item) =>
                          item.parentId === param.parameterId &&
                          item.variantId === variant.id
                      ) ? (
                        <IoIosCheckbox
                          color="#B3CC19"
                          fontSize={24}
                          onClick={() =>
                            toggleParametrs(
                              param.parameterId,
                              variant.id,
                              "checkbox"
                            )
                          }
                        />
                      ) : (
                        <IoIosCheckboxOutline
                          color="#898892"
                          fontSize={24}
                          onClick={() =>
                            toggleParametrs(
                              param.parameterId,
                              variant.id,
                              "checkbox"
                            )
                          }
                        />
                      )
                    ) : selected.find(
                        (item) =>
                          item.parentId === param.parameterId &&
                          item.variantId === variant.id
                      ) ? (
                      <ImRadioChecked2
                        color={"#B3CC19"}
                        fontSize={24}
                        onClick={() =>
                          toggleParametrs(
                            param.parameterId,
                            variant.id,
                            "radio"
                          )
                        }
                      />
                    ) : (
                      <ImRadioUnchecked
                        color="#898892"
                        fontSize={24}
                        onClick={() =>
                          toggleParametrs(
                            param.parameterId,
                            variant.id,
                            "radio"
                          )
                        }
                      />
                    )}
                    <p className={styles.optionsText}>{variant.ans}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
