const countries = [
  {
    code: "us",
    name: "United States",
    flag: "🇺🇸",
  },
  {
    code: "de",
    name: "Germany",
    flag: "🇩🇪",
  },
  {
    code: "fr",
    name: "France",
    flag: "🇫🇷",
  },
  {
    code: "pk",
    name: "Pakistan",
    flag: "🇵🇰",
  },
  {
    code: "gb",
    name: "United Kingdom",
    flag: "🇬🇧",
  },
  {
    code: "ca",
    name: "Canada",
    flag: "🇨🇦",
  },
  {
    code: "jp",
    name: "Japan",
    flag: "🇯🇵",
  },
  {
    code: "cn",
    name: "China",
    flag: "🇨🇳",
  },
  {
    code: "it",
    name: "Italy",
    flag: "🇮🇹",
  },
  {
    code: "br",
    name: "Brazil",
    flag: "🇧🇷",
  },
];

const FooterBottom = () => {
  return (
    <div className="border-t border-gray-200 bg-gray-100">
      <div className="mx-auto flex max-w-360 items-center justify-between px-4 py-6">
        <p className="text-gray-500"> &copy; 2023 Ecommerce.</p>

        <select
          className="cursor-pointer bg-transparent text-gray-700 outline-none"
          defaultValue="us"
        >
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.flag} {country.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FooterBottom;
