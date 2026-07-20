const ProjectOverview = () => {
  return (
    <section className="py-20 bg-stone">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-charcoal mb-4">About RG's Pleiaddes</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-slate text-lg leading-relaxed">
            Designed with modern families in mind, RG's Pleiaddes offers 3 & 4 BHK flats, 
            ensuring spacious living with world-class amenities across 8 acres.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Project Size", value: "8 Acres" },
            { label: "Green Spaces", value: "70%+" },
            { label: "Towers", value: "6 Iconic" },
            { label: "Clubhouse", value: "50k Sq.Ft" }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 border-b-4 border-gold text-center hover:shadow-xl transition-all duration-300">
              <h4 className="text-gold font-bold text-2xl mb-2">{stat.value}</h4>
              <p className="text-charcoal uppercase tracking-wider text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Brochure/Visit Buttons */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <button className="bg-charcoal text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-gold transition-all duration-300">
            Download Brochure
          </button>
          <button className="bg-white border border-charcoal text-charcoal px-8 py-3 uppercase tracking-widest text-sm hover:bg-charcoal hover:text-white transition-all duration-300">
            Book Free Site Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;