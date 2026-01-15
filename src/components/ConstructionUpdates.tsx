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
    date: "July 2024",
    title: "Prime Land Identification",
    description:
      "Identification of prime land parcel for the project based on location, access, and development potential.",
    status: "completed",
    image:
      "https://lh3.googleusercontent.com/d/1lKLcq2WBdjB62wvloL_npusq0lW2RGwZ",
  },
  {
    date: "July 2024",
    title: "Site Survey",
    description:
      "Detailed site survey conducted to assess topography, boundaries, and feasibility.",
    status: "completed",
    image:
      "https://lh3.googleusercontent.com/d/1JVvX1fWvbzRsWW11c0DulV3DHIuiCDI3",
  },
  {
    date: "August 2024",
    title: "Initial Legal Clearance",
    description:
      "Preliminary legal verification completed to ensure clear ownership and compliance.",
    status: "completed",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80",
  },
  {
    date: "September 2024",
    title: "Land Demarcation",
    description:
      "Official demarcation of land boundaries completed on-site.",
    status: "completed",
    image:
      "https://lh3.googleusercontent.com/d/1WWvBsPSLQtYThtRBtkvbJDoq2jmoQ9Pw",
  },
  {
    date: "October 2024",
    title: "Bhoomi Pujan",
    description:
      "Traditional Bhoomi Pujan ceremony conducted on 2nd October (Vijay Dashmi) marking the start of the project.",
    status: "completed",
    image:
      "https://lh3.googleusercontent.com/d/1bKZRaR_oO38fWNT37_xw2QHSc3-Wk9UD",
  },
  {
    date: "November 2024",
    title: "Soil Testing",
    description:
      "Comprehensive soil testing carried out to determine foundation design.",
    status: "completed",
    image:
      "https://lh3.googleusercontent.com/d/1xMfm-WMHuJk79OpdBE0M1-C-WT1Q1jLi",
  },
  {
    date: "Ongoing",
    title: "Map Preparation",
    description:
      "Architectural and layout map preparation currently in progress.",
    status: "in-progress",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    date: "Q4 2025–2026",
    title: "Final Legal Approvals",
    description:
      "Statutory and regulatory approvals are underway and expected to be completed in Q4.",
    status: "in-progress",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
  },
  {
    date: "",
    title: "Foundation Work Begins",
    description: "Excavation and foundation laying for the first phase of residential units has commenced.",
    status: "upcoming",
    //image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    date: "",
    title: "Infrastructure Development",
    description: "Roads, drainage systems, and utility connections will be installed throughout the development.",
    status: "upcoming",
  },
  {
    date: "",
    title: "Structure Construction",
    description: "Vertical construction of residential units with modern architectural features.",
    status: "upcoming",
  },
  {
    date: "",
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
