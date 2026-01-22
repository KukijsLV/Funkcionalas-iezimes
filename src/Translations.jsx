import TranslationRow from "./TranslationRow";

const translations = [
  { en: "Feature", lv: "Funkcionalitāte" },
  { en: "Scenario", lv: "Scenārijs" },
  { en: "Given", lv: "Ja" },
  { en: "When", lv: "Kad" },
  { en: "Then", lv: "Tad" },
  { en: "And", lv: "Un" },
  { en: "But", lv: "Bet" },
];

function Translations() {
  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Angļu valodā</th>
          <th>Latviešu valodā</th>
        </tr>
      </thead>
      <tbody>
        {translations.map((t, index) => (
          <TranslationRow key={index} en={t.en} lv={t.lv} />
        ))}
      </tbody>
    </table>
  );
}

export default Translations;
