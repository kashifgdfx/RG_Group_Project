const Configurations = () => {
  const flats = [
    {
      title: "3 BHK + 3T",
      area: "1276-1572 Sq.Ft",
      desc: "Perfect for modern families seeking a balance between luxury and functionality.",
      price: "15 Lakh*",
      features: ["Spacious Bedrooms", "Modular Kitchen", "Panoramic Balconies"]
    },
    {
      title: "4 BHK + 3T",
      area: "2185 Sq.Ft",
      desc: "Experience the ultimate in space and exclusivity with our grand 4 BHK homes.",
      price: "20 Lakh*",
      features: ["Extra-spacious Living", "Designer Bathrooms", "Premium Decor"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-charcoal mb-4">Premium Configurations</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {flats.map((flat, index) => (
            <div key={index} className="luxury-card group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-serif text-charcoal mb-2">{flat.title}</h3>
                  <span className="text-gold font-bold text-sm tracking-widest uppercase">{flat.area}</span>
                </div>
                <div className="text-right">
                  <p className="text-charcoal font-bold text-xl">{flat.price}</p>
                  <p className="text-slate text-xs uppercase italic">Booking Amount</p>
                </div>
              </div>
              
              <p className="text-slate mb-6 leading-relaxed">{flat.desc}</p>
              
              <ul className="space-y-3 mb-8">
                {flat.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-charcoal text-sm">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full py-3 border border-charcoal text-charcoal font-medium uppercase text-sm group-hover:bg-charcoal group-hover:text-white transition-all duration-300">
                View Floor Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Configurations;