// components/TrustedCompanies.tsx
export default function TrustedCompanies() {
  const companies = [
    { name: "Krispy", icon: "" },
    { name: "neocoin", icon: "🌐" },
    { name: "MIMO", icon: "🔷" },
    { name: "off-white", icon: "" },
    { name: "HouseMade", icon: "🏠" },
    { name: "Y Combinator", icon: "🟧" },
    { name: "door2day", icon: "🏘️" },
    { name: "", icon: "➤" },
  ];

  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8">
        Trusted by 500+ global companies
      </h2>
      <div className="flex flex-wrap justify-center gap-8 text-gray-500">
        {companies.map((company, index) => (
          <div key={index} className="flex items-center space-x-2 text-lg font-semibold">
            {company.icon && (
              <span className="text-xl">{company.icon}</span>
            )}
            {company.name && (
              <span>{company.name}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
