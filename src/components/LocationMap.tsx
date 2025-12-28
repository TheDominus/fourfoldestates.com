import { MapPin, Navigation, Clock } from "lucide-react";

export const LocationMap = () => {
  return (
    <section id="location" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Location
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-foreground mt-2 mb-4">
            Prime Location in Tungri
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strategically located in Tungri, Chaibasa with excellent connectivity 
            and surrounded by natural beauty.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14688.847876440066!2d85.6285!3d22.5524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e3c0c2c2c2c1%3A0x1234567890abcdef!2sTungri%2C%20Chaibasa%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FourFold Estates Location - Tungri, Chaibasa"
            />
          </div>

          {/* Location Info */}
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Project Address</h3>
                  <p className="text-muted-foreground text-sm">
                    FourFold Estates<br />
                    Tungri, Chaibasa<br />
                    West Singhbhum, Jharkhand
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Navigation className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Nearby Landmarks</h3>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Chaibasa Railway Station - 5 km</li>
                    <li>• District Hospital - 4 km</li>
                    <li>• Central Market - 3 km</li>
                    <li>• Schools & Colleges - 2 km</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Site Visit Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Monday - Saturday<br />
                    10:00 AM - 6:00 PM<br />
                    <span className="text-primary">Appointments recommended</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
