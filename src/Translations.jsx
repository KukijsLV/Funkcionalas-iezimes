import TranslationRow from "./TranslationRow";

const translations = [
  { en: "Feature", lv: "Funkcionālā iezīme" },
  { en: "Scenario", lv: "Scenārijs" },
  { en: "Given", lv: "Kad" },
  { en: "When", lv: "Ja" },
  { en: "Then", lv: "Tad" },
  { en: "And", lv: "Un" },
  { en: "Or", lv: "Vai" },
  { en: "But", lv: "Bet" },
  { en: "Backround", lv: "Kontekts" },
  { en: "Rule", lv: "Noteikums" },
  { en: "Scenario Outline", lv: "Scenārija paraugs" },
  { en: "Examples", lv: "Piemēri" },
  { en: "User story", lv: "Lietotājstāsts" },
  
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
