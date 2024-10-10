import { useState } from "react";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { Payment } from "./components/Payment/Payment";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [selected, setSelected] = useState([]);
  const [activeService, setActiveService] = useState(false);
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const serviceData = [
    {
      id: 0,
      title: "Создание корпоративного сайта",
      price: 15000,
      parameters: [
        {
          parameterId: 0,
          type: "radio",
          text: "Помощь в выборе хостинга",
          variants: [
            {
              id: 0,
              ans: "Да",
              price: 0,
            },
            {
              id: 1,
              ans: "Нет",
              price: 0,
            },
          ],
        },
        {
          parameterId: 1,
          type: "radio",
          text: "Помощь в выборе доменного имени",
          variants: [
            {
              id: 0,
              ans: "Да",
              price: 0,
            },
            {
              id: 1,
              ans: "Нет",
              price: 0,
            },
          ],
        },
        {
          parameterId: 2,
          type: "radio",
          text: "Сколько страниц вы хотели бы включить в структуру вашего сайта?",
          variants: [
            {
              id: 0,
              ans: "1-5 страниц",
              price: 3000,
            },
            {
              id: 1,
              ans: "6-10 страниц",
              price: 5000,
            },
            {
              id: 2,
              ans: "11-15 страниц",
              price: 7000,
            },
            {
              id: 3,
              ans: "Более 15 страниц",
              price: 9000,
            },
          ],
        },
        {
          parameterId: 3,
          type: "radio",
          text: "Разработка индивидуального дизайна для вашего сайта",
          variants: [
            {
              id: 0,
              ans: "Да",
              price: 6000,
            },
            {
              id: 1,
              ans: "Нет",
              price: 0,
            },
          ],
        },
        {
          parameterId: 4,
          type: "radio",
          text: "Техническое консультирование в процессе создания сайта",
          variants: [
            {
              id: 0,
              ans: "Да",
              price: 2000,
            },
            {
              id: 1,
              ans: "Нет",
              price: 0,
            },
          ],
        },
        {
          parameterId: 5,
          type: "radio",
          text: "Система управления контентом (CMS) для вашего сайта",
          variants: [
            {
              id: 0,
              ans: "Да",
              price: 4000,
            },
            {
              id: 1,
              ans: "Нет",
              price: 0,
            },
          ],
        },
      ],
    },
    {
      id: 1,
      title: "Создание интернет-магазина под ключ",
      price: 30000,
      parameters: [
        {
          parameterId: 0,
          type: "radio",
          text: "Проведение анализа конкурентов и исследование выбранной ниши",
          variants: [
            {
              id: 0,
              ans: "Да",
              price: 3000,
            },
            {
              id: 1,
              ans: "Нет",
              price: 0,
            },
          ],
        },
        {
          parameterId: 1,
          type: "radio",
          text: "Разработка стратегии, включая исследование целевой аудитории и создание CJM?",
          variants: [
            {
              id: 0,
              ans: "Да",
              price: 5000,
            },
            {
              id: 1,
              ans: "Нет",
              price: 0,
            },
          ],
        },
        {
          parameterId: 2,
          type: "radio",
          text: "Cоздание упрощенной блок-схемы (Low Fidelity) или детализированного прототипа со всеми функциональными элементами (High Fidelity)?",
          variants: [
            {
              id: 0,
              ans: "Low Fidelity",
              price: 2000,
            },
            {
              id: 1,
              ans: "High Fidelity",
              price: 4000,
            },
            {
              id: 2,
              ans: "Не требуется разработка прототипа",
              price: 0,
            },
          ],
        },
        {
          parameterId: 3,
          type: "radio",
          text: "Разработка концепции дизайна, включая типографику, цвета, элементы UI и другие компоненты",
          variants: [
            {
              id: 0,
              ans: "Да",
              price: 6000,
            },
            {
              id: 1,
              ans: "Нет",
              price: 0,
            },
          ],
        },
        {
          parameterId: 4,
          type: "radio",
          text: "Использование Vue.js для frontend-разработки и Laravel или 1С-Битрикс для backend-разработки",
          variants: [
            {
              id: 0,
              ans: "Vue.js + Laravel",
              price: 8000,
            },
            {
              id: 1,
              ans: "Vue.js + 1С-Битрикс",
              price: 7000,
            },
            {
              id: 2,
              ans: "Другие технологии ",
              price: 0,
            },
          ],
        },
        {
          parameterId: 5,
          type: "radio",
          text: "Проведение тестирования интернет-магазина на различных устройствах и проверку функционала",
          variants: [
            {
              id: 0,
              ans: "Да",
              price: 3000,
            },
            {
              id: 1,
              ans: "Нет",
              price: 0,
            },
          ],
        },
        {
          parameterId: 6,
          type: "radio",
          text: "Обучение сотрудников работе с панелью администратора и функционалом сайта",
          variants: [
            {
              id: 0,
              ans: "Да",
              price: 2000,
            },
            {
              id: 1,
              ans: "Нет",
              price: 0,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Разработка сайтов на Bitrix ",
      price: 15000,
      parameters: [
        {
          parameterId: 0,
          type: "radio",
          text: "Какой тип сайта вам необходим?",
          variants: [
            {
              id: 0,
              ans: "Корпоративный сайт",
              price: 5000,
            },
            {
              id: 1,
              ans: "Интернет-магазин",
              price: 7000,
            },
            {
              id: 2,
              ans: "Лендинг-пейдж",
              price: 4000,
            },
            {
              id: 3,
              ans: "Другой тип сайта",
              price: 0,
            },
          ],
        },
        {
          parameterId: 1,
          type: "radio",
          text: "Наполнение и полная SEO-оптимизация сайта",
          variants: [
            {
              id: 0,
              ans: "Да",
              price: 3000,
            },
            {
              id: 1,
              ans: "Нет",
              price: 0,
            },
          ],
        },
        {
          parameterId: 2,
          type: "radio",
          text: "Помощь в оптимизации сайта для повышения его скорости и удобства использования",
          variants: [
            {
              id: 0,
              ans: "Да",
              price: 2000,
            },
            {
              id: 1,
              ans: "Нет",
              price: 0,
            },
          ],
        },
        {
          parameterId: 3,
          type: "radio",
          text: "Личный менеджер, который будет курировать все этапы разработки сайта",
          variants: [
            {
              id: 0,
              ans: "Да",
              price: 1000,
            },
            {
              id: 1,
              ans: "Нет",
              price: 0,
            },
          ],
        },
        {
          parameterId: 4,
          type: "radio",
          text: "Нуждаетесь ли вы в технической поддержке сайта после его разработки?",
          variants: [
            {
              id: 0,
              ans: "Да, в течение 3 месяцев",
              price: 2000,
            },
            {
              id: 1,
              ans: "Да, в течение 6 месяцев",
              price: 3000,
            },
            {
              id: 2,
              ans: "Да, в течение 12 месяцев",
              price: 5000,
            },
            {
              id: 3,
              ans: "Нет",
              price: 0,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Создание сайта каталога",
      price: 20000,
      parameters: [
        {
          parameterId: 0,
          type: "radio",
          text: "Какую систему управления вы предпочитаете для вашего сайта-каталога?",
          variants: [
            {
              id: 0,
              ans: "1С-Битрикс",
              price: 8000,
            },
            {
              id: 1,
              ans: "WordPress",
              price: 6000,
            },
            {
              id: 2,
              ans: "Drupal",
              price: 7000,
            },
            {
              id: 3,
              ans: "Другая система",
              price: 0,
            },
          ],
        },
        {
          parameterId: 1,
          type: "radio",
          text: "Разработка максимально полного и актуального прайс-листа ",
          variants: [
            {
              id: 0,
              ans: "Да",
              price: 3000,
            },
            {
              id: 1,
              ans: "Нет",
              price: 0,
            },
          ],
        },
        {
          parameterId: 2,
          type: "radio",
          text: "Древовидная структура для отображения товаров и подкатегорий ",
          variants: [
            {
              id: 0,
              ans: "Да",
              price: 2000,
            },
            {
              id: 1,
              ans: "Нет",
              price: 0,
            },
          ],
        },
        {
          parameterId: 3,
          type: "radio",
          text: "Система обратной связи для работы с покупателями ",
          variants: [
            {
              id: 0,
              ans: "Да",
              price: 1500,
            },
            {
              id: 1,
              ans: "Нет",
              price: 0,
            },
          ],
        },
        {
          parameterId: 4,
          type: "radio",
          text: "Возможность самостоятельно редактировать существующие страницы вашего сайта-каталога",
          variants: [
            {
              id: 0,
              ans: "Да",
              price: 2500,
            },
            {
              id: 1,
              ans: "Нет",
              price: 0,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Создание информационного портала",
      price: 50000,
      parameters: [
        {
          parameterId: 0,
          type: "radio",
          text: "Желаемый уровень функциональности и сложности вашего сайта",
          variants: [
            {
              id: 0,
              ans: "Основные функции и возможности",
              price: 5000,
            },
            {
              id: 1,
              ans: "Расширенные функции и возможности, интеграция с другими системами или API",
              price: 10000,
            },
          ],
        },
        {
          parameterId: 1,
          type: "radio",
          text: "Разработка индивидуального дизайна для вашего сайта",
          variants: [
            {
              id: 0,
              ans: "Да",
              price: 8000,
            },
            {
              id: 1,
              ans: "Нет",
              price: 0,
            },
          ],
        },
        {
          parameterId: 2,
          type: "radio",
          text: "Укажите размер и масштаб вашего информационного сайта",
          variants: [
            {
              id: 0,
              ans: "Небольшой сайт для компании или сообщества",
              price: 6000,
            },
            {
              id: 1,
              ans: "Крупный сайт для корпорации или организации",
              price: 12000,
            },
          ],
        },
        {
          parameterId: 3,
          type: "radio",
          text: "Укажите специфические технологии или платформы, которые требуются для разработки вашего сайта",
          variants: [
            {
              id: 0,
              ans: "Общие технологии и платформы",
              price: 5000,
            },
            {
              id: 1,
              ans: "Специализированные технологии и платформы",
              price: 10000,
            },
          ],
        },
        {
          parameterId: 5,
          type: "radio",
          text: "Поддержка и обслуживание вашего сайта после его разработки",
          variants: [
            {
              id: 0,
              ans: "Да, включить поддержку и обслуживание",
              price: 8000,
            },
            {
              id: 1,
              ans: "Нет, не требуется",
              price: 0,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Создание сайта на шаблоне",
      price: 5000,
      parameters: [
        {
          parameterId: 0,
          type: "radio",
          text: "Выбор готового сайта на 1С-Битрикс",
          variants: [
            {
              id: 0,
              ans: "Одностраничный лендинг",
              price: 2000,
            },
            {
              id: 1,
              ans: "Многостраничный сайт",
              price: 3000,
            },
            {
              id: 2,
              ans: "Онлайн-магазин с небольшим количеством товаров",
              price: 4000,
            },
            {
              id: 3,
              ans: "Крупный онлайн-магазин с большим количеством товаров",
              price: 5000,
            },
          ],
        },
        {
          parameterId: 1,
          type: "radio",
          text: "Выбор хостинга",
          variants: [
            {
              id: 0,
              ans: "Общий хостинг",
              price: 0,
            },
            {
              id: 1,
              ans: "Выделенный сервер",
              price: 2000,
            },
            {
              id: 2,
              ans: "Облачный хостинг",
              price: 1500,
            },
          ],
        },
        {
          parameterId: 2,
          type: "radio",
          text: "Выбор лицензии",
          variants: [
            {
              id: 0,
              ans: "1 год",
              price: 0,
            },
            {
              id: 1,
              ans: "2 года",
              price: 5000,
            },
            {
              id: 2,
              ans: "3 года",
              price: 8000,
            },
          ],
        },
        {
          parameterId: 3,
          type: "checkbox",
          text: "Дополнительные услуги",
          variants: [
            {
              id: 0,
              ans: "Дизайн и настройка",
              price: 5000,
            },
            {
              id: 1,
              ans: "Продвижение и SEO",
              price: 5000,
            },
          ],
        },
      ],
    },
    {
      id: 6,
      title: "Разработка фирменного стиля компании",
      price: 2500,
      parameters: [
        {
          parameterId: 0,
          type: "checkbox",
          text: "Выберите необходимые этапы подготовки",
          variants: [
            {
              id: 0,
              ans: "Выдача технического задания",
              price: 1000,
            },
            {
              id: 1,
              ans: "Сбор информации о компании",
              price: 900,
            },
            {
              id: 2,
              ans: "Анализ рынка и перспектив",
              price: 1200,
            },
          ],
        },
        {
          parameterId: 1,
          type: "checkbox",
          text: "Выберите необходимые этапы формирования стратегии",
          variants: [
            {
              id: 0,
              ans: "Анализ собранных данных",
              price: 1000,
            },
            {
              id: 1,
              ans: "Разработка плана действий",
              price: 1200,
            },
            {
              id: 2,
              ans: "Определение фирменного имиджа",
              price: 800,
            },
          ],
        },
        {
          parameterId: 2,
          type: "checkbox",
          text: "Выберите необходимые этапы выработки идеи",
          variants: [
            {
              id: 0,
              ans: "Выбор основной идеи",
              price: 800,
            },
            {
              id: 1,
              ans: "Создание названия компании и слогана",
              price: 1200,
            },
          ],
        },
        {
          parameterId: 3,
          type: "checkbox",
          text: "Выберите необходимые этапы дизайнерских решений",
          variants: [
            {
              id: 0,
              ans: "Разработка графического воплощения идеи",
              price: 1500,
            },
            {
              id: 1,
              ans: "Определение цветовой гаммы и шрифта",
              price: 800,
            },
          ],
        },
        {
          parameterId: 4,
          type: "radio",
          text: "Создание логотипа",
          variants: [
            {
              id: 0,
              ans: "Да",
              price: 1200,
            },
            {
              id: 1,
              ans: "Нет",
              price: 0,
            },
          ],
        },
        {
          parameterId: 5,
          type: "checkbox",
          text: "Выберите необходимые элементы фирменного стиля",
          variants: [
            {
              id: 0,
              ans: "Визитные карточки",
              price: 500,
            },
            {
              id: 1,
              ans: "Конверты",
              price: 500,
            },
            {
              id: 2,
              ans: "Бланки",
              price: 800,
            },
          ],
        },
        {
          parameterId: 6,
          type: "radio",
          text: "Создание брендбука",
          variants: [
            {
              id: 0,
              ans: "Да",
              price: 2000,
            },
            {
              id: 1,
              ans: "Нет",
              price: 0,
            },
          ],
        },
      ],
    },
    {
      id: 7,
      title: "SEO-продвижение сайтов ",
      price: 1000,
      parameters: [
        {
          parameterId: 0,
          type: "checkbox",
          text: "Детальное изучение сайта клиента",
          variants: [
            {
              id: 0,
              ans: "Провести аудит сайта",
              price: 500,
            },
            {
              id: 1,
              ans: "Изучить предметную область заказчика",
              price: 700,
            },
          ],
        },
        {
          parameterId: 1,
          type: "checkbox",
          text: "Проведение внутренней оптимизации",
          variants: [
            {
              id: 0,
              ans: "Распределить ключевые запросы по страницам",
              price: 500,
            },
            {
              id: 1,
              ans: "Улучшить навигацию сайта",
              price: 700,
            },
            {
              id: 2,
              ans: "Написать новые и отредактировать существующие тексты",
              price: 800,
            },
          ],
        },
        {
          parameterId: 2,
          type: "checkbox",
          text: "Привлечение ссылок с других ресурсов",
          variants: [
            {
              id: 0,
              ans: "Провести анализ ссылочного профиля",
              price: 500,
            },
            {
              id: 1,
              ans: "Разработать стратегию привлечения ссылок",
              price: 800,
            },
          ],
        },
      ],
    },
    {
      id: 8,
      title: "Разработка мобильных приложений ",
      price: 40000,
      parameters: [
        {
          parameterId: 0,
          type: "radio",
          text: "Платформа",
          variants: [
            {
              id: 0,
              ans: "iOS",
              price: 20000,
            },
            {
              id: 1,
              ans: "Android",
              price: 20000,
            },
            {
              id: 2,
              ans: "Кроссплатформенное приложение",
              price: 25000,
            },
          ],
        },
        {
          parameterId: 1,
          type: "radio",
          text: "Функционал",
          variants: [
            {
              id: 0,
              ans: "Простое приложение",
              price: 5000,
            },
            {
              id: 1,
              ans: "Средней сложности приложение",
              price: 10000,
            },
            {
              id: 2,
              ans: "Сложное приложение",
              price: 20000,
            },
          ],
        },
        {
          parameterId: 2,
          type: "radio",
          text: "Дизайн",
          variants: [
            {
              id: 0,
              ans: "Простой дизайн (базовые элементы и минимальная пользовательская анимация)",
              price: 5000,
            },
            {
              id: 1,
              ans: "Средней сложности дизайн (дополнительные элементы и анимация)",
              price: 10000,
            },
            {
              id: 2,
              ans: "Сложный дизайн (уникальные элементы и сложная анимация)",
              price: 20000,
            },
          ],
        },
        {
          parameterId: 3,
          type: "radio",
          text: "Интеграция с другими сервисами",
          variants: [
            {
              id: 0,
              ans: "Интеграция с одним сторонним сервисом",
              price: 5000,
            },
            {
              id: 1,
              ans: "Интеграция с несколькими сторонними сервисами",
              price: 10000,
            },
            {
              id: 2,
              ans: "Расширенная интеграция с несколькими сторонними сервисами",
              price: 20000,
            },
          ],
        },
        {
          parameterId: 4,
          type: "radio",
          text: "Тестирование",
          variants: [
            {
              id: 0,
              ans: "Базовое тестирование (проверка основного функционала)",
              price: 5000,
            },
            {
              id: 1,
              ans: "Расширенное тестирование (проверка всех функций и сценариев использования)",
              price: 10000,
            },
          ],
        },
      ],
    },
  ];
  return (
    <div className="wrapper">
      <Header />
      <h1 className="heading">Рассчитать стоимость проекта</h1>
      <p className="description">
        Заполните форму и узнайте примерную стоимость вашего проекта или вы
        можете обсудить свой проект по телефону +375 (29) 626-44-35{" "}
      </p>
      <div className="container">
        <Form
          serviceData={serviceData}
          selected={selected}
          setSelected={setSelected}
          activeService={activeService}
          setActiveService={setActiveService}
          service={service}
          setService={setService}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
        />
        <div>
          <Payment
            serviceData={serviceData}
            selected={selected}
            setSelected={setSelected}
            activeService={activeService}
            service={service}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            setService={setService}
            setActiveService={setActiveService}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
          />
          <p className="parText">
            Провести переговоры со специалистами IMEDIA Solutions и поставить
            предварительную задачу можно бесплатно. Если стоимость будет
            неприемлемой, то мы всегда готовы предложить варианты ее снижения.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
