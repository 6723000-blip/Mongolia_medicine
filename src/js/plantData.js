
const plants = {
  rosehip: {
    mn: "Нохойн хошуу",
    en: "Prickly Wild Rose",
    scientific: "Rosa acicularis",
    image: "./img/rosehip.jpg",
    descriptionMn:
      "Жимс нь витамин C болон антиоксидант нэгдлүүд агуулдаг.",
    descriptionEn:
      "The fruits contain vitamin C and antioxidant compounds.",
    useMn:
      "Жимсийг уламжлалт байдлаар цай, ханд бэлтгэхэд хэрэглэдэг.",
    useEn:
      "The fruits are traditionally used to prepare teas and infusions."
  },

  sagebrush: {
    mn: "Агь",
    en: "Fringed Sagebrush",
    scientific: "Artemisia frigida",
    image: "./img/sagebrush.jpg",
    descriptionMn:
      "Үнэрт нэгдэл агуулдаг, уламжлалт хэрэглээтэй ургамал.",
    descriptionEn:
      "An aromatic plant with a history of traditional use.",
    useMn:
      "Үрэвслийн эсрэг боломжит нөлөөг судалж байгаа боловч эмчилгээний үр дүн бүрэн батлагдаагүй.",
    useEn:
      "Potential anti-inflammatory effects are under study, but clinical benefits are not established."
  },

  seabuckthorn: {
    mn: "Чацаргана",
    en: "Sea Buckthorn",
    scientific: "Hippophae rhamnoides",
    image: "./img/seabuckthorn.jpg",
    descriptionMn:
      "Жимс нь каротиноид, витамин болон антиоксидант нэгдэл агуулдаг.",
    descriptionEn:
      "The berries contain carotenoids, vitamins and antioxidant compounds.",
    useMn:
      "Хүнсний бүтээгдэхүүн, шүүс, тос бэлтгэхэд ашигладаг. Эмчилгээний тодорхой үр нөлөөг батлахад нэмэлт судалгаа шаардлагатай.",
    useEn:
      "Used in foods, juices and oils. More research is needed to establish specific medical benefits."
  },

  rhodiola: {
    mn: "Алтан гагнуур",
    en: "Golden Root",
    scientific: "Rhodiola rosea",
    image: "./img/rhodiola.jpg",
    descriptionMn:
      "Үндэс, үндэслэг ишэнд нь биологийн идэвхт нэгдлүүд агуулагддаг.",
    descriptionEn:
      "Its roots and rhizomes contain biologically active compounds.",
    useMn:
      "Ядаргаа, стрессийн чиглэлээр судлагдсан боловч үр дүн нь бүх хэрэглээнд батлагдаагүй.",
    useEn:
      "Studied for fatigue and stress, but benefits are not established for all uses."
  },

  juniper: {
    mn: "Арц",
    en: "Juniper",
    scientific: "Juniperus spp.",
    image: "./img/juniper.jpg",
    descriptionMn:
      "Анхилуун үнэрт тос агуулдаг шилмүүст ургамлын төрөл.",
    descriptionEn:
      "A group of coniferous plants containing aromatic oils.",
    useMn:
      "Уламжлалт ахуйд үнэртүүлэх, уугиулахад хэрэглэж ирсэн. Зарим зүйл нь хортой байж болзошгүй.",
    useEn:
      "Traditionally used for fragrance and fumigation. Some species may be toxic."
  },

  thyme: {
    mn: "Ганга",
    en: "Wild Thyme",
    scientific: "Thymus spp.",
    image: "./img/thyme.jpg",
    descriptionMn:
      "Үнэрт тос, фенолын нэгдэл агуулдаг ургамлын төрөл.",
    descriptionEn:
      "A group of aromatic plants containing essential oils and phenolic compounds.",
    useMn:
      "Зарим зүйлийг уламжлалт байдлаар цай бэлтгэхэд хэрэглэдэг. Зүйлээс хамаарч найрлага нь өөр.",
    useEn:
      "Some species are traditionally used in teas. Their chemical composition varies by species."
  },

  khomul: {
    mn: "Хөмүүл",
    en: "Mongolian Allium",
    scientific: "Allium mongolicum",
    image: "./img/khomul.jpg",
    descriptionMn:
      "Сонгинын төрлийн, хүнсэнд хэрэглэгддэг анхилуун ургамал.",
    descriptionEn:
      "An aromatic edible plant belonging to the onion genus.",
    useMn:
      "Хүнсэнд амтлагч болон ногооны зориулалтаар хэрэглэдэг. Эмчилгээний нөлөөг нь тусад нь судлах шаардлагатай.",
    useEn:
      "Used as a vegetable and seasoning. Its medicinal effects require further investigation."
  }
};

// Аймаг тус бүрийн урьдчилсан жишээ.
// Тархалтын баталгаатай бүртгэл гэж үзэхгүй.

const provincePlantKeys = {
  Arkhangai: ["rosehip", "thyme"],
  "Bayan-Olgii": ["rhodiola", "juniper"],
  Bayankhongor: ["sagebrush", "seabuckthorn"],
  Bulgan: ["rosehip", "thyme"],
  "Darkhan-Uul": ["seabuckthorn", "rosehip"],
  Dornod: ["sagebrush", "thyme"],
  Dornogovi: ["sagebrush", "khomul"],
  Dundgovi: ["sagebrush", "thyme"],
  "Govi-Altai": ["juniper", "sagebrush"],
  Govisumber: ["sagebrush", "thyme"],
  Khentii: ["rosehip", "thyme"],
  Khovd: ["seabuckthorn", "juniper"],
  Khuvsgul: ["rhodiola", "rosehip"],
  Orkhon: ["rosehip", "thyme"],
  Ovorkhangai: ["thyme", "sagebrush"],
  Omnogovi: ["khomul", "sagebrush"],
  Selenge: ["seabuckthorn", "rosehip"],
  Sukhbaatar: ["sagebrush", "thyme"],
  Tov: ["rosehip", "sagebrush"],
  Uvs: ["seabuckthorn", "juniper"],
  Zavkhan: ["rhodiola", "juniper"],
  Ulaanbaatar: ["rosehip", "thyme"]
};

export function getPlantsByProvince(key) {
  const keys = provincePlantKeys[key] || [];
  return keys.map(plantKey => plants[plantKey]).filter(Boolean);
}
