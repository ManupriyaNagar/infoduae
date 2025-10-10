"use client";

export default function InvestmentManagementDark() {
  return (
    <section className="bg-black text-white font-sans">
      {/* Hero Section */}
      <div className="container mx-auto  py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-green-600 font-medium mb-2">
            Professional Fund Management
          </h3>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
            Comprehensive Investment <br /> & Fund Management Solutions
          </h1>
          <p className="text-gray-200 mb-6">
            At <span className="font-semibold text-green-600">InfodD</span>, we deliver end-to-end fund management solutions designed to navigate complex markets confidently. Our experts combine data-driven insights with strategic planning to ensure your portfolio thrives in all conditions.
          </p>
          <div className="flex flex-wrap gap-8 mt-8">
            <div>
              <h4 className="text-3xl font-bold text-green-600">10M+</h4>
              <p className="text-sm text-gray-400">Assets Managed</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-green-600">16+</h4>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-green-600">1000+</h4>
              <p className="text-sm text-gray-400">Clients Served</p>
            </div>
          </div>
        </div>

        <div className="bg-[#111111] shadow-xl rounded-3xl p-10 border border-gray-800">
          <h3 className="text-2xl font-semibold mb-4 text-green-600">
            Our Investment Services
          </h3>
          <p className="text-gray-400 mb-6">
            Expert strategies designed to maximize growth while minimizing risk with proactive portfolio management.
          </p>
          <ul className="space-y-3 text-gray-400">
            <li>✅ Risk Management</li>
            <li>✅ Portfolio Optimization</li>
            <li>✅ Expert Advisory</li>
            <li>✅ Global Market Access</li>
          </ul>
        </div>
      </div>

      {/* Professional Forex Fund Management */}
      <div className="bg-white text-black py-20 ">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-black text-green-600">
            Professional Forex Fund Management
          </h2>
          <p className="text-gray-800 max-w-3xl mx-auto mb-8">
            InfodD provides tailored Forex Fund Management for investors, corporates, and retail clients in Currency, Commodity, and Crypto markets. Our goal: consistent, low-risk performance with capital protection.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className=" p-8 rounded-2xl shadow-md border border-gray-800">
              <h4 className="font-semibold mb-2 text-green-600">Risk Strategy</h4>
              <p className="text-gray-900 text-sm">
                Capped at 2% per trade with fixed stop-loss and 1:2–1:3 risk-reward. Maximum drawdown limited to 20%.
              </p>
            </div>
            <div className=" p-8 rounded-2xl shadow-md border border-gray-800">
              <h4 className="font-semibold mb-2 text-green-600">Investment Terms</h4>
              <p className="text-gray-900 text-sm">
                Minimum investment: <strong>$10,000</strong>. Expected annual return: up to <strong>60%</strong>.
              </p>
            </div>
            <div className=" p-8 rounded-2xl shadow-md border border-gray-800">
              <h4 className="font-semibold mb-2 text-green-600">Fee Structure</h4>
              <p className="text-gray-900 text-sm">
                No management fee. Profit-sharing model: <strong>50% on profits only</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Importance of Investment Management */}
      <div className=" bg-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-green-600">
          Why Investment Management Matters
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-16">
          We apply data-driven precision to manage your investments, ensuring steady growth and resilience in volatile markets.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left container mx-auto ">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-800">
            <h4 className="text-xl font-semibold mb-3 text-green-600">Maximizing Returns</h4>
            <p className="text-gray-900 text-sm mb-4">
              Optimize performance through in-depth market analysis and adaptive strategies.
            </p>
            <ul className="text-sm text-gray-900 space-y-2">
              <li>✔ Advanced market insights</li>
              <li>✔ Data-driven decisions</li>
              <li>✔ Continuous optimization</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-800">
            <h4 className="text-xl font-semibold mb-3 text-green-600">Risk Mitigation</h4>
            <p className="text-gray-900 text-sm mb-4">
              Protect investments from market volatility with proactive risk strategies.
            </p>
            <ul className="text-sm text-gray-900 space-y-2">
              <li>✔ Real-time risk tracking</li>
              <li>✔ Diversified portfolios</li>
              <li>✔ Market resilience</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-800">
            <h4 className="text-xl font-semibold mb-3 text-green-600">Liquidity Management</h4>
            <p className="text-gray-900 text-sm mb-4">
              Ensure accessible funds without compromising long-term growth opportunities.
            </p>
            <ul className="text-sm text-gray-900 space-y-2">
              <li>✔ Optimal asset allocation</li>
              <li>✔ Flexible withdrawals</li>
              <li>✔ Emergency fund access</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Personalized Investment Services */}
      <div className="bg-white py-20 ">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-black text-green-600">
            Tailored Investment Solutions
          </h2>
          <p className="text-gray-900 max-w-3xl mx-auto">
            Innovative strategies crafted to help you achieve financial freedom with clarity, security, and transparency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 container mx-auto">
          {[
            {
              title: "Personalized Investment Strategies",
              desc: "Each client is unique. Portfolios are designed to align with your goals and risk appetite.",
              items: ["Custom portfolio design", "Risk assessment", "Goal-driven planning"],
            },
            {
              title: "Diverse Asset Management",
              desc: "Equities, bonds, real estate, and crypto a multi-asset approach to balance risk and maximize returns.",
              items: ["Global diversification", "Alternative investments", "Multi-asset portfolios"],
            },
            {
              title: "Ongoing Performance Monitoring",
              desc: "We continuously monitor and rebalance portfolios to adapt to dynamic markets.",
              items: ["Real-time tracking", "Regular rebalancing", "Market adaptation"],
            },
            {
              title: "Transparent Reporting",
              desc: "Stay informed with clear, detailed updates on your portfolio’s performance.",
              items: ["Detailed analytics", "Periodic insights", "24/7 support"],
            },
          ].map((service, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-md border border-gray-800 text-left">
              <h3 className="text-xl font-semibold mb-3 text-green-600">{service.title}</h3>
              <p className="text-gray-900 text-sm mb-4">{service.desc}</p>
              <ul className="text-gray-900 text-sm space-y-2 mb-6">
                {service.items.map((item, idx) => (
                  <li key={idx}>✔ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
