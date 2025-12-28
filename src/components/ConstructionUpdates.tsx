import { CheckCircle, Clock, CircleDashed } from "lucide-react";

type UpdateStatus = "completed" | "in-progress" | "upcoming";

interface Update {
  date: string;
  title: string;
  description: string;
  status: UpdateStatus;
  image?: string;
}

const updates: Update[] = [
  {
    date: "December 2024",
    title: "Land Acquisition Complete",
    description: "Successfully acquired the prime land parcel in Tungri, Chaibasa. Legal clearances and documentation finalized.",
    status: "completed",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    date: "January 2025",
    title: "Site Preparation & Survey",
    description: "Comprehensive site survey completed. Ground leveling and boundary marking in progress.",
    status: "completed",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    date: "February 2025",
    title: "Foundation Work Begins",
    description: "Excavation and foundation laying for the first phase of residential units has commenced.",
    status: "in-progress",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    date: "Q2 2025",
    title: "Infrastructure Development",
    description: "Roads, drainage systems, and utility connections will be installed throughout the development.",
    status: "upcoming",
  },
  {
    date: "Q3 2025",
    title: "Structure Construction",
    description: "Vertical construction of residential units with modern architectural features.",
    status: "upcoming",
  },
  {
    date: "Q4 2025",
    title: "Finishing & Handover",
    description: "Interior finishing, landscaping, and preparation for handover to homeowners.",
    status: "upcoming",
  },
];

const statusConfig = {
  completed: {
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-100",
    label: "Completed",
  },
  "in-progress": {
    icon: Clock,
    color: "text-primary",
    bgColor: "bg-primary/10",
    label: "In Progress",
  },
  upcoming: {
    icon: CircleDashed,
    color: "text-muted-foreground",
    bgColor: "bg-muted",
    label: "Upcoming",
  },
};

export function ConstructionUpdates() {
  const completedCount = updates.filter((u) => u.status === "completed").length;
  const progressPercentage = Math.round((completedCount / updates.length) * 100);

  return (
    <section id="updates" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">
            Construction Updates
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Project Timeline
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Track the progress of FourFold Estates as we build your dream community.
          </p>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Overall Progress</span>
              <span className="font-medium text-foreground">{progressPercentage}%</span>
            </div>
            <div className="h-3 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            {updates.map((update, index) => {
              const config = statusConfig[update.status];
              const StatusIcon = config.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 mb-12 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary z-10" />

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${isEven ? "md:pr-8" : "md:pl-8"}`}>
                    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${config.bgColor} ${config.color}`}>
                          <StatusIcon className="inline h-3 w-3 mr-1" />
                          {config.label}
                        </span>
                        <span className="text-sm text-muted-foreground">{update.date}</span>
                      </div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                        {update.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {update.description}
                      </p>
                      {update.image && (
                        <img
                          src={update.image}
                          alt={update.title}
                          className="mt-4 rounded-md w-full h-40 object-cover"
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
