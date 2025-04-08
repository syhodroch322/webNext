import { Box, Typography } from "@mui/material";
import React from "react";

const RentText = () => {
  return (
    <Box sx={{ maxWidth: "1240px", margin: "100px auto" }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "38px", md: "48px" }, fontWeight: 700 }}
        >
          Оренда крана маніпулятора
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "40px 16px",
        }}
      >
        <Box flex={1}>
          <Typography sx={{ mb: 5 }}>
            Ми допоможемо Вам реалізувати будь-які поставлені завдання в сферах
            діяльності, де фізично безсила людська рука. Ми задіємо тільки
            якісні і надійні крани маніпулятори, що безперечно виступає таким
            собі гарантом швидкого виконання Вашого замовлення.
          </Typography>
          <Typography>
            Навіть якщо Ви сумніваєтеся в необхідності задіяти кран-маніпулятор
            для здійснення певних завдань або не знайшли їх у списку пропозицій
            — варто звернутися до нас за допомогою. Життєвих ситуацій, де є
            потреба у кран-маніпулятор, досить таки багато, тому ми не
            розписували все окремі випадки.
          </Typography>
        </Box>

        <Box flex={1}>
          <ul style={{ paddingLeft: "20px", margin: 0 }}>
            <li style={{ marginBottom: "16px" }}>
              <Typography>
                Перевезення{" "}
                <b>
                  будівельних матеріалів, контейнерів, гаражів, кіосків,
                  блок-кімнат
                </b>
                , верстатів і практично всіх габаритних конструкцій, де потрібно
                автокран або кран-маніпулятор.
              </Typography>
            </li>
            <li style={{ marginBottom: "16px" }}>
              <Typography>
                Монтаж / демонтаж обладнання, в т.ч. в виробничих приміщеннях,
                де обмежені можливості під’їзду.
              </Typography>
            </li>
            <li style={{ marginBottom: "16px" }}>
              <Typography>Посадка дерев і чагарників.</Typography>
            </li>
            <li style={{ marginBottom: "16px" }}>
              <Typography>Послуги крана-маніпулятора з грейфером.</Typography>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default RentText;
